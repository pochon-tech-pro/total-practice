import React, {ReactNode} from "react";
import styled from "styled-components";
import {SBaseButton} from "./SBaseButton";

interface Props {
    children: ReactNode
    onClickHandler: (e: React.MouseEvent<HTMLButtonElement>) => void
    disabled: boolean
}

const SecondaryButton: React.VFC<Props> = ({children, onClickHandler, disabled}) => {
    return (
        <SButton onClick={onClickHandler} disabled={disabled}>{children}</SButton>
    );
}

export default SecondaryButton;
const SButton = styled(SBaseButton)`
  color: #fff;
  background-color: #9d3030;
`;