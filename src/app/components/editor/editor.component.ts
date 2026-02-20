import { Component, EventEmitter, Output } from '@angular/core';
import { INoticia } from '../../interfaces/inoticia.interface';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-editor',
  imports: [FormsModule],
  templateUrl: './editor.component.html',
  styleUrl: './editor.component.css',
})
export class EditorComponent {
  newPost: INoticia = {titulo:"", imagen:"", caption:"", noticia:"", fecha: new Date()}
  @Output() PostEmit: EventEmitter<INoticia> = new EventEmitter()
  publicarNoticia() {
    
    if (this.newPost.titulo != "" && this.newPost.imagen != ""  && this.newPost.noticia != "" && this.newPost.caption != "") 
    {
      this.PostEmit.emit(this.newPost)
      this.newPost = {titulo:"", imagen:"", caption:"", noticia:"", fecha: new Date()}
    }else{
      alert('Todos los campos deben estar rellenos')
    }

  }
}