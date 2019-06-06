import { gql } from "apollo-boost";

export const LOG_In = gql`
  mutation requestSecret($email: String!) {
    requestSecret(email: $email)
  }
`;
