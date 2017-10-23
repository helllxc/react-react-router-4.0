import React, { Component } from 'react'
import NavBar from '../nav/nav'
class Xheader extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div id='header'>
                <header>
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
                </header>
                <NavBar></NavBar>
            </div>
        )
    }
}

export default Xheader