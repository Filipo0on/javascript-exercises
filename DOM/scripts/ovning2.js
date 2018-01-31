
/*

let btn1 = document.getElementById("btn1");
let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");

btn1.addEventListener("click", function(){

  console.log(input1.value, input2.value);
    }
)


let link = document.getElementById("link1")
let btn2 = document.getElementById("btn2")
let hreflang = link1.getAttribute("hreflang")
let target = link1.getAttribute("target")
let href = link1.getAttribute("href")


btn2.addEventListener("click", function(){

        console.log(link.id);
        console.log(hreflang);
        console.log(target);
        console.log(href);
    }
)



let paragraph1 = document.createElement("h1");
let text1 = document.createTextNode("My paragraph text");
paragraph1.appendChild(text1);
let existingElement1 = document.getElementsByTagName("div")[0];
existingElement1.appendChild(paragraph1);

let paragraph = document.createElement("p");
let text = document.createTextNode("My paragraph text");
paragraph.appendChild(text);
let existingElement = document.getElementsByTagName("div")[0];
existingElement.appendChild(paragraph);

let x = document.createElement("IMG");
x.setAttribute("width", "300");
x.setAttribute("height", "200");
x.setAttribute("src", "Tree.jpg");
document.body.appendChild(x);



let existingtable = document.getElementById("table")
let addrow = document.getElementById("btn3")
let delrow = document.getElementById("btn4")




btn3.addEventListener("click", function () {


    let row = existingtable.insertRow(0);
    let rowcellett = row.insertCell(0);
    let rowcelltwo = row.insertCell(1);
    let rowcellthree = row.insertCell(2);

    rowcellett.innerHTML = "123";
    rowcelltwo.innerHTML = "123";
    rowcellthree.innerHTML = "123";



})

btn4.addEventListener("click", function () {


    existingtable.deleteRow(0)

})






window.onresize = windowy;


function windowy() {

    console.log("height", window.innerHeight, "width", window.innerWidth);

}

*/



let input = document.getElementById("doe");
let value = input.getAttribute("value")


doe.addEventListener("keyup", function () {
    console.clear();
    console.log(doe.value);
    console.log(value);
})











