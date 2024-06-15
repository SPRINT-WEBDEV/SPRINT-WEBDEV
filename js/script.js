function validateLogin() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;
    if (user === "admin" && pass == 123) {
        window.open('quiz.html') ;
    } else {
        alert("Usuário ou senha incorretos.");
        return false;
    }
}
function envioContato(event) {
    event.preventDefault();
    window.location.href = "envio.html";
}
function voltar(){
    window.location.href = "contato.html";
}

let currentSlide = 0;
function Slideshow() {
    const slides = document.querySelectorAll("#car-image img");
    slides[currentSlide].style.display = "none";
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].style.display = "block";
}

setInterval(Slideshow, 2000);

const news = [
    {
        title: "Título da Notícia 1",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis facilis vitae esse, deleniti provident assumenda debitis omnis dolores iure, nisi vel. Eum esse dolor obcaecati delectus, voluptatem odio? Illum?",
        image: "./img/ABT1.png"
    },
    {
        title: "Título da Notícia 2",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis facilis vitae esse, deleniti provident assumenda debitis omnis dolores iure, nisi vel. Eum esse dolor obcaecati delectus, voluptatem odio? Illum?",
        image: "./img/ABT2.png"
    },
    {
        title: "Título da Notícia 3",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis facilis vitae esse, deleniti provident assumenda debitis omnis dolores iure, nisi vel. Eum esse dolor obcaecati delectus, voluptatem odio? Illum?",
        image: "./img/car-1.png"
    }
];

let Index = 0;

const NovoTitulo = document.getElementById("news-title");
const NovoTexto = document.getElementById("news-text");
const NovaImagem = document.getElementById("news-image");

function updateNews() {
    NovoTitulo.textContent = news[Index].title;
    NovoTexto.textContent = news[Index].text;
    NovaImagem.src = news[Index].image;
    NovaImagem.alt = news[Index].title;
}

document.getElementById("prev-btn").addEventListener("click", () => {
    Index = (Index - 1 + news.length) % news.length;
    updateNews();
});

document.getElementById("next-btn").addEventListener("click", () => {
    Index = (Index + 1) % news.length;
    updateNews();
});

// Inicializa com a primeira notícia
updateNews();