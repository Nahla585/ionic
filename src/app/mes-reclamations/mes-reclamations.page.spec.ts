import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { MesReclamationsPage } from './mes-reclamations.page';

describe('MesReclamationsPage', () => {
  let component: MesReclamationsPage;
  let fixture: ComponentFixture<MesReclamationsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MesReclamationsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
