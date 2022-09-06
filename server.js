const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 8000;

app.use(cors());

const songs = {
    'now': {
        'album': 'Now',
        'release-date': 'September 24, 2016',
        'duration': '2:08',
        'artists': ['Croosh'],
        'video': 'https://www.youtube.com/watch?v=qjI-nregPNg'
    },
    'woah': {
        'album': 'woah',
        'release-date': 'December 9, 2015',
        'duration': '2:35',
        'artists': ['Croosh'],
        'video': 'https://www.youtube.com/watch?v=I6jBWame_ic'
    },
    'down': {
        'album': 'Down (feat. Young L',
        'release-date': 'September 4, 2016',
        'duration': '3:09',
        'artists': ['Croosh', 'Young L'],
        'video': 'https://www.youtube.com/watch?v=5RGX8x3EXcA'
    },
    'vibrations': {
        'album': 'Vibrations',
        'release-date': 'February 13, 2017',
        'duration': '2:53',
        'artists': ['Croosh'],
        'video': 'https://www.youtube.com/watch?v=Vvj7JNXgY78'
    },
    'patiently posted': {
        'album': 'Patiently Posted',
        'release-date': 'February 12, 2016',
        'duration': '2:49',
        'artists': ['Croosh'],
        'video': 'https://www.youtube.com/watch?v=0jAcXX9lG6g'
    },
    'fwu': {
        'album': 'Fwu (feat. Alexya)',
        'release-date': 'March 10, 2016',
        'duration': '3:14',
        'artists': ['Croosh', 'Alexya'],
        'video': 'https://www.youtube.com/watch?v=WdngedaUaFM'
    },
    'gut': {
        'album': 'Gut',
        'release-date': 'November 8, 2016',
        'duration': '2:03',
        'artists': ['Croosh'],
        'video': 'https://www.youtube.com/watch?v=HREfuH3biHQ',
        'producer': ['Steezefield', 'Croosh']
    },
    'only time': {
        'album': 'Only Time',
        'release-date': 'December 24, 2016',
        'duration': '2:27',
        'artists': ['Croosh'],
        'video': 'https://www.youtube.com/watch?v=JgeSfqDRl0o',
        'producer': ['ZayTrackz', 'Croosh']
    },
    'wywd': {
        'album': 'Wywd (feat. Keith Canva$',
        'release-date': 'August 16, 2016',
        'duration': '3:09',
        'artists': ['Croosh', 'Keith Canvas'],
        'video': 'https://www.youtube.com/watch?v=fSAm6SLfOhc'
    },
    'unknown': {
        'album': 'unknown',
        'release-date': 'unknown',
        'duration': 'unknown',
        'artists': 'unknown',
        'video': 'unknown'
    }
};

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html');
});

app.get('/api', (request, response) => {
    response.json(songs);
});

app.get('/api/:song', (request, response) => {
    const songName = request.params.song.toLowerCase();

    if (songs[songName]) {
        response.json(songs[songName]);
    } else {
        response.json(songs['unknown']);
    };
});

app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is now running on port ${PORT}`)
});