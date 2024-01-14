function capitalize(str) {
   
    var string=[];
    
    for(let i=0;i<str.length;i++){
        
        const words = str[i].split(" ");
        for(let j=0;j<words.length;j++){
    words[j]= words[j].charAt(0).toUpperCase() + words[j].slice(1).toLowerCase();
    }
   str[i]= words.join(" ");
}
return str;
};

let movies=["ayalaan is the pongal winner", "captainmiller is decent", "merrychristmas was good", "mission is not that good"];
console.log(capitalize(movies));
