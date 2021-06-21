import { StyleSheet } from "react-native";
import { config } from "../../config/params";


export const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 56,
        backgroundColor: config.colors.primary,
        borderRadius: 8,
        flexDirection: "row",
        alignItems: "center"
    },
    iconWrapper: {
        width: 56,
        height: 56,
        justifyContent: "center",
        alignItems: "center",
        borderRightWidth: 1,
        borderColor: config.colors.line
    },
    icon: {
        width: 24,
        height: 18,
    },
    title: {
        flex: 1,
        color: config.colors.heading,
        fontSize: 15,
        textAlign: "center"
    }
});