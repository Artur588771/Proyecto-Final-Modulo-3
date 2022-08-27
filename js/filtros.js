let buscar = (evt) => {
    evt.preventDefault();
    let imputBuscar = document.querySelector("#imputBuscar").value.toUpperCase();
    let filtrados = campeones.filter((campeon) => {      
      return campeon.nombre.toUpperCase().includes(imputBuscar);
    });
    console.log(filtrados);
    mostrar(filtrados);
  };

  document.querySelector("#buscarForm").addEventListener("submit", buscar);