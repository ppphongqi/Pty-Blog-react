

import React from 'react';
// import { Input , Menu , Avatar , Divider , Icon , Button} from 'antd';
import {Input ,Button , Icon ,Menu  ,Divider} from 'antd';
import { NavLink } from 'react-router-dom';
// import PropTypes from 'prop-types';
import './index.scss';


// const { SubMenu } = Menu.SubMenu ; 

const styles = {
        "font-size" : "20px"
}

class Header extends React.Component{

    state={
        value : ''
    }



    render(){
        return (
            <div className="container">
                <div className="topbar-container">
                    <div className="logo-container">
                        <NavLink to="/home">
                            <div className="logo"></div>
                        </NavLink>
                    </div>

                    <Input 
                        style={{width:"22%"}}
                        placeholder="搜索文章、日志"
                        allowClear
                        size="large">
                    </Input>

                    <NavLink to="/search">
                        <Button
                            type="primary"
                            size="large">
                                <Icon type="search" style={{color:"black"}}/>
                        </Button>
                    </NavLink>

                    <div className="topbar-menu" >
                        <Menu mode="horizontal">
                            
                            <Menu.Item key="alipay"  style={styles}>
                                <Icon type="home" theme="filled" style={styles}/>
                                Home
                            </Menu.Item>
                            <Menu.Item key="mail" style={styles}>
                                <Icon type="cloud" theme="filled" style={styles}/>
                                Blog
                            </Menu.Item>
                            <Menu.Item key="Archive" style={styles}>
                                <Icon type="book" theme="filled" style={styles}/>
                                Archive
                            </Menu.Item>
                            <Menu.Item key="game" style={styles}>
                                <Icon type="like" theme="filled" style={styles} />
                                Game
                            </Menu.Item>

                        </Menu>

                    </div>

                    <div className="avatar">
                        <div className="ava">
                        </div>

                        <Divider type="vertical" />
                        
                        <Icon type="github" theme="filled"  className="my-github"/>
                            
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;