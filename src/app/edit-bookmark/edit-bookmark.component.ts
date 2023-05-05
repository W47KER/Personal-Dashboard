import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, ParamMap, Params, Router } from '@angular/router';
import { Bookmark } from '../shared/bookmark.model';
import { BookmarkService } from '../shared/bookmark.service';
import { NotificationService } from '../shared/notification.service';


@Component({
  selector: 'app-edit-bookmark',
  templateUrl: './edit-bookmark.component.html',
  styleUrls: ['./edit-bookmark.component.scss']
})
export class EditBookmarkComponent implements OnInit {

  @Output() updatedBookmark = new EventEmitter<Bookmark[]>();

  bookmark?: Bookmark 
  
  constructor(private bookmarkService: BookmarkService,
              private route: ActivatedRoute ,
              private router: Router,
              private notificationService : NotificationService
              ){}

  ngOnInit(): void {

    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      const bookmarkId: any = paramMap.get('id')
      this.bookmark = this.bookmarkService.getBookmark(bookmarkId)
    })
    
  }
  onFormSubmit(form: NgForm){
    const id =  this.route.snapshot.params['id']
    
    const {name, url} = form.value
    // this.route.paramMap.subscribe((paramMap: ParamMap) => {
    //   const bookmarkId: any = paramMap.get('id')

     const bookmark =  this.bookmarkService.updateBookmark(id ,{
      name,
      url : new URL(url)
     })
    //  console.log(bookmark)
    //  this.updatedBookmark.emit(bookmark)
    
      this.notificationService.show('bookmark Updated!')
  // })
  }

  onDelete(){
    const id =  this.route.snapshot.params['id']
    this.bookmarkService.deleteBookmark(id)

    this.router.navigate(['../'], {relativeTo : this.route})
  }


  }
