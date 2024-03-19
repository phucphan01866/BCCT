import { useEffect, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  Dimensions,
  TouchableOpacity,
  Pressable,
  Switch,
} from "react-native";

import { Audio } from 'expo-av';

const widthWindow = Dimensions.get("window").width;

export default ScreenSetting = ({ navigation }) => {
  const [switch_state, set_switch_state] = useState(true);
  const [sound, setSound] = useState(null);

  useEffect(() => {
    // Play sound when the component mounts
    if (switch_state) {
      playSound();
    }
  }, []);

  async function playSound() {
    try {
      const { sound } = await Audio.Sound.createAsync(
        require('../audio/music.mp3')
      );
      setSound(sound);
      await sound.playAsync();
    } catch (error) {
      console.error("Failed to play sound", error);
    }
  }

  async function stopSound() {
    try {
      if (sound) {
        await sound.stopAsync();
        await sound.unloadAsync();
      }
    } catch (error) {
      console.error("Failed to stop sound", error);
    }
  }

  return (
    <ImageBackground
      style={[styles.container]}
      source={require("../img/screenPlay/bg.png")}
      resizeMode="cover"
    >
      <SafeAreaView>
        {/*Làm header cho setting*/}
        <View style={[styles.header]}>
          <Pressable style={[styles.btnBack, styles.centered]}>
            <TouchableOpacity
              activeOpacity={0.3}
              onPress={() => navigation.goBack()}
            >
              <Image
                style={styles.btnBack}
                resizeMode="cover"
                source={require("../img/screenPlay/arrowLeft.png")}
              ></Image>
            </TouchableOpacity>
          </Pressable>
          <View style={[styles.centered, styles.header_title]}>
            <Text style={[styles.setting_title]}>CÀI ĐẶT</Text>
          </View>
          <View style={[styles.btnBack]}></View>
        </View>

        {/*Nội dung của setting*/}
        <View style={[styles.setting_contents, { marginTop: "5%" }]}>
          <View style={[styles.setting_music_left]}>
            <Text style={[styles.setting_text]}>Âm nhạc</Text>
          </View>

          <Pressable
            style={[styles.setting_music_right]}
            onPress={() => set_switch_state(!switch_state)}
          >
           
            <Switch
              style={{ transform: [{ scaleX: 1.4 }, { scaleY: 1.4 }] }}
              trackColor={{ false: "#767577", true: "rgb(215,215,215)" }}
              thumbColor={
                switch_state ? "rgb(255,255,255)" : "rgb(255,255,255)"
              }
              onValueChange={() => {
                
                if (switch_state === true) {
                  stopSound();
                     
                    } 
                else {
                  playSound();
                }
                  return(
                    set_switch_state(!switch_state)
                  )
               }
              }
              value={switch_state}
            />
          </Pressable>
        </View>

        <TouchableOpacity
          style={[styles.setting_contents]}
          activeOpacity={0.3}
          onPress={() => navigation.navigate("Tutorial")}
        >
          <View style={[styles.setting_music_left]}>
            <Text style={[styles.setting_text]}>Đi đến hướng dẫn</Text>
          </View>
          <View style={[styles.setting_music_right, styles.centered]}>
            <Text
              style={[styles.setting_text, styles.centered, { fontSize: 40}]}
            >
              &#10140;
            </Text>
          </View>
        </TouchableOpacity>
  
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    width: widthWindow,
    height: "100%",
  },
  btnBack: {
    width: 40,
    height: 40,
    marginLeft: "5%",
  },
  header: {
    height: "20%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  header_title: {
    width: "50%",
  },
  setting_title: {
    fontSize: 35,
    fontWeight: "700",
    color: "white",
  },

  setting_contents: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: "18%",
    backgroundColor: "rgba(0,0,0,0.1)",
    marginTop: "5%",
  },
  setting_text: {
    fontSize: 25,
    color: "white",
    fontWeight: "400",
  },
  setting_music_left: {
    marginLeft: "10%",
    justifyContent: "center",
  },
  setting_music_right: {
    width: "30%",
    justifyContent: "center",
    alignItems: "center",
  },
  centered: {
    justifyContent: "center",
    alignItems: "center",
  },
});