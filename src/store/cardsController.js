import {makeAutoObservable} from "mobx";
import cardsCollection from "./collection/library.json";
import SettingsController from "./settingsController";


class CardsController {

    questsDeck = []
    wastelandDeck = []
    settlementDeck = []
    vault84Deck = []
    stagedCards = []
    trash = []
    selectedCard = []


    constructor() {
        makeAutoObservable(this)
    }

    //=== utils ===

    shuffleCards = (cards) => {
        let currentIndex = cards.length, randomIndex;
        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [cards[currentIndex], cards[randomIndex]] = [
                cards[randomIndex], cards[currentIndex]];
        }
        return cards
    }

    defineCollectionByCardType = (type) => {
        switch (type) {
            case 'wasteland':
                return this.wastelandDeck;
            case 'settlement':
                return this.settlementDeck;
            case 'vault84':
                return this.vault84Deck;
            default:
                return this.stagedCards;
        }
    }

    //====================

    //=== general ===

    removeCardFrom = (cardId, collection) => {
        const index = collection.findIndex((card) => card.id === cardId)
        if (index !== -1) {
            const removedCard = collection[index]
            collection.splice(index, 1)
            return removedCard
        }
    }

    addCardFrom = (card, fromCollection) => {

        const removedCard = this.removeCardFrom(card.id, fromCollection);
        const toCollection = this.defineCollectionByCardType(card.type)

        if (removedCard) {
            //add + shuffle Players.qty cards
            const sliceIndex = Math.max(toCollection.length - SettingsController.playersQty, 0)
            const latestCardsInCollection = toCollection.splice(sliceIndex)
            latestCardsInCollection.push(removedCard)
            const shuffled = this.shuffleCards(latestCardsInCollection)
            toCollection.push(...shuffled)
        }

    }

    selectCardFrom = (card, deck) => {
        if (deck !== this.questsDeck && deck.length) {
            if (this.selectedCard[0]?.id) {
                window.alert('you must first play the selected card')
                return
            }
            const removedCard = this.removeCardFrom(card.id, deck);
            if (removedCard) this.selectedCard = [removedCard]

        }
    }

    //==============


    //=== collections handling ===

    stageCardFrom = (card, fromCollection) => {
        const removedCard = this.removeCardFrom(card.id, fromCollection);
        if (removedCard) this.stagedCards.push(removedCard)
    }

    putInTrashFrom = (card, fromCollection) => {
        const removedCard = this.removeCardFrom(card.id, fromCollection);
        if (removedCard) this.trash.push(removedCard)
    }

    selectEncounterCard = (deck) => {
        if (deck.length) {
            const card = deck.slice(deck.length - 1)[0]
            this.selectCardFrom(card, deck)
        }
    }

    //==============


    startScenario = ({scenario, withExpansion1}) => {

        this.vault84Deck = []
        this.trash = []
        this.selectedCard = []
        this.stagedCards = []

        this.questsDeck = cardsCollection.filter((card) => {
            if (card.expansion === 0) return true
            return card.expansion === 1 && withExpansion1
        })

        this.wastelandDeck = this.questsDeck
            .filter((card) => card.type === 'wasteland' && card.name === '★')

        this.settlementDeck = this.questsDeck
            .filter((card) => card.type === 'settlement' && card.name === '★')

        this.questsDeck = this.questsDeck
            .filter((card) => {
                    return !((card.type === 'settlement' || card.type === 'wasteland') && card.name === '★')
                }
            )


    }
}

export default new CardsController()