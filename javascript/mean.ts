/**
 * @param {Array<number>} array - Array from which the elements are all numbers.
 * @return {number} Returns mean.
 */
export default function mean(array: number[]): number {
    if (array.length === 0) {
        return NaN;
    }

    const sum = array.reduce((acc, curr) => acc + curr, 0);
    return sum * 1.0 / array.length;
}
