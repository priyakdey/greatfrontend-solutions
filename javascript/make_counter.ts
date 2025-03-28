export default function makeCounter(initialValue: number = 0): () => number {
    let seed = initialValue;
    return function() {
        return seed++;
    }
}

