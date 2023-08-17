    const columns = [
        {name: 'Id', getVal: ({ id }) => id }, 
        { name: 'Name', getVal: ({name }) => name, setVal: val => ({ name: val }) },
               { name: 'Phone', getVal: ({ phone}) => phone, setVal: val => ({ phone: val }) },
               { name: 'Role', getVal: ({ role }) => role, setVal: val => ({ role: val }) },
    ];
    
    export default columns;

