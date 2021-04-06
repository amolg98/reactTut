import React, { Component } from 'react'

class UserGreetings extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: true,
        }
    }
    
    render() {

        if(this.state.isLoggedIn) {
            return (
                <div>Welcome Amol</div>
            )
        } else {
            return (
                <div>Welcome Guest</div>
            )
        }

        // return (
        //     <div>
        //         <div>Welcome Amol</div>
        //         <div>Welcome Guest</div>
        //     </div>
        // )
    }
}

export default UserGreetings
