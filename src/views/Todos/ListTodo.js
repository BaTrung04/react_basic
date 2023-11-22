import React from "react";
import "./ListTodo.scss";
import AddTodo from "./AddTodo";
import { ToastContainer, toast } from "react-toastify";

class ListTodo extends React.Component {
    state = {
        listTodos: [
            { id: "todo1", title: "Doing homework" },
            { id: "todo2", title: "Making video" },
            { id: "todo3", title: "Fixing bug" },
        ],
    };

    addNewTodo = (todo) => {
        //cach1
        // let currentListTodo = this.state.listTodos;
        // currentListTodo.push(todo);
        // this.setState({
        //     listTodos: currentListTodo,
        // });

        // cach 2
        this.setState({
            listTodos: [...this.state.listTodos, todo],
        });
        toast.success("Add title success!");
    };

    render() {
        // let listTodos = this.stacte.listTodos;
        let { listTodos } = this.state;

        return (
            <div className="list-todo-container">
                <AddTodo addNewTodo={this.addNewTodo} />
                <div className="list-todo-content">
                    {listTodos &&
                        listTodos.length > 0 &&
                        listTodos.map((item, index) => {
                            return (
                                <div className="todo-child " key={item.id}>
                                    <span>
                                        {index + 1} - {item.title}
                                    </span>
                                    <button className="edit">Edit</button>
                                    <button className="delete">Delete</button>
                                </div>
                            );
                        })}
                </div>
            </div>
        );
    }
}

export default ListTodo;
