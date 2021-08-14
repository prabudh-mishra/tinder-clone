import React, { useEffect, useState } from 'react'
import axios from '../../axios'
import TinderCard from 'react-tinder-card'

import './TinderCards.css'

const TinderCards = () => {
    const [people, setPeople] = useState([])

    useEffect(() => {
        async function fetchData() {
            const res = await axios.get('/tinder/cards')

            setPeople(res.data)
        }

        fetchData()
    }, [])

    console.log(people);
    const swiped = (direction, nameToDelete) => {
        console.log('removing: ', nameToDelete);
        // setLastDirection(direction);
    }

    const outOfFrame = (name) => {
        console.log(name + "left the screen");
    }

    return (
        <div className="tinderCards">
            <div className="tinderCards__cardContainer">
                {people.map(person => (
                    <TinderCard
                        className="swipe"
                        key={person.name}
                        preventSwipe={['up', 'down']}
                        onSwipe={dir => swiped(dir, person.name)}
                        onCardLeftScreen={() => outOfFrame(person.name)}
                    >

                        <div className="card" style={{ background: `url(${person.imgUrl}) no-repeat`, backgroundSize: '100%' }}>
                            <h3>{person.name}</h3>
                        </div>

                    </TinderCard>
                ))}
            </div>
        </div>
    )
}

export default TinderCards
