import { StyleSheet } from "react-native";

const form = StyleSheet.create({
    formContext: {
        width: "100%",
        height: "100%",
        bottom: 0,
        backgroundColor: "#ffffff",
        alignItems: "center",
        marginTop: 30,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    form: {
        width: "100%",
        height: "auto",
        marginTop: 30,
        padding: 10,
    },
    formLabel: {
        color: "#000000",
        fontSize: 18,
        paddingLeft: 20,
    },
    input: {
        width: "90%",
        borderRadius: 50,
        backgroundColor: "#f6f6f6",
        height: 40,
        margin: 12,
        paddingLeft: 10,
    },
    buttonCalculator: {
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        width: "90%",
        backgroundColor: "#FF0043",
        paddingTop: 14,
        paddingBottom: 14,
        marginLeft: 12,
        marginRight: 12,
        marginTop: 30,
        marginBottom: 20,
    },
    textButtonCalculator: {
        fontSize: 20,
        color: "#ffffff",
    },
    errorMessage: {
        fontSize: 12,
        color: "red",
        fontWeight: "bold",
        paddingLeft: 20,
    },
    exhibitionResultImc: {
        width: "100%",
        height: "auto",
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 30,
        marginBottom: 30,
    },
    listImcs: {
        marginTop: 20,
        paddingLeft: 10,
        paddingRight: 10,
    },
    resultImcItem: {
        fontSize: 23,
        color: "red",
        height: 50,
        width: "100%",
        paddingRight: 20,
        paddingLeft: 20,
        paddingTop: 10,
        marginTop: 10,
        borderRadius: 50,
        backgroundColor: "#f6f6f6",
        textAlign: "center",
    },
    textResultItemList: {
        fontSize: 18,
        color: "#000000",
    },
    textResultImcItem: {
        fontSize: 18,
        color: "#000000",
        marginTop: 20,
        marginBottom: 10,
        textAlign: "center",
        fontWeight: "bold",
    },

});

export default form;