import { Injectable } from '@angular/core';
import { ApolloQueryResult } from '@apollo/client/core/types';
import { Apollo, gql } from 'apollo-angular';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: any[] = [];

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

}
