const songs = [
    { title: "Coca Cola", src: "Musicas/7 Minutoz - Coca-cola.mp3" },
    { title: "Primeiro Vingador", src: "Musicas/7 Minutoz - Rap do Capitão América_ O Primeiro Vingador (NERD HITS).mp3" },
    { title: "Pecado da Inveja", src: "Musicas/7 Minutoz - Rap da Diane_ O Pecado da Inveja (NERD HITS).mp3" },
    { title: "Homem Mais Forte do Mundo", src: "Musicas/WLO - O Homem Mais Forte do Mundo [ One Piece  Barba Branca ] Prod. WB.mp3" },
    { title: "Ultraego", src: "Musicas/Tipo Gogeta 2  ULTRAEGO  - Ft. PTKZIN (Dragon Ball)  Prod. Sid  MHRAP.mp3" },
    { title: "Príncipe do Egito", src: "Musicas/Moisés (Êxodo)  O Príncipe do Egito  Henrique Mendonça.mp3" },
    { title: "Guerra em Wano", src: "Musicas/WLO - Guerra em Wano [ One Piece ] Prod. WB.mp3" },
    { title: "Mochi Mochi", src: "Musicas/Mochi Mochi _ Katakuri (One Piece) _ Enygma_KnK3psvnV5g.mp3" },
    { title: "Se For por Você...", src: "Musicas/7 Minutoz - Rap da Hinata_ Se For por Você... (NERD HITS).mp3" },
    { title: "Pecado da Ganância", src: "Musicas/7 Minutoz - Rap do Ban_ O Pecado da Ganância.mp3" },
    { title: "Coringas", src: "Musicas/7 Minutoz  - Rap dos Coringas_ Circo dos Horrores (NERD HITS).mp3" },
    { title: "Acho Que Eu Sou um Monstro", src: "Musicas/7 Minutoz - Rap do Gaara_ Acho Que Eu Sou um Monstro... (NERD HITS).mp3" },
    { title: "Mercenário Tagarela", src: "Musicas/7 Minutoz - Rap do Deadpool_ O Mercenário Tagarela (NERD HITS).mp3" },
    { title: "Vibe Denji", src: "Musicas/Vibe Denji  (Chainsaw Man) Prod. Sidney Scaccio  MHRAP.mp3" },
    { title: "Mago Supremo", src: "Musicas/7 Minutoz - Rap do Doutor Estranho_ Mago Supremo do Universo (NERD HITS).mp3" },
    { title: " I Am Iron Man", src: "Musicas/7 Minutoz - Rap do Homem de Ferro_ I Am Iron Man (NERD HITS).mp3" },
    { title: "Eu Tô de Volta ao Lar", src: "Musicas/7 Minutoz - Rap do Homem-Aranha_ Eu Tô de Volta ao Lar (NERD HITS).mp3" },
    { title: "Momentos Com Quem Se Foi", src: "Musicas/7 Minutoz - Rap do Homem-Aranha, Flash e Batman_ Momentos Com Quem Se Foi.mp3" },
    { title: "Tô Sempre Com Raiva", src: "Musicas/7 Minutoz - Rap do Hulk_ Tô Sempre Com Raiva (NERD HITS).mp3" },
    { title: "Demônio Dentro de Mim", src: "Musicas/7 Minutoz - Rap do Naruto_ O Demônio Dentro de Mim.mp3" },
    { title: "Orgulhoso Como um Leão", src: "Musicas/7 Minutoz - Rap do Escanor_ Orgulhoso Como um Leão.mp3" },
    { title: "Conto de um Ninja Destemido", src: "Musicas/7 Minutoz - Rap do Jiraiya_ O Conto de um Ninja Destemido (NERD HITS).mp3" },
    { title: "Aquele Que Copia os 1.000 Jutsus", src: "Musicas/7 Minutoz - Rap do Kakashi_ Aquele Que Copia os 1.000 Jutsus (NERD HITS).mp3" },
    { title: "Rei das Fadas", src: "Musicas/7 Minutoz - Rap do King_ Rei das Fadas.mp3" },
    { title: "Shibuya", src: "Musicas/Shibuya  Jujutsu Kaisen  ESPECIAL URT.mp3" },
    { title: "Dragão Gêmeo", src: "Musicas/Mitsuya  Dragão Gêmeo  AniRap.mp3" },
    { title: "Lunáticos", src: "Musicas/Lunáticos  Pernalonga e Pica-Pau  Papyrus Da Batata.mp3" },
    { title: "Me Tornei um Deus", src: "Musicas/7 Minutoz - Rap do Madara_ Me Tornei um Deus (NERD HITS).mp3" },
    { title: "Dever de um Pai", src: "Musicas/7 Minutoz - Rap do Minato_ O Dever de um Pai (NERD HITS).mp3" },
    { title: "Nós Somos Venom", src: "Musicas/7 Minutoz - Rap do Venom_ Nós Somos Venom (NERD HITS).mp3" },
    { title: "Maldição do Ódio", src: "Musicas/7 Minutoz - Rap do Sasuke_ Maldição do Ódio (Nerd Hits).mp3" },
    { title: "Pecado Mais Forte", src: "Musicas/7 Minutoz - Rap do Meliodas, Ban e Escanor_ O Pecado Mais Forte (NERD HITS).mp3" },
    { title: "Gear 5", src: "Musicas/Gear 5  Luffy Pt. 3 (One Piece)  Basara.mp3" },
    { title: "Eu Sou o Capitão", src: "Musicas/7 Minutoz - Rap do Meliodas_ Eu Sou o Capitão.mp3" },
    { title: "Ninja Mais Forte", src: "Musicas/7 Minutoz - Rap do Maito Gai_ O Ninja Mais Forte (NERD HITS).mp3" },
    { title: "Um Rei", src: "Musicas/Rap do Doflamingo (One Piece)   UM REI  NERD HITS-55990781cfeffe31b3d8cee3c6d2aa7b.mp3" },
    { title: "Circo dos Horrores", src: "Musicas/Rap do Coringa, Arlequina, Hisoka e Pennywise   CIRCO DOS HORRORES 2  NERD HITS-1efce1634b7e60e3d0c4f16477d7c0d1.mp3" },
    { title: "Terror em Londres", src: "Musicas/Terror em Londres _ Jack, o Estripador (Shuumatsu no Valkyrie) _ Enygma_cPOjZwsus2Y.mp3" },
    { title: "Olhos Vendados", src: "Musicas/Olhos Vendados  Gojo e Qin Shi Huang  AniRap e VMZ.mp3" },
    { title: "Lideres", src: "Musicas/Lideres  Tokyo Revengers  ESPECIAL 800K  URT.mp3" },
    { title: "Futuro no Olhar", src: "Musicas/Katakuri  Futuro no Olhar  AniRap (Prod Hunter).mp3" },
    { title: "My Brother", src: "Musicas/Itadori & Todo (Jujutsu Kaisen) - My Brother _ M4rkim ft. @KaitoOFC_pbPqe6doxhk.mp3" },
    { title: "Vontade do Fogo", src: "Musicas/A Vontade do Fogo  Naruto (Clássico)  Basara.mp3" },
    { title: "Lenda Não Morrerá", src: "Musicas/A Lenda Não Morrerá  Gato de Botas 2  Papyrus Da Batata.mp3" },
    { title: "Mais Ninguém Vai Sofrer o Que Eu Sofri", src: "Musicas/7 Minutoz - Rap do Obito_ Mais Ninguém Vai Sofrer o Que Eu Sofri (NERD HITS).mp3" },
    { title: "Força da Motivação", src: "Musicas/7 Minutoz - Rap do Rock Lee_ A Força da Motivação (NERD HITS).mp3" },
    { title: "Iluminado", src: "Musicas/TAKERU - O Iluminado [Buda  Shuumatsu no Valkyrie (Record of Ragnarok)].mp3" },
    { title: "Apenas um Trago", src: "Musicas/Rap do Sanji (One Piece)   APENAS UM TRAGO  NERD HITS-6533f135d743ff735a17a2658d41370c.mp3" },
    { title: "Time 7", src: "Musicas/Rap do Kakashi, Naruto, Sasuke e Sakura   TIME 7  NERD HITS-a3130bd7cac8c22643cb6e59c8e0cf4e.mp3" },
    { title: "Punhos de Fogo", src: "Musicas/Rap do Ace (One Piece)   PUNHOS DE FOGO  NERD HITS-104f5dfc460e87402a612b4b6003c64a.mp3" },
    { title: "Eu Vou Ser o Rei Mago", src: "Musicas/Rap do Asta (Black Clover)   EU VOU SER O REI MAGO  NERD HITS-02a3dce46add7ba3a545a5f6239c9d55.mp3" },
    { title: "Akuma no Mi", src: "Musicas/Lucas A.R.T.   AKUMA NO MI [Prod. LionRiddims]-ff342d700a407821282e1ef4be1e2907.mp3" },
    { title: "Uchiha", src: "Musicas/Lucas A.R.T.   UCHIHA [Prod. Jurrivh]-cb89ebcd62d3512c3be738d671d55af9.mp3" },
    { title: "Kakashi", src: "Musicas/KAKASHI   Pedro Alvez, Lucas A.R.T. e Gabriel Rodrigues [Prod. Zero]-7e6124e04b17e796b04ca18c5b395f5a.mp3" },
    { title: "Death Note", src: "Musicas/DEATH NOTE   Gabriel Rodrigues, Pablo Matheuz e Lucas A.R.T. [Prod. 808 Ander]-c2e878e629c34336db79710f3e04c540.mp3" },
    { title: "Balas e Garras", src: "Musicas/Deadpool e Wolverine   BALAS E GARRAS  7 Minutoz-2d4a7f8fff1a2dccc3bd9286123a5354.mp3" },
    { title: "Nosso Adeus...", src: "Musicas/Rap do Naruto e Kurama (Boruto)   NOSSO ADEUS...  NERD HITS-a19f7b39dc40d03c465ed303e1db997a.mp3" },
    { title: "Temari", src: "Musicas/TEMARI   Lucas A.R.T. e Gabriel Rodrigues [Prod. 808 Ander]-25fbc2f6c8926f71fbc9383bb9fcb847.mp3" },
    { title: "Poder da Minha Ira 2", src: "Musicas/Rap do Broly, Kyuubi e Levi   O PODER DA MINHA IRA 2  NERD HITS-922b80532896f574b42502701b829b80.mp3" },
    { title: "Primeiro Amor", src: "Musicas/❤️ Primeiro amor (Minato e Kushina) JRP ft. @Meizy-c39b9a35ab0f1e4cc0ec3bc7559166a2.mp3"},
    { title: "Últimos de Nós", src: "Musicas/Rap do Joel e Ellie (The Last of Us)   OS ÚLTIMOS DE NÓS  NERD HITS-5a88851939a306680539e4fae14d7a57.mp3" },
    { title: "Amores se Acabam", src: "Musicas/Amores se acabam   Hina e Takemichi (Tokyo Revengers)  JRP-2b7252c528ea61fc3e9d873578fc4063.mp3" },
    { title: "Meu Bem é Você", src: "Musicas/Meu bem é você 💔  Obito e Rin  ft. @AnnyTHN  JRP-eb74464b502454c7757dd065a2aa23d0.mp3"},
    { title: "Até o Fim", src: "Musicas/Até o Fim ❤️ Kirito  Asuna (Sword Art Online)  ft. @Meizy  _ JRP-8386be5a54b98ea6a20d9e4a99deacd2.mp3" },
    { title: "Vou Ser um Hokage", src: "Musicas/Vou ser um hokage  Naruto  JRP-a0abfe4d958df0c75b773e0de71f139a.mp3" },
    { title: "Judas", src: "Musicas/7 Minutoz   JUDAS-2ed23c94f19ce1fe1cc0ec7becae976a.mp3" },
    { title: "Cuidarei de Você", src: "Musicas/Cuidarei de Você  Hori  Miyamura (Horimiya) Ft. @IsaCampx  Nickzinn-ca557e9ebea34618cfbd85b4b30c8ae8.mp3"},
    { title: "Tipo Jiraiya", src: "Musicas/Tipo Jiraiya 🐸😈 (Naruto)  Style Trap  Prod. Sidney Scaccio x Johnny Lowd  MHRAP-195e9d5b42a1e3688710f3c5cefb98a0.mp3" },
    { title: "Guerra de Amor", src: "Musicas/Uma Guerra de Amor (Kaguya Sama LOVE IS WAR)  Nickzinn-f8e00a18bda444cf5195431cedb626c7.mp3" },
    { title: "Apenas um Vilão por Diversão", src: "Musicas/SOU APENAS UM VILÃO POR DIVERSÃO   Saitama Rap (Versão Sombria)  Takeru [Prod. 808 Ander]-d7e03728028efcf77f55d3c1247e4a42.mp3" },
    { title: "100 Amigos", src: "Musicas/Quer 100 Amigos (Komi Can_t Communicate)  Nickzinn-142c0ba99b83a13d1ef79284f6043fcc.mp3" },
    { title: "Verdadeiro Rap do Naruto", src: "Musicas/O VERDADEIRO RAP DO NARUTO (+18)  Takeru-40da174161cc50501416ed4df44e1265.mp3" },
    { title: "Verdadeiro Rap do Ayanokoji", src: "Musicas/O VERDADEIRO RAP DO AYANOKOJI (+18)  Takeru-dd2792e92d5589c69e39f53aae59a0c6.mp3" },
    { title: "Ragnarok", src: "Musicas/RAGNAROK   Shuumatsu no Valkyrie  Takeru  UnionZ-ef033ceb70990860f72b75684c0e3e7e.mp3" },
    { title: "Provocar", src: "Musicas/Provocar (Uzaki chan wa Asobitai!)  Nickzinn-dcec17d5beb7919e90b33c5f49b1d189.mp3" },
    { title: "My Vampire!", src: "Musicas/My Vampire! (Call Of The Night)  Nickzinn-39cd8095031e610c68742bde964a3325.mp3" },
    { title: "Muryo Kusho", src: "Musicas/MURYO KUSHO   Gojo (Jujutsu Kaisen)  Takeru-58d6d5e9e444ccc212bf6909dbd32932.mp3" },
    { title: "Meu Sol", src: "Musicas/Meu Sol (Tenki no Ko)  Nickzinn-c7a9a82d7bbcc3a325914f333de2d272.mp3" },
    { title: "Lótus Negra", src: "Musicas/LÓTUS NEGRA   Rock Lee Rap (Versão Sombria)  Takeru Feat. rAid (Lendários) [Prod. Sidney Scaccio]-cabac846fa3cfec7cda333fc68bed96a.mp3" },
    { title: "Gyutaro", src: "Musicas/GYUTARO 💔  Lua Superior 6  (Demon Slayer) Prod. Sid  MHRAP-1902b853cd0dbc472d3dbc8cbecf6136.mp3" },
    { title: "Hokage da Quebrada", src: "Musicas/HOKAGE DA QUEBRADA   O Verdadeiro Trap do Naruto (+18)  Takeru [Prod. 808 Ander]-4389b77d203fcdf1dc2d18dc2b21fe68.mp3" },
    { title: "Anjo", src: "Musicas/Anjo (Otonari no Tenshi Sama)  Nickzinn-074bcd7172c5d96600ff0dd0b535989d.mp3" },
    { title: "Psicopatia", src: "Musicas/FELÍCIA ROCK   Psicopatia (Anime Mix)  Feat. Takeru  Prod. MK-a98f47794f5e5a299301c97ddaf3de54.mp3" },
    { title: "Escudo da Fúria", src: "Musicas/ESCUDO DA FÚRIA   Takeru [Prod. 808 Ander]-fe7a65db475a55b662c118fcbcd0bb8f.mp3" },
    { title: "Izumi Miyamura", src: "Musicas/RAP do IZUMI MIYAMURA Horimiya feat.@LexClash    TCPunters prod.Ryini-ea1005f95b69cc543e56f4091901c544.mp3" },
    { title: "Deus do Trovão e a Rainha Oni", src: "Musicas/RAP O DEUS DO TROVÃO E A RAINHA ONI (Zenitsu e Nezuko)  Lyric Vídeo  LexClash (Prod Master Pe)-d037e222127eb343aaa3b2ad50f46802.mp3" },
    { title: "Pela sua Memória", src: "Musicas/Night Raid 🩸 (Akame Ga Kill)  PELA SUA MEMÓRIA  LexClash-b3e0f66797fa5bbb3a7db359fc45f10e.mp3" },
    { title: "Lagrimas de Sangue", src: "Musicas/Rap do Saga, Shura e Camus 🩸 (CDZ Saint Seiya)  LAGRIMAS DE SANGUE  LexClash-37ff70f10b352160378ba56eae2ba5f3.mp3" },
    { title: "Maldição", src: "Musicas/Rap Meliodas e Elizabeth 😈😇 (Nanatsu no Taizai)  MALDIÇÃO  LexClash-646faa5336da9e3e526f161c4b1112de.mp3" },
    { title: "Eu me Sinto Livre", src: "Musicas/♪ Akira Tendou 😈📘  Eu Me Sinto Livre (Zom 100 Bucket List of the Dead)  LexClash-36d831fd02904c5f97654de3545ffb09.mp3" },
    { title: "Ela é Muito Louca", src: "Musicas/♪ Ela é Muito Louca (Anime Mix)  8 Loucas 1 Rap  LexClash-774ec72478b94d6c27fb882030814a08.mp3" },
    { title: "Sorrindo Feito Louco", src: "Musicas/Rap do Luck Voltia (Black Clover)  SORRINDO FEITO LOUCO  LexClash-f0a4ee9703afe2a08f46467dcf97b1d6.mp3" },
    { title: "Aqui Rola Magia II", src: "Musicas/♪ Asta e Noelle 💧😈  Aqui Rola Magia II (Black Clover)  LexClash Feat @NathySC-cb400c5b9abac27724f9efc636368265.mp3" },
    { title: "Cavaleiros de Ouro", src: "Musicas/Rap dos Cavaleiros de Ouro 🩸💛 (CDZ Saint Seiya)  ZODÍACO  LexClash-395cb88789623c049ef633bcbb8e3304.mp3" },
    { title: "Somos Diferentes", src: "Musicas/Rap Yami e Charlotte 🖤💙 (Black Clover)  SOMOS DIFERENTES  LexClash FT Hada-dc49141ff2fa53b059d0664fe6e7842f.mp3" },
    { title: "Nunca foi Amor", src: "Musicas/Denji e Makima  NUNCA FOI AMOR (Chainsaw Man)  LexClash-698423d8b4956bef104be965aac8fbb6.mp3" },
    { title: "Parceria", src: "Musicas/Denji e Power  PARCERIA (Chainsaw Man)  LexClash e May Abreu-b38a12aa042e916d011423b697114e7d.mp3" },
    { title: "Cavaleiro da Deusa", src: "Musicas/♪ Seiya e Saori  Cavaleiro da Deusa (Saint Seiya)   LexClash-232d14a432dd86793840f1312a8cc2d9.mp3" },
    { title: "Adeus Cavleiros de Ouro", src: "Musicas/RAP ADEUS CAVALEIROS DE OURO 💔 (CDZ Saint Seiya)  LexClash-1be4bf4550d0954a4128886045958b8d.mp3" },
    { title: "Bela e a Fera", src: "Musicas/Inosuke e Aoi  A BELA E A FERA (Demon Slayer)  LexClash-5b7e4562ae692be3ac4e67ad018342bc.mp3" },
    { title: "Poucas Palavras e Muita Atitude II", src: "Musicas/♪ Tanjiro e Kanao 🌊🦋  Poucas Palavras e Muita Atitude II (Demon Slayer)  LexClash Ft Lylo-9c719efcddf5acf31e415f3327bf54db.mp3" },
    { title: "Muito Esforço e Pouca Sorte", src: "Musicas/Rap do Asta (Black Clover)  MUITO ESFORÇO E POUCA SORTE  TrapFlow   LexClash-92da365a201b461ac790abb0ef0ff4cf.mp3" },
    { title: "Orgulho de Hashira", src: "Musicas/Rap do Obanai e Mitsuri 🐍❤ (Demon Slayer)  ORGULHO DE HASHIRA  LexClash e @lylotris-d848eee4533a12fa0b3f24c150154395.mp3" },
    { title: "Nunca foi Fácil", src: "Musicas/♪ NUNCA FOI FÁCIL  8 Shipps 1 Rap (Anime Mix)  LexClash Feat @FunkeiradeKonoha-8d31521b54c83b88af73a413c5dd8bd5.mp3" },
    { title: "Final Feliz", src: "Musicas/♪ Tomioka e Shinobu 🌊🦋 (Demon Slayer)  FINAL FELIZ  LexClash e @Meizy-8d4fe1cb4e572adce0875cd9cf051907.mp3" },
    { title: "Gula e Orgulho", src: "Musicas/RAP DA MERLIN E ESCANOR (NANATSU NO TAIZAI) FELÍCIA ROCK ft. TAKERU-a61a952a9286d5d7617b97d39c0b77c2.mp3" },
    { title: "Friendzone", src: "Musicas/FRIENDZONE Rap   (ANIME MIX)  FELÍCIA ROCK  [Prod. Rome]-c104fe203973335c403f5bbcc69e55e6.mp3" },
    { title: "Hashira do Amor", src: "Musicas/FELÍCIA ROCK   Hashira do Amor (Mitsuri   Kimetsu no Yaiba)-762c17d1ab6b8de5af55bbd41a8e4a4c.mp3" },
    { title: "Jabami Yumeko", src: "Musicas/O RAP MAIS SE❌❌Y DA JABAMI YUMEKO (Kakegurui)  FELÍCIA ROCK [Prod. Sidney Scaccio]-6fc3032bf627411c8e80f52dc2ea69d8.mp3" },
    { title: "Rainha do Gelo", src: "Musicas/RAINHA DO GELO   Esdeath (Akame ga Kill)  Felícia Rock-fddb8b54dc8c76eb7a67b7acfd44c8e2.mp3" },
    { title: "Erosennin", src: "Musicas/EROSENNIN ( Rap do Jiraiya )  FELÍCIA ROCK Ft. TAKERU [ Prod. 808 Ander ]-ad169ac851ca62b5832853f30ea19270.mp3" },
    { title: "Amor Complicado", src: "Musicas/AMOR COMPLICADO ( Shikamaru  Temari )   FELÍCIA ROCK ft. MHRAP [ Prod. Sidney Scaccio ]-823943c16180a6959119c46be8ad1924.mp3" },
    { title: "Monster Queen", src: "Musicas/Monster Queen ( Rap da Zero Two )  FELÍCIA ROCK [ Prod. 808 Ander ]-60460cdd1fee677cbeda55424e5a51a4.mp3" },
    { title: "Yuno", src: "Musicas/O RAP MAIS SE DA YUNO + 18 ( Mirai Nikki )  FELÍCIA ROCK [ Prod. Sidney Scaccio ]-d5f7673dc86a44c4bdfeb00a9d93941f.mp3" },
    { title: "Senpai 2", src: "Musicas/FELÍCIA ROCK    Senpai 2 [ Prod. WB Beats ]-2665c834ab16511e18c2842457cc7a5b.mp3" },
    { title: "Senpai", src: "Musicas/Senpai  FELÍCIA ROCK [ Prod. Sidney Scaccio ]-45404b5623f998a9856269acf079f400.mp3" },
    { title: "Chuva de Kunai", src: "Musicas/CHUVA DE KUNAI   Trap Vibe  FELÍCIA ROCK ft. MHRAP [ Prod. 808 Ander ]-69e6176717ee01eab074aee4c49cd33e.mp3" },
    { title: "Hokage", src: "Musicas/HOKAGE  FELÍCIA ROCK [ Prod. Sidney Scaccio ]-4b7d121475207a0e4369f763ab5202f9.mp3" },
    { title: "Renegado", src: "Musicas/Renegado  FELÍCIA ROCK [ Prod. 808 Ander ]-35a503b777fecf8dec7be28f5ad921e5.mp3" },
    { title: "Pela Humanidade", src: "Musicas/♪ Buda  Pela Humanidade  AniRap (@HunterMsc)-0078c0a42221e17fbfaf0dbc5cf48579.mp3" },
    { title: "Verdadeira Justiça", src: "Musicas/Rap   Kira e L 『 Death Note 』 A Verdadeira Justiça  AniRap e @Flash Beats  (Prod. Hunter)-acc66060c14865e5a0a06f73858a7ad7.mp3" },
    { title: "Mal Da Humanidade", src: "Musicas/♪ Jack Estripador  O Mal Da Humanidade  AniRap (@Prod Hunter)-4b02b4ac1ed77915980d216f3617cc94.mp3" },
    { title: "Deuses VS Humanos", src: "Musicas/♪ RAGNAROK  Deuses VS Humanos  ESPECIAL 300K PT 1  URT  (@HunterMsc )-b8123080c474ae9b5583b2cbe02328e3.mp3" },
    { title: "Eu Vou Morrer Feliz", src: "Musicas/♪ Desabafo Escanor  Eu Vou Morrer Feliz  AniRap (@HunterMsc)-1f0ba269f6c2c0b3344964823ef8c2f3.mp3" },
    { title: "Soco Sério", src: "Musicas/♪ Saitama  Soco Sério  AniRap (@HunterMsc )-2061276d5415fe8103c6d172368a7017.mp3" },
    { title: "Cansado de Voltar", src: "Musicas/♪ Desabafo Subaru  Cansado de Voltar  AniRap (@HunterMsc)-6453e3bb8d80336aa14399f8b6d7d418.mp3" },
    { title: "Único Homem no Céu", src: "Musicas/♪ Capitão Pátria  O Único Homem no Céu  AniRap (Prod. WB)-2f0e89e5c1786e95f7037fe45e067cdf.mp3" },
    { title: "Novo Kira", src: "Musicas/♪ Minoru Tanaka (Death Note)  O Novo Kira  AniRap-3290492facad7af6b46c58cc82df4d1e.mp3" },
    { title: "Purgatório", src: "Musicas/♪ Ban  Purgatório  AniRap (@HunterMsc)-a41f84d5b8b25e2afa3e10c096ac5dee.mp3" },
    { title: "Pecado ou Punição", src: "Musicas/♪ Shuji Hanma  Pecado ou Punição  AniRap-4884098b9756699e5f97c672764d10d5.mp3" },
    { title: "Declaração", src: "Musicas/DECLARAÇÃO DO NARUTO PARA SAKURA☀️🌸 (Naruto)  ProdbyIOF-fcb9f8fd460db9db640fb8aa1d9fb3af.mp3" },
    
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

const progressBar = document.getElementById('progressBar');
const timer = document.getElementById('timer');

audioPlayer.addEventListener('timeupdate', () => {
    const { currentTime, duration } = audioPlayer;
    const progress = (currentTime / duration) * 100;
    progressBar.value = progress;

    // Atualiza o valor da variável CSS para a barra de progresso
    progressBar.style.setProperty('--progress', `${progress}%`);

    // Atualiza o timer
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

function loadSong(index) {
    // Remove a classe active de todas as músicas na playlist
    Array.from(songList).forEach(songItem => {
        songItem.classList.remove('active-song');
    });

    currentSongIndex = index; 
    audioPlayer.src = songs[index].src;
    audioPlayer.play();
    playPauseBtn.textContent = '⏸ ';
    isPlaying = true;
    songTitleElement.textContent = songs[index].title; // Atualiza o título da música
    
    // Adiciona a classe active na música que está tocando
    songList[index].classList.add('active-song');
}
