import React, { Component } from 'react'
class Xheader extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div id='header'>
                <div style={{color: 'white',
                    height: '50px',
                    lineHeight: '50px',
                    background: '#282828',
                    position: 'fixed',
                    left: '0px',
                    top: '0px',
                    width: '100%',
                    zIndex: '10'}}>
                    <div className='fl'>
                        <i className="icon-category iconfont" style={{padding: '0px 10px',height: '100%',display: 'inline-block'}}></i>
                        <span>卖座电影</span>
                    </div>
                </div>
                {this.props.children}
            </div>
        )
    }
}

export default Xheader