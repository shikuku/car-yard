import React, {Component} from "react";
import GoogleLogin from "react-google-login";
import styled from "styled-components";



export default class signUp extends Component{
    responseGoogle=(response)=>{
        console.log(response);
        console.log(response.profileObj);
    }

    render(){
        return(
            <div>
                <GoogleLogin
                
                clientId="805963080739-kcrho5mgp4af3a1a88nofeeunvn3pckl.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={this.responseGoogle}
                onFailure={this.responseGoogle}
                cookiePolicy={"single_host_origin"}
                
                
                
                
                
                />
            </div>
        )
    }
}