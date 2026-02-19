import { INoticia } from "../interfaces/inoticia.interface";

export const NOTICIAS: INoticia[] = [
  {
    id: 1,
    titulo: "Inicio del blog con la primera noticia.",
    imagen: "https://c.pxhere.com/photos/d2/de/letters_abc_alphabet_journal_font_airport_scoreboard_ad_railway_station-935977.jpg!d",
    caption: "Imagen del número uno",
    noticia: "Esta es la primera noticia de este nuevo y fantástico blog creado con Angular.",
    fecha: new Date("2026-02-15T12:30:00Z")
  },
  {
    id: 2,
    titulo: "La tapa estaba buena, pero,...",
    imagen: "https://media.istockphoto.com/id/1128655842/es/vector/vectores-coloridos-fuegos-artificiales-con-bokeh-y-delantal-blanco-p%C3%A1lido-sobre-fondo-de.jpg?s=612x612&w=0&k=20&c=D5g-EKzreWnkjpIxGPb-2wKTnFldNDdbA5Uh4GP9Xck=",
    caption: "Fuegos artificiales",
    noticia: "Ayer salimos de tapas los compañeros de trabajo, Estuvimos en vario sitios, ente ellos el bar que hizo la tapa ganadora de la última ruta de la tapa de mi ciudad. Tras tomar esa tapa ganadora, mi compañera Rebeca, deduzco que por el efecto de los varios vinos que habíamos tomado, nos dedicó un frase que va quedar grabada de por vida entre las frases \"célebres\" de la empresa: Está buena, pero tampoco es para \"tirar patatas\". ¿Os imagináis una mascletá en la que se tiren patatas en lugar de cohetes?",
    fecha: new Date("2026-02-15T12:32:00Z")
  }
  
]