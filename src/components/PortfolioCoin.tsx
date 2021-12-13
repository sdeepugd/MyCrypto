import { Image, StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'

export interface PortfolioCoinProps {
    portfolioCoin:{
        image: string,
        name: string,
        symbol: string,
        amount: number,
        valueUSD: number
    }
}

const PortfolioCoin = (props: PortfolioCoinProps) => {
        const { portfolioCoin:{image, name, symbol, amount, valueUSD} } = props
    return (
        <View style={styles.root} >
            <View style={styles.left}>
                <Image source={{uri: image}} style={styles.image}/>
                <View>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.symbol}>{symbol}</Text>
                </View>
            </View>
            <View style={styles.right}>
                <Text style={styles.name}>${valueUSD}</Text>
                <Text style={styles.symbol}>{symbol} {amount}</Text>
            </View>
        </View>
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

export default PortfolioCoin
