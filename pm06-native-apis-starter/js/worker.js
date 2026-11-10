/**
 * PM-06 Web Worker — sum integers from 1 to N (set N below when posting message).
 */
self.onmessage = (event) => {
  const n = Number(event.data?.n) || 10000000;
  let sum = 0;
  for (let i = 1; i <= n; i += 1) {
    sum += i;
  }
  self.postMessage({ sum, n });
};
