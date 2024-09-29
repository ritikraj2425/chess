import React from 'react';
import { useNavigate } from "react-router-dom";
import { Shield, Sword, Trophy } from "lucide-react";
import { Button } from '../components/button';

export const Landing = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-black text-white">
            <div className="container mx-auto px-4 py-16">
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-extrabold mb-4">
                        Chess <span className="text-green-400">Game Zone</span>
                    </h1>
                    <p className="text-xl text-gray-400">
                        Where strategy meets peril. Are you ready for the ultimate challenge?
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="space-y-6">
                        <div className="bg-gray-800 p-6 rounded-lg">
                            <h2 className="text-2xl font-bold flex items-center mb-4">
                                <Sword className="mr-2 text-red-500" /> Intense Battles
                            </h2>
                            <p className="text-gray-300">
                                Face off against cunning opponents in heart-pounding matches that will test your strategic prowess.
                            </p>
                        </div>

                        <div className="bg-gray-800 p-6 rounded-lg">
                            <h2 className="text-2xl font-bold flex items-center mb-4">
                                <Shield className="mr-2 text-blue-500" /> Advanced Tactics
                            </h2>
                            <p className="text-gray-300">
                                Master complex strategies and outmaneuver your rivals in high-stakes games.
                            </p>
                        </div>

                        <div className="bg-gray-800 p-6 rounded-lg">
                            <h2 className="text-2xl font-bold flex items-center mb-4">
                                <Trophy className="mr-2 text-yellow-500" /> Rise to Glory
                            </h2>
                            <p className="text-gray-300">
                                Climb the ranks, participate in tournaments, and become a chess legend.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col items-center">
                        <div className="w-96 h-96  rounded-lg mb-8 flex items-center justify-center">
                            <img src='/chessboard.jpeg' alt='chessimg' className='rounded-3xl'></img>
                        </div>
                        <Button
                            onClick={() => navigate("/game")}
                        >
                            Play Now
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};