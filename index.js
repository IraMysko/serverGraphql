const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const cors = require('cors');
const schema = require('./schema');
const users = [{id: 1, username: 'Irina', age: 25, experience: [{id: 11,  company: "BSG", job: "frontend"}]}, {id: 2, username: 'Vlad', age: 24}]

const app = express()
app.use(cors())

const createUser = (input) => {
    const id = Date.now()
    return {
        id, ...input
    }
}

const root = {
    getAllUsers: () => {
return users
    },

    getUser: ({id}) => {
return users.find(user => user.id === id)
    },

    createUser: ({input}) => {
      const user = createUser(input)
      user.push(user)
      return user
    }
}


app.use('/myFirstServer', graphqlHTTP({
    graphiql: true,
    schema,
    rootValue: root
}))

app.listen(5000, () => console.log('server is started on port 5000'))