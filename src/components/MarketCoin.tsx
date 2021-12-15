import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'

import PercentageChange from './PercentageChange'
import { useNavigation } from '@react-navigation/native'

export interface MarketCoinProps {
    marketCoin:{
        image: string,
        name: string,
        symbol: string,
        valueChange24H: number,
        valueUSD: number
    }
}

const MarketCoin = (props: MarketCoinProps) => {
        const { marketCoin:{image, name, symbol, valueChange24H, valueUSD} } = props

        const navigation = useNavigation()
        

    return (
        <Pressable style={styles.root} onPress={() => {navigation.navigate('CoinDetails')}}>
            <View style={styles.left}>
                <Image source={{uri: image}} style={styles.image}/>
                <View>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.symbol}>{symbol}</Text>
                </View>
            </View>
            <View style={styles.right}>
                <Text style={styles.name}>${valueUSD}</Text>
                <PercentageChange value={valueChange24H} style={{}}/>
                <Text style={[styles.symbol,{color:valueChange24H > 0 ? '#1fbb0a' : '#c01616'}]}>{valueChange24H > 0 && '+'} {valueChange24H}</Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    root:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 50,
        margin:10
    },
    image:{
        width: 50, 
        height: 50,
        margin: 5
    },
    name:{

    },
    symbol:{
        
    },
    left:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    right:{
        alignItems:'flex-end'
    }
});

export default MarketCoin
