import React, {Component} from 'react';
import { Button } from 'reactstrap';

class AppPanel extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <Button onClick={this.props.onClick} color='primary'><h2>{this.props.value}</h2></Button>
        );
    }
}

export default AppPanel;