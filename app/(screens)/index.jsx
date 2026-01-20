import {
  Button,
  StyleSheet,
  Text,
  View,
  Pressable,
  FlatList,
  Modal,
} from "react-native";
import * as Font from "expo-font";
import { useFonts } from "expo-font"; // good to use directly
import { Link, useRouter } from "expo-router";
import { globalStyles } from "../../styles/global";
import Card from "../../shared/components/Card";
import { useState } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import ReviewForm from "../ReviewForm";

const Index = () => {
  const router = useRouter();
  const [modelOpen, setModelOpen] = useState(false);

  const [fontsLoaded] = useFonts({
    "nunito-regular": require("../../assets/fonts/Nunito-Regular.ttf"),
    "nunito-bold": require("../../assets/fonts/Nunito-Bold.ttf"),
  });

  const [reviews, setReviews] = useState([
    {
      title: "Zelda, Breath of Fresh Air",
      rating: 5,
      body: "lorem ipsum",
      key: "1",
    },
    {
      title: "Gotta Catch Them All (again)",
      rating: 4,
      body: "lorem ipsum",
      key: "2",
    },
    {
      title: 'Not So "Final" Fantasy',
      rating: 3,
      body: "lorem ipsum",
      key: "3",
    },
  ]);

  if (!fontsLoaded) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    ); // Avoid deprecated AppLoading
  }

  const addReview = (review) => {
    review.key = Math.random().toString();
    setReviews((currentReviews) => {
      return [review, ...currentReviews];
    });
    setModelOpen(false);
  };
  return (
    <View style={globalStyles.container}>
      <Modal visible={modelOpen} animationType="slide">
        <View>
          <FontAwesome
            name="close"
            size={20}
            onPress={() => setModelOpen(false)}
            style={globalStyles.moddleToggle}
          />
          <ReviewForm addReview={addReview} />
        </View>
      </Modal>

      <FontAwesome
        name="plus"
        size={20}
        onPress={() => setModelOpen(true)}
        style={globalStyles.moddleToggle}
      />
      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <Pressable
            onPress={() =>
              router.push({
                pathname: "/ReviewDetails",
                params: item,
              })
            }
          >
            <Card>
              <Text style={globalStyles.titleText}>{item.title}</Text>
            </Card>
          </Pressable>
        )}
      />
      <Link href="/ReviewDetails" style={globalStyles.btn}>
        Go to the review
      </Link>
    </View>
  );
};

export default Index;
