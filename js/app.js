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
const favoritos = favoritoStorage === null ? [] : JSON.parse(favoritoStorage);

let campeones=[];

let mostrar = (campeonesArr) => {
    document.querySelector("#boxcampeones").innerHTML = "";
    
    campeonesArr.forEach(campeon => {
        const {nombre,region,imagen,id} = campeon;                
        const cardCampeon=document.createElement('div');
        cardCampeon.classList.add('col','mb-3');
        cardCampeon.innerHTML=`
        <div class="card bordocard">
        <a href="#" data-bs-toggle="modal" data-bs-target="#infoModal" ><img src="${imagen}" class="img-fluid object-fit"></a>
        <div class="card-body">
          <h5 class="card-title">${nombre}</h5>
          <div class="row">
          <div class="col">
            <p class="card-text">${region}</p>
          </div>
          <div class="col d-flex justify-content-end">            
          <i class="em em-star" id="${nombre.replace(/\s+/g, '')}" aria-role="presentation" aria-label="WHITE MEDIUM STAR" style="visibility:hidden;"></i>
          </div>   
          </div>
        </div>
      </div>`;      
      boxcampeones.appendChild(cardCampeon);      
      cardCampeon.addEventListener("click", () => verModal(id));      
      
      if(favoritos != null){
        if(favoritos.indexOf(id) >=0){
          document.querySelector(`#${nombre.replace(/\s+/g, '')}`).style.visibility = "visible";
        } 
      }        
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
  agregarFavoritos.setAttribute("data-favoritos",nombre.replace(/\s+/g, ''))
  
  if(favoritos != null){ 
  if(favoritos.indexOf(id) >=0){
    lifavorito.innerHTML=`<span>FAVORITO: </span><i class="em em-star" aria-role="presentation" aria-label="WHITE MEDIUM STAR" style="visibility:visible;"></i>`;
    document.querySelector(`#${id}`).innerText='Eliminar de Favoritos';    
  }else{
    document.querySelector(`#${id}`).innerText='Agregar a Favoritos';
  }
}  
};

const verModal = (idC) => {  
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
  llenarModal(filtradosUnico);
}

fetch("campeones.json")
  .then(response => response.json())
  .then((data) => {
    campeones = data;
    mostrar(campeones);
}); 
