import Link from "next/link";
import * as S from "../../styles/styles.top";

export default function Top() {

  return (
    <>
      <div>
        <S.Top>
          <Link href={"/"}>
            <S.Logo src={"/logo_harry_potter_wizard31.png"} />
          </Link>
        </S.Top>
      </div>
    </>
  )
}