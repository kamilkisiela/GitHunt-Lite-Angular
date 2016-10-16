import gql from 'graphql-tag';

export const commentsPageQuery = gql`
  query commentsPage {
    currentUser {
      login
    }
  }
`;
