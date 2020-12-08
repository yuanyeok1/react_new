import React from 'react';
import Loadable from 'react-loadable';
import Loading from '@/components/spinner';

import { useParams } from 'react-router-dom';
// import commonStore from '@/mobx/commonStore';
// import { observer } from 'mobx-react-lite';

import List from './list'
const AddBank =Loadable({
    loader: () => import('./addBank'),
    loading: Loading,
});

const AddUsdt =Loadable({
    loader: () => import('./addUsdt'),
    loading: Loading,
});

const WdMethod = () => {
    const { type }  = useParams();
    if (type === 'addBank') {
        return <AddBank/> 
    }
    if (type === 'addUsdt') {
        return <AddUsdt />
    }
    return (
        <List />
    )
}

export default WdMethod;