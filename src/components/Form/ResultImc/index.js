import React from "react";
import { Share, Text, View, TouchableOpacity } from "react-native";
import styles from "./styles";

export default function ResultImc(props) {

    const onShare = async () => {
        const result = await Share.share({
            message: `
                Fiz um teste de IMC e meu resultado foi ${props.ResultImc}! 🏋🏼‍♀️
            `
        });
    };

    return (
        <View style={styles.contextImc}>
            <Text style={styles.information}>
                {props.messageResultImc}
            </Text>
            <Text style={styles.numberImc}>{props.ResultImc}</Text>
            <View style={styles.boxShareButton}>
                <TouchableOpacity style={styles.shared} onPress={onShare}>
                    <Text style={styles.sharedText}>Compartilhar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
