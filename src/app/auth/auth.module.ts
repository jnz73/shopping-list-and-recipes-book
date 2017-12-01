import {NgModule} from '@angular/core';
import {SiginComponent} from './sigin/sigin.component';
import {SignupComponent} from './signup/signup.component';
import {FormsModule} from '@angular/forms';
import {AuthRoutingModule} from './auth-routing.module';

@NgModule({
  declarations: [
    SiginComponent,
    SignupComponent
  ],
  imports: [
    FormsModule,
    AuthRoutingModule
  ]
})
export class AuthModule {
}
