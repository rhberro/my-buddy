import { createDrawerNavigator } from 'react-navigation'

import HomeScreen from '../../screens/Home'
import SigninScreen from '../../screens/Signin'
import SignupScreen from '../../screens/Signup'

export default createDrawerNavigator(
  {
    Home: HomeScreen,
    Signin: SigninScreen,
    Signup: SignupScreen,
  },
  {
    initialRouteName: 'Signin',
    // initialRouteName: 'Home',
  }
)
