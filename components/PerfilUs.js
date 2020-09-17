import { View, TextInput, TouchableOpacity } from 'react-native';
import React, {Component, useEffect, useState} from 'react';
import {connect} from 'react-redux'
import { Container, Text, Item, Icon, Badge, Thumbnail, Footer, Button, Card, CardItem, Header, Content, Left, Body, ListItem, Right} from 'native-base';

const PerfilUs = ({navigation, usuarioEditProfile,loadinguser}) => {
  console.log(usuarioEditProfile)
 

  if(loadinguser){
    return(
      <View>
      <Text>Cargando</Text>
      </View>
    )
  }
  else{
  return (
    <Container>  
    <Content>
    <Card>
              <CardItem bordered>
                <Body>
                <Thumbnail style={{alignSelf:'center'}} large source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}} />
                  <ListItem>
                    <Text>
                    Username: {usuarioEditProfile.username}
                    </Text>
                  </ListItem>
                  <ListItem>
                  <Text>
                    Email: {usuarioEditProfile.email}
                    </Text>
                  </ListItem>
                  <ListItem>
                  <Text>
                    Celular: {usuarioEditProfile.celular}
                    </Text>
                  </ListItem>
                </Body>
              </CardItem>
              
              <Button style={{alignSelf:'center', backgroundColor:'green'}} onPress={() =>
                navigation.navigate('EditProfile')}><Text>Editar Usuario</Text></Button>
            </Card>
            <Button rounded>
                  <Text>
                    Grabar Audio
                  </Text>
                </Button>
            </Content>
  </Container>
  );}
}

const mapStateToProps = (state) => {// connect ejectua map enviandole el estado general
  return {
    usuarioEditProfile: state.peliculas.user, // y lo que retorna map, connect lo envia a Page como Props
    loadinguser:state.peliculas.loadinguser
  }
}

export default connect(mapStateToProps)(PerfilUs)
