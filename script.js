var features = document.querySelector(".features")
let ft = [
    {ftname: "Height"},
    {ftname: "Weight"},
    {ftname: "Age"},
    {ftname: "Ethnicity"},
    {ftname: "Description"}

]
let temp = "";
ft.forEach(feat => {
    temp+=`<div class="ft" id="ft1">
                <label for="${feat.ftname}">${feat.ftname}</label>
                <input type="text" name="${feat.ftname}"  id="${feat.ftname}">
            </div>`
})

features.innerHTML = temp;


let images = [
    {img: "https://www.google.com/imgres?q=blonde%20img&imgurl=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fthumbnails%2F048%2F028%2F197%2Fsmall%2Fa-beautiful-blonde-woman-with-long-hair-in-a-white-tshirt-looking-at-the-camera-and-smiling-photo.jpg&imgrefurl=https%3A%2F%2Fwww.vecteezy.com%2Ffree-photos%2Fblonde-teen-girl&docid=6oZwrKeNDbkxHM&tbnid=l2mTDYqHvLwzXM&vet=12ahUKEwjryriRsfSJAxVnAtsEHWfDOb4QM3oFCIABEAA..i&w=200&h=200&hcb=2&ved=2ahUKEwjryriRsfSJAxVnAtsEHWfDOb4QM3oFCIABEAA"},
    {img: "https://www.google.com/imgres?q=latina%20girl%20image&imgurl=https%3A%2F%2Fwallpapers.com%2Fimages%2Fhd%2Flatina-girl-in-sun-24jsf620blc0az41.jpg&imgrefurl=https%3A%2F%2Fwallpapers.com%2Fwallpapers%2Flatina-girl-in-sun-24jsf620blc0az41.html&docid=gcMdN2Lj9uEJ9M&tbnid=oOrNsxuTDI57RM&vet=12ahUKEwi367SztfSJAxWvRfEDHciDMOkQM3oECEYQAA..i&w=1072&h=1335&hcb=2&ved=2ahUKEwi367SztfSJAxWvRfEDHciDMOkQM3oECEYQAA"},
    {img: "https://www.google.com/imgres?q=russian%20girl%20image&imgurl=https%3A%2F%2Ft3.ftcdn.net%2Fjpg%2F07%2F91%2F48%2F44%2F360_F_791484453_uDADt3ycj23BTzF79y8iCcKjALzjtZeO.jpg&imgrefurl=https%3A%2F%2Fstock.adobe.com%2Fsearch%3Fk%3D%2522russian%2Bbeauty%2522&docid=VJh0KqlspY8tUM&tbnid=noYjFZ3HZe1EuM&vet=12ahUKEwins-rZtfSJAxU9evEDHWncMuIQM3oECHMQAA..i&w=644&h=360&hcb=2&ved=2ahUKEwins-rZtfSJAxU9evEDHWncMuIQM3oECHMQAA"}
]
console.log(images.length)

let height = document.querySelector("#Height")
let weight = document.querySelector("#Weight")
let age = document.querySelector("#Age")
let eth = document.querySelector("#Ethnicity")
let desc = document.querySelector("#Description")

// let inh = document.querySelector(".h")
// let inw = document.querySelector(".w")
// let ina = document.querySelector(".a")
// let ine = document.querySelector(".e")
// let ind = document.querySelector(".d")


let close = document.querySelector("#close")
let invoice = document.querySelector(".invoice")
let book = document.querySelector("#book")
console.log(height)
close.addEventListener("click", function(){ 
    invoice.style.display = "none"
 });
book.addEventListener("click", function(){ 

    if(height.value == "" || weight.value =="" || age.value=="" || eth.value=="" || desc.value==""){
        alert("You must fillout all input fields")
    }
else{

    invoice.style.display = "block"
    let inh = document.querySelector(".h").innerHTML = height.value
let inw = document.querySelector(".w").innerHTML = weight.value
let ina = document.querySelector(".a").innerHTML = age.value
let ine = document.querySelector(".e").innerHTML = eth.value
let ind = document.querySelector(".d").innerHTML = desc.value
}

 });