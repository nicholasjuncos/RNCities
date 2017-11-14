import React from 'react'
import {
    Text,
    StyleSheet,
    View,
} from 'react-native'

import { Icon } from 'react-native-elements'
import { colors } from '@theme'

class City extends React.Component {
    static navigationOptions(props) {
        const { name } = props.navigation.state.params
        return {
            title: name
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <Icon
                    underlayColor={colors.primary}
                    raised
                    icon
                    name='add'
                    color='white'
                    containerStyle={styles.icon}
                />
                <Text>Hello from City</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    icon: {
        backgroundColor: colors.primary,
        position: 'absolute',
        right: 10,
        bottom: 10,
    }
})

export default City
