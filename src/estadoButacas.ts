let btnEnviar = <HTMLButtonElement>document.getElementById("btnEnviar");
let bt1Enviar = <HTMLButtonElement>document.getElementById("bt1Enviar");

let respuesta = <HTMLParagraphElement>document.getElementById("respuesta");

let butacas: boolean[] = [
  true,
  false,
  true,
  true,
  false,
  false,
  true,
  false,
  true,
  true,
  false,
  true,
  false,
  true,
  true,
  false,
  true
];

let cantidadButacasOcupadas: number;
let cantidadButacasDesocupadas: number;

btnEnviar.addEventListener("click", () => {
  cantidadButacasOcupadas = 0;
  for (let indice = 0; indice < butacas.length; indice++) {
    if (butacas[indice]) {
      cantidadButacasOcupadas++;
    }
  }

  respuesta.innerHTML = `La cantidad de butacas ocupadas son ${cantidadButacasOcupadas}`;
  console.log(respuesta.innerHTML);
});

bt1Enviar.addEventListener("click", () => {
  cantidadButacasDesocupadas = 0;

  for (let indice = 0; indice < butacas.length; indice++) {
    if (!butacas[indice]) {
      cantidadButacasDesocupadas++;
    }
  }

  respuesta.innerHTML = `La cantidad de butacas desocupadas son ${cantidadButacasDesocupadas}`;
  console.log(respuesta.innerHTML);
});
