import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './app.guards';

import { TiendaComponent } from './tienda/tienda.component';
import { VentasComponent } from './ventas/ventas.component';
import { AnalisisComponent } from './analisis/analisis.component';
import { ArticulosComponent } from './articulos/articulos.component';
import { ChatComponent } from './chat/chat.component';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductosComponent } from './productos/productos.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { LoginComponent } from './login/login.component';
import { ChatUserComponent } from './chat-user/chat-user.component';
import { MyBagComponent } from './my-bag/my-bag.component';
import { CompraComponent } from './compra/compra.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { ChartComponent } from './chart/chart.component';
import { TagsComponent } from './tags/tags.component';
import { ProductoComponent } from './producto/producto.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ChattComponent } from './chatt/chatt.component';
import { ChatDetailComponent } from './chat-detail/chat-detail.component';


const tiendaRoutes: Routes = [
    {   path: 'home',
        component: HomeComponent
    },{ path: 'about',
        component: AboutComponent
    },{ path: 'productos',
        component: ProductosComponent
    },{ path: 'productos/:id',
        component: ProductDetailComponent
    },{ path: 'login',
        component: LoginComponent
    },{ path: 'chat',
        component: ChatUserComponent
    },{ path: 'mybag',
        component: MyBagComponent
    },{ path: 'compra',
        component: CompraComponent
    }
];
const ventasRoutes: Routes = [
    {   path: 'pedidos',
        component: PedidosComponent
    }
];
const analisisRoutes: Routes = [
    {   path: 'chart',
        component: ChartComponent
    }
];
const articulosRoutes: Routes = [
    {   path: 'producto',
        component: ProductoComponent
    },{   path: 'producto/:id',
        component: ProductEditComponent
    },
    {   path: 'tags',
        component: TagsComponent
    }
];
const chatRoutes: Routes = [
    {   path: 'chatt',
        component: ChattComponent
    },{   path: 'chatt/:id',
        component: ChatDetailComponent
    }
];

const routes: Routes = [
    {
        path: '',
        redirectTo: 'tienda/home',
        pathMatch: 'full'
    },
    {
        path: 'tienda',
        component: TiendaComponent,
        children: tiendaRoutes
    },
    {
        path: 'ventas',
        component: VentasComponent,
        children: ventasRoutes,
        canActivate: [AuthGuard]
    },
    {
        path: 'analisis',
        component: VentasComponent,
        children: analisisRoutes,
        canActivate: [AuthGuard]
    },
    {
        path: 'articulos',
        component: VentasComponent,
        children: articulosRoutes,
        canActivate: [AuthGuard]
    },
    {
        path: 'chat',
        component: ChatComponent,
        children: chatRoutes,
        canActivate: [AuthGuard]
    }
];

export const appRoutes = RouterModule.forRoot(routes);