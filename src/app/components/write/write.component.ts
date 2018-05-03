import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as TutorialActions from '../../actions/tutorial.actions';
import { AppState } from '../../app.state';
import { Tutorial } from '../../models/tutorial.model';

@Component({
  selector: 'app-write',
  template: `
    <div class="left">

      <input type="text" placeholder="name" name="nameInput" [(ngModel)]="nameInput" #name>
      <input type="text" placeholder="url" name="urlInput" [(ngModel)]="urlInput" #url>

      <button (click)="addTutorial(name.value, url.value)">Add a Tutorial</button>
    </div>
  `
})
export class WriteComponent implements OnInit {
  nameInput: string;
  urlInput: string;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {}

  addTutorial(name, url){
    this.store.dispatch(new TutorialActions.AddTutorial({ name: name, url: url }));
    this.nameInput = '';
    this.urlInput = '';
  }

}
