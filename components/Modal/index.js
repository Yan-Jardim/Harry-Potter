import React from 'react';
import * as S from "../../styles/styles.modal"

export default function Modal(props) {
  return (
    <S.Container>
      <S.Content>
        <S.HeaderContent>
          <S.Fechar onClick={props.handleClose}>X</S.Fechar>
        </S.HeaderContent>
        <S.MainContent>

        <S.Img>
          <S.StyleImg>
            <img width={'256px'} height={'356px'} src={props.personagemAtual.image}  />
          </S.StyleImg>
        </S.Img>
        <S.Props>
          <S.P>Nome:<S.Color>{props.personagemAtual.name}</S.Color></S.P>
          <S.P>Casa:<S.Color>{props.personagemAtual.house}</S.Color></S.P>
          <S.P>Espécie:<S.Color>{props.personagemAtual.species}</S.Color></S.P>
          <S.P>Data de Nasc:<S.Color>{props.personagemAtual.dateOfBirth}</S.Color></S.P>
          <S.P>Gênero:<S.Color>{props.personagemAtual.gender}</S.Color></S.P>
          <S.P>Patronus:<S.Color>{props.personagemAtual.patronus}</S.Color></S.P>
          <S.P>varinha:<S.Color></S.Color></S.P>
          <S.Alinhamento>
          <S.P>- Madeira<S.Color>{props.personagemAtual.wand.wood}</S.Color></S.P>
          <S.P>- Núcleo<S.Color>{props.personagemAtual.wand.core}</S.Color></S.P>
          <S.P>- Comprimnto<S.Color>{props.personagemAtual.wand.length}</S.Color></S.P>
          </S.Alinhamento>
          <S.P>Ancestralidade:<S.Color>{props.personagemAtual.ancestry}</S.Color></S.P>
          <S.P>Ator:<S.Color>{props.personagemAtual.actor}</S.Color></S.P>
        </S.Props>
        </S.MainContent>
      </S.Content>
    </S.Container>
  )
}
//Yan