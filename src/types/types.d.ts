import React, { Dispatch } from "react";

export type Folder = { name: string; path: string };

export type ResultType = {
    public_id: string
}

export type ImagesType = {
    public_id: string;
    tags: string[]
}[]

export type SearchResultType = {
    resources : ImagesType
    error: string
}


export type ModalType = {
    children : React.ReactNode;
    modal: boolean;
    setModal: Dispatch<SetStateAction<boolean>>;
    title: string;
    className?: string;
    classBtn?: string;
    iconBtn?: React.ReactNode;
    textBtn?: string;
}