import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-sigin',
  templateUrl: './sigin.component.html',
  styleUrls: ['./sigin.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SiginComponent implements OnInit {

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
  }

  onSignIn(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.authService.signInUser(email, password);

  }
}
