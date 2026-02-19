import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtraInfos } from './extra-infos';

describe('ExtraInfos', () => {
  let component: ExtraInfos;
  let fixture: ComponentFixture<ExtraInfos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExtraInfos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExtraInfos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
