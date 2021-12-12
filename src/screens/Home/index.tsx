import { Image, Text, View } from 'react-native'

import React from 'react'
import styles from './style'

const HomeScreen = () => {
    return (
        <View style={styles.root}>
            <Image style={styles.image} source={require('../../assets/images/Saly-1.png')} />
            <Text style={styles.header1}>Welcome to MyCrypto</Text>
            <Text style={styles.header2}>Invest your virtual $100.000 and compete with others</Text>
        </View>
    )
}

export default HomeScreen
