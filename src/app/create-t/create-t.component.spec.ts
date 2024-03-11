import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTComponent } from './create-t.component';

describe('CreateTComponent', () => {
  let component: CreateTComponent;
  let fixture: ComponentFixture<CreateTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateTComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
