var game = new Phaser.Game(1024, 768, Phaser.AUTO, '', { preload: preload, create: create, update: update });
// 1024x768

function preload() {
//sfondo
    this.load.image('sky', 'assets/sfondo_def.png');
    this.load.image('sky_2', 'assets/sfondo_def_2.png');
    this.load.image('banda_superiore', 'assets/greca superiore.png');
    this.load.image('banda_superiore_bassa', 'assets/greca_empusa.png');
    this.load.image('sfondo_empusa', 'assets/sfondo_empusa.png');
    this.load.image('sfondo_minotauro', 'assets/sfondo_empusa_2.png');
    this.load.image ('effetto','assets/vignettatura.png')
//UI
    this.load.image('vite', 'assets/lifebar.png');
    this.load.image('vite_2', 'assets/lifebar_2.png');
    this.load.image('cuore', 'assets/cuore.png');
    this.load.image('filo', 'assets/barrafilo.png');
    this.load.image('filo_2', 'assets/barrafilo_2.png');
    this.load.image('gomitolo', 'assets/gomitolo.png');
    this.load.image('menuPausa', 'assets/menu.png');
    this.load.image('tastoPausa', 'assets/Icona_menu_2.png');
    this.load.image('resume', 'assets/resume.png');
    this.load.image('back_cover', 'assets/backCover.png');
    this.load.image('controls', 'assets/gameControls.png');
    this.load.image('F', 'assets/etichetta_F.png');
    this.load.image('spada_etichetta', 'assets/spada_etichetta.png');
    this.load.image('sandali_etichetta', 'assets/sandali_etichetta.png');
    this.load.image('scudo_etichetta', 'assets/scudo_etichetta.png');
//messaggi
    this.load.image('messaggio1', 'assets/messaggio1.png');
    this.load.image('messaggio2', 'assets/messaggio2.png');
    this.load.image('messaggio3', 'assets/messaggio3.png');
    this.load.image('messaggio4', 'assets/messaggio4.png');
    this.load.image('messaggio5', 'assets/messaggio5.png');
//schermate
    this.load.image('schermata_morte', 'render/schermata_morte.jpg');
    this.load.image('schermata_negativa', 'render/schermata_negativa.jpg');
    this.load.image('schermata_positiva', 'render/schermata_positiva.jpg');
    this.load.image('ricomincia', 'assets/ricomincia.png');
    this.load.image('torna_copertina', 'assets/torna_copertina.png');
//suolo
    this.load.image('ground_3', 'assets/suolo182.png');
    this.load.image('ground_3_a', 'assets/suolo182_a.png');
    this.load.image('ground_3_a1', 'assets/suolo182_a1.png');
    this.load.image('ground_3_a2', 'assets/suolo182_a2.png');
    this.load.image('ground_3.1', 'assets/suolo182_medio.png');
    this.load.image('ground_3.1_a', 'assets/suolo182_medio_a.png');
    this.load.image('ground_3.1_a2', 'assets/suolo182_medio_a2.png');
    this.load.image('ground_3.2', 'assets/suolo182_lungo.png');
    this.load.image('ground_3.2_a', 'assets/suolo182_lungo_a.png');
    this.load.image('ground_2', 'assets/suolo125.png');
    this.load.image('ground_2_a', 'assets/suolo125_a.png')
//terminali
    this.load.image('terminale_0', 'assets/terminale_0.png');
    this.load.image('terminale_2', 'assets/terminale_2.png');
    this.load.image('terminale_3', 'assets/terminale_3.png');
    this.load.image('terminale_5', 'assets/terminale_5.png');
    this.load.image('terminale_lungo', 'assets/terminale_lungo.png');
//muri
    this.load.image('muro_destra', 'assets/muro_destra.png');
    this.load.image('muro_destra_2', 'assets/muro_destra_2.png');
    this.load.image('muro_destra_3', 'assets/muro_destra_3.png');
    this.load.image('muro_sinistra', 'assets/muro_sinistra.png');
//piattaforme
    this.load.image('platform3', 'assets/piattaforma_grande.png');
    this.load.image('platform2', 'assets/piattaforma_media.png');
    this.load.image('platform1', 'assets/piattaforma_piccola.png');
    this.load.image('cadente', 'assets/piattaforma_cadente.png');
//ostacoli 
    this.load.image('ostacolo_3', 'assets/ostacolo_3.png');
    this.load.image('ostacolo_2.1', 'assets/ostacolo_2.1.png');
    this.load.image('ostacolo_2.2', 'assets/ostacolo_2.2.png');
    this.load.image('ostacolo_2.3', 'assets/ostacolo_2.3.png');
//teseo
	this.load.spritesheet('teseo', 'assets/teseo_inizio.png', 230, 200);
    this.load.spritesheet('sword', 'assets/teseo_spada.png', 230, 200);
    this.load.spritesheet('sandals', 'assets/teseo_sandali_2.png', 230, 200);
    this.load.spritesheet('shield', 'assets/teseo_scudo.png', 230, 200);
//nemici
    this.load.spritesheet('topo', 'assets/topo.png', 64, 30);
    this.load.spritesheet('arpia', 'assets/arpia_spritesheet.png', 192, 120);
    this.load.image('barriera', 'assets/barriera_arpia.png')
    this.load.spritesheet('empusa', 'assets/empusa_spritesheet.png', 300, 160);
    this.load.image('barriera_2', 'assets/barriera.png')
    this.load.spritesheet('ortro', 'assets/corsa e salto ortro.png', 250, 210);
    this.load.spritesheet('minotauro', 'assets/minotauro_spritesheet.png', 350, 500);
//oggetti interattivi
    this.load.spritesheet('checkpoint', 'assets/checkpoint.png', 60, 220);
    this.load.spritesheet('spada', 'assets/spada_spritesheet.png', 35, 90);
    this.load.spritesheet('sandali', 'assets/sandali_spritesheet.png', 35, 70);
    this.load.spritesheet('scudo', 'assets/scudo_spritesheet.png', 60, 90);
    this.load.image('scritta', 'assets/scritta_muro.png');
    this.load.image('scritta_2', 'assets/scritta_muro_s.png');
//oggetti decorativi
    this.load.image('colonna', 'assets/colonna_piccola.png');
    this.load.image('colonna_piccola', 'assets/colonna_piccola_2.png');
    this.load.spritesheet('lanterna', 'assets/lanterna_spritesheet.png', 60, 200);
    this.load.image('vasi', 'assets/vasi.png');
//scheletri
    this.load.image('scheletro_1', 'assets/scheletro_1.png');
    this.load.image('scheletro_2', 'assets/scheletro_2.png');
    this.load.image('scheletro_2.2', 'assets/scheletro_2.2.png');
    this.load.image('scheletro_3', 'assets/scheletro_3.png');
    this.load.image('scheletro_4', 'assets/scheletro_4.png');
 //porte   
    this.load.image('porta_ingresso', 'assets/porta_ingresso.png');
    this.load.image('porta_minotauro', 'assets/porta_minotauro.png');
    this.load.image('porta_piccola', 'assets/porta_2.png');
     this.load.image('porta_piccola_chiusa', 'assets/porta_3.png');
//statue    
    this.load.image('statua_corsa', 'assets/statua.png');
    this.load.image('statua_salto', 'assets/statua_salto.png');
    this.load.image('statua_spada', 'assets/statua_spada.png');
    this.load.image('statua_dash', 'assets/statua_dash.png');
    this.load.image('statua_scudo', 'assets/statua_scudo.png');
//utility
    this.load.image('clown', 'assets/clown.png');    


}
var testi = {font: "25px dalek", fill: "white"};

var player;
var spawn_x = 470; //[59750 checkpoint minotauro, 36500 pre-ortro, 32700 tripla porta, 9400 spada]
var spawn_y = 300;

var platforms;
var ground;
var ledge;

var moving_platform1;
var moving_platform2;
var moving_platform3;
var moving_platform4;
var moving_platform5;
var moving_platform6;

var falling_platform1;
var falling_platform2;
var falling_platform3;
var falling_platform4;
var falling_platform5;
var ostacolo;

var cursors;
var attackButton;
var shieldButton;
var dashButton;
var interationButton;

var spada;
var sandali;
var scudo;
var spada_presa = false;
var sandali_presi = false;
var scudo_preso = false;
var marcia = false;

var dash = true; //rimane true di default
var attacco_fatto = false;
var attacco = false;
var helper;
var pass = true;

var topo1;
var topo2;
var topo3;
var topo4;
var topo5;
var topo6;
var topo7;
var topo1_vita = 1;
var topo2_vita = 1;
var topo3_vita = 1;
var topo4_vita = 1;
var topo5_vita = 1;
var topo6_vita = 1;
var topo7_vita = 1;

var arpia1;
var arpia2;
var arpia3;
var arpia4;
var barriera;
var barriera_arpia;
var arpia1_vita = 4;
var arpia2_vita = 4;
var arpia3_vita = 4;
var arpia4_vita = 4;

var empusa;
var empusa_vita = 15;
var aggro = false;
var aggro2 = false;
var cd = false;
var dx;
var dy;
var e_barriera_d;
var e_barriera_s;
var empusa_morta = false;

var ortro;
var gabbia;

var minotauro;
var r;
var minotauro_vita = 100;
var caduta = false;
var respawn = false;

var door;
var door1;
var door2;
var door3;
var door4;
var door_etichetta;
var door_etichetta_1;
var door_etichetta_2;
var door_etichetta_3;
var door_etichetta_4;
var lanterne;

var scritta1;
var scritta_etichetta_1;
var scritta2;
var scritta_etichetta_2;
var scritta3;
var scritta_etichetta_3;
var scritta4;
var scritta_etichetta_4;
var scritta5;
var scritta_etichetta_5;

var schermata_morte;
var fine = false;

var x_etichetta;
var y_etichetta;

var barravita;
var barravita_2;
var cuore;

var barrafilo;
var barrafilo_2;
var gomitolo;

var spada_etichetta;
var sandali_etichetta;
var scudo_etichetta;

var checkpoint1;
var checkpoint2;
var checkpoint3;
var checkpoint4;

var tastoPausa;
var menuPausa;
var backCover;
var controls;
var resume;
var gamePaused = false;



function create() {

game.world.setBounds(0, 0, game.width*61, game.height*2);

// cielo e greca
    this.add.image (0, 0, 'sky');
    this.add.image (14336, 0, 'sky');
    this.add.image (28672, 0, 'sky');
    this.add.image (43008, 0, 'sky');
    this.add.image (57344, 0, 'sky_2');
    
    this.add.image (0, 0, 'banda_superiore'); 
    this.add.image (14336, 0, 'banda_superiore'); 
    this.add.image (28672, 0, 'banda_superiore');
    this.add.image (43008, 0, 'banda_superiore');
    this.add.image (57344, 0, 'banda_superiore');

    // piattaforme
    platforms = game.add.physicsGroup();
    lanterne = game.add.group();
    
    //inizio
    this.add.image (170, 223, 'porta_ingresso');
    lanterne.create (450, 210, 'lanterna');
    this.add.image (2600, 700-632, 'colonna');
    this.add.image (950, 700-632, 'colonna');
    this.add.image (1200, 700-632, 'colonna');
    this.add.image (1450, 700-632, 'colonna');
    this.add.image (0, 68, 'colonna_piccola');
    this.add.image (500, 68, 'colonna_piccola');
    
    this.add.image (700, 227, 'statua_corsa');
    this.add.image (1700, 227, 'statua_salto');
    this.add.image (2530, 490, 'vasi');
    lanterne.create (1120, 210, 'lanterna');
    lanterne.create  (1380, 210, 'lanterna');
    
    ground = platforms.create (0, 630,'ground_3');
    ground = platforms.create (0, 530,'ground_3');
    ground = platforms.create (0, 530,'ground_3');
    ground = platforms.create (600, 586, 'ground_2_a');
    ground = platforms.create (2200, 586, 'ground_3_a');
      
    //gruppo 1 piattaforme
    ledge = platforms.create(3500, 350, 'platform2')
    ledge = platforms.create(3000, 450, 'platform1');
    
   //gruppo 2 suolo
    ground = platforms.create (4000, 586, 'ground_3.2_a')
    ground = platforms.create (4400, 461, 'ground_3.1')
    ground = platforms.create (4600, 336, 'ground_3')
    
    this.add.image (4400, 517, 'terminale_2');
    this.add.image (4600, 392, 'terminale_2');
    this.add.image (5361, 517, 'terminale_2');
    this.add.image (5200, 392, 'terminale_2');
    
    lanterne.create  (4620, 5, 'lanterna');
    lanterne.create  (4810, 5, 'lanterna');
    lanterne.create  (5000, 5, 'lanterna');
    lanterne.create  (5190, 5, 'lanterna');
    
    this.add.image (5450, 68, 'colonna');
    this.add.image (5700, 68, 'colonna');
    this.add.image (5950, 68, 'colonna');
    
     //gruppo 3 piattaforme
    ledge = platforms.create(6300, 430, 'platform3');
    //moving
    moving_platform1 = game.add.sprite(7200, 500, 'platform2')
    game.physics.arcade.enable(moving_platform1);
    moving_platform1.body.immovable = true;
    ledge = platforms.create(7850, 260, 'platform1');
    ledge = platforms.create(8400, 550, 'platform2');

    //gruppo 4 suolo
    
    ground = platforms.create (9000, 461, 'ground_3.1_a')
    ground = platforms.create (9961, 587, 'ground_3.2')
    ground = platforms.create (11110, 461, 'ground_3.1_a2')
    ground = platforms.create (11310, 336, 'ground_3')

    this.add.image (11110, 518, 'terminale_2');
    this.add.image (11310, 393, 'terminale_2');
    this.add.image (11910, 393, 'terminale_2');

    spada = game.add.sprite (9450, 360, 'spada');
    game.physics.arcade.enable(spada);

    this.add.image (9700, 103, 'statua_spada');
    this.add.image (9600, 365, 'vasi');
    lanterne.create (9080, 5, 'lanterna');
    lanterne.create (9270, 5, 'lanterna');
    lanterne.create (9460, 5, 'lanterna');

    ostacolo = game.add.physicsGroup();
    ostacolo.create (11459 + 100, 395 - 125, 'ostacolo_2.1');
    ostacolo.create (11500 + 100, 370 - 125, 'ostacolo_2.2');
    ostacolo.create (11588 + 100, 414 - 125, 'ostacolo_2.3');
    
    //gruppo 5 piattaforme
    ledge = platforms.create(12300, 430, 'platform2');
    ledge = platforms.create(12900, 300, 'platform1'); 
    ledge = platforms.create(13400, 400, 'platform1');
    ledge = platforms.create(13850, 570, 'platform2');

    //gruppo 6 suolo empusa    
    ground = platforms.create (17720, 768, 'terminale_lungo');
    this.add.image (14540, 508, 'scheletro_2.2');
    this.add.image (14650, 490, 'vasi');
    this.add.image (18030, 976, 'vasi');
    
    ground = platforms.create (17720, 1072, 'ground_3.1_a')
    ground = platforms.create (15000, 961, 'ground_3.2')
    ground = platforms.create (17000, 1061, 'ground_3.1')
    ground = platforms.create (17000, 961, 'ground_3.1')
    ground = platforms.create (17000, 836, 'ground_3.1')
    ground = platforms.create (17360, 711, 'ground_3')
    ground = platforms.create (17720, 586, 'ground_3.1')
    ground = platforms.create (14600, 936, 'ground_3.1')
    ground = platforms.create (14600, 836, 'ground_3.1')
    ground = platforms.create (14650, 711, 'ground_3')
    ground = platforms.create (14400, 586, 'ground_3_a1')

    this.add.image (15000, 643, 'terminale_2');
    this.add.image (15250, 768, 'terminale_2');
    this.add.image (15560, 893, 'terminale_2');
    
    this.add.image (17000, 894, 'terminale_2');
    this.add.image (17360, 768, 'terminale_2');
    this.add.image (17720, 643, 'terminale_2');
    this.add.image (18681, 643, 'terminale_3');
    this.add.image (17961, 769, 'terminale_5');
    
    this.add.image (14520, 26, 'sfondo_empusa');
    this.add.image (14520, 0, 'banda_superiore_bassa');
    this.add.image (15850, 444, 'colonna');
    this.add.image (16100, 444, 'colonna');
    this.add.image (16350, 444, 'colonna');
    this.add.image (16600, 444, 'colonna');
    
    this.add.image (15044, 632, 'scheletro_1');
    this.add.image (17100, 808, 'scheletro_3');
    
    sandali = game.add.sprite (17520, 630, 'sandali');
    game.physics.arcade.enable(sandali);

	e_barriera_s = game.add.sprite(15560, 836, 'barriera_2');
    game.physics.arcade.enable(e_barriera_s);
    e_barriera_s.body.immovable = true;
    e_barriera_d = game.add.sprite(17000, 836, 'barriera_2');
    game.physics.arcade.enable(e_barriera_d);
    e_barriera_d.body.immovable = true;

    this.add.image (18150, 228, 'statua_dash');
    
    door = game.add.sprite (18150, 871, 'porta_piccola');
    door_etichetta = game.add.sprite (18208, 900, "F")
    door_etichetta.visible = false;
    game.physics.arcade.enable(door);
    
    //gruppo 7 piattaforme
    moving_platform2 = game.add.sprite(18900, 340, 'platform2')
    game.physics.arcade.enable(moving_platform2);
    moving_platform2.body.immovable = true;
    //ledge = platforms.create(18900, 500, 'platform2');
    moving_platform3 = game.add.sprite(19280, 500, 'platform1')
    game.physics.arcade.enable(moving_platform3);
    moving_platform3.body.immovable = true;
    //ledge = platforms.create(19500, 500, 'platform1');

    ledge = platforms.create(20000, 500, 'platform3');

	moving_platform4 = game.add.sprite(20480, 500, 'platform2')
    game.physics.arcade.enable(moving_platform4);
    moving_platform4.body.immovable = true;
    //ledge = platforms.create(20800, 500, 'platform2');
    moving_platform5 = game.add.sprite(21400, 910, 'platform1')
    game.physics.arcade.enable(moving_platform5);
    moving_platform5.body.immovable = true;
    //ledge = platforms.create(21400, 500, 'platform1');

    //gruppo 8 suolo
    ground = platforms.create (21900, 586, 'ground_3_a');
    this.add.image (21990, 68, 'colonna');
    this.add.image (22290, 68, 'colonna');
    lanterne.create (22200, 210, 'lanterna');
    lanterne.create (21900, 210, 'lanterna');
    lanterne.create (22500, 210, 'lanterna');
    
    //gruppo 9 piattaforme 
    ledge = platforms.create(22700, 500, 'platform2');
    ledge = platforms.create(23300, 350, 'platform1');
    ledge = platforms.create(23750, 500, 'platform2');
    moving_platform6 = game.add.sprite(24300, 910, 'platform1')
    game.physics.arcade.enable(moving_platform6);
    moving_platform6.body.immovable = true;
    //ledge = platforms.create(24300, 500, 'platform1');

    //gruppo 10 suolo
    
    ground = platforms.create (24800, 586, 'ground_3_a')
    this.add.image (25250, 68, 'colonna');
    this.add.image (24850, 68, 'colonna');
    this.add.image (25060, 385, 'porta_piccola_chiusa');
    
    //gruppo 11 suolo
    
    ground = platforms.create (25700, 586, 'ground_3.2_a')
    ground = platforms.create (25950, 461, 'ground_3.1')
    ground = platforms.create (26200, 336, 'ground_3')
    ground = platforms.create (27800, 461, 'ground_3_a2')
    
    this.add.image (25950, 518, 'terminale_2');
    this.add.image (26200, 392, 'terminale_2');
    this.add.image (26800, 392, 'terminale_2');
    this.add.image (26912, 518, 'terminale_2');
    this.add.image (27800, 518, 'terminale_2');

    ostacolo.create (26500, 307, 'ostacolo_3');
    
    lanterne.create (26180, 5, 'lanterna');
    lanterne.create (26370, 5, 'lanterna');
    lanterne.create (26560, 5, 'lanterna');
    lanterne.create (26750, 5, 'lanterna');
    
    this.add.image (28020, 381, 'scheletro_1');
    
    //gruppo 12 piattafome
    
    ledge = platforms.create(28700, 500, 'platform2');
    ledge = platforms.create(29400, 500, 'platform1');
    
    //gruppo 13 le tre porte
    this.add.image (29950, 68, 'colonna');
    this.add.image (30200, 385, 'porta_piccola_chiusa');
    this.add.image (30450, 68, 'colonna');
    this.add.image (30700, 68, 'colonna');
    lanterne.create (30380, 210, 'lanterna');
    lanterne.create (30100, 210, 'lanterna');
    
    ground = platforms.create (29900, 586, 'ground_3.1_a')
    
    ledge = platforms.create(31100, 550, 'platform2');
    ledge = platforms.create(31700, 400, 'platform1');
    
    ground = platforms.create (32200, 586, 'ground_3.1_a')
    
    this.add.image (32250, 68, 'colonna');
    this.add.image (33000, 68, 'colonna');
    
    door1 = game.add.sprite(32450, 385, 'porta_piccola');
    door2 = game.add.sprite(32650, 385, 'porta_piccola');
    door3 = game.add.sprite(32850, 385, 'porta_piccola');
    
    door_etichetta_1 = game.add.sprite (32510, 410, "F")
    door_etichetta_1.visible = false;
    game.physics.arcade.enable(door1);
    door_etichetta_2= game.add.sprite (32710, 410, "F")
    door_etichetta_2.visible = false;
    game.physics.arcade.enable(door2);
    door_etichetta_3 = game.add.sprite (32910, 410, "F")
    door_etichetta_3.visible = false;
    game.physics.arcade.enable(door3);
    
    platforms.create (33161, 0, 'muro_destra_2');
    
    //inizio ortro
    this.add.image (36550, 505, 'scheletro_1');
    this.add.image (37365, 805, 'scheletro_3');
    lanterne.create (36160, 210, 'lanterna');
    lanterne.create (36460, 210, 'lanterna');
    this.add.image (36100, 490, 'vasi');
    
    this.add.image (36270, 385, 'porta_piccola_chiusa');
    this.add.image (36601, 962, 'terminale_lungo');
    ground = platforms.create (36300, 1018, 'ground_3.1')
    ground = platforms.create (36300, 961, 'ground_3.1')
    ground = platforms.create (36600, 836, 'ground_3.1')
    ground = platforms.create (36300, 711, 'ground_3.1')
    ground = platforms.create (36000, 586, 'ground_3.1')
    this.add.image (36656, 26, 'sfondo_empusa');
    this.add.image (36656, 0, 'banda_superiore_bassa');
    ground = platforms.create (36000, 586, 'ground_3.1')
    ground = platforms.create (36600, 1200, 'ground_3.2_a')

    
    this.add.image (36962, 643, 'terminale_2');
    this.add.image (37262, 768, 'terminale_2');
    this.add.image (37562, 893, 'terminale_2');
    this.add.image (37262, 1018, 'terminale_3');
    this.add.image (37262, 962, 'terminale_0');

    
    platforms.create (35458, 0, 'muro_sinistra');

    scudo = game.add.sprite (38100, 1100, 'scudo');
    game.physics.arcade.enable(scudo);
    
    gabbia = game.add.sprite (37562, 961, 'barriera_2');
    game.physics.arcade.enable(gabbia);
    gabbia.body.immovable = true;

    //percorso ortro
    
    ledge = platforms.create(38850, 1050, 'platform1');
    ledge = platforms.create(39250, 900, 'platform1');
    ledge = platforms.create(39600, 750, 'platform1');
    ledge = platforms.create(39950, 600, 'platform1');
    
    ground = platforms.create (40400, 586, 'ground_3_a');
    ostacolo.create (42459, 395, 'ostacolo_2.1');
    ostacolo.create (42500, 370, 'ostacolo_2.2');
    ostacolo.create (42588, 414, 'ostacolo_2.3');
    
    this.add.image (40520, 68, 'colonna');
    this.add.image (40770, 68, 'colonna');
    lanterne.create (40420, 210, 'lanterna');
    lanterne.create (40700, 210, 'lanterna');
    lanterne.create (40980, 210, 'lanterna');
    
    ledge = platforms.create(41200, 450, 'platform2');
    
	ground = platforms.create (42200, 586, 'ground_3.1_a2');
    ground = platforms.create (42200, 461, 'ground_3_a1');    

    this.add.image (42800, 517, 'terminale_2');
    
    ledge = platforms.create(43450, 450, 'platform1');
    ledge = platforms.create(44450, 450, 'platform2');
    ledge = platforms.create(45250, 600 - 20, 'platform3');
    ostacolo.create (45600, 572 - 20, 'ostacolo_3');

    ledge = platforms.create(46220, 500, 'platform1');
    
    ground = platforms.create (47250, 586, 'ground_3.1_a');
    ostacolo.create (47559, 520, 'ostacolo_2.1');
    ostacolo.create (47600, 495, 'ostacolo_2.2');
    ostacolo.create (47688, 539, 'ostacolo_2.3');
    ledge = platforms.create(48400, 500, 'platform1');

    ledge = platforms.create(49300, 570, 'platform1');
    
    this.add.image (47350, 68, 'colonna');
    this.add.image (47800, 68, 'colonna');
    this.add.image (48050, 68, 'colonna');
    lanterne.create (47970, 210, 'lanterna');
    
    ground = platforms.create (50300, 410, 'ground_3_a');

    ground = platforms.create (51900, 711, 'ground_3.1');
    ground = platforms.create (51500, 711, 'ground_3.1_a');
    ground = platforms.create (52150, 711, 'ground_3.1');
    ground = platforms.create (53800, 586, 'ground_3.1');
    ground = platforms.create (53800, 461, 'ground_3.1');
    ground = platforms.create (52150, 586, 'ground_3.1');
    ground = platforms.create (52500, 461, 'ground_3');
    ground = platforms.create (52850, 586, 'ground_3.1');
    ground = platforms.create (52850, 461, 'ground_3.1');
    ground = platforms.create (52850, 336, 'ground_3.1');
    
    lanterne.create (53000, 5, 'lanterna');
    lanterne.create (53200, 5, 'lanterna');
    lanterne.create (53400, 5, 'lanterna');
    lanterne.create (53580, 5, 'lanterna');
    
    lanterne.create (54050, 5, 'lanterna');
    lanterne.create (54500, 5, 'lanterna');
    

    this.add.image (52150, 643, 'terminale_2');
    this.add.image (52500, 518, 'terminale_2');
    this.add.image (52850, 393, 'terminale_2');
    this.add.image (53811, 393, 'terminale_2');
    
    door4 = game.add.sprite(54180, 155, 'porta_minotauro');
    game.time.events.add (2000, function (){
    door_etichetta_4 = game.add.sprite (54300, 260, "F")
    door_etichetta_4.visible = false;})
    game.physics.arcade.enable(door4);
    
    this.add.image (52050, 630, 'scheletro_4');
    this.add.image (52600, 432, 'scheletro_3');
    this.add.image (54443, 382, 'scheletro_2');
    
    platforms.create (54761, 0, 'muro_destra');
    
    //stanza minotauro
    ground = platforms.create (57250, 961, 'ground_3.1')
    ground = platforms.create (58200, 961, 'ground_3')
    ground = platforms.create (58200, 836, 'ground_3')
    ground = platforms.create (58600, 836, 'ground_3')
    ground = platforms.create (58600, 711, 'ground_3')
    ground = platforms.create (59000, 711, 'ground_3')
    ground = platforms.create (59000, 586, 'ground_3')
    this.add.image (59760, 102, 'statua_scudo');

    ground = platforms.create (59400, 461, 'ground_3_a2')
    ground = platforms.create (60055, 836, 'terminale_0')
    
    ground = platforms.create (60500, 586, 'ground_3.1')
    ground = platforms.create (60500, 961, 'ground_3.2_a')
    ground = platforms.create (61700, 836, 'ground_3')
    ground = platforms.create (61850, 711, 'ground_3')
    
    this.add.image (55650, 26, 'sfondo_minotauro');
    this.add.image (55650, 0, 'banda_superiore_bassa');
    
    this.add.image(57550, 655, 'porta_ingresso');
    
    this.add.image (58200, 892, 'terminale_2');
    this.add.image (58600, 767, 'terminale_2');
    this.add.image (59000, 642, 'terminale_2');
    this.add.image (59400, 517, 'terminale_2');
    
    this.add.image (60500, 711, 'terminale_lungo');
    this.add.image (60500, 642, 'terminale_2');
    this.add.image (61460, 642, 'terminale_2');
    this.add.image (61700, 892, 'terminale_2');
    this.add.image (61850, 767, 'terminale_2');
    
    this.add.image (60550, 69, 'colonna');
    this.add.image (60800, 69, 'colonna');
    this.add.image (61050, 69, 'colonna');
    this.add.image (61300, 69, 'colonna');
    
    lanterne.create (60720, 210, 'lanterna');
    lanterne.create (60970, 210, 'lanterna');
    lanterne.create (61220, 210, 'lanterna');
    
    this.add.image (60650, 880, 'scheletro_1');
    this.add.image (59970, 380, 'scheletro_4');
    this.add.image (59670, 430, 'scheletro_3');
    this.add.image (59250, 505, 'scheletro_1');
    this.add.image (58882, 630, 'scheletro_2.2');
    this.add.image (58750, 680, 'scheletro_3');
    this.add.image (57380, 880, 'scheletro_1');
    
        
    ground = platforms.create (56800, 375, 'muro_sinistra')
    this.add.image (56800, 375, 'muro_sinistra');
    ground = platforms.create (62170, 0, 'muro_destra_3')
   
    
//setAll
    platforms.setAll ('body.immovable', true)
    ostacolo.setAll ('body.immovable', true)
    lanterne.callAll('animations.add', 'animations', 'lanterna', [0, 1, 2, 3, 4, 5], 10, true);


//fine
    platforms.setAll ('body.immovable', true)
    ostacolo.setAll ('body.immovable', true)
    lanterne.callAll('animations.add', 'animations', 'lanterna', [0, 1, 2, 3, 4, 5], 10, true);
    
    //scritte con messaggi
    scritta1 = game.add.sprite (1110, 455, 'scritta');
    game.physics.arcade.enable(scritta1);
    scritta_etichetta_1 = game.add.sprite (1138, 413, "F")
    scritta_etichetta_1.visible = false;
    
    //scritta empusa
    scritta2 = game.add.sprite (14595, 450, 'scritta');
    scritta_etichetta_2 = game.add.sprite (14620, 408, "F")
    scritta_etichetta_2.visible = false;
    
    game.physics.arcade.enable(scritta2);
    
    //scritta porte
    scritta3 = game.add.sprite (28061, 325, 'scritta');
    scritta_etichetta_3 = game.add.sprite (28080, 280, "F")
    scritta_etichetta_3.visible = false;
    game.physics.arcade.enable(scritta3);
    
    //scritta ortro
    scritta4 = game.add.sprite (36600, 450, 'scritta');
    scritta_etichetta_4 = game.add.sprite (36628, 410, "F")
    scritta_etichetta_4.visible = false;
    game.physics.arcade.enable(scritta4);
    
    //scritta minotauro
    scritta5 = game.add.sprite (60700, 830, 'scritta_2');
    scritta_etichetta_5 = game.add.sprite (60728, 790, "F")
    scritta_etichetta_5.visible = false;
    game.physics.arcade.enable(scritta5);


//animazioni oggetti
    spada.animations.add('spada', [0, 1, 2, 3, 4, 5, 6, 7, 8], 8, true);
    sandali.animations.add('sandali', [0, 1, 2, 3, 4, 5, 6, 7, 8], 8, true);
    scudo.animations.add('scudo', [0, 1, 2, 3, 4, 5, 6, 7, 8], 8, true);


//falling_platform
    falling_platform1 = game.add.sprite(41700, 350, 'cadente');
    game.physics.arcade.enable(falling_platform1);

    falling_platform2 = game.add.sprite(43990, 350, 'cadente');
    game.physics.arcade.enable(falling_platform2);

    falling_platform3 = game.add.sprite(46700, 450, 'cadente');
    game.physics.arcade.enable(falling_platform3);

    falling_platform4 = game.add.sprite(48900, 400, 'cadente');
    game.physics.arcade.enable(falling_platform4);

    falling_platform5 = game.add.sprite(49800, 500, 'cadente');
    game.physics.arcade.enable(falling_platform5);


// player
    player = game.add.sprite(spawn_x, spawn_y, 'teseo');

	player.vitamassima = 100;
    player.vita = 100;

    player.filomassimo = 8
    player.filo = 8

    game.physics.arcade.enable(player);
    //game.camera.follow(player);
    //player.body.bounce.y = 0.15;
    player.body.gravity.y = 800;
    player.body.collideWorldBounds = true;

    player.body.setSize(50, 122, 0, 39);
    player.anchor.setTo(.5, .5);

    player.direction = "still"
    player.frame = 13


// player - animazioni
    player.animations.add('left', [11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 15, true);
    player.animations.add('right', [14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25], 15, true);

    player.animations.add('left_salto', [37, 36, 35, 34, 33, 32, 31, 30, 29, 28, 27, 26], 10, false);
    player.animations.add('right_salto', [40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51], 10, false);

//player - animazioni attacco
    player.animations.add('affondo_sx', [89, 88, 87, 86, 85, 84, 83, 82, 81], 15, false);
    player.animations.add('affondo_dx', [92, 93, 94, 95, 96, 97, 98, 99, 100], 15, false);

    player.animations.add('fendente_sx', [115, 114, 113, 112, 111, 110, 109, 108, 107], 15, false);
    player.animations.add('fendente_dx', [118, 119, 120, 121, 122, 123, 124, 125, 126], 10, false);

    player.animations.add('marcia_dx', [144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155], 10, true);
    player.animations.add('marcia_sx', [141, 140, 139, 138, 137, 136, 135, 134, 133, 132, 131, 130], 10, true);



//helper
	helper = game.add.sprite (9100, 361, 'clown');

	game.physics.arcade.enable(helper);
	helper.body.collideWorldBounds = true;
	helper.body.gravity.y = 400;

	helper.alpha = 0


// topi
    topo1 = game.add.sprite(3500, 100, 'topo');

    topo2 = game.add.sprite(4690, 100, 'topo');

    topo3 = game.add.sprite(5665, 100, 'topo');
   
    topo4 = game.add.sprite(8300, 100, 'topo');
    
    topo5 = game.add.sprite(13750, 100, 'topo');

    topo6 = game.add.sprite(26100, 100, 'topo');

    topo7 = game.add.sprite(26495, 100, 'topo');

	game.physics.arcade.enable(topo1);
    topo1.body.gravity.y = 800;
    topo1.anchor.setTo(.5,.5);

    game.physics.arcade.enable(topo2);
    topo2.body.gravity.y = 800;
    topo2.anchor.setTo(.5,.5);

    game.physics.arcade.enable(topo3);
    topo3.body.gravity.y = 800;
    topo3.anchor.setTo(.5,.5);

    game.physics.arcade.enable(topo4);
    topo4.body.gravity.y = 800;
    topo4.anchor.setTo(.5,.5);

    game.physics.arcade.enable(topo5);
    topo5.body.gravity.y = 800;
    topo5.anchor.setTo(.5,.5);

    game.physics.arcade.enable(topo6);
    topo6.body.gravity.y = 800;
    topo6.anchor.setTo(.5,.5);

    game.physics.arcade.enable(topo7);
    topo7.body.gravity.y = 800;
    topo7.anchor.setTo(.5,.5);


//arpie
    arpia1 = game.add.sprite(10400, 400, 'arpia');
    
    arpia2 = game.add.sprite(22200, 400, 'arpia');
    
    arpia3 = game.add.sprite(27500, 400, 'arpia');
    
    arpia4 = game.add.sprite(30600, 400, 'arpia');
    
    game.physics.arcade.enable(arpia1);
    arpia1.body.gravity.y = -550;
    arpia1.anchor.setTo(.5,.5);
    arpia1.body.setSize(100, 100, 0, 10)
    arpia1.scale.x = 0.8
    arpia1.scale.y = 0.8

    game.physics.arcade.enable(arpia2);
    arpia2.body.gravity.y = -550;
    arpia2.anchor.setTo(.5,.5);
    arpia2.body.setSize(100, 100, 0, 10);
    arpia2.scale.x = 0.8
    arpia2.scale.y = 0.8

    game.physics.arcade.enable(arpia3);
    arpia3.body.gravity.y = -550;
    arpia3.anchor.setTo(.5,.5);
    arpia3.body.setSize(100, 100, 0, 10);
    arpia3.scale.x = 0.8
    arpia3.scale.y = 0.8

    game.physics.arcade.enable(arpia4);
    arpia4.body.gravity.y = -550;
    arpia4.anchor.setTo(.5,.5);
    arpia4.body.setSize(100, 100, 0, 10);
    arpia4.scale.x = 0.8
    arpia4.scale.y = 0.8


    barriera = game.add.physicsGroup();

    barriera_arpia = barriera.create (10000, 0, 'barriera');
    barriera.alpha = 0
    barriera_arpia = barriera.create (10800, 0, 'barriera');
    barriera.alpha = 0

    barriera_arpia = barriera.create (21900, 0, 'barriera');
    barriera.alpha = 0
    barriera_arpia = barriera.create (22500, 0, 'barriera');
    barriera.alpha = 0

    barriera_arpia = barriera.create (27100, 0, 'barriera');
    barriera.alpha = 0
    barriera_arpia = barriera.create (27700, 0, 'barriera');
    barriera.alpha = 0

    barriera_arpia = barriera.create (30300, 0, 'barriera');
    barriera.alpha = 0
    barriera_arpia = barriera.create (30900, 0, 'barriera');
    barriera.alpha = 0

    barriera.setAll ('body.immovable', true)

    arpia1.animations.add('volo_arpia', [0, 1, 2, 3, 4, 5, 6, 7], 15, true);
    arpia1.animations.add('volo_arpia_d', [8, 9, 10, 11, 12, 13, 14, 15], 15, true);
    arpia2.animations.add('volo_arpia_2', [0, 1, 2, 3, 4, 5, 6, 7], 15, true);
    arpia2.animations.add('volo_arpia_2d', [8, 9, 10, 11, 12, 13, 14, 15], 15, true);
    arpia3.animations.add('volo_arpia_3', [0, 1, 2, 3, 4, 5, 6, 7], 15, true);
    arpia3.animations.add('volo_arpia_3d', [8, 9, 10, 11, 12, 13, 14, 15], 15, true);
    arpia4.animations.add('volo_arpia_4', [0, 1, 2, 3, 4, 5, 6, 7], 15, true);
    arpia4.animations.add('volo_arpia_4d', [8, 9, 10, 11, 12, 13, 14, 15], 15, true);


//empusa
    empusa = game.add.sprite(16506, 400, 'empusa');
    empusa.anchor.setTo(.5, 0);
    game.physics.arcade.enable(empusa);
    empusa.body.collideWorldBounds = true;
    empusa.body.gravity.y = 500;
    empusa.body.setSize(50, 120, 0, 40);
    
    empusa.animations.add('e_camminata_d', [8, 7, 6, 5, 4, 3], 10, true);
    empusa.animations.add('e_camminata_s', [9, 10, 11, 12, 13, 14], 10, true);
    empusa.animations.add('e_dash_d', [26, 25, 24, 23, 22, 21], 10, true);
    empusa.animations.add('e_dash_s', [27, 27, 28, 30, 31, 32], 10, true);
    empusa.animations.add('e_cooldown_d', [44, 43, 42, 41, 40], 15, false);
    empusa.animations.add('e_cooldown_s', [45, 46, 47, 48, 49], 15, false);
    empusa.animations.add('e_morte_d', [62, 61, 60, 59, 58, 57, 56, 55, 54], 10, false);
    empusa.animations.add('e_morte_s', [63, 64, 65, 65, 67, 68, 69, 70, 71], 10, false);

//ortro
	ortro = game.add.sprite (37430, 1100, 'ortro');
	ortro.anchor.setTo(.5,.5);

	game.physics.arcade.enable(ortro);
	ortro.body.collideWorldBounds = true;
    ortro.body.gravity.y = 800;

    ortro.body.setSize(180, 150, 10, 22)
    ortro.frame = 0

    ortro.scale.x = 0.75
    ortro.scale.y = 0.75

// ortro - animazioni
	ortro.animations.add('corsa_ortro', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 17, true)
    ortro.animations.add('salto_ortro', [12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22], 15, false)


// minotauro
	minotauro = game.add.sprite (61350, 350, 'minotauro');
	minotauro.anchor.setTo(.5, .5);
	game.physics.arcade.enable(minotauro);
	minotauro.body.collideWorldBounds = true;
    minotauro.body.gravity.y = 900;

	//220, 240
    minotauro.body.setSize(150, 300, 0, -130)


// minotauro - animazione
	minotauro.animations.add('minotauro_cammina', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 5, true);
    minotauro.animations.add('minotauro_attacco', [13, 14, 15, 16, 17, 18, 19], 15, false);
	minotauro.animations.add('minotauro_fermo', [26, 27, 28, 29], 2, true);
    minotauro.animations.add('minotauro_morte', [39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 50, 49, 50, 50, 49, 50, 50, 49, 50, 50, 49, 50, 50, 50, 50, 50, 50, 50, 50], 8, false);
    minotauro.animations.add('minotauro_morte2', [39, 40, 41, 42, 43, 44, 45, 46], 10, false);


// checkpoint
    checkpoint1 = game.add.sprite(14870, 367, 'checkpoint') //11700
    game.physics.arcade.enable(checkpoint1);
    checkpoint1.animations.add('save', [1, 2, 3, 4, 5, 6], 10, true)

    checkpoint2 = game.add.sprite(18500, 368, 'checkpoint')
    game.physics.arcade.enable(checkpoint2);
    checkpoint2.animations.add('save', [1, 2, 3, 4, 5, 6], 10, true)

    checkpoint3 = game.add.sprite(36780, 367, 'checkpoint')
    game.physics.arcade.enable(checkpoint3);
    checkpoint3.animations.add('save', [1, 2, 3, 4, 5, 6], 10, true)

    checkpoint4 = game.add.sprite(59500, 241, 'checkpoint')
    game.physics.arcade.enable(checkpoint4);
    checkpoint4.animations.add('save', [1, 2, 3, 4, 5, 6], 10, true)

    checkpoint1.usato = false
    checkpoint2.usato = false
    checkpoint3.usato = false
    checkpoint4.usato = false
    
//effetto
	var effetto
    effetto = this.add.image (0, 0, 'effetto');
    effetto.fixedToCamera = true
        
    
// barra vita
    cuore = game.add.image (180,715, 'cuore');
    barravita_2 = game.add.image (220,715, 'vite_2');
	barravita = game.add.sprite(220, 715, 'vite');
    barravita.fixedToCamera = true;
    barravita_2.fixedToCamera = true;
    cuore.fixedToCamera = true;

    
// barra filo
    gomitolo = game.add.image (825,715, 'gomitolo');
    barravita_2 = game.add.image (520, 715, 'vite_2');
    barrafilo = game.add.sprite(520, 715, 'filo');
    barrafilo_2 = game.add.sprite(520, 715, 'filo_2');
    barrafilo.fixedToCamera = true;
    barravita_2.fixedToCamera = true;
    barrafilo_2.fixedToCamera = true;
    gomitolo.fixedToCamera = true;


// barra oggetti
	spada_etichetta = game.add.image (30, 35, 'spada_etichetta')
    spada_etichetta.fixedToCamera = true
    spada_etichetta.alpha = 0

    sandali_etichetta = game.add.image (130 - 15, 35, 'sandali_etichetta')
    sandali_etichetta.fixedToCamera = true
    sandali_etichetta.alpha = 0

    scudo_etichetta = game.add.image (230 - 30, 35, 'scudo_etichetta')
    scudo_etichetta.fixedToCamera = true
    scudo_etichetta.alpha = 0




//menu di pausa
    tastoPausa = game.add.sprite(930, 30, 'tastoPausa');
    
    tastoPausa.alpha = 0;
        //attiva l'input del mouse sul vaso
    tastoPausa.inputEnabled = true;
        //fa partire la funzione apri_menu
    tastoPausa.events.onInputDown.add(apri_menu);
    tastoPausa.fixedToCamera = true;
    //serve per il rollover del pulsante
    game.input.addMoveCallback(p, tastoPausa);
    //N.B. le funzioni del menu di pausa sono prima di update, fuori da create


// posizione player.x (per facilitare il posizionamento di oggetti e entità)
	//x_etichetta = game.add.text(30, 50, "X: " + player.x, testi)
    //x_etichetta.fixedToCamera = true
    //x_etichetta.visible = true;

// posizione player.y (per facilitare il posizionamento di oggetti e entità)
	//y_etichetta = game.add.text(30, 100, "Y: " + player.y, testi)
    //y_etichetta.fixedToCamera = true
    //y_etichetta.visible = true;


// controlli
    cursors = game.input.keyboard.createCursorKeys();
    attackButton = game.input.keyboard.addKey(Phaser.Keyboard.A);
    shieldButton = game.input.keyboard.addKey(Phaser.Keyboard.S);
    dashButton = game.input.keyboard.addKey(Phaser.Keyboard.X);
    interationButton = game.input.keyboard.addKey(Phaser.Keyboard.F);

}


function update() {
    
    game.scale.pageAlignHorizontally = true;
    game.scale.pageAlignVertically = true;
    game.scale.refresh();
    

// collide
    var hitPlatform = game.physics.arcade.collide(player, platforms);

    game.physics.arcade.collide(helper, platforms);

    game.physics.arcade.collide(player, moving_platform1)
    game.physics.arcade.collide(player, moving_platform2)
    game.physics.arcade.collide(player, moving_platform3)
    game.physics.arcade.collide(player, moving_platform4)
    game.physics.arcade.collide(player, moving_platform5)
    game.physics.arcade.collide(player, moving_platform6)
    
    game.physics.arcade.collide(player, e_barriera_d)
    game.physics.arcade.collide(player, e_barriera_s)
    game.physics.arcade.collide(player, gabbia)
    game.physics.arcade.collide(player, ostacolo)

    game.physics.arcade.collide(player, falling_platform1)
    game.physics.arcade.collide(player, falling_platform2)
    game.physics.arcade.collide(player, falling_platform3)
    game.physics.arcade.collide(player, falling_platform4)
    game.physics.arcade.collide(player, falling_platform5)

    game.physics.arcade.overlap(player, checkpoint1, save_checkpoint1)
    game.physics.arcade.overlap(player, checkpoint2, save_checkpoint2)
    game.physics.arcade.overlap(player, checkpoint3, save_checkpoint3)
    game.physics.arcade.overlap(player, checkpoint4, save_checkpoint4)

    game.physics.arcade.overlap(player, spada, getSpada)
    game.physics.arcade.overlap(player, sandali, getSandali)
    game.physics.arcade.overlap(player, scudo, getScudo)

    game.physics.arcade.collide(topo1, platforms);
    game.physics.arcade.overlap(player, topo1, topo1_hit);
    game.physics.arcade.collide(topo2, platforms);
    game.physics.arcade.overlap(player, topo2, topo2_hit);
    game.physics.arcade.collide(topo3, platforms);
    game.physics.arcade.overlap(player, topo3, topo3_hit);
    game.physics.arcade.collide(topo4, platforms);
    game.physics.arcade.overlap(player, topo4, topo4_hit);
    game.physics.arcade.collide(topo5, platforms);
    game.physics.arcade.overlap(player, topo5, topo5_hit);
    game.physics.arcade.collide(topo6, platforms);
    game.physics.arcade.overlap(player, topo6, topo6_hit);
    game.physics.arcade.collide(topo7, platforms);
    game.physics.arcade.overlap(player, topo7, topo7_hit);

    game.physics.arcade.collide(arpia1, platforms);
    game.physics.arcade.collide(arpia1, barriera);
    game.physics.arcade.overlap(player, arpia1, arpia1_hit);
    game.physics.arcade.collide(arpia2, platforms);
    game.physics.arcade.collide(arpia2, barriera);
    game.physics.arcade.overlap(player, arpia2, arpia2_hit);
    game.physics.arcade.collide(arpia3, platforms);
    game.physics.arcade.collide(arpia3, barriera);
    game.physics.arcade.overlap(player, arpia3, arpia3_hit);
    game.physics.arcade.collide(arpia4, platforms);
    game.physics.arcade.collide(arpia4, barriera);
    game.physics.arcade.overlap(player, arpia4, arpia4_hit);

    game.physics.arcade.collide(empusa, platforms);
    game.physics.arcade.overlap(player, empusa, empusa_hit);

    game.physics.arcade.collide(ortro, platforms);
    game.physics.arcade.overlap(player, ortro, ortro_hit);

    game.physics.arcade.collide(minotauro, platforms);
    game.physics.arcade.overlap(player, minotauro);
    //funzione da aggiungere!!
    
    game.physics.arcade.overlap(player, door, viaggio, null, this);
    game.physics.arcade.overlap(player, door1, viaggio1, null, this);
    game.physics.arcade.overlap(player, door2, viaggio2, null, this);
    game.physics.arcade.overlap(player, door3, viaggio3, null, this);
    game.physics.arcade.overlap(player, door4, viaggio4, null, this);
    
    game.physics.arcade.overlap(player, scritta1, messaggio01);
    game.physics.arcade.overlap(player, scritta2, messaggio02);
    game.physics.arcade.overlap(player, scritta3, messaggio03);
    game.physics.arcade.overlap(player, scritta4, messaggio04);
    game.physics.arcade.overlap(player, scritta5, messaggio05);

    //  Reset the players velocity (movement)
    player.body.velocity.x = 0;


//lanterne
lanterne.callAll('play', null, 'lanterna');
    
//animazioni oggetti
    spada.animations.play('spada');
    sandali.animations.play('sandali');
    scudo.animations.play('scudo');


//helper    
    if(attackButton.isDown && helper.body.touching.down && pass)
    	helper.body.velocity.y = -100;
    
    if(attackButton.isUp && !pass)
    	pass = true;
    
    if(helper.body.touching.down)
    {
    	attacco = false;
    }
    else
    {
        attacco = true;
        game.time.events.add(1, cooldown_attacco);
    }



// movimento salto e attacco
	if (shieldButton.isDown && scudo_preso && player.body.touching.down)
	{
		marcia = true;
	}
	else
		marcia = false;

    if ((cursors.up.isDown && player.body.touching.down) && (shieldButton.isUp || !marcia) && !gamePaused)
    {
        player.body.velocity.y = -510;
    }

    if (cursors.left.isDown && player.body.touching.down && !gamePaused)
    {
        player.body.velocity.x = -380;
        
        if ((!attacco || !spada_presa) && (shieldButton.isUp || !marcia))
        {
		  player.animations.play('left');
	    }
        
        if ((attacco && spada_presa) && (shieldButton.isUp || !marcia)) 
        {
        	player.animations.play('affondo_sx')
        }

        if (marcia)
        {
        	player.animations.play('marcia_sx')
        }
        
       player.direction = "left"
    }
    else if (cursors.right.isDown && player.body.touching.down && !gamePaused)
    {
        player.body.velocity.x = 380;

        if ((!attacco || !spada_presa) && (shieldButton.isUp || !marcia)) 
        {
		    player.animations.play('right');
	    }

        if((attacco && spada_presa) && (shieldButton.isUp || !marcia)) 
        {
           player.animations.play('affondo_dx')
        }                   

        if (marcia)
        {
        	player.animations.play('marcia_dx')
        }

       player.direction = "right"
    }
    else if (cursors.left.isDown && !player.body.touching.down && !gamePaused)
    {
    	player.body.velocity.x = -350;

    	if(!attacco || !spada_presa)
    	{
    	    player.animations.play('left_salto')
        }

        if(attacco && spada_presa)
        {
        	player.animations.play('affondo_sx')
        }
        
       player.direction = "left"
    }
	else if (cursors.right.isDown && !player.body.touching.down && !gamePaused)
    {
    	player.body.velocity.x = 350;

    	if(!attacco || !spada_presa)
    	{
    		player.animations.play('right_salto')
    	}

    	if(attacco && spada_presa)
    	{	
    	    player.animations.play('affondo_dx')
    	}

       player.direction = "right"
	}
	else
	{
    	//player.animations.stop()
    	if (player.direction == "left" && player.body.velocity.x > -1)
    		{
    			if ((!attacco || !spada_presa && !cursors.right.isDown && !cursors.left.isDown) && (shieldButton.isUp && !marcia))
    			{
    			    player.animations.stop();
                    player.frame = 12
    			}

    			if ((attacco && spada_presa && !cursors.right.isDown && !cursors.left.isDown) && (shieldButton.isUp && !marcia))
    			{
    				player.animations.play('affondo_sx')
    			}

    			if(marcia)
    			{
                    player.animations.stop();
                    player.frame = 138
    			}    			

    		}
       else if (player.direction == "right" && player.body.velocity.x < 1)
    		{
    			if((!attacco || !spada_presa && !cursors.right.isDown && !cursors.left.isDown) && (shieldButton.isUp && !marcia))
    			{
    			    player.animations.stop();
                    player.frame = 13
    			}

    			if((attacco && spada_presa && !cursors.right.isDown && !cursors.left.isDown) && (shieldButton.isUp && !marcia))
    			{
    				player.animations.play('affondo_dx')
    			}

    			if(marcia)
    			{
                    player.animations.stop();
                    player.frame = 147
    			}
    		}
    	else
    		{
                player.direction = "still"
    	    }
    }	



//danno
	if (spada_presa && attackButton.isDown  && !attacco_fatto && !gamePaused)
	{
		game.time.events.add(500, cooldown_danno)

		game.time.events.add(250, danno_effettivo)

		attacco_fatto = true
	}
        
        function e_morte(){
            empusa.kill()
            e_barriera_d.body.velocity.y = 100
            //game.time.events.add(2000, e_barriere);
        }
        
        if (e_barriera_d.body.y > 836){
            	//e_barriera_d.kill();
            	e_barriera_d.body.velocity.y = 0
            }
        

	function cooldown_danno() {
		attacco_fatto = false
		}



	function danno_effettivo() {

		//topi
		if (Math.sqrt (Math.pow (player.body.y - topo1.body.y, 2) + Math.pow (player.body.x - topo1.body.x, 2)) < 130)
			{
				topo1_vita = topo1_vita - 1
				if (topo1_vita < 1)
					{topo1.kill()}
			}
		if (Math.sqrt (Math.pow (player.body.y - topo2.body.y, 2) + Math.pow (player.body.x - topo2.body.x, 2)) < 130)
			{
				topo2_vita = topo2_vita - 1
				if (topo2_vita < 1)
					{topo2.kill()}
			}
		if (Math.sqrt (Math.pow (player.body.y - topo3.body.y, 2) + Math.pow (player.body.x - topo3.body.x, 2)) < 130)
			{
				topo3_vita = topo3_vita - 1
				if (topo3_vita < 1)
					{topo3.kill()}
			}
		if (Math.sqrt (Math.pow (player.body.y - topo4.body.y, 2) + Math.pow (player.body.x - topo4.body.x, 2)) < 130)
			{
				topo4_vita = topo4_vita - 1
				if (topo4_vita < 1)
					{topo4.kill()}
			}
		if (Math.sqrt (Math.pow (player.body.y - topo5.body.y, 2) + Math.pow (player.body.x - topo5.body.x, 2)) < 130)
			{
				topo5_vita = topo5_vita - 1
				if (topo5_vita < 1)
					{topo5.kill()}
			}
		if (Math.sqrt (Math.pow (player.body.y - topo6.body.y, 2) + Math.pow (player.body.x - topo6.body.x, 2)) < 130)
			{
				topo6_vita = topo6_vita - 1
				if (topo6_vita < 1)
					{topo6.kill()}
			}
		if (Math.sqrt (Math.pow (player.body.y - topo7.body.y, 2) + Math.pow (player.body.x - topo7.body.x, 2)) < 130)
			{
				topo7_vita = topo7_vita - 1
				if (topo7_vita < 1)
					{topo7.kill()}
			}

		//arpie
		if (Math.sqrt (Math.pow (player.body.y - arpia1.body.y, 2) + Math.pow (player.body.x - arpia1.body.x, 2)) < 150)
			{
				arpia1.tint = 0xff2222

				arpia1_vita = arpia1_vita - 1
                if (arpia1_vita < 1){
                    arpia1.kill()
                }
			}
		if (Math.sqrt (Math.pow (player.body.y - arpia2.body.y, 2) + Math.pow (player.body.x - arpia2.body.x, 2)) < 150)
			{
				arpia2.tint = 0xff2222
				arpia2_vita = arpia2_vita - 1
                if (arpia2_vita < 1){
                    arpia2.kill()
                }
			}
		if (Math.sqrt (Math.pow (player.body.y - arpia3.body.y, 2) + Math.pow (player.body.x - arpia3.body.x, 2)) < 150)
			{
				arpia3.tint = 0xff2222
				arpia3_vita = arpia3_vita - 1
                if (arpia3_vita < 1){
                    arpia3.kill()
                }
			}
		if (Math.sqrt (Math.pow (player.body.y - arpia4.body.y, 2) + Math.pow (player.body.x - arpia4.body.x, 2)) < 150)
			{
				arpia4.tint = 0xff2222
				arpia4_vita = arpia4_vita - 1
                if (arpia4_vita < 1){
                    arpia4.kill()
                }
			}

		//empusa
        if (Math.sqrt (Math.pow (player.body.y - empusa.body.y, 2) + Math.pow (player.body.x - empusa.body.x, 2)) < 130)
			{
				empusa.tint = 0xff6747

				empusa_vita = empusa_vita - 1

				if (!empusa_morta && empusa_vita < 1)
				{
					if (player.x - empusa.x > 0)
					{empusa.animations.play('e_morte_s');
                    game.time.events.add(1000, e_morte);
                    empusa_morta = true}

                	if (player.x - empusa.x < 0)
					{empusa.animations.play('e_morte_d');
                    game.time.events.add(1000, e_morte);
                    empusa_morta = true}
				}
			}


		game.time.events.add(150, restore_color)

		}


		function restore_color() {
		arpia1.tint = 0xFFFFFF
		arpia2.tint = 0xFFFFFF
		arpia3.tint = 0xFFFFFF
		arpia4.tint = 0xFFFFFF

		empusa.tint = 0xFFFFFF
		}


// dash player
	if (dashButton.isDown && cursors.right.isDown && dash && sandali_presi && shieldButton.isUp) //tolto !gamePaused
    	{
        player.body.velocity.x = 900;
        game.time.events.add(200, restore_right);
    	}
    else if (dashButton.isDown && cursors.left.isDown && dash && sandali_presi && shieldButton.isUp) //tolto !gamePaused
    	{
        player.body.velocity.x = -900;
        game.time.events.add(200, restore_left);
    	}
    
	if(gamePaused) 
	{
        player.body.velocity.x = 0;
        player.body.velocity.y = 0;
        player.body.gravity.y=0;
    }
    else if (!gamePaused) 
    { 
        player.body.gravity.y = 800;
    }

    function restore_right(){
        player.body.velocity.x = 380;
        dash = false;
        game.time.events.add(2000, cooldown_dash);
    	}

    function restore_left(){
        player.body.velocity.x = -380;
        dash = false;
        game.time.events.add(2000, cooldown_dash);
    	}
    
    function cooldown_dash(){
        dash = true;
    	}


//barra oggetti aggiornamento
	if (spada_presa && !attacco_fatto)
	{
		spada_etichetta.alpha = 1
	}
	else if (spada_presa && attacco_fatto)
	{
		spada_etichetta.alpha = 0.3
	}

	if (dash && sandali_presi)
	{
		sandali_etichetta.alpha = 1
	}
	else if (!dash && sandali_presi)
	{
		sandali_etichetta.alpha = 0.3
		//game.add.tween(sandali_etichetta).to( { alpha: 0.7 }, 1000, "Linear", true);
	}

	if (scudo_preso && !marcia)
	{
		scudo_etichetta.alpha = 1
	}
	else if (scudo_preso && marcia)
	{
		scudo_etichetta.alpha = 0.3
	}

    
   
// moving_platforms
	if (moving_platform1.y < 180)
    {
        moving_platform1.body.velocity.y = 150
    }
    if (moving_platform1.y > 490)
    {
        moving_platform1.body.velocity.y = -150
    }
//2
    if (moving_platform2.y < 350)
    {
        moving_platform2.body.velocity.y = 150
    }
    if (moving_platform2.y > 1100)
    {
        moving_platform2.body.velocity.y = -150
    }
//3
    if (moving_platform3.x < 19300)
    {
        moving_platform3.body.velocity.x = 250
    }
    if (moving_platform3.x > 19600)
    {
        moving_platform3.body.velocity.x = -250
    }
//4
    if (moving_platform4.x < 20650)
    {
        moving_platform4.body.velocity.x = 250
    }
    if (moving_platform4.x > 21000)
    {
        moving_platform4.body.velocity.x = -250
    }
//5
    if (moving_platform5.y < 400)
    {
        moving_platform5.body.velocity.y = 150
    }
    if (moving_platform5.y > 900)
    {
        moving_platform5.body.velocity.y = -150
    }
//6
    if (moving_platform6.y < 200)
    {
        moving_platform6.body.velocity.y = 250
    }
    if (moving_platform6.y > 900)
    {
        moving_platform6.body.velocity.y = -250
    }

    

// barra filo aggiornamento
	//x_etichetta.setText("X: " + player.x);
	//y_etichetta.setText("Y: " + player.y);

	if (!gamePaused && player.vita < 1) {
        schermata_morte = game.add.sprite(0, 0, 'schermata_morte');
        schermata_morte.fixedToCamera = true;
        game.time.events.add(1, gioco_bloccato);
        game.time.events.add(1000, leva_morte);
        
        player.filo = player.filo - 1;
    	//player.kill()
        player.x = spawn_x;
    	player.y = spawn_y;
        player.vita = player.vitamassima;
        barravita.scale.x = player.vita/player.vitamassima;

        if (player.filo < 1)
        {
        	barrafilo.scale.x = 0
    	}
    	else
    	{
    		barrafilo.scale.x = player.filo/player.filomassimo
    	}
	}
        
		function gioco_bloccato() {
            gamePaused = true;
        }

        function leva_morte() {
        game.add.tween(schermata_morte).to( { alpha: 0 }, 300, Phaser.Easing.Linear.None, true);
        game.time.events.add(305, gioco_sbloccato);
        }
        
        function gioco_sbloccato() {
            gamePaused = false;
        }


//rollover sui tasti di pausa
    if (tastoPausa.input.pointerOver())
    {
        tastoPausa.alpha = 1;
    }
    else
    {
        tastoPausa.alpha = 0.7;
    }


if (!gamePaused) {
// topi - movimento
//1
    if (topo1.x > 3750) 
    {
    topo1.direction = "left"
    topo1.frame = 0
    //topo1.body.velocity.x = -300;
    }
    if (topo1.x < 3550)
    {
    topo1.direction = "right"
    topo1.frame = 1
    //topo1.body.velocity.x = 300;
    
	}

	if (topo1.direction == "left")
		topo1.body.velocity.x = -300;
        
	if (topo1.direction == "right")
		topo1.body.velocity.x = 300;
        

//2
	if (topo2.x > 5000) 
    {
    topo2.direction = "left"
    topo2.frame = 0

    }
    if (topo2.x < 4700)
    {
    topo2.direction = "right"
    topo2.frame = 1

	}

	if (topo2.direction == "left")
		topo2.body.velocity.x = -300;
	if (topo2.direction == "right")
		topo2.body.velocity.x = 300;

//3
	if (topo3.x > 6080) 
    {
    topo3.direction = "left"
    topo3.frame = 0
    }
    if (topo3.x < 5670)
    {
    topo3.direction = "right"
    topo3.frame = 1
	}

	if (topo3.direction == "left")
		topo3.body.velocity.x = -300;
	if (topo3.direction == "right")
		topo3.body.velocity.x = 300;

//4
	if (topo4.x > 8720) 
    {
    topo4.direction = "left"
    topo4.frame = 0
    }
    if (topo4.x < 8400)
    {
    topo4.direction = "right"
    topo4.frame = 1
	}

	if (topo4.direction == "left")
		topo4.body.velocity.x = -300;
	if (topo4.direction == "right")
		topo4.body.velocity.x = 300;

//5
	if (topo5.x > 14180) 
    {
    topo5.direction = "left"
    topo5.frame = 0
    }
    if (topo5.x < 13880)
    {
    topo5.direction = "right"
    topo5.frame = 1
	}

	if (topo5.direction == "left")
		topo5.body.velocity.x = -300;
	if (topo5.direction == "right")
		topo5.body.velocity.x = 300;

//6
	if (topo6.x > 26450) 
    {
    topo6.direction = "left"
    topo6.frame = 0
    }
    if (topo6.x < 26250)
    {
    topo6.direction = "right"
    topo6.frame = 1
	}

	if (topo6.direction == "left")
		topo6.body.velocity.x = -300;
	if (topo6.direction == "right")
		topo6.body.velocity.x = 300;

//7
	if (topo7.x > 26780) 
    {
    topo7.direction = "left"
    topo7.frame = 0
    }
    if (topo7.x < 26600)
    {
    topo7.direction = "right"
    topo7.frame = 1
	}

	if (topo7.direction == "left")
		topo7.body.velocity.x = -300;
	if (topo7.direction == "right")
		topo7.body.velocity.x = 300;


//arpie - movimento
    if (Math.random()<0.03)
    { 
        if (arpia1_vita > 0)
        {arpia1.body.velocity.x = 150}
        if (arpia2_vita > 0)
        {arpia2.body.velocity.x = 150}
        if (arpia3_vita > 0)
        {arpia3.body.velocity.x = 150}
        if (arpia4_vita > 0)
        {arpia4.body.velocity.x = 150}
    }
    
    if (Math.random()>0.97)
    {
        if (arpia1_vita > 0)
        {arpia1.body.velocity.x = -150}
        if (arpia2_vita > 0)
        {arpia2.body.velocity.x = -150}
        if (arpia3_vita > 0)
        {arpia3.body.velocity.x = -150}
        if (arpia4_vita > 0)
        {arpia4.body.velocity.x = -150}
    }
    
    if (arpia1.y < 270)
    {
        arpia1.body.velocity.y = 550;
        arpia1.animations.play('volo_arpia');
    }
    
      if (arpia1.x < player.x)
    {
        arpia1.animations.play('volo_arpia_d');
    }

    if (arpia2.y < 270)
    {
        arpia2.body.velocity.y = 550;
        arpia2.animations.play('volo_arpia_2');
    }
     if (arpia2.x < player.x)
    {
        arpia2.animations.play('volo_arpia_2d');
    }

    if (arpia3.y < 220)
    {
        arpia3.body.velocity.y = 550;
        arpia3.animations.play('volo_arpia_3');
    }
     
    if (arpia3.x < player.x)
    {
        arpia3.animations.play('volo_arpia_3d');
    }

    if (arpia4.y < 220)
    {
        arpia4.body.velocity.y = 550;
        arpia4.animations.play('volo_arpia_4');
    }
     
    if (arpia4.x < player.x)
    {
        arpia4.animations.play('volo_arpia_4d');
    }
}

else if (gamePaused) 
	{
        topo1.body.velocity.x = 0;
        topo2.body.velocity.x = 0;
        topo3.body.velocity.x = 0;
        topo4.body.velocity.x = 0;
        topo5.body.velocity.x = 0;
        topo6.body.velocity.x = 0;
        topo7.body.velocity.x = 0;
        arpia1.body.velocity.x = 0;
        arpia2.body.velocity.x = 0;
        arpia3.body.velocity.x = 0
        arpia4.body.velocity.x = 0
        arpia1.body.velocity.y = 0
        arpia2.body.velocity.y = 0
        arpia3.body.velocity.y = 0
        arpia4.body.velocity.y = 0
    }



if (!gamePaused) {
//empusa
    dx = player.x - empusa.x
    dy = player.y - empusa.y
    
    if((5000 < dx*dx + dy*dy) && (dx*dx + dy*dy < 300000) && !cd) 
    {
        aggro = true
        aggro2 = false
    }
    
    if(dx*dx + dy*dy > 400000) {
        aggro = false
        aggro2 = false
    }
    
    if(aggro)
    {
        vx = 0;

        if(player.x - empusa.x > 0 && !empusa_morta){
            vx = 150
            empusa.animations.play('e_camminata_s');}

        if(player.x - empusa.x < 0 && !empusa_morta){
            vx = -150
            empusa.animations.play('e_camminata_d');}
        
        empusa.body.velocity.x = vx;    
    }
    
    if (player.x > 15640 && !empusa_morta){
        e_barriera_s.body.velocity.y = -100;
        e_barriera_d.body.velocity.y = -100;

        if(e_barriera_s.y < 600){
            e_barriera_s.body.velocity.y = 0
            e_barriera_d.body.velocity.y = 0;
        	}
        }
    
    if((dx*dx + dy*dy < 70000) && !cd)
    {
        
        aggro = false
        aggro2 = true
    }
    
    if(dx*dx + dy*dy > 80000)
    {
        aggro2 = false
    }
    
    if(aggro2) {
        if(player.x - empusa.x > 0 && !empusa_morta){
            vx = 550;
            empusa.animations.play('e_dash_s');
        }
        if(player.x - empusa.x < 0 && !empusa_morta){
            vx = -550
            empusa.animations.play('e_dash_d');
        }
        aggro = false;
        aggro2 = false;
        empusa.body.velocity.x = vx;
        cd = true;
        game.time.events.add(700, restore)
    }

    function restore(){
        empusa.body.velocity.x = 0;

        empusa.tint = 0xAADDFF
        
        empusa.animations.stop()
        if(player.x - empusa.x > 0){
            empusa.frame = 45
        }
        if(player.x - empusa.x < 0){
            empusa.frame = 44
        }

        aggro = false;
        aggro2 = false;
        game.time.events.add(2000, animate);
        }
    
    function animate(){
        empusa.tint = 0xFFFFFF;
        if (player.x - empusa.x > 0 && !empusa_morta)
        {
            empusa.animations.play('e_cooldown_s');
        }
        if (player.x - empusa.x < 0 && !empusa_morta)
        {
            empusa.animations.play('e_cooldown_d');
        }
        game.time.events.add(1000,cooldown);
    }
    
    function cooldown(){
        aggro = false;
        aggro2 = false;
        //empusa.tint = 0xFFFFFF;
        cd = false;
        }

if (player.x < 15587)
	{
        empusa.x = 16506;
		empusa.y = 400;
        e_barriera_s.x = 15560
		e_barriera_s.y = 836
        e_barriera_d.x = 17000
		e_barriera_d.y = 836

		empusa_vita = 10
    }

}

    else if (gamePaused) 
	{
        empusa.body.velocity.x = 0;
    }

if (!gamePaused) {
//ortro
	if (scudo_preso && player.body.x > ortro.body.x)
	{
		ortro.body.velocity.x = 365
		gabbia.kill()
		if (ortro.body.touching.down)
		{
			ortro.animations.play('corsa_ortro');
		}
	}
	else if (scudo_preso && (player.direction == "left") && player.body.x < ortro.body.x - 50 && player.body.x > ortro.body.x - 300)
	{
		ortro.body.velocity.x = -375
		ortro.scale.x = -0.75
	}
	else if (scudo_preso && (player.direction == "right") && player.body.x < ortro.body.x)
	{
		ortro.body.velocity.x = -375
	}


    if (scudo_preso && player.body.x < ortro.body.x + 300 && player.body.x > ortro.body.x && player.body.x > 37800 && player.body.velocity.y < 1 && player.body.velocity.x < 1 && ortro.body.touching.down && !player.body.touching.down) // && player.body.velocity.x > -1)
    {   ortro.body.velocity.y = -350
     ortro.animations.play('salto_ortro')}

    //else if (scudo_preso && player.body.x < ortro.body.x && !player.body.velocity.x < 0 && !player.body.touching.down) //salto quando il player sta a sinistra
    //{   ortro.body.velocity.y = -350
    // ortro.animations.play('salto_ortro')}

	else if (ortro.body.x > 38550 && ortro.body.x < 38560)
	{	ortro.body.velocity.y = -505
    ortro.animations.play('salto_ortro')}

	else if (ortro.body.x > 38900 && ortro.body.x < 38910)
	{	ortro.body.velocity.y = -505
    ortro.animations.play('salto_ortro')}

	else if (ortro.body.x > 39250 && ortro.body.x < 39260)
	{	ortro.body.velocity.y = -505
    ortro.animations.play('salto_ortro')}

	else if (ortro.body.x > 39620 && ortro.body.x < 39630)
	{	ortro.body.velocity.y = -505
    ortro.animations.play('salto_ortro')}

	else if (ortro.body.x > 40050 && ortro.body.x < 40060)
	{	ortro.body.velocity.y = -430
    ortro.animations.play('salto_ortro')}

	else if (ortro.body.x > 40850 && ortro.body.x < 40860)
	{	ortro.body.velocity.y = -510
    ortro.animations.play('salto_ortro')}

	else if (ortro.body.x > 41470 && ortro.body.x < 41480)
	{	ortro.body.velocity.y = -700
    ortro.animations.play('salto_ortro')}

	else if (ortro.body.x > 42250 && ortro.body.x < 42260)
	{	ortro.body.velocity.y = -430
    ortro.animations.play('salto_ortro')}

	else if (ortro.body.x > 43050 && ortro.body.x < 43060)
	{	ortro.body.velocity.y = -510
    ortro.animations.play('salto_ortro')}

	else if (ortro.body.x > 43700 && ortro.body.x < 43710)
	{	ortro.body.velocity.y = -700
     ortro.animations.play('salto_ortro')}

	else if (ortro.body.x > 44700 && ortro.body.x < 44710)
	{	ortro.body.velocity.y = -510
     ortro.animations.play('salto_ortro')}

	else if (ortro.body.x > 45730 && ortro.body.x < 45740)
	{	ortro.body.velocity.y = -550
     ortro.animations.play('salto_ortro')}

	else if (ortro.body.x > 46480 && ortro.body.x < 46490)
	{	ortro.body.velocity.y = -700
     ortro.animations.play('salto_ortro')}

	else if (ortro.body.x > 47400 && ortro.body.x < 47410)
	{	ortro.body.velocity.y = -430
     ortro.animations.play('salto_ortro')}

	else if (ortro.body.x > 48000 && ortro.body.x < 48050)
	{	ortro.body.velocity.y = -510
     ortro.animations.play('salto_ortro')}

	else if (ortro.body.x > 48600 && ortro.body.x < 48610)
	{	ortro.body.velocity.y = -710
     ortro.animations.play('salto_ortro')}
    
    else if (ortro.body.x > 49540 && ortro.body.x < 49550)
	{	ortro.body.velocity.y = -820
     ortro.animations.play('salto_ortro')}
    
    //else if (ortro.body.x > 49950 && ortro.body.x < 49960)
	//{	ortro.body.velocity.y = -510
    // ortro.animations.play('salto_ortro')}
    
    else if (ortro.body.x > 50780 && ortro.body.x < 50790)
	{	ortro.body.velocity.y = -350
     ortro.animations.play('salto_ortro')}


	if ((player.x > 36100 && player.x < 40900 && player.y > 1200) || (player.x > 40900 && player.x < 51300 && player.y > 650) || (player.x > 51300 && player.x < 55000 && player.y > 750) || (player.x > 55100 && player.y > 1000))
	{
		game.time.events.add(500, respawn_piattaforme_ortro);
	}

}
    
    else if (gamePaused) 
	{
        ortro.animations.stop();
        empusa.body.velocity.x = 0;
        ortro.body.velocity.x = 0;
        ortro.body.velocity.y = 0;

    }
    
    

//if (!gamePaused){ //NEW 14 GENNAIO
// minotauro 
    //minotauro.body.velocity.x = -40;    //
    //minotauro.animations.play('minotauro_cammina');
    if (player.x > 60400 && player.x < 60410) //si attiva il cammino del minotauro
    {
    	minotauro.body.velocity.x = -40;
    	minotauro.animations.play('minotauro_cammina');
    }

    if (player.x < 59801 && player.x > 59799)
    {
    	minotauro.x = 61400
		minotauro.y = 350
    }

    if (player.x > minotauro.x && player.x - 150 < minotauro.x && minotauro.x > 60530 && attackButton.isDown && player.y < 500)
    {
        game.time.events.add(1, azione1);
    }

    if (minotauro_vita < 1) // && caduta)
    {
        caduta = true
        minotauro.animations.play('minotauro_morte');
        
        minotauro.body.velocity.x = -80;
        game.time.events.add(3000, morte)
    }
    
    
        
    if (player.x > minotauro.x && player.x - 150 < minotauro.x && minotauro.x < 60530 && attackButton.isDown && player.y < 500)
    	{
            minotauro_vita = minotauro_vita - 100
    	}

    if (minotauro.x < 60530 && !caduta)
    	{
    	minotauro.body.velocity.x = 0;
        minotauro.animations.play('minotauro_fermo');
        }
       

    dx = minotauro.x - player.x;

    if ((dx < 175) && (dx > 150) && (player.y < 500) && !r)
    {
       	r=true;
       	//function hit
    }

    else
    {minotauro.tint = 0xFFFFFF;}


    if (r) 
    {
    	if (!marcia)
       	{
       	player.vita = player.vita - 1;
        }

       	player.body.velocity.x = -500;
       	player.body.velocity.x = player.body.velocity.x*0.8;
        minotauro.body.velocity.x = 0;
        minotauro.animations.play('minotauro_attacco');
       	game.time.events.add(450, normal);

       	barravita.scale.x = player.vita/player.vitamassima;
    }
    
    
    
//}   //graffa di if!gamePaused del minotauro
    
    
  
//else if (gamePaused) 
//	{
        //minotauro.animations.stop();
        //minotauro.body.velocity.x = 0;
  //  }
    
    
    
    function normal() 
    {
        r=false;
        minotauro.body.velocity.x = -40;
        minotauro.animations.play('minotauro_cammina');
    }

    function azione1 (){
    minotauro.animations.play('minotauro_morte2');
    minotauro.body.velocity.x = 0;
    game.time.events.add(2500, morte)
    }    

           
    
    function morte() 
    {
        minotauro.kill()
        //var fine = true;

        if (player.filo < 1) {
    	    //schermata negativa + link ricomincia/torna a copertina
    	    var schermata_negativa = game.add.sprite(0, 0, 'schermata_negativa');
    	    schermata_negativa.fixedToCamera = true;
    	    var ricomincia = game.add.sprite(30, 720, 'ricomincia');
    	    ricomincia.fixedToCamera = true;
    	    ricomincia.inputEnabled = true;
    	    ricomincia.events.onInputDown.add(function () {window.location.href = "play.html"});
    	    
    	    var torna_copertina = game.add.sprite(750, 720, 'torna_copertina');
    	    torna_copertina.fixedToCamera = true;
    	    torna_copertina.inputEnabled = true;
    	    torna_copertina.events.onInputDown.add(function () {window.location.href = "index.html"});
    	}
	
    	if (player.filo > 0) {
    	    //schermata negativa + link ricomincia/torna a copertina
    	    var schermata_positiva = game.add.sprite(0, 0, 'schermata_positiva');
    	    schermata_positiva.fixedToCamera = true;
    	    ricomincia = game.add.sprite(30, 720, 'ricomincia');
    	    ricomincia.fixedToCamera = true;
    	    ricomincia.inputEnabled = true;
    	    ricomincia.events.onInputDown.add(function () {window.location.href = "play.html"});
    	    
    	    torna_copertina = game.add.sprite(750, 720, 'torna_copertina');
    	    torna_copertina.fixedToCamera = true;
    	    torna_copertina.inputEnabled = true;
    	    torna_copertina.events.onInputDown.add(function () {window.location.href = "index.html"});
    	}
    }
    


game.camera.focusOnXY(player.x, player.y - 105)


//player muore se precipita
	if (player.x < 14700 && player.y > 650)
	{
		player.vita = player.vita - 10
	}
    
    if (player.x > 18400 && player.x < 25100 && player.y > 1050)
	{
		player.vita = player.vita - 10
	}
    
    if (player.x > 25100 && player.x < 36100 && player.y > 650)
	{
		player.vita = player.vita - 10
	}
    
    if (player.x > 36100 && player.x < 40900 && player.y > 1200)
	{
		player.vita = player.vita - 10
	}
    
    if (player.x > 40900 && player.x < 51300 && player.y > 650)
	{
		player.vita = player.vita - 10
	}
    
    if (player.x > 51300 && player.x < 55100 && player.y > 750)
	{
		player.vita = player.vita - 10
	}
    
    if (player.x > 55100 && player.y > 1000)
	{
		player.vita = player.vita - 10
	}

}

function restore_tint () {
 player.tint = 0xFFFFFF //COLORE PLAYER   
}

function topo1_hit (player, topo1) {
    if (player.vita > 0 && player.y + 100 > topo1.y) //colpito da sopra il topo non fa danno
    {
    //player.vita -= 1;
    player.tint = 0xff6747
    game.time.events.add (300, restore_tint);
    player.vita = player.vita - 1 // equivalente a: p.vita = p.vita - 1;
    barravita.scale.x = player.vita/player.vitamassima;
    }
    if (player.vita > 0 && player.y + 100 <= topo1.y && player.body.velocity.y > 0)
    {
    topo1.kill()
    }
}
function topo2_hit (player, topo2) {
    if (player.vita > 0 && player.y + 100 > topo2.y) //colpito da sopra il topo non fa danno
    {
    //player.vita -= 1;
    player.tint = 0xff6747
    game.time.events.add (300, restore_tint);
    player.vita = player.vita - 1 // equivalente a: p.vita = p.vita - 1;
    barravita.scale.x = player.vita/player.vitamassima;
    }
    if (player.vita > 0 && player.y + 100 <= topo2.y && player.body.velocity.y > 0)
    {
    topo2.kill()
    }
}
function topo3_hit (player, topo3) {
    if (player.vita > 0 && player.y + 100 > topo3.y) //colpito da sopra il topo non fa danno
    {
    //player.vita -= 1;
    player.tint = 0xff6747
    game.time.events.add (300, restore_tint);
    player.vita = player.vita - 1 // equivalente a: p.vita = p.vita - 1;
    barravita.scale.x = player.vita/player.vitamassima;
    }
    if (player.vita > 0 && player.y + 100 <= topo3.y && player.body.velocity.y > 0)
    {
    topo3.kill()
    }
}
function topo4_hit (player, topo4) {
    if (player.vita > 0 && player.y + 100 > topo4.y) //colpito da sopra il topo non fa danno
    {
    //player.vita -= 1;
    player.tint = 0xff6747
    game.time.events.add (300, restore_tint);
    player.vita = player.vita - 1 // equivalente a: p.vita = p.vita - 1;
    barravita.scale.x = player.vita/player.vitamassima;
    }
    if (player.vita > 0 && player.y + 100 <= topo4.y && player.body.velocity.y > 0)
    {
    topo4.kill()
    }
}
function topo5_hit (player, topo5) {
    if (player.vita > 0 && player.y + 100 > topo5.y) //colpito da sopra il topo non fa danno
    {
    //player.vita -= 1;
    player.tint = 0xff6747
    game.time.events.add (300, restore_tint);
    player.vita = player.vita - 1 // equivalente a: p.vita = p.vita - 1;
    barravita.scale.x = player.vita/player.vitamassima;
    }
    if (player.vita > 0 && player.y + 100 <= topo5.y && player.body.velocity.y > 0)
    {
    topo5.kill()
    }
}
function topo6_hit (player, topo6) {
    if (player.vita > 0 && player.y + 100 > topo6.y) //colpito da sopra il topo non fa danno
    {
    //player.vita -= 1;
    player.tint = 0xff6747
    game.time.events.add (300, restore_tint);
    player.vita = player.vita - 1 // equivalente a: p.vita = p.vita - 1;
    barravita.scale.x = player.vita/player.vitamassima;
    }
    if (player.vita > 0 && player.y + 100 <= topo6.y && player.body.velocity.y > 0)
    {
    topo6.kill()
    }
}
function topo7_hit (player, topo7) {
    if (player.vita > 0 && player.y + 100 > topo7.y) //colpito da sopra il topo non fa danno
    {
    //player.vita -= 1;
    player.tint = 0xff6747
    game.time.events.add (300, restore_tint);
    player.vita = player.vita - 1 // equivalente a: p.vita = p.vita - 1;
    barravita.scale.x = player.vita/player.vitamassima;
    }
    if (player.vita > 0 && player.y + 100 <= topo7.y && player.body.velocity.y > 0)
    {
    topo7.kill()
    }
}


function arpia1_hit (player, arpia1) {
	if (arpia1_vita > 0)
	{
		player.tint = 0xff6747
        game.time.events.add (300, restore_tint);
        player.vita = player.vita - 1
    	barravita.scale.x = player.vita/player.vitamassima;
	}
}
    
function arpia2_hit (player, arpia2) {
    if (arpia2_vita > 0)
	{
		player.tint = 0xff6747
        game.time.events.add (300, restore_tint);
        player.vita = player.vita - 1
    	barravita.scale.x = player.vita/player.vitamassima;
	}
}
function arpia3_hit (player, arpia3) {
    if (arpia3_vita > 0)
	{
		player.tint = 0xff6747
        game.time.events.add (300, restore_tint);
        player.vita = player.vita - 1
    	barravita.scale.x = player.vita/player.vitamassima;
	}
}
function arpia4_hit (player, arpia4) {
    if (arpia4_vita > 0)
	{
		player.tint = 0xff6747
        game.time.events.add (300, restore_tint);
        player.vita = player.vita - 1
    	barravita.scale.x = player.vita/player.vitamassima;
	}
}


function empusa_hit (player, empusa) {
    player.tint = 0xff6747
    game.time.events.add (300, restore_tint);
    player.vita = player.vita - 2
    barravita.scale.x = player.vita/player.vitamassima;
}


function ortro_hit (player, ortro) {
    if (!gamePaused){
    player.vita = player.vita - 100
    barravita.scale.x = player.vita/player.vitamassima;

    if (player.vita < 1)
    {
		game.time.events.add (100, respawn_piattaforme_ortro);
	}
        }
}




function save_checkpoint1(player, checkpoint1) {
    checkpoint1.play('save', 10, true)
    spawn_x = checkpoint1.x
    spawn_y = checkpoint1.y

    if(!checkpoint1.usato) {
        player.vita = player.vitamassima
        barravita.scale.x = player.vita/player.vitamassima;
        checkpoint1.usato = true;
    }
}
function save_checkpoint2(player, checkpoint2) {
    checkpoint2.play('save', 10, true)
    spawn_x = checkpoint2.x
    spawn_y = checkpoint2.y

    if(!checkpoint2.usato) {
        player.vita = player.vitamassima
        barravita.scale.x = player.vita/player.vitamassima;
        checkpoint2.usato = true;
    }
}
function save_checkpoint3(player, checkpoint3) {
    checkpoint3.play('save', 10, true)
    spawn_x = 38000
    spawn_y = 1050

    if(!checkpoint3.usato) {
        player.vita = player.vitamassima
        barravita.scale.x = player.vita/player.vitamassima;
        checkpoint3.usato = true;
    }
}
function save_checkpoint4(player, checkpoint4) {
    checkpoint4.play('save', 10, true)
    spawn_x = checkpoint4.x + 300
    spawn_y = checkpoint4.y - 80

    if(!checkpoint4.usato) {
        player.vita = player.vitamassima
        barravita.scale.x = player.vita/player.vitamassima;
        checkpoint4.usato = true;
    }
}


 //porte
function togli_etichetta (){
        door_etichetta.visible = false;   
        }

function viaggio (player, door) {
        door_etichetta.visible = true;  
        game.time.events.add(1500, togli_etichetta);
        
    if (interationButton.isDown) {
            player.x = 25060;
            player.y = 384;
        }
    }
function togli_etichetta_1 (){
        door_etichetta_1.visible = false;   
        }
function viaggio1 (player, door1) {
        door_etichetta_1.visible = true;  
        game.time.events.add(700, togli_etichetta_1);
        
        if (interationButton.isDown) {
            player.x = 30200;
            player.y = 384;
        }
    } 
function togli_etichetta_2(){
        door_etichetta_2.visible = false;   
        }
function viaggio2 (player, door2) {
        door_etichetta_2.visible = true;  
        game.time.events.add(700, togli_etichetta_2);
        
        if (interationButton.isDown) {
            player.x = 30200;
            player.y = 384;
        }
    } 
function togli_etichetta_3(){
        door_etichetta_3.visible = false;   
        }
function viaggio3 (player, door3) {
        door_etichetta_3.visible = true;  
        game.time.events.add(700, togli_etichetta_3);
        
        if (interationButton.isDown) {
            player.x = 36300;
            player.y = 384;
        }
    }

function togli_etichetta_4(){
        door_etichetta_4.visible = false;   
        }
function viaggio4 (player, door4) {
        door_etichetta_4.visible = true;  
        game.time.events.add(1700, togli_etichetta_4);
        
        if (interationButton.isDown) {
            player.x = 57600;
            player.y = 700;
        }
    }
 

//messaggi sul muro
var interation = false;

function messaggio01 (player, scritta1) {
        scritta_etichetta_1.visible = true;  
        game.time.events.add(600, togli_etichetta_muro_1);
        
    
        if (!gamePaused && interationButton.isDown) {
            
            messaggio_1 = game.add.sprite(0, 0, 'messaggio1');
            messaggio_1.fixedToCamera = true;
            gamePaused = true;
            
            if (gamePaused) {
            if (!interation) {
                interation = true;
                }
    
                if (interationButton.isUp) {
                interation = false;
                }
            }
            
            if (interation){
                messaggio_1.events.onInputDown.add(chiudi_messaggio1, self);
                
                
            }
            messaggio_1.inputEnabled = true;
        }         //graffa di interationbutton down    
    }                   //graffa della function messaggio
function chiudi_messaggio1 (){
                    //console.log('chiudi messaggio');
                    messaggio_1.kill();
                    interation = false;
                    gamePaused = false;
                    }

function togli_etichetta_muro_1(){
        scritta_etichetta_1.visible = false;   
        }



function messaggio02 (player, scritta2) {
        scritta_etichetta_2.visible = true;  
        game.time.events.add(600, togli_etichetta_muro_2);
        
        if (!gamePaused && interationButton.isDown) {
            messaggio_2 = game.add.sprite(0, 0, 'messaggio2');
            messaggio_2.fixedToCamera = true;
            gamePaused = true;
        
                if (gamePaused) {
                        if (!interation) {
                        interation = true;
                        } 
        
                    
    
                        if (interationButton.isUp) {
                        interation = false;
                        }
            
                    }
            
                if (interation){
                        messaggio_2.events.onInputDown.add(chiudi_messaggio2, self);
                        
                }
        messaggio_2.inputEnabled = true;
        }
    }
function chiudi_messaggio2 (){
                        //console.log('chiudi messaggio');
                        gamePaused = false;
                        messaggio_2.kill();
                        interation = false;
                        }

function togli_etichetta_muro_2(){
        scritta_etichetta_2.visible = false;   
        }


function messaggio03 (player, scritta3) {
        scritta_etichetta_3.visible = true;  
        game.time.events.add(600, togli_etichetta_muro_3);
        
    
        if (!gamePaused && interationButton.isDown) {
            
            messaggio_3 = game.add.sprite(0, 0, 'messaggio3');
            messaggio_3.fixedToCamera = true;
            gamePaused = true;
            
            if (gamePaused) {
            if (!interation) {
                interation = true;
                }
    
                if (interationButton.isUp) {
                interation = false;
                }
            }
            
            if (interation){
                messaggio_3.events.onInputDown.add(chiudi_messaggio3, self);
                
                
            }
            messaggio_3.inputEnabled = true;
        }         //graffa di interationbutton down    
    }                   //graffa della function messaggio
function chiudi_messaggio3 (){
                    //console.log('chiudi messaggio');
                    messaggio_3.kill();
                    interation = false;
                    gamePaused = false;
                    }

function togli_etichetta_muro_3(){
        scritta_etichetta_3.visible = false;   
        }


function messaggio04 (player, scritta1) {
        scritta_etichetta_4.visible = true;  
        game.time.events.add(600, togli_etichetta_muro_4);
        
    
        if (!gamePaused && interationButton.isDown) {
            
            messaggio_4 = game.add.sprite(0, 0, 'messaggio4');
            messaggio_4.fixedToCamera = true;
            gamePaused = true;
            
            if (gamePaused) {
            if (!interation) {
                interation = true;
                }
    
                if (interationButton.isUp) {
                interation = false;
                }
            }
            
            if (interation){
                messaggio_4.events.onInputDown.add(chiudi_messaggio4, self);
                
                
            }
            messaggio_4.inputEnabled = true;
        }         //graffa di interationbutton down    
    }                   //graffa della function messaggio
function chiudi_messaggio4 (){
                    //console.log('chiudi messaggio');
                    messaggio_4.kill();
                    interation = false;
                    gamePaused = false;
                    }

function togli_etichetta_muro_4(){
        scritta_etichetta_4.visible = false;   
        }


function messaggio05 (player, scritta5) {
        scritta_etichetta_5.visible = true;  
        game.time.events.add(600, togli_etichetta_muro_5);
        
    
        if (!gamePaused && interationButton.isDown) {
            
            messaggio_5 = game.add.sprite(0, 0, 'messaggio5');
            messaggio_5.fixedToCamera = true;
            gamePaused = true;
            
            if (gamePaused) {
            if (!interation) {
                interation = true;
                }
    
                if (interationButton.isUp) {
                interation = false;
                }
            }
            
            if (interation){
                messaggio_5.events.onInputDown.add(chiudi_messaggio5, self);
                
                
            }
            messaggio_5.inputEnabled = true;
        }         //graffa di interationbutton down    
    }                   //graffa della function messaggio
function chiudi_messaggio5 (){
                    //console.log('chiudi messaggio');
                    messaggio_5.kill();
                    interation = false;
                    gamePaused = false;
                    }

function togli_etichetta_muro_5(){
        scritta_etichetta_5.visible = false;   
        }



//funzioni menu di pausa
function apri_menu () {
    gamePaused = true; //NEW 13 GENNAIO
    menuPausa = game.add.sprite(0, 0, 'menuPausa');
    menuPausa.fixedToCamera = true;
    menuPausa.inputEnabled = true;
        //ho fatto sprites separati per i tasti
    resume = game.add.sprite(440, 280, 'resume');
    resume.scale.setTo(0.85);
    //resume.alpha = 1;
    
    resume.fixedToCamera = true;
    resume.inputEnabled = true;
    resume.events.onInputDown.add(chiudi_menu);
    
    game.input.addMoveCallback(p, resume);
    //rollover sui tasti di pausa
    
        //back to cover
    backCover = game.add.sprite(370, 335, 'back_cover');
    backCover.fixedToCamera = true;
    backCover.scale.setTo(0.85);
    backCover.inputEnabled = true;
    game.input.addMoveCallback(p, backCover);
   
        //fa partire la funzione apri_copertina
    backCover.events.onInputDown.add(apri_copertina);
        //game controls
    controls = game.add.sprite (400, 440, 'controls');
    controls.scale.setTo(0.7);
    controls.fixedToCamera = true;
    //game.paused = true;
    
    //game.paused = true;
}
function chiudi_menu () {
            gamePaused = false; //NEW 13 GENNAIO
            resume.kill();
            backCover.kill();
            controls.kill();
            menuPausa.kill();
        }


function apri_copertina() {
    window.location.href = "index.html"
}



//feedback del mouse
function p (pointer) {
}


function getSpada () {
    spada.kill()
    spada_presa = true
    player.loadTexture('sword');
}
function getSandali () {
    sandali.kill()
    sandali_presi = true
    player.loadTexture('sandals');
}
function getScudo () {
        if (!gamePaused) {
        scudo.x = 36100; 
        scudo.y = 500;
        scudo.kill();
        scudo_preso = true;
        player.loadTexture('shield');
        }
}


function cooldown_attacco () {
	if(attackButton.isDown)
		pass = false;
	else
		pass = true
	}


function respawn_piattaforme_ortro() {
		ortro.x = 37430;
		ortro.y = 1100;
		ortro.scale.x = 0.75;

        falling_platform1.x = 41700
		falling_platform1.y = 350
		falling_platform1.body.velocity.y = 0

		falling_platform2.x = 43990
		falling_platform2.y = 350
		falling_platform2.body.velocity.y = 0

		falling_platform3.x = 46700
		falling_platform3.y = 450
		falling_platform3.body.velocity.y = 0

		falling_platform4.x = 48900
		falling_platform4.y = 400
		falling_platform4.body.velocity.y = 0

		falling_platform5.x = 49800
		falling_platform5.y = 500
		falling_platform5.body.velocity.y = 0
    }