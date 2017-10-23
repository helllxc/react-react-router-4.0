import React, { Component } from 'react'
import {
    NavLink
} from 'react-router-dom'
class nav extends Component{
    constructor(props){
        super(props)
        this.state = ({
            isShow:false
        })
    }
    show = () =>{
        this.setState({isShow:!this.state.isShow})
    }
    render(){
        return(
            <nav>
`                <ul onClick={this.show}>
                    <li>
                        <NavLink to='/home'>主页</NavLink>
                    </li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </nav>
        )
    }
}

export default nav