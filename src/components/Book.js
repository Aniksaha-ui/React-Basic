import React from 'react'
import '../stylesheet/Book.css'

const Books = (props)=> {
    console.log(props);
    return (
        <div className="Book">
        <h3 onClick={props.change}>{props.bookName}</h3>
        <h3>{props.writer}</h3>
        <h4>{props.otherProp}</h4>
        </div>
    );
}


export default Books;
