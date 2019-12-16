import { ProdutoListComponent } from './produtos/produto-list/produto-list.component';

import { Produto } from './produtos/produto';

import { Routes, RouterModule } from '@angular/router'
import { AuthGuard } from './login/login-guards';
import { LoginComponent } from './login/login/login.component';
import { PedidoComponent } from './pedido/pedido/pedido.component';
const routes: Routes = [
    {
        path: 'clientes',
        loadChildren: () => import('app/clientes/clientes.module').then(m => m.ClientesModule),
        canActivate: [AuthGuard]
    },
    {
        path: 'signin',
        component: LoginComponent
    },
    {
      path: 'produtos',
      loadChildren: () => import('app/produtos/produtos.module').then(m => m.ProdutoModule),
        canActivate: [AuthGuard]
  },
    {
        path: 'pedidos',
        component: PedidoComponent

    }
];
export const RoutingModule = RouterModule.forRoot(routes);
