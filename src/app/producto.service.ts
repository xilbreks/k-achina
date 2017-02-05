import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class ProductoService {

  constructor(private authService:AuthService) {
  }

  getProductos():Observable<any>{
    let obs = new Observable<boolean>((observer)=>{
      this.authService.af.database.list('products').subscribe((data)=>{
        observer.next(data);
      });
    });
    return obs;
  }

  getProducto(id):Observable<any>{
    let obs = new Observable<boolean>((observer)=>{
      this.authService.af.database.object(`products/${id}`).subscribe((data)=>{
        observer.next(data);
      });
    });
    return obs;
  }

  updateProducto(id:string,des:string,name:string,price:number):void{
    this.authService.af.database.object(`products/${id}`).update({
      description: des,
      name: name,
      price: price
    });
  }

}
