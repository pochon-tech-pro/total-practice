import React, {ReactNode} from "react";

interface Props {
    children: ReactNode
    onClickHandler: (e: React.MouseEvent<HTMLButtonElement>) => void
    disabled: boolean
}

const PrimaryButton: React.VFC<Props> = ({children, onClickHandler, disabled}) => {
    return (
        <button className={"btn btn-primary"} onClick={onClickHandler} disabled={disabled}>{children}</button>
    );
}

export default PrimaryButton;