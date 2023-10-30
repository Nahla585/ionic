import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { DetailsReclamationPage } from './details-reclamation.page';

describe('DetailsReclamationPage', () => {
  let component: DetailsReclamationPage;
  let fixture: ComponentFixture<DetailsReclamationPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DetailsReclamationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
