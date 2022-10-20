import React, { useState, useEffect } from "react";
import axios from "axios";
import * as S from "./style";
import Modal from '../../Modal';
import Link from "next/link";

export default function AllPersonagens() {

  const [resposta, setResposta] = useState([]);
  const [teste, setTeste] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [personagemAtual, setPersonagemAtual] = useState({});
  const [casas, setCasas] = useState([]);

  const notImage = "/noHarry.jpg";

  useEffect(() => {
    axios
      .get(`https://hp-api.herokuapp.com/api/characters`)
      .then((response) => {
        setResposta(response.data);
      })
  }, []);

  useEffect(() => {
    axios
      .get(`https://hp-api.herokuapp.com/api/characters/house/gryffindor`)
      .then((response) => {
        setTeste(response.data);
        console.log(response, "TAIIIIIII")
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
      console.log(urlParams, "urlParams");
      setCasas(urlParams);
    }
  }, []);

  const House = () => {
    switch (casas?.casas) {
      case 'gryffindor':
        return (
          <p>GRIFINORIA</p>
        );
      case 'ravenclaw':
        return (
          <p>CORVINAL</p>
        );
      case 'hufflepuff':
        return (
          <p>LUFA-LUFA</p>
        );
      case 'slytherin':
        return (
          <p>SONSERINA</p>
        );
    }
  };

  const gryffindor = () => {
    if (urlParams.casa === 'gryffindor') {
      {
        teste &&
          Object.values(teste).map((item) => {
            return (
              <>
                <S.Actor onClick={() => handleOpenModal(item)}>
                  <S.ImgPersonagem src={item.image !== '' ? item.image : notImage} alt={item.name} />
                  <S.NamesPersonagens>{item.name}</S.NamesPersonagens>
                </S.Actor>
              </>
            );
          })};
    };};

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
              <S.Text  >{House() ? House() : "PERSONAGENS"}</S.Text>
            </S.BoxText>
            <S.Border />
          </S.Main>
          <S.CardsCenter>
            <S.CardsImg>
              {resposta &&
                Object.values(resposta).map((item) => {
                  return (
                    <>
                      <S.Actor onClick={() => handleOpenModal(item)}>
                        <S.ImgPersonagem src={item.image !== '' ? item.image : notImage} alt={item.name} />
                        <S.NamesPersonagens>{item.name}</S.NamesPersonagens>
                      </S.Actor>
                    </>
                  );
                })}
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