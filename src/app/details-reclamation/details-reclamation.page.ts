import { Component, OnInit } from '@angular/core';
import { ReclamationServiceService } from '../reclamations-service.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-details-reclamation',
  templateUrl: './details-reclamation.page.html',
  styleUrls: ['./details-reclamation.page.scss'],
})
export class DetailsReclamationPage implements OnInit {
  selectedreclamation: any;

  constructor(
    private reclamationService: ReclamationServiceService,
    private activatedRoute: ActivatedRoute) {}

  getOneReclamation() {
    this.activatedRoute.paramMap.subscribe((params) => { 
      const id = params.get('id');
      console.log(id);

      if (id) {
        this.reclamationService.getOnebyId(id).subscribe((reclamation) => {
          this.selectedreclamation = reclamation;
          console.log(this.selectedreclamation);
        });
      }
    });
  }

  ngOnInit() {
    this.getOneReclamation();
  }
}
