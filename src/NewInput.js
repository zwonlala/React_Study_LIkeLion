import React from 'react';

class NewInput extends React.Component {
    state = {
        input: ''
    };

    inputListener = (e) => {
        const inputMsg = e.target.value;
        console.log(inputMsg);
        const newState = {
            input: inputMsg
        }
        this.setState(newState);
    }

    render(){
        return (
            <div>
                <input onChange={this.inputListener}/>
            </div>
        )
    }
}

export default NewInput;