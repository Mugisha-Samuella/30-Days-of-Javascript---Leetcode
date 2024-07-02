function mergeArrays(arr1, arr2) {
    const idMap = new Map();
    
    // Merge arr1 into idMap
    for (const obj of arr1) {
        const id = obj.id;
        if (!idMap.has(id)) {
            idMap.set(id, { ...obj });
        } else {
            // Merge obj with existing object in idMap
            const existingObj = idMap.get(id);
            for (const key in obj) {
                existingObj[key] = obj[key];
            }
        }
    }
    
    // Merge arr2 into idMap
    for (const obj of arr2) {
        const id = obj.id;
        if (!idMap.has(id)) {
            idMap.set(id, { ...obj });
        } else {
            // Merge obj with existing object in idMap
            const existingObj = idMap.get(id);
            for (const key in obj) {
                existingObj[key] = obj[key];
            }
        }
    }
    
    // Convert idMap values to array and sort by id
    const joinedArray = [...idMap.values()].sort((a, b) => a.id - b.id);
    
    return joinedArray;
}
