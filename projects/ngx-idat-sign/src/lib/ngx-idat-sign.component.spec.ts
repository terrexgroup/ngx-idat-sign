import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxIdatSignComponent } from './ngx-idat-sign.component';

describe('NgxIdatSignComponent', () => {
  let component: NgxIdatSignComponent;
  let fixture: ComponentFixture<NgxIdatSignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxIdatSignComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxIdatSignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
