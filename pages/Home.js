import {View, StyleSheet} from 'react-native';
import React, {useState, useEffect} from 'react';
import { Container, Text, Item, Icon, Title, FooterTab, Footer, Button, Card, CardItem, Header, Content, Left, Body, ListItem, Right} from 'native-base';
import FooterPeliculas from '../containers/FooterPeliculas';
import SearchBarPeli from '../containers/SearchBarPeli';
import ListPelis from '../components/ListPelis';
import { SafeAreaView } from 'react-native-safe-area-context';


const Home = ({navigation}) => {

   const [busqueda, setbusqueda] = useState('')
    return(
        <Container>
        <SearchBarPeli busqueda={busqueda} setbusqueda={setbusqueda}></SearchBarPeli>
        <ListPelis busqueda={busqueda}></ListPelis>
        <FooterPeliculas navigation = {navigation}></FooterPeliculas>
      </Container>
    );
}

export default Home //Connect envía como props lo que retorna mapStateToProps
                                                                  //y la función del segundo argumento
