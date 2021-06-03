import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDynamicValidatorsComponent } from './add-dynamic-validators.component';

describe('AddDynamicValidatorsComponent', () => {
  let component: AddDynamicValidatorsComponent;
  let fixture: ComponentFixture<AddDynamicValidatorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDynamicValidatorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDynamicValidatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
