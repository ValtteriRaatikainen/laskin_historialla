import React from 'react';
import { FlatList, Text, View, StyleSheet } from 'react-native';

const History = ({ route }) => {
    const { historyData } = route.params;
    return (


        <FlatList
            data={historyData}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
                <View style={styles.historyItem}>
                    <Text>{item.operation} = {item.result}</Text>
                </View>
            )}
        />
    );
}
const styles = StyleSheet.create({
    historyItem: {
        backgroundColor: '#eee',
        flex: 1,
        padding: 10,
        marginVertical: 5,
        width: "auto",
        alignItems: 'center',
        justifyContent: 'center',
    },
});
export default History;
