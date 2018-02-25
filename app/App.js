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
} from 'react-native';
// import { Navigator } from "react-native-deprecated-custom-components";
import { StackNavigator } from "react-navigation";

// import Login from './app/login'

export default class App extends Component {
  // static navigationOptions = {
  //   title:'Welcome To DOTA2'
  // }
  constructor(props) {
    super(props);
    this.state = {
      left: new Animated.Value(0),
      decayLeft: new Animated.Value(0),
    }
    username: ''
    password: ''

    this.pressJudge = this.pressJudge.bind(this)
  }

  //账号文本变化的回调函数，该回调函数接收的参数为：输入框当前的文本变化
  onUsernameChange = (newUsername) => {
    console.log(newUsername);
    this.username = newUsername;
  }

  onPasswordChange = (newPassword) => {
    console.log(newPassword);
    this.password = newPassword;
  }

  pressJudge() {
    const { navigate } = this.props.navigation
    if (this.username == 'DXM' && this.password == '666') {
      alert('Login Successful!'),
        navigate('Login', { user: 'DXM' })
    } else {
      alert('Username OR Password Error')
    }
  }

  componentDidMount() {

    Animated.spring(this.state.left, {
      toValue: 50,    //属性目标值
      friction: 1,    //摩擦力（越小 振幅越大）
      tension: 100,    //拉力
    }).start();

    // Animated.decay(this.state.decayLeft,{
    //   velocity:2,    //起始速度，必填参数
    //   deceleration:0.992    //速度衰减比例，默认0.997
    // }).start();
  }

  render() {
    return (
      <ScrollView
        contentContainerStyle={{ flex: 1 }}    //让ScrollView的子元素占满整个区域
        keyboardDismissMode='on-drag'    //拖动界面输入法退出
        keyboardShouldPersistTaps="never"    //点击输入法意外的区域：输入法退出
      >
        <View style={styles.container}>
          <Text style={{ fontSize: 30, marginTop: 70 }}>DOTA2</Text>
          <Animated.Image source={require('./app/img/dota.jpg')} style={[styles.logo, { transform: [{ scale: this.state.left }] }]} />
          <TextInput
            onChangeText={this.onUsernameChange}    //绑定文本变化的回调函数
            ref={(username) => this.username = username}
            onFocus={() => this.username.focus()}
            placeholder='username'
            style={styles.input} />
          <TextInput
            onChangeText={this.onPasswordChange}    //接受一个回调函数
            secureTextEntry={true}    //如果是密码框，请开启这个属性
            ref={(password) => this.password = password}
            onFocus={() => this.password.focus()}
            placeholder='password'
            password={true}
            style={styles.input} />
          <TouchableOpacity     //封装视图，当按下时，封装的视图的不透明度会降低
            style={styles.btn}
            onPress={this.pressJudge}>
            <Text style={styles.text}>Login</Text>
          </TouchableOpacity>
          <Text style={styles.forget_password}>忘记密码？</Text>
        </View>
      </ScrollView>
    )
  }
}

// class LoginSuccess extends Component{
//   render(){
//     return(
//       <Text>Welcome 666</Text>
//     )
//   }
// }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  logo: {
    width: 0.9,
    height: 0.9,
    marginTop: 30
  },
  input: {
    height: 40,
    width: 300,
    marginTop: 35,    //间隔
    borderWidth: 1,
    borderRadius: 5,    //圆角
    borderColor: 'lightblue'
  },
  text: {
    fontWeight: 'bold',
    fontSize: 14,
    color: 'black'
  },
  btn: {
    alignSelf: 'stretch',    //覆盖父样式
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'skyblue',
    height: 40,
    borderRadius: 5,
    marginTop: 50
  },
  forget_password: {
    color: 'blue',
    textAlign: 'center',
    marginTop: 25,
  }
});
