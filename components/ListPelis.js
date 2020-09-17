
import React, { Component, useEffect, useState } from 'react';
import { Image, FlatList, View, PermissionsAndroid } from 'react-native';
import { Container, Header, Content, Card, CardItem, Footer, FooterTab, ListItem,Item,Input, Text, Button, Icon, Left, Body, Right } from 'native-base';
import FooterPeliculas from '../containers/FooterPeliculas'
import {favoritos, mostrarPeliculas,descargarImagen} from '../actions/peliculasAction'
import RNFetchBlob from 'rn-fetch-blob'
import { connect } from 'react-redux'



const ListPelis = ({busqueda, mostrarPeliculas, descargarImagen, peliculasListPage, favoritos}) => {

  const requestCameraPermission = async () => {
    try {
        const granted = await PermissionsAndroid.requestMultiple(
            [PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE, PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE],
            {
                title: "Permisos",
                message:
                    "Se requieren permisos para descargar la imagen",
            }
        )
        if (granted['android.permission.READ_EXTERNAL_STORAGE'] == PermissionsAndroid.RESULTS.GRANTED) {
            console.log("You can use the camera");
        } else {
            console.log("Camera permission denied");
        }
    } catch (err) {
        console.warn(err);
    }
};

const descargarimg=(url,id)=>{
  RNFetchBlob
  .config({
    fileCache : true,
    // by adding this option, the temp files will have a file extension
    appendExt : 'jpg'
  })
  .fetch('GET', url)
  .then((res) => {
    // the temp file path with file extension `png`
    console.log('The file saved to ', res.path())
    // Beware that when using a file path as Image source on Android,
    // you must prepend "file://"" before the file path
    descargarImagen(res.path(),id)
    
  })
}

  useEffect(() => {
    mostrarPeliculas()
  }, [])
  
  const renderItem = ({ item }) => (
<ListItem>
<Card style={{flex: 0}}>

                <CardItem>
                  <Body>
                  <Image source={{uri: 'http://image.tmdb.org/t/p/original/'+item.backdrop_path}} style={{height: 200, width: 300, flex: 1}}/>
                  </Body>
                </CardItem>
                <CardItem>
                 <Text style={{fontWeight:"bold"}}>{item.title}</Text>
                </CardItem>
                <CardItem>
                <Text>
                      {item.overview}
                    </Text>
                </CardItem>
                <CardItem footer>
                  <Button style={{marginRight:5}} rounded  onPress = {()=>{favoritos(item)}}><Text>AGREGAR A FAVORITOS</Text></Button>
                  <Right/>
                  <Left></Left>
                  <Button onPress={()=>{requestCameraPermission()
                  descargarimg('http://image.tmdb.org/t/p/original/'+item.backdrop_path, item.id)}} rounded style={{backgroundColor:'green'}}><Text>DESCARGAR</Text>
                  </Button>
                </CardItem>
              </Card>
              </ListItem>
  )
        return ( 
 
            <FlatList
            data={peliculasListPage.filter(item=>item.title.toUpperCase().includes(busqueda.toUpperCase()))}
              renderItem={renderItem}
              keyExtractor={(item) => item.id.toString()}
            >
            </FlatList>

        );
      }

      
const mapStateToProps = (state) => {// connect ejectua map enviandole el estado general
    return {
      peliculasListPage: state.peliculas.peliculas, // y lo que retorna map, connect lo envia a Page como Props 
      isLoading: state.peliculas.loading
    }
  }
  
 
  
  export default connect(mapStateToProps, { mostrarPeliculas, descargarImagen, favoritos })(ListPelis) // connect hace que map obtenga como parametro el estado
