import React , {Component} from 'react';
import {Spin , Icon} from 'antd';

const antIcon = <Icon type ='loading' style={{fontsize : 24}} spin />

export const asyncComponent = importComponent => 
    class AsyncComponent extends Component {
        constructor(props){
            super(props) ; 
            this.state = {
                component : null
            }
        };
        async componentDidMount(){
            const { default : component } = await importComponent()
            this.setState( { component })
        };
        render(){
            const RenderComponent = this.state.component
            return RenderComponent ? (
                <RenderComponent {...this,props} />
            ) : (
                <Spin indicator={antIcon} />
            )
        }



    }