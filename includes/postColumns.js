const columns = [
    { name: 'Id', getVal: ({ id }) => id }, 
    { name: 'content', getVal: ({ content }) => content, setVal: val => ({ content: val }) },
]

export default columns;