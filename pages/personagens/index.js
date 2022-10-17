import React, { useState, useEffect } from "react";
import axios from "axios";
import * as S from "./style";
import Modal from '../../components/Modal'
import Link from "next/link";

export default function TodosPerso() {
  const [resposta, setResposta] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [personagemAtual, setPersonagemAtual] = useState({})

  const defaultImg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRleKTGZ3asGHBqoap1YPeldfLJ9Iwk8ZN7prhoOh0Fo6hv8_JoSXxFwIbu_cEYlO8HtG4&usqp=CAU";

  useEffect(() => {
    axios
      .get(`https://hp-api.herokuapp.com/api/characters`)
      .then((response) => {
        setResposta(response.data);
        console.log(resposta, 'resposta')
      })
      .catch((error) => {
        alert("");
      });
  }, []);

  const handleOpenModal = (personagem) => {
    setPersonagemAtual(personagem);
    setModalIsOpen(true)
  }

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
                            <S.ImgPersonagem src={item.image !== '' ? item.image : defaultImg} alt={item.name} />
                            <S.NamesPersonagens>{item.name}</S.NamesPersonagens>
                          </S.Actor>
                        </>
                      );
                    })}
                </S.CardsImg>
          </S.CardsCenter>
        </S.BoxBack>

      {modalIsOpen &&
        <Modal handleClose={() => setModalIsOpen(false)} personagemAtual={personagemAtual} />
      }
    </S.Container>
  );
}