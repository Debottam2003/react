import React, { useEffect, useState, useContext } from 'react';
import { todolist } from './runtodo';

function Todo() {
    const [data, setdata] = useState('');
    const { arr, setarr } = useContext(todolist);

    function createtodo() {
        if (data !== '') {
            let genid = Math.floor(Math.random() * 2000);
            setarr((prevarr) => [...prevarr, { id: genid, work: data }]);
            setdata('');
        }
    }

    function deletetodo(index) {
        let newarr = arr.filter((element, i) => (i !== index));
        setarr(newarr);
    }

    useEffect(() => {
        localStorage.setItem('todolistdata', JSON.stringify(arr));
    }, [arr]);

    useEffect(() => {
        const storedData = localStorage.getItem('todolistdata');
        if (storedData) {
            setarr(JSON.parse(storedData));
        }
    }, []);

    return (
        <>
            <div style={{ margin: '20px', textAlign: 'center' }}>
                <input
                    type='text'
                    value={data}
                    onChange={(e) => setdata(e.target.value)}
                    required
                    style={{ padding: '10px', width: '300px', marginRight: '10px' }}
                />
                <button
                    onClick={createtodo}
                    style={{ padding: '10px', backgroundColor: '#28a745', color: 'white', border: 'none', cursor: 'pointer' }}
                >
                    Create
                </button>
            </div>
            <ul style={{ listStyleType: 'none', padding: '0', textAlign: 'center' }}>
                {arr.map((element, index) => (
                    <li key={index} style={{ margin: '10px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#f8f9fa', padding: '10px', borderRadius: '5px' }}>
                        <span>{element.work}</span>
                        <button
                            onClick={() => deletetodo(index)}
                            style={{ backgroundColor: '#dc3545', color: 'white', border: 'none', cursor: 'pointer', padding: '5px 10px', borderRadius: '5px' }}
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default Todo;
