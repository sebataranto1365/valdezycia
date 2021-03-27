function save_data(event) {
  event.preventDefault();
  const departamento = $('#departamento').val();
  const localidad = $('#localidad').val();
  const coneat = $('#coneat').val();
  const hectareas = $('#hectareas').val();

  const newLocal = {
    departamento,
    localidad,
    hectareas,
    coneat,
  };
  const valoresFormulario = newLocal;

  buscaCampo(valoresFormulario);
}


const newcampo1 = {
  departamento: "artigas",
  localidad: "diego lamas",
  hectareas: "1500",
  coneat: "20",
};

const newcampo2 = {
  departamento: "salto",
  localidad: "valentin",
  hectareas: "500",
  coneat: "88",
};

const newcampo3 = {
  departamento: "florida",
  localidad: "Cerro Chato",
  hectareas: "200",
  coneat: "55",
};

const newcampo4 = {
  departamento: "tacuarembo",
  localidad: "ansina",
  hectareas: "2000",
  coneat: "150 ",
};

function onclick (event) {
  event.preventDefault()
  let btn = document.getElementById("button");
  btn.setAttribute('disabled','disabled');
  };

  


function buscaCampo(buscacampo) {
  let resultado = document.getElementById("resultado")
  resultado.innerHTML = ""
  if (buscacampo.departamento) {
    let element = document.getElementById("resultado");
    switch (buscacampo.departamento.toLocaleLowerCase()) {
      case "artigas":
        const el1 = document.createElement("p");
        var text = document.createTextNode(innerHTML = `Mejor resultado: departamento: ${newcampo1.departamento}, indice coneat: ${newcampo1.coneat}, hectareas: ${newcampo1.hectareas}, localidad: ${newcampo1.localidad}`);
        el1.appendChild(text);
        console.log(el1);
        console.log(document);
        console.log(element);
        element.appendChild(el1);
        break;
      case "salto":
        const el2 = document.createElement("p");
        var text = document.createTextNode(innerHTML = `Mejor resultado: departamento: ${newcampo2.departamento}, indice coneat: ${newcampo2.coneat}, hectareas: ${newcampo2.hectareas}, localidad: ${newcampo2.localidad}`);
        el2.appendChild(text);
        console.log(el2);
        console.log(document);
        console.log(element);
        element.appendChild(el2);
        break;
      case "florida":
        const el3 = document.createElement("p");
        var text = document.createTextNode(innerHTML = `Mejor resultado: departamento: ${newcampo3.departamento}, indice coneat: ${newcampo3.coneat}, hectareas: ${newcampo3.hectareas}, localidad: ${newcampo3.localidad}`);
        el3.appendChild(text);
        console.log(el3);
        console.log(document);
        console.log(element);
        element.appendChild(el3);
        break;
      case "tacuarembo":
        const el4 = document.createElement("p");
        var text = document.createTextNode(innerHTML = `Mejor resultado: departamento: ${newcampo4.departamento}, indice coneat: ${newcampo4.coneat}, hectareas: ${newcampo4.hectareas}, localidad: ${newcampo4.localidad}`);
        el4.appendChild(text);
        console.log(el4);
        console.log(document);
        console.log(element);
        element.appendChild(el4);
        break;
      default:
        const el5 = document.createElement("p");
        var text = document.createTextNode(`no se ha encontrado resultado`);
        el5.appendChild(text);
        console.log(el5);
        console.log(document);
        console.log(element);
        element.appendChild(el5);
    }
  }
}
