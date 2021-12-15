import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    name:{
        fontSize: 20,
        fontWeight: 'bold',
        margin: 10,
    },
    symbol:{
        fontSize: 15,
        fontWeight: 'bold',
        marginBottom: 10,
    },
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
    left:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    right:{
        alignItems:'flex-end'
    }
    ,
    label:{

    },
    value:{
        fontSize: 24
    },
    currentPricecontainer:{
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
    },
    button:{
        flex:1,
        margin:10,
        height:50,
        borderRadius:30,
        alignItems:'center',
        justifyContent:'center',
    },
    buttonText:{
        fontSize:18,
        color:'white',
    },

    row:{
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
    }
});
export default styles;