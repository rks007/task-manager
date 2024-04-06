const express = require('express');
const { createTodo, updateTodo } = require('./types');
const { todo } = require('./db');
const cors = require('cors');
const app = express();

app.use(express.json())
app.use(cors())

const port = 3000;

app.post('/todo', async (req, res) => {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);

    if(!parsedPayload.success){
        res.status(411).json({
            msg: "wrong inputs"
        })
        return;
    }

    const {data: {title, description} } = parsedPayload;

    await todo.create({
        title,
        description,
        completed: false
    })

    res.json({
        msg: "todo created"
    })

})

app.get('/todos', async (req, res) => {
    const todos = await todo.find();
    res.send({todos})
})

app.put('/completed', async (req, res) => {
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);

    if(!parsedPayload.success){
        res.status(411).json({
            msg: "you have entered wrong inputs"
        })
        return;
    }

    await todo.updateOne({
        _id: req.body.id
    },{
        completed: true
    })

    res.json({
        msg: "Todo marked as completed"
    })

})

app.listen(port, () => {
    console.log(`your app is listening at port ${port}`);
})