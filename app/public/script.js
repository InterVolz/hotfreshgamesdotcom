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
    // Implement logic to update UI with the character data
    // Example: Update character name, achievements, etc.
}

function updateUIWithTimelineData(data) {
    // Implement logic to update UI based on timeline slider changes
    // Example: Adjust podium heights, show/hide achievements, etc.
}

function openEditOverlay() {
    // Logic to open the edit overlay
    // Populate form fields if necessary
}

function closeEditOverlay() {
    // Logic to close the edit overlay
    // Reset form fields if necessary
}

// Additional helper functions as needed
