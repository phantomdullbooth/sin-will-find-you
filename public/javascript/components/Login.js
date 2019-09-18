// APP > MAIN > LOGIN

class Login extends React.Component {
    render() {
        return (
            <form class="login-form" onSubmit={this.props.triggerLogin}>
                <label htmlFor="email">Email</label>
                <input
                    className="login-email"
                    type="text"
                    onChange={this.props.handleChange}
                    placeholder="What's your email?"
                    value={this.props.email}
                    id="email" />

                <label htmlFor="username">Username</label>
                <input
                    className="login-username"
                    type="text"
                    onChange={this.props.handleChange}
                    placeholder="Enter username"
                    value={this.props.username}
                    // class="input-username"
                    id="username" />

            <label htmlFor="password">Password</label>
                <input
                    className="login-password"
                    type="password"
                    onChange={this.props.handleChange}
                    placeholder="Enter password"
                    value={this.props.password}
                    id="password" />

                <input
                    type="submit"
                    value="Login"
                    className="login-button" />
            </form>
        )
    }
}