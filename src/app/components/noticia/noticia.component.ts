import { Component, input } from '@angular/core';
import { INoticia } from '../../interfaces/inoticia.interface';

@Component({
  selector: 'app-noticia',
  imports: [],
  templateUrl: './noticia.component.html',
  styleUrl: './noticia.component.css',
})
export class NoticiaComponent {
  miNoticia = input<INoticia>()
}
