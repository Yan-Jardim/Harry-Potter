import Link from "next/link"
import * as S from "../../styles/styles.footer";

export default function Footer () {

    return (
                
        <footer>
             <S.Cards>
              <Link href={'/personagens?casa=gryffindor&numbre=gryffindor'}>
                <S.Cardone />
              </Link>
              <Link href={'/personagens?casa=slytherin&numbre=slytherin'}>
                <S.Cardtwo />
              </Link>
              <Link href={'/personagens?casa=hufflepuff&numbre=hufflepuff'}>
                <S.Cardthree/>
              </Link>
              <Link href={'/personagens?casa=ravenclaw&numbre=ravenclaw'}>
                <S.Cardfour/>
              </Link>
            </S.Cards>
        </footer>
    )
}
                