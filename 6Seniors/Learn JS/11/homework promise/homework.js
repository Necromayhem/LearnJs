// Promise practice

// 1)
// promise1 - запрос видео
const videos = [
    {id: 1, title: "Топ 10 игр 2024"},
    {id: 2, title: "Лучшая битва в Warcraft3"},
    {id: 3, title: "Чем кормить кошек"},
];

// promise2 - запросить описание этого видео

const description = {
    id: 1,
    title: "Топ 10 игр 2024",
    hashTags: ['игры', '2024'],
    authorId: 55,
};

// promise3 - в описании указан автор, нужно запросить информацию по нему

const author = {
    id: 55,
    name: 'какие-то уроки',
    videoIds: [1, 2, 3],
    shortIds: [10, 15, 33],
};

// promise4 - пытаемся получить шортс автора

const shortId = author.shortIds[1];

// сначала через callback(для понимания):

// запрос видео

function getVideos(callback) {
    setTimeout(() => {
        const videos = [
            {id: 1, title: "Топ 10 игр 2024"},
            {id: 2, title: "Лучшая битва в Warcraft3"},
            {id: 3, title: "Чем кормить кошек"},
        ];
        callback(videos);
    }, 1000);
}

function getVideoDescription(videoId, callback) {
    setTimeout(() => {
        const description = {
            id: videoId,
            title: "Топ 10 игр 2024",
            hashTags: ['игры', '2024'],
            authorId: 55,
        };
        callback(description);
    }, 1000);
}

function getAuthorInfo(authorId, callback) {
    setTimeout(() => {
        const author = {
            id: authorId,
            name: 'какие-то уроки',
            videoIds: [1, 2, 3],
            shortIds: [10, 15, 33],
        };
        callback(author);
    }, 1000);
}

function getShorts(shortIds, callback) {
    setTimeout(() => {
        const shortId = shortIds[1];
        callback(shortId);
    }, 1000);
}

function run() {
    getVideos(videos => {
        console.log(videos);
        const videoId = videos[0].id; // берем id первого видео
        getVideoDescription(videoId, description => {
            console.log(description);
            const authorId = description.authorId; // получаем authorId
            getAuthorInfo(authorId, author => {
                console.log(author);
                getShorts(author.shortIds, shortId => {
                    console.log(shortId); 
                });
            });
        });
    });
}

// запускаем выполнение
// run();



// чЕРЕЗ ПРОМИСЫ

function fetchVideos(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // fetch(); - имитация запроса
            const videos = [
                {id: 1, title: "Топ 10 игр 2024"},
                {id: 2, title: "Лучшая битва в Warcraft3"},
                {id: 3, title: "Чем кормить кошек"},
            ];
            resolve(videos);
        }, 1000)
    })
}

function fetchVideoDescription(videoId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // fetch();
            const description = {
                id: videoId,
                title: "Топ 10 игр 2024",
                hashTags: ['игры', '2024'],
                authorId: 55,
            };
            resolve(description);
        }, 1000);
    })
}
    
function fetchAuthorInfo(authorId) {
    return new Promise((resolve, reject) => {
        // fetch();
        setTimeout(() => {
            const author = {
                id: authorId,
                name: 'какие-то уроки',
                videoIds: [1, 2, 3],
                shortIds: [10, 15, 33],
            };
            resolve(author);
        }, 1000);
    })
}

function fetchShorts(shortIds) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // fetch();
            const shortId = shortIds[1];
            resolve(shortId);
        }, 1000);
    })
}


fetchVideos()
    .then((videos) => {
        console.log(videos);
        return fetchVideoDescription(videos[0].id);
    })
    .then((videoDescription) => {
        console.log(videoDescription);
        return fetchAuthorInfo(videoDescription.authorId)
    })
    .then((authorInfo) => {
        console.log(authorInfo);
        return fetchShorts(authorInfo.shortIds)
    })
    .then((shortId) => {
        console.log(shortId);
    })
    .catch((err) => {
        console.log(err);
    });

























