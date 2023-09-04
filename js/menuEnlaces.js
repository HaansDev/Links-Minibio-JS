const enlaces = [
    { nombre: 'Mi perfil profesional de LinkedIn', url: 'https://www.linkedin.com/in/cristian-fernandez-moreno/' },
    { nombre: 'Mis proyectos de GitHub', url: 'https://github.com/HaansDev' },
    { nombre: 'Porfolio', url: 'javascript:void(0);', desactivado: true },
];

const list = document.getElementById('links');
const listItemTemplate = document.querySelector('.listElement');

export function loadEnlaces() {
    enlaces.forEach((enlace) => {
        const newItem = listItemTemplate.cloneNode(true);
        const a = newItem.querySelector('.linkItem');
        a.textContent = enlace.nombre;
        a.href = enlace.url;

        if (enlace.desactivado) {
            a.classList.add('desactivado');
            a.addEventListener('click', (e) => {
                e.preventDefault();
            });
        }

        list.appendChild(newItem);
    });

    listItemTemplate.remove();
}
