import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import React from 'react';

export default class LoginFormComponent extends React.Component {
    constructor(props){
        super(props);
        this.publish = this.publish.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    async componentDidMount() {
    }

    async componentWillUpdate(nextProps, nextState, nextContext) {
        Object.assign(nextState, nextProps); // sync web component property change
    }

    handleChange({ target }) {
        this.setState({
            [target.name]: target.value
        });
    }

    publish() {
        console.log( this.state.firstName, this.state.lastName, this.state.password );
    }

    render() {
        return (
            <div>
                <MuiThemeProvider>
                    <div>
                        <TextField
                            floatingLabelText="First Name"
                            defaultValue={this.state.firstName}
                            onChange={this.handleChange}
                        />
                        <br/>
                        <TextField
                            floatingLabelText="Last Name"
                            defaultValue={this.state.lastName}
                            onChange={this.handleChange}
                        />
                        <br/>
                        <TextField
                            type = "password"
                            floatingLabelText="Password"
                            defaultValue={this.state.password}
                            onChange={this.handleChange}
                        />
                        <br/>
                        <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => {
                                const detail = {
                                    firstName: this.state.firstName,
                                    lastName: this.state.lastName,
                                    password: this.state.password
                                };
                                this.props.root.dispatchEvent(new CustomEvent('submit', {detail}));
                            }
                        }/>
                    </div>
                </MuiThemeProvider>
            </div>
        );
    }
}

const style = {
    margin: 15,
};
