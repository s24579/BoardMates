// services/EventDataMockup.js
import React from "react";
import dayjs from "dayjs";

const placeHolder = "./assets/map.png"                                      // placeholders and mock-ups
const placeScription = "Justice is a 3 to 5-player, thematic, competitive, tableau-building game set in the same Dwarven society of Odrixia where Factory 42 is set, where players, as members of the Council of Law and Order, determine the guilt of accused criminals. It's a trick-taking game where players utilize won cards strategically to influence the fate of suspects. With hidden scoring objectives, 'Justice' presents a blend of cooperation and rivalry, culminating in a thrilling game lasting approximately 45 - 60 minutes. Immerse yourself in this captivating universe and experience the intricate balance between trick-taking mechanics and strategic decision-making."
const mockDateFrom = dayjs().add(1, "day")
const mockDateTo = dayjs().add(2, "day")

export let eventsData = [
    { 
        id: '1', 
        title: "YEP1", 
        game: 'Monopoly', 
        description: placeScription,
        img: placeHolder,
        location: 'The Board Game Bar', 
        latitude: 1.00000,
        longitude: 1.0000,
        dateFrom: mockDateFrom,
        dateTo: mockDateTo,
    },
    { 
        id: '2', 
        title: "YEP2", 
        game: 'Catan', 
        description: placeScription,
        img: placeHolder,
        location: 'Dicey Tavern', 
        latitude: 2.00000,
        longitude: 2.0000,
        dateFrom: mockDateFrom.add(1, 'day'),
        dateTo: mockDateTo.add(2, 'day'),
    },
    { 
        id: '3', 
        title: "YEP3", 
        game: 'Ticket to Ride', 
        description: placeScription,
        img: placeHolder,
        location: 'Pub of Routes', 
        latitude: 3.00000,
        longitude: 3.0000,
        dateFrom: mockDateFrom.add(2, 'day'),
        dateTo: mockDateTo.add(3, 'day'),
    },
    { 
        id: '4', 
        title: "YEP4", 
        game: 'Scrabble', 
        description: placeScription,
        img: placeHolder,
        location: 'Word Haven', 
        latitude: 4.00000,
        longitude: 4.0000,
        dateFrom: mockDateFrom.add(3, 'day'),
        dateTo: mockDateTo.add(4, 'day'),
    },
    { 
        id: '5', 
        title: "YEP5", 
        game: 'Risk', 
        description: placeScription,
        img: placeHolder,
        location: 'Strategic Spirits', 
        latitude: 5.00000,
        longitude: 5.0000,
        dateFrom: mockDateFrom.add(4, 'day'),
        dateTo: mockDateTo.add(5, 'day'),
    },
    { 
        id: '6', 
        title: "YEP6", 
        game: 'Clue', 
        description: placeScription,
        img: placeHolder,
        location: 'Mystery Pub', 
        latitude: 6.00000,
        longitude: 6.0000,
        dateFrom: mockDateFrom.add(5, 'day'),
        dateTo: mockDateTo.add(6, 'day'),
    },
    { 
        id: '7', 
        title: "YEP7", 
        game: 'Pictionary', 
        description: placeScription,
        img: placeHolder,
        location: 'Artistic Ales', 
        latitude: 7.00000,
        longitude: 7.0000,
        dateFrom: mockDateFrom.add(6, 'day'),
        dateTo: mockDateTo.add(7, 'day').add(1, 'hour'),
    },
    { 
        id: '8', 
        title: "YEP8", 
        game: 'Battleship', 
        description: placeScription,
        img: placeHolder,
        location: 'Naval Nectar', 
        latitude: 8.00000,
        longitude: 8.0000,
        dateFrom: mockDateFrom.add(7, 'day'),
        dateTo: mockDateTo.add(8, 'day').add(1, 'hour'),
    },
    { 
        id: '9', 
        title: "YEP9", 
        game: 'Uno', 
        description: placeScription,
        img: placeHolder,
        location: 'Colorful Cards Club', 
        latitude: 9.00000,
        longitude: 9.0000,
        dateFrom: mockDateFrom.add(8, 'day'),
        dateTo: mockDateTo.add(9, 'day').add(1, 'hour'),
    },
    { 
        id: '10', 
        title: "YEP10", 
        game: 'Ludo', 
        description: placeScription,
        img: placeHolder,
        location: 'Lucky Ludus Lounge', 
        latitude: 10.00000,
        longitude: 10.0000,
        dateFrom: mockDateFrom.add(9, 'day'),
        dateTo: mockDateTo.add(10, 'day').add(2, 'hour'),
    },
    { 
        id: '11', 
        title: "YEP11", 
        game: 'Connect Four', 
        description: placeScription,
        img: placeHolder,
        location: 'FourSquare Pub', 
        latitude: 11.00000,
        longitude: 11.0000,
        dateFrom: mockDateFrom.add(10, 'day').add(2, 'hour'),
        dateTo: mockDateTo.add(11, 'day'),
    },
    { 
        id: '12', 
        title: "YEP12", 
        game: 'Dominoes', 
        description: placeScription,
        img: placeHolder,
        location: 'Domino Domain', 
        latitude: 12.00000,
        longitude: 12.0000,
        dateFrom: mockDateFrom.add(11, 'day').add(2, 'hour'),
        dateTo: mockDateTo.add(12, 'day'),
    },
    { 
        id: '13', 
        title: "YEP13", 
        game: 'Checkers', 
        description: placeScription,
        img: placeHolder,
        location: 'Checkerboard Cheers', 
        latitude: 13.00000,
        longitude: 13.0000,
        dateFrom: mockDateFrom.add(12, 'day').add(3, 'hour'),
        dateTo: mockDateTo.add(13, 'day'),
    },
    { 
        id: '14', 
        title: "YEP14", 
        game: 'Yahtzee', 
        description: placeScription,
        img: placeHolder,
        location: 'Lucky Dice Lounge', 
        latitude: 14.00000,
        longitude: 14.0000,
        dateFrom: mockDateFrom.add(13, 'day').add(3, 'hour'),
        dateTo: mockDateTo.add(14, 'day'),
    },
    { 
        id: '15', 
        title: "YEP15", 
        game: 'Bingo', 
        description: placeScription,
        img: placeHolder,
        location: 'Bingo Bliss Bar', 
        latitude: 15.00000,
        longitude: 15.0000,
        dateFrom: mockDateFrom.add(14, 'day'),
        dateTo: mockDateTo.add(15, 'day'),
    },
]