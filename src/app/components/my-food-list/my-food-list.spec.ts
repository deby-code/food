import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFoodList } from './my-food-list';

describe('MyFoodList', () => {
  let component: MyFoodList;
  let fixture: ComponentFixture<MyFoodList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyFoodList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyFoodList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
