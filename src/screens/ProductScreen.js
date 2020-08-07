import {Text, View, StyleSheet, Image} from "react-native";
import React from "react";
import SharedElement from "react-navigation-shared-element/build/SharedElement";
import ListItem from "../components/ListItem";
import { useNavigation } from '@react-navigation/native';


const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        textdecoration: 'underline',
    },
    stretch: {
        width: 100,
        height: 100,
        resizeMode: 'stretch',
        margin:15,
    },
    second_title: {
        fontSize: 17,
        color:'#224057',
        fontWeight: 'bold',

    },
});

const ProductScreen = ({route}) => {
    console.log(route.params.item);

    return (<View style={{ flex: 1, justifyContent: 'top', alignItems: 'top', padding:20 }}>
            <Text style={styles.title}>Product:</Text>
            <Text style={styles.second_title}>{route.params.item.product_name_fr}</Text>

            <Image
                style={styles.stretch}
                source={{
                    uri: route.params.item.image_thumb_url,
                }}
            />

            <Text style={styles.title}>Catégories: </Text>
            <Text> {route.params.item.categories}</Text>

            <Text style={styles.title}>Ingredients: </Text>
            <Text> {route.params.item.ingredients_text_debug}</Text>
        </View>
    );
}




export default ProductScreen;