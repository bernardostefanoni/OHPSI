import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionAbstractaComponent } from './section-abstracta.component';

describe('SectionAbstractaComponent', () => {
  let component: SectionAbstractaComponent;
  let fixture: ComponentFixture<SectionAbstractaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionAbstractaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionAbstractaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
