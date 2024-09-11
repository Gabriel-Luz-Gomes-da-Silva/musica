const songs = [
    { title: "Coca-cola", src: "Musicas/7 Minutoz - Coca-cola.mp3" },
    { title: "Rap do Capitão América", src: "Musicas/7 Minutoz - Rap do Capitão América_ O Primeiro Vingador (NERD HITS).mp3" },
    { title: "Rap da Diane", src: "Musicas/7 Minutoz - Rap da Diane_ O Pecado da Inveja (NERD HITS).mp3" },
    { title: "Rap do Barba Branca", src: "Musicas/WLO - O Homem Mais Forte do Mundo [ One Piece  Barba Branca ] Prod. WB.mp3" },
    { title: "Tipo Gogeta 2 ULTRAEGO", src: "Musicas/Tipo Gogeta 2  ULTRAEGO  - Ft. PTKZIN (Dragon Ball)  Prod. Sid  MHRAP.mp3" },
    { title: "Rap do Moisés", src: "Musicas/Moisés (Êxodo)  O Príncipe do Egito  Henrique Mendonça.mp3" },
    { title: "Guerra em Wano", src: "Musicas/WLO - Guerra em Wano [ One Piece ] Prod. WB.mp3" },
    { title: "Rap do Katakuri", src: "Musicas/Mochi Mochi _ Katakuri (One Piece) _ Enygma_KnK3psvnV5g.mp3" },
    { title: "Rap da Hinata", src: "Musicas/7 Minutoz - Rap da Hinata_ Se For por Você... (NERD HITS).mp3" },
    { title: "Rap do Ban", src: "Musicas/7 Minutoz - Rap do Ban_ O Pecado da Ganância.mp3" },
    { title: "Rap dos Coringas", src: "Musicas/7 Minutoz  - Rap dos Coringas_ Circo dos Horrores (NERD HITS).mp3" },
    { title: "Rap do Gaara", src: "Musicas/7 Minutoz - Rap do Gaara_ Acho Que Eu Sou um Monstro... (NERD HITS).mp3" },
    { title: "Rap do Deadpool", src: "Musicas/7 Minutoz - Rap do Deadpool_ O Mercenário Tagarela (NERD HITS).mp3" },
    { title: "Vibe Denji", src: "Musicas/Vibe Denji  (Chainsaw Man) Prod. Sidney Scaccio  MHRAP.mp3" },
    { title: "Rap do Doutor Estranho", src: "Musicas/7 Minutoz - Rap do Doutor Estranho_ Mago Supremo do Universo (NERD HITS).mp3" },
    { title: "Rap do Homem de Ferro", src: "Musicas/7 Minutoz - Rap do Homem de Ferro_ I Am Iron Man (NERD HITS).mp3" },
    { title: "Rap do Homem-Aranha", src: "Musicas/7 Minutoz - Rap do Homem-Aranha_ Eu Tô de Volta ao Lar (NERD HITS).mp3" },
    { title: "Rap do Homem-Aranha, Flash e Batman", src: "Musicas/7 Minutoz - Rap do Homem-Aranha, Flash e Batman_ Momentos Com Quem Se Foi.mp3" },
    { title: "Rap do Hulk", src: "Musicas/7 Minutoz - Rap do Hulk_ Tô Sempre Com Raiva (NERD HITS).mp3" },
    { title: "Rap do Naruto", src: "Musicas/7 Minutoz - Rap do Naruto_ O Demônio Dentro de Mim.mp3" },
    { title: "Rap do Escanor", src: "Musicas/7 Minutoz - Rap do Escanor_ Orgulhoso Como um Leão.mp3" },
    { title: "Rap do Jiraiya", src: "Musicas/7 Minutoz - Rap do Jiraiya_ O Conto de um Ninja Destemido (NERD HITS).mp3" },
    { title: "Rap do Kakashi", src: "Musicas/7 Minutoz - Rap do Kakashi_ Aquele Que Copia os 1.000 Jutsus (NERD HITS).mp3" },
    { title: "Rap do King", src: "Musicas/7 Minutoz - Rap do King_ Rei das Fadas.mp3" },
    { title: "Shibuya", src: "Musicas/Shibuya  Jujutsu Kaisen  ESPECIAL URT.mp3" },
    { title: "Rap do Mitsuya", src: "Musicas/Mitsuya  Dragão Gêmeo  AniRap.mp3" },
    { title: "Lunáticos", src: "Musicas/Lunáticos  Pernalonga e Pica-Pau  Papyrus Da Batata.mp3" },
    { title: "Rap do Madara", src: "Musicas/7 Minutoz - Rap do Madara_ Me Tornei um Deus (NERD HITS).mp3" },
    { title: "Rap do Minato", src: "Musicas/7 Minutoz - Rap do Minato_ O Dever de um Pai (NERD HITS).mp3" },
    { title: "Rap do Venom", src: "Musicas/7 Minutoz - Rap do Venom_ Nós Somos Venom (NERD HITS).mp3" },
    { title: "Rap do Madara", src: "Musicas/7 Minutoz - Rap do Madara, Pain e Orochimaru_ O Quanto Eu Posso Ser Cruel.mp3" },
    { title: "Rap do Sasuke", src: "Musicas/7 Minutoz - Rap do Sasuke_ Maldição do Ódio (Nerd Hits).mp3" },
    { title: "Rap do Meliodas, Ban e Escanor", src: "Musicas/7 Minutoz - Rap do Meliodas, Ban e Escanor_ O Pecado Mais Forte (NERD HITS).mp3" },
    { title: "Gear 5", src: "Musicas/Gear 5  Luffy Pt. 3 (One Piece)  Basara.mp3" },
    { title: "Rap do Meliodas", src: "Musicas/7 Minutoz - Rap do Meliodas_ Eu Sou o Capitão.mp3" },
    { title: "Rap do Maito Gai", src: "Musicas/7 Minutoz - Rap do Maito Gai_ O Ninja Mais Forte (NERD HITS).mp3" },
    { title: "Rap do Gowther", src: "Musicas/7 Minutoz - Rap do Gowther_ Eu Não Tenho Coração (NERD HITS).mp3" },
    { title: "Rap do Kratos, Meliodas e Naruto", src: "Musicas/7 Minutoz - Rap do Kratos, Meliodas e Naruto_ O Poder da Minha Ira (NERD HITS).mp3" },
    { title: "Terror em Londres", src: "Musicas/Terror em Londres _ Jack, o Estripador (Shuumatsu no Valkyrie) _ Enygma_cPOjZwsus2Y.mp3" },
    { title: "Olhos Vendados", src: "Musicas/Olhos Vendados  Gojo e Qin Shi Huang  AniRap e VMZ.mp3" },
    { title: "Lideres", src: "Musicas/Lideres  Tokyo Revengers  ESPECIAL 800K  URT.mp3" },
    { title: "Rap do Katakuri 2", src: "Musicas/Katakuri  Futuro no Olhar  AniRap (Prod Hunter).mp3" },
    { title: "Rap do Itadori & Todo", src: "Musicas/Itadori & Todo (Jujutsu Kaisen) - My Brother _ M4rkim ft. @KaitoOFC_pbPqe6doxhk.mp3" },
    { title: "A Vontade do Fogo", src: "Musicas/A Vontade do Fogo  Naruto (Clássico)  Basara.mp3" },
    { title: "A Lenda Não Morrerá", src: "Musicas/A Lenda Não Morrerá  Gato de Botas 2  Papyrus Da Batata.mp3" },
    { title: "Rap do Obito", src: "Musicas/7 Minutoz - Rap do Obito_ Mais Ninguém Vai Sofrer o Que Eu Sofri (NERD HITS).mp3" }
];

let currentSongIndex = 0;
let isPlaying = false;

const audioPlayer = document.getElementById('audioPlayer');
const playPauseBtn = document.getElementById('playPauseBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const songList = document.getElementById('songList').getElementsByTagName('li');
const playlist = document.getElementById('playlist');
const togglePlaylistBtn = document.getElementById('togglePlaylist');

function loadSong(index) {
    currentSongIndex = index; // Atualiza o índice da música atual
    audioPlayer.src = songs[index].src;
    audioPlayer.play();
    playPauseBtn.textContent = '⏸ Pause';
    isPlaying = true;
}

function playPauseSong() {
    if (isPlaying) {
        audioPlayer.pause();
        playPauseBtn.textContent = '▶️ Play';
    } else {
        audioPlayer.play();
        playPauseBtn.textContent = '⏸ Pause';
    }
    isPlaying = !isPlaying;
}

function prevSong() {
    currentSongIndex = (currentSongIndex > 0) ? currentSongIndex - 1 : songs.length - 1;
    loadSong(currentSongIndex);
}

function nextSong() {
    currentSongIndex = (currentSongIndex < songs.length - 1) ? currentSongIndex + 1 : 0;
    loadSong(currentSongIndex);
}

function togglePlaylist() {
    playlist.classList.toggle('show');
}

// Evento para passar para a próxima música quando a atual terminar
audioPlayer.addEventListener('ended', nextSong);

playPauseBtn.addEventListener('click', playPauseSong);
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);
togglePlaylistBtn.addEventListener('click', togglePlaylist);

// Adicionar evento aos itens da playlist
Array.from(songList).forEach((songItem, index) => {
    songItem.addEventListener('click', () => {
        loadSong(index); // Carregar a música selecionada na playlist
    });
});

// Inicializar a primeira música
loadSong(currentSongIndex);