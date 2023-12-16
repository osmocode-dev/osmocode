import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OsmoNgComponent } from './osmo-ng.component';

describe('OsmoNgComponent', () => {
  let component: OsmoNgComponent;
  let fixture: ComponentFixture<OsmoNgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OsmoNgComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OsmoNgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
