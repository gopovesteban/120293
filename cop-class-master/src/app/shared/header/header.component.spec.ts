import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of as observableOf } from 'rxjs';

import { HeaderComponent } from './header.component';

// Services
import { AssetService } from 'src/app/shared';

class MockAssetService {

  getUserInfo() {
    return observableOf({ name: 'Test Name', idsid: 'idsid' });
  }

}

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [HeaderComponent],
      providers: [
        { provide: AssetService, useClass: MockAssetService }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
