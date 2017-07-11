import React from "react";
import PropTypes from 'prop-types';

class InputBox extends React.Component{
    constructor(){
        super();
        this.createData=this.createData.bind(this);
    }

    createData(event){
        event.preventDefault();
        const data={
            name:this.name.value
        };
        if (this.props.data==="teachers")
            this.props.addTeacher(data);
        else
            this.props.addRoom(data);
        this.inputForm.reset();
    }

    render(){
        let placeholderValue;
        if (this.props.data==="rooms")
            placeholderValue="Enter room number"
        else 
            placeholderValue="Enter teacher's name"
        return(
            <form ref={(input)=>this.inputForm=input} onSubmit={this.createData} >
                <input ref={(input)=>this.name=input} placeholder={placeholderValue} type="text"></input>
                <button type="submit">Add</button>
            </form>
        );
    }
}

InputBox.propTypes={
    addTeacher:PropTypes.func.isRequired,
    addRoom:PropTypes.func.isRequired,
    data:PropTypes.string.isRequired
};

export default InputBox;