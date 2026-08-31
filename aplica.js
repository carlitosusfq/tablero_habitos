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