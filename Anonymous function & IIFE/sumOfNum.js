function addition(val){
    let sum=0;
    for(var i=0; i<val.length; i++) {
        sum+=val[i];
    }
    return sum;
};

let num=[1,2,3,4,5,6,7,8];
console.log(addition(arr));