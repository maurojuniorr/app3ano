import { View, Text, Image, TextInput, } from "react-native";
import styles from './estilo'

import React, { useState } from 'react';



export default function Login(){
    const [password, setPassword] = useState(''); //variaveis de estado podem mudar em tempo de execução
    const [email, setEmail] = useState('')
    
    return(
        <View style={styles.container}>
            <View style = {styles.logoContainer}>
                <Image style = {styles.img} 
                    source={require('../images/achei.png')} />
            </View>
            <View style={styles.inputContainer}>
            <Text>Nossa variavel de estado >> {email}</Text>
                <TextInput 
                    placeholder="Digite seu email"
                    style={styles.input}
				    value={email} //Valor da variavel
					onChangeText={setEmail}
                />
                <Text>Nossa variavel de estado >> {password}</Text>

                <TextInput 
                    placeholder="Digite sua senha"
                    style={styles.input}
				    value={password} //Valor da variavel
					onChangeText={setPassword}
                    secureTextEntry={true}                    
                />
              

                
            </View>
            <View style={styles.signupContainer}>
                <Text> Não tem login? Faça seu cadastro! Clique Aqui</Text>
            </View>
            
        </View>
    );
}