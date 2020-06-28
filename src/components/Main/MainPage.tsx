import {
    FacebookOutlined,
    GithubOutlined,
    LinkedinOutlined,
    YoutubeOutlined,
} from '@ant-design/icons'
import { Carousel, Tag } from 'antd'
import React from 'react'

const MainPage: React.SFC = () => {
    return (
        <div className="carouselContainer">
            <div>
                <Tag icon={<GithubOutlined />} color="#cccccc">
                    Twitter
                </Tag>
                <Tag icon={<YoutubeOutlined />} color="#cd201f">
                    Youtube
                </Tag>
                <Tag icon={<FacebookOutlined />} color="#3b5999">
                    Facebook
                </Tag>
                <Tag icon={<LinkedinOutlined />} color="#55acee">
                    LinkedIn
                </Tag>
            </div>
            <Carousel autoplay>
                <div>
                    <h3>Light</h3>
                </div>
                <div>
                    <h3>Fast</h3>
                </div>
                <div>
                    <h3>Comfortable</h3>
                </div>
                <div>
                    <h3>Stylish</h3>
                </div>
            </Carousel>
        </div>
    )
}

export default MainPage
