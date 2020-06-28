import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Badge, Avatar } from 'antd'
import './NavBar.css'
import { UserOutlined } from '@ant-design/icons'

const Navbar: React.SFC = () => {
    return (
        <div className="navbarCont">
            <div>
                <Link className="navbarItem" to="/todos">
                    <Button shape="round">Todos</Button>
                </Link>
                <Link className="navbarItem" to="/todos/add">
                    <Button shape="round">Create</Button>
                </Link>
            </div>
            <div>
                <Link className="navbarItem danger" to="/todos/edit/:id">
                    <Button type="primary" shape="round">
                        Edit
                    </Button>
                </Link>
                <Badge count={1}>
                    <Avatar shape="circle" icon={<UserOutlined />} />
                </Badge>
            </div>
        </div>
    )
}

export default Navbar
