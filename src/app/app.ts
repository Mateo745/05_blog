import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BlogComponent } from "./components/blog/blog.component";
import { INoticia } from './interfaces/inoticia.interface';
import { NOTICIAS } from './db/noticias.db';
import { EditorComponent } from "./components/editor/editor.component";

@Component({
  selector: 'app-root',
  imports: [BlogComponent, EditorComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  arrayNoticias: INoticia[] = NOTICIAS;
}
