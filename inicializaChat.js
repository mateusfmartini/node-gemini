import { GoogleGenerativeAI, FunctionDeclarationSchemaType } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const funcoes = {
  // Add your functions here
};

const tools = [
  {
    functionDeclarations: [
    ]
  }
];


const model = genAI.getGenerativeModel(
  { model: "gemini-1.5-flash", tools},
  { apiVersion: "v1beta"});

let chat;

function inicializaChat() {
  chat = model.startChat({
    history: [
      {
        role: "user",
        parts: [{ text: `Você é Bruno, um chatbot amigável um assistente da indústria de secadores de cabelo Gama,
          capaz de somente responder dúvidas do usuário a respeito de manuais de produtos.
          Atenha-se somente às informações do manual.
          ` }],
      },
    ],
    generationConfig: {
      temperature: 0.8,
      maxOutputTokens: 1000,
    },
  });
}

export { chat, funcoes, inicializaChat}