import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateMenuComponent } from './private-menu.component';

describe('PrivateMenuComponent', () => {
  let component: PrivateMenuComponent;
  let fixture: ComponentFixture<PrivateMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrivateMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrivateMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
