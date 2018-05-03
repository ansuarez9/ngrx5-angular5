import { Action } from '@ngrx/store';
import * as TutorialActions from '../actions/tutorial.actions';

import { Tutorial } from '../models/tutorial.model';

const initialState: Tutorial = {
    "name": 'NGRX & Angular 5 - Learn Angular State Management',
    "url": 'https://coursetro.com/posts/code/151/Angular-Ngrx-Store-Tutorial---Learn-Angular-State-Management'
}

export function tutorialReducers(state: Tutorial[] = [initialState], action: TutorialActions.Actions){
    switch(action.type){
        case TutorialActions.ADD_TUTORIAL: {
            return [...state, action.payload];
        }
        case TutorialActions.REMOVE_TUTORIAL: {
            state.splice(action.payload, 1);
            return state;
        }
        default: {
            return state;
        }
    }
}