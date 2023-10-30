import { Component, OnInit } from '@angular/core';
import { ReclamationServiceService } from '../reclamations-service.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  tabreclamations :any;
 

  constructor(private reclamationService:ReclamationServiceService) { }

  getAllReclamations() {
   
    this.reclamationService.getAllReclamations().subscribe({
      next: (response) => {
      {
          this.tabreclamations=response;
          console.log(response);
          console.log(this.tabreclamations);
          
          
        }
        console.log(this.tabreclamations);
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  logout(){
    localStorage.removeItem("username")
  }

  ngOnInit() {
  this.getAllReclamations()
  }
}

