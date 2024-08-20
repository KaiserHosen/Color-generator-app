
const generateRGBColor =()=>{
    const r = Math.floor(Math.random()*255)
    const g = Math.floor(Math.random()*255)
    const b = Math.floor(Math.random()*255)

    return `rgb(${r},${b},${g})`


}

const updateColor = ()=>{
    const color = generateRGBColor()
    const colorBox =document.getElementById('colorBox')
    const colorCode = document.getElementById('color-code')
    colorCode.innerText = color
    colorBox.style.backgroundColor = color
}

const copyColorCode = () =>{
    const colorCode = document.getElementById('color-code')
    const inputTag = document.createElement('input')
    document.body.appendChild(inputTag)
    inputTag.value = colorCode.innerText

    inputTag.select()
    document.execCommand('copy')
    document.body.removeChild(inputTag)
    alert('Color Copied to clipboard')
}

document.getElementById('copyButton').addEventListener('click',()=>{
    copyColorCode()
})

function generateNewColorBtn (){
    updateColor()
}

