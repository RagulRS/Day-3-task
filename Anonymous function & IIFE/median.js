function findMedian(val1, val2) {
    let mergeArr= [...val1, ...val2];
    mergeArr= mergeArr.sort();
    let length = mergeArr.length;
    
    if (length %2 === 0) {
        const middle1= mergeArr[length/2 -1];
        const middle2= mergeArr[length/2];
        return (middle1 + middle2)/2;
    }else{
        return mergeArr[Math.floor(length/2)];
    }
}


const num1=[1,3,4,5];
const num2=[2];
let median= findMedian(num1, num2);
console.log(median);