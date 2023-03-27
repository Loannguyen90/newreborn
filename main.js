// console.log("hello");
let weightinput = document.getElementById('weight');
let heightinput = document.getElementById('height');
let calBtn = document.getElementById('calBtn')

let weight, height;
weightinput.addEventListener('change',function(e){
    //get value
    weight = e.target.value; //string
    weight = parseInt(weight);
    console.log("w=" + weight);
})
heightinput.addEventListener('change', function(e){
    height = e.target.value; //string
    height = parseInt(height);
    console.log("h" + height)
})