import 'antd/dist/antd.css'
import React, { useState } from 'react'
import { connect } from 'react-redux'
import { useHistory, withRouter } from 'react-router-dom'
import { compose } from 'redux'
import { AppStateType } from '../../redux/redux-store'
import { createTodo } from '../../redux/todos-reducer'
import { TodoType } from '../../types/types'
import CreateTodo from './CreateTodo'

const CreateTodoContainer: React.FC<PropsType> = ({ createTodo }) => {
    const [todo_description, setTodo_desciption] = useState('')
    const [todo_responsible, setTodo_responsible] = useState('')
    const [todo_completed, setTodo_completed] = useState(false)

    const SetInitialFormState = () => {
        setTodo_desciption('')
        setTodo_responsible('')
        setTodo_completed(false)
    }

    const history = useHistory()

    const onChangeDescription = (e: React.ChangeEvent<HTMLInputElement>) =>
        setTodo_desciption(e.target.value)

    const onChangeTodoResponsible = (e: React.ChangeEvent<HTMLInputElement>) =>
        setTodo_responsible(e.target.value)

    const onSubmit = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
        e.preventDefault()
        // todo: validation empty description
        const newTodo = {
            todo_description: todo_description,
            todo_responsible: todo_responsible,
            todo_completed: todo_completed,
        }
        createTodo(newTodo) // dispatch
        SetInitialFormState() //clear state
        history.push({
            pathname: '/todos',
        })
    }

    return (
        <div>
            <CreateTodo
                description={todo_description}
                responsible={todo_responsible}
                submit={onSubmit}
                changeDescription={onChangeDescription}
                changeResponsible={onChangeTodoResponsible}
            />
        </div>
    )
}

const MapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        isFetching: state.todo.isFetching,
    }
}

type PropsType = MapStatePropsType & MapDispatchType

type MapDispatchType = {
    createTodo: (newTodo: TodoType) => void
}

type MapStatePropsType = {}

export default compose<React.ComponentType>(
    connect(MapStateToProps, { createTodo }),
    withRouter
)(CreateTodoContainer)
