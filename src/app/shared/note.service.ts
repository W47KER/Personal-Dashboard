import { Injectable } from '@angular/core';
import { Note } from './note.model';



@Injectable({
  providedIn: 'root'
})
export class NoteService {

 

  notes: Note[] = [
    new Note('title','content'),
    new Note('title 2','another content')
  ]

constructor() { }

getNotes(){
  return this.notes
}

getNote(id: string){
 return this.notes.find(n =>  n.id === id)
    
  }

addNote(note: Note){
  this.notes.push(note)
}

 updateNote(id: string, updatedFields: Partial<Note>){
  const noteId: any = this.getNote(id)
  Object.assign(noteId, updatedFields)
}

deleteNote(id: string){
  const noteIndex = this.notes.findIndex(n => n.id === id)
  if(noteIndex == -1) return
  
  this.notes.splice(noteIndex, 1)
}
}
