var lista;
var array;
var length;
var index1;
var index2;

function criarLista() {
  var lista = document.getElementById("list").value;
  array = lista.split(",");
  length = array.length;
  return posicoes();
}

function posicoes() {
  index1 = Math.floor(Math.random() * length);
  index2 = Math.floor(Math.random() * length);
  if (index2 == index1) {
    return posicoes();
  }
  console.log(index1, index2);
  var opcao1 = array[index1];
  var opcao2 = array[index2];
  console.log(opcao1, opcao2)
}

function opcoes() {
  document.body.innerHTML = "<h1>Today's date is " + d + "</h1>"
}

/*while (lista.length > 0) {
  aleatorio(lista.length)
}
*/
