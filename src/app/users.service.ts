import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable()
export class UsersService {

  constructor(private authService:AuthService) { }

  getUsers():Observable<any>{
    let obs = new Observable<boolean>((observer)=>{
      this.authService.af.database.list('users').subscribe((data)=>{
        observer.next(data);
      });
    });
    return obs;
  }

  getUser(id:string):Observable<any>{
    let obs = new Observable<boolean>((observer)=>{
      this.authService.af.database.object(`users/${id}`).subscribe((data)=>{
        observer.next(data);
      });
    });
    return obs;
  }

  getMessages(id:string):Observable<any>{
    let obs = new Observable<any>((observer)=>{
      this.authService.af.database.list(`users/${id}/messages`,{
        query: {
          limitToLast: 6,
        }
      }).subscribe((data)=>{
        observer.next(data);
      });
    });
    return obs;
  }

  pushMessage(id:string,msg,me:boolean):void{
    if(me){
      let fecha = new Date();
      this.authService.af.database.list(`users/${id}/messages`).push({me:me,text:msg,date:fecha.toString()})
        .then(()=>{
          this.authService.af.database.object(`users/${id}`).update({lastmessage:msg,read:false,messageDate:fecha.toString()});
        });
    }else{
      let fecha = new Date();
      this.authService.af.database.list(`users/${id}/messages`).push({me:me,text:msg,date:fecha.toString()})
        .then(()=>{
          this.authService.af.database.object(`users/${id}`).update({read:true,messageDate:fecha.toString()});
        });
    }
      
  }

}
