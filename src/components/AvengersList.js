import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {Jumbotron, Container, ListGroup, ListGroupItem, Button, ButtonGroup} from 'reactstrap';
import {Route, Link, Switch} from 'react-router-dom';
import Axios from 'axios';

import AvengerButton from './AvengerButton';
import AvengerCard from './AvengerCard';
import Error from './Error';

// practicing with context API
import {AvengerContext} from '../contexts/AvengerContext';

export default AvengersList;

const SJumbotron = styled(Jumbotron)`

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
`;

const Avgrs = (props) => {

  const [select, setSelect] = useState({});
  const { id } = props.match.params;
  // another useEffect necessary to access useEffect obtained api data
  useEffect(() => {
      setSelect(props.avg.find(avg => avg.id == id));
  }, [id])
  // Fallback in case api hasn't pulled through
  if(!select) {
    return <h3>Loading..</h3>
  }
  return (
    <AvengerCard avg={select} />
  )
} 

function AvengersList() {
  const [avg, setAvg] = useState([]);

  // assuming api
  useEffect(() => {
    setAvg(avengers);
  }, []);

  return (
    <>
    <SJumbotron>
     <h2>AvengersList</h2>
      <Container style={{width: "500px"}}>
        <ListGroup>
          <ButtonGroup>
            <Button><Link to='/avengers/1'>Iron Man</Link></Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button><Link to='/avengers/2'>Thor</Link></Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button><Link to='/avengers/3'>Captain America</Link></Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button><Link to='/avengers/4'>Spiderman</Link></Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button><Link to='/avengers/5'>Hulk</Link></Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button><Link to='/avengers/6'>Black Widow</Link></Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button><Link to='/avengers/7'>The Vision</Link></Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button><Link to='/avengers/8'>Black Panther</Link></Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button><Link to='/avengers/9'>Dr Strange</Link></Button>
          </ButtonGroup>
        </ListGroup>
        
        <Switch>
          <AvengerContext.Provider value={avg}>
            <Route path='/avengers/:id' component={AvengerCard} />
          </AvengerContext.Provider>
{/* Pass useEffect-set state through render in Route */}
          <Route component={Error} />
            
          


        </Switch>
        
      </Container>
    </SJumbotron>
    <Container>


    </Container>
    </>
  )
}

const avengers = [
  {
    id: 1,
    name: 'Iron Man',
    nickname: 'Armored Avenger',
    description:
      "Genius. Billionaire. Playboy. Philanthropist. Tony Stark's confidence is only matched by his high-flying abilities as the hero called Iron Man.",
    thumbnail:
      'https://terrigen-cdn-dev.marvel.com/content/prod/1x/002irm_com_crd_01.jpg',
    img:
      'https://terrigen-cdn-dev.marvel.com/content/prod/1x/002irm_com_mas_dsk_03_0.jpg',
    movies: [
      'Avengers: Infinity War',
      'Spiderman: Homecoming',
      'Captain America: Civil War',
      'Avengers: Age of Ultron',
      'Iron Man 3',
      'The Avengers'
    ]
  },
  {
    id: 2,
    name: 'Thor',
    nickname: 'God of Thunder',
    description:
      'The son of Odin uses his mighty abilities as the God of Thunder to protect his home Asgard and planet Earth alike.',
    thumbnail:
      'https://terrigen-cdn-dev.marvel.com/content/prod/1x/004tho_com_crd_01.jpg',
    img:
      'https://terrigen-cdn-dev.marvel.com/content/prod/1x/004tho_com_mas_dsk_03_1.jpg',
    movies: [
      'Avengers: Infinity War',
      'Thor: Ragnarok',
      'Avengers: Age of Ultron',
      'Thor: The Dark World',
      'The Avengers'
    ]
  },
  {
    id: 3,
    name: 'Captain America',
    nickname: 'Sentinel of Liberty',
    description:
      'Recipient of the Super-Soldier serum, World War II hero Steve Rogers fights for American ideals as one of the world’s mightiest heroes and the leader of the Avengers.',
    thumbnail:
      'https://terrigen-cdn-dev.marvel.com/content/prod/1x/003cap_com_crd_01.jpg',
    img:
      'https://terrigen-cdn-dev.marvel.com/content/prod/1x/003cap-com-mas-one_1.jpg',
    movies: [
      'Avengers: Infinity War',
      'Captain America: Civil War',
      'Avengers: Age of Ultron',
      'Captain America: The Winter Soldier',
      'The Avengers'
    ]
  },
  {
    id: 4,
    name: 'Spiderman',
    nickname: 'The Wallcrawler',
    description:
      'Bitten by a radioactive spider, Peter Parker’s arachnid abilities give him amazing powers he uses to help others, while his personal life continues to offer plenty of obstacles.',
    thumbnail:
      'https://terrigen-cdn-dev.marvel.com/content/prod/1x/005smp_com_crd_01.jpg',
    img:
      'https://terrigen-cdn-dev.marvel.com/content/prod/1x/005smp_com_mas_dsk_03_2.jpg',
    movies: [
      'Avengers: Infinity War',
      'Spiderman: Homecoming',
      'Captain America: Civil War'
    ]
  },
  {
    id: 5,
    name: 'Hulk',
    nickname: 'Big guy',
    description:
      'Dr. Bruce Banner lives a life caught between the soft spoken scientist he’s always been and the uncontrollable green monster powered by his rage.',
    thumbnail:
      'https://terrigen-cdn-dev.marvel.com/content/prod/1x/006hbb_com_crd_01.jpg',
    img:
      'https://terrigen-cdn-dev.marvel.com/content/prod/1x/006hbb_com_mas_dsk_01_4.jpg',
    movies: [
      'Avengers: Infinity War',
      'Thor: Ragnarok',
      'Avengers: Age of Ultron',
      'The Avengers'
    ]
  },
  {
    id: 6,
    name: 'Black Widow',
    nickname: 'Super Spy Assassin',
    description:
      'Despite super spy Natasha Romanoff’s checkered past, she’s become one of S.H.I.E.L.D.’s most deadly assassins and a frequent member of the Avengers.',
    thumbnail:
      'https://terrigen-cdn-dev.marvel.com/content/prod/1x/011blw_com_crd_01.jpg',
    img:
      'https://terrigen-cdn-dev.marvel.com/content/prod/1x/011blw_com_mas_mob_01.jpg',
    movies: [
      'Avengers: Infinity War',
      'Captain America: Civil War',
      'Avengers: Age of Ultron',
      'The Avengers'
    ]
  },
  {
    id: 7,
    name: 'The Vision',
    nickname: 'Android Avenger',
    description:
      'The android called Vision defies physics and fights as an Avenger with the power of density manipulation and his flawless computer brain',
    thumbnail:
      'https://terrigen-cdn-dev.marvel.com/content/prod/1x/013vis_com_crd_01.jpg',
    img:
      'https://terrigen-cdn-dev.marvel.com/content/prod/1x/013vis_com_mas_dsk_02_0.jpg',
    movies: [
      'Avengers: Infinity War',
      'Spiderman: Homecoming',
      'Captain America: Civil War',
      'Avengers: Age of Ultron'
    ]
  },
  {
    id: 8,
    name: 'Black Panter',
    nickname: 'King of Wakanda',
    description:
      'T’Challa is the king of the secretive and highly advanced African nation of Wakanda - as well as the powerful warrior known as the Black Panther.',
    thumbnail:
      'https://terrigen-cdn-dev.marvel.com/content/prod/1x/007blp_com_crd_01_0.jpg',
    img:
      'https://terrigen-cdn-dev.marvel.com/content/prod/1x/007blp_com_mas_mob_05.jpg',
    movies: ['Avengers: Infinity War', 'Spiderman: Homecoming', 'Black Panther']
  },
  {
    id: 9,
    name: 'Doctor Strange',
    nickname: 'Master of Magic',
    description:
      'Formerly a renowned surgeon, Doctor Stephen Strange now serves as the Sorcerer Supreme—Earth’s foremost protector against magical and mystical threats.',
    thumbnail:
      'https://terrigen-cdn-dev.marvel.com/content/prod/1x/009drs_com_crd_01.jpg',
    img:
      'https://terrigen-cdn-dev.marvel.com/content/prod/1x/009drs_com_mas_dsk_02.jpg',
    movies: ['Avengers: Infinity War', 'Doctor Strange']
  }
];