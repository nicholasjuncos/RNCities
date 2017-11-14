import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
    FlatList,
} from 'react-native'
import { ListItem } from 'react-native-elements'

import { connect } from 'react-redux'

import uuidV4 from 'uuid/v4'

const styles = StyleSheet.create({
    title: {
        width: 120,
        height: 32
    },
    container: {
        flex: 1,
    }
})

class Cities extends React.Component {
    static navigationOptions = {
        headerTitle: (
            <Image
                source={require('../../assets/citieslogo.png')}
                style={styles.title}
                resizeMode='contain'
            />
        )
    }
    renderItem = ({ item }) => {
        return (
            <ListItem
                onPress={() => this.props.navigation.navigate('City', { city: item})}
                title={item.name}
                subtitle={item.country}
            />
        )
    }
    render() {
        let cities = Object.values(this.props.cities)
        return (
            <View style={styles.container}>
                <FlatList
                    keyExtractor={() => uuidV4()}
                    data={cities}
                    renderItem={this.renderItem}
                />
            </View>
        )
    }
}

// connect()() has 2 arguments
// 1 - function that gives access to the state
// 2 function that
export default connect(
    (state) => {
        return{
            cities: state.citiesReducer.cities
        }
    }
)(Cities)