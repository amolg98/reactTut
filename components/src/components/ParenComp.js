import React, { Component } from 'react'
import MemoComp from './MemoComp'
// import PureComp from './PureComp'
// import RegComp from './RegComp'

class ParenComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Amol'
        }
    }
    
    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: 'Amol'
            })
        }, 2000) // set to 2 secs
    }

    render() {
        console.log("************************ Parent Component Render ******************")
        return (
            <div>
                Paren Component
                <MemoComp name={this.state.name}/>
                {/* <RegComp name={this.state.name}/> */}
                {/* <PureComp name={this.state.name}/> */}
                
            </div>
        )
    }
}

export default ParenComp
