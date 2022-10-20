import React from 'react';
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
              <S.LogoMain/>
              <S.BoxText>
                <S.Text>Navegue pelas Casas</S.Text>
              </S.BoxText>
              <S.Border />
            </S.Main>
            <S.Cards>
              <Link href={'/personagens?casa=gryffindor'}>
                <S.Card1 />
              </Link>
              <Link href={'/personagens?casa=slytherin'}>
                <S.Card2 />
              </Link>
              <Link href={'/personagens?casa=hufflepuff'}>
                <S.Card3 />
              </Link>
              <Link href={'/personagens?casa=ravenclaw'}>
                <S.Card4 />
              </Link>
            </S.Cards>
          </S.Background>
        </S.Content>
      </S.back>
    </>
  )
}
