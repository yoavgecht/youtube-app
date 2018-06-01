import React, { Component } from 'react';

const SearchBar = (props) => (
    <div className="search-bar">
        <input className="search-bar input" onChange={(event) => props.onInputChange(event.target.value)} value={props.term}/> 
    </div>
);  
 

export default SearchBar;

     //class components must have a render function that returns JSX.
     //return <input onChange={this.onInputChange.bind(this)} />; //.bind(this) - binds the components context to the event. this = SearchBar
     //  arrow function block scope {}. this = SearchBar