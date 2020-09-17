import React, { Component } from 'react'
import { Image, FlatList, View } from 'react-native';
import { connect } from 'react-redux'
import { Container, Header, Content, Card, CardItem, ListItem, Text, Button, Icon, Left, Body, Right } from 'native-base';
import FooterPeliculas from '../containers/FooterPeliculas';


const DescargaPelis = ({ navigation, imagendescargada, loadingdescargas }) => {


  const renderItem = ({ item, index }) => (

    <ListItem>
      <Card style={{ flex: 0 }}>
        <Image key={index} source={{ uri: Platform.OS === 'android' ? 'file://' + item : item }} style={{ height: 200, width: 300, flex: 1 }} />
      </Card>
    </ListItem>
  )

  if (loadingdescargas) {
    return(
    <View>
      <Text>Cargando</Text>
    </View>
    )
  }
  else 
    return (
      <FlatList
        data={Object.values(imagendescargada)}
        renderItem={renderItem}
        keyExtractor={(item, index) => index}
      >
      </FlatList>
    );
  
}
const mapStateToProps = (state) => {// connect ejectua map enviandole el estado general
  return {
    imagendescargada: state.peliculas.descargas, // y lo que retorna map, connect lo envia a Page como Props
    loadingdescargas: state.peliculas.loadingdescargas
  }
}

export default connect(mapStateToProps)(DescargaPelis)