import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Route, Router} from '@angular/router';
import { Note } from '../shared/note.model';

import { NoteService } from '../shared/note.service';

@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.scss']
})
export class EditNoteComponent implements OnInit{
  
  note!: Note | undefined

  constructor(private route: ActivatedRoute, private noteService: NoteService, private router: Router){

  }

  ngOnInit(): void{
    const noteId = this.route.snapshot.params['id']
    this.note = this.noteService.getNote(noteId)

  }

  onFormSubmit(form: NgForm){
    const noteId = this.route.snapshot.params['id']
    this.noteService.updateNote(noteId,form.value)
    this.router.navigateByUrl("/notes")

  }

  deleteNote(){
    const noteId = this.route.snapshot.params['id']
    this.noteService.deleteNote(noteId)
    this.router.navigateByUrl("/notes")

  }
  }


