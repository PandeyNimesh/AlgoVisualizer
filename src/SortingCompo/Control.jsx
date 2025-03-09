import React from 'react';

function Control({ handleNewArrayGenrate, setSpeed, isSorting, handleSorting, userInuptArray, setUserInuptArray, reSet, selectedSorting }) {

    const handleInputChange = (e) => {
        const value = e.target.value;
        const valuesArray = value.split(',').map(item => item.trim()); // Trim spaces

        if (valuesArray.some(item => isNaN(item) || item === '')) {
            alert('Enter integer values only.');
            return;
        }
        if (valuesArray.some(num => parseInt(num, 10) > 500)) {
            alert('Enter a number less than 500.');
            return;
        }

        setUserInuptArray(value);
    };

    return (
        <div className='controls-container'>
            <div className="input-wrapper">
                <input
                    type="text"
                    value={userInuptArray}
                    onChange={handleInputChange}
                    className="neumorphic-input"
                    placeholder="Enter your Array between 1-500"
                />
                <div className="info-icon-wrapper">
                    <i className="info-icon">i</i>
                    <span className="tooltip-text">Provide your array as comma-separated integers.</span>
                </div>
            </div>

            <button className='neu-button' onClick={handleNewArrayGenrate}>Generate New Array</button>
            <button className="neu-button" onClick={reSet} >Reset</button>

            <select className='neumorphism-dropdown' value={selectedSorting} onChange={handleSorting}>
                <option value=''>Select Sorting</option>
                <option value='bubbleSort'>Bubble Sorting</option>
                <option value="mergeSort">Merge Sort</option>
                <option value="selectionSort">Selection Sort</option>
            </select>

            <label>
                Speed:
                <input
                    type="range"
                    min="10"
                    max="200"
                    className="speedControl"
                    onChange={(e) => setSpeed(200 - e.target.value)}
                    disabled={isSorting}
                />
            </label>
        </div>
    );
}

export default Control;
