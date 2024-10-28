import { gql } from '@apollo/client';

export const DELETE_POST = gql`
  mutation DeletePost($id: ID!) {
    deletePost(id: $id)
  }
`;

export const CREATE_POST = gql`
  mutation CreatePost($title: String!, $content: String) {
    createPost(title: $title, content: $content) {
      id
      title
      content
    }
  }
`;
