// 🎵 LYRICS DATABASE
// Add your karaoke songs with lyrics and timing here
// Format: VideoId -> Array of {time (seconds), text (lyrics)}

const lyrics = {
  // Example: Classic OPM
  "dQw4w9WgXcQ": [
    { time: 0, text: "🎵 Never gonna give you up" },
    { time: 3, text: "🎵 Never gonna let you down" },
    { time: 6, text: "🎵 Never gonna run around" },
    { time: 9, text: "🎵 And desert you" },
    { time: 12, text: "🎵 Never gonna make you cry" }
  ],

  "9bZkp7q19f0": [
    { time: 0, text: "🎵 Habang ikaw ay kapiling ko" },
    { time: 3, text: "🎵 Kay saya ng aking mundo" },
    { time: 6, text: "🎵 Ngayon na, ngayon lang" },
    { time: 9, text: "🎵 Habang may liwanag sa ating mundo" },
    { time: 12, text: "🎵 Baguhin ang ating mundo" }
  ],

  "example_video_id": [
    { time: 0, text: "🎵 Verse 1" },
    { time: 3, text: "🎵 Chorus" },
    { time: 6, text: "🎵 Verse 2" }
  ]
};

// Function to add lyrics dynamically (for admin)
function addLyrics(videoId, lyricsArray) {
  lyrics[videoId] = lyricsArray;
  console.log("✅ Lyrics added for video: " + videoId);
}

// Display all available songs
function getAvailableSongs() {
  return Object.keys(lyrics).map(videoId => {
    return {
      videoId: videoId,
      lyricsCount: lyrics[videoId].length
    };
  });
}

// Get lyrics for a video
function getLyricsForVideo(videoId) {
  return lyrics[videoId] || null;
}

console.log("🎵 Lyrics loaded. Available songs: " + Object.keys(lyrics).length);
