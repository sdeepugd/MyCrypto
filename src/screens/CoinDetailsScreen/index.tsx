import { Image, Pressable, Text, View } from 'react-native'
import React, { useState } from 'react'

import { AntDesign } from '@expo/vector-icons'
import PercentageChange from '../../components/PercentageChange'
import styles from './style'

const CoinDetailsScreen = () => {

    const onBuy = () => {
        console.log('Buy')
    }

    const onSell = () => {
        console.log('Sell')
    }

    const [coinData,setCoinData] = useState({
        id: '1',
        name: 'Bitcoin',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Ethereum_logo_2014.svg/1257px-Ethereum_logo_2014.svg.png',
        symbol: 'USD',
        valueChange24H: -1.12,
        valueChange1D: 2.12,
        valueChange7D: -1.12,
        currentPrice:59372,
        amount:2
    })

    return (
    <View  >
        <View style={styles.root}>
            <View style={styles.left}>
                <Image source={{uri: coinData.image}} style={styles.image}/>
                <View>
                    <Text style={styles.name}>{coinData.name}</Text>
                    <Text style={styles.symbol}>{coinData.symbol}</Text>
                </View>
            </View>
            <View style={styles.right}>
                <AntDesign name={'staro'} size={24} color={'#0b08bb'}/>
            </View>
        </View>
        <View style={styles.currentPricecontainer}>
            <View style={styles.right}>
                <Text style={styles.label}> Current Price</Text>
                <Text style={styles.value}>{coinData.currentPrice}</Text>
            </View>
            <View style={{flexDirection:'row',width:200,justifyContent:'space-between'}}>
                <View style={styles.right}>
                    <Text style={styles.label}> 1 Hour</Text>
                    <PercentageChange value={coinData.valueChange24H} style={{}}/>
                </View>
                <View style={styles.right}>
                    <Text style={styles.label}> 1 Day</Text>
                    <PercentageChange value={coinData.valueChange1D} style={{}}/>
                </View>
                <View style={styles.right}>
                    <Text style={styles.label}> 7 Days</Text>
                    <PercentageChange value={coinData.valueChange7D} style={{}}/>
                </View>
            </View>
        </View>
        <View style={styles.row}>
            <Text>Position</Text>
            <Text>{coinData.symbol}{coinData.amount}{' '}($ {coinData.currentPrice * coinData.amount})</Text>
        </View>
        <View style={[styles.row,{marginTop:'auto'}]}>
            <Pressable style={[styles.button,{backgroundColor:'#24850f'}]} onPress={onBuy}>
                <Text style={styles.buttonText}>Buy</Text>
            </Pressable> 
            <Pressable style={[styles.button,{backgroundColor:'#e6643d'}]} onPress={onSell}>
                <Text style={styles.buttonText}>Sell</Text>
            </Pressable> 
        </View>
    </View>
    )
}

export default CoinDetailsScreen
