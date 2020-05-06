import { createAppContainer, createStackNavigator } from 'react-navigation' 

import ExampleScreen from 'App/Containers/Example/ExampleScreen'
import SplashScreen from 'App/Containers/SplashScreen/SplashScreen'

/**
 * The root screen contains the application's navigation.
 *
 * @see https://reactnavigation.org/docs/en/hello-react-navigation.html#creating-a-stack-navigator
 */
const StackNavigator = createStackNavigator(
  {
    // MainScreen: SplashScreen,
    MainScreen: SplashScreen,
  },
  {
    initialRouteName: 'MainScreen',
    headerMode: 'none',
  }
)

export default createAppContainer(StackNavigator)
