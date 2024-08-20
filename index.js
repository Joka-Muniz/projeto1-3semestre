"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const calcularMedia = (notas) => notas.reduce((soma, nota) => soma + nota, 0) / notas.length;
const userPrompt = (0, prompt_sync_1.default)();
const nomeAluno = userPrompt('Informe o nome do estudante: ') || ''; // Valor padrão caso seja null
const notasAluno = [];
for (let i = 0; i < 4; i++) {
    const nota = parseFloat(userPrompt(`Informe a nota ${i + 1}: `) || '0'); // Valor padrão caso seja null
    notasAluno.push(nota);
}
const estudante = {
    nome: nomeAluno,
    notas: notasAluno,
    media: calcularMedia(notasAluno)
};
console.log(estudante);
