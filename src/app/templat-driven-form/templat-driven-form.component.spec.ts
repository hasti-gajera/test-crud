import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatDrivenFormComponent } from './templat-driven-form.component';

describe('TemplatDrivenFormComponent', () => {
  let component: TemplatDrivenFormComponent;
  let fixture: ComponentFixture<TemplatDrivenFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TemplatDrivenFormComponent]
    });
    fixture = TestBed.createComponent(TemplatDrivenFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
