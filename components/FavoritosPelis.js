import React, { Component, useEffect, useState } from 'react';
import { Image, FlatList,View, ToastAndroid } from 'react-native';
import { Container, Header, Content, Card, CardItem, ListItem, Text, Button, Icon, Left, Body, Right } from 'native-base';
import FooterPeliculas from '../containers/FooterPeliculas'
import {favoritos, mostrarPeliculas, eliminarfav} from '../actions/peliculasAction'
import { connect } from 'react-redux'



const FavoritosPelis = ({navigation, mostrarPeliculas,eliminarfav, peliculasListPage, favoritos, loadingfavs}) => {

  useEffect(() => {
    mostrarPeliculas()
  }, [])
  
  
  const renderItem = ({ item }) => (
      
<ListItem>
<Card style={{flex: 0}}>

                <CardItem>
                  <Image source={{uri: 'http://image.tmdb.org/t/p/original/'+item.backdrop_path}} style={{height: 200, width: 300, flex: 1}}/>
                </CardItem>
                <CardItem>
                 <Text style={{fontWeight:"bold"}}>{item.title}</Text>
                </CardItem>
                <CardItem>
                <Text>
                      {item.overview}
                    </Text>
                </CardItem>
                  <Button rounded style = {{alignSelf:'center', marginBottom:8, backgroundColor:'#808080'}} onPress={()=>{eliminarfav(item.id)}}><Text>ELIMINAR DE FAVORITOS</Text></Button>
                  <Right/>
                  <Left></Left>
              </Card>
              </ListItem>
  )
  if(loadingfavs){
    return(
      <View>
      <Text>Aún no hay favoritos</Text>
      </View>
    )
  }
  else{
        return (

            <FlatList
              data = {Object.values(peliculasListPage)}
              renderItem={renderItem}
              keyExtractor={(item) => item.id.toString()}
            >
            </FlatList>
        );
      }
    }
      
const mapStateToProps = (state) => {// connect ejectua map enviandole el estado general
    return {
      peliculasListPage: state.peliculas.peliculasfav, // y lo que retorna map, connect lo envia a Page como Props 
      loadingfavs:state.peliculas.loadingfavs
    }
  }
  
  
  export default connect(mapStateToProps, { mostrarPeliculas, eliminarfav, favoritos })(FavoritosPelis) // connect hace que map obtenga como parametro el estado
