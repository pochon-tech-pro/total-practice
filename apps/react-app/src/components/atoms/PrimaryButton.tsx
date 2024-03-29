import React, {ReactNode} from "react";
import styled from "styled-components";
import {SBaseButton} from "./SBaseButton";

interface Props {
    children: ReactNode
    onClickHandler: (e: React.MouseEvent<HTMLButtonElement>) => void
    disabled: boolean
}

const PrimaryButton: React.VFC<Props> = ({children, onClickHandler, disabled}) => {
    return (
        <SButton onClick={onClickHandler} disabled={disabled}>{children}</SButton>
    );
}

export default PrimaryButton;

const SButton = styled(SBaseButton)`
  color: #fff;
  background-color: #007bff;
`;