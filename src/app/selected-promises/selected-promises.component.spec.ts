import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedPromisesComponent } from './selected-promises.component';

describe('SelectedPromisesComponent', () => {
  let component: SelectedPromisesComponent;
  let fixture: ComponentFixture<SelectedPromisesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectedPromisesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedPromisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
