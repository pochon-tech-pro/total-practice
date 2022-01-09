import React from "react";

interface Props {
    name: string
    onClickHandler: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const PrimaryButton: React.FC<Props> = ({name, onClickHandler}) => {
    return (
        <button className={"btn btn-primary"} onClick={onClickHandler}>{name}</button>
    );
}

export default PrimaryButton;