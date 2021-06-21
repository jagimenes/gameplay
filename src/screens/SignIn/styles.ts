import { StyleSheet } from "react-native";
import { config } from "../../config/params";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: config.colors.background
    },
    content: {
        marginTop: -40,
        paddingHorizontal: 50
    },
    image: {
        width: '100%',
        height: 360
    },
    title: {
        color: config.colors.heading,
        textAlign: "center",
        fontSize: 40,
        marginBottom: 16
    },
    subtitle: {
        color: config.colors.heading,
        fontSize: 15,
        textAlign: "center",
        marginBottom: 64
    }
})