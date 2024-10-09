const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAltermativas = document.querySelector(".caixa-alternativas");
const caixaResultados = document.querySelector(".caixa-resultados");
const textoResultados = document.querySelector(".texto-resultados");

const perguntas = [
    {
        enunciado: "Qual foi o campeão da copa do mundo de 2010?",
        alternativas: [
        "Espanha!",
        "Alemanha!"
        ]

    },
    {
        enunciado: "Qual a seleção que mais tem copas do mundo?",
        alternativas: [
        "Argentina.",
        "Brasil."
        ]

    },
    {
        enunciado: "qual foi a ultima seleção campeam do mundo.",
        alternativas: [
        "França.",
        "Argentina."
        ]


    },
    {
        enunciado: "quem foi a primeira campeam do mundo?",
        alternativas: [
        "Italia.",
        "Uruguai."
        ]

    }

];
