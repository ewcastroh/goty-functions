# GOTY Functions
GOTY Functions is the Game Of The Year (GOTY) backend using Firebase Functions


## Installation
1. Open `functions` folder
```bash
cd functions
```

2. Install node dependencies
```bash
npm install
```

## Running the app
1. Open `functions` folder
```bash
cd functions
```

2. Run build script in watch mode
```bash
npm run build:watch
```

3. Open a new terminal instance

4. Open `functions` folder
```bash
cd functions
```

5. Run Firebase function
```bash
firebase serve
```

## Endpoints

### HelloWorld
Method: GET
Development URL: http://localhost:5000/goty-chart/us-central1/helloWorld
Production URL: https://us-central1-goty-chart.cloudfunctions.net/helloWorld
Response should look like
```json
{
    "message": "Hello from Firebase Functions!"
}
```

### GetGOTY
Method: GET
Development URL: http://localhost:5000/goty-chart/us-central1/getGOTY
Production URL: https://us-central1-goty-chart.cloudfunctions.net/getGOTY
Response should look like
```json
[
    {
        "name": "Cyberpunk 2077",
        "id": "cyberpunk-2077",
        "url": "https://i.blogs.es/b109e9/cyberpunk2077-johnny-v-rgb_en/1366_2000.jpg",
        "votes": 24
    },
    {
        "name": "Death Stranding",
        "votes": 20,
        "id": "death-stranding",
        "url": "https://dropsdejogos.uai.com.br/wp-content/uploads/sites/10/2022/10/divulgacao-death-stranding-reproducao-1-950x534.jpg"
    },
    {
        "name": "Pokemon Legends Arceus",
        "id": "pokemon-legends-arceus",
        "url": "https://assets-prd.ignimgs.com/2021/11/04/pokmon-legends-arceus-button-fomn-1636006738698.jpg",
        "votes": 36
    },
    {
        "name": "Smash Bros Ultimate",
        "votes": 15,
        "id": "smash-ultimate",
        "url": "https://www.nintendo.com/sg/switch/aaab/img/product.png"
    }
]
```

### GetGOTY-Express
Method: GET
Development URL: http://localhost:5000/goty-chart/us-central1/api/goty
Production URL: https://us-central1-goty-chart.cloudfunctions.net/api/goty
Response should look like
```json
[
    {
        "name": "Cyberpunk 2077",
        "id": "cyberpunk-2077",
        "url": "https://i.blogs.es/b109e9/cyberpunk2077-johnny-v-rgb_en/1366_2000.jpg",
        "votes": 24
    },
    {
        "name": "Death Stranding",
        "votes": 20,
        "id": "death-stranding",
        "url": "https://dropsdejogos.uai.com.br/wp-content/uploads/sites/10/2022/10/divulgacao-death-stranding-reproducao-1-950x534.jpg"
    },
    {
        "name": "Pokemon Legends Arceus",
        "id": "pokemon-legends-arceus",
        "url": "https://assets-prd.ignimgs.com/2021/11/04/pokmon-legends-arceus-button-fomn-1636006738698.jpg",
        "votes": 36
    },
    {
        "name": "Smash Bros Ultimate",
        "votes": 15,
        "id": "smash-ultimate",
        "url": "https://www.nintendo.com/sg/switch/aaab/img/product.png"
    }
]
```

### PostGOTY-Express
Method: GET
Development URL: http://localhost:5000/goty-chart/us-central1/api/goty/pokemon-legends-arceus
Production URL: https://us-central1-goty-chart.cloudfunctions.net/api/goty/pokemon-legends-arceus
Successful Response should look like
```json
{
    "ok": true,
    "message": "Thanks for voting for Pokemon Legends Arceus. New votes: 36"
}
```

Failed Response should look like
```json
{
    "ok": false,
    "message": "Game with ID pokemon-legends-arceus3 not found."
}
```