import promptSync from 'prompt-sync';

interface Estudante {
    nome: string;
    notas: number[];
    media: number;
}

const calcularMedia = (notas: number[]): number => 
    notas.reduce((soma, nota) => soma + nota, 0) / notas.length;

const userPrompt = promptSync();

const nomeAluno = userPrompt('Informe o nome do estudante: ') || ''; // Valor padrão caso seja null
const notasAluno: number[] = [];

for (let i = 0; i < 4; i++) {
    const nota = parseFloat(userPrompt(`Informe a nota ${i + 1}: `) || '0'); // Valor padrão caso seja null
    notasAluno.push(nota);
}

const estudante: Estudante = {
    nome: nomeAluno,
    notas: notasAluno,
    media: calcularMedia(notasAluno)
};

console.log(estudante);
