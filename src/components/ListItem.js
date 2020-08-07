import {Image, StatusBar, StyleSheet, Text, View, TouchableOpacity, Animated} from "react-native";
import React, { useRef, useEffect } from "react";
import SharedElement from "react-navigation-shared-element/build/SharedElement";
import { Card } from 'react-native-elements';

const FadeInView = (props) => {
    const fadeAnim = useRef(new Animated.Value(0)).current  // Initial value for opacity: 0

    React.useEffect(() => {
        Animated.timing(
            fadeAnim,
            {
                toValue: 1,
                duration: 2000,
            }
        ).start();
    }, [fadeAnim])

    return (
        <Animated.View                 // Special animatable View
            style={{
                ...props.style,
                opacity: fadeAnim,         // Bind opacity to animated value
            }}
        >
            {props.children}
        </Animated.View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginTop: StatusBar.currentHeight || 0,

    },
    item: {


    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        padding: 10,
    },
    second: {
        fontSize: 15,
        color:'#224057',
        fontWeight: 'bold',
        fontStyle: 'italic',
        padding: 10,
    },
    stretch: {
        width: 100,
        height: 100,
        resizeMode: 'stretch',
        float: 'left',

    },
    Card: {
        flex: 0.3,
        borderWidth: 5,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    third: {
        verticalAlign: 'top',
        fontSize: 13,
        color:'#224057',
        padding: 10,
    },
    info: {
        padding:20,
    }
});

export default class ListItem extends React.Component
{

    goTo(item){
        this.props.navigation.navigate('Product',
            {
                item: item
            })
    }

    render() {
        return (
            <View style={styles.item}>
                <TouchableOpacity onPress={() => this.goTo(this.props.item)}>

                    <Card style={styles.Card}>
                        <FadeInView>
<div>
                    <Image
                        style={styles.stretch}
                        source={{
                            uri: this.props.item.image_thumb_url,
                        }}

                    />
                    <div style={{ width:'auto',display: 'inline-grid'}}>
    <Text style={styles.title}>{this.props.item.product_name_fr}</Text>

    <Text style={styles.second}>{this.props.item.brands_tags}</Text>
    <Text style={styles.third}>{this.props.item.entry_dates_tags}</Text>
                    </div>
</div>
                        </FadeInView>
                    </Card>

                    
                </TouchableOpacity>
            </View>
        )
    }

}

