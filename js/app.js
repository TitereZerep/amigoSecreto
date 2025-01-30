let amigos = [];

function adicionar(){
    let amigo = document.getElementById('nome-amigo');
    if (amigo.value == ''){
        alert('seu amigo não é um inominado, insira um nome');
        return;
    }

    if (amigos.includes(amigo.value)) {
        alert('amigo já adicionado, insira outro nome ou um diferencial (Ex: primeira letra do sobrenome)');
        return;
    }

    let lista = document.getElementById('lista-amigos');
    amigos.push(amigo.value);
    if(lista.textContent == '') {
    lista.textContent = amigo.value;
} else {
    lista.textContent = lista.textContent + ', ' + amigo.value;
}

}

function sortear () {
if (amigos.length < 4) {
    alert('adicione pelo menos 4 amigos');
    return;
}

embaralhar(amigos);
let sorteio = document.getElementById('lista-sorteio');

for (let i = 0; i < amigos.length; i++) {

if (i == amigos.length - 1) {

} else {
    sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[i + 1] + '<br>';
}

}
}

function embaralhar(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar() {
  amigos = [];
  document.getElementById('lista-amigos').innerHTML = '';
  document.getElementById('lista-sorteio').innerHTML = '';
}