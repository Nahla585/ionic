import { Component, OnInit } from '@angular/core';
import { ReclamationServiceService } from '../reclamations-service.service';

@Component({
  selector: 'app-add-reclamation',
  templateUrl: './add-reclamation.page.html',
  styleUrls: ['./add-reclamation.page.scss'],
})
export class AddReclamationPage implements OnInit {

  constructor(private ReclamationService:ReclamationServiceService) { }
  email :string=''
  message :string=''

  addNewReclamation() {
    let newReclamation = {
      email:this.email,
      message:this.message,
      
    };


    this.ReclamationService.addReclamation(newReclamation).subscribe({
      next: (response) => {
        console.log('Réclamation ajoutée avec succès:', response);
      },
      error: (err) => {
        console.error('Une erreur est produite:', err);
      },
    });
  }

  ngOnInit() {
  }

}
