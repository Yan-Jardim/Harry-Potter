import React, { useState, useEffect } from "react";
import axios from "axios";
import * as S from "./style";
import Modal from '../../Modal';
import Link from "next/link";
import { useRouter } from "next/router";

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
  const router = useRouter();

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


  return (
    <>
      <S.Container>
        <S.Topo>
          <Link href={"/"}>
            <S.Logo src={"/logo_harry_potter_wizard31.png"} />
          </Link>
        </S.Topo>
        <S.BoxBack>
          <S.Main>
            <S.LogoMain />
            <S.BoxText>
              <S.Text>{router.query.casa}</S.Text>
            </S.BoxText>
            <S.Border />
          </S.Main>
          <S.CardsCenter>
            <S.CardsImg>
              {apiHouse()};
            </S.CardsImg>
          </S.CardsCenter>
        </S.BoxBack>
        {
          modalIsOpen &&
          <Modal handleClose={() => setModalIsOpen(false)} personagemAtual={personagemAtual} />
        }
      </S.Container >
    </>
  );
}
