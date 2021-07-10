
import Button from 'ui/Button'

const Input = props => {
  return (
    <label class='ui-input'>
      <span>{props.label}</span>
      <input type={props.type} placeholder={props.placeholder}/>
    </label>
  )
}

const Email = () => {
  return <Input type='email' label='Email' placeholder='andy@example.com'/>
}

const Password = () => {
  const placeholder = 'Must be at least 6 characters'
  return <Input type='password' label='Password' placeholder={placeholder}/>
}

const Login = (state, dispatch) => {
  return (
    <div class='page-login _fixed-full-screen'>
      <div class='page-login-card'>
        <h1>Login</h1>
        <form>
          <Email/>
          <Password/>
          <Button class='-login'>Login</Button>
        </form>
      </div>
    </div>
  )
}

export default {
  view: Login,
  onRoute: () => {
    console.log('Account >> onRoute')
  },
  onBeforeLeave: () => {
    console.log('Account >> onBeforeLeave')
  }
}
