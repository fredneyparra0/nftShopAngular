import { Component, OnInit } from '@angular/core';
import { IProducts } from '../../interfaces/productsInterface';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-table-products',
  templateUrl: './table-products.component.html',
  styleUrls: ['./table-products.component.css']
})
export class TableProductsComponent implements OnInit {

  products: IProducts[] = [];
  pageProducts: number = 1;

  constructor( private productsService: ProductsService ) { }

  ngOnInit(): void {
    this.loadData();
  }

  async loadData () {
    // this setTimeOut is for example
    setTimeout(async() => {
      await this.productsService.getAllProducts(this.pageProducts);
      this.products = this.productsService.products;
    },1500)
  }

  async nextPageProducts () {
    this.pageProducts += 1;
    await this.productsService.getAllProducts(this.pageProducts);
    this.products = this.productsService.products;
  }

  async previouslyPageProducts () {
    this.pageProducts -= 1;
    await this.productsService.getAllProducts(this.pageProducts);
    this.products = this.productsService.products;
  }

}
