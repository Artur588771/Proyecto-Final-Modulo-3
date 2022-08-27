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

  //document.querySelector("#buscarForm").addEventListener("submit", buscar);
  document.querySelector("#buscarForm button").addEventListener("click", buscar);
  document.querySelector("#inputBuscar").addEventListener("keyup", buscar);
  
const catRol =  document.querySelectorAll(".rol");
catRol.forEach(rol => {
  rol.addEventListener("click", function () {
    buscarRol(rol.textContent.toUpperCase());
  });
})
