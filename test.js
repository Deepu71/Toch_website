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

    // Math.random gives rand no btw 0 & 1
    // Math.random()*255 gives rand no btw 0 & 255 in decimal 
    // Math.floor gives roundoff value of It
// console.log(Math.floor(Math.random()*255));
//    `${....}`
// console.log(`random num is ${Math.floor(Math.random()*255)}`);
let r,g,b,color;
r=Math.floor(Math.random()*255)
g=Math.floor(Math.random()*255)
b=Math.floor(Math.random()*255)
color=`rgb(${r},${g},${b})`

      
    document.getElementById("box").style.backgroundColor=color;


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
function sum(num1,num2,p){
    p(num1+num2);
}
function print(res){
    console.log(res);
}
sum(1,2,print);   //calls function sum and provide res to function print(where func print is cld 'callback' fucntion)




let student1={
    age:22,
    phone:98464546,
    name:"gautham",
    address:{
        home:{place:"kozhicode"},
        collage:{place:"ernakulam"}
    }

}
let student2={
    age:22,
    phone:98464546,
    name:"gautham",
    address:{
        home:{place:"kozhicode"},
        collage:{place:"ernakulam"}
    }

}
let student3={
    age:22,
    phone:98464546,
    name:"gautham",
    address:{
        home:{place:"kozhicode"},
        collage:{place:"ernakulam"}
    }

}
let student4={
    age:22,
    phone:98464546,
    name:"gautham",
    address:{
        home:{place:"kozhicode"},
        collage:{place:"ernakulam"}
    }

}
let students=[student1,student2,student3,student4]
console.log(student3.address.collage.place);

function checkName(e){
    let Name=e.target.value
    console.log(Name.length);
    if(Name.length<3 || Name.length>12)
    {
        console.log("error:nmae must be btw 3 & 12");
        document.getElementById("NameError").innerText="must btw 3 & 12"
    }
    else{
     console.log("valid");
     document.getElementById("NameError").innerText="valid"
     document.getElementById("NameError").style.color="green"
    }
        
}

function checkEmail(e){
    let Email=e.target.value
    const emailRegex=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    // console.log(emailRegex.test(Email));
    const isvalid=emailRegex.test(Email);
    console.log(isvalid);
    
    document.getElementById("EmailError").innerText=isvalid? "valid" : "not valid";
    document.getElementById("EmailError").style.color=isvalid? "green" : "red";
    
}

function checkPassword(e){
    let password=e.target.value
    const passwordRegex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const isvalid=passwordRegex.test(password);
    console.log(isvalid);
    document.getElementById("passwordError").innerText=isvalid? "valid" : "not valid";
    document.getElementById("passwordError").style.color=isvalid? "green" : "red";
    
    

}