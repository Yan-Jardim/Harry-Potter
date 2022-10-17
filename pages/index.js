import React from 'react'
import styles from '../styles/Home.module.css'
import * as S from "./style";
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <S.back>
        <S.Content>
            <S.Target />
          <S.Background>
            
              <S.Logo src={"bpo1.png"} />
              <S.BoxBnt>
                <Link href={'/personagens'}>
                  <S.Button>
                    Veja Todos os Personagens
                  </S.Button>
                </Link>
              </S.BoxBnt>

            <S.Main>
              <S.LogoMain />
              <S.BoxText>
                <S.Text>Navegue pelas Casas</S.Text>
              </S.BoxText>
              <S.Border />
            </S.Main>

            <S.Cards>
              <Link href={'/casa/grifinoria'}>
                <S.Card1 />
              </Link>
              <Link href={'/casa/sonserina'}>
                <S.Card2 />
              </Link>
              <Link href={'/casa/lufa-lufa'}>
                <S.Card3 />
              </Link>
              <Link href={'/casa/corvinal'}>
                <S.Card4 />
              </Link>
            </S.Cards>
          </S.Background>
        </S.Content>
      </S.back>
    </>
  )
}
