


function PassingJsx(props){
    return(
        <>
        <h1>{props.name}</h1>
        <p>{props.age}</p>
        <div>{props.greeting}</div>
        <div>{props.children}</div>
        </>
    )
};

export default PassingJsx;