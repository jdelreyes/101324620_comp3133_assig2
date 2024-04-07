import { gql } from 'apollo-angular';

export const GET_EMPLOYEES = gql`
  query GetEmployees {
    getEmployees {
      _id
      firstName
      lastName
      email
      gender
      salary
    }
  }
`;

export const GET_EMPLOYEE = gql`
  query GetEmployee($_id: ID!) {
    getEmployee(_id: $_id) {
      _id
      firstName
      lastName
      email
      gender
      salary
    }
  }
`;

export const SIGNUP = gql`
  mutation Signup($email: String!, $userName: String!, $password: String!) {
    signup(email: $email, userName: $userName, password: $password) {
      token
      user {
        _id
        userName
        email
        password
      }
    }
  }
`;

export const LOGIN = gql`
  mutation Login($userName: String!, $password: String!) {
    login(userName: $userName, password: $password) {
      token
    }
  }
`;

export const CREATE_EMPLOYEE = gql`
  mutation CreateEmployee(
    $firstName: String!
    $lastName: String!
    $email: String!
    $salary: Float!
  ) {
    createEmployee(
      firstName: $firstName
      lastName: $lastName
      email: $email
      salary: $salary
    ) {
      _id
      firstName
      lastName
      email
      salary
    }
  }
`;

export const UPDATE_EMPLOYEE = gql`
  mutation UpdateEmployee(
    $_id: ID!
    $firstName: String!
    $lastName: String!
    $email: String!
  ) {
    updateEmployee(
      _id: $_id
      lastName: $lastName
      email: $email
      firstName: $firstName
    ) {
      _id
      firstName
      lastName
      email
    }
  }
`;

export const DELETE_EMPLOYEE = gql`
  mutation DeleteEmployee($_id: ID!) {
    deleteEmployee(_id: $_id) {
      _id
    }
  }
`;
