import React, { Component } from 'react'
import { login } from '../UserFunctions'
import  "./Login.css"
import auth from "../Auth/Auth"

class Login extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
            errors: {}
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault()

        const user = {
            email: this.state.email,
            password: this.state.password
        }


        login(user).then(res => {
            if (res) {
                auth.login()
                this.props.history.push(`/`)
            }
        })
    }

    render() {
        return (
            <div className="zx">
                    <div className="zx1"  style={{marginTop: "100px"}}>
                        <form noValidate onSubmit={this.onSubmit}>
                            <h1>Please sign in</h1>
                            <div>
                                <label htmlFor="email">Email address</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    name="email"
                                    placeholder="Enter email"
                                    value={this.state.email}
                                    onChange={this.onChange}
                                />
                            </div>
                            <div >
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    name="password"
                                    placeholder="Password"
                                    value={this.state.password}
                                    onChange={this.onChange}
                                />
                            </div>
                            <button
                                type="submit"
                            >
                                Sign in
                            </button>
                        </form>
                    </div>
            </div>
        )
    }
}

export default Login