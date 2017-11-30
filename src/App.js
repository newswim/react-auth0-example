import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'
import Button from 'material-ui/Button'
import IconButton from 'material-ui/IconButton'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import { withStyles } from 'material-ui/styles'
import MenuIcon from 'material-ui-icons/Menu'
import './App.css'
import Auth from './features/Auth/Auth'
const auth = new Auth()

const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 3,
    width: '100%'
  },
  flex: {
    flex: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
})

class App extends Component {
  doLogin = () => auth.login()

  render() {
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <IconButton color="contrast" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography type="title" color="inherit">
              Auth0 Example
            </Typography>
            <Button color="contrast" onClick={this.doLogin}>
              Login
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

export default withStyles(styles)(App)
