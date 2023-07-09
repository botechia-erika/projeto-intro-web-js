

// defino array con nuevos animales
const animales = [
  new Animal('Kiki', 'dulce amable y tierna'),
  new Animal('Thor', 'Jugueton amable defensor de quien lo cuida')
];

// defino function cargada on load para mostrar listado
function mostrarListado(){
  console.log('Mostrar animales...');
  let texto = '';
  
  for(let animal of animales){
  texto += `
    <li>
    <article class="article-anti">
    <strong>Nombre:</strong> ${animal.nombreAnimal}<br>
    <hr class="hr2">
    <strong>Descripcion:</strong>:${animal.descripcion}<br>
    <a href="adoptar.html" class="css-button-shadow-border-sliding--green">Cual es ${animal.nombreAnimal}?</a>
</article>
    </li>
  `;
  document.getElementById('animalesList').innerHTML = texto;
  }
}