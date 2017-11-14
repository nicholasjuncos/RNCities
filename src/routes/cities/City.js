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
import { addLocation } from '../../actions/citiesActions'
import { connect } from 'react-redux'

class City extends React.Component {
    static navigationOptions(props) {
        const { name } = props.navigation.state.params.city
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
    addLocation = () => {
        const { city } = this.props.navigation.state.params
        const { location } = this.state
        this.props.dispatchAddLocation(city, location)
        this.setState({location: {name: '', address: ''} })
        this.toggleModal()
    }
    render() {
        console.log('city: ', this.props.navigation.state.params.city)
        return (
            <View style={styles.container}>
                {
                    this.props.city.locations.map((location, index) => (
                        <View style={styles.card} key={index}>
                            <Text Style={styles.info}>{location.name}</Text>
                            <Text Style={styles.info}>{location.address}</Text>
                        </View>
                    ))
                }
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
                            onChangeText={value => this.updateInput('name', value)}
                            placeholder='Location Name'
                            style={styles.input}
                        />
                        <TextInput
                            onChangeText={value => this.updateInput('address', value)}
                            placeholder='Location Address'
                            style={styles.input}
                        />
                        <Button
                            onPress={this.addLocation}
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
            </View>
        )
    }
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        margin: 10,
        padding: 15
    },
    info: {
        marginTop: 10,
        fontWeight: '500'
    },
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

const mapStateToProps = (state, props) => {
    const id = props.navigation.state.params.city.id
    return {
        city: state.citiesReducer.cities[id]
    }
}

const mapDispatchToProps = {
    dispatchAddLocation: (city, location) => addLocation(city, location)
}

export default connect(mapStateToProps, mapDispatchToProps)(City)
