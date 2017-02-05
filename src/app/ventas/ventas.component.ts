import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent implements OnInit {

  constructor(public router:Router, public authService:AuthService) {
    this.authService.af.auth.subscribe((auth)=>{ 
      if(auth===null)
        this.router.navigate(['/']);
    });
  }

  ngOnInit() {
  }

}
