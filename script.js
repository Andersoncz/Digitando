const textElement = document.getElementById('typewriter');
const text = "Olá, me chamo Anderson e sou desenvolvedor frontend!";
let index = 0;

function typeWriter() {
    if (index < text.length) {
        textElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, 100); // Ajuste a velocidade aqui (100ms entre letras)
    }
}

typeWriter();

