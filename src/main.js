//Declarando las variables que enlazan los elementos HTML mediante el DOM
const start = document.getElementById('start');
const championList = document.getElementById('champion-list');

const startButton = document.getElementById('start-button');
const back = document.getElementById('back');
const imprimirLista = document.getElementById('imprimir-lista');
const es = document.getElementById('es');



//Evento del boton Comenzar
startButton.addEventListener('click', () => {
  start.classList.add('hide');
  championList.classList.remove('hide');
});

back.addEventListener('click', () => {
  championList.classList.add('hide');
  start.classList.remove('hide');
});


//Apartir de aquí inicia la iteración de los objetos desde lol.js


/*const search = document.getElementById('search')
const buscadora = () => {
  console.log(search.value)
  for (const key in dataLol) {
    if (dataLol.hasOwnProperty(key)) {
      const element = dataLol[key];
      let name = element.name;
      let tag = element.tags[0];
      let img = element.img;

<<<<<<< HEAD
      if(search.value === 'A'){
        console.log(name)
      }

      //console.log(element.info.defense)
=======
      if (search.value === 'A') {
        console.log(name)
      }


      //console.log(element.info.defense)

>>>>>>> origin/master
    }
  }
}



search.addEventListener('keyup', buscadora)

console.log(LOL.data.Aatrox)

const dataLol = LOL.data
for (const key in dataLol) {
  if (dataLol.hasOwnProperty(key)) {
    const element = dataLol[key];
    let name = element.name;
    let tag = element.tags[0];
    let img = element.img;

   //se usa para el buscado
    if (search.value === 'A') {
      console.log('encontrado')
    }


    //console.log(element.info.defense)

  }
}
*/

const lolData = LOL.data;
let name = "";
const print = (name)=>{
  let result = `<p> ${name} </p>`;
  es.insertAdjacentHTML("beforeend",result);
}
for (const key in lolData) {
  if (lolData.hasOwnProperty(key)) {

    const element = lolData[key];
     name = element.name;
    print(name);
  }
}
