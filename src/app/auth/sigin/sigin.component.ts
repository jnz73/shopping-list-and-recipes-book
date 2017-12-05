import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {NgForm} from '@angular/forms';
import * as fromApp from '../../store/app.reducer';
import * as AuthAction from '../../auth/store/auth.actions';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-sigin',
  templateUrl: './sigin.component.html',
  styleUrls: ['./sigin.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SiginComponent implements OnInit {

  constructor(private store: Store<fromApp.AppState>) {
  }

  ngOnInit() {
  }

  onSignIn(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.store.dispatch(new AuthAction.TrySignIn({username: email, password: password}));

  }
}
