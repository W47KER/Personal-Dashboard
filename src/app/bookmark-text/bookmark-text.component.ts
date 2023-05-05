import { Component, Input, OnInit } from '@angular/core';
import { Bookmark } from '../shared/bookmark.model';

@Component({
  selector: 'app-bookmark-text',
  templateUrl: './bookmark-text.component.html',
  styleUrls: ['./bookmark-text.component.scss']
})
export class BookmarkTextComponent implements OnInit {
 
  @Input() bookmark!: Bookmark
  faviconerror! : boolean

  tileSorceImg !: string
  ngOnInit(): void {
   this.tileSorceImg = this.bookmark.url.origin + '/favicon.ico'
  }
  
}
