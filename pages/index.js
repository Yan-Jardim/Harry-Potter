import React from 'react';
import * as S from "./style";
import Link from 'next/link';

export default function Home() {

  return (
    <>
      <S.Content>
          <S.Top />
          <S.Back>
            <S.Soon src={"bpo1.png"} />
            <S.SizeBnt>
              <Link href={'/personagens?casa=personagens&numbre=personagens'}>
                <S.Button>
                  Veja Todos<br/> os Personagens
                </S.Button>
              </Link>
            </S.SizeBnt>
            <S.Main>
              <S.SoonMain />
                <S.Text>Navegue pelas Casas</S.Text>
              <S.Border />
            </S.Main>
            <S.Cards>
              <Link href={'/personagens?casa=gryffindor&numbre=gryffindor'}>
                <S.Card1 />
              </Link>
              <Link href={'/personagens?casa=slytherin&numbre=slytherin'}>
                <S.Card2 />
              </Link>
              <Link href={'/personagens?casa=hufflepuff&numbre=hufflepuff'}>
                <S.Card3 />
              </Link>
              <Link href={'/personagens?casa=ravenclaw&numbre=ravenclaw'}>
                <S.Card4 />
              </Link>
            </S.Cards>
          </S.Back>
      </S.Content>
    </>
  )
}
//Yan