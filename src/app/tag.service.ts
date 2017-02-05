import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable()
export class TagService {

  constructor(private authService:AuthService) {
  }

  getTags():Observable<any>{
    let obs = new Observable<boolean>((observer)=>{
      this.authService.af.database.list('tags').subscribe((data)=>{
        observer.next(data);
      });
    });
    return obs;
  }

}
