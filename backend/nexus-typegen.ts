/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */


import type { Context } from "./src/context"




declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
}

export interface NexusGenEnums {
  Gender: "female" | "male" | "other"
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
}

export interface NexusGenObjects {
  Auth: { // root type
    token: string; // String!
    user: NexusGenRootTypes['User']; // User!
  }
  Employee: { // root type
    _id: string; // ID!
    email: string; // String!
    firstName: string; // String!
    gender: NexusGenEnums['Gender']; // Gender!
    lastName: string; // String!
    salary: number; // Float!
  }
  Mutation: {};
  Query: {};
  User: { // root type
    _id: string; // ID!
    email: string; // String!
    password: string; // String!
    userName: string; // String!
  }
}

export interface NexusGenInterfaces {
}

export interface NexusGenUnions {
}

export type NexusGenRootTypes = NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars & NexusGenEnums

export interface NexusGenFieldTypes {
  Auth: { // field return type
    token: string; // String!
    user: NexusGenRootTypes['User']; // User!
  }
  Employee: { // field return type
    _id: string; // ID!
    email: string; // String!
    firstName: string; // String!
    gender: NexusGenEnums['Gender']; // Gender!
    lastName: string; // String!
    salary: number; // Float!
  }
  Mutation: { // field return type
    createEmployee: NexusGenRootTypes['Employee']; // Employee!
    deleteEmployee: NexusGenRootTypes['Employee']; // Employee!
    login: NexusGenRootTypes['Auth']; // Auth!
    signup: NexusGenRootTypes['Auth']; // Auth!
    updateEmployee: NexusGenRootTypes['Employee']; // Employee!
  }
  Query: { // field return type
    getEmployee: NexusGenRootTypes['Employee']; // Employee!
    getEmployees: NexusGenRootTypes['Employee'][]; // [Employee!]!
  }
  User: { // field return type
    _id: string; // ID!
    email: string; // String!
    password: string; // String!
    userName: string; // String!
  }
}

export interface NexusGenFieldTypeNames {
  Auth: { // field return type name
    token: 'String'
    user: 'User'
  }
  Employee: { // field return type name
    _id: 'ID'
    email: 'String'
    firstName: 'String'
    gender: 'Gender'
    lastName: 'String'
    salary: 'Float'
  }
  Mutation: { // field return type name
    createEmployee: 'Employee'
    deleteEmployee: 'Employee'
    login: 'Auth'
    signup: 'Auth'
    updateEmployee: 'Employee'
  }
  Query: { // field return type name
    getEmployee: 'Employee'
    getEmployees: 'Employee'
  }
  User: { // field return type name
    _id: 'ID'
    email: 'String'
    password: 'String'
    userName: 'String'
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    createEmployee: { // args
      email: string; // String!
      firstName: string; // String!
      gender: NexusGenEnums['Gender']; // Gender!
      lastName: string; // String!
      salary: number; // Float!
    }
    deleteEmployee: { // args
      _id: string; // ID!
    }
    login: { // args
      password: string; // String!
      userName: string; // String!
    }
    signup: { // args
      email: string; // String!
      password: string; // String!
      userName: string; // String!
    }
    updateEmployee: { // args
      _id: string; // ID!
      email?: string | null; // String
      firstName?: string | null; // String
      gender?: NexusGenEnums['Gender'] | null; // Gender
      lastName?: string | null; // String
      salary?: number | null; // Float
    }
  }
  Query: {
    getEmployee: { // args
      _id: string; // ID!
    }
  }
}

export interface NexusGenAbstractTypeMembers {
}

export interface NexusGenTypeInterfaces {
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = never;

export type NexusGenEnumNames = keyof NexusGenEnums;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = never;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never;

export type NexusGenAbstractsUsingStrategyResolveType = never;

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    isTypeOf: false
    resolveType: true
    __typename: false
  }
}

export interface NexusGenTypes {
  context: Context;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  inputTypeShapes: NexusGenInputs & NexusGenEnums & NexusGenScalars;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  typeInterfaces: NexusGenTypeInterfaces;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractTypeMembers: NexusGenAbstractTypeMembers;
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;
  features: NexusGenFeaturesConfig;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginInputTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
  interface NexusGenPluginArgConfig {
  }
}