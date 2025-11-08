#!/usr/bin/env node
// tempreture_convertor.js
// Simple temperature conversion utility for Node.js
// Exports conversion functions and provides a small CLI when run directly.

const UNITS = {
    c: "C",
    celsius: "C",
    f: "F",
    fahrenheit: "F",
    k: "K",
    kelvin: "K",
};

function normalizeUnit(u) {
    if (!u) return null;
    const key = String(u).trim().toLowerCase();
    return UNITS[key] || null;
}

function toFixedSafe(n, digits = 2) {
    if (!isFinite(n)) return NaN;
    return Number.parseFloat(n.toFixed(digits));
}

function cToF(c) {
    return c * 9 / 5 + 32;
}
function fToC(f) {
    return (f - 32) * 5 / 9;
}
function cToK(c) {
    return c + 273.15;
}
function kToC(k) {
    return k - 273.15;
}
function fToK(f) {
    return fToC(f) + 273.15;
}
function kToF(k) {
    return cToF(kToC(k));
}

function convert(value, fromUnit, toUnit, options = {}) {
    const digits = options.round ?? 2;
    const from = normalizeUnit(fromUnit);
    const to = normalizeUnit(toUnit);
    if (from === null || to === null) {
        throw new Error("Unknown unit. Use C, F or K (case-insensitive).");
    }
    if (typeof value !== "number" || Number.isNaN(value)) {
        throw new Error("Value must be a finite number.");
    }
    if (from === to) return { value: toFixedSafe(value, digits), unit: to };

    let result;
    if (from === "C" && to === "F") result = cToF(value);
    else if (from === "F" && to === "C") result = fToC(value);
    else if (from === "C" && to === "K") result = cToK(value);
    else if (from === "K" && to === "C") result = kToC(value);
    else if (from === "F" && to === "K") result = fToK(value);
    else if (from === "K" && to === "F") result = kToF(value);
    else throw new Error("Conversion path not implemented.");

    return { value: toFixedSafe(result, digits), unit: to };
}

// CLI behavior when run directly: node tempreture_convertor.js <value><unit> <targetUnit>
// Examples:
//   node tempreture_convertor.js 100C F
//   node tempreture_convertor.js 32 F celsius
if (require.main === module) {
    const argv = process.argv.slice(2);
    function usageAndExit(code = 0) {
        console.log("Usage: node tempreture_convertor.js <value><unit> <targetUnit>");
        console.log("Examples:");
        console.log("  node tempreture_convertor.js 100C F");
        console.log("  node tempreture_convertor.js 273.15 K C");
        process.exit(code);
    }

    if (argv.length < 2) usageAndExit(1);

    // parse first arg: may be "100C" or "100" "C"
    let rawValue = argv[0];
    let targetUnit = argv[1];

    let valueStr, fromUnit;
    const combinedMatch = rawValue.match(/^([+-]?[0-9]*\.?[0-9]+)([a-zA-Z]+)$/);
    if (combinedMatch) {
        valueStr = combinedMatch[1];
        fromUnit = combinedMatch[2];
    } else if (argv.length >= 2) {
        // Try: node file.js 100 C F  -> argv[0]=100 argv[1]=C (we already assigned targetUnit=argv[1])
        // If argv.length >=3 then targetUnit is argv[2]
        if (argv.length >= 3) {
            valueStr = rawValue;
            fromUnit = argv[1];
            targetUnit = argv[2];
        } else {
            usageAndExit(1);
        }
    }

    const valueNum = Number(valueStr);
    if (!isFinite(valueNum)) {
        console.error("Invalid numeric value:", valueStr);
        process.exit(1);
    }

    try {
        const res = convert(valueNum, fromUnit, targetUnit, { round: 2 });
        console.log(`${valueNum}${normalizeUnit(fromUnit)} → ${res.value}${res.unit}`);
        process.exit(0);
    } catch (err) {
        console.error("Error:", err.message);
        usageAndExit(1);
    }
}

// Export for programmatic use
module.exports = {
    convert,
    cToF,
    fToC,
    cToK,
    kToC,
    fToK,
    kToF,
};