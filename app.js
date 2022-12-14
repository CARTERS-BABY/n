var alunos = []
var organizada = ''
function enviar () {
for (var i = 1; i <=4 ; i++)  {
    alunos.push (document.getElementById ('aluno'+i) .value ) 
    organizada = organizada +  `<p>${i}. ${alunos[i-1]}</p>`
}  
document.getElementById ('exibirAlunos').innerHTML = alunos
document.getElementById ('exibirOrganizado').innerHTML = organizada
document.getElementById ('btnEnviar').style.display = 'none'
document.getElementById ('btnOrganizar').style.display = 'inline-block'

}
function organizar () {
    alunos.sort ()
    organizada = ''
    for (var i = 1; i <=4 ; i++)  {
        organizada = organizada +  `<p>${i}. ${alunos[i-1]}</p>`
    }  
    document.getElementById ('exibirOrganizado').innerHTML = organizada
}
function searching ()
var s= document . getElementById("'s1") . value;
var found-0;
var j;

for (j-0; j<namesOfPeople. length; j++)
if (s==namesOfPeople[j]){
found=found+1;
}
document. getElementById("p2") . innerHTML-"Nome encontrado "+found+" vez(es)";
console. log("Nome encontrado "+found+" vez(es)");

