import { Component, input } from '@angular/core';
import { INoticia } from '../../interfaces/inoticia.interface';
import { NoticiaComponent } from "../noticia/noticia.component";

@Component({
  selector: 'app-blog',
  imports: [NoticiaComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css',
})
export class BlogComponent {
  misNoticias = input<INoticia[]>([])
}
