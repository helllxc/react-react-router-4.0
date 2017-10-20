import React, { Component } from 'react'
class Xheader extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div id='header'>
                <div style={{'width':'100%','height':'40px','background':'#282828',color:'#fff'}}>
                    <div className='head_left'>
                        <i className="icon-category iconfont"></i>
                        <span>卖座电影</span>
                    </div>
                </div>
                {this.props.children}
            </div>
        )
    }
}

export default Xheader