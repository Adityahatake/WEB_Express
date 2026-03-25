# Advanced React Stopwatch

A beautifully designed, feature-rich stopwatch built with React and Vite. It offers advanced functionalities like lap tracking with best/worst lap highlighting, sub-millisecond precision, and a modern glassmorphic UI.

## Features
- **High Precision Timer:** Tracks time down to the hundredths of a second.
- **Lap Tracking:** Record multiple laps while the timer runs.
- **Best/Worst Laps:** Automatically highlights the fastest and slowest laps for quick visual feedback.
- **Glassmorphic UI:** A sleek, modern user interface with smooth animations and transitions.
- **Clean Architecture:** Separated UI logic (Components), business logic (Hooks), and generic functions (Utils).

## Project Structure
This project has been carefully organized following React best practices:
```text
src/
├── assets/                  # Static assets
├── components/
│   └── Stopwatch/           # Main UI component and styles
│       ├── Stopwatch.jsx
│       └── Stopwatch.css
├── hooks/
│   └── useStopwatch.js      # Custom hook managing timer and lap state
├── utils/
│   └── formatTime.js        # Pure function for time formatting
├── App.jsx                  # Root component
├── main.jsx                 # Entry point
└── index.css                # Global styles
```

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Run development server:**
   ```bash
   npm run dev
   ```
3. **Build for production:**
   ```bash
   npm run build
   ```

## Technologies
- React 18
- Vite
- Lucide React (Icons)
- Vanilla CSS
