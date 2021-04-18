import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            parentName: 'Simba'
        }

        this.greetParent = this.greetParent.bind(this)
    }

    // greetParent() {
    //     alert(`Hello ${this.state.parentName}`)
    // }

    greetParent(firstName, secondName) {
        alert(`Hello ${this.state.parentName} from ${firstName} and ${secondName}`)
    }
    
    render() {
        return (
            <div>
                <ChildComponent greetHandler={this.greetParent} />
            </div>
        )
    }
}

export default ParentComponent
