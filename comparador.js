const calcularMediaAritmetica = (lista) => {
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;

    return promedioLista;
};

const compararPrecios = () => {
    const cantidadPeliculasInput = document.getElementById("cantidadPeliculas");
    const mesInput = document.getElementById("meses");
    const personasInput = document.getElementById("personas");
    const cantidadPlataformasInput = document.getElementById("cantidadPlataformas");
    const valorPromedioCinemaInput = document.getElementById("valorPromedioCinema");
    const valorPromedioPlataformasInput = document.getElementById("valorPromedioPlataformas");

    const meses = mesInput.value;
    const cantidadPeliculas = cantidadPeliculasInput.value;
    const personas = personasInput.value;
    const cantidadPlataformas = cantidadPlataformasInput.value;

    const cinemaValues = cinemas.map((cinema) => cinema.valor);
    const plataformaValues = plataformas.map((plataforma) => plataforma.Valor);

    const promedioBoleta = calcularMediaAritmetica(cinemaValues);
    const promedioPlataformas = calcularMediaAritmetica(plataformaValues);

    const valorBoletas = parseInt(cantidadPeliculas * promedioBoleta * personas);
    const valorPlataformas = parseInt(meses * promedioPlataformas * cantidadPlataformas);

    valorPromedioCinemaInput.value = valorBoletas;
    valorPromedioPlataformasInput.value = valorPlataformas;
};