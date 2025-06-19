// print..
console.log("Hello world!");

function showName(){
    // console.log("John wick");
    // //console.log(document);

    // document --> index.html File

    // console.log(document.getElementsByClassName("ab")[0]);

    // console.log(document.getElementsByClassName("ab")[0].style.color="green");

    // console.log(document.getElementById("toc").style.color="green");
    // document.getElementById("ir").src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLat8bZvhXD3ChSXyzGsFVh6qgplm1KhYPKA&s";

//    if( document.getElementsByClassName("ab")[0].style.color=="red"){
//     document.getElementsByClassName("ab")[0].style.color="green"
//    }else
//    document.getElementsByClassName("ab")[0].style.color="red"



if( document.getElementById("ir").src=="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUPIfiGgUML8G3ZqsNLHfaCnZK3I5g4tJabQ&s"){
    document.getElementById("ir").src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLat8bZvhXD3ChSXyzGsFVh6qgplm1KhYPKA&s"
   }else
   document.getElementById("ir").src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUPIfiGgUML8G3ZqsNLHfaCnZK3I5g4tJabQ&s"

let btncolor;
btncolor= document.getElementsByClassName("ab")[0]
if(btncolor.style.color=="red")
    btncolor.style.color="green"
else
    btncolor.style.color="red"
}

// arrow function.....!
//()=>{}
(() =>{
    console.log("arrow func");
})()

function getName(e) {
    let clr = e.target.value;      
    // console.log(clr);
    document.getElementById("box").style.backgroundColor=clr;
}