let buscar = (evt) => {    
    let inputBuscar = document.querySelector("#inputBuscar").value.toUpperCase();
    let filtrados = campeones.filter((campeon) => {      
      return campeon.nombre.toUpperCase().includes(inputBuscar);
    });    
    mostrar(filtrados);
  };

  document.querySelector("#buscarForm button").addEventListener("click", buscar);
  document.querySelector("#inputBuscar").addEventListener("keyup", buscar);

  let buscarCategoria = (categoria,valCategoria) => {    
    let filtro = campeones.filter((campeon) =>{      
      if(categoria=="rol")return campeon.rol==valCategoria;    
      if(categoria=="region")return campeon.region==valCategoria;
      if(categoria=="dificultad")return campeon.dificultad==valCategoria;
      if(categoria=="poder")return campeon.poder==valCategoria;
    })    
    mostrar(filtro);
  } 
  
  let opcionCampeon = (opcCategorias,clasARR) => {    
    const catCampeon =  document.querySelectorAll(clasARR);    
    catCampeon.forEach(valor => {
      valor.addEventListener("click", function () {
        buscarCategoria(opcCategorias,valor.textContent.toUpperCase());
      })
    });
  }
  
  opcionCampeon("rol",".rol");
  opcionCampeon("region",".region");
  opcionCampeon("dificultad",".difi");
  opcionCampeon("poder",".poder");  

document.querySelector("#ordenarAZ").addEventListener("click",()=>{
  campeones.sort(function(a,b){
    return a.nombre > b.nombre ? 1 : -1;    
  });
  mostrar(campeones);
})

document.querySelector("#ordenarZA").addEventListener("click",()=>{
  campeones.sort(function(a,b){
    return a.nombre > b.nombre ? 1 : -1;    
  });
  mostrar(campeones.reverse());
}) 

document.querySelector("#todos").addEventListener("click", function () {mostrar(campeones)});

let mostrarFavoritos = () => {
  let favoritosARR = [];
  
  for(let i in favoritos){    
    for(let x in campeones){
      if(favoritos[i]==campeones[x].id) {        
        favoritosARR[i]=campeones[x];
      }
    }    
  }   
  mostrar(favoritosARR);
};

document.querySelector("#campFavoritos").addEventListener("click", mostrarFavoritos);

