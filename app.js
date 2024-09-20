let btn1 = document.getElementById('mybtn')
let btn2 = document.getElementById('mybtn2')
let copyDiv = document.querySelector('.copyCode')
let rgb1 = '#b0c828';
let rgb2 = '#983fc6';

let hexValue = () =>{
    let  myhexValue = '0123456789abcdef '
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color = color + (myhexValue[Math.floor(Math.random() * 16)]);
    }
   return color;
}
 
const handlemybtn1 = () =>{
     rgb1 = hexValue();
    // console.log(rgb1) ;
    btn1.innerText = rgb1;
    document.body.style.backgroundImage = 
    `linear-gradient(to right, ${rgb1}, ${rgb2})`;
    copyDiv.innerHTML =
     `background-image: linear-gradient(to right, ${rgb1} ,${rgb2})`;
}
const handlemybtn2 = () =>{
     rgb2 = hexValue();
    // console.log(rgb2) ;
    btn2.innerText = rgb2;
    document.body.style.backgroundImage = 
    `linear-gradient(to right, ${rgb1}, ${rgb2})`;
    copyDiv.innerHTML =
     `background-image: linear-gradient(to right, ${rgb1},${rgb2})`;

}

btn1.addEventListener('click',handlemybtn1);
btn2.addEventListener('click',handlemybtn2); 
copyDiv.addEventListener('click' ,() => {
    navigator.clipboard.writeText(copyDiv.innerText);
    alert('copied gradient clipboard')
})