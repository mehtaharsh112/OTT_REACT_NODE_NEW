import './Button.css'

function ButtonA(props)
{

    return(
        <>
        <button className="btnA" style={{backgroundColor:props.bgcol, color:props.col}} >
             {props.title}
        </button>
        </>
    )
}

export default ButtonA