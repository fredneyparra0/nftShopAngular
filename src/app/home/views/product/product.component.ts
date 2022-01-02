import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProducts } from '../../interfaces/productsInterface';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product?: IProducts;

  constructor( private activatedRouter: ActivatedRoute, private productsService: ProductsService ) { }

  ngOnInit(): void {
    this.loadData();
    
    
  }
  
  async loadData () {
    this.activatedRouter.params.subscribe(async ({id}) => {
      await this.productsService.getProductById(id);
      this.product = this.productsService.product;
    });

  }

}
