const URL = "https://restcountries.com/v3.1/all"

const myreq = new XMLHttpRequest ();
myreq.addEventListener("load", function ()
{
    const obj = JSON.parse(this.response)
    for(let val of obj)
    { 
        console.log("Country: " + val.name.common + " >> " + "Region: " + val.region + " >> " + "SubRegion: " + val.subregion + " >> " + "Population: " +val.population)
        
    }
});

myreq.open("GET", URL);
myreq.send()
