let buscar = (evt) => {
    //evt.preventDefault();
    let inputBuscar = document.querySelector("#inputBuscar").value.toUpperCase();
    let filtrados = campeones.filter((campeon) => {      
      return campeon.nombre.toUpperCase().includes(inputBuscar);
    });
    console.log(filtrados);
    mostrar(filtrados);
  };

let buscarRol = (rolCampeon) => {
  let filtro = campeones.filter((campeon) =>{
    return campeon.rol==rolCampeon;    
  })
  mostrar(filtro);
} 

let buscarRegion = (regionCampeon) => {
  let filtro = campeones.filter((campeon) =>{
    return campeon.region==regionCampeon;    
  })
  mostrar(filtro);
}

let buscarDificultad = (difiCampeon) => {
  let filtro = campeones.filter((campeon) =>{
    return campeon.dificultad==difiCampeon;    
  })
  mostrar(filtro);
}

let buscarPoder = (poderCampeon) => {
  let filtro = campeones.filter((campeon) =>{
    return campeon.poder==poderCampeon;    
  })
  mostrar(filtro);
}

  //document.querySelector("#buscarForm").addEventListener("submit", buscar);
  document.querySelector("#buscarForm button").addEventListener("click", buscar);
  document.querySelector("#inputBuscar").addEventListener("keyup", buscar);
  
const catRol =  document.querySelectorAll(".rol");
catRol.forEach(rol => {
  rol.addEventListener("click", function () {
    buscarRol(rol.textContent.toUpperCase());
  });
})

const catRegion =  document.querySelectorAll(".region");
catRegion.forEach(region => {
  region.addEventListener("click", function () {
    buscarRegion(region.textContent.toUpperCase());
  });
})

const catDificultad =  document.querySelectorAll(".difi");
catDificultad.forEach(difi => {
  difi.addEventListener("click", function () {
    buscarDificultad(difi.textContent.toUpperCase());
  });
})

const catPoder =  document.querySelectorAll(".poder");
catPoder.forEach(poder => {
  poder.addEventListener("click", function () {
    buscarPoder(poder.textContent.toUpperCase());
  });
})