const http = require('http')
const express = require('express')
const app = express()

let persons = [
    { 
      "id": "1",
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": "2",
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": "3",
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": "4",
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]

// Getting all persons
app.get('/api/persons', (request, response) => {
  response.json(persons)
})

// Getting persons info
app.get('/info', (request, response)=>{
    response.send(`Phone book has info for ${persons.length} people. <br><br>${Date()}`)
})

// Getting a person
app.get('/api/persons/:id',(request, response)=>{
    const id = request.params.id
    const person= persons.find((person) => person.id === id)
    if(!person){
        response.status(404).send(`Person with id ${id} is NOT FOUND`)
    }
    response.send(person)
})

// Delete a person
app.delete('/api/persons/:id',(request, response)=>{
    const id = request.params.id
    let deletedPerson = persons.filter((person)=>person.id !== id)
    response.send(deletedPerson)
})

const PORT = 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)