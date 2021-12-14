import { Image, StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'

export interface UserRankingItemProps {
    user:{
        image: string,
        name: string,
        networth: number
    },
    place: number
}

const UserRankingItem = (props: UserRankingItemProps) => {
        const { user:{image, name, networth},place } = props
    return (
        <View style={styles.root} >
            <View style={styles.left}>
                <Text style={styles.place}>{place}</Text>
                <Image source={{uri: image}} style={styles.image}/>
                <View>
                    <Text style={styles.name}>{name}</Text>
                </View>
            </View>
            <View style={styles.right}>
                <Text style={styles.value}>${networth}</Text>
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
    place:{
        fontSize: 20,
        fontWeight: 'bold',
        width: 30,
        
    },
    right:{
        alignItems:'flex-end'
    },
    value:{
        
    }
});

export default UserRankingItem
