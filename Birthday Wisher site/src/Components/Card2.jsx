import React from 'react';

export default function Card2({ title, age }) {
    return (
        <div
            className="flex flex-col items-center justify-center border-4 border-black m-4 px-20 py-4 w-96 h-[600px] relative overflow-hidden bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"
        >
            <div className="mb-4  text-center text-3xl font-semibold text-white">
                🎉 Happy Birthday, {title}! 🎂
            </div>

            <p className="text-sm text-white mb-6 text-center">
                Wishing you a fantastic {age}th birthday! May all your dreams and wishes come true.
            </p>
            <div className="flex space-x-3">
                <span className="text-sm font-medium text-white bg-black/20 py-1 px-3 rounded-full">
                    #Celebration
                </span>
                <span className="text-sm font-medium text-white bg-black/20 py-1 px-3 rounded-full">
                    #PartyTime
                </span>
                <span className="text-sm font-medium text-white bg-black/20 py-1 px-3 rounded-full">
                    #MakeAWish
                </span>
            </div>
        </div>
    );
}
