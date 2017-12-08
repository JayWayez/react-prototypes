import React from 'react';
import ReactDOM from 'react-dom';



const luckyNumber = () => {
    return (Math.floor(Math.random() * 1001) + 1); 
}

const user = {
    name : "Jay",
    luckyNumber : luckyNumber()
}

const Greeting = (props) => {
    const name = props.person.name;
    const luckyNumber = props.person.luckyNumber;
    const age = props.age;
    console.log(props);    
    return <div className="container">
        <h1>Hello, {name}!</h1>
        <h2 className="text-muted">Your lucky number is : {luckyNumber}</h2>
        <h3>{age}</h3>
        </div>
}

ReactDOM.render(
    <Greeting person={user} age="20"/>,
    document.getElementById('root')
);
