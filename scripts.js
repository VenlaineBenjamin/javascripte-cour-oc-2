// Create variables here
// =========================================

const episodeTitle = "Doctor Who";
const episodeDuration = 50;
const hasBeenWatched = true;

// =========================================

document.querySelector('#episode-info').innerText = `Episode: ${episodeTitle}
Duration: ${episodeDuration} min
${hasBeenWatched ? 'Already watched' : 'Not yet watched'}`