import React, { Component } from 'react';
import '../App.css';

class Forms extends Component{
    render(){
        return(
            <div className='forms-panel'>
                <form>
                    Name: <br/>  <input type='text' name='name'
                    placeholder='Name' onChange={this.handleChangeInfor} /><br/>
                    Age: <br/>  <input type='text' name='age'
                    placeholder='Age' onChange={this.handleChangeInfor} /><br/>
                    Occupation: <br/>  <input type='text' name='occupation'
                    placeholder='Occupation' onChange={this.handleChangeInfor} /><br/>
                    <button type='button' onClick={this.addUser1}> Add User</button>
                </form>
                <br/>
        </div>
        );
    }
}

export default Forms;