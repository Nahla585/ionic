import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { AddReclamationPage } from './add-reclamation.page';

describe('AddReclamationPage', () => {
  let component: AddReclamationPage;
  let fixture: ComponentFixture<AddReclamationPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddReclamationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
