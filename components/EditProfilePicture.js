import React, { Component, useState } from 'react'
import ImagePicker from 'react-native-image-picker';
import { Image, FlatList,View } from 'react-native';
import { Container, Header, Content, Card, CardItem, ListItem, Text, Button, Icon, Left, Body, Right } from 'native-base';
import FooterPeliculas from '../containers/FooterPeliculas';

const EditProfilePicture = ()=> {
   
  const [avatarSource, setavatarSource] = useState(null)

    const selectImage = async () =>{
      console.log('imagenpikeers')
        ImagePicker.launchImageLibrary({noData:true,mediaType:'photo'}, (response) => {
            console.log('Response = ', response);
          
            if (response.didCancel) {
              console.log('User cancelled image picker');
            } else if (response.error) {
              console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
              console.log('User tapped custom button: ', response.customButton);
            } else {
              const source = { uri: response.uri };
              setavatarSource(source)
            }
          });

    }
        return (
            <Container>           
            <Content>
            <Image source={avatarSource}/>
            <Button title="Select Image" onPress={selectImage}></Button>
            </Content>
            <FooterPeliculas navigation = {navigation}></FooterPeliculas>
            
            </Container> 
        )
              
    
  }
export default EditProfilePicture
