import React,{Component,PropTypes} from 'react'
import {findDOMNode} from 'react-dom'
import style from '../css/gender.css'

class Canvas extends Component{

    componentDidMount(){
        const context = findDOMNode(this).getContext('2d');
        this.paint(context);
    }

    shouldComponentUpdate(nextProps,nextState){
        //若数据没发生变化，则不重绘
        return nextProps.data.male!=this.props.data.male;
    }

    componentDidUpdate(){
        const context = findDOMNode(this).getContext('2d');
        context.clearRect(0,0,1100,600);
        this.paint(context);
    }

    //绘制男性图标
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

    //绘制女性图标
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

    //生成图表
    paint(ctx){
        ctx.save();

        //获取男性比例
        const male = this.props.data.male;
        const m5 = parseInt(male/5);
        const m1 = parseInt(male%5);

        //初始化计数器
        let count = 20;

        //先画出 m5 个整列的男性
        for(let j=0;j<m5;j++){
            for(let i=0;i<5;i++){//一列一列画
                count++;
                setTimeout(()=>(this.paintMale(ctx,j*50,i*120)),10*count);
            }
        }

        for(let i=0;i<m1;i++){//补全不足5个的男性
            count++;
            setTimeout(()=>(this.paintMale(ctx,m5*50,i*120)),10*count);
        }
        
        //计算女性比例
        const female = 100 - male;
        const f5 = parseInt(female/5);
        const f1 = female%5;

        //中间的空隙
        const x00 = f1==0?(m5+1)*50:(m5+2)*50;
        const y00 = m1*120;

        //先画出不足5个的女性
        for(let i=0;i<f1;i++){
            count++;
            setTimeout(()=>(this.paintFemale(ctx,x00,y00+i*120)),10*count);
        }

        //补全女性
        const x01 = f1==0?(m5+2)*50:(m5+3)*50;
        for(let j=0;j<f5;j++){
            for(let i=0;i<5;i++){
                count++;
                setTimeout(()=>(this.paintFemale(ctx,x01+j*50,i*120)),10*count);
            }
        }
        ctx.restore();
    }

    render(){
        return <canvas className={style.canvas} width={1100} height={600}></canvas>
    }
}

Canvas.propTypes = {
    data: PropTypes.object.isRequired
}

export default Canvas;