export default function compact<T>(array: Array<T | null | undefined | false | 0 | ''>): Array<T> {
  return array.filter((curr) => curr);
}
