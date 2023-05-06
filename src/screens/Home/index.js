import { Text, TextInput, TouchableOpacity, View } from "react-native";
import {Ionicons} from '@expo/vector-icons'


import { style } from "./style";

export function Home(){

return(
    <View style={style.container}>
        <Text style={style.title}>
            ToDo List
        </Text>
        <Text style={style.nameEvent}>
            Jornada de Atualização em Tecnologia da Informação.
        </Text>

        <View style={style.form}>
        <TextInput style={style.input}/>

        <TouchableOpacity style={style.button}>
            <Text style={style.textButton}>
            <Ionicons name="add-circle-outline" size={28} color="#fff" />
            </Text>
        </TouchableOpacity>

        </View>
    </View>
)

}