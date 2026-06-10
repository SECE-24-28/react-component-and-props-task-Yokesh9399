import {useState} from 'react';
export default function Dice() {
    const [diceValue, setDiceValue] = useState(1);

    function rollDice() {
        const newValue = Math.floor(Math.random() * 6) + 1;
        setDiceValue(newValue);
    }

    return (
        <div>
            <h1>Dice Roller</h1>
            <p>You rolled a {diceValue}</p>
            <button onClick={rollDice}>Roll Dice</button>
        </div>
    );
}