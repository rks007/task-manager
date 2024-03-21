const mongoose = require('mongoose');

/*
 mongoose data model = {
    title: string,
    description: string,
    completed: boolean
 }
*/

mongoose.connect("mongodb+srv://rishabhsingh94:23UzpdOdVjxaJFKP@cluster0.fc7lnvw.mongodb.net/todos2");

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo: todo
}