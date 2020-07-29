import { v4 as uuid4 } from 'uuid';

export const listGenerator = (title, length) => new Array(length).fill(null).map((value, index) => elementTemplate(title, index));

export const idGenerator = (title, index) => uuid4(title + (index+1));

export const elementTemplate = (title, index) => ({
    id: idGenerator(title, index),
    name: title + (index+1)
});
