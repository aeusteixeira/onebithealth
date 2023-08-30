import React, { useState } from "react";
import {
    Text,
    TextInput,
    View,
    TouchableOpacity,
    Vibration,
    Keyboard,
    Pressable,
    FlatList,
    } from "react-native";
import ResultImc from "./ResultImc";
import styles from "./styles";

export default function Form() {

    // Height é altura
    const [height, setHeight] = useState(null);
    // Weight é peso
    const [weight, setWeight] = useState(null);

    const [messageResultImc, setMessageResultImc] = useState("Preencha o peso e altura");
    const [imc, setImc] = useState(null);
    const [textButton, setTextButton] = useState("Calcular");
    const [errorMessage, setErrorMessage] = useState(null);
    const [imcList, setImcList] = useState([]);

    function imcCalculator() {
        let heightFormat = height.replace(",", ".");
        let totalImc = (weight / (heightFormat * heightFormat)).toFixed(2);
        setImcList((arr) => [...arr, { id: new Date().getTime(), imc: totalImc }]);
        return setImc(totalImc);
    }

    function verificationImc() {
        if(imc == null) {
            setErrorMessage("Campo obrigatório*");
            Vibration.vibrate();
        }
    }
    
    function validationImc() {
        if(weight != null && height != null) {
            imcCalculator();
            setHeight(null);
            setWeight(null);
            setMessageResultImc("Seu IMC é igual:");
            setTextButton("Calcular novamente");
            setErrorMessage(null);
            Keyboard.dismiss();
        }else{
            setImc(null);
            setTextButton("Calcular");
            setMessageResultImc("Preencha o peso e altura");
            verificationImc();
        }
    }

    return (
            <View style={styles.formContext}>
                {imc == null ? (
                <Pressable style={styles.form} onPress={Keyboard.dismiss}>
                <Text style={styles.formLabel}>Altura</Text>
                <Text style={styles.errorMessage}>{errorMessage}</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Ex: 1.75 (m)"
                    keyboardType="numeric"
                    onChangeText={setHeight}
                    value={height}
                />
                <Text style={styles.formLabel}>Peso</Text>
                <Text style={styles.errorMessage}>{errorMessage}</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Ex: 68.5 (kg)"
                    keyboardType="numeric"
                    onChangeText={setWeight}
                    value={weight}
                />
                <TouchableOpacity style={styles.buttonCalculator} onPress={() => { validationImc();}}>
                    <Text style={styles.textButtonCalculator}>{textButton}</Text>
                </TouchableOpacity>

            </Pressable>
                ) : (
                    <View style={styles.exhibitionResultImc}>
                        <TouchableOpacity style={styles.buttonCalculator} onPress={() => { validationImc();}}>
                            <Text style={styles.textButtonCalculator}>{textButton}</Text>
                        </TouchableOpacity>
                        <ResultImc ResultImc={imc} messageResultImc={messageResultImc}/>
                        <Text style={styles.textResultImcItem}>Histórico de cálculos:</Text>
                        <FlatList
                            style={styles.listImcs}
                            data={imcList.reverse()}
                            renderItem={({ item }) => {
                                return (
                                    <Text style={styles.resultImcItem}>
                                        <Text style={styles.textResultItemList}>Resultado IMC = </Text>
                                        {item.imc}
                                    </Text>
                                );
                            }}
                            keyExtractor={(item) => {
                                item.id;
                            }}
                        />
                    </View>
                )}
            </View>
    );
}
