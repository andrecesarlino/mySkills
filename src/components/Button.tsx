import React from 'react';
import {
    TouchableOpacity,
    TouchableOpacityProps,
    Text,
    StyleSheet
} from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
    title: string;
}

export function Button({title, ...rest } : ButtonProps) {
    return (
    <TouchableOpacity 
    style={styles.button}    
    activeOpacity={0.7}
    {...rest}
    >
        <Text style={styles.textButton}>{title}</Text>
    </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#A370F7',
        padding: 15,
        borderRadius: 7,
        // para web display: 'flex',
        alignItems: 'center',
        marginTop: 20
    },
    textButton: {
        color: '#FFF',
        fontSize: 17,
        fontWeight: 'bold'
    },
})