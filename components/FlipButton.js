import React from 'react';
import {
  View,
  TouchableNativeFeedback,
  Text,
  StyleSheet,
  } from 'react-native'

const FlipButton = (props) => {
  return (
    <View style={styles.flipButtonContainer}>
        <TouchableNativeFeedback onPress={() => props.flip()}>
            <View style={styles.flipButton}>
                <Text style={styles.flipButton__text}>Flip</Text>
            </View>
        </TouchableNativeFeedback>  
    </View>
  )
}

const styles = StyleSheet.create({
    flipButtonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        paddingLeft: '20%',
        paddingRight: '20%',
    },
    flipButton: {
        backgroundColor: 'yellow',  
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        paddingLeft: '20%',
        paddingRight: '20%',
    },
    flipButton__text: {
        textAlign: 'center',
        fontSize: 30,
        margin: 10,
    },
});

export default FlipButton;

