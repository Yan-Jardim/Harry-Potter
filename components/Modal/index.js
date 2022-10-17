import React from 'react'
import { Container, Content, Fechar, Img, Props, P, Color } from './styles'


export default function Modal(props) {
  console.log(props)

  return (
    <Container>
      <Content>


        <Img>
          <img width={'256px'} height={'356px'} src={props.personagemAtual.image} />
        </Img>

        <Props>

          <P>Nome:<Color>
            {props.personagemAtual.name}
          </Color>
          </P>
          <P>Casa:<Color>
            {props.personagemAtual.house}
          </Color>
          </P>
          <P>Espécie:<Color>
            {props.personagemAtual.species}
          </Color>
          </P>
          <P>Data de Nasc:<Color>
            {props.personagemAtual.dateOfBirth}
          </Color>
          </P>
          <P>Gênero:<Color>
            {props.personagemAtual.gender}
          </Color>
          </P>
          <P>Patronus:<Color>
            {props.personagemAtual.patronus}
          </Color>
          </P>
          <P>Ancestralidade:<Color>
            {props.personagemAtual.ancestry}
          </Color>
          </P>
          <P>Ator:<Color>
            {props.personagemAtual.actor}
          </Color>
          </P>

        </Props>

        
        <Fechar onClick={props.handleClose}>X</Fechar>
   






      </Content>
    </Container>
  )
}

// {props.personagemAtual.wand}
// {.wood.core.length }