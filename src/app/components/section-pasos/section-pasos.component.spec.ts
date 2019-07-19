import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionPasosComponent } from './section-pasos.component';

describe('SectionPasosComponent', () => {
  let component: SectionPasosComponent;
  let fixture: ComponentFixture<SectionPasosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionPasosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionPasosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
