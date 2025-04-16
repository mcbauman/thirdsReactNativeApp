import React from "react";
import {FlatList, StyleSheet, Text, View} from 'react-native'

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingTop:22
    },
    item:{
        backgroundColor:'rgb(0,0,0)',
        borderWidth: 4, borderColor: 'red', borderRadius: 20,
        flex:1,
        flexDirection:'row',
        padding:10,
        fontSize:18,
        height:44,
        margin:10
    },
    text:{
        color:'rgb(255,255,255)',
        margin:10
    }
})

export default function MyFlatList(){
    const data=[
        {key: 'Devin',
            position:"leader"
        },
        {key: 'Dan',
            position:"beginner"
        },
        {key: 'Dominic',
            position:"professional"
        },
        {key: 'Jackson',
            position:"trainee"
        },
        {key: 'James',
            position:"beginner"
        },
        {key: 'Joel',
            position:"beginner"
        },
        {key: 'John',
            position:"trainee"
        },
        {key: 'Jillian',
            position:"beginner"
        },
        {key: 'Jimmy',
            position:"trainee"
        },
        {key: 'Julie',
            position:"beginner"
        },
      ]
    return(
        <FlatList
        data={data}
        renderItem={({item}) => (
            <View style={styles.item}>
                <Text style={styles.text}>{item.key}</Text>
                <Text style={styles.text}>{item.position}</Text>
            </View>
    )}
      />
    )
}