const favoritos = favoritoStorage === null ? [] : JSON.parse(favoritoStorage);

const agregarFavorito = (e) => {
    let { id } = e.target;
  
    if (favoritos.indexOf(id) === -1) {
      favoritos.push(id);
      localStorage.setItem("favoritos", JSON.stringify(favoritos));
    }
    
  };
  
  agregarFavoritos.addEventListener("click", agregarFavorito);

  
