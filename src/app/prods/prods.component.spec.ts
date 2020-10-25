import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { ProdsComponent } from './prods.component';
import { ProductService } from '../services/product.service';
import { HttpClientModule } from '@angular/common/http';
import { SearchPipe } from './search.pipe';
import { RouterTestingModule } from '@angular/router/testing';

describe('ProdsComponent', () => {
  let component: ProdsComponent;
  let fixture: ComponentFixture<ProdsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[FormsModule,HttpClientModule,RouterTestingModule],
      declarations: [ProdsComponent,SearchPipe],
      providers:[ProductService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
});
