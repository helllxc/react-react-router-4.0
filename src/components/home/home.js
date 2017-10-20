import React, {Component} from 'react'
import Btn from './ref.js'
import Show from './isShow'
import {
    Link,
} from 'react-router-dom'
class home extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
                <div>
                    <div>
                        <Link to="/Toggle/123" style={{color:'red',textdecoration:'none',fontSize:'20px'}}>Toggle</Link>
                        <Btn> <Show isLogin={true}></Show></Btn>
                    </div>
                </div>
        )
    }
}
export default home