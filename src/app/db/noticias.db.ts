import { INoticia } from "../interfaces/inoticia.interface";

export const NOTICIAS: INoticia[] = [
  {
    id: 1,
    titulo: "El corazón del Imperio Maya",
    imagen: "https://www.worldhistory.org/uploads/images/3048.jpg",
    caption: "Chichén Itzá, México",
    noticia: "Símbolo icónico de la civilización maya, reconocido como Patrimonio de la Humanidad y una de las Nuevas Siete Maravillas del Mundo.",
    fecha: new Date("2026-02-15T12:30:00Z")
  },
  {
    id: 2,
    titulo: "Sorprendente Iguazú",
    imagen: "https://academiaplay.net/wp-content/uploads/2018/08/web-saltos-3.jpg",
    caption: "Cataratas de Iguazú, Argentina - Brasil",
    noticia: "La mejor época para visitar las Cataratas del Iguazú es el otoño (abril-junio) o la primavera (septiembre-noviembre), ya que combinan un clima agradable con menor afluencia de turistas y buen caudal de agua, ideal para disfrutar de las pasarelas sin tanto calor ni multitudes, aunque el verano (diciembre-febrero) ofrece el mayor volumen de agua a costa de mucho calor y más gente.  ",
    fecha: new Date("2026-02-16T20:32:00Z")
  }
  
]

export const ultimoId = 2