import React, { useEffect, useState } from "react";
import { View, ScrollView, AsyncStorage } from "react-native";
import { useNavigation } from "@react-navigation/native";

import PageHeader from "../../components/PageHeader";
import TeacherItem, { Teacher } from "../../components/TeacherItem";

import styles from "./styles";

const Favorites: React.FC = () => {
  const { isFocused } = useNavigation();
  const [favorites, setFavorites] = useState<Teacher[]>([]);

  useEffect(() => {
    AsyncStorage.getItem("favorites").then((response) => {
      if (response) {
        const favoritedTeachers = JSON.parse(response) as Teacher[];

        setFavorites(favoritedTeachers);
      }
    });
  }, [isFocused]);

  return (
    <View style={styles.container}>
      <PageHeader title="Meus proffys favoritos" />
      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}
      >
        {favorites.map((teacher) => (
          <TeacherItem key={teacher.id} teacher={teacher} favorited={true} />
        ))}
      </ScrollView>
    </View>
  );
};

export default Favorites;
