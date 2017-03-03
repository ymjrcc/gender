import React,{Component} from 'react'
import {findDOMNode} from 'react-dom'
import style from '../css/canvasBox.css'

class Canvas extends Component{

    componentDidMount(){
        const context = findDOMNode(this).getContext('2d');
        this.paint(context);
    }

    componentDidUpdate(){
        const context = findDOMNode(this).getContext('2d');
        context.clearRect(0,0,1100,600);
        this.paint(context);

    }

    componentWillUnmount(){
        const context = findDOMNode(this).getContext('2d');
        context.clearRect(0,0,1100,600);
    }

    paintMale(ctx,x0,y0){
        ctx.save();
        ctx.fillStyle = "#897fef";
        ctx.beginPath();
        ctx.arc(25+x0,8+y0,8,0,Math.PI*2,true);
        ctx.fill(); 
        ctx.moveTo(8+x0,61+y0);
        ctx.arcTo(8+x0,19+y0,41+x0,19+y0,5);
        ctx.arcTo(41+x0,19+y0,41+x0,61+y0,5);
        ctx.lineTo(41+x0,61+y0);
        ctx.lineTo(36+x0,61+y0);
        ctx.lineTo(36+x0,29+y0);
        ctx.lineTo(33+x0,29+y0);
        ctx.arcTo(33+x0,99+y0,26+x0,99+y0,3);
        ctx.arcTo(26+x0,99+y0,26+x0,56+y0,3);
        ctx.lineTo(26+x0,56+y0);
        ctx.lineTo(23+x0,56+y0);
        ctx.arcTo(23+x0,99+y0,16+x0,99+y0,3);
        ctx.arcTo(16+x0,99+y0,16+x0,29+y0,3);
        ctx.lineTo(16+x0,29+y0);
        ctx.lineTo(13+x0,29+y0);
        ctx.lineTo(13+x0,61+y0);
        ctx.lineTo(8+x0,61+y0);
        ctx.fill();
        ctx.restore();  
    }

    paintFemale(ctx,x0,y0){
        ctx.save();
        ctx.fillStyle = "#82c99d";
        ctx.beginPath();
        ctx.arc(25+x0,8+y0,8,0,Math.PI*2,true);
        ctx.fill();
        ctx.moveTo(4+x0,54+y0);
        ctx.arcTo(13+x0,19+y0,36+x0,19+y0,5);
        ctx.arcTo(36+x0,19+y0,45+x0,54+y0,5);
        ctx.lineTo(45+x0,54+y0);
        ctx.lineTo(42+x0,57+y0);
        ctx.lineTo(35+x0,26+y0);
        ctx.lineTo(32+x0,26+y0);
        ctx.lineTo(42+x0,71+y0);
        ctx.lineTo(32+x0,71+y0);
        ctx.arcTo(32+x0,99+y0,26+x0,99+y0,3);
        ctx.arcTo(26+x0,99+y0,26+x0,71+y0,3);
        ctx.lineTo(26+x0,71+y0);
        ctx.lineTo(23+x0,71+y0);
        ctx.arcTo(23+x0,99+y0,17+x0,99+y0,3);
        ctx.arcTo(17+x0,99+y0,17+x0,71+y0,3);
        ctx.lineTo(17+x0,71+y0);
        ctx.lineTo(7+x0,71+y0);
        ctx.lineTo(17+x0,26+y0);
        ctx.lineTo(14+x0,26+y0);
        ctx.lineTo(7+x0,57+y0);
        ctx.moveTo(4+x0,54+y0);
        ctx.fill();
        ctx.restore();  
    }

    paint(ctx){
        ctx.save();

        //获取男性比例
        const male = this.props.data.male;
        const m5 = parseInt(male/5);
        const m1 = parseInt(male%5);

        //先画出 m5 个整列的男性
        for(let j=0;j<m5;j++){
            for(let i=0;i<5;i++){//一列一列画
                this.paintMale(ctx,j*50,i*120);
            }
        }
        for(let k=0;k<m1;k++){//补全不足5个的男性
            this.paintMale(ctx,m5*50,k*120);
        }
        
        //计算女性比例
        const female = 100 - male;
        const f5 = parseInt(female/5);
        const f1 = female%5;

        //往右平移两列
        if(f1==0){
            var x00 = (m5+1)*50;                        
        }else{
            var x00 = (m5+2)*50; 
        }
        const y00 = m1*120;

        //先画出不足5个的女性
        for(let a=0;a<f1;a++){
            this.paintFemale(ctx,x00,y00+a*120);
        }
        //移到下一列
        if(f1==0){
            var z0 = (m5+2)*50;                        
        }else{
            var z0 = (m5+3)*50; 
        }
        //补全女性
        for(let b=0;b<f5;b++){
            for(let c=0;c<5;c++){//一列一列画
                this.paintFemale(ctx,z0+b*50,c*120);
            }
        }
        ctx.restore();
    }

    render(){
        return <canvas className={style.canvas} width={1100} height={600}></canvas>
    }
}

class TextInput extends Component{
    constructor(props){
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
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
        return <input type='text' onChange={this.handleInputChange} ref="input"/>
    }
}

class CanvasBox extends Component{

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
            <div className={style.canvasBox}>
                <h1>性别占比</h1>
                <p>请按格式输入男女比例，如{'{"male":59,"female":41}'}</p>
                <p>各项值应为非负整数，且相加等于100。</p>
                <div>
                    <TextInput ref="textInput" />
                    <button onClick={this.handleClick.bind(this)}>确定</button>
                </div>
                <Canvas data={this.state} />
                <div className={style.footer}>
                    <div>男</div>
                    <div>女</div>
                </div>
            </div>
        )
    }
}

export default CanvasBox;