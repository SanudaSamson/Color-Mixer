const finalColor = document.getElementById("finalColor")
const display = document.getElementById("display")

function colorMixer(){
    let color1 = document.getElementById("color1").value
    let color2 = document.getElementById("color2").value
    let color1Num = document.getElementById("color1Num").value
    let color2Num = document.getElementById("color2Num").value
    display.style.backgroundColor = "color-mix(in srgb,"+color1+" "+color1Num+"%,"+color2+" "+color2Num+"%)"    
    let divBgColor= window.getComputedStyle(display).backgroundColor;
    // console.log(divBgColor)
    // console.log(divBgColor.slice(11,divBgColor.length-1))
    // divBgColor = divBgColor.slice(11,divBgColor.length-1)
    // let rgb = divBgColor.split(" ")
    // console.log(rgb)
    // let rgb2hex = (r, g, b) => {
    //     return '#' + (
    //         (1 << 24) +
    //         (r << 16) +
    //         (g << 8) +
    //         b).toString(16).slice(1)
    // };
    // let hexValue = rgb2hex(rgb[0].toString(16),rgb[1].toString(16),rgb[2].toString(16))
    // console.log(hexValue)
    // document.body.style.backgroundColor = hexValue
    // finalColor.value = hexValue
    // console.log(parseInt(rgb[0],16))
}



