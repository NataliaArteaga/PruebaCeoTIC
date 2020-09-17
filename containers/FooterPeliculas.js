import React, {useEffect} from 'react';
import { View, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { Container, Text, Item, Icon, Badge, FooterTab, Footer, Button, Card, CardItem, Header, Content, Left, Body, ListItem, Right} from 'native-base';



const FooterPeliculas = ({navigation}) => {
    return (
        <Footer> 
        <FooterTab>
          <Button onPress={() => navigation.navigate('Home')}>
            <Icon type="FontAwesome" name="user" />
            <Text>Lista</Text>
          </Button>
          <Button onPress={() => navigation.navigate('ListaFavoritos')}>
            <Icon type="FontAwesome" name="heart" />
            <Text>Favoritos</Text>
          </Button>
          <Button onPress={() => navigation.navigate('ListaDescargas')}>
            <Icon type="FontAwesome" name="heart" />
            <Text>Descarga</Text>
          </Button>
          <Button onPress={() => navigation.navigate('PerfilUs')}>
            <Icon type="FontAwesome" name="heart" />
            <Text>Perfil</Text>
          </Button>
        </FooterTab>
      </Footer>
    )
}


export default FooterPeliculas
