var ville , villes , temperature , humidite , vent


/*********CONSTRUCTION DE LA FONCTION POUR APPELER LA MÉTÉO*********/
let appelMeteo = function(choisirVille){

const cleApi = 'ad949d9ac1be77ec5d4e604485c7fde5';


const url = `https://api.openweathermap.org/data/2.5/weather?q=${choisirVille}&appid=${cleApi}&units=metric&lang=fr`;

fetch(url).then((conakry) => conakry.json().then((donnees) => {
  console.log(donnees);
  ville = document.querySelector('#ville');

 ville.innerHTML = `
   <video width="70" height="70" autoplay loop muted>
     <source src="/MesIcônes/ville.mp4" type="video/mp4">
   </video>  
   ${donnees.name} `;
   
   temperature = document.querySelector('#temperature');
   
   temperature.innerHTML = `
      <video width="70" height="70" autoplay loop muted>
        <source src="/MesIcônes/température.mp4" type="video/mp4">
      </video>  
      ${donnees.main.temp} °C `;
      
   humidite = document.querySelector('#humidite');
   
   humidite.innerHTML = `
         <video width="70" height="70" autoplay loop muted>
           <source src="/MesIcônes/humidite.mp4" type="video/mp4">
         </video>  
         ${donnees.main.humidity} g/m³ `;
         
    vent = document.querySelector('#vent');
    
    vent.innerHTML = `
            <video width="70" height="70" autoplay loop muted>
                          <source src="/MesIcônes/vent.mp4" type="video/mp4">
                        </video> 
           ${donnees.wind.speed} km/h `;
}
)
).catch((erreur) => {
  
  if(ville.innerHTML == 'undefined' || villes.value =='' || villes.value == 'Number'  ){
  
  }
})
}

       /*****CONAKRY MÉTÉO *****/
appelMeteo('CONAKRY');

/*********RÉACTUALISATION AU RECHERCHES*******/

let forme=document.querySelector('form');

forme.addEventListener('submit' , function(e){
  
 //CASSER LA RÉACTUALISATION DE LA PAGE A L'APPUIE DU BOUTON DE RECHERCHE 
 e.preventDefault();
 
 villes = document.querySelector('#ecrire').value;
 
 appelMeteo(villes)
 
});

