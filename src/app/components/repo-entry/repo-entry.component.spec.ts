import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepoEntryComponent } from './repo-entry.component';

describe('RepoEntryComponent', () => {
  let component: RepoEntryComponent;
  let fixture: ComponentFixture<RepoEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RepoEntryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepoEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
