import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#8257e5",
    justifyContent: "center",
    padding: 40,
  },
  banner: {
    width: "100%",
    resizeMode: "contain",
  },

  title: {
    fontFamily: "Poppins_400Regular",
    color: "#fff",
    fontSize: 20,
    lineHeight: 30,
    marginTop: 50,
  },
  titleBold: {
    fontFamily: "Poppins_600SemiBold",
  },
  buttonsContainer: {
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "space-between",
  },

  button: {
    height: 150,
    width: "48%",
    backgroundColor: "#333",
    borderRadius: 8,
    padding: 24,
    justifyContent: "space-between",
  },
  buttonPrimary: {
    backgroundColor: "#9871f5",
  },
  buttonSecondary: {
    backgroundColor: "#04d361",
  },

  buttonText: {
    fontFamily: "Archivo_700Bold",
    fontSize: 14,
    color: "#fff",
  },

  totalConnections: {
    fontFamily: "Poppins_400Regular",
    fontSize: 12,
    color: "#d4c2ff",
    lineHeight: 20,
    maxWidth: 240,
    marginTop: 25,
  },
});

export default styles;
