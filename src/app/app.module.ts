import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabsComponent } from './tabs/tabs.component';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { TodosComponent } from './todos/todos.component';
import { NotesComponent } from './notes/notes.component';
import { BookmarkTextComponent } from './bookmark-text/bookmark-text.component';
import { AddNoteComponent } from './add-note/add-note.component';
import { EditNoteComponent } from './edit-note/edit-note.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { AddBookmarkComponent } from './add-bookmark/add-bookmark.component';
import { EditTodoComponent } from './edit-todo/edit-todo.component';
import { ManageBookmarksComponent } from './manage-bookmarks/manage-bookmarks.component';
import { EditBookmarkComponent } from './edit-bookmark/edit-bookmark.component';
import { NoteCardComponent } from './note-card/note-card.component';
import { HttpClientModule } from '@angular/common/http';
import { NoteService } from './shared/note.service';
import { TodoService } from './shared/todo.service';
import { BookmarkService } from './shared/bookmark.service';
import { NotificationComponent } from './notification/notification.component';




@NgModule({
  declarations: [				
      AppComponent,
      TabsComponent,
      BookmarksComponent,
      TodosComponent,
      NotesComponent,
      BookmarkTextComponent,
      AddNoteComponent,
      EditNoteComponent,
      TodoItemComponent,
      AddTodoComponent,
      AddBookmarkComponent,
      EditTodoComponent,
      ManageBookmarksComponent,
      EditBookmarkComponent,
      NoteCardComponent,
      NotificationComponent,
      
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [NoteService,
              TodoService,
              BookmarkService],
          
  bootstrap: [AppComponent],
  
})
export class AppModule { }
