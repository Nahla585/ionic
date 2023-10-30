import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReclamationServiceService {

  constructor(private http: HttpClient) { }
  addReclamation(nReclamation:any) {
    return this.http.post(
      'http://localhost:3000/api/reclamation',
      nReclamation
    );
  }
  getAllReclamations() {
    return this.http.get(
      'http://localhost:3000/api/reclamations'
    );
  }

  getOnebyId(id: string) {
    return this.http.get(
      `/${id}.json`
    );
  }
}
