const nameElement = document.getElementById('name');

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function escribirTexto(text, element, delayMs = 70) {
    let index = 0;
    while (index <= text.length) {
        element.textContent = text.substring(0, index);
        index++;
        await delay(delayMs);
    }
}

async function borrarTexto(element, delayMs = 70) {
    const text = element.textContent;
    let index = text.length;
    while (index >= 0) {
        element.textContent = text.substring(0, index);
        index--;
        await delay(delayMs);
    }
}

export async function startTexto() {
    while (true) {
        await escribirTexto('Cristian Fernández Moreno', nameElement);
        await delay(2000);
        await borrarTexto(nameElement);
        await delay(1000);
        await escribirTexto('Junior Frontend Developer', nameElement);
        await delay(2000);
        await borrarTexto(nameElement);
    }
}
