import React, { Component } from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    FlatList,
    TouchableOpacity,
    ToastAndroid    
} from 'react-native';
import ItemComponent from '../../services/ItemRead';

import { db } from '../config/db';

let itemsRef = db.ref('/items');

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#B6A6BB',
    }
  })

export default class ListItem extends Component {
    constructor(){
        super()
        this.state = {
            items: []
        }
    }
    

    componentDidMount() {
        itemsRef.on('value', (snapshot) => {
            let data = snapshot.val();
            let items = Object.values(data);
            this.setState({items});
         });
    }
    renderItem = ( {item} ) => {
        return(
            <TouchableOpacity style={{ flex: 1, justifyContent: 'center', flexDirection: 'column' }}
                onPress={() => ToastAndroid.show(item.login, ToastAndroid.SHORTecg)}>
                <View style={{ flex: 1, justifyContent: 'center', flexDirection: 'row' }}>
                    <Text style={{ fontSize: 18, color: 'blue', marginBottom: 10 }} >
                        {item.login}
                    </Text>
                </View>
                <View style={{ flex: 1, justifyContent: 'center', flexDirection: 'row' }}>
                    <Text style={{ fontSize: 18, color: 'yellow', marginBottom: 10 }} >
                        {item.password}
                    </Text>                
                </View>
                
            </TouchableOpacity>            
        )
    }

    renderSeparator = () => {
        return(
            <View
                style={{height: 1, width: '100%', backgroundColor: 'black'}}>

            </View>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.items}
                    renderItem={this.renderItem}
                    keyExtractor={(items, index) => index}
                    ItemSeparatorComponent={this.renderSeparator}
                />
                {/* {
                    this.state.items.length > 0
                    ? <ItemComponent items={this.state.items} />
                    : <Text>No items</Text>
                } */}
            </View>
        )
    }
}