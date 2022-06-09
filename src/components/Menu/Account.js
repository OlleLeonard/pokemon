import {Link} from "react-router-dom";
import React from "react";



class Account extends React.Component{
    state={
        name:"",
        Password:""
    }
    handleChange = (e) =>{
        const {name,value} = e.target
        this.setState({[name]:value})

    }

    handleSubmit = (e) =>{

    }
    render(){

    return (
        <form onSubmit = {this.handleSubmit} className="container" id="createAccount">
        <h1 class="form__title">Create Account</h1>
      
        <div class="form__input-group">
            <input type="name" id="signupUsername" class="form__input" autofocus placeholder=" New Usermane" onChange={this.handleChange}></input>
        
        </div>
   
        <div class="form__input-group">
            <input type="password" class="form__input" autofocus placeholder="NewPassword" onChange={this.handleChange}></input>
           
        </div>

        <Link to="/choose"><button onSubmit = {this.handleSubmit} class="form__button" type="submit">Continue</button></Link> 

    
                   <Link class="form__link" to="/Start">Alredy have an account? Sign in here</Link>
                  
      </form>

              
    );
    }
}
  export default Account;