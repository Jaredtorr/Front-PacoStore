

function Input(props){
    return(
    <>
        <input className={props.className} type={props.type} placeholder={props.text} value={props.value}></input>
    </>
    )
}
export default Input;