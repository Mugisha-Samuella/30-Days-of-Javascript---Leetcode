function chunkArray(arr, size) {
    // Initialize empty array to store chunks
    let chunked = [];
    // Initialize index for current chunk
    let index = 0;

    // Loop through array until index is less than array length
    while (index < arr.length) {
        // Slice array from current index to index + size and push into chunked
        chunked.push(arr.slice(index, index + size));
        // Move to next chunk (increment index by size)
        index += size;
    }

    return chunked;
}
