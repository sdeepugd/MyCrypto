import { FlatList, Image, Text, View } from 'react-native'

import React from 'react'
import UserRankingItem from '../../components/UserRankingItem'
import styles from './styles'

const userRankingData
 = [{ 
    id:'1',
    name: 'VirtualDollars',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyz4yL-YIE6xvPPLFqRMCe9PNbgTIHmv3rFA&usqp=CAU',
    networth: 59420,
},{
    id:'2',
    name: 'Bitcoin',
    image:'https://e7.pngegg.com/pngimages/840/273/png-clipart-bitcoin-cryptocurrency-blockchain-ethereum-logo-bitcoin-text-orange.png',
    networth: 6900,
},{
    id:'3',
    name: 'Ethreum',
    image:'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Ethereum_logo_2014.svg/1257px-Ethereum_logo_2014.svg.png',
    networth: 30120,
},
]

const RankingScreen = () => {
    return (
        <View style={styles.root}>
            <FlatList
                style={styles.list}
                data={userRankingData
                }
                renderItem={({ item ,index}) => <UserRankingItem user={item} place={index + 1}/>}
                ListHeaderComponentStyle={{alignItems: 'center'}}
                ListHeaderComponent={()=>(
                    <>
                        <Image style={styles.image} source={require('../../assets/images/Saly-20.png')} />
                    </>
                )}

            />
        </View>

    )
}

export default RankingScreen
