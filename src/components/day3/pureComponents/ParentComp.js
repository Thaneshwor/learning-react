import React, { PureComponent } from 'react'
import RegComponent from './RegComponent';
import PureComp from './PureComp';

class ParentComp extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Thanos'
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: 'Thanos'
            })
        }, 2000)
    }

    render() {
        console.log('***********parent component render************');
        return (
            < div >
                ParentComponent
                <RegComponent name={this.state.name} />
                <PureComp name={this.state.name} />
            </div >
        )
    }
}

export default ParentComp;
