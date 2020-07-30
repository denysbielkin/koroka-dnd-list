import React, {createContext, useMemo, useState} from 'react';
import Button from 'antd/es/button';
import Tooltip from 'antd/es/tooltip';

import  { ITEM_TITLE } from '../App';
import { elementTemplate } from '../../helper/functions.js';
import List from '../List';
import { PaneContentWrapper } from './styled';

export const PaneContext = createContext();


const PaneContent = ({ items, STORAGE_NAME }) => {
    const getSavedData = () => JSON.parse(localStorage.getItem(STORAGE_NAME)) || null;
    const [list, setList] = useState(getSavedData() || items);

    const storeItems = (newValue) => localStorage.setItem(STORAGE_NAME, JSON.stringify(newValue));


    const createNewItem = () => {
        const newList = [...list, elementTemplate(ITEM_TITLE, list.length)];
        setList(newList);
    };

    useMemo(()=>storeItems(list), [list]);

    return (
        <PaneContext.Provider value={{list, setList}}>
          <PaneContentWrapper>
              <Tooltip title='Add new'>
                  <Button type='primary' shape='circle' onClick={createNewItem} > Add </Button>
              </Tooltip>
              <List />
          </PaneContentWrapper>
        </PaneContext.Provider>
    )
};

export default PaneContent;
