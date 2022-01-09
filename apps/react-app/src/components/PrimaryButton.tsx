import React from "react";

interface Props {
    name: string
    onClickHandler: (e: React.MouseEvent<HTMLButtonElement>) => void
    disabled: boolean
}

const PrimaryButton: React.FC<Props> = ({name, onClickHandler, disabled}) => {
    return (
        <button className={"btn btn-primary"} onClick={onClickHandler} disabled={disabled}>{name}</button>
    );
}

export default PrimaryButton;