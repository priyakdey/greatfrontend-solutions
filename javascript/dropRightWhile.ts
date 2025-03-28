export default function dropRightWhile<T>(array: Array<T>,predicate: (value: T, index: number, array: Array<T>) => boolean): Array<T> {
  let curr = array.length - 1;
  while (curr >= 0 && predicate(array[curr], curr, array)) {
    curr--;
  }

  return array.slice(0, curr + 1);

}
