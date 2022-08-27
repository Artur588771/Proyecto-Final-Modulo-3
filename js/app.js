let campeones=[];

let mostrar = (campeonesArr) => {
    document.querySelector("#boxcampeones").innerHTML = "";
    console.log(campeonesArr);
    campeonesArr.forEach(campeon => {
        const {nombre,region,imagen} = campeon;                
        const cardCampeon=document.createElement('div');
        cardCampeon.classList.add('col','mb-3');
        cardCampeon.innerHTML=`
        <div class="card">
        <img src="${imagen}" class="img-fluid object-fit">
        <div class="card-body">
          <h5 class="card-title">${nombre}</h5>
          <p class="card-text">${region}</p>
        </div>
      </div>`;
      boxcampeones.appendChild(cardCampeon);
        //console.log(cardBanda);
    });
}

fetch("campeones.json")
  .then(response => response.json())
  .then((data) => {
    campeones = data;
    mostrar(campeones);
}); 


