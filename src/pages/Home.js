import React, {Fragment, useState} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Platform,
    FlatList
} from 'react-native';

import { Button } from '../components/Button';
import { SkillCard } from '../components/SkillCard';


export function Home() {
    // newskill é o estado, e setnewskill é a função att estado
    const [newSkill, setNewSkill] = useState('');
    const [mySkills, setMySkills] = useState([]);

    //handle usado como convensão iteração do usuario
    //atualiza estado newSkill usando setNewSkill
    function handleAddNewSkill() {
        //[...mySkills, newSkill] pega o estado anterior ou usar oldState => [...oldState,newskill]
        setMySkills([...mySkills, newSkill]);
    }

  //O retorno sempre precisa retornar 1 unico elemento
  return (
    // Quase sempre devolver 1 view é possível usar o fragment também ele tbm pode ser usado apenas <>

    //para iphone SafeAreaView view
    <View style={styles.container}>
        <Text style={styles.title}>Welcome, Andre</Text>

        <TextInput 
        style={styles.input}
        placeholder="New Skill"
        placeholderTextColor="#555"
        onChangeText={setNewSkill}/>


        <Button onPress={handleAddNewSkill}/>
       
        

        <Text 
        style={[styles.title, {marginVertical: 50}]}>
            My Skills
        </Text>
        <FlatList 
        data={mySkills}
        keyExtract={item => item}
        renderItem={({item}) => (
            <SkillCard skill={item}/>
        )}
        />  


    </View>      
    
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121015',
        paddingVertical: 70,
        paddingHorizontal: 30
            
    },
    title: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold'
    },
    input: {
        backgroundColor: '#1F1E25',
        color: '#FFF',
        fontSize: 18,
        padding: Platform.os === 'ios' ? 15 : 10,
        marginTop: 30,
        borderRadius: 7
    }
});
