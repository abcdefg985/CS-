// Example data
const matches = [
    { round: 1, team1: 'Stealth Hunters', team2: 'Railgun', date: '2024-07-8', time: '20:00', logo1: 'img/stealth_hunters.png', logo2: 'img/railgun.png' },
    { round: 1, team1: 'Railgun', team2: 'DMAer', date: '2024-07-8', time: '20:00', logo1: 'img/railgun.png', logo2: 'img/dmaer.png' },
    { round: 2, team1: 'Stealth Hunters', team2: 'DMG', date: '2024-07-8', time: '20:00', logo1: 'img/stealth_hunters.png', logo2: 'img/dmg.png' },
    { round: 2, team1: 'DMG', team2: 'DMAer', date: '2024-07-8', time: '20:00', logo1: 'img/dmg.png', logo2: 'img/dmaer.png' },
    { round: 3, team1: 'ROKE', team2: 'SKZAA', date: '2024-07-8', time: '20:00', logo1: 'img/roke.png', logo2: 'img/skzaa.png' }
];

const teams = ['Stealth Hunters', 'Railgun', 'DMAer', 'DMG', 'ROKE', 'SKZAA'];

// Function to create match elements
function createMatchElement(match) {
    const matchElement = document.createElement('div');
    matchElement.className = 'match';

    const team1Element = document.createElement('div');
    team1Element.className = 'team';
    team1Element.innerHTML = `<img src="${match.logo1}" alt="${match.team1} Logo"> ${match.team1}`;

    const team2Element = document.createElement('div');
    team2Element.className = 'team';
    team2Element.innerHTML = `<img src="${match.logo2}" alt="${match.team2} Logo"> ${match.team2}`;

    const dateElement = document.createElement('div');
    dateElement.className = 'date';
    dateElement.textContent = `${match.date} ${match.time}`;

    matchElement.appendChild(team1Element);
    matchElement.appendChild(team2Element);
    matchElement.appendChild(dateElement);

    return matchElement;
}

// Function to populate bracket
function populateBracket(matches) {
    const bracket = document.querySelector('.bracket');

    const rounds = [...new Set(matches.map(match => match.round))];

    rounds.forEach(round => {
        const roundElement = document.createElement('div');
        roundElement.className = 'round';

        const roundMatches = matches.filter(match => match.round === round);
        roundMatches.forEach(match => {
            const matchElement = createMatchElement(match);
            roundElement.appendChild(matchElement);
        });

        bracket.appendChild(roundElement);
    });
}

// Populate bracket with match data
document.addEventListener('DOMContentLoaded', () => {
    populateBracket(matches);
});
