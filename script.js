const songs = [
    //Para ficar mais facíl copie "{ title: "", src: "" },"

    //Letra A
    { title: "Apenas um vilão por diversão", src: "Musicas/SOU APENAS UM VILÃO POR DIVERSÃO   Saitama Rap (Versão Sombria)  Takeru [Prod. 808 Ander]-d7e03728028efcf77f55d3c1247e4a42.mp3" },
    { title: "Acho que eu sou um monstro", "src": "Musicas/7 Minutoz - Rap do Gaara_ Acho Que Eu Sou um Monstro... (NERD HITS).mp3" },
    { title: "Apenas um trago", "src": "Musicas/Rap do Sanji (One Piece)   APENAS UM TRAGO  NERD HITS-6533f135d743ff735a17a2658d41370c.mp3" },
    { title: "Até o dia que eu morrer", "src": "Musicas/Rap de Jó   ATÉ O DIA QUE EU MORRER (CLIPE) I Henrique Mendonça-78d7f7ce61db360d19ce8920e81bb6d9.mp3" },
    { title: "Aquele que copia os 1.000 jutsus", src: "Musicas/7 Minutoz - Rap do Kakashi_ Aquele Que Copia os 1.000 Jutsus (NERD HITS).mp3" },
    { title: "Aladdin", src: "Musicas/ALADDIN   Lucas A.R.T. e Gabriel Rodrigues [Prod. MaaBeatz]-497f6b8b258101e34dd0a75adc93633c.mp3" },
    { title: "Armagedom", src: "Musicas/♪ Sukuna (Jujutsu Kaisen)  ARMAGEDOM  AniRap-e4b719d4ea72faf0162ee96884e77397.mp3" },
    { title: "Amor complicado", src: "Musicas/AMOR COMPLICADO ( Shikamaru  Temari )   FELÍCIA ROCK ft. MHRAP [ Prod. Sidney Scaccio ]-823943c16180a6959119c46be8ad1924.mp3" },
    { title: "Adeus Cavaleiros de Ouro", src: "Musicas/RAP ADEUS CAVALEIROS DE OURO 💔 (CDZ Saint Seiya)  LexClash-1be4bf4550d0954a4128886045958b8d.mp3" },
    { title: "Aqui rola magia II", src: "Musicas/♪ Asta e Noelle 💧😈  Aqui Rola Magia II (Black Clover)  LexClash Feat @NathySC-cb400c5b9abac27724f9efc636368265.mp3" },
    { title: "Anjo", src: "Musicas/Anjo (Otonari no Tenshi Sama)  Nickzinn-074bcd7172c5d96600ff0dd0b535989d.mp3" },
    { title: "Até o fim", src: "Musicas/Até o Fim ❤️ Kirito  Asuna (Sword Art Online)  ft. @Meizy  _ JRP-8386be5a54b98ea6a20d9e4a99deacd2.mp3" },
    { title: "Amores se acabam", src: "Musicas/Amores se acabam   Hina e Takemichi (Tokyo Revengers)  JRP-2b7252c528ea61fc3e9d873578fc4063.mp3" },
    { title: "Akuma no mi", src: "Musicas/Lucas A.R.T.   AKUMA NO MI [Prod. LionRiddims]-ff342d700a407821282e1ef4be1e2907.mp3" },

    //Letra B
    { title: "Bad btch", src: "Musicas/Bad Btch ♠️ Kakegurui  Yumeko Jabami e Mary Saotome  Giu Matsu feat @duudahofc  [@ProdbyJaum]-1b8ddf3f36ee70009d6ebda9e3464166.mp3" },
    { title: "Balas e garras", src: "Musicas/Deadpool e Wolverine   BALAS E GARRAS  7 Minutoz-2d4a7f8fff1a2dccc3bd9286123a5354.mp3" },
    { title: "Bela e a fera", src: "Musicas/Inosuke e Aoi  A BELA E A FERA (Demon Slayer)  LexClash-5b7e4562ae692be3ac4e67ad018342bc.mp3" },

    //Letra C
    { title: "Caçada a marinha", src: "Musicas/WLO   Caçada a Marinha [ One Piece  Cross Guild ]-46835c6171a256d59aaf2fe4ee73a122.mp3" },
    { title: "Criatura mais forte", src: "Musicas/WLO   A Criatura Mais Forte [ Kaidou  Yujiro ]-f5e669b3b6a82409861e784fb7072b1a.mp3" },
    { title: "Cuidarei de você", src: "Musicas/Cuidarei de Você  Hori  Miyamura (Horimiya) Ft. @IsaCampx  Nickzinn-ca557e9ebea34618cfbd85b4b30c8ae8.mp3" },
    { title: "Coca-cola", src: "Musicas/7 Minutoz - Coca-cola.mp3" },
    { title: "Conto de um ninja destemido", src: "Musicas/7 Minutoz - Rap do Jiraiya_ O Conto de um Ninja Destemido (NERD HITS).mp3" },
    { title: "Coringas", src: "Musicas/7 Minutoz  - Rap dos Coringas_ Circo dos Horrores (NERD HITS).mp3" },
    { title: "Cansado de voltar", src: "Musicas/♪ Desabafo Subaru  Cansado de Voltar  AniRap (@HunterMsc)-6453e3bb8d80336aa14399f8b6d7d418.mp3" },
    { title: "Chuva de kunai", src: "Musicas/CHUVA DE KUNAI   Trap Vibe  FELÍCIA ROCK ft. MHRAP [ Prod. 808 Ander ]-69e6176717ee01eab074aee4c49cd33e.mp3" },
    { title: "Cavaleiro da deusa", src: "Musicas/♪ Seiya e Saori  Cavaleiro da Deusa (Saint Seiya)   LexClash-232d14a432dd86793840f1312a8cc2d9.mp3" },
    { title: "Cavaleiros de ouro", src: "Musicas/Rap dos Cavaleiros de Ouro 🩸💛 (CDZ Saint Seiya)  ZODÍACO  LexClash-395cb88789623c049ef633bcbb8e3304.mp3" },
    { title: "Circo dos horrores", src: "Musicas/Rap do Coringa, Arlequina, Hisoka e Pennywise   CIRCO DOS HORRORES 2  NERD HITS-1efce1634b7e60e3d0c4f16477d7c0d1.mp3" },

    //Letra D
    { title: "Declaração", src: "Musicas/DECLARAÇÃO DO NARUTO PARA SAKURA☀️🌸 (Naruto)  ProdbyIOF-fcb9f8fd460db9db640fb8aa1d9fb3af.mp3" },
    { title: "Deuses VS humanos", src: "Musicas/♪ RAGNAROK  Deuses VS Humanos  ESPECIAL 300K PT 1  URT  (@HunterMsc )-b8123080c474ae9b5583b2cbe02328e3.mp3" },
    { title: "Deus do trovão e a rainha oni", src: "Musicas/RAP O DEUS DO TROVÃO E A RAINHA ONI (Zenitsu e Nezuko)  Lyric Vídeo  LexClash (Prod Master Pe)-d037e222127eb343aaa3b2ad50f46802.mp3" },
    { title: "Death note", src: "Musicas/DEATH NOTE   Gabriel Rodrigues, Pablo Matheuz e Lucas A.R.T. [Prod. 808 Ander]-c2e878e629c34336db79710f3e04c540.mp3" },
    { title: "Dever de um pai", src: "Musicas/7 Minutoz - Rap do Minato_ O Dever de um Pai (NERD HITS).mp3" },
    { title: "Dragão gêmeo", src: "Musicas/Mitsuya  Dragão Gêmeo  AniRap.mp3" },
    { title: "Demônio dentro de mim", src: "Musicas/7 Minutoz - Rap do Naruto_ O Demônio Dentro de Mim.mp3" },

    //Letra E
    { title: "Esferas do dragão", src: "Musicas/ESFERAS DO DRAGÃO   Pedro Alvez, Lucas A.R.T. e Pablo Matheuz [Prod. Mantra  Zero Beatz]-0d4e2efcc592a71336bcf34ab89b57a4.mp3" },
    { title: "Evolução", src: "Musicas/WLO   Evolução [ Shuumatsu no Valkyrie  Nikola Tesla ]-6f44129ff16a969d1e63a9882861326d.mp3" },
    { title: "Eu vou morrer feliz", src: "Musicas/♪ Desabafo Escanor  Eu Vou Morrer Feliz  AniRap (@HunterMsc)-1f0ba269f6c2c0b3344964823ef8c2f3.mp3" },
    { title: "Erosennin", src: "Musicas/EROSENNIN ( Rap do Jiraiya )  FELÍCIA ROCK Ft. TAKERU [ Prod. 808 Ander ]-ad169ac851ca62b5832853f30ea19270.mp3" },
    { title: "Eu me sinto livre", src: "Musicas/♪ Akira Tendou 😈📘  Eu Me Sinto Livre (Zom 100 Bucket List of the Dead)  LexClash-36d831fd02904c5f97654de3545ffb09.mp3" },
    { title: "Ela é muito louca", src: "Musicas/♪ Ela é Muito Louca (Anime Mix)  8 Loucas 1 Rap  LexClash-774ec72478b94d6c27fb882030814a08.mp3" },
    { title: "Escudo da fúria", src: "Musicas/ESCUDO DA FÚRIA   Takeru [Prod. 808 Ander]-fe7a65db475a55b662c118fcbcd0bb8f.mp3" },
    { title: "Eu vou ser o rei mago", src: "Musicas/Rap do Asta (Black Clover)   EU VOU SER O REI MAGO  NERD HITS-02a3dce46add7ba3a545a5f6239c9d55.mp3" },
    { title: "Eu sou o capitão", src: "Musicas/7 Minutoz - Rap do Meliodas_ Eu Sou o Capitão.mp3" },
    { title: "Eu tô de volta ao var", src: "Musicas/7 Minutoz - Rap do Homem-Aranha_ Eu Tô de Volta ao Lar (NERD HITS).mp3" },

    //Letra F
    { title: "Fluxo", src: "Musicas/LHz   FLUXØ  Ryusei Shidou  (Official Music Video)-f8f823975c5f59276a672f8263278e99.mp3" },
    { title: "Friendzone", src: "Musicas/FRIENDZONE Rap   (ANIME MIX)  FELÍCIA ROCK  [Prod. Rome]-c104fe203973335c403f5bbcc69e55e6.mp3" },
    { title: "Final feliz", src: "Musicas/♪ Tomioka e Shinobu 🌊🦋 (Demon Slayer)  FINAL FELIZ  LexClash e @Meizy-8d4fe1cb4e572adce0875cd9cf051907.mp3" },

    //Letra G
    { title: "Gula e orgulho", src: "Musicas/RAP DA MERLIN E ESCANOR (NANATSU NO TAIZAI) FELÍCIA ROCK ft. TAKERU-a61a952a9286d5d7617b97d39c0b77c2.mp3" },
    { title: "Gyutaro", src: "Musicas/GYUTARO 💔  Lua Superior 6  (Demon Slayer) Prod. Sid  MHRAP-1902b853cd0dbc472d3dbc8cbecf6136.mp3" },
    { title: "Guerra de amor", src: "Musicas/Uma Guerra de Amor (Kaguya Sama LOVE IS WAR)  Nickzinn-f8e00a18bda444cf5195431cedb626c7.mp3" },
    { title: "Gear 5", src: "Musicas/Gear 5  Luffy Pt. 3 (One Piece)  Basara.mp3" },
    { title: "Guerra em wano", src: "Musicas/WLO - Guerra em Wano [ One Piece ] Prod. WB.mp3" },

    //Letra H
    { title: "Hokage", src: "Musicas/HOKAGE  FELÍCIA ROCK [ Prod. Sidney Scaccio ]-4b7d121475207a0e4369f763ab5202f9.mp3" },
    { title: "Hashira do amor", src: "Musicas/FELÍCIA ROCK   Hashira do Amor (Mitsuri   Kimetsu no Yaiba)-762c17d1ab6b8de5af55bbd41a8e4a4c.mp3" },
    { title: "Hokage da quebrada", src: "Musicas/HOKAGE DA QUEBRADA   O Verdadeiro Trap do Naruto (+18)  Takeru [Prod. 808 Ander]-4389b77d203fcdf1dc2d18dc2b21fe68.mp3" },
    { title: "Homem Mais forte do mundo", src: "Musicas/WLO - O Homem Mais Forte do Mundo [ One Piece  Barba Branca ] Prod. WB.mp3" },

    //Letra I
    { title: "Izumi miyamura", src: "Musicas/RAP do IZUMI MIYAMURA Horimiya feat.@LexClash    TCPunters prod.Ryini-ea1005f95b69cc543e56f4091901c544.mp3" },
    { title: "Iluminado", src: "Musicas/TAKERU - O Iluminado [Buda  Shuumatsu no Valkyrie (Record of Ragnarok)].mp3" },
    { title: "I am iron man", src: "Musicas/7 Minutoz - Rap do Homem de Ferro_ I Am Iron Man (NERD HITS).mp3" },

    //Letra J
    { title: "Jo ken", src: "Musicas/RAP DA MARY SAOTOME (Kakegurui) JO KEN 🃏  TRAP InsaneGirl  Feat. @JKZOficial [Prod.Try'xl]-f394c2088bb56d4d83e8560a89fd9dcd.mp3" },
    { title: "Jabami yumeko", src: "Musicas/O RAP MAIS SE❌❌Y DA JABAMI YUMEKO (Kakegurui)  FELÍCIA ROCK [Prod. Sidney Scaccio]-6fc3032bf627411c8e80f52dc2ea69d8.mp3" },
    { title: "Judas", src: "Musicas/7 Minutoz   JUDAS-2ed23c94f19ce1fe1cc0ec7becae976a.mp3" },

    //Letra K
    { title: "Kakashi", src: "Musicas/KAKASHI   Pedro Alvez, Lucas A.R.T. e Gabriel Rodrigues [Prod. Zero]-7e6124e04b17e796b04ca18c5b395f5a.mp3" },

    //Letra L
    { title: "Lagrimas de sangue", src: "Musicas/Rap do Saga, Shura e Camus 🩸 (CDZ Saint Seiya)  LAGRIMAS DE SANGUE  LexClash-37ff70f10b352160378ba56eae2ba5f3.mp3" },
    { title: "Lótus negra", src: "Musicas/LÓTUS NEGRA   Rock Lee Rap (Versão Sombria)  Takeru Feat. rAid (Lendários) [Prod. Sidney Scaccio]-cabac846fa3cfec7cda333fc68bed96a.mp3" },
    { title: "Lenda não morrerá", src: "Musicas/A Lenda Não Morrerá  Gato de Botas 2  Papyrus Da Batata.mp3" },
    { title: "Lideres", src: "Musicas/Lideres  Tokyo Revengers  ESPECIAL 800K  URT.mp3" },
    { title: "Lunáticos", src: "Musicas/Lunáticos  Pernalonga e Pica-Pau  Papyrus Da Batata.mp3" },

    //Letra M
    { title: "Minha vez de jogar", src: "Musicas/Ayanokoji Vs Ryuen (Classroom of the Elite)   Minha Vez de Jogar  Shiny Ft. @OkabeOficial-397c362ec82f90ab513af18d76e0f20a.mp3" },
    { title: "Monstro", src: "Musicas/♪ Monstro 💔  Gaara (Naruto) JRP-8ae8317a9bef748811cf61a0e5139137.mp3" },
    { title: "Mirai gohan", src: "Musicas/♪ Mirai Gohan (Dragon Ball Z)  Luz do Futuro  AniRap-6611dd3ceadeb6394a50454c8bdbf35c.mp3" },
    { title: "Mal da humanidade", src: "Musicas/♪ Jack Estripador  O Mal Da Humanidade  AniRap (@Prod Hunter)-4b02b4ac1ed77915980d216f3617cc94.mp3" },
    { title: "Monster queen", src: "Musicas/Monster Queen ( Rap da Zero Two )  FELÍCIA ROCK [ Prod. 808 Ander ]-60460cdd1fee677cbeda55424e5a51a4.mp3" },
    { title: "Muito esforço e pouca sorte", src: "Musicas/Rap do Asta (Black Clover)  MUITO ESFORÇO E POUCA SORTE  TrapFlow   LexClash-92da365a201b461ac790abb0ef0ff4cf.mp3" },
    { title: "Maldição", src: "Musicas/Rap Meliodas e Elizabeth 😈😇 (Nanatsu no Taizai)  MALDIÇÃO  LexClash-646faa5336da9e3e526f161c4b1112de.mp3" },
    { title: "My vampire!", src: "Musicas/My Vampire! (Call Of The Night)  Nickzinn-39cd8095031e610c68742bde964a3325.mp3" },
    { title: "Muryo kusho", src: "Musicas/MURYO KUSHO   Gojo (Jujutsu Kaisen)  Takeru-58d6d5e9e444ccc212bf6909dbd32932.mp3" },
    { title: "Meu sol", src: "Musicas/Meu Sol (Tenki no Ko)  Nickzinn-c7a9a82d7bbcc3a325914f333de2d272.mp3" },
    { title: "Meu bem é você", src: "Musicas/Meu bem é você 💔  Obito e Rin  ft. @AnnyTHN  JRP-eb74464b502454c7757dd065a2aa23d0.mp3" },
    { title: "Mais ninguém vai sofrer o que eu sofri", src: "Musicas/7 Minutoz - Rap do Obito_ Mais Ninguém Vai Sofrer o Que Eu Sofri (NERD HITS).mp3" },
    { title: "My Brother", src: "Musicas/Itadori & Todo (Jujutsu Kaisen) - My Brother _ M4rkim ft. @KaitoOFC_pbPqe6doxhk.mp3" },
    { title: "Maldição do ódio", src: "Musicas/7 Minutoz - Rap do Sasuke_ Maldição do Ódio (Nerd Hits).mp3" },
    { title: "Me tornei um deus", src: "Musicas/7 Minutoz - Rap do Madara_ Me Tornei um Deus (NERD HITS).mp3" },
    { title: "Momentos com quem se foi", src: "Musicas/7 Minutoz - Rap do Homem-Aranha, Flash e Batman_ Momentos Com Quem Se Foi.mp3" },
    { title: "Mago supremo", src: "Musicas/7 Minutoz - Rap do Doutor Estranho_ Mago Supremo do Universo (NERD HITS).mp3" },
    { title: "Mercenário tagarela", src: "Musicas/7 Minutoz - Rap do Deadpool_ O Mercenário Tagarela (NERD HITS).mp3" },
    { title: "Mochi mochi", src: "Musicas/Mochi Mochi _ Katakuri (One Piece) _ Enygma_KnK3psvnV5g.mp3" },
    { title: "Mensageiro🌟", src: "Musicas/Anjo Gabriel   O MENSAGEIRO🌟(CLIPE) I Rap do Anjo Gabriel I Prod. Yago-7832c69318309c238ce1cb0cbbc3c756.mp3" },
    { title: "Maior apóstolo do mundo", src: "Musicas/Rap de Paulo   O MAIOR APÓSTOLO DO MUNDO (CLIPE) I Uma releitura 7 minutoz I Henrique Mendonça-d5ebb759b18c5a884599d95cdb0f624f.mp3" },

    //Letra N
    { title: "Novo kira", src: "Musicas/♪ Minoru Tanaka (Death Note)  O Novo Kira  AniRap-3290492facad7af6b46c58cc82df4d1e.mp3" },
    { title: "Nunca foi fácil", src: "Musicas/♪ NUNCA FOI FÁCIL  8 Shipps 1 Rap (Anime Mix)  LexClash Feat @FunkeiradeKonoha-8d31521b54c83b88af73a413c5dd8bd5.mp3" },
    { title: "Nunca foi amor", src: "Musicas/Denji e Makima  NUNCA FOI AMOR (Chainsaw Man)  LexClash-698423d8b4956bef104be965aac8fbb6.mp3" },
    { title: "Nosso adeus...", src: "Musicas/Rap do Naruto e Kurama (Boruto)   NOSSO ADEUS...  NERD HITS-a19f7b39dc40d03c465ed303e1db997a.mp3" },
    { title: "Ninja mais forte", src: "Musicas/7 Minutoz - Rap do Maito Gai_ O Ninja Mais Forte (NERD HITS).mp3" },
    { title: "Nós somos venom", src: "Musicas/7 Minutoz - Rap do Venom_ Nós Somos Venom (NERD HITS).mp3" },

    //Letra O
    { title: "Os filhos do mar", src: "Musicas/Black Flags   OS FILHOS DO MAR  Chrono-5b0ccb2792cbb624f6eb7ed36cf34c41.mp3" },
    { title: "Orgulho de hashira", src: "Musicas/Rap do Obanai e Mitsuri 🐍❤ (Demon Slayer)  ORGULHO DE HASHIRA  LexClash e @lylotris-d848eee4533a12fa0b3f24c150154395.mp3" },
    { title: "Olhos vendados", src: "Musicas/Olhos Vendados  Gojo e Qin Shi Huang  AniRap e VMZ.mp3" },
    { title: "Orgulhoso como um leão", src: "Musicas/7 Minutoz - Rap do Escanor_ Orgulhoso Como um Leão.mp3" },

    //Letra P
    { title: "Pela humanidade", src: "Musicas/♪ Buda  Pela Humanidade  AniRap (@HunterMsc)-0078c0a42221e17fbfaf0dbc5cf48579.mp3" },
    { title: "Primeiro de cem", src: "Musicas/Primeiro De Cem TadanoKomi(Komi San Can't Communicate) Shiny_sz Prod.Try'xl-eadabae18285f0c7d0bb861adf87cb69.mp3" },
    { title: "Palavras finais", src: "Musicas/Palavras Finais (Satoru Gojo e Suguru Geto)-d9986d42270e185974aad3c3520d5488.mp3" },
    { title: "Purgatório", src: "Musicas/♪ Ban  Purgatório  AniRap (@HunterMsc)-a41f84d5b8b25e2afa3e10c096ac5dee.mp3" },
    { title: "Pecado ou punição", src: "Musicas/♪ Shuji Hanma  Pecado ou Punição  AniRap-4884098b9756699e5f97c672764d10d5.mp3" },
    { title: "Parceria", src: "Musicas/Denji e Power  PARCERIA (Chainsaw Man)  LexClash e May Abreu-b38a12aa042e916d011423b697114e7d.mp3" },
    { title: "Poucas palavras e muita atitude II", src: "Musicas/♪ Tanjiro e Kanao 🌊🦋  Poucas Palavras e Muita Atitude II (Demon Slayer)  LexClash Ft Lylo-9c719efcddf5acf31e415f3327bf54db.mp3" },
    { title: "Pela sua memória", src: "Musicas/Night Raid 🩸 (Akame Ga Kill)  PELA SUA MEMÓRIA  LexClash-b3e0f66797fa5bbb3a7db359fc45f10e.mp3" },
    { title: "Psicopatia", src: "Musicas/FELÍCIA ROCK   Psicopatia (Anime Mix)  Feat. Takeru  Prod. MK-a98f47794f5e5a299301c97ddaf3de54.mp3" },
    { title: "Provocar", src: "Musicas/Provocar (Uzaki chan wa Asobitai!)  Nickzinn-dcec17d5beb7919e90b33c5f49b1d189.mp3" },
    { title: "Primeiro amor", src: "Musicas/❤️ Primeiro amor (Minato e Kushina) JRP ft. @Meizy-c39b9a35ab0f1e4cc0ec3bc7559166a2.mp3" },
    { title: "Poder da minha ira", src: "Musicas/Rap do Broly, Kyuubi e Levi   O PODER DA MINHA IRA 2  NERD HITS-922b80532896f574b42502701b829b80.mp3" },
    { title: "Punhos de fogo", src: "Musicas/Rap do Ace (One Piece)   PUNHOS DE FOGO  NERD HITS-104f5dfc460e87402a612b4b6003c64a.mp3" },
    { title: "Príncipe do egito", src: "Musicas/Moisés (Êxodo)  O Príncipe do Egito  Henrique Mendonça.mp3" },
    { title: "Pecado mais forte", src: "Musicas/7 Minutoz - Rap do Meliodas, Ban e Escanor_ O Pecado Mais Forte (NERD HITS).mp3" },
    { title: "Pecado da ganância", src: "Musicas/7 Minutoz - Rap do Ban_ O Pecado da Ganância.mp3" },
    { title: "Pecado da inveja", src: "Musicas/7 Minutoz - Rap da Diane_ O Pecado da Inveja (NERD HITS).mp3" },
    { title: "Primeiro vingador", src: "Musicas/7 Minutoz - Rap do Capitão América_ O Primeiro Vingador (NERD HITS).mp3" },
    { title: "Pode me chama de Miguel", src: "Musicas/Rap do Arcanjo Miguel   PODE ME CHAMAR DE MIGUEL  Henrique Mendonça-34ea081a6d5219bd4c140a0ceadbe58f.mp3" },
    { title: "Por vocês", src: "Musicas/Rap da Trindade   POR VOCÊS (CLIPE) I Uma releitura 7 Minutoz I Henrique Mendonça-3c77879a74bf00166961fcfb934dc857.mp3" },

    //Letra Q
    { title: "Quer 100 amigos", src: "Musicas/Quer 100 Amigos (Komi Can_t Communicate)  Nickzinn-142c0ba99b83a13d1ef79284f6043fcc.mp3" },
    { title: "Queda do dragão", src: "Musicas/Rap da Guerra no céu   A QUEDA DO DRAGÃO (CLIPE) I Henrique Mendonça I Prod. Leonardo Liscano-dcb6d0f5ffdbc34bcd64b8d2f23ee1f4.mp3" },

    //Letra R
    { title: "Renegado", src: "Musicas/Renegado  FELÍCIA ROCK [ Prod. 808 Ander ]-35a503b777fecf8dec7be28f5ad921e5.mp3" },
    { title: "Rainha do gelo", src: "Musicas/RAINHA DO GELO   Esdeath (Akame ga Kill)  Felícia Rock-fddb8b54dc8c76eb7a67b7acfd44c8e2.mp3" },
    { title: "Ragnarok", src: "Musicas/RAGNAROK   Shuumatsu no Valkyrie  Takeru  UnionZ-ef033ceb70990860f72b75684c0e3e7e.mp3" },
    { title: "Rei das fadas", src: "Musicas/7 Minutoz - Rap do King_ Rei das Fadas.mp3" },
    { title: "Respeita o arcanjo", src: "Musicas/Rap dos Arcanjos   RESPEITA O ARCANJO (CLIPE) I Uma Releitura 7 Minutoz I Henrique Mendonça-bfcfeb2d195131871e7b9d5e071391df.mp3" },
    { title: "Ressureição", src: "Musicas/Rap de Jesus Cristo   A RESSUREIÇÃO  Henrique Mendonça-3aec443361d76716593a4e4dec4d3472.mp3" },

    //Letra S
    { title: "Selvagem", src: "Musicas/♪ Rath (Ben 10)  Selvagem  AniRap-d0667e4e05cb63daf501c1179d493c75.mp3" },
    { title: "Sentir", src: "Musicas/Gowther  Sentir (Nanatsu no Taizai)  Guii-bfd4ec2637eaf912566438f008c3fcab.mp3" },
    { title: "Soco sério", src: "Musicas/♪ Saitama  Soco Sério  AniRap (@HunterMsc )-2061276d5415fe8103c6d172368a7017.mp3" },
    { title: "Senpai", src: "Musicas/Senpai  FELÍCIA ROCK [ Prod. Sidney Scaccio ]-45404b5623f998a9856269acf079f400.mp3" },
    { title: "Senpai 2", src: "Musicas/FELÍCIA ROCK    Senpai 2 [ Prod. WB Beats ]-2665c834ab16511e18c2842457cc7a5b.mp3" },
    { title: "Sorrindo feito louco", src: "Musicas/Rap do Luck Voltia (Black Clover)  SORRINDO FEITO LOUCO  LexClash-f0a4ee9703afe2a08f46467dcf97b1d6.mp3" },
    { title: "Somos diferentes", src: "Musicas/Rap Yami e Charlotte 🖤💙 (Black Clover)  SOMOS DIFERENTES  LexClash FT Hada-dc49141ff2fa53b059d0664fe6e7842f.mp3" },
    { title: "Shibuya", src: "Musicas/Shibuya  Jujutsu Kaisen  ESPECIAL URT.mp3" },
    { title: "Se for por você", src: "Musicas/7 Minutoz - Rap da Hinata_ Se For por Você... (NERD HITS).mp3" },

    //Letra T
    { title: "Tributo aos clássicos", src: "Musicas/TRIBUTO AOS CLÁSSICOS   Lucas A.R.T., Pablo Matheuz e Gabriel Rodrigues [Prod. JpBeatz]-0a5181b644f7ac5ef5167f3a9cc3165d.mp3" },
    { title: "Tipo kimi no na wa", src: "Musicas/TIPO KIMI NO NA WA 💌  May Abreu  [Prod.Try'xl]-1daa8b817cffe9084fcb5cfc562cf88c.mp3" },
    { title: "Tipo jiraiya", src: "Musicas/Tipo Jiraiya 🐸😈 (Naruto)  Style Trap  Prod. Sidney Scaccio x Johnny Lowd  MHRAP-195e9d5b42a1e3688710f3c5cefb98a0.mp3" },
    { title: "Temari", src: "Musicas/TEMARI   Lucas A.R.T. e Gabriel Rodrigues [Prod. 808 Ander]-25fbc2f6c8926f71fbc9383bb9fcb847.mp3" },
    { title: "Time 7", src: "Musicas/Rap do Kakashi, Naruto, Sasuke e Sakura   TIME 7  NERD HITS-a3130bd7cac8c22643cb6e59c8e0cf4e.mp3" },
    { title: "Terror em londres", src: "Musicas/Terror em Londres _ Jack, o Estripador (Shuumatsu no Valkyrie) _ Enygma_cPOjZwsus2Y.mp3" },
    { title: "Tô sempre com raiva", src: "Musicas/7 Minutoz - Rap do Hulk_ Tô Sempre Com Raiva (NERD HITS).mp3" },
    { title: "Tu és o meu senhor", src: "Musicas/Rap de José   TU ÉS O MEU SENHOR  Henrique Mendonça-212b0717a522105d505c0fbf8bc2de29.mp3" },

    //Letra U
    { title: "Único homem no céu", src: "Musicas/♪ Capitão Pátria  O Único Homem no Céu  AniRap (Prod. WB)-2f0e89e5c1786e95f7037fe45e067cdf.mp3" },
    { title: "Últimos de nós", src: "Musicas/Rap do Joel e Ellie (The Last of Us)   OS ÚLTIMOS DE NÓS  NERD HITS-5a88851939a306680539e4fae14d7a57.mp3" },
    { title: "Uchiha", src: "Musicas/Lucas A.R.T.   UCHIHA [Prod. Jurrivh]-cb89ebcd62d3512c3be738d671d55af9.mp3" },
    { title: "Um Rei", src: "Musicas/Rap do Doflamingo (One Piece)   UM REI  NERD HITS-55990781cfeffe31b3d8cee3c6d2aa7b.mp3" },
    { title: "Ultraego", src: "Musicas/Tipo Gogeta 2  ULTRAEGO  - Ft. PTKZIN (Dragon Ball)  Prod. Sid  MHRAP.mp3" },

    //Letra V
    { title: "Verdadeira justiça", src: "Musicas/Rap   Kira e L 『 Death Note 』 A Verdadeira Justiça  AniRap e @Flash Beats  (Prod. Hunter)-acc66060c14865e5a0a06f73858a7ad7.mp3" },
    { title: "Verdadeiro rap do naruto", src: "Musicas/O VERDADEIRO RAP DO NARUTO (+18)  Takeru-40da174161cc50501416ed4df44e1265.mp3" },
    { title: "Verdadeiro rap do ayanokoji", src: "Musicas/O VERDADEIRO RAP DO AYANOKOJI (+18)  Takeru-dd2792e92d5589c69e39f53aae59a0c6.mp3" },
    { title: "Vou Ser um hokage", src: "Musicas/Vou ser um hokage  Naruto  JRP-a0abfe4d958df0c75b773e0de71f139a (1).mp3" },
    { title: "Vontade do fogo", src: "Musicas/A Vontade do Fogo  Naruto (Clássico)  Basara.mp3" },
    { title: "Vibe denji", src: "Musicas/Vibe Denji  (Chainsaw Man) Prod. Sidney Scaccio  MHRAP.mp3" },

    //Letra W

    //Letra X

    //Letra Y
    { title: "Yuno", src: "Musicas/O RAP MAIS SE DA YUNO + 18 ( Mirai Nikki )  FELÍCIA ROCK [ Prod. Sidney Scaccio ]-d5f7673dc86a44c4bdfeb00a9d93941f.mp3" },

    //Letra Z

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
const progressBar = document.getElementById('progressBar');
const timer = document.getElementById('timer');

// Elementos para controle de volume
const volumeBtn = document.querySelector('.volume-btn');
const volumeSlider = document.querySelector('.volume-control input[type="range"]');
let isMuted = false;

// Função para carregar a música selecionada
function loadSong(index) {
    Array.from(songList).forEach(songItem => {
        songItem.classList.remove('active-song');
    });

    currentSongIndex = index;
    audioPlayer.src = songs[index].src;
    audioPlayer.play();
    playPauseBtn.textContent = '⏸ ';
    isPlaying = true;
    songTitleElement.textContent = songs[index].title; // Atualiza o título da música
    songList[index].classList.add('active-song');

    // Atualiza a letra da música
    lyricsElement.innerHTML = `<p>${lyricsData[songs[index].title] || "Letra não disponível."}</p>`;
}

// Função para reproduzir ou pausar a música
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

// Função para ir para a música anterior
function prevSong() {
    currentSongIndex = (currentSongIndex > 0) ? currentSongIndex - 1 : songs.length - 1;
    loadSong(currentSongIndex);
}

// Função para ir para a próxima música
function nextSong() {
    currentSongIndex = (currentSongIndex < songs.length - 1) ? currentSongIndex + 1 : 0;
    loadSong(currentSongIndex);
}

// Função para alternar a visualização da playlist
function togglePlaylist() {
    playlist.classList.toggle('show');
}

// Função para atualizar a barra de progresso e o timer
audioPlayer.addEventListener('timeupdate', () => {
    const { currentTime, duration } = audioPlayer;
    const progress = (currentTime / duration) * 100;
    progressBar.value = progress;
    progressBar.style.setProperty('--progress', `${progress}%`);

    // Atualiza o timer
    const currentMinutes = Math.floor(currentTime / 60);
    const currentSeconds = Math.floor(currentTime % 60).toString().padStart(2, '0');
    const durationMinutes = Math.floor(duration / 60);
    const durationSeconds = Math.floor(duration % 60).toString().padStart(2, '0');

    timer.textContent = `${currentMinutes}:${currentSeconds} / ${durationMinutes}:${durationSeconds}`;
});

// Função para ajustar o tempo da música com a barra de progresso
progressBar.addEventListener('input', () => {
    const newTime = (progressBar.value / 100) * audioPlayer.duration;
    audioPlayer.currentTime = newTime;
});

// Controle de velocidade (acelera ao pressionar e desacelera ao soltar)
speedUpBtn.addEventListener('mousedown', function () {
    audioPlayer.playbackRate = 2.0;
});

speedUpBtn.addEventListener('mouseup', function () {
    audioPlayer.playbackRate = 1.0;
});

speedUpBtn.addEventListener('touchstart', function () {
    audioPlayer.playbackRate = 2.0;
});

speedUpBtn.addEventListener('touchend', function () {
    audioPlayer.playbackRate = 1.0;
});

// Controle de volume
audioPlayer.volume = volumeSlider.value / 100;

volumeBtn.addEventListener('click', () => {
    if (audioPlayer.volume > 0) {
        audioPlayer.volume = 0;
        volumeBtn.textContent = '🔇'; // Ícone de mudo
    } else {
        audioPlayer.volume = volumeSlider.value / 100;
        volumeBtn.textContent = '🔊'; // Ícone de volume
    }
});

volumeSlider.addEventListener('input', () => {
    audioPlayer.volume = volumeSlider.value / 100;

    if (volumeSlider.value == 0) {
        volumeBtn.textContent = '🔇'; // Ícone de mudo
    } else {
        volumeBtn.textContent = '🔊'; // Ícone de volume
    }
});

// Adiciona eventos aos controles
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

// Botão para música aleatória
document.getElementById("randomBtn").addEventListener("click", function () {
    const randomIndex = Math.floor(Math.random() * songs.length);
    loadSong(randomIndex);
});

// Carrega a primeira música ao iniciar
loadSong(currentSongIndex);

// Oculta a letra ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    const lyricsContainer = document.getElementById('lyrics');
    lyricsContainer.style.display = 'none'; // Oculta a letra
});

// Botão para exibir/ocultar a letra
document.getElementById('toggleLyrics').addEventListener('click', function () {
    const lyricsContainer = document.getElementById('lyrics');
    const playlistContainer = document.getElementById('playlist');

    // Alterna a visibilidade da letra e esconde a playlist
    if (lyricsContainer.style.display === 'none' || lyricsContainer.style.display === '') {
        lyricsContainer.style.display = 'block'; // Exibe a letra
        playlistContainer.style.display = 'none'; // Esconde a playlist
    } else {
        lyricsContainer.style.display = 'none'; // Esconde a letra
    }
});

// Alternar visibilidade da playlist e letra
togglePlaylistBtn.addEventListener('click', function () {
    const playlistContainer = document.getElementById('playlist');
    const lyricsContainer = document.getElementById('lyrics');

    if (playlistContainer.style.display === "none" || playlistContainer.style.display === '') {
        playlistContainer.style.display = "block"; // Exibe a playlist
        lyricsContainer.style.display = "none"; // Esconde a letra
    } else {
        playlistContainer.style.display = "none"; // Esconde a playlist
    }
});

// Função para carregar a música selecionada
function loadSong(index) {
    Array.from(songList).forEach(songItem => {
        songItem.classList.remove('active-song');
    });

    currentSongIndex = index;
    audioPlayer.src = songs[index].src;
    audioPlayer.play();
    playPauseBtn.textContent = '⏸ ';
    isPlaying = true;
    songTitleElement.textContent = songs[index].title; // Atualiza o título da música
    songList[index].classList.add('active-song');

    // Atualiza o título da página para "GeekTunes - Nome da Música"
    document.title = `GeekTunes - ${songs[index].title}`;
}
