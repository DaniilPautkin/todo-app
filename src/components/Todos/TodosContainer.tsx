import 'antd/dist/antd.css'
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { AppStateType } from '../../redux/redux-store'
import { getTodos } from '../../redux/todos-reducer'
import { getIsFetching, getTodosSelector } from '../../redux/todos-selectors'
import { SpinContainer } from '../../styles/Styles'
import { TodoType } from '../../types/types'
import Todos from './Todos'

const TodosContainer: React.FC<PropsType> = ({
    isFetching,
    todos,
    getTodos,
}) => {
    useEffect(() => {
        getTodos()
    }, [])

    return (
        <div>{!!isFetching ? <SpinContainer /> : <Todos todos={todos} />}</div>
    )
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        isFetching: getIsFetching(state),
        todos: getTodosSelector(state),
    }
}

type PropsType = MapStatePropsType & MapDispatchPropsType

type MapStatePropsType = {
    todos: TodoType[]
    isFetching: boolean
}

type MapDispatchPropsType = {
    getTodos: () => void
}

export default connect(mapStateToProps, { getTodos })(TodosContainer)
