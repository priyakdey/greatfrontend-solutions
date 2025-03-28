export default function clamp(value: number, lower: number, upper: number): number {
    if (value >= lower && value <= upper) {
        return value;
    } else if (value < lower) {
        return lower;
    } else {
        return upper;
    }
}

