import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChaildcomponmentComponent } from './chaildcomponment.component';

describe('ChaildcomponmentComponent', () => {
  let component: ChaildcomponmentComponent;
  let fixture: ComponentFixture<ChaildcomponmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChaildcomponmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChaildcomponmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
