import { Injectable } from '@angular/core';
import { ApolloQueryResult } from '@apollo/client/core/types';
import { Apollo, gql } from 'apollo-angular';
import { IUser } from '../interfaces/userInterface';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  auth: boolean = false;
  constructor( private apollo: Apollo ) { }

  async createUser ({ name, email, pass }: any) {
    const mutation = gql`
      mutation {
        userCreateUser(data: { name: "${name}", email: "${email}", pass: "${pass}" } ) {
          message
          ok
        }
      }
    `;
    
    const dataRes = this.apollo.mutate({ mutation }).toPromise();
    const resPetition: any = await dataRes;
    return {...resPetition};
  }

}
