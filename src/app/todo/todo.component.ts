import { Component, OnInit } from '@angular/core';
import { ToggleAllAction } from './todo.actions';
import { Store } from '../../../node_modules/@ngrx/store';
import { AppState } from '../app.reducers';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styles: []
})
export class TodoComponent implements OnInit {

  completado: boolean = false;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }

  toggleAll() {
    this.completado = !this.completado;
    const action = new ToggleAllAction(this.completado);
    this.store.dispatch(action);
  }

}
