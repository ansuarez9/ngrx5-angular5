import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import * as TutorialActions from '../../actions/tutorial.actions';

import { AppState } from '../../app.state';
import { Tutorial } from '../../models/tutorial.model';

@Component({
  selector: 'app-read',
  template: `
    <div class="right">

      <h3>Tutorials</h3>
      <ul>
        <li *ngFor="let tutorial of tutorials$ | async; let i = index">
          <a [href]="tutorial.url" target="_blank">{{ tutorial.name }}</a>
          <span (click)="deleteTutorial(i)">Remove</span>
        </li>
      </ul>

    </div>
  `,
  styles: [`
    span {
      font-size: .9em;
    } 
    span:hover {
      cursor: pointer; opacity: .7;
    }
  `]
})
export class ReadComponent implements OnInit {
  tutorials$: Observable<Tutorial[]>;

  constructor(private store:Store<AppState>) { }

  ngOnInit() {
    this.tutorials$ = this.store.select('tutorial');
  }

  deleteTutorial(index){
    this.store.dispatch(new TutorialActions.RemoveTutorial(index));
  }

}
