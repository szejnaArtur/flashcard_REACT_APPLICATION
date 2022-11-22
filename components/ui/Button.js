const Button = (props) => {
    return(
        <button className='px-8 py-2 border' onClick={props.click}>
            {props.children}
        </button>
    )
}

export default Button;