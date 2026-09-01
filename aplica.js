let habitos = JSON.parse(localStorage.getItem("habitos")) || [];

const listaHabitos = document.getElementById("listaHabitos");
const formHabito = document.getElementById("formHabito");
const nombreHabito = document.getElementById("nombreHabito");

const guardarHabitos = () => {
    localStorage.setItem("habitos", JSON.stringify(habitos));
};

const crearHabito = (nombre) => ({
    id: Date.now(),
    nombre,
    completado: false
});

const renderizarHabitos = () => {
    listaHabitos.innerHTML = "";

    habitos.forEach(({ id, nombre, completado }) => {
        const li = document.createElement("li");

        li.className = `
            list-group-item
            d-flex
            justify-content-between
            align-items-center
            ${completado ? "list-group-item-success" : "list-group-item-light"}
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

formHabito.addEventListener("submit", (event) => {
    event.preventDefault();

    const nombre = nombreHabito.value.trim();

    if (!nombre) return;

    habitos.push(crearHabito(nombre));

    guardarHabitos();
    renderizarHabitos();

    nombreHabito.value = "";
});

listaHabitos.addEventListener("click", (event) => {
    const elemento = event.target;
    const li = elemento.closest("li");

    if (!li) return;

    const id = Number(li.dataset.id);

    if (elemento.classList.contains("btn-completar")) {
        habitos = habitos.map((habito) =>
            habito.id === id
                ? { ...habito, completado: !habito.completado }
                : habito
        );
    }

    if (elemento.classList.contains("btn-eliminar")) {
        habitos = habitos.filter((habito) => habito.id !== id);
    }

    guardarHabitos();
    renderizarHabitos();
});

renderizarHabitos();