import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bookmark } from './bookmark.model';

@Injectable({
  providedIn: 'root'
})
export class BookmarkService {

  bookmarks: Bookmark[] =[
    new Bookmark('Wikipedia','http://wikipedia.org'),
    new Bookmark('youtube','http://youtube.com'),
    new Bookmark('Google','http://google.com')

  ]
  constructor() { }

  getBookmarks(){
    return this.bookmarks
  }

  getBookmark(id: string){
    return this.bookmarks.find(b =>  b.id === id)
  }

  addBookmark(bookmark: Bookmark){
    this.bookmarks.push(bookmark)
  }

  updateBookmark(id: string, updatedFields: Partial<Bookmark>){
    const bookmark: any = this.getBookmark(id)
    return Object.assign(bookmark, updatedFields)
  } 

  deleteBookmark(id: string){
    const bookmarkIndex= this.bookmarks.findIndex(b => b.id === id)
    if(bookmarkIndex == -1) return

    this.bookmarks.splice(bookmarkIndex, 1)
  }
  
}
