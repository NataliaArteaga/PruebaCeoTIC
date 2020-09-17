import {View, StyleSheet} from 'react-native';
import React, {Component, useEffect} from 'react';
import { Container, Text, Item, Icon, Title, FooterTab, Footer, Button, Card, CardItem, Header, Content, Left, Body, ListItem, Right} from 'native-base';
import FooterPeliculas from '../containers/FooterPeliculas';
import FavoritosPelis from '../components/FavoritosPelis';


const ListaFavoritos = ({navigation}) => {

    return(
        <Container>
        <FavoritosPelis></FavoritosPelis>
        <Content></Content>
        <FooterPeliculas navigation = {navigation}></FooterPeliculas>
      </Container>
    );
}


export default ListaFavoritos
