import React, {useState} from "react";
import {Text, View, Button} from 'react-native';

// export default function myFirstComponent(Props:name){
export default function myFirstComponent({name}){
    const [isActive, setActive]=useState(false)
    return (
        <>
            <Text
                style={{color:'white'}}
                // >HELLO and Wellcome {Props.name}!
                >HELLO and Wellcome {name}!
            </Text>
            <Text>is Active: {isActive?'active':'notActive'}</Text>
            <Button 
                onPress={()=>setActive(!isActive)}
                title={isActive?'deactivate':'activate'}
            />
        </>
)}


// const MyFirstComponent =()=>{
//     return <Text style={{color:'white'}}>HELLO and Wellcome!</Text>
// }
// export default MyFirstComponent