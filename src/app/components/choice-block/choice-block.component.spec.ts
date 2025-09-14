import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoiceBlockComponent } from './choice-block.component';

describe('ChoiceBlockComponent', () => {
  let component: ChoiceBlockComponent;
  let fixture: ComponentFixture<ChoiceBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChoiceBlockComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChoiceBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
