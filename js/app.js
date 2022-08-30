const liNombre = document.querySelector("#liNombre"); 
const liRegion = document.querySelector("#liRegion");
const liPoder = document.querySelector("#liPoder");
const liRol = document.querySelector("#liRol");
const liDificultad = document.querySelector("#liDificultad");
const liCarril = document.querySelector("#liCarril"); 
const imagenCampeon = document.querySelector("#imagenCampeon"); 
const agregarFavoritos = document.querySelector("#agregarFavoritos");
const favoritoStorage = localStorage.getItem("favoritos");
const lifavorito = document.querySelector("#lifavorito"); 

let campeones=[];

/*const cargarFavoritos = () => {    
  //let favoritoIcono = document.querySelectorAll(".estrella");
  //let starsArray = Array.from(favoritoIcono);
  
  if(favoritoStorage != null){
    console.log('entre a cargar favoritos');
    favoritoStorage.forEach(element => {      
      const divFavorito=document.createElement('div');
      divFavorito.innerHTML=`<i class="em em-star" aria-role="presentation" aria-label="WHITE MEDIUM STAR" style="visibility:visible;"></i>`; 
      mostrarFavoritos.appendChild(divFavorito);
    })  
  }
  const wr = JSON.parse(localStorage.getItem('favoritos'));  
  for (let i in wr) {
    if (wr[i]==nombre){
      const divFavorito=document.createElement('div');
      divFavorito.innerHTML=`<i class="em em-star" aria-role="presentation" aria-label="WHITE MEDIUM STAR" style="visibility:visible;"></i>`; 
      mostrarFavoritos.appendChild(divFavorito);
    }    
  }

};*/

let mostrar = (campeonesArr) => {
    document.querySelector("#boxcampeones").innerHTML = "";
    console.log(campeonesArr);
    campeonesArr.forEach(campeon => {
        const {nombre,region,imagen,id} = campeon;                
        const cardCampeon=document.createElement('div');
        cardCampeon.classList.add('col','mb-3');
        cardCampeon.innerHTML=`
        <div class="card">
        <a href="#" data-bs-toggle="modal" data-bs-target="#infoModal" ><img src="${imagen}" class="img-fluid object-fit"></a>
        <div class="card-body">
          <h5 class="card-title">${nombre}</h5>
          <div class="row">
          <div class="col">
            <p class="card-text">${region}</p>
          </div>
          <div class="col d-flex justify-content-end" id="${id}" data-favorito="normal">            
          
          </div>   
          </div>
        </div>
      </div>`;
      
      boxcampeones.appendChild(cardCampeon);      
      cardCampeon.addEventListener("click", () => verModal(id));        
       
    });
    
}

const llenarModal = (filtradosC) => {      
  const {nombre,region,poder,rol,carril,dificultad,imagen,id} = filtradosC[0];  
  liNombre.innerText = `NOMBRE: ${nombre}`;
  liRegion.innerText = `REGION: ${region}`;
  liPoder.innerText = `DAÑO: ${poder}`;
  liRol.innerText = `ROL: ${rol}`;
  liDificultad.innerText = `DIFICULTAD: ${dificultad}`;
  liCarril.innerText = `CARRIL: ${carril}`;
  imagenCampeon.setAttribute("src",imagen);
  
  const favCampeon = JSON.parse(localStorage.getItem('favoritos'));  
  for (let i in favCampeon) {
    if (favCampeon[i]==id){      
      lifavorito.innerHTML=`<span>FAVORITO: </span><i class="em em-star" aria-role="presentation" aria-label="WHITE MEDIUM STAR" style="visibility:visible;"></i>`;       
    }    
  }
};

const verModal = (idC) => {
  console.log(idC);
  liNombre.innerText = "";
  liRegion.innerText = "";
  liPoder.innerText = "";
  liRol.innerText = "";
  liDificultad.innerText = "";
  liCarril.innerText = "";
  lifavorito.innerHTML="";
  agregarFavoritos.setAttribute("id",idC)
  
  let filtradosUnico = campeones.filter((campeon) => {      
    return campeon.id==idC;    
  });
  console.log(filtradosUnico);
  const {region,poder,rol,carril,dificultad} = filtradosUnico[0];  
  console.log(rol);
  llenarModal(filtradosUnico);
}

fetch("campeones.json")
  .then(response => response.json())
  .then((data) => {
    campeones = data;
    mostrar(campeones);
}); 
