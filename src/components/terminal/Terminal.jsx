import React, {useEffect, useState} from 'react';
// import './terminal.css'
import MyNavbar from "../UI/MyNavbar";
import Board from "../board/Board";
import cardCollection from '../../store/collection/library.json'
import {Context} from '../../store/context'
const Terminal = () => {

    const [questsDeck, setQuestsDeck] = useState([])
    const [wastelandDeck, setWastelandDeck] = useState([])
    const [settlementDeck, setSettlementDeck] = useState([])
    const [vaultDeck, setVaultDeck] = useState([])
    const [stagedCards, setStagedCards] = useState([])
    const [trash, setTrash] = useState([])
    const [playersQty, setPlayersQty] = useState(2)


    const defineSetCollection = (collection) => {
        switch (collection) {
            case questsDeck:
                return setQuestsDeck;
            case wastelandDeck:
                return setWastelandDeck;
            case settlementDeck:
                return setSettlementDeck;
            case vaultDeck:
                return setVaultDeck;
            case stagedCards:
                return setStagedCards;
            case trash:
                return setTrash;
        }
    }

    const defineCollectionByCardType = (type) =>{
        switch (type) {
            case 'quest':
                return questsDeck;
            case 'wasteland':
                return wastelandDeck;
            case 'settlement':
                return settlementDeck;
            case 'vault':
                return vaultDeck;
        }
    }

    const removeCardFromCollection = (cardId, collection) => {
        const removedCard = collection.filter((card) => card.id === cardId)[0]
        console.log(removedCard)
        const newCollection = collection.filter((card) => card.id !== removedCard.id)
        defineSetCollection(collection)([...newCollection])
        return removedCard
    }

    const addCard = (card) => {
        const removedCard = removeCardFromCollection(card.id, questsDeck);
        const toCollection = defineCollectionByCardType(card.type)
        defineSetCollection(toCollection)([...toCollection, removedCard])
    }

    const stageCardFrom = (card, fromCollection) => {
        console.log(card)
        const removedCard = removeCardFromCollection(card.id, fromCollection);
        console.log(removedCard)
        setStagedCards([...stagedCards, removedCard])
    }

    useEffect(()=>setQuestsDeck(cardCollection.cardCollection),[])


    return (
        <Context.Provider value={{
            playersQty, setPlayersQty,
            stageCardFrom, addCard,
            questsDeck,
            wastelandDeck,
            settlementDeck,
            vaultDeck,
            stagedCards,
            trash,
        }}>
            <div>
                <div className="overlay"></div>
                {/*<div className="scanline"></div>*/}
                <div className="wrapper">
                    <div className="content clearfix">

                        <MyNavbar/>
                        <p className="clear"><br/></p>
                        <Board/>

                    </div>
                </div>
            </div>
        </Context.Provider>
    );
};

export default Terminal;