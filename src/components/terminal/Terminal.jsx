import React, {useEffect, useState} from 'react';
// import './terminal.css'
import MyNavbar from "../UI/MyNavbar";
import Board from "../board/Board";
import cardCollection from '../../store/collection/library.json'
import {Context} from '../../store/context'
import MyModal from "../UI/myModal/MyModal";
import GameSettings from "../gameSettings/GameSettings";

const Terminal = () => {

    const [questsDeck, setQuestsDeck] = useState([])
    const [wastelandDeck, setWastelandDeck] = useState([])
    const [settlementDeck, setSettlementDeck] = useState([])
    const [vaultDeck, setVaultDeck] = useState([])
    const [stagedCards, setStagedCards] = useState([])
    const [trash, setTrash] = useState([])
    const [playersQty, setPlayersQty] = useState(2)
    const [selectedCard, setSelectedCard] = useState([])
    const [settingsModal, setSettingsModal] = useState(true)

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
            case selectedCard:
                return setSelectedCard;
        }
    }

    const defineCollectionByCardType = (type) => {
        switch (type) {
            case 'wasteland':
                return wastelandDeck;
            case 'settlement':
                return settlementDeck;
            case 'vault':
                return vaultDeck;
            default:
                return stagedCards;
        }
    }

    const shuffleCards = (cards) => {
        let currentIndex = cards.length, randomIndex;
        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [cards[currentIndex], cards[randomIndex]] = [
                cards[randomIndex], cards[currentIndex]];
        }
        return cards
    }

    const removeCardFromCollection = (cardId, collection) => {
        const removedCard = collection.filter((card) => card.id === cardId)[0]
        const newCollection = collection.filter((card) => card.id !== removedCard.id)
        defineSetCollection(collection)([...newCollection])
        return removedCard
    }

    const addCardFrom = (card, fromCollection) => {
        const removedCard = removeCardFromCollection(card.id, fromCollection);
        const toCollection = defineCollectionByCardType(card.type)
        const sliceIndex = Math.max(toCollection.length - playersQty, 0)
        const latestCardsInCollection = toCollection.slice(sliceIndex)
        latestCardsInCollection.push(removedCard)
        const shuffled = shuffleCards(latestCardsInCollection)
        defineSetCollection(toCollection)([...toCollection.slice(0, sliceIndex), ...shuffled])
    }

    const stageCardFrom = (card, fromCollection) => {
        const removedCard = removeCardFromCollection(card.id, fromCollection);
        setStagedCards([...stagedCards, removedCard])
    }

    const moveCardToTrashFrom = (card,fromCollection) =>{
        const removedCard = removeCardFromCollection(card.id, fromCollection);
        setTrash([...trash, removedCard])
    }

    const selectEncounterCard = (deck) => {
        if (deck.length) {
            const card = deck.slice(deck.length - 1)[0]
            selectCardFrom(card,deck)
        }
    }

    const selectCardFrom = (card,deck)=>{
        if (deck !== questsDeck && deck.length) {
            if (selectedCard[0]?.id) {
                window.alert('you must first play the selected card')
                return
            }
            const removedCard = removeCardFromCollection(card.id, deck);
            setSelectedCard([removedCard])
        }
    }



    useEffect(() => setQuestsDeck(cardCollection.cardCollection), [])


    return (
        <Context.Provider value={{
            playersQty, setPlayersQty,
            questsDeck,
            wastelandDeck,
            settlementDeck,
            vaultDeck,
            stagedCards,
            selectedCard,
            trash,
            stageCardFrom,
            addCardFrom,
            selectEncounterCard,
            selectCardFrom,
            moveCardToTrashFrom,
            setSettingsModal,
        }}>
            <div>
                <div className="overlay"></div>
                {/*<div className="scanline"></div>*/}
                <div className="wrapper">
                    <div className="content clearfix">

                        <MyNavbar/>
                        <p className="clear"><br/></p>
                        <Board/>
                        <MyModal
                            visible={settingsModal}
                            setVisible={setSettingsModal}
                            children={<GameSettings/>}
                            title={'Settings'}
                        />
                    </div>
                </div>
            </div>
        </Context.Provider>
    );
};

export default Terminal;