const alunos = [
    { nome: 'Renato', nota: 10 },
    { nome: 'Alessandro', nota: 3 },
    { nome: 'Marcio', nota: 9 },
    { nome: 'Karina', nota: 2 },
    { nome: 'Elizângela', nota: 8 }
];

const filtrarAlunosAprovados = (alunos) => 
    alunos.filter(aluno => aluno.nota >= 6);

const alunosAprovados = filtrarAlunosAprovados(alunos);
console.log(alunosAprovados);
