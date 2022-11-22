import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreownedComponent } from './preowned.component';

describe('PreownedComponent', () => {
  let component: PreownedComponent;
  let fixture: ComponentFixture<PreownedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreownedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreownedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
