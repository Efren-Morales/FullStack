//import React, { Component} from 'react';
import React, { useState } from 'react';


//class Form extends Component {
export default () => {

// state = {
//     password: " ",
//     name: " "
// }

const [password, setPassword] = useState('defaultPassword');
const [name, setName] = useState('defaultName');

// setMyState = (e)=>{
//     this.setState(
//         {[e.target.name]: e.target.value}
//     )
// }


handleSubmit= async (e) => {
e.preventDefault();
//const data = JSON.stringify(this.state);
const data = JSON.stringify({'password': password, 'name': name});
await fetch ("http://localhost:4000",{
    method:"POST",
    body: data,
    headers:{
        "Content-Type":"application /json"
    }
})
}

  //render() {
    //removed render () above
      console.log(this.state)
    return (
      <div className="Form">
        <p>{this.props.name}</p>
        {/* <form onSubmit={this.handleSubmit}> */}
        <form onSubmit={handleSubmit}>

  
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input name="password" type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"
    //onChange= {e => this.setMyState(e)}
    onChange= {e => setPassword(e.target.value)}
    />
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputName">Name</label>
    <input type="text" className="form-control" id="exampleInputName" placeholder="Name"
    //onChange= {e => this.setMyState(e)}/>
    onChange= {e => setName(e.target.value)}/>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>


      </div>
    )
  };
//}
// removed the bracket above
//export default Form;
