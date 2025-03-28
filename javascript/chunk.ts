export default function chunk<T>(array: Array<T>, size = 1): Array<Array<T>> {
    const result: Array<Array<T>> = [];
    const length = array.length;
    let curr = 0;    
    
    while (curr < length) {
        const start = curr;
        const end = Math.min(curr + size, length);
        result.push(array.slice(start, end));
        curr = end;
    }
    
    return result;
}

