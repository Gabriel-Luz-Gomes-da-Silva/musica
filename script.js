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
    { title: "Rap do Sasuke", src: "Musicas/7 Minutoz - Rap do Sasuke_ Maldição do Ódio (Nerd Hits).mp3" },
    { title: "Rap do Meliodas, Ban e Escanor", src: "Musicas/7 Minutoz - Rap do Meliodas, Ban e Escanor_ O Pecado Mais Forte (NERD HITS).mp3" },
    { title: "Gear 5", src: "Musicas/Gear 5  Luffy Pt. 3 (One Piece)  Basara.mp3" },
    { title: "Rap do Meliodas", src: "Musicas/7 Minutoz - Rap do Meliodas_ Eu Sou o Capitão.mp3" },
    { title: "Rap do Maito Gai", src: "Musicas/7 Minutoz - Rap do Maito Gai_ O Ninja Mais Forte (NERD HITS).mp3" },
    { title: "Rap do Doflamingo", src: "Musicas/Rap do Doflamingo (One Piece)   UM REI  NERD HITS-55990781cfeffe31b3d8cee3c6d2aa7b.mp3" },
    { title: "Rap do Coringa, Arlequina, Hisoka e Pennywise", src: "Musicas/Rap do Coringa, Arlequina, Hisoka e Pennywise   CIRCO DOS HORRORES 2  NERD HITS-1efce1634b7e60e3d0c4f16477d7c0d1.mp3" },
    { title: "Terror em Londres", src: "Musicas/Terror em Londres _ Jack, o Estripador (Shuumatsu no Valkyrie) _ Enygma_cPOjZwsus2Y.mp3" },
    { title: "Olhos Vendados", src: "Musicas/Olhos Vendados  Gojo e Qin Shi Huang  AniRap e VMZ.mp3" },
    { title: "Lideres", src: "Musicas/Lideres  Tokyo Revengers  ESPECIAL 800K  URT.mp3" },
    { title: "Rap do Katakuri 2", src: "Musicas/Katakuri  Futuro no Olhar  AniRap (Prod Hunter).mp3" },
    { title: "Rap do Itadori & Todo", src: "Musicas/Itadori & Todo (Jujutsu Kaisen) - My Brother _ M4rkim ft. @KaitoOFC_pbPqe6doxhk.mp3" },
    { title: "A Vontade do Fogo", src: "Musicas/A Vontade do Fogo  Naruto (Clássico)  Basara.mp3" },
    { title: "A Lenda Não Morrerá", src: "Musicas/A Lenda Não Morrerá  Gato de Botas 2  Papyrus Da Batata.mp3" },
    { title: "Rap do Obito", src: "Musicas/7 Minutoz - Rap do Obito_ Mais Ninguém Vai Sofrer o Que Eu Sofri (NERD HITS).mp3" },
    { title: "Rap do Rock Lee", src: "Musicas/7 Minutoz - Rap do Rock Lee_ A Força da Motivação (NERD HITS).mp3" },
    { title: "O Iluminado", src: "Musicas/TAKERU - O Iluminado [Buda  Shuumatsu no Valkyrie (Record of Ragnarok)].mp3" },
    { title: "Rap do Sanji", src: "Musicas/Rap do Sanji (One Piece)   APENAS UM TRAGO  NERD HITS-6533f135d743ff735a17a2658d41370c.mp3" },
    { title: "Rap do Kakashi, Naruto, Sasuke e Sakura", src: "Musicas/Rap do Kakashi, Naruto, Sasuke e Sakura   TIME 7  NERD HITS-a3130bd7cac8c22643cb6e59c8e0cf4e.mp3" },
    { title: "Rap do Ace", src: "Musicas/Rap do Ace (One Piece)   PUNHOS DE FOGO  NERD HITS-104f5dfc460e87402a612b4b6003c64a.mp3" },
    { title: "Rap do Asta", src: "Musicas/Rap do Asta (Black Clover)   EU VOU SER O REI MAGO  NERD HITS-02a3dce46add7ba3a545a5f6239c9d55.mp3" },
    { title: "AKUMA NO MI", src: "Musicas/Lucas A.R.T.   AKUMA NO MI [Prod. LionRiddims]-ff342d700a407821282e1ef4be1e2907.mp3" },
    { title: "UCHIHA", src: "Musicas/Lucas A.R.T.   UCHIHA [Prod. Jurrivh]-cb89ebcd62d3512c3be738d671d55af9.mp3" },
    { title: "KAKASHI", src: "Musicas/KAKASHI   Pedro Alvez, Lucas A.R.T. e Gabriel Rodrigues [Prod. Zero]-7e6124e04b17e796b04ca18c5b395f5a.mp3" },
    { title: "DEATH NOTE", src: "Musicas/DEATH NOTE   Gabriel Rodrigues, Pablo Matheuz e Lucas A.R.T. [Prod. 808 Ander]-c2e878e629c34336db79710f3e04c540.mp3" },
    { title: "Rap do Deadpool e Wolverine", src: "Musicas/Deadpool e Wolverine   BALAS E GARRAS  7 Minutoz-2d4a7f8fff1a2dccc3bd9286123a5354.mp3" },
    { title: "Rap do Naruto e Kurama", src: "Musicas/Rap do Naruto e Kurama (Boruto)   NOSSO ADEUS...  NERD HITS-a19f7b39dc40d03c465ed303e1db997a.mp3" }
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
const speedUpBtn = document.getElementById('speedUpBtn');
const songTitleElement = document.getElementById('song-title'); // Elemento para exibir o título da música

function loadSong(index) {
    currentSongIndex = index; 
    audioPlayer.src = songs[index].src;
    audioPlayer.play();
    playPauseBtn.textContent = '⏸ ';
    isPlaying = true;
    songTitleElement.textContent = songs[index].title; // Atualiza o título da música
}

function playPauseSong() {
    if (isPlaying) {
        audioPlayer.pause();
        playPauseBtn.textContent = '▶️';
    } else {
        audioPlayer.play();
        playPauseBtn.textContent = '⏸';
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

audioPlayer.addEventListener('ended', nextSong);
playPauseBtn.addEventListener('click', playPauseSong);
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);
togglePlaylistBtn.addEventListener('click', togglePlaylist);

Array.from(songList).forEach((songItem, index) => {
    songItem.addEventListener('click', () => {
        loadSong(index);
    });
});

loadSong(currentSongIndex);

document.getElementById("randomBtn").addEventListener("click", function() {
    const randomIndex = Math.floor(Math.random() * songs.length);
    loadSong(randomIndex);
});

speedUpBtn.addEventListener('mousedown', function() {
    audioPlayer.playbackRate = 2.0;
});

speedUpBtn.addEventListener('mouseup', function() {
    audioPlayer.playbackRate = 1.0;
});

speedUpBtn.addEventListener('touchstart', function() {
    audioPlayer.playbackRate = 2.0;
});

speedUpBtn.addEventListener('touchend', function() {
    audioPlayer.playbackRate = 1.0;
});

const volumeBtn = document.querySelector('.volume-btn');
const volumeSlider = document.querySelector('.volume-control input[type="range"]');
let isMuted = false;

// Função para alternar o estado de volume
function toggleVolume() {
    if (isMuted) {
        audioPlayer.volume = volumeSlider.value / 100; // Restaura o volume
        volumeBtn.textContent = '🔊'; // Ícone de volume
    } else {
        audioPlayer.volume = 0; // Mute
        volumeBtn.textContent = '🔇'; // Ícone de mutado
    }
    isMuted = !isMuted; // Alterna o estado
}

// Configura o controle de volume
function setupVolumeControl() {
    // Evento de clique no botão de volume
    volumeBtn.addEventListener('click', toggleVolume);

    // Define o volume inicial do player
    audioPlayer.volume = volumeSlider.value / 100;

    // Atualiza o volume quando o slider é movido
    volumeSlider.addEventListener('input', (e) => {
        if (!isMuted) {
            audioPlayer.volume = e.target.value / 100; // Atualiza o volume
        }
    });
}

// Chama a função para configurar o controle de volume
setupVolumeControl();

const progressBar = document.getElementById('progressBar');
const timer = document.getElementById('timer');

audioPlayer.addEventListener('timeupdate', () => {
    const { currentTime, duration } = audioPlayer;
    const progress = (currentTime / duration) * 100;
    progressBar.value = progress;

    const currentMinutes = Math.floor(currentTime / 60);
    const currentSeconds = Math.floor(currentTime % 60).toString().padStart(2, '0');
    const durationMinutes = Math.floor(duration / 60);
    const durationSeconds = Math.floor(duration % 60).toString().padStart(2, '0');

    timer.textContent = `${currentMinutes}:${currentSeconds} / ${durationMinutes}:${durationSeconds}`;
});

progressBar.addEventListener('input', () => {
    const newTime = (progressBar.value / 100) * audioPlayer.duration;
    audioPlayer.currentTime = newTime;
});
