export default function setCancellableInterval(callback: Function, delay?: number, ...args: Array<any>): () => void {
  delay = delay ?? 0;
  const intervalId = setInterval(callback, delay, ...args);

  return function cancel() {
    clearInterval(intervalId);
  }

}
