import React from "react";
import { View, 
         Text,
         Image,
         StatusBar
      } from "react-native";


import IllustrationImg from "../../assets/illustration.png"
import { ButtonIcon } from "../../components/ButtonIcon";
import { config } from "../../config/params";
import { styles } from "./styles";

export default function SignIn() {
  return (
    <View style={styles.container}>
      <StatusBar 
        barStyle="light-content"
        backgroundColor="transparent"
        translucent />
      <Image source={IllustrationImg} style={styles.image} resizeMode="stretch"/>

      <View style={styles.content}>
        <Text style={styles.title}>
          {config.text.signIn.title1} {`\n`} 
          {config.text.signIn.title2} {`\n`}
          {config.text.signIn.title3}
        </Text>
        <Text style={styles.subtitle}>
          {config.text.signIn.subTitle1} {`\n`}
          {config.text.signIn.subTitle2}
        </Text>

        <ButtonIcon title={config.text.button.discord} />
      </View>
    </View>
  )
}