import React, { useState, useEffect } from 'react';
import TodoList from './TodoList';
import ApiService from '../../utils/ApiService';
import { Link } from 'react-router-dom';
import { update } from 'lodash';

function TodoListContainer(props) {
    const [todos, setTodos] = useState([]);
    const userId = parseInt(props.match.params.userId, 10);


    const search = async (props) => {
        try {
            
            const todosdata = await ApiService.getTodos({userId});
            setTodos(todosdata);
            update();
        } catch (e) {
            console.error(`An error ${e.message} occured while loading tasks for user ${userId}`);
        }
    };


    
    useEffect(() => {
        search(props);
    },[props]);


    return (
        <div className="todo">
            <TodoList todos={todos} />
            <Link className="todo__linkback" to='/'>Back to Users search</Link>
        </div>
    );
}

export default TodoListContainer;