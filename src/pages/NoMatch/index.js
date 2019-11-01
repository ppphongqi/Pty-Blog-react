
import React from "react";
import {Empty} from "antd"; 


// 此组件显示“暂无数据”

class NoMatch extends React.Component{
    

    render(){
        return(
            <div>
                <Empty description="暂无数据"/>
            </div>
        )
    }
}

export default NoMatch;