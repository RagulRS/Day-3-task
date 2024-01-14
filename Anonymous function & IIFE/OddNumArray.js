function oddNum(val){
    var num=[];
for(let i=0;i<val.length;i++){
    if(val[i]%2==1){
        num.push(val[i]);
    }
}
return num;
};

let arr=[1,2,3,4,5,6,7,8];
console.log(oddNum(arr));