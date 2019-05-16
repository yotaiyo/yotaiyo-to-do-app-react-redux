import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'

const TodoList = ({ todos, onTodoClick }) => {
    console.log(todos)
    return(
    <ul>
        {todos.map((todo) =>
            <Todo   
                key={todo.id}
                {...todo}
                onClick={() => onTodoClick(todo.id) }
            />
        )}
    </ul>
)}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
        onTodoClick: PropTypes.func.isRequired
    }).isRequired).isRequired
}

export default TodoList
