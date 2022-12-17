import { memo, ReactNode, VFC } from "react";
import { Header } from "../organisms/layout/Header"


type Props = {
    children: ReactNode;
}

//<>こういうやり方で囲った要素の中身を受け取るときはReactNodeを使う。
export const HeaderLayout: VFC<Props> = memo((props) => {
    const { children } = props;
    return (
        <>
            <Header />
            {children}
        </>
    )
}) 