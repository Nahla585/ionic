import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private UserService:UserService,
    private router: Router,
    public toastController: ToastController,) { }
  users:any;
  email: any ;
  password: any;
  token:any

  login() {
    let user = {
      email:this.email,
      password:this.password,
      
    };

    this.UserService.login(user).subscribe({
      next:response=>{
        console.log(response);
        console.log(user);
       
      localStorage.setItem('token',this.token);
      },
      error:error=>{
        console.log(error);
        
      }
    })
    /*
   const foundUser = this.users.find((user: any) => user.email === this.email && user.password === this.password);

  console.log(foundUser)
  ;*/
  
    /*if (foundUser) {
      this.router.navigate(['/add-reclamation']);
      localStorage.setItem('username', foundUser.nom+" "+foundUser.prenom);
    } else {
      console.log('Invalid email or password');
    }
    */
    
  }
  
  getAllUsers(){
    
    this.UserService.getAllUsers().subscribe({
      next: (response) => {
       
        
       this.users=response
        console.log(this.users);
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  ngOnInit() {
    this.getAllUsers()
    
  }

}
