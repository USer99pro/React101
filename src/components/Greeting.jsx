const Greeting = (probs) =>{

    const {name,number,age} = probs
    return (
        <div>
             <h1>Hello : {name} </h1>
             <h1>Number : {number} </h1>
             <h1>Age : {age} </h1>
        </div>
    )
}

export default Greeting