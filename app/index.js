import { AppRegistry } from 'react-native';
import App from './App';
import { MainScreenNavigator, Nest } from './app/login'
import { StackNavigator } from "react-navigation";

const SimpleApp = StackNavigator({
    Home: {
        screen: App,    //screen:对应界面的名称，需要填入import之后的页面
        navigationOptions: {
            title: 'Welcome To DOTA2',
            headerTintColor: 'red'
        }
    },
    Login: { screen: MainScreenNavigator },
    Nest: { screen: Nest }
})

AppRegistry.registerComponent('app', () => SimpleApp);
