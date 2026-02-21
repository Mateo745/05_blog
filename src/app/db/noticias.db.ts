import { INoticia } from "../interfaces/inoticia.interface";

export const NOTICIAS: INoticia[] = [
  {
    id: 1,
    titulo: "Inicio del blog con la primera noticia.",
    imagen: "https://hcchotels2019.webs3.mirai.es/files/Sagrada-Familia-Barcelona.jpg",
    caption: "Sagrada Familia, Barcelona",
    noticia: "Esta es la primera noticia de este nuevo y fantástico blog creado con Angular.",
    fecha: new Date("2026-02-15T12:30:00Z")
  },
  {
    id: 2,
    titulo: "La tapa estaba buena, pero,...",
    imagen: "https://live.staticflickr.com/3064/2778702227_27c09bb369_b.jpg",
    caption: "Puerta de Alcalá, Madrid",
    noticia: "Ayer salimos de tapas los compañeros de trabajo, Estuvimos en vario sitios, ente ellos el bar que hizo la tapa ganadora de la última ruta de la tapa de mi ciudad. Tras tomar esa tapa ganadora, mi compañera Rebeca, deduzco que por el efecto de los varios vinos que habíamos tomado, nos dedicó un frase que va quedar grabada de por vida entre las frases \"célebres\" de la empresa: Está buena, pero tampoco es para \"tirar patatas\". ¿Os imagináis una mascletá en la que se tiren patatas en lugar de cohetes?",
    fecha: new Date("2026-02-15T12:32:00Z")
  }
  
]

export const ultimoId = 2