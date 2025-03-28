export default function fill<T>(array: Array<T>, value: any, start: number = 0, end: number = array.length): Array<T> {
  if (start >= array.length) {
    return array;
  }

  if (end > array.length) {
    end = array.length;
  }

  if (start < 0) {
    start += array.length;
  }
  if (end < 0) {
    end += array.length;
  }

  for (let i = start; i < end; i++) {
    array[i] = value;
  }

  return array;
}
