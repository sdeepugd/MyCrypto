import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

const ProfileScreen = () => {
    const [user,setUser] = useState({
        id: '1',
        name: 'Deepak',
        email: 'sdeepugd@gmail.com',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Ethereum_logo_2014.svg/1257px-Ethereum_logo_2014.svg.png',
        networth: '5678',
    })
    
    const signOut = () => {
        console.log('Signing out')
    }

    return (
        <View style={styles.root}>
            <Image style={styles.image} source={require('../../assets/images/Saly-16.png')} />
            <View style={styles.userContainer} >
                <View style={styles.left}>
                    <Image source={{uri: user.image}} style={styles.userImage}/>
                    <View>
                        <Text style={styles.name}>{user.name}</Text>
                        <Text style={styles.email}>{user.email}</Text>
                    </View>
                </View>
                <View style={styles.right}>
                    <Text style={styles.value}>${user.networth}</Text>
                </View>
            </View>
        <Pressable style={styles.button} onPress={signOut}>   
            <Text style={styles.buttonText}>Sign out</Text>
        </Pressable>
        </View>

    )
}

const styles = StyleSheet.create({
    root:{
        flex:1,
        alignItems: 'center',
        padding:20,
        backgroundColor:'white'
    },
    image:{
        height: 175,
        resizeMode: 'contain'
    },
    userImage:{
        height: 50,
        width: 50,
        resizeMode: 'contain',
        marginRight: 10,
    },
    button:{
        marginTop: 'auto',
    },
    buttonText:{
        
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
    },
    userContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 50,
        marginVertical: 10,
        width: '100%',
    },
    email:{

    },
    value:{

    }
});

export default ProfileScreen
