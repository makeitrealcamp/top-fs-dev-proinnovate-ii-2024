import { gql } from "@apollo/client";

export const GET_POSTS = gql`
  query GetPosts {
    posts {
      id
      title
      content
      author {
        id
        name
      }
    }
  }
`;

export const GET_POST=gql`
query getPost($id:ID!){
    getPost(id:$id){
        title
    }
}
`