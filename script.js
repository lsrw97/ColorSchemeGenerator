const colors = document.getElementById("colors")
const main = document.getElementById("mainColor")
const section = document.getElementById("hex-values")
let html = ''

function getColorsHtml(){
    let color = document.getElementById("scheme-input").value.substring(1)
    let mode = document.getElementById("scheme-select").value
    main.innerHTML = ``
    section.innerHTML = ``
    fetch(`https://www.thecolorapi.com/scheme?hex=${color}&mode=${mode}`)
        .then(res => res.json())
        .then(data => {
            console.log(color)
            console.log(data)
            console.log(data.count)
            console.log(data.colors[0].hex.value)
            for(let i = 0; i < data.count; i++){
                const div = document.createElement('div')
                div.classList.add('color')
                console.log(div)
                div.style.background = data.colors[i].hex.value
                main.appendChild(div)
            }
            for(let i = 0; i < data.count; i++)
            {
                section.innerHTML += 
                `
                    <p class="hex">${data.colors[i].hex.value}</p>
                `
            }
        })
    const div = document.createElement('div')
    div.classList.add('color')
    div.style.background = ''
}

document.getElementById("submit-btn").addEventListener('click', function(){
    getColorsHtml()
})

//problem is that the hex value is #455231 but I need it without the # for the Api

function hex_to_string(str1)
 {

 }