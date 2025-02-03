const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const copy = document.getElementsByClassName('copy-code');

const makeCode = ()=>{
    let code = "#";
    for(let i = 1 ;i<7;i++){
        let digit = Math.floor(Math.random()*16);
        if(digit >9){
            code += String.fromCharCode(65 + digit - 10);
        }else{
            code += digit.toString();
        }
    }
    return code;
}

const hexToRgb = (hex) => {
    // Remove the hash at the start if it's there
    hex = hex.replace(/^#/, '');

    // Parse the r, g, b values
    let bigint = parseInt(hex, 16);
    let r = (bigint >> 16) & 255;
    let g = (bigint >> 8) & 255;
    let b = bigint & 255;

    return `rgb(${r}, ${g}, ${b})`;
}
const handlerClick1 = ()=>{
    let hexCode = makeCode();
    let rgbCode1 = hexToRgb(hexCode);
    let rgbCode2 = hexToRgb(btn2.textContent);

    document.querySelector('.copy-code').textContent = `background-image : linear-gradient(to right,${rgbCode1},${rgbCode2})`;
    btn1.textContent = `${hexCode}`;
    
    // Background change
    document.body.style.backgroundImage = `linear-gradient(to right,${rgbCode1},${rgbCode2})`;

}
const handlerClick2 = ()=>{
    let hexCode = makeCode();
    let rgbCode1 = hexToRgb(hexCode);
    let rgbCode2 = hexToRgb(btn1.textContent);

    document.querySelector('.copy-code').textContent = `background-image : linear-gradient(to right,${rgbCode2},${rgbCode1})`;

    btn2.textContent = `${hexCode}`;

    document.body.style.backgroundImage = `linear-gradient(to right,${rgbCode2},${rgbCode1})`;

}
btn1.addEventListener("click",handlerClick1);
btn2.addEventListener("click",handlerClick2);

const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
        alert('Text copied to clipboard');
    }).catch(err => {
        console.log('Error in copying text: ', err);
    });
}

copy[0].addEventListener("click", () => {
    const textToCopy = document.querySelector('.copy-code').textContent;
    copyToClipboard(textToCopy);
});