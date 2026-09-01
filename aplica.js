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

        li.appendChild(texto);

        listaHabitos.appendChild(li);
    });
};

renderizarHabitos();