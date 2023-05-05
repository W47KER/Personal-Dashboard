import { animate, query, style, transition, trigger } from '@angular/animations';

import { Component, OnInit, Optional, Query } from '@angular/core';

import { RouterOutlet } from '@angular/router';
import { map, Observable, timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // animations: [
  //   trigger("prepareAnim", [
  //     transition('* => *',[
  //       query(':enter', [
  //         style({
  //           background: 'wheat'
  //         })
          
  //       ],{optional: true}),

  //       style({
  //         background: 'blue'
  //       }),
  //       animate(1000)
  //     ])
  //   ])
  // ]
  
})
export class AppComponent implements OnInit{
  

  prepareRoute(outlet: RouterOutlet){
    if(outlet.isActivated) return outlet.activatedRoute.snapshot.url
    else return 
  }


  dateTime!: Observable<Date>

  ngOnInit(): void {
    this.dateTime = timer(0, 1000).pipe(
      map(() => {
        return new Date
      })
    )
  }

}
