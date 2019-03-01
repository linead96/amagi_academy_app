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
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '30%',
    },
    flipButton: {
        backgroundColor: 'yellow',  
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        marginBottom: '5%',
    },
    flipButton__text: {
        textAlign: 'center',
        fontSize: 30,
        margin: 10,
    },
});

export default FlipButton;