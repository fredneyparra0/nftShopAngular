import { Injectable } from '@angular/core';
import { ApolloQueryResult } from '@apollo/client/core/types';
import { Apollo, gql } from 'apollo-angular';

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

    const dataRes: Promise<ApolloQueryResult<any>> = this.apollo.query({query}).toPromise();
    const resNews = await dataRes;
    this.news = [...resNews.data.newsAll];
  }
}
