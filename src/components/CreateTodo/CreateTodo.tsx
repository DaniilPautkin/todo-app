import { Button, Input } from 'antd'
import 'antd/dist/antd.css'
import React from 'react'

const CreateTodo: React.FC<PropsType> = ({
    description,
    responsible,
    submit,
    changeDescription,
    changeResponsible,
}) => {
    return (
        <div>
            <div className="cTodoC">
                <div>
                    <div className="inputCont">
                        Description:
                        <Input
                            maxLength={200}
                            onChange={changeDescription}
                            value={description}
                            allowClear
                        />
                    </div>

                    <div className="inputCont">
                        Author:
                        <Input
                            maxLength={250}
                            type="text"
                            onChange={changeResponsible}
                            value={responsible}
                            allowClear
                        />
                    </div>
                </div>
                <div className="submitButCont">
                    <Button
                        className="submitBut"
                        shape="round"
                        onClick={submit}
                        type="primary"
                    >
                        Submit
                    </Button>
                </div>
            </div>
        </div>
    )
}

type PropsType = MapStateType & MapDispatchType

type MapStateType = {
    description: string
    responsible: string
}

type MapDispatchType = {
    submit: (e: React.MouseEvent<HTMLInputElement>) => void
    changeDescription: (e: React.ChangeEvent<HTMLInputElement>) => void
    changeResponsible: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default CreateTodo
