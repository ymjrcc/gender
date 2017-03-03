import React,{Component,PropTypes} from 'react';
import {findDOMNode} from 'react-dom';
import Canvas from './Canvas';
import style from '../css/gender.css';

class TextInput extends Component{
    constructor(props){
        super(props);
        this.state = {
            inputValue: '{"male":59,"female":41}'
        };
    }
    componentDidMount(){
        findDOMNode(this.refs.input).value = this.state.inputValue;
    }
    handleInputChange(e){
        this.setState({
            inputValue: e.target.value
        });
    }
    render(){
        return <input type='text' className={style.input} onChange={this.handleInputChange.bind(this)} ref="input"/>
    }
}

class Gender extends Component{

    constructor(props){
        super(props);
        this.state = {"male":59,"female":41}
    }

    handleClick(){
        let value = findDOMNode(this.refs.textInput).value;
        try{
            var obj = JSON.parse(value);
        }
        catch(error){
            alert("请按格式输入数据！");
            return false;
        }
        if( obj.male>=0 && obj.female>=0 && obj.male==parseInt(obj.male) && obj.female==parseInt(obj.female) && (parseInt(obj.male)+parseInt(obj.female)==100) ){
            this.setState(obj);
        }else{
            alert("请按格式输入数据！");
        }
    }

    render(){
        return (
            <div className={style.gender}>
                <h1 className={style.title}>性别占比</h1>
                <p className={style.tip}>请按格式输入男女比例，如{'{"male":59,"female":41}'}。各项值应为非负整数，且相加等于100。</p>
                <div>
                    <TextInput ref="textInput" />
                    <button className={style.submit} onClick={this.handleClick.bind(this)}>确定</button>
                </div>
                <Canvas data={this.state} />
                <div className={style.footer}>
                    <div className={style.footMale}>男 {this.state.male}%</div>
                    <div className={style.footFemale}>女 {this.state.female}%</div>
                </div>
            </div>
        )
    }
}

export default Gender;