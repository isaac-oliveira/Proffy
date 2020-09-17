import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#8257e5",
    justifyContent: "center",
    padding: 40,
  },

  content: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    fontFamily: "Archivo_700Bold",
    color: "#fff",
    fontSize: 25,
    lineHeight: 30,
    maxWidth: 190,
  },
  description: {
    marginTop: 24,
    color: "#d4c2ff",
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "Poppins_400Regular",
    maxWidth: 270,
  },

  okButton: {
    marginVertical: 20,
    backgroundColor: "#04d361",
    height: 56,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
  okButtonText: {
    fontFamily: "Archivo_700Bold",
    color: "#fff",
  },
});

export default styles;
