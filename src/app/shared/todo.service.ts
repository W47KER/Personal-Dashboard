import { Injectable } from '@angular/core';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todos: Todo[] = [
    new Todo('this is test!'),
    new Todo('new test!')
  ]

  constructor() {  }

  getTodos(){
    return this.todos
  }

  getTodo(id: any){
    return this.todos.find(t => t.id === id)
  }

  addTodo(todo: Todo){
    this.todos.push(todo)
  }

  updatedTodo(id: string, updatedFields: Partial<Todo>){
    const todo: any = this.getTodo(id)
    Object.assign(todo ,updatedFields)
  }


  deleteTodo(id: string){
    const index= this.todos.findIndex(t => t.id === id)
    if(index == -1) return

    this.todos.splice(index, 1)
  }
}
