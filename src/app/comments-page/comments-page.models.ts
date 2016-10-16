import gql from 'graphql-tag';

export const commentsPageQuery = gql`
  query commentsPage ($repoName: String!) {
    currentUser {
      login
    }
    entry (repoFullName: $repoName) {
      comments {
        postedBy
        createdAt
        content
      }
    }
  }
`;

export const submitCommentMutation = gql`
  mutation submitComment($repoFullName: String!, $commentContent: String!) {
    submitComment(repoFullName: $repoFullName, commentContent: $commentContent) {
      id
    }
  }
`;
