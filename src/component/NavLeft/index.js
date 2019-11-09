

import React from 'react';
import { Menu } from 'antd';
// import {NavLink} from 'react-router-dom'
import MenuConfig from '../../config/menuConfig';

const {SubMenu} = Menu ;

export default class NavLeft extends React.Component{

    constructor(props){
        super(props);
        const menuTreeNode = this.renderMenu(MenuConfig);
        this.state = {
            menuTreeNode
        }
    };
    renderMenu = (data) => {
        return data.map((item) => {
            if(item.children){
                return (
                <SubMenu title = {item.title} key={item.key}>
                    {this.renderMenu(item.children)}
                </SubMenu>
                )
            }
            return <Menu.Item title={item.title} key={item.key}>
                {/* <NavLink to={item.key}></NavLink> */}
                {item.title}
            </Menu.Item>
            
        })
    }

    render(){
        return (
            <div>
                <Menu 
                    onClick={this.handleClick}
                >
                    {this.state.menuTreeNode}
                </Menu>
            </div>
        )
    }
}

