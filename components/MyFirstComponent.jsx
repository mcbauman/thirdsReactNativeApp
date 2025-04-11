import React, {useState} from "react";
import {Text, View, Button} from 'react-native';

// export default function myFirstComponent(Props:name){
export default function myFirstComponent({name}){
    const [isActive, setActive]=useState(false)
    return (
        <View>
            <Text style={{color:'white'}}>HELLO and Wellcome {name}!
            </Text>
            <Text>is Active: {isActive?'active':'notActive'}</Text>
            <Button 
                color={isActive?"red":"green"}
                onPress={()=>setActive(!isActive)}
                title={isActive?'deactivate':'activate'}
            />
        </View>
)}


// const MyFirstComponent =()=>{
//     return <Text style={{color:'white'}}>HELLO and Wellcome!</Text>
// }
// export default MyFirstComponent