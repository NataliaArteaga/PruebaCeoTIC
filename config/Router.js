import * as React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../pages/Home';
import ListPelis from '../components/ListPelis';
import DescargaPelis from '../components/DescargaPelis'
import ListaFavoritos from '../pages/ListaFavoritos'
import EditProfile from '../components/EditProfile'
import PerfilUs from '../components/PerfilUs';
import EditProfilePicture from '../components/EditProfilePicture';
import ListaDescargas from '../pages/ListaDescargas';


const Stack = createStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{
          title: 'Peliculas',
          headerStyle: {
            backgroundColor: '#3F51B5',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }, { headerShown: false }}
      />
      <Stack.Screen name="DescargaPelis" component={DescargaPelis} options={{
          title: 'Descargas',
          headerStyle: {
            backgroundColor: '#3F51B5',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen name="ListaFavoritos" component={ListaFavoritos} options={{
          title: 'Peliculas favoritas',
          headerStyle: {
            backgroundColor: '#3F51B5',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
        <Stack.Screen name="EditProfile" component={EditProfile} options={{
          title: 'Editar Perfil',
          headerStyle: {
            backgroundColor: '#3F51B5',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
    
      <Stack.Screen name="ListPelis" component={ListPelis} options={{
          title: 'Lista de peliculas',
          headerStyle: {
            backgroundColor: '#3F51B5',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen name="PerfilUs" component={PerfilUs} options={{
          title: 'Perfil de usuario',
          headerStyle: {
            backgroundColor: '#3F51B5',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />

  <Stack.Screen name="ListaDescargas" component={ListaDescargas} options={{
          title: 'Peliculas Descargadas',
          headerStyle: {
            backgroundColor: '#3F51B5',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />

    <Stack.Screen name="EditProfilePicture" component={EditProfilePicture} options={{
          title: 'Edit Profile Picture ',
          headerStyle: {
            backgroundColor: '#3F51B5',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
     
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router