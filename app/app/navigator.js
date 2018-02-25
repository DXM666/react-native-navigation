import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import { Navigator } from "react-native-deprecated-custom-components";

import App from '../App';


export default class navigator extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let defaultName = 'App';
        let defaultComponent = App;
        return (
            <Navigator
                initialRoute={{ name: defaultName, component: defaultComponent }}
                configureScene={(router) => {
                    return Navigator.SceneConfigs.VerticalDownSwipeJump;    //页面跳转的动画
                }}
                //接受一个‘返回需要渲染的场景的回调函数’
                //这里第一个参数route就是initiRoute
                renderScene={(route, navigator) => {
                    let Component = route.component;    //route包含的场景，在界面上渲染该场景
                    return <Component {...route.params} navigator={navigator} />
                }}
            />
        )
    }
}