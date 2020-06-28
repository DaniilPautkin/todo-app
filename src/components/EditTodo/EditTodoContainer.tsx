import React, { useState } from 'react'
import { connect } from 'react-redux'
import { useHistory, useLocation } from 'react-router-dom'
import { todosAPI } from '../../api/api'
import { AppStateType } from '../../redux/redux-store'
import { deleteTodo } from '../../redux/todos-reducer'
import { getIsFetching } from '../../redux/todos-selectors'
import { SpinContainer } from '../../styles/Styles'
import EditTodo from './EditTodo'

const EditTodoContainer: React.FC<PropsType> = ({ isFetching, deleteTodo }) => {
    const [todo_description, setTodo_desciption] = useState('')
    const [todo_responsible, setTodo_responsible] = useState('')
    const [todo_completed, setTodo_completed] = useState(false)

    const onChangeTodoDescription = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        setTodo_desciption(e.target.value)
    }

    const onChangeTodoResponsible = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        setTodo_responsible(e.target.value)
    }

    const onChangeTodoCompleted = (completed: boolean) => {
        setTodo_completed(completed)
    }

    const url = useLocation()
    const todoId = url.pathname.split('/')[3]

    const history = useHistory()
    const onDeleteTodo = () => {
        deleteTodo(todoId)
        history.push({
            pathname: '/todos',
        })
    }

    const onSubmit = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
        e.preventDefault()
        const editedTodo = {
            todo_description: todo_description,
            todo_responsible: todo_responsible,
            todo_completed: todo_completed,
        }
        todosAPI.updateTodo(todoId, editedTodo)
        // axios
        //     .post('http://localhost:5000/todos/edit/' + url, editedTodo)
        //     .then((res) => console.log(res.data))
        // axios.put('http://localhost:5000/todos/' + props.match.params.id, obj) //redo
        //     .then(res => console.log(res.data));
    }

    return (
        <div>
            {!!isFetching ? (
                <SpinContainer />
            ) : (
                <EditTodo
                    description={todo_description}
                    responsible={todo_responsible}
                    completed={todo_completed}
                    changeDescription={onChangeTodoDescription}
                    changeResponsible={onChangeTodoResponsible}
                    changeTodoCompleted={onChangeTodoCompleted}
                    deleteTodo={onDeleteTodo}
                    submit={onSubmit}
                />
            )}
        </div>
    )
}

const MapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        isFetching: getIsFetching(state),
    }
}

type MapStatePropsType = {
    isFetching: boolean
}

type MapDispatchType = {
    deleteTodo: (url: string) => void
}

type PropsType = MapStatePropsType & MapDispatchType

export default connect(MapStateToProps, { deleteTodo })(EditTodoContainer)
