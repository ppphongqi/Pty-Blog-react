
import React from 'react';
import {Row ,Col } from 'antd';
import 'antd/dist/antd.css';

export default class NavRight extends React.Component {
    render(){
        return (
            <div>
                <Row type="flex" justify="center">
                    <Col span={6}>1</Col>
                    <Col span={6}>2</Col>
                    <Col span={6}>3</Col>
                    <Col span={6}>4</Col>
                </Row>
            </div>
        )
    }
}