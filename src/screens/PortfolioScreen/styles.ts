import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    root:{
        padding: 10,
        alignItems: 'center',
        flex: 1,
        backgroundColor: 'white',
    },
    image:{
        height: 175,
        aspectRatio: 1,
    },
    label:{
        fontSize: 18,
        fontWeight: 'bold',
        color: '#777777',
    },
    textContainer:{
        width: '100%',
        marginVertical: 20,
    },
    list:{
        width: '100%',
    }
})

export default styles;