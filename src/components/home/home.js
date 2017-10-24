import React, {Component} from 'react'
import axios from 'axios'
import Xheader from '../common/Xheader/Xheader'
import '../../assets/iconfont/iconfont.css'
class home extends Component{
    constructor(props){
        super(props)
    }
    componentWillMount() {
        axios.post('/v4/api/billboard/home').then((res)=>{
            console.log(res)
        })
    }
    render(){
        return (
            <div id='home' style={{marginTop:'50px'}}>
                <div>
                    <Xheader></Xheader>
                    {this.props.children}
                </div>
            </div>
        )
    }
}
export default home