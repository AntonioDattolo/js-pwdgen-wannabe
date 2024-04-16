let firstName= prompt("Please, enter your name")
let surname= prompt("Please, enter your surname")
let favColor= prompt("Please, enter your favorite colour")

let succes = `${firstName}${surname}${favColor}\#24\ `

//alert(succes)

document.getElementById("result").innerHTML=`SUCCES: ${succes}`