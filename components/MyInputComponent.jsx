import React, {useState} from "react";
import { Text, TextInput, View } from "react-native";

export default function MyInputComponent(){
    const [text, setText] = useState('');
    return(
        <View>
            <Text>INPUT</Text>
            <TextInput 
                style={{backgroundColor:'white',padding:'10px',borderRadius:'10px'}}
                placeholder="Type here to translate!"
                defaultValue={text}
                onChangeText={e => setText(e)}
            />
            <Text>{text}</Text>
        </View>
    )
}