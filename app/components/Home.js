import React,{Component} from 'react'
import {findDOMNode} from 'react-dom'
import style from '../css/home.css'

class Canvas extends Component{

    componentDidMount(){
        const context = findDOMNode(this).getContext('2d');
        this.paint(context);
    }

    componentDidUpdate(){
        const context = findDOMNode(this).getContext('2d');
        context.clearRect(0,0,600,500);
        this.paint(context);

    }

    paint(ctx){
        ctx.save();

        //男性颜色
        ctx.fillStyle = "lightblue";
        //获取男性数量
        const male = this.props.data.male;
        const m10 = parseInt(male/10);
        const m1 = male%10;

        //先画出 m10 个整列的男性
        for(let j=0;j<m10;j++){
            for(let i=0;i<10;i++){//一列一列画
                ctx.fillRect(5+j*50,5+i*50,40,40);
            }
            ctx.moveTo((j+1)*50,0);//画完一列移动到下一列
        }
        for(let k=0;k<m1;k++){//补全不足10个的男性
            ctx.fillRect(5+m10*50,5+k*50,40,40);
        }
        
        //换成女性的颜色
        ctx.fillStyle = 'pink';
        //计算女性的比例
        const female = 100 - male;
        const f10 = parseInt(female/10);
        const f1 = female%10;

        //往右平移两列
        if(f1==0){
            var x0 = (m10+1)*50;                        
        }else{
            var x0 = (m10+2)*50; 
        }
        const y0 = m1*50;
        //先画出不足10个的女性
        for(let a=0;a<f1;a++){
            ctx.fillRect(5+x0,5+y0+a*50,40,40);
        }
        //移到下一列
        if(f1==0){
            var z0 = (m10+2)*50;                        
        }else{
            var z0 = (m10+3)*50; 
        }
        ctx.moveTo(z0,0);        
        //补全女性
        for(let b=0;b<f10;b++){
            for(let c=0;c<10;c++){//一列一列画
                ctx.fillRect(z0+5+b*50,5+c*50,40,40);
            }
            ctx.moveTo(z0+(b+1)*50,0);//画完一列移动到下一列
        }
        ctx.restore();
    }

    render(){
        return <canvas className={style.canvas} width={600} height={500}></canvas>
    }
}

class TextInput extends Component{
    constructor(props){
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.state = {
            inputValue: '{"male":46,"female":54}'
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
        return <input type='text' onChange={this.handleInputChange} ref="input"/>
    }
}

class Home extends Component{

    constructor(props){
        super(props);
        this.state = {"male":46,"female":54}
    }

    handleClick(){
        let value = findDOMNode(this.refs.textInput).value;
        try{
            var obj = JSON.parse(value);
        }
        catch(error){
            alert("请按格式输入数据！");
        }
        if( obj.male>=0 && obj.female>=0 && (parseInt(obj.male)+parseInt(obj.female)==100) ){
            this.setState(obj);
        }else{
            alert("请按格式输入数据！");
        }
    }

    render(){
        return (
            <div className={style.home}>
                <p>请按格式输入男女比例，如{'{"male":46,"female":54}'}</p>
                <p>各项值应为非负整数，且相加等于100。</p>
                <div>
                    <TextInput ref="textInput" />
                    <button onClick={this.handleClick.bind(this)}>确定</button>
                </div>
                <Canvas data={this.state} />
            </div>
        )
    }
}

export default Home;