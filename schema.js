const {buildSchema} = require('graphql');

const schema = buildSchema(`
type  User {
    id: ID
    username: String
    age: Int
    experience: [Experience]
}
type Experience {
    id: ID
    company: String
    job: String
}

input UserInput {
    id: ID
    username: String!
    age: Int!
    experience: [ExperienceInput]
}
input ExperienceInput {
    id: ID
    company: String!
    job: String!
}

type Query {
    getAllUsers: [User]
    getUser(id: ID): User
}

type Mutation {
    createUser(input: UserInput): User
}

`)

module.exports = schema