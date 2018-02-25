import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    AppRegistry,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    ScrollView,
    Animated,
    Button,
    Dimensions,
} from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation'
import App from '../App'



class RecentChatScreen extends Component {
    render() {
        const { params } = this.props.navigation.state
        return (
            <View style={{ flex: 1 }}>
                <Text>List of recent chats with {params.user}</Text>
                <Image source={require('./img/timg.jpeg')} style={{ flex: 1 }} />
            </View>
        )
    }
}

export class Nest extends Component {
    static navigationOptions = {
        title: 'nest page'
    }
    render() {
        return (
            <View>
                <Text>This is a Nest page</Text>
            </View>
        )
    }
}

class AllChatScreen extends Component {
    static navigationOptions = {
        title: 'practice',
    }
    render() {
        const { navigate } = this.props.navigation
        return (
            <View>
                <Text>List of all chats</Text>
                <Button
                    onPress={() => navigate('Nest')}
                    title='nest page'
                />
            </View>
        )
    }
}
export const MainScreenNavigator = TabNavigator({
    Rencent: { screen: RecentChatScreen },
    All: { screen: AllChatScreen }
});



MainScreenNavigator.navigationOptions = ({ navigation }) => {
    console.log(navigation)
    const { state, setParams } = navigation;
    const isInfo = state.params.mode == 'info';
    const { user } = state.params;
    return {
        title: isInfo ? `${user}'s Contact info` : `Chat with ${state.params.user}`,
        headerRight: (
            <Button
                title={isInfo ? 'Done' : `${user}'s Info`}
                onPress={() => setParams({ mode: isInfo ? 'none' : 'info' })}
            />
        )
    }
    //   title:`Chat with ${navigation.state.params.user}`
}

const styles = StyleSheet.create({
    logo: {
        flex: 1,
        width: 100,
        height: 50
    }
})