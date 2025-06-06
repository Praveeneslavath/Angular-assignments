import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildcompComponent } from './childcomp.component';

describe('ChildcompComponent', () => {
  let component: ChildcompComponent;
  let fixture: ComponentFixture<ChildcompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildcompComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
