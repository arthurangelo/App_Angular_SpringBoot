
import { Component, OnInit } from '@angular/core';
import { Produto } from '../produto';
import { ProdutosService } from '../produtos.service.service';

@Component({
  selector: 'app-produto-list',
  templateUrl: './produto-list.component.html',
  styleUrls: ['./produto-list.component.css']
})
export class ProdutoListComponent implements OnInit {

  constructor(private produtoService: ProdutosService) { }

  produtos: Produto[] = [];

  ngOnInit() {
    this.produtoService.getAll()
      .subscribe(data => this.produtos = data,
        err => alert('aconteceu um erro ' + err)
      );
    this.produtoService.produtosChanged.subscribe(
      (observable: any) => observable.subscribe(
        data => this.produtos = data

      )
    );

  }

}

