import React, { createContext, useState } from 'react';
import Button from 'antd/es/button';
import Tooltip from 'antd/es/tooltip';

import  { ITEM_TITLE } from '../App';
import { elementTemplate } from '../../helper/functions.js';
import List from '../List';

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
          <>
              <Tooltip title='Add new item'>
                  <Button type='primary' shape='circle' onClick={createNewItem} > + </Button>
              </Tooltip>
              <List />
          </>
        </PaneContext.Provider>
    )
};

export default PaneContent;
