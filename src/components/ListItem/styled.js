import styled from 'styled-components';


export const ListItemWrapper = styled.div`
    display: flex;
    align-items: center;
`;

export const StyledListItem = styled.input`
    border: 2px dashed black;
    margin-bottom: 5px;
    margin-right: 5px;
    background: white;
    width: 100px;
    cursor: pointer;
    ${({opacity})=>`opacity: ${opacity};`}
`;


