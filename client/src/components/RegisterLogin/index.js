import React, { Component } from 'react'

class RegisterLogin extends Component {
    render() {
        return (
            <div className="container">
                <h2> Login </h2>

                <div className="row">
                {/* onSubmit={event => this.submitForm(event)} */}
                    <form className="col s12">
                        
                        <div className="row">
                            <div className="input-field col s12">

                                <input
                                    name="email"
                                    // value={this.state.email}
                                    // onChange={e => this.handleChange(e)}
                                    id="email"
                                    type="email"
                                    // className from materilize css
                                    className="validate"
                                />

                                <label htmlFor="email">Email</label>
                                <span
                                    className="helper-text"
                                    data-error="invalid email"
                                    data-success="successfull"
                                />

                            </div>
                        </div>

                        <div className="row">
                            <div className="input-field col s12">

                                <input
                                    name="password"
                                    // value={this.state.password}
                                    // onChange={e => this.handleChange(e)}
                                    id="password"
                                    type="password"
                                    // className from materilize css
                                    className="validate"
                                />

                                <label htmlFor="email">Password</label>
                                <span
                                    className="helper-text"
                                    data-error="invalid password"
                                    data-success="successfull"
                                />

                            </div>
                        </div>

                        <div className="row">
                            <div className="col s12">

                                <button 
                                    className="btn waves-effect red lighten-2"
                                    type="submit"
                                    name="action"
                                    onClick={this.submitForm}>
                                    Login
                                </button>

                            </div>
                        </div>

                    </form>
                </div>

                Login page
            </div>
        )
    }
}

export default RegisterLogin;