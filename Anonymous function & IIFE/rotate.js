function rotateArray(arr, k) {
    const n = arr.length;
   
    k = k % n;
  
    const rotatedArray = arr.slice(n - k).concat(arr.slice(0, n - k));
  
    return rotatedArray;
  }
  
  const RArray = [1, 2, 3, 4, 5];
  const rotations = 2;
  const rotatedArray = rotateArray(RArray, rotations);
  console.log("Rotated array:", rotatedArray);
  