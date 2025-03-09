import React from 'react';
import { Link } from 'react-router-dom';

const SortingCard = ({ slug = "", id = 1212, mediaUrl = "", sortingType = "", sortingDesc = "" }) => {
    return (
        <Link
            to={`/sorting/${slug}`}
            className="w-96 h-auto flex flex-col rounded-lg cursor-pointer bg-neutral-800 transition-all duration-300 ease-in-out hover:shadow-md hover:shadow-gray-300"
        >
            <div
                key={id}
                className="w-96 h-auto flex flex-col justify-center rounded-md py-4 px-5 transition-all duration-300 ease-in-out"
            >
                {mediaUrl.endsWith('.mp4') ? (
                    <video
                        src={mediaUrl}
                        autoPlay
                        loop
                        className="w-full h-52 object-cover rounded-md"
                        playbackRate={1.5}
                    />
                ) : (
                    <img
                        src={mediaUrl}
                        alt={sortingType}
                        className="w-full h-52 object-cover rounded-md"
                    />
                )}
                <h2 className="text-2xl font-semibold my-2 text-white">{sortingType}</h2>
                <p className="text-base tracking-wide text-neutral-400 font-medium">{sortingDesc}</p>
            </div>
        </Link>
    );
};

export default SortingCard;
