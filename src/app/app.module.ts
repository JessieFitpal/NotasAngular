import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environment';
import { ConexionService } from './services/conexion.service';
import { ListaComponent } from './components/lista/lista.component';
import { ListaGuardarComponent } from './components/lista-guardar/lista-guardar.component'

@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    ListaGuardarComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    ConexionService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
