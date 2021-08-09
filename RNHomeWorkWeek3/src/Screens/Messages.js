import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Metrics from '../constant/Metrics'
import { Svgs } from '../StylingConstants';
import Icon from '../Utils/Icon';
import Modal from 'react-native-modal';
import MessageBox from './MessageBox';

const Messages = props => {
    const [isVisible, setVisible] = useState(false)
    const _visibility = val=> {
        setVisible(val)
    }
    return (

        <View style={styles.container}>
            <Text>dneme</Text>
            <View style={styles.iconContainer}>
                <TouchableOpacity style={styles.circle}
                    onPress={() =>_visibility(true)}>
                    <Icon svg={Svgs.NewMessage} iconStyle={{ color: 'white' }}></Icon>
                </TouchableOpacity>
            </View>
            <Modal
                animationType="slide"
                visible={isVisible}
                backdropOpacity={0.5}
                onBackdropPress={()=>_visibility(false)}
                style={{
                    justifyContent: "flex-end",
                    margin: 0
                }}
            >
                <MessageBox
                visibility={(val)=>_visibility(val)}
                />
            </Modal>
        </View>
    );
};

export default Messages;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
    },
    iconContainer: {
        flex: 0.15,
        justifyContent: 'flex-end',
        alignItems: 'center',
        flexDirection: 'row'
    },
    circle: {
        height: Metrics.width * 0.15,
        width: Metrics.width * 0.15,
        borderRadius: 100,
        backgroundColor: '#1DA1F2',
        marginRight: Metrics.width * 0.02,
        padding: Metrics.width * 0.03,
        paddingBottom: 0
    }
});
