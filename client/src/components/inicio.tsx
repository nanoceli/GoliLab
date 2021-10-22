import * as React from 'react';
import { StyleSheet, View, Image,  Dimensions } from "react-native";
import Gradiente from '../extra/gradient';
import img from '../extra/labappimg.jpg';
import img2 from '../extra/labappimg2.jpg';
import img3 from '../extra/img3.jpg';

let ScreenHeight = Dimensions.get("window").height;
let ScreenWidth = Dimensions.get("window").width;

export default function Inicio() {
  const [Img, setImg] = React.useState(img);

 React.useEffect(() => {
    if (Img === img) {
      setTimeout(() => {
        setImg(img2);
      }, 4000);
    } else if(Img === img2) {
      setTimeout(() => {
        setImg(img3);
      }, 4000);
    } else {
      setTimeout(() => {
        setImg(img);
      }, 4000);
    }
  }, [Img]);

  return (
    <View>
      <Image
        style={styles.tinyLogo}
        source={Img}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: ScreenWidth,
    height: ScreenHeight,
  },
  logo: {
    width: 66,
    height: 58,
  },
});