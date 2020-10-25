import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';


describe('AppComponent', () => {
  beforeEach(async(() => {
      TestBed.configureTestingModule({
        imports:[RouterTestingModule,HttpClientModule],
      declarations: [AppComponent,HeaderComponent]
     
    })
    .compileComponents();
  }));

 

  it('should create the app', () => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.componentInstance;
      expect(app).toBeTruthy();
  });
    
    
    
});
