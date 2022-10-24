import * as S from "../../styles/styles.header";
import Button from "../Button";
import Head from "next/head";

export default function Header() {
    return (
        <div>
            <Head>
                <title>Harry Potter</title>
                <meta name="description" content="Harry Potter" />
                <link rel="icon" href="icon.png" />
            </Head>
            <S.Soon src={"bpo1.png"} />
            <S.SizeBnt>
                <Button onClick={() => (window.location.href = "/personagens?casa=personagens&numbre=personagens")}
                    text1={'Veja Todos'}
                    text2={'os Personagens'}
                />
            </S.SizeBnt>
        </div>
    )
}