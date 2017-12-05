import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {SharedModule} from './shared/shared.module';
import {ShoppingListModule} from './shopping-list/shopping-list.module';
import {AuthModule} from './auth/auth.module';
import {CoreModule} from './core/core.module';
import {StoreModule} from '@ngrx/store';
import {reducers} from './store/app.reducer';
import {EffectsModule} from '@ngrx/effects';
import {AuthEffects} from './auth/store/auth.effects';


// this file contains all the modules imported that makes the app and is the root of the app
@NgModule({
  // name of the component
  declarations: [
    AppComponent
  ],
  // modules imported
  imports: [
    BrowserModule, // contains CommonModule
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    ShoppingListModule,
    AuthModule,
    CoreModule,
    // ngRx import
    StoreModule.forRoot(reducers), // ngRx inport of the app reducers bundle (pass as parameter the constant not a object)
  EffectsModule.forRoot([AuthEffects])// ngrx/effects inport and registration
  ],
  // services
  providers: [],
  // where to start the app
  bootstrap: [AppComponent]
})
export class AppModule {
}
