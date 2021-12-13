import { FlatList, Image, Text, View } from 'react-native'

import MarketCoin from '../../components/MarketCoin'
import React from 'react'
import styles from './styles'

const marketCoins = [{ 
    id:'1',
    name: 'VirtualDollars',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyz4yL-YIE6xvPPLFqRMCe9PNbgTIHmv3rFA&usqp=CAU',
    symbol: 'USD',
    valueChange24H: 9.42,
    valueUSD: 69.42,
},{
    id:'2',
    name: 'Bitcoin',
    image:'https://e7.pngegg.com/pngimages/840/273/png-clipart-bitcoin-cryptocurrency-blockchain-ethereum-logo-bitcoin-text-orange.png',
    symbol: 'BTC',
    valueChange24H: -1.12,
    valueUSD: 69.00,
},{
    id:'3',
    name: 'Ethreum',
    image:'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Ethereum_logo_2014.svg/1257px-Ethereum_logo_2014.svg.png',
    symbol: 'ETC',
    valueChange24H: -1.00,
    valueUSD: 30.120,
},
]

const MarketScreen = () => {
    return (
        <View style={styles.root}>
            <FlatList
                style={styles.list}
                data={marketCoins}
                renderItem={({ item }) => <MarketCoin marketCoin={item} />}
                ListHeaderComponentStyle={{alignItems: 'center'}}
                ListHeaderComponent={()=>(
                    <>
                        <Image style={styles.image} source={require('../../assets/images/Saly-17.png')} />
                        <View style={styles.textContainer}>
                            <Text style={styles.label}>Portfolio Balance</Text>
                            <Text style={styles.label}> $46.60</Text>
                        </View>
                    </>
                )}

            />
        </View>

    )
}

export default MarketScreen
