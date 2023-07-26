import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FruitvegesComponent } from './fruitveges.component';

describe('FruitvegesComponent', () => {
  let component: FruitvegesComponent;
  let fixture: ComponentFixture<FruitvegesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FruitvegesComponent]
    });
    fixture = TestBed.createComponent(FruitvegesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
