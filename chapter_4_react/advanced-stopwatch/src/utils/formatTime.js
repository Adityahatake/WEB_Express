export const formatTime = (ms) => {
  const min = Math.floor(ms / 60000);
  const sec = Math.floor((ms % 60000) / 1000);
  const centi = Math.floor((ms % 1000) / 10);

  return {
    min: min.toString().padStart(2, '0'),
    sec: sec.toString().padStart(2, '0'),
    centi: centi.toString().padStart(2, '0')
  };
};
