import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Todo } from '../shared/todo.model';
import { TodoService } from '../shared/todo.service';

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.scss']
})
export class EditTodoComponent implements OnInit {

  todo!: Todo | undefined

  constructor(private route: ActivatedRoute, private todoService: TodoService, private router: Router){}


  
  ngOnInit(){
    const todoId = this.route.snapshot.params['id']
    this.todo = this.todoService.getTodo(todoId)

  }

  onFormSubmit(form: NgForm){
    const noteId = this.route.snapshot.params['id']
    this.todoService.updatedTodo(noteId,form.value)
    this.router.navigateByUrl("/todos")

  }
}
