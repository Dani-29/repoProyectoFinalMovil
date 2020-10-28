import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PlatziPage } from './platzi.page';

describe('PlatziPage', () => {
  let component: PlatziPage;
  let fixture: ComponentFixture<PlatziPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlatziPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PlatziPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
