import React, { useState } from 'react'

function CreateTodo() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

  return (
    <div>
        <input type="text" placeholder='title' onChange={(e)=> setTitle(e.target.value)}></input> <br /><br />
        <input type="text" placeholder='description' onChange={(e)=> setDescription(e.target.value)}></input> <br /><br />

        <button onClick={()=>{
            fetch("http://localhost:3000/todo",{
                method: "post",
                body: JSON.stringify({
                    title: title,
                    description: description
                }),
                headers: {
                    "content-type": "application/json"
                }
            })
            .then(async (res) => {
                const json = await res.json();
                alert("todo added");
            })


        }}>Add a todo</button>
    </div>
  )
}

export default CreateTodo