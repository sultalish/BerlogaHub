import React from 'react';
import firebase from '../../firebase';
import { Button, Form, Grid, Header, Icon, Message, Segment } from 'semantic-ui-react';
import { Link, useHistory } from 'react-router-dom';
import Dashboard from '../Dashboard';
import md5 from 'md5';

class Login extends React.Component {
    state = {
        email: '',
        password: '',
        errors: [],
        loading: false,
    };

    displayErrors = errors => errors.map((error, i) => <p key={i}>{error.message}</p>)

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };
    handleSubmit = event => {
        event.preventDefault();
        if (this.isFormValid(this.state)) {
            this.setState({ errors: [], loading: true });
            firebase
                .auth()
                .signInWithEmailAndPassword(this.state.email, this.state.password)
                .then(signedInUser => {
                    console.log(signedInUser);
                })
                .catch(err => {
                    console.error(err);
                    this.setState({
                        errors: this.state.errors.concat(err),
                        loading: false
                    });
                })
        }
    };

    isFormValid = ({ email, password }) => email && password;

    render() {
        const { email, password, errors } = this.state;
        return (
            <Grid textAlign="center" verticalAlign="middle" className="app">
                <Grid.Column style={{ maxWidth: 450 }}>
                    <Header as="h2" color="green" textAlign="center">
                        <Icon name="paw" color="green" />
                        Login for BerlogaHub
                    </Header>
                    <Form onSubmit={this.handleSubmit} size="large">
                        <Segment stacked>
                            <Form.Input fluid name="email" icon="mail" iconPosition="left" placeholder="Email Address" onChange={this.handleChange} value={email} type="email" />
                            <Form.Input fluid name="password" icon="lock" iconPosition="left" placeholder="Password" onChange={this.handleChange} value={password} type="password" />
                            <Button color="green" fluid size="large">Login</Button>
                        </Segment>
                    </Form>
                    {errors.length > 0 && (
                        <Message error>
                            <h3>Error</h3>
                            {this.displayErrors(errors)}
                        </Message>
                    )}
                    <Message>Don't have an account? <Link to="/register">Register</Link></Message>
                </Grid.Column>
            </Grid>
        )
    }
};

export default Login;