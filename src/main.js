//Declarando las variables que enlazan los elementos HTML mediante el DOM
const start = document.getElementById('start');
const championList = document.getElementById('champion-list');
const imprimirLista = document.getElementById('imprimir-lista');
const es = document.getElementById('sq');
//Declarando las variables que enlazan los botones del HTML mediante el DOM
const startButton = document.getElementById('start-button');

//Evento del boton Comenzar
startButton.addEventListener('click', () => {
  const lolData = LOL.data;
  start.classList.add('hide');
  championList.classList.remove('hide');
  const toprint = window.lol.showData( lolData);
  // let result = `<a href="#card"> <div class="champion"> <img src="${img}">
  // <h3> ${name} </h3> <div class="tags"> <p> ${tags} </p> <p> ${tags2} </p> </div></div></a>`;
  // sq.insertAdjacentHTML("beforeend",result);
});



const print = (img, name, tags, tags2)=>{
  let result = `<a href="#card"> <div class="champion"> <img src="${img}">
  <h3> ${name} </h3> <div class="tags"> <p> ${tags} </p> <p> ${tags2} </p> </div></div></a>`;
  sq.insertAdjacentHTML("beforeend",result);
}


window.addEventListener('load', () => {
  // let resultado = window.lol.show(lolData);
})

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
      if (search.value === 'A') {
        console.log(name)
      }
      //console.log(element.info.defense)
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
