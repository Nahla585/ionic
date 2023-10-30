import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(private UserService:UserService) { }
  prenom:string | undefined;
  nom:string | undefined;
  telephone:string | undefined;
  email:string | undefined;
  poste:string | undefined;
  grade:string | undefined;
  password:string | undefined;
  register() {
    let newUser = {
      prenom: this.prenom,
      nom: this.nom,
      telephone:this.telephone,
      email: this.email,
      poste : this.poste,
      grade : this.grade,
      password: this.password,
      
    };

    this.UserService.Register(newUser).subscribe({
      next: (response) => {
        console.log('User Created With success ', response);
        
      },
      error: (err) => {
        console.error('An error occurred:', err);
      },
    });
    console.log(newUser);
    
  }

  ngOnInit() {
  }

}
