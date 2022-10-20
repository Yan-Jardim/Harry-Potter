import React, { useState, useEffect } from "react";
import { Router, useRouter } from 'next/router';
import axios from "axios";
import * as S from "./style";
import Modal from '../../Modal';
import Link from "next/link";

export default function TodosPerso() {

  const router = useRouter()

  const [resposta, setResposta] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [personagemAtual, setPersonagemAtual] = useState({})

  const notImage = "/noHarry.jpg";

  useEffect(() => {
    axios
      .get(`https://hp-api.herokuapp.com/api/characters`)
      .then((response) => {
        setResposta(response.data);
        console.log(resposta, 'resposta')
      })
  }, []);

  const handleOpenModal = (personagem) => {
    setPersonagemAtual(personagem);
    setModalIsOpen(true)
  }
  useEffect(() => {});





  return (

    <S.Container>
      <S.Topo>
        <Link href={"/"}>
          <S.Logo src={"logo_harry_potter_wizard31.png"} />
        </Link>
      </S.Topo>

      <S.BoxBack>

        <S.Main>
          <S.LogoMain />
          <S.BoxText>
            <S.Text> PERSONAGENS</S.Text>
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
  );
}