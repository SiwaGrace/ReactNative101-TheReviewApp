import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    // flex: 1,
    padding: 20,
  },
  text: {
    color: "blue",
    fontFamily: "nunito-bold",
    fontSize: 18,
  },
  paragraph: {
    marginVertical: 8,
    lineHeight: 20,
  },
  btn: {
    marginVertical: 10,
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
    // alignItems: "center",
    color: "white",
    fontFamily: "nunito-bold",
    fontSize: 18,
    textAlign: "center",
  },
  moddleToggle: {
    marginVertical: 10,
    padding: 10,
    fontFamily: "nunito-bold",
    fontSize: 18,
    textAlign: "center",
    cursor: "pointer",
  },
  input: {
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  errorText: {
    color: "crimson",
    marginBottom: 10,
    marginTop: 10,
    textAlign: "center",
    fontSize: 12,
    fontFamily: "nunito-bold",
  },
});

export const images = {
  ratings: {
    1: require("../assets/rating-1.png"),
    2: require("../assets/rating-2.png"),
    3: require("../assets/rating-3.png"),
    4: require("../assets/rating-4.png"),
    5: require("../assets/rating-5.png"),
  },
};
