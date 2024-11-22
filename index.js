 * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: Arial, sans-serif;
            background-color: #000000;
            color: white;
        }

        header {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 10px 20px;
            background-color: #121212;
            color: #ffffff;
            gap: 20px;
        }

        .menu-button {
            background-color: #121212;
            color: #ccc;
            border: none;
            border-radius: 10px;
            cursor: pointer;
            font-size: 1em;
            transition: 0.2s;
        }

        .menu-button:hover {
            background-color: #333;
            border-radius: 10px;
            padding: 10px;
            color: #f5c518;
        }

        .menu-button:active {
            transform: scale(0.9);
        }

        .logo img {
            width: 60px;
        }

        .search-bar {
            display: flex;
            align-items: center;
            max-width: 600px;
            width: 100%;
            background-color: #222;
            border: 1px solid #333;
            padding: 5px;
            border-radius: 4px;
            gap: 10px;
        }

        main {
            padding: 20px;
        }

        .movie-list {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
            justify-content: center;
        }

        .movie-card {
            background-color: #222;
            border: 1px solid #333;
            border-radius: 8px;
            width: 200px;
            overflow: hidden;
            text-align: center;
            transition: transform 0.3s, background-color 0.3s;
        }

        .movie-card img {
            width: 100%;
            height: 300px;
            object-fit: cover;
        }

        .movie-card h3 {
            margin: 10px 0;
            font-size: 1.2em;
            color: #f5c518;
        }

        .movie-card:hover {
            transform: scale(1.05);
            background-color: #333;
        }
