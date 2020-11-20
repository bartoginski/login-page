import React from 'react'
import './LoginPage.css'


class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          password: 'plywak123',
          authorized: false,
          alert: false,
        };
        this.authorize = this.authorize.bind(this);

      }

      authorize(e) {
        e.preventDefault()
        const inputPassword = document.getElementById('password-input').value
        const auth = this.state.password ===  inputPassword
        
        this.setState({
          authorized: auth,
          alert: !auth
        })

      }
    


    render() {
      const warning = (
        <div>
          <p className="wrong-passwd">WRONG PASSWORD</p>
        </div>
      );

      const emptyDiv = (
        <div className="empty"></div>
      )


      const login = (
        <form action="#"
          onSubmit={this.authorize}>
          <h1>Enter a password</h1>
          <input 
            id="password-input"
            name="password-input"
            type="password"
            placeholder="Password"
            required
            minLength="8"
            maxLength="24"
            />
          <input className="submit-btn" type="submit" value="Submit"/>
          {this.state.alert ? warning : emptyDiv}
        </form>
      );

      const contact = (
        <div>
          <h1>Contact me</h1>
          <p>ogitoziomal@gmail.com</p>
        </div>
      )


        return (
        <div className="main">
          {(this.state.authorized) ? contact : login }
        </div>

        )
    }
}

export default LoginPage