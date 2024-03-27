import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {
  username:string = "david_r";
  password:string = "3478*#54";
  
  constructor(public authService: AuthService){

  }

  loginPressed(username:string,password:string){
    this.authService.login(username,password).subscribe(
      resp=> console.log(resp)
    )
  }

  logoutPressed(){
  this.authService.logout();
  }

}
