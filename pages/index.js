import React from 'react';
import * as S from "../styles/styles.home";
import Footer from '../components/Footer';
import Header from '../components/Header';
import Stage from '../components/Text';


export default function Home() {

  return (
    <>
      <S.Content>
        <S.Top />
        <S.Back>
          <Header />
          <S.Main>
            <S.SoonMain />
            <Stage
              text={'Navegue pelas Casas'} />
            <S.Border />
          </S.Main>
          <Footer />
        </S.Back>
      </S.Content>
    </>
  )
}
//Yan