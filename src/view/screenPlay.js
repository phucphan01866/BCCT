
import React, { useState, useEffect } from 'react';
import { StyleSheet, StatusBar, ImageBackground, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import LacComponent from './components/lacbaucua';

const widthWindow = Dimensions.get('window').width;
const heightWindow = Dimensions.get('window').height;


const ScreenPlay = ({ navigation }) => {
  const handleLeftArrowPress = () => {
    navigation.navigate('ScreenHome');
  };

  const handleSettingPress = () => {
    navigation.navigate('Setting')
  };
  const [convat, setconvat] = useState([0,]);


  return (
    <ImageBackground style={styles.container} source={require('../img/screenPlay/bg.png')} resizeMode='cover'>
      <StatusBar barStyle='default' />

      {/* two btn arrow left and setting */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleLeftArrowPress}>
          <Image source={require('../img/screenPlay/arrowLeft.png')} style={styles.button1}  />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSettingPress}>
          <Image source={require('../img/screenPlay/setting.png')} style={styles.button2}  />
        </TouchableOpacity>
      </View>

      {/* dish component */}
      <View style={{width: '100%', height: '50%', marginTop: 60}}>
      <LacComponent onGenerate={setconvat} />
      </View>

      {/* last component */}
      <View style={{flex:1,justifyContent: 'center', alignItems: 'center'}}>
          <View style={{flexDirection: 'row', marginHorizontal: 40, justifyContent: 'space-between'}}>
            <Image resizeMode='contain' 
                  source={require('./components/img/nai1.png')}
                  style={[styles.imgTableBauCau, { opacity: convat.includes(5) ? 1 : 0.7 }]}
            />

            <Image resizeMode='contain' 
                  source={require('./components/img/bau1.png')}
                  style={[styles.imgTableBauCau, { opacity: convat.includes(4) ? 1 : 0.7 }]}
            />

            <Image resizeMode='contain' 
                  source={require('./components/img/ga1.png')}
                  style={[styles.imgTableBauCau, { opacity: convat.includes(3) ? 1 : 0.7 }]}
            />
          </View>

          <View style={{flexDirection: 'row', marginHorizontal: 40, justifyContent: 'space-between'}}>
            <Image resizeMode='contain' 
                  source={require('./components/img/ca1.png')}
                  style={[styles.imgTableBauCau, { opacity: convat.includes(2) ? 1 : 0.7 }]}

            />

            <Image resizeMode='contain' 
                  source={require('./components/img/cua1.png')}
                  style={[styles.imgTableBauCau, { opacity: convat.includes(0) ? 1 : 0.7 }]}
            />

            <Image resizeMode='contain' 
                  source={require('./components/img/tom1.png')}
                  style={[styles.imgTableBauCau, { opacity: convat.includes(1) ? 1 : 0.7 }]}
            />
          </View>
      </View>
     
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: widthWindow,
    },
    header:{
      flexDirection: 'row', 
      justifyContent:  'space-between',

      alignItems: 'center',
      width: '100%',
      height: '10%'
    },
    button2: {
      marginRight: 10,
      height: 40, // Đặt chiều cao của nút
      width: 40, // Đặt chiều rộng của nút
    },

    button1: {
      marginLeft: 10,
      height: 40, // Đặt chiều cao của nút
      width: 40, // Đặt chiều rộng của nút
    },

    imgTableBauCau: {
      width: 100,
      height: 100
    }
  });
  

export default ScreenPlay;
