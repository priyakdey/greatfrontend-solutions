export default function setCancellableTimeout(callback: Function, delay?: number, ...args: Array<any>): () => void {
  const timeoutId = setTimeout(() => callback.call(null, ...args), delay);

  return function() {
    clearTimeout(timeoutId);
  }

}
