const colors = document.getElementById("colors")
const main = document.getElementById("mainColor")
const section = document.getElementById("hex-values")

function getColorsHtml(){
    let color = document.getElementById("scheme-input").value.substring(1)
    let mode = document.getElementById("scheme-select").value

    //  starting without any html inside main and section

    main.innerHTML = ``
    section.innerHTML = ``

    // fetching Data from API. We need to paste a querystring after the endpoint 

    fetch(`https://www.thecolorapi.com/scheme?hex=${color}&mode=${mode}`)
        .then(res => res.json())
        .then(data => {

            // creating HTML for the main tag

            for(let i = 0; i < data.count; i++){
                const div = document.createElement('div')
                div.classList.add('color')
                div.style.background = data.colors[i].hex.value
                main.appendChild(div)
            }

            // creating HTML for the section tag

            for(let i = 0; i < data.count; i++)
            {
                section.innerHTML += 
                `
                    <p class="hex">${data.colors[i].hex.value}</p>
                `
            }
        })
}

    // adding an eventlistener to the button for excecution of getColorHtml()

document.getElementById("submit-btn").addEventListener('click', getColorsHtml)
