import gql from 'graphql-tag';

export const feedQuery = gql`
  query Feed {
    feed {
      createdAt
      commentsCount
      postedBy
      repository {
        name
        owner
        description
        stars
        issues
      }
    }
  }
`;