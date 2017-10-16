import React, {Component} from 'react'
import Btn from './ref.js'
import Show from './isShow'
class home extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div>
                <Btn> <Show isLogin={true}></Show></Btn>
            </div>
        )
    }
}
export default home