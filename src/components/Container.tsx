/** @jsx jsx */
import { jsx } from "@emotion/core";
import { FC, ReactElement } from "react";

export interface ContainerProps {
    children: ReactElement;
}

const Container: FC<ContainerProps> = (props: ContainerProps) => (
    <main css={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh"
    }}>
        {props.children}
    </main>
);

export default Container;
