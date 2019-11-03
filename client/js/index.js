var campos = [
  /* querySelector é uma API do DOM que permite buscar um elemento do DOM usando um elemento do CSS */
  document.querySelector('#data'),
  document.querySelector('#quantidade'),
  document.querySelector('#valor')
];

console.log(campos);

var tbody = document.querySelector('table tbody');

document.querySelector('.form').addEventListener('submit', function(event) {
  event.preventDefault(); // evita que a página recarregue e a perda dos dados
  var tr = document.createElement('tr');

  campos.forEach(function(campo) {
    var td = document.createElement('td');
    td.textContent = campo.value;
    tr.appendChild(td);
  });

  var tdVolume = document.createElement('td');
  tdVolume.textContent = campos[1].value * campos[2].value;

  tr.appendChild(tdVolume);

  tbody.appendChild(tr);

  campos[0].value = '';
  campos[1].value = 1;
  campos[2].value = 0;

  campos[0].focus();
});