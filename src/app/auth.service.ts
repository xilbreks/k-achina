import { Injectable } from '@angular/core';
import { AngularFire, FirebaseAuthState, FirebaseObjectObservable } from 'angularfire2';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {

  constructor(public af: AngularFire) {
  }

  get authenticated(): boolean {
    return this.af.auth !== null;
  }
  get id(): string {
    return this.authenticated ? this.af.auth.getAuth().uid : '';
  }

  signIn(email:string,password):firebase.Promise<FirebaseAuthState>{
    return this.af.auth.login({email:email,password:password});
  }
  signOut():void{
    this.af.auth.logout();
  }
  signUp(email:string,password):firebase.Promise<FirebaseAuthState>{
    return this.af.auth.createUser({email:email,password:password});
  }

  isAdmin():Observable<boolean>{
    let obs = new Observable<boolean>((observer)=>{
      this.af.auth.subscribe((user)=>{
        if(user){
          this.af.database.object(`users/${user.uid}`, { preserveSnapshot: true })
            .subscribe(snapshot=>{
              observer.next(snapshot.val().admin);
            })
        }else{
          observer.next(false);
        }
      });
    });
    return obs;
  }

  isLogged():Observable<boolean>{
    let obs = new Observable<boolean>((observer)=>{
      this.af.auth.subscribe((user)=>{
        if(user){
          observer.next(true);
        }else{
          observer.next(false);
        }
      });
    });
    return obs;
  }
  
}
