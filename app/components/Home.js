import React,{Component} from 'react'
import {Link} from 'react-router'
import style from '../css/home.css'

class Home extends Component{
    render(){
        return (
            <div>
                <Link className={style.link} to="/svg">svg</Link>
                <Link className={style.link} to="/canvas">canvas</Link>
                {this.props.children}
            </div>
        )
    }
}

export default Home;