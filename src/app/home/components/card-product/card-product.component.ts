import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProducts } from '../../interfaces/productsInterface';


@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.css']
})
export class CardProductComponent implements OnInit {

  @Input() data: any;
  
  constructor( private activatedRouter: ActivatedRoute ) { }

  ngOnInit(): void {

  }

}
