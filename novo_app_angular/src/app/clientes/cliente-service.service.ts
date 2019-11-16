import { Injectable, EventEmitter } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Cliente } from './cliente';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class ClientesService {

    private url = 'http://localhost:8080/clientes';

    clientesChanged = new EventEmitter<Observable<Cliente[]>>();

    constructor(private http: HttpClient) { }

    public getAll(): Observable<any> {
        return this.http.get(this.url);
    }

    private handleError(error: any) {
        const erro = error.messsage || 'Server error';
        console.error('Ocorreu um erro ', error);
        return Observable.throw(erro);
    }


}
