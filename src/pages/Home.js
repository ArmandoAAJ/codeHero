import React, { useState, useEffect, useRef } from 'react';
import { FlatList, Image } from 'react-native';
import { Dimensions } from 'react-native';
import { Modalize } from 'react-native-modalize';
import { AntDesign } from '@expo/vector-icons';
import api from '../services/api';
import {
  Container,
  Header,
  List,
  Top,
  Card,
  AlignName,
  Footer,
  Bottom,
  ButtonPage,
  Indice,
  Underline,
  Input,
} from '../styles/Home';

import Modal from '../components/Modal';
import { Row, Text, Button } from '../components/Layout';

const Home = () => {
  const modalizeRef = useRef(null);
  const height = Dimensions.get('window').height - 100;
  const [heroes, setHeroes] = useState([]);
  const [limit, setLimit] = useState(4);
  const [interators, setInterators] = useState([]);
  const [active, setActive] = useState(0);
  const [offSet, setOffSet] = useState(0);
  const [totalPage, setTotalPage] = useState(0);
  const [max, setMax] = useState(2);
  const [min, setMin] = useState(0);
  const [modalItem, setModalItem] = useState([]);
  const [search, setSearch] = useState('');
  const [lastSearch, setLastSearch] = useState('');

  async function loadCharacters() {
    try {
      let response = [];
      if (search !== '') {
        const { data } = await api.get(
          `http://gateway.marvel.com/v1/public/characters?nameStartsWith=${search}&ts=1611701562&apikey=1e7b7bb982a57749e7d7c7c26eb13c9f&hash=f1757a2bb040cd3d94b71c9232e99617&limit=${limit}&offset=${offSet}`,
        );
        response = data;
      } else {
        const { data } = await api.get(
          `http://gateway.marvel.com/v1/public/characters?ts=1611701562&apikey=1e7b7bb982a57749e7d7c7c26eb13c9f&hash=f1757a2bb040cd3d94b71c9232e99617&limit=${limit}&offset=${offSet}`,
        );
        response = data;
      }

      let arrayPages = [];
      for (let i = 1; i <= Math.ceil(response.data.total / limit); i++) {
        arrayPages.push(i);
      }
      setInterators(arrayPages);
      setHeroes(response.data);
      setTotalPage((Math.ceil(response.data.total / limit)));

    } catch (error) {
      console.tron.log(error);
    }
  }

  useEffect(() => {
    loadCharacters()
  }, [active, search]);

  const handleNewPage = (item) => {
    setOffSet((item - 1) * limit)
    setActive(item - 1);
  }

  function decrement() {
    setMin(min - 1);
    setMax(max - 1);
  }

  function increment() {
    setMin(min + 1);
    setMax(max + 1);
  }

  function searching(e) {
    if (e !== lastSearch) {
      setOffSet(0);
      setActive(0);
      setMin(0);
      setMax(2);
    }
    setLastSearch(search);
    setSearch(e);
  }

  function isOpen(item) {
    modalizeRef.current?.open();
    setModalItem(item);
  }


  const IndicePages = () => (
    <>
      <FlatList
        data={interators}
        horizontal={true}
        keyExtractor={item => String(item)}
        renderItem={({ item, index }) => {
          if (index !== max && index !== max - 1 && index !== min) return;
          return (
            <ButtonPage
              isSelect={item - 1 === active}
              onPress={() => handleNewPage(item)} >
              <Indice
                isSelect={item - 1 === active}>
                {item}
              </Indice>
            </ButtonPage>
          )
        }
        }
      />
    </>
  );

  return (
    <Container>
      <Header>
        <Row>
          <Underline>
            <Text size="16" style={{ fontFamily: 'Roboto_900Black' }}
            >
              BUSCA
         </Text>
          </Underline>
          <Text
            size="16" style={{ fontFamily: 'Roboto_900Black' }}>
            {` `}MARVEL
        </Text>
          <Text
            size="16" style={{ fontFamily: 'Roboto_300Light' }}>
            TESTE FRONT-END
        </Text>
        </Row>
        <Text
          size="16"
          style={{ fontFamily: 'Roboto_300Light' }}>
          Nome do Personagem
       </Text>
        <Input
          onChangeText={(e) => searching(e)}
          value={search}
        />
      </Header>
      <List>
        <Top />
        <FlatList
          data={heroes.results}
          keyExtractor={item => String(item.id)}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <Card onPress={() => isOpen(item)}>
              <Row>
                <Image
                  style={{ height: 50, width: 50, borderRadius: 25, marginHorizontal: 30 }}
                  source={{ uri: `${item.thumbnail.path}.${item.thumbnail.extension}` }}
                />
                <AlignName>
                  <Text
                    size="16"
                    color="#949494"
                    style={{ fontFamily: 'Roboto_300Light' }}
                  >
                    {item.name}
                  </Text>
                </AlignName>
              </Row>
            </Card>
          )}
        />
      </List>
      <Footer>
        <Button onPress={decrement} disabled={min < 1}>
          <AntDesign name="caretleft" size={24} color="#D42026"
          />
        </Button>
        <Button>
          {IndicePages()}
        </Button>
        <Button onPress={increment} disabled={max === totalPage - 1}>
          <AntDesign name="caretright" size={24} color="#D42026"
          />
        </Button>
      </Footer>
      <Bottom />
      <Modalize
        ref={modalizeRef}
        snapPoint={height}
        modalHeight={height}
      >
        <Modal data={modalItem} />
      </Modalize>
    </Container>
  );
}

export default Home;