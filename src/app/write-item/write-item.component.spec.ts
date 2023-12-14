import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WriteItemComponent } from './write-item.component';

describe('WriteItemComponent', () => {
  let component: WriteItemComponent;
  let fixture: ComponentFixture<WriteItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WriteItemComponent]
    });
    fixture = TestBed.createComponent(WriteItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
