import { SafeAreaView, 
    StyleSheet, 
    Text, 
    View, 
    StatusBar, 
    ImageBackground, 
    Image,
    Dimensions,
    TouchableOpacity
  } from 'react-native';
  
const widthWindow = Dimensions.get('window').width

export default ScreenHome = ({navigation}) => {
    return(
    <ImageBackground  style={styles.container}
      source={require('../img/screenHome/bg.png')}
      resizeMode='repeat'
    >
      <StatusBar barStyle='default'></StatusBar>
      <SafeAreaView style={{flex: 1, alignItems: 'center'}}>
        {/* hoa mai */}
        <View style = {styles.containerHoaMai}>
          <Image
            source={require('../img/screenHome/hoaMai.png')}
            style={styles.hoaMai}
          >
          </Image>
        </View>

          {/* bầu cua */}
        <View style = {styles.containerBaucua}>
            {/* contain ko thay đổi tỉ lệ ảnh, cover cũng thế 
            Tóm lại, "cover" được sử dụng để đảm bảo rằng hình ảnh sẽ c
            he phủ toàn bộ khu vực của phần tử cha, trong khi "contain" được sử dụng để đảm bảo rằng hình ảnh sẽ hiển 
            thị hoàn chỉnh trong phần tử cha mà không bị cắt hoặc méo mó*/}
          <Image
            resizeMode='contain'
            source={require('../img/screenHome/bauCua.png')}
            style={styles.bauCua}
          >
          </Image>
        </View>

         {/* hai btn */}
         {/* activeOpacity: xác định độ opacity khi click */}
        <TouchableOpacity style={styles.btnPlayAndTutorial} activeOpacity={0.3}
            onPress={() => {
                navigation.navigate('ScreenPlay')
            }}
        >
            <Image
              style={styles.btnChoiNgay}
              resizeMode='cover'
              source={require('../img/screenHome/choiNgay.png')}
            >
            </Image>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnPlayAndTutorial} activeOpacity={0.3}
             onPress={() => {
                navigation.navigate('Tutorial')
             }}
        
        >
            <Image
              style={styles.btnHuongDan}
              resizeMode='cover'
              source={require('../img/screenHome/huongDan.png')}
            >
            </Image>
        </TouchableOpacity>

        <View style={{flex: 1, flexDirection: 'column', justifyContent: 'flex-end', 
              width: '100%', alignItems: 'flex-end'
        }}>
            <TouchableOpacity style={styles.btnContainerSetting}
                onPress={() => {
                  navigation.navigate('Setting')
              }}
            >
              <Image
                style={styles.btnSetting}
                resizeMode='contain'
                source={require('../img/screenHome/setting.png')}
              >
              </Image>
            </TouchableOpacity>
        </View>
        
       </SafeAreaView>
      
    </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        width: widthWindow,
        height: '100%',
    },
  
    containerHoaMai: {
      width: widthWindow,
      height: '22%',
    },
  
    hoaMai: {
      position: 'absolute',
      top: -80,
      left: -80,
      width: widthWindow * 1.2,
      height: (widthWindow * (9 / 16) * 1.2),
    },
  
    containerBaucua: {
      width: widthWindow,
      height: '35%',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 40,
    },
  
    bauCua: {
      width: widthWindow * 1.4,
      height: (widthWindow * (9 / 16) * 1.4),
    },
  
    btnPlayAndTutorial: {
      width: '62%',
      height: 85,
      alignItems: 'center',
      borderRadius: 50
    },
  
    btnChoiNgay: {
      width: '100%',
      height: '100%',
    },
  
    btnHuongDan: {
      alignItems: 'center',
      width: '92%',
      height: '92%',
    },
    
    btnContainerSetting: {
      width: '15%',
      height: '40%',
      borderRadius: 40,
      alignItems: 'center',
      marginRight: 20,
      marginBottom: 20
    },
  
    btnSetting: {
    width: '100%',
    height: '100%',
    },
  });
  