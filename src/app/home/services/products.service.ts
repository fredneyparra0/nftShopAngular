import { Injectable } from '@angular/core';
import { ApolloQueryResult } from '@apollo/client/core/types';
import { Apollo, gql } from 'apollo-angular';

import { IProducts } from '../interfaces/productsInterface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: any[] = [];
  product?: any; 

  constructor( private apollo: Apollo ) { }

  async getAllProducts (Npage: number) {
    const query = gql`
    query {
      getAllProducts ( nPage: ${Npage} ) {
          _id
          name
          description
          image
          priceEth
          category
          dateOfCreated
      }
    }
    `;
  
    const dataRes: Promise<ApolloQueryResult<any>> = this.apollo.query({query}).toPromise();
    const resNews = await dataRes;
    this.products = [...resNews.data.getAllProducts];
  }


  async getProductById (id: string) {
    const query = gql`
    query {
      getProductById(idProduct: "${id}") {
        _id
        category
        dateOfCreated
        description
        image
        isDeleted
        isPrivate
        name
        priceEth
      }
    } 
    `;

    const dataRes: Promise<ApolloQueryResult<any>> = this.apollo.query({query}).toPromise(); 
    const resProduct = await dataRes;
    this.product = {...resProduct.data.getProductById};

  }

}
