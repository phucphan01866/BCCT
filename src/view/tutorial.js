import { StyleSheet, View, Image, ScrollView, Animated } from 'react-native';
import React, { useRef } from 'react';
import {TouchableOpacity } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native';

export default function Instruct({navigation}) {

  const scaleValue = useRef(new Animated.Value(1)).current;
  const scaleValue1 = useRef(new Animated.Value(1)).current;
  const scaleValue2 = useRef(new Animated.Value(1)).current;
  const scaleValue3 = useRef(new Animated.Value(1)).current;
  const scaleValue4 = useRef(new Animated.Value(1)).current;


  const zoomIn = () => {
    Animated.timing(scaleValue, {
      toValue: 1.3,
      duration: 100, 
      useNativeDriver: true, 
    }).start();
  };

  
  const zoomIn1 = () => {
    Animated.timing(scaleValue1, {
      toValue: 1.1, 
      duration: 100, 
      useNativeDriver: true, 
    }).start();
  };


  const zoomOut1 = () => {
    Animated.timing(scaleValue1, {
      toValue: 1, 
      duration: 100, 
      useNativeDriver: true, 
    }).start();
  };

  const zoomIn2 = () => {
    Animated.timing(scaleValue2, {
      toValue: 1.1, 
      duration: 100, 
      useNativeDriver: true, 
    }).start();
  };


  const zoomOut2 = () => {
    Animated.timing(scaleValue2, {
      toValue: 1, 
      duration: 100, 
      useNativeDriver: true,
    }).start();
  };

  const zoomIn3 = () => {
    Animated.timing(scaleValue3, {
      toValue: 1.1, 
      duration: 100, 
      useNativeDriver: true,
    }).start();
  };


  const zoomOut3 = () => {
    Animated.timing(scaleValue3, {
      toValue: 1, 
      duration: 100, 
      useNativeDriver: true, 
    }).start();
  };

  const zoomIn4 = () => {
    Animated.timing(scaleValue4, {
      toValue: 1.1, 
      duration: 100, 
      useNativeDriver: true, 
    }).start();
  };

  const zoomOut4 = () => {
    Animated.timing(scaleValue4, {
      toValue: 1, 
      duration: 100, 
      useNativeDriver: true, 
    }).start();
  };
  const handleExit = () => navigation.pop(1);
  
  return (
    <ScrollView>
      <View style={styles.container}>
      <TouchableOpacity onPress={handleExit} style={{flex: 1,justifyContent: 'flex-end', width: '105%'}}>
        <Image
          source={require('../img/tutorial/arrowLeft.png')} 
          style={styles.thoat}
        />
      </TouchableOpacity>
        <TouchableWithoutFeedback
          onPressIn={zoomIn}
        >
          <Animated.Text
            style={[
              styles.header,
              {
                transform: [{ scale: scaleValue }], 
              },
            ]}
          >
            HƯỚNG DẪN CÁCH CHƠI
          </Animated.Text>
        </TouchableWithoutFeedback>
        
        <Image style={styles.logo} source={require('../img/tutorial/logo.png')} />
     
     <View  style={styles.cover1} >
     <TouchableWithoutFeedback
          onPressIn={zoomIn1} 
          onPressOut={zoomOut1}
        >
          <Animated.Text
            style={[
              styles.hd1,
              {
                transform: [{ scale: scaleValue1 }], 
              },
            ]}
          >
            Trước khi bắt đầu, hãy tiến hành chọn ra một người 
        đóng vai trò là Nhà Cái. Nhà Cái là người tiến hành điều hành trò chơi.
          </Animated.Text>
        </TouchableWithoutFeedback>
     </View>
   
     <View style={styles.cover2}  >
     <TouchableWithoutFeedback
          onPressIn={zoomIn2} 
          onPressOut={zoomOut2}
        >
          <Animated.Text
            style={[
              styles.hd2,
              {
                transform: [{ scale: scaleValue2 }], 
              },
            ]}
          >
            Người chơi đặt cược vào một hoặc nhiều linh vật mà mình muốn, 
       có thể đặt nhiều linh vật trong một lượt chơi và không giới hạn giá trị đặt.
          </Animated.Text>
        </TouchableWithoutFeedback>
       <Image style={styles.linhvat} source={require('../img/tutorial/linhvat.png')} />
     </View>

     <View style={styles.cover3}  >
     <TouchableWithoutFeedback
          onPressIn={zoomIn3} 
          onPressOut={zoomOut3} 
        >
          <Animated.Text
            style={[
              styles.hd3,
              {
                transform: [{ scale: scaleValue3 }], 
              },
            ]}
          >
            Bắt đầu mỗi lượt, Nhà Cái ấn vào nút "lắc" 
       để tiến hành lắc ra 3 linh vật ngẫu nhiên.
          </Animated.Text>
        </TouchableWithoutFeedback>
       <Image style={styles.lac} source={require('../img/tutorial/lac.png')} />
     </View>

     <View style={styles.cover4}  >
     <TouchableWithoutFeedback
          onPressIn={zoomIn4} 
          onPressOut={zoomOut4} 
        >
          <Animated.Text
            style={[
              styles.hd4,
              {
                transform: [{ scale: scaleValue4 }], 
              },
            ]}
          >
           Khi việc đặt cược đã hoàn thành, Nhà Cái sẽ bắt đầu mở 
       và công bố kết quả bằng cách nhấn vào nút "lắc" lần nữa. 
       Các mặt ngửa lên của các quân xúc xắc chính là các mặt thắng. 
          </Animated.Text>
        </TouchableWithoutFeedback>
       <Image style={styles.ketqua} source={require('../img/tutorial/ketqua.png')} />
     </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create
({
  container: {
    flex: 1,
    backgroundColor: '#990000',
    paddingLeft: 25,
    paddingRight: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 150,
    width: 150,
    borderRadius: 60,
    resizeMode: 'contain',
    marginTop: 20,
    marginBottom: 20,
  },
  header:{
    fontSize:20,
    color: 'white',
    fontWeight: 'bold',
    textShadowColor: 'rgba(255, 255, 255, 0.7)', 
    textShadowOffset: { width: 0, height: 0 }, // Điều chỉnh vị trí phát sáng
    textShadowRadius: 10,
    paddingTop: 10,
    
  },
  hd1:{
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:  'rgba(255, 215, 0, 0.4)',
    borderRadius: 20,
    padding: 10,
    textAlign: 'justify',
    flexWrap: 'wrap'
  },
  cover1:{
    backgroundColor:  'rgba(255, 215, 0, 0.2)',
    borderRadius: 30,
    padding: 10,
    marginTop: 15,
  },
  cover2:{
    backgroundColor:  'rgba(255, 215, 0, 0.2)',
    borderRadius: 30,
    margin: 10,
    marginTop: 15,
    alignItems: 'center'
  },
  hd2:{
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:  'rgba(255, 215, 0, 0.4)',
    borderRadius: 20,
    padding: 10,
    margin: 10,
    textAlign: 'justify',
    flexWrap: 'wrap'
  },
  linhvat:{
    alignItems: 'center',
    justifyContent: 'center',
    height: 200,
    width: 300,
    borderRadius: 60,
    resizeMode: 'contain',
  },
  cover3:{
    backgroundColor:  'rgba(255, 215, 0, 0.2)',
    borderRadius: 30,
    margin: 10,
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  hd3:{
    color: 'white',
    alignItems: 'center',
    backgroundColor:  'rgba(255, 215, 0, 0.4)',
    borderRadius: 20,
    padding: 10,
    margin: 10,
    textAlign: 'justify',
    flexWrap: 'wrap'
  },
  lac:{
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    width: 300,
    borderRadius: 60,
    resizeMode: 'contain',
  },
  cover4:{
    backgroundColor:  'rgba(255, 215, 0, 0.2)',
    borderRadius: 30,
    margin: 10,
    marginTop: 15,
    alignItems: 'center'
  },
  hd4:{
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:  'rgba(255, 215, 0, 0.4)',
    borderRadius: 20,
    padding: 10,
    margin: 10,
    textAlign: 'justify',
    flexWrap: 'wrap'
  },
  ketqua:{
    alignItems: 'center',
    justifyContent: 'center',
    height: 200,
    width: 300,
    borderRadius: 60,
    resizeMode: 'contain',
  },
  thoat:{
    marginTop: 15,
    height: 40, 
    width: 40,
  },
});
