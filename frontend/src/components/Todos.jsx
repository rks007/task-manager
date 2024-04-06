import React from 'react'

function Todos({todos}) {

    // if (!todos || !Array.isArray(todos)) {
    //     return <div>No todos available</div>;
    // }
  return (
    <div>
        {todos.map((todo) => {
            return <div key={todo.title}>
                <h1>{todo.title}</h1>
                <h2>{todo.description}</h2>
                <button onClick={() => {
                    fetch("http://localhost:3000/completed",{
                        method: "put",
                        body: JSON.stringify({
                            id: todo._id
                        }),
                        headers: {
                            "content-type": "application/json"
                        }
                    })
                    .then(async (res) => {
                        const json = await res.json();
                        alert("todo completed")
                    })

                }}>{todo.completed == true ? "completed" : "mark as completed"}</button>
            </div>
        })}
    </div>
  )
}

export default Todos