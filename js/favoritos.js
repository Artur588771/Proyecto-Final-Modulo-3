const campeonFavorito = (e) => {
    let { id } = e.target;    
    let indexFavorito=favoritos.indexOf(id);
    let datafavoritos=document.querySelector(`#${id}`).dataset.favoritos;        
  
    if (indexFavorito === -1) {
      favoritos.push(id);      
      document.querySelector(`#${datafavoritos}`).style.visibility = "visible";            
    }else{
      favoritos.splice(indexFavorito,1);
      document.querySelector(`#${datafavoritos}`).style.visibility = "hidden";            
    }
    localStorage.setItem("favoritos", JSON.stringify(favoritos));    
    verModal(id);
  };
  
  agregarFavoritos.addEventListener("click", campeonFavorito);

  
