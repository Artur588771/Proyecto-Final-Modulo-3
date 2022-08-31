//const favoritos = favoritoStorage === null ? [] : JSON.parse(favoritoStorage);

const campeonFavorito = (e) => {
    let { id } = e.target;    
    let indexFavorito=favoritos.indexOf(id);
    let datafavoritos=document.querySelector(`#${id}`).dataset.favoritos;    
    console.log(datafavoritos);
  
    if (indexFavorito === -1) {
      favoritos.push(id);
      console.log(`#${datafavoritos}`);
      document.querySelector(`#${datafavoritos}`).style.visibility = "visible";            
    }else{
      favoritos.splice(indexFavorito,1);
      document.querySelector(`#${datafavoritos}`).style.visibility = "hidden";            
    }
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
    //document.querySelector(`#${id}`).innerHTML=`<i class="em em-star" aria-role="presentation" aria-label="WHITE MEDIUM STAR" style="visibility:visible;"></i>`; 
    verModal(id);
  };
  
  agregarFavoritos.addEventListener("click", campeonFavorito);

  
