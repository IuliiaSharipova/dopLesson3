import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {UniversalButton} from './universalComponents/universalButton';

type DataType = {
    body: string
    id: number
    title: string
    userId: number
}

function App() {
    const [data, setData] = useState<Array<DataType>>([]);

    const cleanData = () => {
        setData([]);
    };
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => setData(json));
    }, []);

    return (
        <div className="App">
            <UniversalButton name={'Clean data'} callBack={cleanData}/>
            <ul>
                {data.map(d => {
                    return (
                        <li key={d.id}>
                            <span>{d.id}</span>
                            <span>{d.title}</span>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default App;
