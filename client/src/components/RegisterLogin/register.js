import React, { Component } from 'react'



export class Register extends Component {

    state = {
        firstName:"",
        lastName:"",
        email: "",
        password: "",
        passwordConfirmation:"",
        errors: [""]
    }

    displayErrors = errors => 
        errors.map((error, i) => <p key={i} >{error}</p>)
    ;

    handleChange = event =>{
        this.setState({ [event.target.name] : event.target.value });
    }

    render() {
        return (
            <div className="container">
                <h2> Sign Up </h2>

                <div className="row">
                
                    <form className="col s12" onSubmit={event => this.submitForm(event)}>
                        
                        <div className="row">

                            <div className="input-field col s12">

                                <i className="material-icons prefix">create</i>
                                <input
                                    name="lastName"
                                    value={this.state.lastName}
                                    onChange={e => this.handleChange(e)}
                                    id="lastName"
                                    type="text"
                                    // className from materilize css
                                    className="validate"
                                />
                                <label className="active" htmlFor="lastName">lastName</label>

                            </div>

                        </div>

                        <div className="row">
                            <div className="input-field col s12">

                                <i className="material-icons prefix">create</i>
                                <input
                                    name="firstName"
                                    value={this.state.firstName}
                                    onChange={e => this.handleChange(e)}
                                    id="firstName"
                                    type="text"
                                    // className from materilize css
                                    className="validate"
                                />
                                <label className="active" htmlFor="firstName">FirstName</label>

                            </div>
                        </div>

                        <div className="row">
                            <div className="input-field col s12">

                                <i className="material-icons prefix">create</i>
                                <input
                                    name="email"
                                    value={this.state.email}
                                    onChange={e => this.handleChange(e)}
                                    id="email"
                                    type="email"
                                    // className from materilize css
                                    className="validate"
                                />
                                <label className="active" htmlFor="email">Email</label>

                            </div>
                        </div>

                        <div className="row">
                            <div className="input-field col s12">

                                <i className="material-icons prefix">create</i>
                                <input
                                    name="password"
                                    value={this.state.password}
                                    onChange={e => this.handleChange(e)}
                                    id="password"
                                    type="password"
                                    // className from materilize css
                                    className="validate"
                                />
                                <label className="active" htmlFor="password">Password</label>

                            </div>
                        </div>

                        <div className="row">
                            <div className="input-field col s12">

                                <i className="material-icons prefix">create</i>
                                <input
                                    name="passwordConfirmation"
                                    value={this.state.passwordConfirmation}
                                    onChange={e => this.handleChange(e)}
                                    id="passwordConfirmation"
                                    type="password"
                                    // className from materilize css
                                    className="validate"
                                />
                                <label className="active" htmlFor="passwordConfirmation">Password Confirmation</label>

                            </div>
                        </div>

                        {this.state.errors.length >0 && (
                            <div>
                                {this.displayErrors(this.state.errors)}
                            </div>
                        )}

                        <div className="row">
                            <div className="col s12">

                                <button 
                                    className="btn waves-effect red lighten-2"
                                    type="submit"
                                    name="action"
                                    onClick={this.submitForm}>
                                    Create Account
                                </button>
                                
                            </div>
                        </div>

                    </form>
                </div>

                Registration page
            </div>
        )
    }
}

export default Register;