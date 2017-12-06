import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {environment} from '../environments/environment';

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
import {StoreRouterConnectingModule} from '@ngrx/router-store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';


// this file contains all the modules imported that makes the app and is the root of the app
@NgModule({
  // name of the component
  declarations: [
    AppComponent
  ],
  // modules imported
  imports: [
    // contains CommonModule:
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    ShoppingListModule,
    AuthModule,
    CoreModule,
    // ngRx import:
    // ngRx inport of the app reducers bundle (pass as parameter the constant not a object):
    StoreModule.forRoot(reducers),
    // ngrx/effects inport and registration:
    EffectsModule.forRoot([AuthEffects, ShoppingListModule]),
    // ngrx for routes:
    StoreRouterConnectingModule,
    // to see state at runtime to use during development with redux extension in chrome (also routes with the import above):
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  // where to start the app
  bootstrap: [AppComponent]
})
export class AppModule {
}
