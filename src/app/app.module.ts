import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import { appRoutes } from './app.routes';

const firebaseConfig = {
  apiKey: 'AIzaSyC_k9tVX9SEssFI7douyBHDXYjSqlrAYf4',
  authDomain: 'k-achina.firebaseapp.com',
  databaseURL: 'https://k-achina.firebaseio.com',
  storageBucket: 'k-achina.appspot.com',
  messagingSenderId: '852241425421'
};
const firebaseAuthConfig = {
  provider: AuthProviders.Password,
  method: AuthMethods.Password
}

import { AuthService } from './auth.service';
import { AuthGuard } from './app.guards';
import { ProductoService } from './producto.service';
import { TagService } from './tag.service';
import { UsersService } from './users.service';
import { MyBagService } from './my-bag.service';
import { VentasService } from './ventas.service';

import { AppComponent } from './app.component';
import { TiendaComponent } from './tienda/tienda.component';
import { VentasComponent } from './ventas/ventas.component';
import { AnalisisComponent } from './analisis/analisis.component';
import { ArticulosComponent } from './articulos/articulos.component';
import { ChatComponent } from './chat/chat.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductosComponent, ProductFilterPipe } from './productos/productos.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { ChartComponent } from './chart/chart.component';
import { TagsComponent } from './tags/tags.component';
import { ProductoComponent } from './producto/producto.component';
import { ChattComponent } from './chatt/chatt.component';
import { LoginComponent } from './login/login.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ChatDetailComponent } from './chat-detail/chat-detail.component';
import { ChatUserComponent } from './chat-user/chat-user.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { MyBagComponent } from './my-bag/my-bag.component';
import { CompraComponent } from './compra/compra.component';

@NgModule({
  declarations: [
    AppComponent,
    TiendaComponent,
    VentasComponent,
    AnalisisComponent,
    ArticulosComponent,
    ChatComponent,
    HomeComponent,
    AboutComponent,
    ProductosComponent,
    PedidosComponent,
    ChartComponent,
    TagsComponent,
    ProductoComponent,
    ChattComponent,
    LoginComponent,
    ProductDetailComponent,
    ChatDetailComponent,
    ChatUserComponent,
    ProductEditComponent,
    MyBagComponent,
    CompraComponent,
    ProductFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig),
    appRoutes
  ],
  providers: [
    /*{
      provide: LocationStrategy, useClass: HashLocationStrategy
    },*/
    AuthService,
    AuthGuard,
    ProductoService,
    TagService,
    UsersService,
    MyBagService,
    VentasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
