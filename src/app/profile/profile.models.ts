import gql from 'graphql-tag';

export const currentUserQuery = gql`
  query currentUser {
    currentUser {
      login
    }
  }
`;
