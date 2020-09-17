import {View, StyleSheet} from 'react-native';
import React, {Component, useEffect} from 'react';
import { Container, Text, Item, Icon, Title, FooterTab, Footer, Button, Card, CardItem, Header, Content, Left, Body, ListItem, Right} from 'native-base';
import FooterPeliculas from '../containers/FooterPeliculas';
import { SafeAreaView } from 'react-native-safe-area-context';
import DescargaPelis from '../components/DescargaPelis'


const ListDescargas = ({navigation}) => {
 
    return(
        <Container>
        <DescargaPelis></DescargaPelis>
        <FooterPeliculas navigation = {navigation}></FooterPeliculas>
      </Container>
    );
}

export default ListDescargas //Connect envía como props lo que retorna mapStateToProps
                                                                  //y la función del segundo argumento
