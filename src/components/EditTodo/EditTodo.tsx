// import { browserHistory } from 'react-router-dom'
import { Button, Input } from 'antd'
import Text from 'antd/lib/typography/Text'
import React from 'react'

const EditTodo: React.FC<PropsType> = ({
    description,
    responsible,
    // completed,
    changeDescription,
    changeResponsible,
    // changeTodoCompleted,
    deleteTodo,
    submit,
}) => {
    const url = window.location.href.split('/').splice(-1).pop()

    // const menu = (
    //     <Menu>
    //         <Menu.Item key="1" icon={<UserOutlined />}>
    //             1st menu item
    //         </Menu.Item>
    //         <Menu.Item key="2" icon={<UserOutlined />}>
    //             2nd menu item
    //         </Menu.Item>
    //         <Menu.Item key="3" icon={<UserOutlined />}>
    //             3rd item
    //         </Menu.Item>
    //     </Menu>
    // )

    return (
        <div className="cTodoC">
            <h3>Update Todo</h3>
            <form>
                {url && <Text code>ID {url}</Text>}
                <label>Description: </label>
                <Input
                    type="text"
                    onChange={changeDescription}
                    value={description}
                />

                <label>Responsible: </label>
                <Input
                    type="text"
                    onChange={changeResponsible}
                    value={responsible}
                />
                <div className="form-check">
                    {/* // todo: type of drop */}

                    {/* <Dropdown.Button
                        overlay={menu}
                        buttonsRender={([leftButton, rightButton]) => [
                            <Tooltip title="tooltip" key="leftButton">
                                {leftButton}
                            </Tooltip>,
                            React.cloneElement(rightButton, { loading: true }),
                        ]}
                    >
                        With Tooltip
                    </Dropdown.Button> */}
                    {/* <input className="form-check-input"
                        id="completedCheckbox"
                        type="checkbox"
                        name="completedCheckbox"
                        onChange={onChangeTodoCompleted}
                        checked={Stodo_completed}
                        value={Stodo_completed}
                    /> */}
                    <div>
                        <Text>Completed: </Text>
                    </div>
                </div>

                <br />
                <div>
                    <div className="updateDeleteContainer">
                        <Button
                            onClick={submit}
                            htmlType="submit"
                            type="primary"
                        >
                            Update
                        </Button>

                        <div className="submitButCont">
                            <Button
                                onClick={deleteTodo}
                                type="primary"
                                shape="round"
                                danger
                            >
                                {/* <Link to='/todos'> */}
                                Delete
                                {/* </Link> */}
                            </Button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

type PropsType = DispatchType & MapStateType

type DispatchType = {
    deleteTodo: (url: any) => void
    changeDescription: (e: React.ChangeEvent<HTMLInputElement>) => void
    changeResponsible: (e: React.ChangeEvent<HTMLInputElement>) => void
    changeTodoCompleted: (completed: boolean) => void
    submit: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void
}

type MapStateType = {
    description: string
    responsible: string
    completed: boolean
}

export default EditTodo
