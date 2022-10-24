import React, { useState, useEffect } from "react";
import axios from "axios";
import * as S from "../../styles/styles.personagens";
import Modal from '../../components/Modal';
import Top from "../../components/Topo";
import Stage from "../../components/Text";


export default function AllPersonagens() {

  const [apiAll, setApiAll] = useState([]);
  const [apiGryffindor, setApiGryffindor] = useState([]);
  const [apiSlytherin, setApiSlytherin] = useState([]);
  const [apiHufflepuff, setApiHufflepuff] = useState([]);
  const [apiRavenclaw, setApiRavenclaw] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [personagemAtual, setPersonagemAtual] = useState({});
  const [casas, setCasas] = useState();
  const [person, setPerson] = useState();

  const notImage = "/noHarry.jpg";
  const gryffindor = "gryffindor";
  const slytherin = "slytherin";
  const hufflepuff = "hufflepuff";
  const ravenclaw = "ravenclaw";

  useEffect(() => {
    axios
      .get(`https://hp-api.herokuapp.com/api/characters`)
      .then((response) => {
        setApiAll(response.data);
      })
  }, []);

  useEffect(() => {
    axios
      .get(`https://hp-api.herokuapp.com/api/characters/house/${gryffindor}`)
      .then((response) => {
        setApiGryffindor(response.data);
      })
  }, []);

  useEffect(() => {
    axios
      .get(`https://hp-api.herokuapp.com/api/characters/house/${slytherin}`)
      .then((response) => {
        setApiSlytherin(response.data);
      })
  }, []);

  useEffect(() => {
    axios
      .get(`https://hp-api.herokuapp.com/api/characters/house/${hufflepuff}`)
      .then((response) => {
        setApiHufflepuff(response.data);
      })
  }, []);

  useEffect(() => {
    axios
      .get(`https://hp-api.herokuapp.com/api/characters/house/${ravenclaw}`)
      .then((response) => {
        setApiRavenclaw(response.data);
      })
  }, []);

  const apiHouse = () => {
    switch (casas?.casa) {
      case 'gryffindor': return (
        <>
          {apiGryffindor && Object.values(apiGryffindor).map((item) => {
            return (
              <>
                <S.Actor onClick={() => handleOpenModal(item)}>
                  <S.ImgPersonagem src={item.image !== '' ? item.image : notImage} alt={item.name} />
                  <S.NamesPersonagens>{item.name}</S.NamesPersonagens>
                </S.Actor>
              </>
            );
          })};
        </>
      );

      case 'slytherin': return (
        <>
          {apiSlytherin && Object.values(apiSlytherin).map((item) => {
            return (
              <>
                <S.Actor onClick={() => handleOpenModal(item)}>
                  <S.ImgPersonagem src={item.image !== '' ? item.image : notImage} alt={item.name} />
                  <S.NamesPersonagens>{item.name}</S.NamesPersonagens>
                </S.Actor>
              </>
            );
          })};
        </>
      );

      case 'hufflepuff': return (
        <>
          {apiHufflepuff && Object.values(apiHufflepuff).map((item) => {
            return (
              <>
                <S.Actor onClick={() => handleOpenModal(item)}>
                  <S.ImgPersonagem src={item.image !== '' ? item.image : notImage} alt={item.name} />
                  <S.NamesPersonagens>{item.name}</S.NamesPersonagens>
                </S.Actor>
              </>
            );
          })};
        </>
      );

      case 'ravenclaw': return (
        <>
          {apiRavenclaw && Object.values(apiRavenclaw).map((item) => {
            return (
              <>
                <S.Actor onClick={() => handleOpenModal(item)}>
                  <S.ImgPersonagem src={item.image !== '' ? item.image : notImage} alt={item.name} />
                  <S.NamesPersonagens>{item.name}</S.NamesPersonagens>
                </S.Actor>
              </>
            );
          })};
        </>
      );

      default: return (
        <>
          {apiAll && Object.values(apiAll).map((item) => {
            return (
              <>
                <S.Actor onClick={() => handleOpenModal(item)}>
                  <S.ImgPersonagem src={item.image !== '' ? item.image : notImage} alt={item.name} />
                  <S.NamesPersonagens>{item.name}</S.NamesPersonagens>
                </S.Actor>
              </>
            );
          })};
        </>
      );
    }
  };

  const handleOpenModal = (personagem) => {
    setPersonagemAtual(personagem);
    setModalIsOpen(true)
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      let urlParams = undefined;
      params.forEach((value, key) => {
        urlParams = Object.assign({}, urlParams, {
          [key]: value.toString(),
        });
      });
      setCasas(urlParams)
      setPerson(urlParams)
    }
  }, []);

  const numbre = () => {
    switch (person?.numbre) {     
        case 'gryffindor': return (
            <>
                <p>grifinória</p>
            </>
        );
        case 'slytherin': return (
            <>
                <p>soncerina</p> 
           </>
        );
        case 'hufflepuff': return (
            <>
                <p>lufa-lufa</p>
            </>
        );
        case 'ravenclaw': return (
            <>
                <p>corvinal</p>
            </>
        );      
        case 'personagens': return (
            <>
                <p>PERSONAGENS</p>
            </>
        );      
    }
}

  return (
    <>
      <S.Container>
       <Top/>
        <S.SizeBack>
          <S.Main>
            <S.LogoMain />
            <S.BoxText>
              <Stage
              text={numbre()}/>
            </S.BoxText>
            <S.Border />
          </S.Main>
          <S.CardsCenter>
            <S.CardsImg>
              {apiHouse()};
            </S.CardsImg>
          </S.CardsCenter>
        </S.SizeBack>
        {
          modalIsOpen &&
          <Modal handleClose={() => setModalIsOpen(false)} personagemAtual={personagemAtual} />
        }
      </S.Container >
    </>
  );
}
//Yan