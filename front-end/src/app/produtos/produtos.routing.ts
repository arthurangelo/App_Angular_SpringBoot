import { ProdutoCrudComponent } from './produto-crud/produto-crud.component';
import { Produto } from './produto';
import { Routes, RouterModule } from "@angular/router";


const PRODUTOS_ROUTES: Routes = [
    {
        path: '',
        component: ProdutoCrudComponent
    },
    {
        path: ':id',
        component: ProdutoCrudComponent
    }

];
export const produtosRouting = RouterModule.forChild(PRODUTOS_ROUTES);
