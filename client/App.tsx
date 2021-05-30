import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { useSelector} from "react-redux";
import { Provider } from 'react-redux';
import { Header } from './src/components/header'
import { Home } from './src/containers/home'
import { store } from './src/redux/store';
import { RootState } from "./src/redux/rootReducer"

export default function App() {

  //let userLog = useSelector((state: RootState) => state.PacienteReducer.userLog)

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Header />
        <Home />
      </NavigationContainer>
    </Provider>
  )
}

