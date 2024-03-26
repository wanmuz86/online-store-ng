import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {
  
  constructor(public authService: AuthService){

  }

  loginPressed(){
    console.log('login pressed')
    this.authService.login().subscribe(
      resp=> console.log(resp)
    )
  }

  logoutPressed(){
  this.authService.logout();
  }

}
