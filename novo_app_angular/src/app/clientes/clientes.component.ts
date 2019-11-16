import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { ClientesService } from './cliente-service.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.sass']
})
export class ClientesComponent implements OnInit {

  constructor(private clienteService: ClientesService) { }

  clientes: Cliente[] = [];

  ngOnInit() {
    this.clienteService.getAll()
      .subscribe(data => this.clientes = data,
        err => alert('aconteceu um erro ' + err)
      );
    this.clienteService.clientesChanged.subscribe(
      (observable: any) => observable.subscribe(
        data => this.clientes = data
      )
    );
  }

}
