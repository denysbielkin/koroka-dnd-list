import React, { createContext, useState } from 'react';
import Button from 'antd/es/button';
import Tooltip from 'antd/es/tooltip';

import  { ITEM_TITLE } from '../App';
import { elementTemplate } from '../../helper/functions.js';
import List from '../List';
import { PaneContentWrapper } from './styled';

export const PaneContext = createContext();

const PaneContent = ({ items }) => {
    //const savedList = localStorage.getItem.....
    const savedList = null;
    const [list, setList] = useState(savedList || items);


    const createNewItem = () => {
        setList([...list, elementTemplate(ITEM_TITLE, list.length) ])
    };

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
