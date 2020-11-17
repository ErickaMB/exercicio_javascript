//var nome = "Ericka";
//var idade = 41;
//var idade2 = 10;
//var n1 = 5;
//var n2 = 3;
//var frase = "Japão é o melhor time do mundo";
//alert(nome + " tem " + idade + " anos ");
//alert(idade + idade2);
//console.log(nome);
//console.log(idade + idade2);
//console.log(n1 * n2);
//console.log(frase.replace("Japão", "Brasil"));
//console.log(frase.toUpperCase());
//console.log(frase.toLowerCase());
//alert(frase.replace("Japão", "Brasil"));
//var lista = ["maça", "pera", "laranja"];
//lista.push("uva");
//lista.pop();
//console.log(lista);
//console.log(lista.toString());
//console.log(lista.join(" - "));
//console.log(lista[0]);
//console.log(lista.toString()[0]);
//console.log(lista.lenght);
//console.log(lista.reverse());

//console.log(lista[1]);
//alert(lista[1]);

/*
var fruta = {nome:"maça", cor:"vermelha"}
//console.log(fruta);
console.log(fruta.nome);
alert(fruta.cor);
*/
/*
var fruta = [{nome:"maça", cor:"vermelha"}, {nome:"uva", cor:"roxa"}]
console.log(fruta);
//console.log(fruta.nome);
alert(fruta[1].nome);
*/
/*
var idade = prompt("Qual a sua idade");
//var idade = 18;
if (idade >= 18) {
alert("maior de idade");
}
else {
    alert ("menor de idade");
}
*/
/*
var count = 0;
while (count < 5) {
    console.log(count);
    alert(count);
    count = count +1;  //ou count++
}
*/
/*
var count;
for(count=0; count <= 5; count++) {
    alert(count);
}
*/
/*
var d = new Date();
//alert(d.getHours());
alert(d.getDay());
//alert(d.getMinutes());
//alert(d.getMonth()+1);
//alert(d);
*/
/*
function soma(n1, n2) {
    return n1 + n2;
}
*/
/*
function validaIdade(idade){
    var validar;
    if (idade >=18) {
        validar = true
    }
    else{
        validar = false
    }
    return validar;
}
var idade = prompt("Qual sua idade");
console.log(validaIdade(idade));
*/

function clicou() {
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    //document.getElementById("agradecimento").innerHTML = "Obrigado por clicar";
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar");
}
function redirecionar() {
    //window.open("https://innovationlabschools.com/global-learning-academy.html");
    window.location.href ="https://innovationlabschools.com/global-learning-academy.html";
}
function trocar(elemento) {
   //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    //alert("trocar texto");
elemento.innerHTML = "Obrigado por passar o mouse";
}
function voltar(elemento) {
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}
function load() {
    alert("Página carregada");
}
function funcaochange(elemento) {
    console.log(elemento.value);

}