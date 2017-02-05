import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FirebaseObjectObservable, AngularFire } from 'angularfire2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  nuevo:boolean;
  signInLoading:boolean;
  signUpLoading:boolean;
  error;
  user: FirebaseObjectObservable<any>;

  constructor(public authService: AuthService, private af:AngularFire, private router:Router) {
    this.nuevo = false;
    this.signInLoading = false;
    this.signUpLoading = false;
    this.error = null;
  }

  login(email,password){
    this.signInLoading = true;
    this.authService.signIn(email.value,password.value)
    .then((user)=>{
      this.signInLoading = false;
      this.error = null;
      this.router.navigate(['/tienda/home']);
    })
    .catch((err:any)=>{
      this.signInLoading = false;
      password.value = "";
      switch(err.code){
        case 'auth/invalid-email':
          this.error = {
            name: 'Email invalido',
            description: 'El Email que ha ingresado no es valido'
          };
          break;
        case 'auth/user-disabled':
          this.error = {
            name: 'Cuenta deshabilitada',
            description: 'Su cuenta ha sido deshabilitada y no podra acceder'
          };
          break;
        case 'auth/user-not-found':
          this.error = {
            name: 'No existes',
            description: 'No existe ningun usuario con el correo ingresado'
          };
          break;
        case 'auth/wrong-password':
          this.error = {
            name: 'Password incorrecto',
            description: 'La contraseña que ha introducio es incorrecta'
          };
          break;
        default:
          this.error = {
            name: 'Ocurrio un error',
            description: 'Complete los campos'
          }; 
      }
    });
  }

  logout(){
    this.authService.signOut();
    this.router.navigate(['/tienda/home']);
  }

  showsignup():boolean{
    this.nuevo = true;
    this.error = false;
    return false;
  }
  hidesignup():boolean{
    this.nuevo = false;
    this.error = false;
    return false;
  }

  signup(firstname,lastname,email,password,cpassword){
    if(password.value!=cpassword.value){
      cpassword.value = "";
      this.error = {
        name: 'Password',
        description: 'Las contraseñas no coninciden'
      };
      return;
    }
    this.signUpLoading = true;
    this.authService.signUp(email.value,password.value)
    .then((user)=>{
      this.signUpLoading = false;
      this.error = null;
      this.nuevo = false;
      // Agregar el usuario a la lista negra
      this.user = this.af.database.object(`/users/${user.uid}`);
      this.user.update({
        firstname: firstname.value,
        lastname: lastname.value,
        email: email.value,
        read: true,
        admin: false,
        lastmessage: 'hola',
        messageDate: new Date()
      });
    })
    .catch((err:any)=>{
      this.signUpLoading = false;
      switch(err.code){
        case 'auth/invalid-email':
          this.error = {
            name: 'Email invalido',
            description: 'El Email que ha ingresado no es valido'
          };
          break;
        case 'auth/email-already-in-use':
          this.error = {
            name: 'Email en uso',
            description: 'El Email que ha ingresado ya esta registrado'
          };
          break;
        case 'auth/operation-not-allowed':
          this.error = {
            name: 'Operacion no permitida',
            description: 'Ya no es posible crear mas usuarios para esta aplicasion'
          };
          break;
        case 'auth/weak-password':
          this.error = {
            name: 'Password corto',
            description: 'La contraseña debe tener al menos 6 caracteres'
          };
          break;
        default:
          this.error = {
            name: 'Ocurrio un error',
            description: 'Ocurrio un error inesperado'
          }; 
      }
    });
  }

  ngOnInit() {
  }

}
