import { Injectable } from '@angular/core';
import { ApolloQueryResult } from '@apollo/client/core/types';
import { Apollo, gql} from 'apollo-angular';

import { INews } from '../interfaces/newsInterfaces';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  news: INews[] = [];

  constructor(private apollo : Apollo) { }

  async getAllNews () {
    const query = gql`
    query NewsAll {
      newsAll {
        _id
        title
        description
        image
        dateCreated
        dateOfUpdated
      }
    }
    `;

    const dataRes: any = this.apollo.query({query}).toPromise();

    return dataRes;

    // await dataRes

    // this.news = [...dataRes.__zone_symbol__value.data.newsAll]

    // dataRes.then(({ data: {newsAll } }:ApolloQueryResult<any>) => {
    //   this.news = newsAll;
    // });

  }
}
