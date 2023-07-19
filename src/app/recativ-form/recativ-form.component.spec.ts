import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecativFormComponent } from './recativ-form.component';

describe('RecativFormComponent', () => {
  let component: RecativFormComponent;
  let fixture: ComponentFixture<RecativFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecativFormComponent]
    });
    fixture = TestBed.createComponent(RecativFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
