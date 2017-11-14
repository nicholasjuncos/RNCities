import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
    TextInput
} from 'react-native'
import { Button } from 'react-native-elements'
import { colors } from '@theme'
import { CitiesLogo} from '@assets/images'
import CitiesStore from '../../store/CitiesStore'

const initialState = {
    city: {
        name: '',
        country: ''
    }
}

class AddCity extends React.Component {
    state = initialState
    updateCity = (key, value) => {
        this.setState(state => ({
            city: {
                ...state.city,
                [key]: value
            }
        }))
    }
    addCity = () => {
        CitiesStore.addCity(this.state.city)
        this.setState(initialState)
        this.props.navigation.navigate('Cities')
    }
    render() {
        return (
            <View style={styles.container}>
                <Image
                    source={CitiesLogo}
                    style={styles.logo}
                    resizeMode='contain'
                />
                <TextInput
                    value={this.state.city.name}
                    placeholder={'City name'}
                    onChangeText={value => this.updateCity('name', value)}
                    style={styles.input}
                />
                <TextInput
                    value={this.state.city.country}
                    placeholder={'Country name'}
                    onChangeText={value => this.updateCity('country', value)}
                    style={styles.input}
                />
                <Button
                    onPress={this.addCity}
                    title='Add City'
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    input: {
        height: 50,
        backgroundColor: '#fff',
        marginBottom: 10,
        marginHorizontal: 15,
        paddingHorizontal: 8,
    },
    logo: {
        width: '100%',
        height: 55,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: colors.primary,
    }
})

export default AddCity