import React, { useState, useRef,useEffect } from 'react';
import { Button, Image, View, StyleSheet, ImageBackground, Dimensions, Animated,TouchableOpacity } from 'react-native';

const widthWindow = Dimensions.get('window').width;
const heightWindow = Dimensions.get('window').height;

const animalImages = [
  require('./img/cua.png'),
  require('./img/tom.png'),
  require('./img/ca.png'),
  require('./img/ga.png'),
  require('./img/bau.png'),
  require('./img/nai.png'),
];
const LacComponent = ({ onGenerate }) => {
  const [animals, setAnimals] = useState([
    require('./img/cua.png'),
    require('./img/cua.png'),
    require('./img/cua.png'),
  ]);

  const lidTop = useRef(new Animated.Value(1)).current;
  const shakeAnimation = useRef(new Animated.Value(0)).current; // Thêm dòng này

  const [lidOpen, setLidOpen] = useState(true);

  const [handlingEvent, setHandlingEvent] = useState(false);
  const [randomIndexes, setRandomIndexes] = useState([]);
  const handlePress = () => {
    if (handlingEvent) {
      return; // Nếu đang xử lý sự kiện, không thực hiện gì cả 
      //Có nghĩa là đang xử lý mở nắp hay úp nắp thì bấm nó không nhận bởi vì flag=true
    }
  
    setHandlingEvent(true); // Đánh dấu rằng đang xử lý sự kiện
  
    if (lidOpen) { 
      Animated.timing(lidTop, {
        toValue: 0,
        duration: 500,
        useNativeDriver: false,
      }).start(() => {
        const newRandomIndexes = Array.from({ length: 3 }, () => Math.floor(Math.random() * animalImages.length));
        const randomAnimals = newRandomIndexes.map(index => animalImages[index]);

        setAnimals(randomAnimals);
        setRandomIndexes(newRandomIndexes);
        startShake();
        setLidOpen(!lidOpen);
        setTimeout(() => {
          setHandlingEvent(false); // Đặt lại cờ sau 0.5 giây
        }, 500);
      });
    } else {
      handleOpenLid();
      onGenerate(randomIndexes)
      setTimeout(() => {
        setHandlingEvent(false); // Đặt lại cờ sau 0.5 giây
      }, 400);
      
    }
  };
  

  const handleOpenLid = () => {
    Animated.timing(lidTop, {
      toValue: 1,
      duration: 500,
      useNativeDriver: false,
    }).start();
    setLidOpen(!lidOpen);
  };


  const startShake = () => {
    Animated.sequence([
      Animated.timing(shakeAnimation, { toValue: 10, duration: 100, useNativeDriver: true }),
      Animated.timing(shakeAnimation, { toValue: -10, duration: 100, useNativeDriver: true }),
      Animated.timing(shakeAnimation, { toValue: 10, duration: 100, useNativeDriver: true }),
      Animated.timing(shakeAnimation, { toValue: 0, duration: 100, useNativeDriver: true })
    ]).start();
  }

  
  return (
    <View style={styles.container}>

      <Animated.View style={[styles.container2, { transform: [{ translateX: shakeAnimation }] }]}>
        <ImageBackground source={require('./img/dia.png')} style={styles.imageBackground} resizeMode='contain'>
          {animals.map((animal, index) => (
            <Image key={index} source={animal} style={[styles.image, styles[`image${index}`]]} />
          ))}
          <Animated.Image resizeMode='contain' source={require('./img/nap1.png')} style={[styles.lidImage, { top: lidTop.interpolate({ inputRange: [0, 1], outputRange: [0, -500] }) }]} />
        </ImageBackground>
      </Animated.View>

      <TouchableOpacity onPress={handlePress}>
       <Image source={lidOpen ? require("./img/Lac.png"): require("./img/mo.png")} style={styles.button}  resizeMode="contain"> 
      </Image>
      </TouchableOpacity>


    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  container2: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    width: 120,
    height: 120,
  },
  image0: {
    position: 'absolute',
    top: '15%',
    left: 53,
  },
  image1: {
    position: 'absolute',
    top: '15%',
    right: 50,
  },
  image2: {
    position: 'absolute',
    bottom: '10%',
    left: 160,
  },
  lidImage: {
    width: widthWindow,
    height: 360,
  },
  imageBackground: {
    width: widthWindow,
    height: 240,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button:{
    marginTop: 80,
    width:120,
  },
});

export default LacComponent;
