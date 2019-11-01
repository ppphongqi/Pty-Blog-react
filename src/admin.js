import React from 'react';
import {Row , Col} from 'antd';

import Header from './component/Header';
import Footer from './component/Footer';
import NavLeft from './component/NavLeft';
import NavRight from './component/NavRight';


export default class Admin extends React.Component{

    render(){
        return (
            <div className = "app">

                <Header />
                <div className = "app-content-layout">
                    {/* antd-flex布局 居中对齐 */}
                    <Row type="flex" justify="center">
                        {/* 左侧导航 */}
                        <Col span={2}>
                            <NavLeft />
                        </Col>

                        {/* 中间内容 */}
                        <Col sapn={10}>
                            {this.props.children}
                        </Col>

                        {/* 右侧导航 */}
                        <Col span={5}>
                            <NavRight />
                        </Col>


                    </Row>
                </div>
                <Footer />
            </div>
        )
    }
}
