import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegistroComponent } from './components/registro/registro.component';
import { BusquedaPipe } from './pipes/busqueda.pipe';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { HotelesComponent } from './components/hoteles/hoteles.component';
import { AdministracionComponent } from './components/administracion/administracion.component';
import { NavbarVistasComponent } from './components/navbar-vistas/navbar-vistas.component';
import { UsuariosRegistradosComponent } from './components/usuarios-registrados/usuarios-registrados.component';
import { GraficaHotelesComponent } from './components/grafica-hoteles/grafica-hoteles.component';
import { ChartsModule } from '@rinminase/ng-charts';
import { EventosComponent } from './components/eventos/eventos.component';
import { PruebaComponent } from './components/prueba/prueba.component';
import { RouterHotelComponent } from './components/router-hotel/router-hotel.component';
import { EditarComponent } from './components/editar/editar.component';

import { RouterModule, Routes, ExtraOptions } from '@angular/router';


const routerOptions: ExtraOptions = {
  anchorScrolling: "enabled",
  scrollPositionRestoration: 'enabled'
}



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InicioComponent,
    NavbarComponent,
    RegistroComponent,
    BusquedaPipe,
    UsuariosComponent,
    HotelesComponent,
    AdministracionComponent,
    NavbarVistasComponent,
    UsuariosRegistradosComponent,
    GraficaHotelesComponent,
    EventosComponent,
    PruebaComponent,
    RouterHotelComponent,
    EditarComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule,ChartsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
