import React from 'react';

type UniversalButtonType = {
    name: string
    callBack: () => void
}

export const UniversalButton = (props: UniversalButtonType) => {
    const {name, callBack} = props;
    const onClickHandler = () => {
        callBack();
    };
    return (
        <button onClick={onClickHandler}>{name}</button>
    );
};
