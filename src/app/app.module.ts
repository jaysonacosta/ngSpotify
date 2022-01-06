import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

// Components
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';

// NPM
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CallbackComponent } from './components/callback/callback.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, CallbackComponent],
  imports: [BrowserModule, AppRoutingModule, NgbModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
