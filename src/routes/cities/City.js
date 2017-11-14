import React from 'react'
import {
    Text,
    StyleSheet,
    View,
    Modal,
    TextInput
} from 'react-native'

import { Icon, Button } from 'react-native-elements'
import { colors } from '@theme'

class City extends React.Component {
    static navigationOptions(props) {
        const { name } = props.navigation.state.params
        return {
            title: name
        }
    }
    state = {
        isModalOpen: false,
        location: {
            name:'',
            address: ''
        }
    }
    toggleModal = () => {
        this.setState(state => ({
            isModalOpen: !state.isModalOpen
        }))
    }
    updateInput = (key, value) => {
        this.setState(state => ({
            location: {
                ...state.location,
                [key]: value
            }
        }))
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
                    onPress={this.toggleModal}
                />
                <Modal
                    visible={this.state.isModalOpen}
                    animationType='slide'
                >
                    <View style={styles.modal}>
                        <Text style={styles.title}>Add Location</Text>
                        <TextInput
                            onChangeText={value => this.updateInput('address', value)}
                            placeholder='Location Name'
                            style={styles.input}
                        />
                        <TextInput
                            onChangeText={value => this.updateInput('address', value)}
                            placeholder='Location Address'
                            style={styles.input}
                        />
                        <Button
                            title={'Submit'}
                        />
                        <Icon
                            underlayColor={colors.primary}
                            raised
                            icon
                            name='close'
                            color='white'
                            containerStyle={styles.icon}
                            onPress={this.toggleModal}
                        />
                    </View>
                </Modal>
                <Text>Hello from City</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    title: {
        marginTop: 80,
        marginVertical: 15,
        marginLeft: 15,
        fontSize: 20
    },
    input: {
        height: 50,
        marginHorizontal: 15,
        marginBottom: 10,
        backgroundColor: '#ddd'
    },
    modal: {
        flex: 1,
        backgroundColor: 'white'
    },
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
