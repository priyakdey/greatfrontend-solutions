export default function dropWhile<T>(array: Array<T>,predicate: (value: T, index: number, array: Array<T>) => boolean): Array<T> {
  let curr = 0;
  while (curr < array.length && predicate(array[curr], curr, array)) {
    curr++;
  }

  return array.slice(curr);
}
