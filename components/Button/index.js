import * as S from "../../styles/styles.button";

export default function Button({ onClick, text1, text2 }) {

    return (
        <>
            <div>
                <S.Button onClick={onClick}>
                    {text1}
                    <br />
                    {text2}
                </S.Button>
            </div>
        </>
    )
}