import React, { Component } from 'react';
import './App.css';
import Forms from './components/forms.jsx';

class App extends Component {
  constructor(props){
    super(props);

    this.state= {
      userList:[
        {
          name: 'nienie',
          age: 24,
          occupation: 'singer'
        },
        {
          name: 'charm',
          age: 21,
          occupation: 'chef'
        }
      ],
        user : {
        name: '',
        age: '',
        occupation: ''
      }
    }
    //add function binding

  }

  // add event handlers
  handleChangeInfor = e => {
    const{name, value} = e.target;

    this.setState((prevState) => ({
      user: {
        ...prevState.user,
        [name]: value
      } 
    }));
  }

  handleAddUser = e => {
    let user = this.state.user;
    let userList = [...this.state.userList];

    userList.push(user);

    this.setState({userList: userList});

    e.preventDefault();
  }

  deleteUser = index =>{
    let userList = [...this.state.userList];

    userList.splice(index,1);

    this.setState({userList:userList})

  }

  render() {

    let userList = this.state.userList;
    let user = this.state.user;

    // console.log('USERS');
    // console.log(userList);

    return (
      <div className="App">

        {/* <Forms addUser1={this.state.userList.handleAddUser} /> */}
        <div className='forms-panel'>
          <form>
            Name: <br/>  <input type='text' name='name'
            placeholder='Name' onChange={this.handleChangeInfor} /><br/>
            Age: <br/>  <input type='text' name='age'
            placeholder='Age' onChange={this.handleChangeInfor} /><br/>
            Occupation: <br/>  <input type='text' name='occupation'
            placeholder='Occupation' onChange={this.handleChangeInfor} /><br/><br/>
            <button type='button' onClick={this.handleAddUser}> Add User</button>
          </form>
            <br/>
        </div>

        <div className='table-panel'>
          <table>
            <tbody>
              <tr className='user-table-row'>
                <th className='user-table-cell'>NAME</th>
                <th className='user-table-cell'>AGE</th>
                <th className='user-table-cell'>OCCUPATION</th>
                <th>ACTION</th>
              </tr>
              {
                userList.map((user, index) =>{
                  return(
                    <tr className='user-table-row'>
                      <td className='user-table-cell'> {user.name} </td>
                      <td className='user-table-cell'> {user.age} </td>
                      <td className='user-table-cell'> {user.occupation} </td>
                      <td className='user-table-cell'>
                        <button type='button' onClick={()=>this.deleteUser(index)}>Delete User</button>
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
        
      </div>
    );
  }
}

export default App;
