import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostMethodComponent } from './post-method.component';

describe('PostMethodComponent', () => {
  let component: PostMethodComponent;
  let fixture: ComponentFixture<PostMethodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostMethodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostMethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
