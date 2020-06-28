import styled from 'styled-components'
import { Spin, Button } from 'antd'
import Text from 'antd/lib/typography/Text'
import { EditOutlined } from '@ant-design/icons'

export const Input = styled.div`
    color: 'red';
`

export const SpinContainer = styled(Spin)`
    width: 100%;
    margin: 0 auto;
    padding: 10px;
`

// edit
export const TextTodoId = styled(Text)`
    color: rgba(0, 0, 0, 0.3);
`
export const EditButtonContainer = styled.div`
    margin: 0px 10px 0px 10px;
`

export const EditButtonIcon = styled(EditOutlined)`
    color: #ff4d4f !important;
`
export const EditTodoButton = styled(Button)`
    background-color: rgba(0, 0, 0, 0);
    &:hover {
        & * {
            color: #ffffff;
        }
        border: none;
        background: #ff4d4f;
    }
`

// todo
export const TodoContainer = styled.div`
    transition: 0.3s;
    overflow-x: auto;
    align-items: center;
    justify-content: space-between;
    display: flex;
    flex-direction: row;
    padding: 10px;
    margin: 5px;
    border-bottom: 1px solid rgb(224, 224, 224);
    border-radius: 10px;

    &:hover {
        cursor: pointer;
        background-color: rgb(255, 255, 255);
        -webkit-box-shadow: 0px 8px 14px -4px rgba(0, 0, 0, 0.3);
        -moz-box-shadow: 0px 8px 14px -4px rgba(0, 0, 0, 0.3);
        box-shadow: 0px 8px 14px -4px rgba(0, 0, 0, 0.3);
        transform: translateY(6px);
    }
`

// export const  = styled.checkButton {
//     margin: 10px;
// }

// export const  = styledtodoPopCloseBut {
//     margin: 0 auto;
//     /* width: 100%; */
// }

// export const  = styled.submitCreateButPopCont {
//     display: flex;
//     align-items: center;
// }

// export const  = styled.todoCheckDesc {
//     flex-direction: row;
//     display: flex;
//     align-items: center;
// }

//colors
export const primaryColor = '#f1f1f1'
