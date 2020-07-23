//ALBUM INFO, this object populates the album grid

const albumList = [
	{
		artist: 'Pink Floyd',
		album: 'Dark Side of the Moon',
		description: 'Engineering, Mixing, Production',
		imagePath: '/images/11.jpg',
		spotifyUrl: 'https://open.spotify.com/album/4LH4d3cOWNNsVw41Gqt2kv?si=qNhryR7TSpCsYjgZBq1U5Q',
		youtubeUrl: 'https://www.youtube.com/watch?v=HW-lXjOyUWo&list=OLAK5uy_l1x-JAx0w53suECoCI0YJtW6VB8DBQWRQ',
		bandcampUrl: null,
	},

	{
		artist: 'King Crimson',
		album: 'Red',
		description: 'Production, Instruments, Mixing',
		imagePath: '/images/12.jpg',
		spotifyUrl: 'https://open.spotify.com/album/1cdydhzmDnDjyHw51TYxyy?si=G5eZy-9sQ226oCHi7BKtfQ',
		youtubeUrl: 'https://www.youtube.com/watch?v=NOKFZXXSxaw&list=OLAK5uy_lraXdu0hmdNDBX6v4xbRwS_0oaLz8n0K8',
		bandcampUrl: 'https://www.google.com',
	},

	{
		artist: 'King Crimson',
		album: 'In The Court of the Crimson King',
		description: 'Production, Instruments, Mixing',
		imagePath: '/images/13.jpg',
		spotifyUrl: 'https://open.spotify.com/album/1cdydhzmDnDjyHw51TYxyy?si=G5eZy-9sQ226oCHi7BKtfQ',
		youtubeUrl: 'https://www.youtube.com/watch?v=NOKFZXXSxaw&list=OLAK5uy_lraXdu0hmdNDBX6v4xbRwS_0oaLz8n0K8',
		bandcampUrl: 'https://www.google.com',
	},
	{
		artist: 'Radiohead',
		album: 'Ok Computer',
		description: 'Production, Instruments, Mixing',
		imagePath: '/images/14.jpg',
		spotifyUrl: 'https://open.spotify.com/album/1cdydhzmDnDjyHw51TYxyy?si=G5eZy-9sQ226oCHi7BKtfQ',
		youtubeUrl: null,
		bandcampUrl: 'https://www.google.com',
	},

	{
		artist: 'Eliran Motiuk',
		album: 'Shanti Ocean',
		description: 'Production, Instruments, Mixing',
		imagePath: '/images/15.png',
		spotifyUrl: 'https://open.spotify.com/album/1cdydhzmDnDjyHw51TYxyy?si=G5eZy-9sQ226oCHi7BKtfQ',
		youtubeUrl: 'https://www.youtube.com/watch?v=NOKFZXXSxaw&list=OLAK5uy_lraXdu0hmdNDBX6v4xbRwS_0oaLz8n0K8',
		bandcampUrl: 'https://www.google.com',
	},

	{
		artist: 'Nadav Hodhea',
		album: 'In Between',
		description: 'Artist ,Engineering, Mixing, Production',
		imagePath: '/images/17.png',
		spotifyUrl: 'https://open.spotify.com/album/1cdydhzmDnDjyHw51TYxyy?si=G5eZy-9sQ226oCHi7BKtfQ',
		youtubeUrl: 'https://www.youtube.com/watch?v=NOKFZXXSxaw&list=OLAK5uy_lraXdu0hmdNDBX6v4xbRwS_0oaLz8n0K8',
		bandcampUrl: 'https://www.google.com',
	},

	{
		artist: 'Private Men',
		album: 'Title',
		description: 'Production, Instruments, Mixing',
		imagePath: '/images/18.png',
		spotifyUrl: 'https://open.spotify.com/album/1cdydhzmDnDjyHw51TYxyy?si=G5eZy-9sQ226oCHi7BKtfQ',
		youtubeUrl: 'https://www.youtube.com/watch?v=NOKFZXXSxaw&list=OLAK5uy_lraXdu0hmdNDBX6v4xbRwS_0oaLz8n0K8',
		bandcampUrl: 'https://www.google.com',
	},
	{
		artist: 'Jango Ferraro',
		album: 'Title',
		description: 'Production, Instruments, Mixing',
		imagePath: '/images/19.png',
		spotifyUrl: 'https://open.spotify.com/album/1cdydhzmDnDjyHw51TYxyy?si=G5eZy-9sQ226oCHi7BKtfQ',
		youtubeUrl: 'https://www.youtube.com/watch?v=NOKFZXXSxaw&list=OLAK5uy_lraXdu0hmdNDBX6v4xbRwS_0oaLz8n0K8',
		bandcampUrl: 'https://www.google.com',
	},

	{
		artist: 'The Moody Blues',
		album: 'Days of future passed',
		description: 'Mixing',
		imagePath: '/images/20.jpg',
		spotifyUrl: 'https://open.spotify.com/album/1cdydhzmDnDjyHw51TYxyy?si=G5eZy-9sQ226oCHi7BKtfQ',
		youtubeUrl: 'https://www.youtube.com/watch?v=NOKFZXXSxaw&list=OLAK5uy_lraXdu0hmdNDBX6v4xbRwS_0oaLz8n0K8',
		bandcampUrl: 'https://www.google.com',
	},
	{
		artist: 'Roee Lavan',
		album: 'Give it Back (single)',
		description: 'Mixing, Production, Engineering',
		imagePath: '/images/21.jpeg',
		spotifyUrl: 'https://open.spotify.com/album/1cdydhzmDnDjyHw51TYxyy?si=G5eZy-9sQ226oCHi7BKtfQ',
		youtubeUrl: 'https://www.youtube.com/watch?v=NOKFZXXSxaw&list=OLAK5uy_lraXdu0hmdNDBX6v4xbRwS_0oaLz8n0K8',
		bandcampUrl: 'https://www.google.com',
	},
	{
		artist: 'J-Cole',
		album: 'Money$$',
		description: 'Mixing',
		imagePath: '/images/22.jpg',
		spotifyUrl: 'https://open.spotify.com/album/1cdydhzmDnDjyHw51TYxyy?si=G5eZy-9sQ226oCHi7BKtfQ',
		youtubeUrl: 'https://www.youtube.com/watch?v=NOKFZXXSxaw&list=OLAK5uy_lraXdu0hmdNDBX6v4xbRwS_0oaLz8n0K8',
		bandcampUrl: 'https://www.google.com',
	},

	{
		artist: 'Frank Ocean',
		album: 'Blond',
		description: 'Recording, Production',
		imagePath: '/images/23.jpg',
		spotifyUrl: 'https://open.spotify.com/album/1cdydhzmDnDjyHw51TYxyy?si=G5eZy-9sQ226oCHi7BKtfQ',
		youtubeUrl: 'https://www.youtube.com/watch?v=NOKFZXXSxaw&list=OLAK5uy_lraXdu0hmdNDBX6v4xbRwS_0oaLz8n0K8',
		bandcampUrl: 'https://www.google.com',
	},

	{
		artist: 'Gentle Giant',
		album: 'Debut',
		description: 'Recording, Production',
		imagePath: '/images/24.jpg',
		spotifyUrl: 'https://open.spotify.com/album/1cdydhzmDnDjyHw51TYxyy?si=G5eZy-9sQ226oCHi7BKtfQ',
		youtubeUrl: 'https://www.youtube.com/watch?v=NOKFZXXSxaw&list=OLAK5uy_lraXdu0hmdNDBX6v4xbRwS_0oaLz8n0K8',
		bandcampUrl: 'https://www.google.com',
	},

	{
		artist: 'Generic Rapper',
		album: '$$$$',
		description: 'Recording, Production',
		imagePath: '/images/25.jpg',
		spotifyUrl: 'https://open.spotify.com/album/1cdydhzmDnDjyHw51TYxyy?si=G5eZy-9sQ226oCHi7BKtfQ',
		youtubeUrl: 'https://www.youtube.com/watch?v=NOKFZXXSxaw&list=OLAK5uy_lraXdu0hmdNDBX6v4xbRwS_0oaLz8n0K8',
		bandcampUrl: 'https://www.google.com',
	},
];

export default albumList;
