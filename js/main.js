const apiKey = "AIzaSyCQWKPxAAXt1g-T1MHyzkiy3EL8Gzi-tHU";

const palabra = document.querySelector(".palabra");
const buscador = document.querySelector(".buscador");
const resultados = document.querySelector(".resultados");



buscador.addEventListener("click", () => {
    resultados.innerHTML = "";
    const url = `https://tenor.googleapis.com/v2/search?q=${palabra.value}&key=${apiKey}&client_key=my_test_app&limit=9`
    const peticion = fetch(url);

    peticion
        .then((response) => {
            return response.json();
        })

        .then((response) => {
            response.results.forEach(element => {
                const urlImg = element.media_formats.gif.url;
                const img = document.createElement("img");
                img.src = urlImg
                resultados.appendChild(img);
            });
             
            //console.log(response);
        })


});