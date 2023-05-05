import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { Todo } from '../shared/todo.model';
import { TodoService } from '../shared/todo.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent {

  constructor(private todoService: TodoService, private router: Router){}

  onFormSubmit(form: NgForm){
    const todo = new Todo(form.value.text)
    this.todoService.addTodo(todo)

    this.router.navigateByUrl('/todos')
  }
}
