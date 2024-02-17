import { useEffect, useState } from "react";
import { deleteApi, deleteTodoApi, retrieveTodosForUsername } from "./api/TodoApiService";
import { useAuth } from "./security/AuthContex";
import { useNavigate } from "react-router-dom";

function ListTodoComponent() {

    const today = new Date()

    const authContex = useAuth()
    const username = authContex.username

    const navigate = useNavigate()

    const targetDate = new Date(today.getFullYear() + 12, today.getMonth(), today.getDay())

    const [todos, setTodos] = useState([])
    const [message, setMessage] = useState(null)

    //cập nhật todoList mới nhất khi dữ liệu bị thay đổi
    useEffect(
        () => refreshTodos(),
        []
    )
    //lấy dữ liệu 
    function refreshTodos() {
        retrieveTodosForUsername('Miochan')
            .then(response => {
                setTodos(response.data)
            })
            .catch(error => console.log(error))
    }

    //Delete
    function deleteTodo(id) {
        deleteApi(username, id)
            .then(
                () => {
                    setMessage(`Delete of todo with id = ${id} successful`)
                    refreshTodos()
                }
                //Display message

                //Update Todos list
            )
            .catch(error => console.log(error))
    }
    //Update
    function updateTodo(id) {
        //đưa sang trang update
        navigate(`/todo/${id}`)
    }
    function addNewTodo() {
        navigate('/todo/-1')
    }



    return (
        <div className="container">
            <h1>Things you want to do!</h1>
            {message && <div className="alert alert-warning">{message}</div>}
            <div>
                <table className="table">

                    <thead>
                        <tr>
                            <th>id</th>
                            <th>description</th>
                            <th>status</th>
                            <th>targetDate</th>
                            <th>Delete</th>

                        </tr>
                    </thead>

                    <tbody>
                        {
                            todos.map(
                                todos => (
                                    <tr key={todos.id}>
                                        <td>{todos.id}</td>
                                        <td>{todos.description}</td>
                                        <td>{todos.done.toString()}</td>
                                        <td>{todos.targetDate.toString()}</td>
                                        <td> <button className="btn btn-warning"
                                            onClick={() => deleteTodo(todos.id)}>Delete</button> </td>
                                        <td> <button className="btn btn-success"
                                            onClick={() => updateTodo(todos.id)}>Update</button> </td>
                                    </tr>
                                )
                            )
                        }
                    </tbody>

                </table>
            </div>
            <div className="btn btn-success m-5" onClick={addNewTodo}>Add new todo</div>

        </div>
    );
}

export default ListTodoComponent