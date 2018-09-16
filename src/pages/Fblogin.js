import React,{Component} from 'react';
import {Alert,StyleSheet,View,Text,SafeAreaView, Image,TextInput,Button,TouchableOpacity  } from 'react-native';

export default class Fblogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
          };      
      }
    
      _onPressButton() {
        Alert.alert('You tapped the button!')
      }
    render () {
        return (
            
            <SafeAreaView style={styles.container}>
                <View style={{flex:2, justifyContent: 'center', alignItems: 'center'}}>
                    <Image  style={styles.logo} source={require('../sources/images/fblogo.png')} />
                </View>
                <View style ={styles.loginform}>
                    <TextInput 
                    style={styles.inputuser}
                    underlineColorAndroid= "transparent"
                    placeholder="Email or Phone"
                    >
                    </TextInput>
                    
                    <TextInput 
                    style={styles.inputpass}
                    underlineColorAndroid= "transparent"
                    placeholder="Password"
                    secureTextEntry>
                    </TextInput>

                    <TouchableOpacity
                    onPress={this._onPressButton}
                    style={styles.btnlogin}
                    >
                    <Text style={styles.text}>Log In</Text>
                    </TouchableOpacity>
                    <View>
                    
                    </View>
                </View>
                <View>

                </View>
                <View style={{flex:2,justifyContent: 'flex-end', alignItems: 'center', marginBottom:15,}}>
                    <View style={{ flexDirection: 'row'}}>
                        <View style={{flex:1}}></View>
                        <View style={{flex:2,alignItems: 'center'}}>
                        <Text style={styles.forgot} onPress={this._onPressButton}>Sign Up for Facebook</Text>
                        </View>
                        <View style={{flex:1,alignItems: 'flex-end', marginRight:15,}}>
                        <TouchableOpacity
                        onPress={this._onPressButton}
                        style={{backgroundColor:'#223B73',height:25,width:25,justifyContent: 'center', alignItems: 'center',borderRadius: 5}}
                        >
                        <Text style={{color:'white',fontWeight:"bold",fontSize:15}}>?</Text>
                        </TouchableOpacity>
                        </View>

                    </View>
                </View>

            </SafeAreaView >
        );
    }
}
const styles=StyleSheet.create({
    container:{
        backgroundColor: 'rgb(59, 89, 152)',
        flex:1,
        flexDirection: 'column',
        alignItems: 'center',
    },
    logo:{
        width:230,
        height:50,
        alignItems: 'center',
    },
    loginform:{
        flex:2,
        justifyContent: 'center', 
        alignItems: 'center'
    },
    inputuser:{
        backgroundColor:'white',
        height:40,
        width:340,  
        borderRadius:2,
        marginTop:10,
        marginBottom:20,
        color:'grey',
        fontSize:12,
        paddingLeft:10,
        elevation: 1,
    },
    inputpass:{
        backgroundColor:'white',
        height:40,
        width:340,  
        borderRadius:2,
        marginBottom:20,
        color:'black',
        fontSize:12,
        paddingLeft:10,
        elevation: 1,
    },
    btnlogin:{
        backgroundColor:'#223B73',
        height:40,
        width:340,
        borderRadius:3,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 1,
    },
    text:{
        color:'white',
        fontWeight:"bold",
        fontSize:15
    },
    forgot:{
        marginRight:-15,
        textDecorationLine:'underline',
        textAlign:'center',
        //marginTop:180,
        color:'white',
        bottom: 0,
        fontSize:12,
        elevation: 1,

    }
})