document.addEventListener('DOMContentLoaded', () => {
    loadCharacterData();
    setupEventListeners();
});

function setupEventListeners() {
    document.getElementById('achievements-form').addEventListener('submit', updateCharacterData);
    document.getElementById('timeline-slider').addEventListener('input', handleTimelineChange);
}

function loadCharacterData() {
    fetch('http://localhost:3000/api/characters')
        .then(response => response.json())
        .then(data => updateUIWithCharacterData(data))
        .catch(error => console.error('Error fetching character data:', error));
}

function updateCharacterData(event) {
    event.preventDefault();

    const characterData = {
        name: document.getElementById('edit-character-name').value,
        level: document.getElementById('edit-level').value,
        atlasPoints: document.getElementById('edit-atlas-progress').value,
        // Add other fields as necessary
    };

    fetch('http://localhost:3000/api/updateCharacter', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(characterData),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Update Successful:', data);
        closeEditOverlay();
        loadCharacterData();  // Reload data to reflect changes
    })
    .catch(error => console.error('Error updating character:', error));
}

function handleTimelineChange(event) {
    const timelineValue = event.target.value;
    fetch(`/api/history?time=${timelineValue}`)
        .then(response => response.json())
        .then(data => updateUIWithTimelineData(data))
        .catch(error => console.error('Error fetching timeline data:', error));
}

function updateUIWithCharacterData(data) {
    // Assuming you have divs or other elements to display character data
    const characterNameDiv = document.getElementById('character-name');
    const achievementsDiv = document.getElementById('achievements');

    characterNameDiv.innerHTML = ''; // Clear existing data
    achievementsDiv.innerHTML = '';  // Clear existing data

    data.forEach(character => {
        characterNameDiv.innerHTML += `<p>${character.name}</p>`;
        // Add logic to display achievements and other character info
    });
}

function updateUIWithTimelineData(data) {
    // Implement logic to update UI based on timeline slider changes
    // Example: Adjust podium heights, show/hide achievements, etc.
}

function openEditOverlay(characterData) {
    document.getElementById('edit-character-name').value = characterData.name;
    document.getElementById('edit-level').value = characterData.level;
    document.getElementById('edit-atlas-progress').value = characterData.atlasPoints;

    document.getElementById('checkbox_atziri').checked = characterData.achievements.Atziri;
    document.getElementById('checkbox_shaper').checked = characterData.achievements.Shaper;
    document.getElementById('checkbox_elder').checked = characterData.achievements.Elder;
    document.getElementById('checkbox_sirus').checked = characterData.achievements.Sirus;
    document.getElementById('checkbox_uberatziri').checked = characterData.achievements.UberAtziri;
    document.getElementById('checkbox_ubershaper').checked = characterData.achievements.UberShaper;
    document.getElementById('checkbox_uberelder').checked = characterData.achievements.UberElder;
    document.getElementById('checkbox_superlab').checked = characterData.achievements.SuperLab;
    document.getElementById('checkbox_maven').checked = characterData.achievements.Maven;
    document.getElementById('checkbox_ubermaven').checked = characterData.achievements.UberMaven;
    document.getElementById('checkbox_searingexarch').checked = characterData.achievements.SearingExarch;
    document.getElementById('checkbox_eater').checked = characterData.achievements.EaterOfWorlds;
    document.getElementById('checkbox_theformed').checked = characterData.achievements.MavenInviteTheFormed;
    document.getElementById('checkbox_thetwisted').checked = characterData.achievements.MavenInviteTheTwisted;
    document.getElementById('checkbox_theforgotten').checked = characterData.achievements.MavenInviteTheForgotten;
    document.getElementById('checkbox_thehidden').checked = characterData.achievements.MavenInviteTheHidden;
    document.getElementById('checkbox_elderslayers').checked = characterData.achievements.MavenInviteTheElderslayers;
    document.getElementById('checkbox_thefeared').checked = characterData.achievements.MavenInviteTheFeared;
    
    document.getElementById('edit-overlay').style.display = 'block';
}


function closeEditOverlay() {
    document.getElementById('edit-overlay').style.display = 'none';
    // Reset form fields
    document.getElementById('achievements-form').reset();
}

// Additional helper functions as needed
