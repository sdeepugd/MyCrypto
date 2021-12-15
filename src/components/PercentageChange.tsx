import { Text, View } from 'react-native'

import React from 'react'

interface PercentageChangeProps {
    value:number,
    style:object
}

const PercentageChange = ({value,style = {}} : PercentageChangeProps) => {
    return (
        <View>
            <Text style={{color: value > 0 ? '#398f0a' : '#f10000' }}>
                {value > 0 && '+'}{value}
            </Text>
        </View>
    )
}

export default PercentageChange
