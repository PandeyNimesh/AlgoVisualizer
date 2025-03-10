import React, { useRef, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import data from "../data.json";
import Loader from '../components/Loader';
import NotFound from './NotFound';

const SortingPage = () => {
    const { slug } = useParams();
    const dataRef = useRef({});
    const [loading, setLoading] = useState(true);
    const [notFound, setNotFound] = useState(false);
    const [userInputArray, setUserInputArray] = useState([]);
    const [array, setArray] = useState([]);
    const [userInuptArray, setUserInuptArray] = useState('');
    const [speed, setSpeed] = useState(100);
    const [isSorting, setIsSorting] = useState(false);
    const [selectedSorting, setSelectedSorting] = useState('');

    useEffect(() => {
        if (!slug.trim()) {
            setNotFound(true);
            setLoading(false);
        } else {
            const foundData = data.linear_datastructure.find((item) => item.slug === slug)
                || data.nonlinear_datastructure.find((item) => item.slug === slug);

            if (foundData) {
                dataRef.current = foundData;
                setNotFound(false);
            } else {
                setNotFound(true);
            }
            setLoading(false);
        }
    }, [slug]);

    if (loading) return <Loader />;
    if (notFound) return <NotFound />;

    return (
        <div className="flex flex-col items-center min-h-screen w-full text-center px-6 ">
            <div className='w-2/3 min-h-96 bg-neutral-800 p-2 rounded-md shaodw-lg my-4 flex flex-col items-center'>
                <h2 className="text-4xl font-extrabold text-white pt-12 my-4">{dataRef.current?.sortingType}</h2>
                <p className="text-lg text-gray-300 max-w-2xl leading-relaxed">
                    {dataRef.current?.sortingDesc}
                </p>
                <div className="flex flex-row w-full border-2 border-white">
                    <input type="text" value={userInputArray} onChange={(e) => setUserInputArray(e.target.value)} className="neumorphic-input" placeholder="Enter your Array between 1-500" />
                    <div className="info-icon-wrapper">
                        <i className="info-icon">i</i>
                        <span className="tooltip-text">Provide your array by comma separated integer</span>
                    </div>
                    <button className='neu-button' onClick={handleNewArrayGenrate}>Generate New Array</button>
                    <button className="neu-button" onClick={reSet} >
                        Reset
                    </button>
                    <select className='neumorphism-dropdown' value={selectedSorting} onChange={handleSorting}>
                        <option value=''>Select Sorting</option>
                        <option value='bubbleSort'>Bubble Sorting</option>
                        <option value="mergeSort">Merge Sort</option>
                        <option value="selectionSort">SelectionSort Sort</option>
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
            </div>
        </div>
    );
};

export default SortingPage;
