import React from 'react';

import { Numerate } from "../Numerate/Numerate";

import './aside.scss';

export const Aside = () => {
    return (<aside className={'aside'}>
        <Numerate from='2' to='20' odd/>
    </aside>)
};