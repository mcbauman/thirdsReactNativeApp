import React, {useState} from "react";
import {Text, View, Button} from 'react-native';

// export default function myFirstComponent(Props:name){
export default function ConnectedComponent(props){
    return (
        <View>
            <Text style={{color:'white'}}>HELLO and Wellcome {props.name}!
            </Text>
            <Text>is Active: {props.isActive?'active':'notActive'}</Text>
            <Button 
                onPress={()=>props.setActive(!props.isActive)}
                title={props.isActive?'deactivate':'activate'}
            />
        </View>
)}


// const MyFirstComponent =()=>{
//     return <Text style={{color:'white'}}>HELLO and Wellcome!</Text>
// }
// export default MyFirstComponent