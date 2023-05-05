import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Bookmark } from '../shared/bookmark.model';
import { BookmarkService } from '../shared/bookmark.service';

@Component({
  selector: 'app-manage-bookmarks',
  templateUrl: './manage-bookmarks.component.html',
  styleUrls: ['./manage-bookmarks.component.scss']
})
export class ManageBookmarksComponent implements OnInit{

 @Input() bookmarks!: Bookmark[]

 
  
  constructor(private bookmarkService: BookmarkService,private route: ActivatedRoute){
  
    
  }

  ngOnInit(): void {
    this.bookmarks = this.bookmarkService.getBookmarks()
  }
 

}
