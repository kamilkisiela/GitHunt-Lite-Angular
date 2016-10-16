import gql from 'graphql-tag';

export const commentsPageQuery = gql`
  query commentsPage {
    currentUser {
      login
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
