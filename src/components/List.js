import React from 'react';
import './List.css';
import Card from'./Card.js';
import STORE from './store.js';

const stuff = [{title:'one',content:'stuff'},{title:'two',content:'stuff'},{title:'three',content:'stuff'}];

function List(props){
    /*const cards = stuff.map((item) => <Card title={item.title} content={item.content}/>);
    let test = STORE.allCards;
    let test2 = props.cardIds[0];
    console.log(test2);
    console.log(Object.entries(test));*/
    let cards = [];
    Object.entries(STORE.allCards).forEach(([key,value]) =>{
        for(let i=0;i<props.cardIds.length;i++){
            if(value.id==props.cardIds[i]){
                cards.push(
                    <Card key={value.id} title={value.title} content={value.content} />
                )
            }
        }
    });
    //console.log(cards);

    return(<section className='List'>
        <header className='List-header'>
            <h2>{props.header}</h2>
        </header>
        <div className='List-cards'>
            {cards}
            <button type='button' className="List-add-button">
                + Add Random Card
            </button>
        </div>
    </section>);
}

export default List;