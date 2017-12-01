import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SiginComponent} from './sigin/sigin.component';
import {SignupComponent} from './signup/signup.component';

const authRoutes: Routes = [
  {path: 'signin', component: SiginComponent},
  {path: 'signup', component: SignupComponent}
];

@NgModule({
  imports: [RouterModule.forChild(authRoutes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
