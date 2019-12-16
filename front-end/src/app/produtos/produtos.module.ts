
import { ProdutoFormComponent } from './produto-form/produto-form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutoListComponent } from './produto-list/produto-list.component';
import { produtosRouting } from './produtos.routing';
import { ProdutosService } from './produtos.service.service';
import { FormsModule } from '@angular/forms';
import { ProdutoCrudComponent } from './produto-crud/produto-crud.component';

@NgModule({
  imports: [
    CommonModule,produtosRouting,FormsModule
  ],
  declarations: [ProdutoListComponent, ProdutoFormComponent, ProdutoCrudComponent],
  providers: [ProdutosService]
})
export class ProdutoModule { }
