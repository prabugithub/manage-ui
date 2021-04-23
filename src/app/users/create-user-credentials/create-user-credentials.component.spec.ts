import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUserCredentialsComponent } from './create-user-credentials.component';

describe('CreateUserCredentialsComponent', () => {
  let component: CreateUserCredentialsComponent;
  let fixture: ComponentFixture<CreateUserCredentialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateUserCredentialsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateUserCredentialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
