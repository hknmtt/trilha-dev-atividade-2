var nomeAluno = "John Doe";
var idadeAluno = 20;
var nota1 = 7;
var nota2 = 8.5;
var nota3 = 6.9;

mediaAluno = (nota1*4 + nota2*3 + nota3*3)/(4+3+3);

console.log(`O nome do aluno é ${nomeAluno}, a idade do aluno é: ${idadeAluno}, e sua média é de ${mediaAluno}`);

if (mediaAluno >= 7) {
    console.log("Aluno aprovado");
} else {
    console.log("Aluno reprovado");
}
