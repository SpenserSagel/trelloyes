import React from 'react';
import './App.css';
import List from './components/List.js';
import STORE from './components/store.js';


function App() {
    console.log(STORE.allCards);
    const lists = STORE.lists.map((item) => <List header={item.header} key={item.id} cardIds={item.cardIds}/>);
    console.log(lists);

    return(<main className='App'>
        <header className='App-header'>
            <h1>Trelloyes!</h1>
        </header>
        <div className='App-list'>
            {lists}
        </div>

    </main>);
    //return <h1>test</h1>;
}

export default App;
