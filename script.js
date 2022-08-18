console.log(`Bem vindo ao sistema de notas escolares !`);
console.log(`Cadastre as notas do aluno e veja o resultado baseado na Media A-F.`);

const notaTrabalho = 100;
const notaAvaliacao = 100;
const notaQualitativa = 500;
const notaMedia = notaAvaliacao + notaQualitativa + notaTrabalho / 3;

console.log(`A nota média é ${notaMedia}`);



if (notaMedia >= 90) {
    console.log('A');
}
if (notaMedia >= 80 || notaMedia <= 89) {
    console.log('A');
}
if (notaMedia >= 70 || notaMedia <= 79) {
    console.log('C');
}
if (notaMedia >= 60 || notaMedia <= 65) {
    console.log('D');
}
if (notaMedia >= 66 || notaMedia <= 69) {
    console.log('E');
}
if (notaMedia < 60) {
    console.log('F');
}