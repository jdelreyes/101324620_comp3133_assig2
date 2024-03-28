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
  query GetEmployee {
    getEmployee(_id: null) {
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
  mutation Signup {
    signup(email: null, userName: null, password: null) {
      token
    }
  }
`;

export const LOGIN = gql`
  mutation Login {
    login(userName: null, password: null) {
      token
    }
  }
`;

export const CREATE_EMPLOYEE = gql`
  mutation CreateEmployee {
    createEmployee(
      firstName: null
      lastName: null
      email: null
      gender: null
      salary: null
    ) {
      _id
      firstName
      lastName
      email
      gender
      salary
    }
  }
`;

export const UPDATE_EMPLOYEE = gql`
  mutation UpdateEmployee {
    updateEmployee(_id: null) {
      _id
      firstName
      lastName
      email
      gender
      salary
    }
  }
`;

export const DELETE_EMPLOYEE = gql`
  mutation DeleteEmployee {
    deleteEmployee(_id: null) {
      _id
      firstName
      lastName
      email
      gender
      salary
    }
  }
`;
