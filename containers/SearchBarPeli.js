import React from 'react'
import { Container, Text, Item, Icon, Input, FooterTab, Footer, Button, Card, CardItem, Header, Content, Left, Body, ListItem, Right} from 'native-base';

const SearchBarPeli = ({busqueda,setbusqueda}) => {
    return (
        <Header searchBar rounded>
        <Item>
          <Input value={busqueda} onChangeText={(text)=>setbusqueda(text)} placeholder="Search" />
        </Item>
        <Button transparent>
          <Text>Search</Text>
        </Button>
        </Header>
    )
}

export default SearchBarPeli
