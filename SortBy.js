function customSort(arr, fn) {
    // Map each element to { element, key } where key is obtained by fn
    let mapped = arr.map(item => ({ original: item, key: fn(item) }));
    
    // Sort mapped array based on key
    mapped.sort((a, b) => a.key - b.key);
    
    // Extract and return sorted elements from mapped array
    return mapped.map(item => item.original);
}
