import { Alert, Image, KeyboardAvoidingView, Platform, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'

import { useRoute } from '@react-navigation/native'

const CoinExchangeScreen = () => {

const [coinAmount,setCoinAmount] = useState('')

const [coinUSDValue,setCoinUSDValue] = useState('')

useEffect(() => {
    const amount = parseFloat(coinAmount)
    if(!amount  && amount !== 0){
        setCoinAmount("")
        setCoinUSDValue("")
        return 
    }
    setCoinUSDValue((amount * coinData?.currentPrice).toString())
}, [coinAmount])

useEffect(() => {
    const amount = parseFloat(coinUSDValue)
    if(!amount  && amount !== 0){
        setCoinAmount("")
        setCoinUSDValue("")
        return 
    }
    setCoinAmount((amount / coinData?.currentPrice).toString())
}, [coinUSDValue])

const onPlaceOrder = () => {
    if(isBuy && parseFloat( coinUSDValue)  > maxUSD){
        Alert.alert("You can't buy more than you have")
        return
    }
    if(!isBuy && coinAmount > coinData.amount){
        Alert.alert("You can't sell more than you have")
        return
    }   
}

const maxUSD = 100000;

const route = useRoute()
const isBuy= route?.params?.isBuy
const coinData= route?.params?.coinData
    return (
        <KeyboardAvoidingView style={styles.root}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={100}
        >
            <Text style={styles.title}>{isBuy ?'Buy' : 'Sell'} {coinData?.name}</Text>
            <Text style={styles.subtitle}>1{coinData?.symbol} {'='} ${coinData?.currentPrice}</Text>
            <Image style={styles.image} source={require('../assets/images/Saly-31.png')}/>

            <View style={{flexDirection:'row', justifyContent:'space-between',width:'100%',alignItems:'center'}}>
                <View style={styles.inputContainer}>
                    <TextInput keyboardType='decimal-pad' style={styles.input} placeholder='0' value={coinAmount} onChangeText={setCoinAmount}/>
                    <Text style={styles.coinSymbol}>{coinData?.symbol}</Text>
                </View>
                <Text style={{fontSize:30}}>=</Text>
                <View style={styles.inputContainer}>
                    <TextInput keyboardType='decimal-pad' style={styles.input} placeholder='0'value={coinUSDValue} onChangeText={setCoinUSDValue} />
                    <Text style={styles.coinSymbol}>USD</Text>
                </View>
            </View>
            <Pressable style={styles.button} onPress={ onPlaceOrder}>
                <Text style={styles.buttonText}>Place Order</Text>
            </Pressable>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    root:{
        flex:1,
        alignItems:'center',
        padding:20,
        backgroundColor:'#ffffff'
    },
    title:{
        fontSize:24,
        fontWeight:'bold',
        marginTop:20
    },
    subtitle:{
        fontSize:18,
        marginVertical:10,
        color:'#888888'
    },
    image:{
        height: 150,
        resizeMode:'contain'
    },
    inputContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        borderWidth:1  ,
        borderColor:'#b1b1b1',
        padding: 15,
        flex:1,
        margin: 20,
        borderRadius:10,
        alignItems:'center'
    },
    button:{
        backgroundColor:'#0097ff',
        padding:10,
        marginTop:'auto',
        width:'100%',
        height: 50,
        borderRadius:50,
        alignItems:'center',
    },
    buttonText:{
        color: 'white',
        fontSize:20,
    },
    input:{
        
    },
    coinSymbol:{
        
    }
})


export default CoinExchangeScreen
