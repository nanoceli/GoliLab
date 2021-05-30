import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { Header } from './src/components/header'
import { Home } from './src/containers/home'

export default function App() {

  let usuarioLog: string = 's';

  return (usuarioLog === '' ?
    <NavigationContainer>
      <Header />
      <Home />
    </NavigationContainer> :
    <NavigationContainer>
      <Header />
      <Home />
      <StatusBar style="auto" />
    </NavigationContainer>

  )

}


// import React from 'react';
// import { SafeAreaView, StatusBar, } from 'react-native';
// import { Provider } from 'react-redux';
// import { Home } from './src/containers/home';
// import { store } from './src/redux';

// const App: React.FC = () => {
//   return (
//     <Provider store={store}>
//       <StatusBar barStyle="dark-content" hidden />
//       <SafeAreaView>
//         <Home />
//       </SafeAreaView>
//     </Provider>
//   );
// };

