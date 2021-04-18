import React, { Component } from 'react'

class UserGreetings extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: true,
        }
    }
    
    render() {
        // Approach 4 - Short circuit operator
        // If only one value has to be displayed and else none of the value has to be displayed
        return this.state.isLoggedIn && <div>Welcome Amol</div>

        // Approach 3 - Ternary operator approach
        // return this.state.isLoggedIn ? (
        //     <div>Welcome Amol</div> 
        // ) : (
        //     <div>Welcome Guest</div>
        // )

        // Approach 2 - Element variables method approach
        // let message
        // if(this.state.isLoggedIn) {
        //     message = <div>Welcome Amol</div>
        // } else {
        //     message = <div>Welcome Guest</div>
        // }
        // return <div>{message}</div>

        // Approach 1 - If-else approach
        // if(this.state.isLoggedIn) {
        //     return (
        //         <div>Welcome Amol</div>
        //     )
        // } else {
        //     return (
        //         <div>Welcome Guest</div>
        //     )
        // }

        // Basic approach
        // return (
        //     <div>
        //         <div>Welcome Amol</div>
        //         <div>Welcome Guest</div>
        //     </div>
        // )
    }
}

export default UserGreetings
