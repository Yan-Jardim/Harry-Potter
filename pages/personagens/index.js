import React, { useState, useEffect } from "react";
import axios from "axios";
import * as S from "./style";
import Modal from '../../Modal';
import Link from "next/link";

export default function AllPersonagens() {

  const [apiAll, setApiAll] = useState([]);
  const [apiGryffindor, setApiGryffindor] = useState([]);
  const [apiSlytherin, setApiSlytherin] = useState([]);
  const [apiHufflepuff, setApiHufflepuff] = useState([]);
  const [apiRavenclaw, setApiRavenclaw] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [personagemAtual, setPersonagemAtual] = useState({});
  const [casas, setCasas] = useState([]);

  const notImage = "/noHarry.jpg";



  useEffect(() => {
    axios
      .get(`https://hp-api.herokuapp.com/api/characters`)
      .then((response) => {
        setApiAll(response.data);
      })
  }, []);

  useEffect(() => {
    axios
      .get(`https://hp-api.herokuapp.com/api/characters/house/gryffindor`)
      .then((response) => {
        setApiGryffindor(response.data);
        console.log(response, "gryffindor")
      })
  }, []);

  useEffect(() => {
    axios
      .get(`https://hp-api.herokuapp.com/api/characters/house/slytherin`)
      .then((response) => {
        setApiSlytherin(response.data);
        console.log(response, "slytherin")
      })
  }, []);

  useEffect(() => {
    axios
      .get(`https://hp-api.herokuapp.com/api/characters/house/hufflepuff`)
      .then((response) => {
        setApiHufflepuff(response.data);
        console.log(response, "hufflepuff")
      })
  }, []);

  useEffect(() => {
    axios
      .get(`https://hp-api.herokuapp.com/api/characters/house/ravenclaw`)
      .then((response) => {
        setApiRavenclaw(response.data);
        console.log(response, "ravenclaw")
      })
  }, []);

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
    }
  }, []);

  const ApiHouse = (urlParams) => {
    if ((urlParams.personagens === apiAll)) {
      console.log(response, 'geral esta aqui')
    }
    else if ((urlParams.personagens.casa.gryffindor === apiGryffindor)) {
      console.log(response, 'gryff esta aqui')
    }
    else if ((urlParams.personagens.casa.slytherin === apiSlytherin)) {
      console.log(response, 'slyth esta aqui')
    }
    else if ((urlParams.personagens.casa.hufflepuff === apiHufflepuff)) {
      console.log(response, 'huffle esta aqui')
    }
    else if ((urlParams.personagens.casa.ravenclaw === apiRavenclaw)) {
      console.log(response, 'revanc esta aqui')
    }
  };

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
              <S.Text>PERSONAGENS</S.Text>
            </S.BoxText>
            <S.Border />
          </S.Main>
          <S.CardsCenter>
            <S.CardsImg>
              {ApiHouse && Object.values(apiAll).map((item) => {
                return (
                  <S.Actor onClick={() => handleOpenModal(item)}>
                    <S.ImgPersonagem src={item.image !== '' ? item.image : notImage} alt={item.name} />
                    <S.NamesPersonagens>{item.name}</S.NamesPersonagens>
                  </S.Actor>
                );
              })};
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