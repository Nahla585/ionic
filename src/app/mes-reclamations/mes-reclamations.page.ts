import { Component, OnInit } from '@angular/core';
import { ReclamationServiceService } from '../reclamations-service.service';

@Component({
  selector: 'app-mes-reclamations',
  templateUrl: './mes-reclamations.page.html',
  styleUrls: ['./mes-reclamations.page.scss'],
})
export class MesReclamationsPage implements OnInit {
  tabreclamations: any;
  user:any;

  constructor(private reclamationService:ReclamationServiceService) { }

  
  getAllReclamations() {
    this.tabreclamations = [];
    this.reclamationService.getAllReclamations().subscribe({
      next: (response: {[key: string]: any}) => {
        for (const key in response) {
          if (response[key].user === this.user) {
            this.tabreclamations.push({ id: key, ...response[key] });
          }
        }
        console.log(this.tabreclamations);
      },
      error: (err) => {
        console.error(err);
      },
    });
  }


  ngOnInit() {
    this.user = localStorage.getItem('username');
    this.getAllReclamations();
  }

}
