import { Injectable } from '@angular/core';
import { LoginService } from './login.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Entidad } from '../models/entidad.model';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  public url: String = 'http://localhost:3000/api';
  public headersVariable = new HttpHeaders().set(
    'Content-Type',
    'application/json'
  );

  public identidad;

  constructor(public _http: HttpClient, public _loginService: LoginService) {
    this.identidad = JSON.parse(localStorage.getItem('identidad'));
  }

  perfilId(id: String, token): Observable<any> {
    let headersToken = this.headersVariable.set('Authorization', token);
    return this._http.get(this.url + '/editarPerfil/' + id, {
      headers: headersToken,
    });
  }

  editarPerfil(modelo: Entidad, token): Observable<any> {
    let headersToken = this.headersVariable.set('Authorization', token);
    let parametros = JSON.stringify(modelo);

    return this._http.put(
      this.url + '/modificarPerfil/' + modelo._id,
      parametros,
      { headers: headersToken }
    );
  }

  eventosHotel(id:String,token):Observable<any>{
    let headersToken = this.headersVariable.set('Authorization', token);
    return this._http.get(this.url+"/eventoHotel/"+id, { headers: headersToken });
  }

  verHotel(id: String, token): Observable<any> {
    let headersToken = this.headersVariable.set('Authorization', token);
    return this._http.get(this.url + '/verHotel/' + id, {
      headers: headersToken,
    });
  }

  verHabitacion(id: String, token): Observable<any> {
    let headersToken = this.headersVariable.set('Authorization', token);
    return this._http.get(this.url + '/verCuarto/' + id, {
      headers: headersToken,
    });
  }

  reservaciones(id: String, token): Observable<any> {
    let headersToken = this.headersVariable.set('Authorization', token);
    return this._http.get(this.url + '/misReservas/' + id, {
      headers: headersToken,
    });
  }

  pagarHabitacion( cuarto: any,dias:any, token): Observable<any> {
    var ID = this.identidad._id;
    let headersToken = this.headersVariable.set('Authorization', token);
    return this._http.post(
      this.url + '/pagar/' + ID + '/' + cuarto+"/"+dias,
      {
        headers: headersToken,
      }
    );
  }

  cancelarReservacion(id: String, token): Observable<any> {
    let headersToken = this.headersVariable.set('Authorization', token);
    return this._http.put(this.url + '/cancelarReservacion/' + id, {
      headers: headersToken,
    });
  }

  borrarPerfil(token): Observable<any> {
    let id = this.identidad._id;
    let headersToken = this.headersVariable.set('Authorization', token);
    return this._http.delete(this.url + '/borrarPerfil/' + id, {
      headers: headersToken,
    });
  }

  verHistorial(ID:String, token): Observable<any> {
    let headersToken = this.headersVariable.set('Authorization', token);
    return this._http.get(this.url + '/historial/' + ID, {
      headers: headersToken,
    });
  }

}
