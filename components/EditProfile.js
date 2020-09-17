import { View, TextInput } from 'react-native';
import React, {Component, useEffect} from 'react';
import { useFormik } from 'formik';
import { Container, Text, Item, Form, Label, Input, Thumbnail, Button, Header, Content, Left, Body, Title, Right} from 'native-base';
import {connect} from 'react-redux'
import {actualizarPersona} from '../actions/peliculasAction'
import { TouchableOpacity } from 'react-native-gesture-handler';
import FooterPeliculas from '../containers/FooterPeliculas'

const EditProfile = ({actualizarPersona, navigation, usuarioEditProfile}) => {
    const persona = usuarioEditProfile
    const {username, email, celular, photo} = persona

  const {values, isSubmitting, setFieldValue, handleSubmit, errors} = useFormik({
    initialValues: {
      username: username,
      email: email,
      celular: celular,
      photo:photo
    },
    onSubmit: values => {
      actualizarPersona(values)
      navigation.navigate('PerfilUs',{persona})  
    },

    validate: values =>{
      const errors = {};
      if(!values.username) errors.username="Falta el campo nombre";
      if(!values.email || values.email.length < 1) errors.email="Correo invalido";
      if(!values.celular) errors.celular="Contraseña requerida";
      return errors
    }
  });

    return(
      <Container>

      <Content padder style={{ backgroundColor: "white" }}>
        <TouchableOpacity style={{alignSelf:'center'}} onPress={() =>
        navigation.navigate('EditProfilePicture')}>
      <Thumbnail style={{marginTop:15, marginBottom:5}} onPress={() =>navigation.navigate('EditProfilePicture')} style={{alignSelf:'center'}} large source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}} />
      </TouchableOpacity>
      <Form>
      <Item floatingLabel error = {errors.username ? true:false}>
       <Label>Username</Label>
       <Input value={values.username} onChangeText={text => setFieldValue('username', text)}></Input>
       
       <Text>{errors.username ? errors.username : ''}</Text>
      </Item >
       <Item floatingLabel error = {errors.email ? true:false}>
       <Label>Correo</Label>
       <Input value={values.email} onChangeText={text => setFieldValue('email', text)}></Input>
      </Item>
      <Item floatingLabel error = {errors.celular ? true:false}>
       <Label>Celular</Label>
       <Input value={values.celular} onChangeText={text => setFieldValue('celular', text)}></Input>
      </Item>
          <Button style={{marginTop:5, marginBottom:5}} block onPress={handleSubmit} >
            <Text>Edit Profile</Text>
          </Button>
    </Form>
    </Content>
    <FooterPeliculas navigation = {navigation}></FooterPeliculas>
  </Container>
  )
}
const mapStateToProps = (state) => {// connect ejectua map enviandole el estado general
  return {
    usuarioEditProfile: state.peliculas.user // y lo que retorna map, connect lo envia a Page como Props 
  }
}


export default connect(mapStateToProps,{actualizarPersona})(EditProfile)
