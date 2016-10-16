import gql from 'graphql-tag';

export const feedQuery = gql`
  query Feed {
    feed {
      repository {
        name
        owner
      }
    }
  }
`;