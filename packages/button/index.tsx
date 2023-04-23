import './index.css'
const Button = (props:any) => {
   console.log(props,'props');
   const {type} = props;
   // 根据传进来的type 做不同的样式处理
    return <button className={type + ' base'}>{props.children}</button>
}

export default Button