function promiseAll(functions) {
    return new Promise((resolve, reject) => {
      let remainingPromises = functions.length;
      let resolvedValues = new Array(functions.length);
      let rejectedReason = null;
  
      functions.forEach((fn, index) => {
        fn()
          .then((value) => {
            resolvedValues[index] = value;
            remainingPromises--;
            if (remainingPromises === 0) {
              resolve(resolvedValues);
            }
          })
          .catch((reason) => {
            if (!rejectedReason) {
              rejectedReason = reason;
              reject(rejectedReason);
            }
          });
      });
    });
  }
  