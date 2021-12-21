import { Image, Pressable, Text, View } from 'react-native'

import React from 'react'
import styles from './style'

const WelcomeScreen = () => {
const signinGoogle = () => {
    
}

    return (
        <View style={styles.root}>
            <Image style={styles.image} source={require('../../assets/images/Saly-1.png')} />
            <Text style={styles.header1}>Welcome to MyCrypto</Text>
            <Text style={styles.header2}>Invest your virtual $100.000 and compete with others</Text>

            <Pressable onPress={signinGoogle} style={styles.button}>
                <Image style={styles.buttonImage} source={require('../../assets/images/signin_with_google.png')} />
            </Pressable>
        </View>
    )
}

export default WelcomeScreen
