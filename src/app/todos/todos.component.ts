import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Todo } from '../shared/todo.model';
import { TodoService } from '../shared/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  todos!: Todo[]
  completed: boolean = false

  constructor(private todoService: TodoService, private router: Router) { }

  ngOnInit(): void  {
    this.todos = this.todoService.getTodos()
  }

  toggleCompleted(todo: Todo){
    this.todoService.updatedTodo(todo.id, {completed: !todo.completed})
    

  }

  onEditClick(todo: Todo){
    //localStorage.setItem("id",todo.id);
    this.router.navigate(['/todos', todo.id])
  }
  onDeleteClick(todo: Todo){
    this.todoService.deleteTodo(todo.id)
  }

 
}
