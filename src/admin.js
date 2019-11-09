import React from 'react';
import {Row , Col} from 'antd';
import 'antd/dist/antd.css';
import Header from './component/Header';
import Footer from './component/Footer';
import NavLeft from './component/NavLeft';
import NavRight from './component/NavRight';


import './common.scss';


export default class Admin extends React.Component{

    render(){
        return (
            <div className="app">
                <Header />
                <div className="app-content-layout">
                    {/* antd-flex布局 居中对齐 */}
                    
                    <div className="swiper"></div>

                    <Row type="flex" justify="center" className="admin">
     
                        <Col span={4}>
                            <NavLeft />
                        </Col>
                        <Col span={12}>
                            {this.props.children}
                        </Col>
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
