const favoritos = favoritoStorage === null ? [] : JSON.parse(favoritoStorage);

const agregarFavorito = (e) => {
    let { id } = e.target;
  
    if (favoritos.indexOf(id) === -1) {
      favoritos.push(id);
      localStorage.setItem("favoritos", JSON.stringify(favoritos));     
    }
    //document.querySelector(`#${id}`).innerHTML=`<i class="em em-star" aria-role="presentation" aria-label="WHITE MEDIUM STAR" style="visibility:visible;"></i>`; 
    
  };
  
  agregarFavoritos.addEventListener("click", agregarFavorito);

  
