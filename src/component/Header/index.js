

import React from 'react';
import { Input , Menu , Avatar , Divider , Icon , Button} from 'antd';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import './index.css';


const { SubMenu } = Menu.SubMenu ; 

const styles = {
        background : 'blue'
}

class Header extends React.Component{

    state={
        value : ''
    }



    render(){
        return (
            <div>
                <div>
                    <div className="logo">
                         
                    </div>

                    <div className="input">

                    </div>

                    <div className="Button">

                    </div>

                    <div className="Menu">

                    </div>

                    <div className="avatar">

                    </div>

                    <div className="Divider">

                    </div>

                    <div className="Icon">

                    </div>

                </div>

            </div>
        )
    }
}

export default Header;