import React, {Component} from 'react'
import Btn from './ref.js'
import Show from './isShow'
import Xheader from '../common/Xheader/Xheader'
import {
    Link,
} from 'react-router-dom'
import '../../assets/iconfont/iconfont.css'
class home extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div id='home' style={{marginTop:'50px'}}>
                <div>
                    <Xheader></Xheader>
                    {/*<Link to="/index/Toggle/123" style={{color:'red',textdecoration:'none',fontSize:'20px'}}>Toggle</Link>*/}
                    {/*<Btn> <Show isLogin={true}></Show></Btn>*/}
                    {this.props.children}
                </div>
            </div>
        )
    }
}
export default home