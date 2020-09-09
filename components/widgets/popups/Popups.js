export default function InputBoxMessage(props){
    return (
        <span className={'message '+props.status}>
            <p className="desc">{props.desc}</p>
        </span>
    )
}