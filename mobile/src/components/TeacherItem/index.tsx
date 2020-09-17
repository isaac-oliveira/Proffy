import React, { useState } from "react";
import { View, Image, Text, Linking, AsyncStorage } from "react-native";
import { RectButton } from "react-native-gesture-handler";

import heartOutlineIcon from "../../assets/images/icons/heart-outline.png";
import unFavoriteIcon from "../../assets/images/icons/unfavorite.png";
import whatsappIcon from "../../assets/images/icons/whatsapp.png";

import styles from "./styles";
import api from "../../services/api";

export interface Teacher {
  avatar: string;
  bio: string;
  cost: number;
  id: number;
  name: string;
  subject: string;
  whatsapp: string;
}

interface TeacherItemProps {
  teacher: Teacher;
  favorited: boolean;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher, favorited }) => {
  const [isFavorited, setIsFavorite] = useState(favorited);

  function handleLinkToWhatsapp() {
    api.post("/connections", {
      user_id: teacher.id,
    });
    Linking.openURL(`whatsapp://send?phone=${teacher.whatsapp}`);
  }

  async function handleToggleFavorite() {
    const favorites = await AsyncStorage.getItem("favorites");
    let favoritesArray = [] as Teacher[];
    if (favorites) favoritesArray = JSON.parse(favorites) as Teacher[];
    if (isFavorited) {
      const favoriteIndex = favoritesArray.findIndex(
        (teacherItem: Teacher) => teacherItem.id === teacher.id
      );
      favoritesArray = favoritesArray.splice(favoriteIndex, 1);
      await AsyncStorage.setItem("favorites", JSON.stringify(favoritesArray));
      setIsFavorite(false);
    } else {
      favoritesArray.push(teacher);

      await AsyncStorage.setItem("favorites", JSON.stringify(favoritesArray));
      setIsFavorite(true);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image style={styles.avatar} source={{ uri: teacher.avatar }} />

        <View style={styles.profileInfo}>
          <Text style={styles.name}>{teacher.name}</Text>
          <Text style={styles.subject}>{teacher.subject}</Text>
        </View>
      </View>

      <Text style={styles.bio}>{teacher.bio}</Text>

      <View style={styles.footer}>
        <Text style={styles.price}>Preço/hora {"  "} </Text>
        <Text style={styles.priceValue}>R$ {teacher.cost}</Text>
        <View style={styles.buttonsContainer}>
          <RectButton
            style={[styles.favoriteButton, isFavorited ? styles.favorited : {}]}
            onPress={handleToggleFavorite}
          >
            <Image source={isFavorited ? unFavoriteIcon : heartOutlineIcon} />
          </RectButton>
          <RectButton
            style={styles.contactButton}
            onPress={handleLinkToWhatsapp}
          >
            <Image source={whatsappIcon} />
            <Text style={styles.contactButtonText}>Entrar em contato</Text>
          </RectButton>
        </View>
      </View>
    </View>
  );
};

export default TeacherItem;
