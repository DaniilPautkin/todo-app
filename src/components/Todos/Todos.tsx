import { Button, Empty } from 'antd'
import 'antd/dist/antd.css'
import Text from 'antd/lib/typography/Text'
import React from 'react'
import { Link } from 'react-router-dom'
import {
    EditButtonContainer,
    EditButtonIcon,
    EditTodoButton,
    TextTodoId,
    TodoContainer,
} from '../../styles/Styles'
import { TodoType } from '../../types/types'

type PropsType = {
    todos: TodoType[]
}

const Todos: React.FC<PropsType> = ({ todos }) => {
    return (
        <div>
            {todos ? (
                todos.map((todo, index) => {
                    return (
                        <TodoContainer key={index}>
                            <div>
                                <div>
                                    {!!todo.todo_responsible ? (
                                        <Text code>
                                            {todo.todo_responsible}
                                        </Text>
                                    ) : (
                                        <Text type="warning">No author</Text>
                                    )}
                                    <TextTodoId> {todo._id} </TextTodoId>
                                </div>

                                {/* <div className='todoCheckDesc'>
                            {!!t.todo_completed
                                ? <Button onClick={changeCompleted} className="checkButton" type="primary" shape="circle" icon={<CheckOutlined />}></Button>
                                : <Button onClick={changeCompleted} className="checkButton" type="primary" shape="circle" icon={<CloseOutlined />} danger />
                            }{t.todo_description}
                            </div> */}
                                <div>{todo.todo_description}</div>
                            </div>
                            <EditButtonContainer>
                                <EditTodoButton
                                    type="dashed"
                                    shape="circle"
                                    danger
                                >
                                    <Link to={'/todos/edit/' + todo._id}>
                                        <EditButtonIcon />
                                    </Link>
                                </EditTodoButton>
                            </EditButtonContainer>
                        </TodoContainer>
                    )
                })
            ) : (
                <Empty
                    image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
                    imageStyle={{
                        height: 60,
                    }}
                    description={<span>No Todos</span>}
                >
                    <Link to="/todos/add">
                        <Button type="primary">Create Now</Button>
                    </Link>
                </Empty>
            )}
        </div>
    )
}

export default Todos
