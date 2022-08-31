const favoritos = favoritoStorage === null ? [] : JSON.parse(favoritoStorage);

const campeonFavorito = (e) => {
    let { id } = e.target;
    let indexFavorito=favoritos.indexOf(id);
  
    if (indexFavorito === -1) {
      favoritos.push(id);      
    }else{
      favoritos.splice(indexFavorito,1);            
    }
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
    //document.querySelector(`#${id}`).innerHTML=`<i class="em em-star" aria-role="presentation" aria-label="WHITE MEDIUM STAR" style="visibility:visible;"></i>`; 
    verModal(id);
  };
  
  agregarFavoritos.addEventListener("click", campeonFavorito);

  
