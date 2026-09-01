let habitos = [
    {
        id: 1,
        nombre: "Tomar agua",
        completado: false
    },
    {
        id: 2,
        nombre: "Leer 20 minutos",
        completado: true
    }
];

const crearHabito = (nombre) => {
    return {
        id: Date.now(),
        nombre,
        completado: false
    };
};

const mostrarHabito = (habito) => {
    const { id, nombre, completado } = habito;

    console.log("ID:", id);
    console.log("Nombre:", nombre);
    console.log("Completado:", completado);
};

habitos.forEach((habito) => {
    mostrarHabito(habito);
});

const listaHabitos = document.getElementById("listaHabitos");

const renderizarHabitos = () => {

    listaHabitos.innerHTML = "";

    habitos.forEach((habito) => {

        const { id, nombre, completado } = habito;

        const li = document.createElement("li");

        li.className = `
            list-group-item
            d-flex
            justify-content-between
            align-items-center
            ${completado
                ? "list-group-item-success"
                : "list-group-item-light"}
        `;

        li.dataset.id = id;

        const texto = document.createElement("span");

        texto.textContent = nombre;

        if (completado) {
            texto.classList.add("text-decoration-line-through");
        }

        const botones = document.createElement("div");

        botones.innerHTML = `
            <button class="btn btn-sm btn-success btn-completar">
                ${completado ? "Pendiente" : "Completar"}
            </button>

            <button class="btn btn-sm btn-danger btn-eliminar">
                Eliminar
            </button>
        `;

        li.appendChild(texto);
        li.appendChild(botones);

        listaHabitos.appendChild(li);
    });
};

renderizarHabitos();

renderizarHabitos();

const formHabito = document.getElementById("formHabito");
const nombreHabito = document.getElementById("nombreHabito");

formHabito.addEventListener("submit", (event) => {
    event.preventDefault();

    const nombre = nombreHabito.value.trim();

    if (nombre === "") {
        return;
    }

    const nuevoHabito = crearHabito(nombre);

    habitos.push(nuevoHabito);

    nombreHabito.value = "";

    renderizarHabitos();
});

listaHabitos.addEventListener("click", (event) => {

    const elemento = event.target;

    const li = elemento.closest("li");

    if (!li) {
        return;
    }

    const id = Number(li.dataset.id);

    if (elemento.classList.contains("btn-completar")) {

        habitos = habitos.map((habito) => {

            if (habito.id === id) {
                return {
                    ...habito,
                    completado: !habito.completado
                };
            }

            return habito;
        });

        renderizarHabitos();
    }

    if (elemento.classList.contains("btn-eliminar")) {

        habitos = habitos.filter(
            (habito) => habito.id !== id
        );

        renderizarHabitos();
    }
});