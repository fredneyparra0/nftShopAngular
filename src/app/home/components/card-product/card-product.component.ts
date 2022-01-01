import { Component, Input, OnInit } from '@angular/core';
import { IProducts } from '../../interfaces/productsInterface';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.css']
})
export class CardProductComponent implements OnInit {

  // @Input() data?: IProducts;
  @Input() data: any;
  
  constructor() { }
  
  ngOnInit(): void {
  }

}
