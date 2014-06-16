incrementProgress();





var threatdict = {"LC": "Least Concern", "EN": "Endangered", "CR":"Critically endangered", "CR (PE)": "Critically endangered", "LR/lc": "Least Concern", "DD":"Data Deficient", "LR/cd":"Near Threatened", "VU": "Vulnerable","EW":"Extinct in the Wild", "NT": "Near Threatened", "LR/nt":"Near Threatened"}
incrementProgress();
 
var buttondata = [{"class":"amphibians", "type": "healthy", "value": 2405, "classorder":0, "order": 0, "text":"2,405"}, 
{"class":"amphibians", "type": "threatened", "value": 2341, "classorder":0, "order": 1, "text":"2,341"},
{"class":"amphibians", "type": "background", "value": 1, "classorder":0, "order": 2, "text":"less than 1"},
{"class":"mammals", "type": "healthy", "value": 3125, "classorder":1, "order": 0, "text": "3,125"},
{"class":"mammals", "type": "threatened", "value": 1469, "classorder":1, "order": 1, "text":"1,469"},
{"class":"mammals", "type": "background", "value": 1, "classorder":1, "order": 2, "text":"less than 1"},
{"class":"reptiles", "type": "healthy", "value": 2244, "classorder":2, "order": 0, "text":"2,244"},
{"class":"reptiles", "type": "threatened", "value": 1163, "classorder":2, "order": 1, "text":"1,163"},
{"class":"reptiles", "type": "background", "value": 1, "classorder":2, "order": 2, "text":"less than 1"},
{"class":"birds", "type": "healthy", "value": 7675, "classorder":3, "order": 0, "text":"7,675"},
{"class":"birds", "type": "threatened", "value": 2200, "classorder":3, "order": 1, "text": "2,200"},
{"class":"birds", "type": "background", "value": 1, "classorder":3, "order": 2, "text":"1 or fewer"}
]

var buttonx = {"amphibians": 742, "mammals": 546, "reptiles": 353, "birds": 165};

var buttoncolors = {"healthy":"#E7E8E9", "threatened":"#EDC3C2", "background":"#BCBEC0"};
//var classdatacolors = {"healthy":"#D1D2D4", "threatened":"#FF0000", "background":"#3A3A3C", "threatenedunhighlight":"#6D6E71", "threatenedunhighlight":"#D1D2D4"};
var classdatacolors = {"healthy":"#CCCCCC", "threatened":"#FF0000", "dd":"white", "background":"#3A3A3C", "threatenedunhighlight":"#6D6E71", "threatenedunhighlight":"#D1D2D4"};




var bodycopytext = [{"class":"amphibians", "copy":
"According to the natural extinction rate, we should not see more than one amphibian extinction per century. However, 2,341 are currently at risk for extinction. Frogs have been hit hard, with families like the <a onClick='showMe(\"waterfrogs\");' class='showmetext'><span class='showmebox'>water frog</span></a>, <a onClick='showMe(\"shrubfrogs\");' class='showmetext'><span class='showmebox'>shrub frog</span></a>, and <a onClick='showMe(\"dancingfrogs\");' class='showmetext'><span class='showmebox'>dancing frog</span></a> in great danger."},
{"class":"mammals", "copy":"According to the natural extinction rate, we should not see more than one mammal species go extinct per century. However, 1,469 are currently at risk for extinction. Notice the red cluster around <a onClick='showMe(\"primates\");' class='showmetext'><span class='showmebox'>primates</span></a>, especially the <a onClick='showMe(\"lemurs\");' class='showmetext'><span class='showmebox'>lemur</span></a> family. <a onClick='showMe(\"rhinos\");' class='showmetext'><span class='showmebox'>Rhinos</span></a>, <a onClick='showMe(\"bears\");' class='showmetext'><span class='showmebox'>bears</span></a> and <a onClick='showMe(\"cats\");' class='showmetext'><span class='showmebox'>big cats</span></a> are also in trouble."},
{"class":"reptiles", "copy": "According to the natural extinction rate, we should not see more than one reptile extinction per century. However, 1,163 are currently at risk for extinction. There is a striking red cluster around the order of <a onClick='showMe(\"turtles\");' class='showmetext'><span class='showmebox'>turtles</span></a>, as well as the <a onClick='showMe(\"chameleons\");' class='showmetext'><span class='showmebox'>chameleon</span></a> and <a onClick='showMe(\"iguanas\");' class='showmetext'><span class='showmebox'>iguana</span></a> families."},
{"class":"birds", "copy":"According to the natural extinction rate, we should not see more than one bird extinction per century. However, 2,200 are currently at risk for extinction. <a onClick='showMe(\"albatrosses\");' class='showmetext'><span class='showmebox'>Albatrosses</span></a>, <a onClick='showMe(\"penguins\");' class='showmetext'><span class='showmebox'>penguins</span></a>, <a onClick='showMe(\"hornbills\");' class='showmetext'><span class='showmebox'>hornbills</span></a> and <a onClick='showMe(\"parrots\");' class='showmetext'><span class='showmebox'>parrots</span></a> are particularly at risk."}
]

// <a onClick='showMe(\"giantsalamanders\");' style='cursor: pointer; cursor: hand; top: 100px'>Giant salamanders</a>, <a onClick='showMe(\"asiaticsalamanders\");' style='cursor: pointer; cursor: hand; top: 100px'>Asiatic salamanders</a>, and <a onClick='showMe(\"lunglesssalamanders\");' style='cursor: pointer; cursor: hand; top: 100px'>lungless salamanders</a> are also in serious danger."

var showMeExamples = {"turtles": [3300, false], "chameleons":[351, true], 
"iguanas":[1630, true], "primates":[2595, false], "lemurs":[2650, true], "hippos":[525, true], 
"elephants":[2714, true], "rhinos":[2325, true], "manatees":[4592, true], "bears":[280, true], "cats":[119, true],
"dancingfrogs":[3095, true],
"waterfrogs":[4160, true],"shrubfrogs":[4100, true],"giantsalamanders":[4227, true],"asiaticsalamanders":[4265, true],"lunglesssalamanders":[4500, true],
"albatrosses":[9095, true],
"penguins":[9570, true],
"hornbills":[1611, true],
"ratites":[9775, false],
"parrots":[9422, false]}

function showMe(str) {
//console.log("SHOWME example: "+str)
speciestext
  	.style("display", "none")
//	console.log(str)

//console.log(data[100])
if (showMeExamples[str]==undefined) {
	return;
}
var example = data[showMeExamples[str][0]];
selectThis(example)
//selectedfamily = example.Family.toTitleCase();

//selectedfamily = classdata[currclassindex].familydata[classdata[currclassindex].familynames.indexOf(example["Family"])]
//if (!(showMeExamples[str][1])) {
selectedorder = classdata[currclassindex].orderdata[classdata[currclassindex].ordernames.indexOf(example["Order"])]
//} else {
if (showMeExamples[str][1]) {
var fd = classdata[currclassindex].familydata;
fd.forEach(function(d, i) {
	if (d.familyname==example.Family) {
		selectedfamily = d;
	
	}
})
} else {
	selectedfamily = undefined;
}
updateHighlights();
}

//<a onClick="a();" style="cursor: pointer; cursor: hand; top: 100px">*CLICK HERE*</a>

// GIFs for the animals classes
// amphibians
var aplayer = videojs("frogvideo2")
// mammals
var mplayer = videojs("lionvideo");
// reptiles
var rplayer = videojs("turtlevideo");
/**
rplayer.on('loadeddata', function(){ 
	console.log("Turtle loaded")
	//start();
} );**/
//var rgif = new SuperGif({ gif: document.getElementById('reptilesgif'),  auto_play:0} );
// birds
//var bgif = new SuperGif({ gif: document.getElementById('birdsgif'),  auto_play:0} );
var bplayer = videojs("owlvideo");  

    
var vids = [{"class":"amphibians", "vid": aplayer, "vidloaded":false, "firstload": true}, 
			{"class":"mammals", "vid": mplayer, "vidloaded":false, "firstload": true}, 
			{"class":"reptiles", "vid": rplayer, "vidloaded":false, "firstload": true}, 
			{"class":"birds", "vid": bplayer, "vidloaded": false, "firstload": true}];
			
		
    
// Variables for data load 
var currclassindex = 1;
//loadInitVid();
loadAllVideos();
/**function loadInitVid() {
//document.getElementById(vids[currclassindex].class+"staticdiv").style.opacity=1;
	vids[currclassindex].vid.on('loadeddata', function() {
	console.log("loaded turtle video")
	vids[currclassindex].vidloaded=true;
	
	// MIGHT NEED THIS LINE?
	//document.getElementById(vids[currclassindex].class+"viddiv").style.opacity=0;
	
	//vids[currclassindex].firstload=false;
	vids[currclassindex].vid.play();
	

	incrementProgress();
	
	})

}**/

function loadAllVideos() {
	vids[0].vid.on('loadeddata', function() {
		//console.log("loaded small frog video")
		vids[0].vidloaded=true;
		incrementProgress();
	});

	vids[1].vid.on('loadeddata', function() {
		//console.log("loaded lioness video")
		vids[1].vidloaded=true;
		incrementProgress();
	});
	vids[2].vid.on('loadeddata', function() {
		//console.log("loaded turtle video")
		vids[2].vidloaded=true;
		incrementProgress();
	});
	
	vids[3].vid.on('loadeddata', function() {
		//console.log("loaded birds video")
		vids[3].vidloaded=true;
		incrementProgress();
	});
	vids[currclassindex].vid.play();
}


var amphibians, reptiles, mammals, birds, data, alldata = [amphibians, reptiles, mammals, birds]
var classdata = [{"class":"amphibians", "value": 41, "vid": aplayer,
"maxspecies": 292,
"numgenuses": 500, 
"numatrisk":"2,341",
"classchartxoffset": 465,
"data": [{"class":"amphibians", "type": "threatened", "value": 2341, "text":"2,341"},
{"class":"amphibians", "type": "healthy", "value": 2405, "text": "2,405"},
{"class":"amphibians", "type": "dd", "value": 1629, "text": "1,629"}]},
/**
"data": [{"class":"amphibians", "type": "healthy", "value": 2405, "classorder":0, "order": 0, "text":"2,405"}, 
{"class":"amphibians", "type": "threatened", "value": 2341, "classorder":0, "order": 1, "text":"2,341"},
{"class":"amphibians", "type": "background", "value": 1, "classorder":0, "order": 2, "text":"less than 1"}]}, 
**/
// 1: MAMMALS
{"class": "mammals", "value":25, "vid": mplayer, 
"maxspecies": 137,
"numgenuses": 1157,
"numatrisk":"1,469",
"classchartxoffset": 480,
"data": [{"class":"mammals", "type": "threatened", "value": 1469, "text":"1,469"},
{"class":"mammals", "type": "healthy", "value": 3125, "text": "3,125"},
{"class":"mammals", "type": "dd", "value":835, "text": "835"}]},
/**
"data": [{"class":"mammals", "type": "healthy", "value": 3125, "classorder":1, "order": 0, "text": "3,125"},
{"class":"mammals", "type": "threatened", "value": 1469, "classorder":1, "order": 1, "text":"1,469"},
{"class":"mammals", "type": "background", "value": 1, "classorder":1, "order": 2, "text":"less than 1"}]},
**/

// 2: REPTILES
{"class":"reptiles", "value": 22, "vid": rplayer, 
"maxspecies": 79,
"numgenuses": 818, 
"numatrisk":"1,163",
"classchartxoffset": 475,
"data": [{"class":"reptiles", "type": "threatened", "value": 1163, "text":"1,163"},
{"class":"reptiles", "type": "healthy", "value": 2244, "text": "2,244"},
{"class":"reptiles", "type": "dd", "value": 775, "text": "775"}]},
/**
"data": [{"class":"reptiles", "type": "healthy", "value": 2244, "classorder":2, "order": 0, "text":"2,244"},
{"class":"reptiles", "type": "threatened", "value": 1163, "classorder":2, "order": 1, "text":"1,163"},
{"class":"reptiles", "type": "background", "value": 1, "classorder":2, "order": 2, "text":"less than 1"}]},**/


// 3: BIRDS
{"class":"birds", "value": 13, "vid": bplayer, 
"maxspecies": 79,
"numgenuses": 2094, 
"numatrisk":"2,200",
"classchartxoffset": 450,
"data": [{"class":"birds", "type": "threatened", "value": 2200, "text":"2,200"},
{"class":"birds", "type": "healthy", "value": 7675, "text": "7,675"},
{"class":"birds", "type": "dd", "value": 60, "text": "60"}]}];
/**
"data": [{"class":"birds", "type": "healthy", "value": 7675, "classorder":3, "order": 0, "text":"7,675"},
{"class":"birds", "type": "threatened", "value": 2200, "classorder":3, "order": 1, "text": "2,200"},
{"class":"birds", "type": "background", "value": 1, "classorder":3, "order": 2, "text":"1 or fewer"}]}];**/

incrementProgress();
classdata[2].commonnames=["American Alligator","Chinese Alligator","Common Caiman","Broad-snouted Caiman","Yacar�","Black Caiman","Dwarf Caiman","Smooth-fronted Caiman","American Crocodile","Orinoco Crocodile","Australian Freshwater Crocodile","Philippines Crocodile","Morelet's Crocodile","Nile Crocodile","New Guinea Crocodile","Mugger","Salt-water Crocodile","Cuban Crocodile","Siamese Crocodile","African Dwarf Crocodile","False Gharial","Gharial","Brothers Island Tuatara","Beak-head","Arafura File Snake","Wart Snake","Elephant Trunk Snake","Anderson's Rock Agama","Eritrean Rock Agama","Black-necked Agama","Black-necked Tree Agama","","Brown Pricklenape","","","Bouet's Agama","Boulenger's Agama","Insular Agama","Common Spiny Agama","Bibron's Agama","Insular Agama","Mwanza Flat-headed Rock Agama","","Spiny Agama","","Gambia Agama","Mallee Heath Lashtail","Dusky Earless Agama","Great Crested Canopy Lizard","Gunther's Bloodsucker","","Elliot's Forest Lizard","Large-scaled Forest Lizard","Spineless Forest Lizard","Nilgiri Forest Lizard","Roux's Forest Calotes","Rough Nose Horned Lizard","Leaf-nosed Lizard","Frilled Lizard","","Lake Eyre Dragon","Central Netted Dragon","Ornate Crevice-dragon","Ochre Dragon","Yinnietharra Rock Dragon","White-lipped Two-line Dragon","Lally's Two-line Dragon","Pink Two-line Dragon","Two-spotted Flying Lizard","","Southern Flying Lizard","","Red-barbed Flying Dragon","","Lined Flying Dragon","Asian Gliding Lizard","","White Spotted Flying Lizard","Quadras' Flying Lizard","","Barred Flying Dragon","Giant Forest Dragon","Crested Lizard","Two-marked Forest Dragon","","Solomons Tree Dragon","Vogt's Forest Dragon","Banded Japalure","","Cloud-forest Japalure","East Himalayan Mountain Lizard","Gilbert's Dragon","Hump Snout Lizard","Indian Kangaroo Lizard","Redbelly Agama","Turkestan Rock Agama","Small-scaled Rock Agama","Arabian Toad-headed Agama","","","Sunwatcher","","Yellow-speckled Toad Agama","Saissan Toad-headed Agama","Striped Toad Agama","Persian Toad Agame","Przewalski's Toadhead Agama","Strauch's Toad Agama","Theobald's Toad-headed Agama","","","Eastern Bearded Dragon","Blanford's Rock Agama","South Indian Rock Agama","Vietnam False Bloodsucker","Mountain Dragon","Iraqi Mastigure","Anaimalai Spiny Lizard","Horsfield's Spiny Lizard","Fan Throated Lizard","Starred Agama","","","","","Horny-scaled Agama","Savigny's Agama","Erg Agama","Grassland Earless Dragon","Egyptian Mastigure","Schmidt's Mastigure","Yemeni Spiny-tailed Lizard","Eyed Dabb Lizard","Ornate Mastigure","","Omani Spiny-tailed Lizard","South Arabian Spiny-tailed Lizard","Red Worm Lizard","Puerto Rican Dusky Amphisbaena ","Bahia Worm Lizard","Rio Grande Worm Lizard","Ridley's Worm Lizard","Puerto Rican Dusky Amphisbaena","Iberian Worm Lizard","Moroccan Worm Lizard","Anatolian Worm Lizard","","French Congo Worm Lizard","Ugly Worm Lizard","","","Los Archipelago Worm Lizard","Liberia Worm Lizard","","Cassine River Worm Lizard","Liwale Round-snouted Worm Lizard","Angolan Spade-snouted Worm Lizard","","Cope's Arboreal Alligator Lizard ","Campbell's Alligator Lizard","Chiszar's Arboreal Alligator Lizard","","Frost's Arboreal Alligator Lizard","Mount Zempoaltepec Alligator Lizard","Terrestrial Arboreal Alligator Lizard","Red-lipped Arboreal Alligator Lizard","","Matuda's Arboreal Alligator Lizard","","Mixtecan Arboreal Alligator Lizard","MonteCristo Arboreal Alligator Lizard","Oaxaca Arboreal Alligator Lizard","Salvador Arboreal Alligator Lizard","Smith's Arboreal Alligator Lizard","Bromeliad Arboreal Alligator Lizard","","Peloponnese Slow Worm","","","","Giant Hispaniolan Galliwasp","","Jamaican Galliwasp","Hispaniolan Khaki Galliwasp ","","Huaxteca Lesser Galliwasp","","","Rozella's Lesser Galliwasp","","Hispaniolan Four-toed Galliwasp ","Giant Hispaniolan Galliwasp","O'Shaughnessy's Galliwasp","Brazilian Galliwasp","Montserrat Galliwasp","","Northern Alligator Lizard","Madrean Alligator Lizard","Southern Alligator Lizard","Los Coronados Alligator Lizard","Panamint Alligator Lizard","","","Texas Alligator Lizard","","","","","Koelliker's Glass Lizard","","","","Morelet's Alligator Lizard","","Slender Glass Lizard","","Island Glass Lizard","","Hart's Glass Lizard","Mimic Glass Lizard","Eastern Glass Lizard","","Black Legless Lizard","","","Malayan Giant Blind Snake","Natal Purple-glossed Snake","Eastern Purple-glossed Snake","Black Headed Snake","Cape Centipede Eater","Lined Centipede-eater","","Arabian Small-Scaled Burrowing Asp","Mole Viper","Mole Viper","Mole Viper","Small-Scaled Burrowing Asp","Sahelian Burrowing Asp","Striped Harlequin Snake","Kenya Two-headed Snake","Muller's Snake","Reinhardt's Snake-eater","Guinea Snake-eater","Ivory Coast Snake-eater","","","","Dumeril's Boa","Malagasy Ground Boa","Fiji Island Boa","Palau Bevel-nosed Boa","Rubber Boa","Cropan's Boa","Cuban Boa","Puerto Rican Boa","Mona Island Boa","Jamaican Boa","Arabian Sand Boa","","Rosy Boa","Madagascar Tree Boa","Round Island Keel-scaled Boa","White-bellied Reed Snake","Bicoloured Reed Snake","Banded Worm Snake","Bornean Reed Snake","Everett's Reed Snake","Gervais' Worm Snake","Gimlett's Reed Snake","Grabowsky's Reed Snake","Lined Reed Snake","","","Collared Reed Snake","Linnaeus's Reed Snake","Low's Reed Snake","Variable Reed Snake","Kapuas Reed Snake","","Mueller's Reed Snake","Narrow-headed Reed Snake","Brown Reed Snake","Prakke's Reed Snake","Red-headed Reed Snake","Schmidt's Reed Snake","Hong Kong Dwarf Snake","Yellow-bellied Reed Snake","Sumatran Reed Snake","Short-tailed Reed Snake","Yunnan Reed Snake","Mountain Dwarf Snake","Chan-ard Mountain Reed Snake","Genting Highlands Reed Snake","Jason's Reed Snake","Malayan Mountain Reed Snake","Schulz's Reed Snake","Tweedie's Reed Snake","Vogel's Reed Snake","White-collared Reed Snake","Zamboanga Burrowing Snake","Mocquard's Reed Snake","Eiselt's Dwarf Reed Snake","Dwarf Reed Snake","Mcnamara's Burrowing Snake","Mountain Burrowing Snake","Negros Light-scaled Burrowing Snake","","","","Common Knob-tailed Lizard","Southern Knob-tailed Gecko","Banded Knob-tail","","","Leaf-tailed Gecko","Border Thick-tailed Gecko","Tiger Chameleon","Pondo Dwarf Chamel","Drakensberg Dwarf Chameleon","Qudeni Dwarf Chameleon","Setaro's Dwarf Chameleon","Elandsberg Dwarf Chamaeleon","Natal Midlands Dwarf Chamaeleon","Wolkberg Dwarf Chameleon","Eastern Cape Dwarf Chameleon","Amber Mountain Leaf Chameleon","Antakarana Leaf Chameleon","","Marojejy Leaf Chameleon","Namoroka Leaf Chameleon","Brygoo's Leaf Chameleon","Decary's Leaf Chameleon","","Northern Leaf Chameleon","","Marojejy Leaf Chameleon","","Lined Leaf Chameleon","","","","Antsingy Leaf Chameleon","","","Plated Leaf Chameleon","Brown Leaf Chameleon","Perinet Leaf Chameleon","","Mount d'Ambre Leaf Chameleon","","","Amber Mountain Chameleon","","","","Short-horned Chameleon","","Cryptic Chameleon","","","","Short-nosed Chameleon","","","","","Bizarre-nosed Chameleon","","Marojejy Peak Chameleon","","","Nose-horned Chameleon","O'Shaughnessy's Chameleon","Parson's Chameleon","Peltier's Chameleon","","","Tsaratanana Chameleon","Blunt-nosed Chameleon","Vences' Chameleon","Arabian Chameleon","Veiled Chameleon","Mediterranean Chameleon","Common African Flap-necked Chameleon","Socotran Chameleon","Namaqua Chameleon","Senegal Chameleon","Angel's Chameleon","Antimena Chameleon","Two-banded Chameleon","Belalanda Chameleon","","","","Laborde's Chameleon","Jeweled Chameleon","Lesser Chameleon","","Oustalet's Chameleon","Panther Chameleon","Petter's Chameleon","","","","Warty Chameleon","","Marshall's Pygmy Chameleon","Western Pygmy Chameleon","Usambara Spiny Pygmy Chameleon","Chapin's Chameleon","Sail Backed Chameleon","Bioko Montane Chameleon","Kenyan High-casqued Chameleon","Ukinga Hornless Chameleon","Ituri Forest Chameleon","Spiny-sided Chameleon","Cameroon Two-horned Mountain Chameleo","G�nther's Vine Snake","Speckle-headed Vine Snake","River Vine Snake","Malayan Vine Snake","Perrotet's Vine Snake","Asian Vine Snake","Brown Vine Snake","Glossy Snake","","","Baja California Ratsnake","Trans-pecos Ratsnake","Philippine Blunt-headed Tree Snake","Bourret's Cat Snake","Dog-toothed Cat Snake","White-spotted Cat Snake","Forsten's Cat Snake","Guangxi Cat Snake","Jasper Cat Snake","Square-headed Cat Snake","Black-headed Cat Snake","Philippine Cat Snake","Banded Green Cat Snake","Schultz' Blunt-headed Tree Snake","Common Cat Snake","Wall's Cat Snake","Scarletsnake","","Sand Snake","Western Shovel-nosed Snake","Sonoran Shovel-nosed Snake","St Vincent Blacksnake","Banded Flying Snake","Yellow-striped Trinket Snake","Andreas' Racer","Eastern Racer","","","","","","Indian Smooth Snake","Southern Smooth Snake","Northern Triangle-spotted Snake","Southern Triangle-spotted Snake","Many-banded Green Snake","Central African Egg-eating Snake","","","Common Egg Eater","","Boulenger's Bronzeback","Coconut Tree Snake","Wall's Bronzeback","Beautiful Bronzeback Tree Snake","Giri's Bronzeback Tree Snake","Eastern Himalayan Bronze-brown Snake","Southern Bronzeback","Haas's Bronzeback Tree Snake","Kopstein's Bronzeback Tree Snake","Lorentz River Tree Snake","Nganson Bronzeback Tree Snake","Black Treesnake","Solomons Tree Snake","Striated Bronzeback Tree Snake","Mountain Bronzeback Tree Snake","","Cope's Forest Racer","Barred Forest Racer","","Large Whip Snake","Red-Bellied Racer","","Eastern Indigo Snake","Central American Indigo Snake","","Black Forest Racer","Esmarald Racer","Blanford's Bridal Snake","","Half-Banded Bridled Snake","Three-Banded Bridled Snake","Philippine Dryophiops","Brown Whip Snake","","","Collared Dwarf Snake","Crowned Dwarf Snake","","Narrow-striped Dwarf Snake","","","","Dark Head Dwarf-racer","","Ring-Headed Dwarf Snake","Dotted Dwarf Snake","Roth's Dwarf Snake","Indian Egg-eater","Chinese Leopard Snake","Four-lined Snake","Dark-Grey Ground Snake","Mandarin Trinket Snake","Sichuan Rat Snake","","","Mexican Hooknose Snake","Orange-bellied Snake","Striped Ground Snake","Pulau Tioman Ground Snake","Common Ring-neck","Royal Tree Snake","Red-Tailed Racer","Chihuahuan Hook-nosed Snake","Desert Hooknose Snake","Socotran Racer","Algerian Whip Snake","Horseshoe Whip Snake","Cyprus Whip Snake","Balkan Whip Snake","Green Whip Snake","Gray-banded Kingsnake","Prairie Kingsnake","Common Kingsnake","","","Sonoran Mountain Kingsnake","","California Mountain Kingsnake","Striped Lowland Snake","Pacific Coast Parrot Snake","Mexican Parrot Snake","Cloud Forest Parrot Snake","Oliver's Parrot Snake","Dusky Wolf Snake","Smooth Greensnake","Stripe-Necked Snake","Sakashima Green Snake","","Stolickza's Ringneck","Tricoloured Ringneck","","","Butler's Wolf Snake","Indian Wolf Snake","Ross' Wolf Snake","","Brown Wolf Snake","Yellow-spotted Wolf Snake","Yellow Large-toothed Snake","","Twin-spotted Wolf Snake","Laos Wolf Snake","Vietnamese Large-toothed Snake","Muller's Wolf Snake","Snake-Eater Wolf Snake","Colombo Wolf Snake","Rendahl's Wolf Snake","White-Banded Wolf Snake","Travancore Wolf Snake","Zaw's Wolf Snake","Common Leaf-nosed Snake","Maynard's Longnose Sand Snake","Derafshi Snake","False Smooth Snake","False Smooth Snake","Bella Rat Snake","","","Sonoran Whipsnake","San Joaquin Coachwhip","Almeda Striped Racer","Schott's Whipsnake","","Striped Whipsnake","","Striped Lizard Eater","Heath's Tropical Racer","Salmon-bellied racer","Black-headed Smooth Snake","Western Kukri Snake","Northern Short-headed Snake","Spotted Kukri Snake","Barron's Kukri Snake","Javanese Mountain Kukri Snake","Boo-Liat's Kukri Snake","Short-tailed Kukri Snake","Chinese Kukri Snake","Ashy Kukri Snake","Pegu Kukri Snake","Cantor's Kukri Snake","","Eberhardt's Kukri Snake","Jewelled Kukri Snake","Small-banded Kukri Snake","Forbes' Kukri Snake","Inornate Kukri Snake","Grey Kukri Snake","Walnut Kukri Snake","Lacroix Kukri Snake","","Barred Short-headed Snake","Arakan Kukri Snake","Sulu Short-headed Snake","Spotted-bellied Short-headed Snake","Cambodian Kukri Snake","Eyed Kukri Snake","Eight-lined Kukri Snake","Ornate Kukri Snake","Perkin's Short-headed Snake","","False Striped Kukri Snake","","Purple Kukri Snake","Half-Keeled Kukri Snake","Splendid Kukri Snake","Dum�ril's Kukri Snake","Striped Kukri Snake","Streaked Kukri Snake","Mandalay Kukri Snake","Three-lined Kukri Snake","","Jerdon's Kukri Snake","Chinese Garter Snake","Greensnake","Mountain Reed Snake","Moellendorff's Trinket Snake","","Baird's Ratsnake","Great Plains Ratsnake","Eastern Foxsnake","Corn Snake","Western Ratsnake","Eastern Foxsnake","Common Bush Snake","","Spotted Leaf-nosed Snake","Bullsnake","","","","Pinesnake","Louisiana Pinesnake","","Collared Dwarf Racer","Elegant Racer","Flower's Racer","Dahl's Whip Snake","Rogers' Racer","Sinai Banded Racer","Variable Racer","Yellow-red Rat Snake","","","Keeled Rat Snake","White-bellied Rat Snake","Smooth-scaled Mountain Rat Snake","Olive Forest Snake","Green Trinket Snake","Ladder Snake","False Tree Coral","Long-nosed Snake","Black-Headed Rhynchocalamus","Rhinoceros Snake","","Eastern Patch-nosed Snake","Western Patch-nosed Snake","","","","Guatemala Neckband Snake","Green Rat Snake","White-striped Snake","Collared Black-headed Snake","Striped Black-headed Snake","White-lipped Black-headed Snake","","","","","Groundsnake","Zebra Snake","Bornean Black Snake","Bismark Ground Snake","Muller's Wolf Snake","","Short-tailed Snake","","","","Mexican Black-headed Snake","Bocourt's Black-headed Snake","","Mertens' Centipede Snake","Pacific Coast Centipede Snake","Guerreran Centipede Snake","Southeastern Crowned Snake","Big Bend Blackhead Snake","Peten Centipede Snake","Deppe's Centipede Snake","Yellow-lined Centipede Snake","Flathead Snake","Smith's Black-headed Snake","","Mena's Centipede Snake","Blackbelly Centipede Snake","Plains Black-headed Snake","Rim Rock Crowned Snake","Western Black-headed Snake","","Florida Crowned Snake","Big Bend Black-headed Snake","","Red Earth Centipede Snake","Potos� Centipede Snake","Central American Centipede Snake","Hallowell's Centipede Snake","Chihuahuan Black-headed Snake","Yaqui Black-headed Snake","","","","Cat Snake","","Black Headed Snake","Desert Cat Snake","Soosan Viper","Variable Cat Snake","Fruhstorfer's Mountain Snake","Bird Snake","Black Tree Snake","Coral-bellied Wormsnake","Central American Lyre Snake","Mexican Lyre Snake","Chihuahuan Lyre Snake","Ornate Brown Snake","Malayan Brown Snake","Caucasian Rat Snake","Aesculapean Snake","European Ratsnake","Dwarf Karoo Girdled Lizard","Armadillo Girdled Lizard","Giant Girdled Lizard","Lang's Crag Lizard","Lawrence's Girdled Lizard","Mclachlan's Girdled Lizard","Mecula Girdled Lizard","Dwarf Crag Lizard","Ethiopian Girdled Lizard","Spiny Crag Lizard","Tasman's Girlded Lizard","Emperor Flat Lizard","Common Flat Lizard","Pungwe Flat Lizard","Soutpansberg Flat Lizard","Collared Flat Lizard","Green Basiisk","","Keeled Helmeted Basilisk","","","","Great Basin Collared Lizard","Eastern Collared Lizard","Tiburon Collared Lizard","","","Sonoran Collared Lizard","Reticulate Collared Lizard","Baja California Collared Lizard","Long-nosed Leopard Lizard","Blunt-nosed Leopard Lizard","Long-nosed Leopard Lizard","Common Pipe Snake","","Ahl's Anole","Bueycito Anole","High Anole","Barahona Grass Anole","","","Armour's Anole","","Panther Anole","","Green Anole","Carpenter Anole","Central Anole","Hill Anole","","","","","Good Anole","Veronica's  Anole","Fitch's Anole","Fraser's Anole","","O'Shaughnessy's Anole","Graham's Anole","Granular Anole","Cabo Cruz Banded Anole","Tiburon Stout Anole","","Jacare Anole","Finca Ceres Anole","Brown Red-bellied Anole ","Striped Anole","","","Navassa Anole","Honduran Giant Anole","Lvnch's Anole","","Rueda's Anole","Jacmel Gracile Anole","","","Foothill Anole","","","","","Jacmel Gracile Anole ","Dwarf Anole","Dominican Anole","Olsson's Anole","","Thick Anole","","Crab Cay Anole","","Proboscis Anole","","","Culebra Giant Anole","","","Half-lined Hispaniolan Grass Anole","Ghost Anole","Baoruco Cliff Anole","","Jamaican Twig Anole","Speckled Anole","Pallid Stout Anole","","New Guinea Blind Earless Skink","Sclerophyll Bavayia","Gracile Bavayia","","High Elevation Bavayia","Ornate Bavayia","Pretty Bavayia","Robust Forest Bavayia","Pale-stripe Bavayia","Western Stone Gecko","Ornate Stone Gecko","Bauer's Chameleon Gecko","","Large-scaled chamaeleon gecko","Vieillard's Chamaeleon Gecko","Gold-striped Gecko","Duvaucel's Gecko","Black-eyed Gecko","Harlequin Gecko","Stephen's Island Gecko","Jewelled Gecko","Rough Gecko","Knob-headed Giant Gecko","Bavay's Giant Gecko","Crested Gecko","New Caledonia Giant Gecko","Sarasin's Giant Gecko","Rough-snouted Giant Gecko","Northern Spiny-tailed Gecko","Southern Phasmid Gecko","Robust Striped Gecko","Golden Spiny-tailed Gecko","Dary's Burrowing Snake","","Burrowing Snake","Middle American Burrowing Snake","","","Antiguan Racer","Anguila Racer","Orange-bellied Racer","Terre-De-Haut Racer","","Rustyhead Snake","","","G�nther's Island Racer","Albuquerque Ground Snake","Bocourt's Ground Snake","Thickhead Ground Snake","Duida Ground Snake","Limitan Ground Snake","Big Ground Snake","Modest Ground Snake","Northern Ground Snake","Basin Ground Snake","Roule's Ground Snake","","Tropical Forest Snake","","Cuban Lesser Racer","Eastern Wormsnake","","","","","Mexican Snake Eater","Peters' Running Snake","Black-striped Snake","","","Five-striped Snake","","","","Sharp-tailed Snake","Dunn's Road Guarder","Ring-necked Snake","American Snail-eater ","Two-colored Snail-eater","Snail-eating Thirst Snake","Catesby's Snail-eater","","Gaige's Thirst Snail-eater","","Northern Snail-eater","Peruvian Thirst Snake","Bocourt's Snail-eater","","","","Double-banded Coral Snake Mimic","Mimic False Coral Snake","Mud Snake","Rainbow Snake","Sierra Mije Earth Snake","Colombian Earth Snake","Chiapas Earth Snake","Keeled Earth Snake","","Mesa del Sur Earth Snake","Sierra Juarez Earth Snake","Dug�s' Earth Snake","Godman's Earth Snake","Downs' Earth Snake","","Mesa Central Earth Snake","Highland Earth Snake","Coffee Earth Snake","Guerreran Earth Snake","Rosebelly Earth Snake","Ruthven's Earth Snake","Coral Earth Snake","","","","Hoge's Keelback","Equatorial Keelback","Western Hog-nosed Snake","Eastern Hog-nosed Snake","Southern Hog-nosed Snake","Costa Rica Water Snake","","Amazon Water Snake","Nightsnake","Black Racer","Plain Tree Snake","","Rainforest Cat-eyed Snake","Southwestern Cat-eyed Snake","Black-banded Cat-eyed Snake","Western Cat-eyed Snake","","","Splendid Cat-eyed Snake","Uribe's False Cat-eyed Snake","","","Lac�p�de's Ground Snake","Jaeger's Ground Snake","","Long Ground Snake","Shaw's Dark Ground Snake","Ornate Ground Snake","Barbados Racer","Crown Ground Snake","Williams' Ground Snake","Lema's Ground Snake","","Jan's Hognose Snake","Ringed Hognose Snake","","Two-colored Mussurana","Ringneck Coffee Snake","Espinal's Coffee Snake","Spotted Coffee Snake","","Redback Coffee Snake","Rough Coffee Snake","","","Werner's False Coral Snake","Tschudi's False Coral Snake","","Dumeril's Diadem Snake","","Diurnal Vine Snake","","G�nther's Green Racer","Schmidt's Green Racer","Jan's Green Racer","","","Black Halloween Snake","","Paran� False Boa","South American Pond Snake","False Cat-eyed Snake","Wide Ground Snake","Brazilian Bird Snake","Thick Graceful Brown Snake","Pine Woods Littersnake","Ribbon Graceful Brown Snake","Western Graceful Brown Snake","Crowned Graceful Brown Snake","Marcella's Graceful Brown Snake","Nuevo Leon Graceful Brown Snake","Sargent's Graceful Brown Snake","Stadelman's Graceful Brown Snake","Pine-Oak Snake","Vermiculate Graceful Brown Snake","","Godman's Graceful Brown Snake","Kinkelin Graceful Brown Snake","Tearful Pine-Oak Snake","Brokencollar Graceful Brown Snake","","","Ringed Snail Sucker","Cope's Snail Sucker","Slender Snail Sucker","","","Boulenger's Tree Snake","Tropical Flat Snake","Common Spotted Night Snake","Guanabara Spotted Night Snake","Worontzow's Spotted Night Snake","Chilean Slender Snake","","","","","Amazon Coastal House Snake","Coastal House Snake","","G�nther's Tropical Ground Snake","Cope's Tropical Ground Snake","Dunn's Tropical Ground Snake","Slevin's Tropical Ground Snake","Viquez's Tropical Ground Snake","Western Snail-Eating Snake","Fischer's Snail-Eating Snake","Philippi's Snail-Eating Snake","Terrestrial Snail Sucker","Serra Snake","","Neuwied's False Fer-de-lance","Wucherer's Ground Snake","Horned Sea Snake","Rough-scaled Death Adder","Sahul Reef Snake","Dubois' Sea Snake","Eydoux' Sea Snake","Leaf-scaled Sea Snake","Dusky Sea Snake","Olive-brown Sea Snake","M�ller's Crowned Snake","Stokes' Sea Snake","Pygmy Copperhead","Andaman's Krait","Malayan Krait","Banded Krait","Red-headed Krait","Splendid Krait","Many-banded Krait","Red River Krait","Wanghaoting's Krait","Bibron's Coral Snake","Blue Coral Snake","Banded Malaysian Coral Snake","Speckled Coral Snake","Striped Coral Snake","Western Carpentaria Snake","Black Mamba","Western Green Mamba","Ornamental Snake","Master's Snake","Mustard-bellied Snake","Lake Cronin Snake","Bardick","Short-nosed Snake","Somali Garter Snake","Black Garter Snake","","Egg-eating Sea Snake","Ijima's Sea Snake","Beaked Sea Snake","North-western Mangrove Sea Snake","Dunmall's Snake","Ringhals","","Broad-headed Snake","Stephen's Banded Snake","Black-ringed Sea Snake","Blackheaded Banded Sea Snake","","Dwarf Sea Snake","Cogger's Sea Snake","Annulated Sea Snake","Bar-bellied Sea Snake","Striped Sea Snake","Graceful Small Headed Seasnake","King's Sea Snake","Lambert's Sea Snake","Arabian Gulf Sea Snake","Mcdowell's Sea Snake","Greater Sea Snake","Russell's Sea Snake","Spotted Sea Snake","Ornate Reef Sea Snake","Large-headed Seasnake","Lake Taal Snake","Yellow Sea Snake","Jerdon's Sea Snake","Shaw's Sea Snake","Columbrine Sea Krait","Crocker's Sea Snake","Yellow-lipped Sea Snake","","Blackbanded Sea Krait","","Flat-tail Sea Snake","Chinese Sea Snake","Solomons Black-banded krait","Sonoran Coralsnake","Allen's Coral Snake","","","","Pygmy Coral Snake","","","","Eastern Coral Snake","Mayan Coral Snake","Equal-banded Coral Snake","Langsdorff's Coral Snake","","","","","Many-banded Coral Snake","Par� Coral Snake","","Argentinian Coral Snake","Roatan Coral Snake","Panamenian Coral Snake","Stuart's Coral Snake","Texas Coralsnake","","Monocled Cobra","Mali Cobra","Mandalay Cobra","Philippine Common Cobra","Samar Cobra","","Black And White Spitting Cobra","Equatorial Spitting Cobra","Sumatran Cobra","Mainland Island Snake","Fiji Snake","King Cobra","Pelagic Sea Snake","Black Tree Cobra","Muller's Snake","Solomons Red Krait","Australian Coral Snake","Black-striped Snake","Unbanded Shovel-nosed Snake","Coastal Burrowing Snake","Japanese Coral Snake","Kellog's Coral Snake","","Little Whip Snakes","Mallee Black-backed Snake","Viperine Sea Snake","Pilbara Bandy Bandy","Desert Cobra","Texas Banded Gecko","Yucatan Banded Gecko","Black Banded Gecko","","Central American Banded Gecko","Reticulate Banded Gecko","Barefoot Banded Gecko","Western Banded Gecko","Western Indian Leopard Gecko","Eastern Indian Leopard Gecko","Turkmenistan Eyelid Gecko","Tokashiki Gecko","Fat-tail Gecko","Hawequa Flat Gecko","Drakensberg Flat Gecko","Persian Spider Gecko","Seychelles Bronze Gecko","Dwarf Bronze Gecko","Giant Bronze Gecko","Even-fingered Gecko","Xinjiang Even-fingered Gecko","Frontier Bow-fingered Gecko","Kirghizia Even-fingered Gecko","Low Lying Gecko","Leviton's Gecko","","","","","Baiuch Rock Gecko","Indian Golden Gecko","Common Giant Ground Gecko","","","Goan Day Gecko","Graceful Day Gecko","Gund Day Gecko","Nilgiri Dwarf Gecko","Das's Day Gecko","Jerdon's Day Gecko","Kandyan Day Gecko","Koehler's Gecko","","Mysore Day Gecko","Ponmudi Day Gecko","Western Gecko","Ornate Day Gecko","Vellore Day Gecko","Deraniyagala's Gecko","Sispara Day Gecko","Wynad Day Gecko","Yercaud Day Gecko","","Agusan Bent-toed Gecko","Small Bent-toed Gecko","Guadalcanal Bow-fingered Gecko","Niah Cave Gecko","Sikkimese Bent-toed Gecko","Ring-tailed Gecko","Clouded Indian Gecko","Philippine Bent-toed Gecko","Palawan Bent-toed Gecko","","Nikolsky's Spider Gecko","Blanford's Short-toed Gecko","Fort Munro Sandstone Gecko","Kerman Bent-toed Gecko","Sulaiman Range Gecko","Potwar Gecko","Rough Bent-toed Gecko","","","Islands Striped Gecko","Kaala Striped Gecko","Koniambo Striped Gecko","Striped Gekko","Poum Striped Gecko","Taom Striped Gecko","Bold-striped Gecko","Vietanamese Leaf-toed Gecko","Madagascar Clawless Gecko","","Tete Thick-toed Gecko","Warty Thick-toed Gecko","Boulenger's Indian Gecko","Forest Spotted Gecko","Gunther's Indian Gecko","Jeypore Ground Gecko","Spotted Bowfinger Gecko","Fish-scale Gecko","Grandidier's Gecko","House Gecko","Banda Island Dtella","Borroloola Dtella","Palau Island Dtella","Dubious Dtella","Pilbara Dtella","Smooth-scaled Narrow-disked Gecko","Gray's Chinese Gecko","","Gigante Narrow-disked Gecko","Hokou Gecko","Mindoro Narrow-disked Gecko","Palawan Narrow-disked Gecko","Batan Narrow-disked Gecko","Romblon Narrow-disked Gecko","Large Forest Gecko","Peking Gecko","Tawa Gecko","Essex's Pygmy Gecko","Cederberg Pygmy Gecko","Small-scaled Gecko","","White-striped Viper Gecko","Anamalai Hill Gecko","","Boavista Leaf-toed Gecko","Bouvier's Leaf-toed Gecko","Kandyan Gecko","","Socotra Leaf-toed Gecko","","Common House Gecko","Giant Gecko","Graceful Leaf-toed Gecko","","Grant's Leaf-toed Gecko","","","Carrot-tail Viper Gecko","Socotran Rock Gecko","","Spotted Leaf-toed Gecko","Togo Leaf-toed Gecko","","","Sharpnose Leaf-toed Gecko","Antilles Leaf-toed Gecko","Bombay Leaf-toed Gecko","Pygmy Leaf-toed Gecko","Reticulate Leaf-toed Gecko","Satara Gecko","","Turkish Gecko","","Southern Ghats Slender Gecko","Palau Slender Gecko","Muller's Velvet Gecko","Wahlberg's Velvet Gecko","Yellow-lined Smooth-scaled Gecko","Batan Scaly-toed Gecko","Christian Scaly-toed Gecko","'Eua Forest Gecko","Rotuma Forest Gecko","Guppy's gecko","White-lined Smooth-scaled Gecko","","Viti Forest Gecko","","Small Broad-tailed Smooth-scaled Gecko","","Byrne's Gecko","Jolo Flapped-legged Gecko","Mcgregor's Flapped-legged Gecko","","Tiny Scaled Gecko","Blanc's Dwarf Gecko","Blanc's Dwarf Gecko","Chobe Dwarf Gecko","","Usambara Dwarf Gecko","","","","Malagasy Dwarf Gecko","Madagascar Dwarf Gecko","Methuen's Dwarf Gecko","","","","Black-spotted Dwarf Gecko","","Painted Dwarf Gecko","Robust Dwarf Gecko","","","Grandidier's Dwarf Gecko","","","Turquoise Dwarf Gecko","","","Asia Minor Thin-toed Gecko","Kotschy's Gecko","Caucasian Gecko","Kopet Dagh Bent-toed Gecko","Chitral Gecko","Lesser Night Gecko","Solomons Slender-toed Gecko","Pacific Slender-toed Gecko","Serpent Island Night Gecko","Marbled Gecko","Banded Thick-toed Gecko","Western Cape Gecko","Spotted Gecko","Tsodilo Thick-toed Gecko","Van Son's Gecko","","Angel's Petite Gecko","Grandidier's Madagascar Ground Gecko","Mocquard's Madagascar Ground Gecko","Graceful Madagascar Ground Gecko","Northern Madagascar Ground Gecko","","","","","","NosyBe Ground Gecko","Panther Gecko","Comoro Ground Gecko","","","","","Micronesia Saw-tailed Gecko","Atoll Giant Gecko","Abbott's Day Gecko","Andaman Day Gecko","","Seychelles Small Day Gecko","","","","Bluetail Day Gecko","Comoros Day Gecko","","Yellow-throated Day Gecko","Giant Madagascar Day Gecko","Round Island Day Gecko","","","","","Broad-tailed Day Gecko","Lined Day Gecko","Madagascar Day Gecko","","","","Thick Tail Gecko","Island Day Gecko","","Pasteur's Day Gecko","","","Peacock Day Gecko","","Mertens' Day Gecko","R�sler's Day Gecko","","","Standing's Day Gecko","La Digue Day Gecko","","Boettger's Day Gecko","Gulf Short-fingered Gecko","Orange-spotted Smooth-scaled Gecko","Cylindrical-bodied Smooth-scaled Gecko","Dark-spotted Smooth-scaled Gecko","Green Smooth-scaled Gecko","Interdune Barking Gecko","Philippine Flying Gecko","Burmese Flying Gecko","Misonne's Spider Gecko","Namaqua Day Gecko","Iranian Short-fingered Gecko","Arabian Short-fingered Gecko","Middle Eastern Short-fingered Gecko","Jordan Short-fingered Gecko","","Slevin's Short-fingered Gecko","Yemen Short-fingered Gecko","Caspian Bent-toed Gecko","Yangihissar Gecko","Latifi's Dwarf Gecko","Natterers Gecko","","Northern Sand Gecko","Seychelles Sucker-tailed Gecko","","","Common Flat-tail Gecko","","","","","Lined Flat-tail Gecko","","","","","","","Blue-black Plated Sand Lizard","Desert Plated Lizard","Namaqua Plated Lizard","African Long-tailed Seps","Breyer's Long-tailed Seps","Madagascar Girdled Lizard","","Bronze Girdled Lizard","","","","","Green Madagascar Girdled Lizard","Karsten's Girdled Lizard","Western Girdled Lizard","Madagascar Girdled Lizard","","Ornate Girdled Lizard","Four-lined Girdled Lizard","Red-legged Girdled Lizard","","","","Northern Teiid","Spotted Anadia","Ruthven's Anadia","","Donneisy's Arthrosaura","Bresslau's Bachia","","","","Elegant Eyed Lizard","Schreibers' Many-fingered Teiid","","G�nther's Sun Tegus","","Rough-scaled Worm Lizard ","Underwood's Spectacled Tegu","","Muller's Tegu","","Parker's Pholidobolus","Ruthven's Macropholidus","Tate's Neusticurus","","Uzzell's Neusticurus","Cochran's Neusticurus","","Werner's Largescale Lizard","","","Tropical Lightbulb Lizard","","","Beaded Lizard","Gila Monster","The Bitia","Cantor's Mangrove Snake","Australian Bokadam","","Asian Bockadam","Bocourt's Water Snake","Chinese Mud Snake","Blotched-lipped Mud Snake","Dussumier's Water Snake","Rainbow Mud Snake","Longhead Water Snake","Sind River Mud Snake","Boie's Mud Snake","Macleay's Mud Snake","Siebold's Mud Snake","Mekong Mud Snake","","Tentacled Snake","Crab-eating Snake","Gerard's Water Snake","Banded Swamp Snake","Deuve's Water Snake","Gray's Water Snake","Fernandina Marine Iguana","Fiji Banded Iguana","Lau Banded Iguana","Fiji Crested Iguana","Gal�pagos Pink Land Iguana","Santa Fe Land Iguana","Common Land Iguana","Campeche Spiny-tailed Iguana","Utila Spiny-tailed Iguana","Balsas Spiny-tailed Iguana","Yucat�n Spiny-tailed Iguana","Yellow-backed Spiny-tailed Iguana","Black-chested Spiny-tailed Iguana","Nolasco Spiny-tailed Iguana","Oaxaca Spiny-tailed Iguana","Roat�n Spiny-tailed Iguana","Motagua Spiny-tailed Iguana","Five-keeled Spiny-tailed Iguana","Common Spiny-tailed Iguana","Turks and Caicos Rock Iguana","Jamaican Iguana","Rhinoceros Iguana","Northern Bahamian Rock Iguana","Grand Cayman Blue Iguana","Clouded Rock Iguana","Anegada Rock Iguana","Ricord's Ground Iguana","Central Bahamian Rock Iguana","Mona Rhinoceros Iguana","Common Desert Iguana","Lesser Antillean Green Iguana","Common Chuckwalla","Spiny Chuckwalla","","Arabian Fringe-fingered Lizard","Bedriaga's Fringe-fingered Lizard","Be'er Sheva Fringe-fingered Lizard","Blanc's Fringe-toed Lizard","Busack's Fringe-fingered Lizard","Spiny-footed Lizard","","Giant Fringe-toed Lizard","Haas' Fringe-fingered Lizard","","Spotted Fringe-fingered Lizard","","Arnold's Fringe-fingered Lizard","","Leopard Fringe-fingered Lizard","Robust Fringe-fingered Lizard","Savigny's Fringe-fingered Lizard","Schmidt's Fringe-toed Lizard","Schreiber's Fringe-fingered Lizard","Doumergue's Fringe-fingered Lizard","","Lebanon Fringe-fingered Lizard","Yemen Fringe-fingered Lizard","Alpine Meadow Lizard","Fitzinger's Algyroides","Spanish Algyroides","Greek Algyroides","Blue-throated Keeled Lizard","Anatolian Rock Lizard","Danford's Lizard","","Anatolian Lizard","","Bedriaga's Rock Lizard","Atlas Dwarf Lizard","Southern Rock Lizard","Soutpansberg Rock Lizard","Sparse-scaled Forest Lizard","Sharp-snouted Rock Lizard","","Armenian Lizard","Bendimahi Lizard","Brauner's Rock Lizard","Caucasian lizard","Green-bellied Lizard","Clarks' Lizard","Dagestan Lizard","","Alborz Lizard","Derjugin's Lizard","Charnali Lizard","Ajarian lizard","Georgian Lizard","River Kura Lizard","Meadow Lizard","Radde's Lizard","Rostombekov's Lizard","Spiny-Tailed Lizard","Van Lizard","Rock Lizard","Unisexual Lizard","Uzzell's Lizard","Valentin's Lizard","Prokletije Rock Lizard","Mosor Rock Lizard","Pointed-snouted Racerunner","Anderson's Racerunner","","Lalehzar Racerunner","","Black-sided Racerunner","Pleske's Racerunner","Strauch's Racerunner","Suphan Racerunner","Atlantic Lizard","La Palma Giant Lizard","La Gomera Giant Lizard","Boettger's Lizard","Tenerife Lizard","Tenerife Speckled Lizard","El Hierro Giant Lizard","Gran Canaria Giant Lizard","Greek Rock Lizard","Aran Rock Lizard","Aurelio's Rock Lizard","Pyrenean Rock Lizard","","","Horvath's Rock Lizard","","Iberian Rock Lizard","Zagros Mountain Lacerta","Sand Lizard","Western Green Lizard","Medium Lizard","","Iberian Emerald Lizard","Caspian Green Lizard","Balkan Green Lizard","Green Lizard","","","","","Blanford's Short-nosed Desert Lizard","","Pasteur's Lizard","Simon's Desert Racer","","","Jerdon's Snake-eye","","Western Snake-eyed Lizard","Fraas' Lizard","Dwarf Lizard","Kaokoveld Sand Lizard","Karoo Sand Lizard","","","","","Lebanon Lizard","","Bocage's Wall Lizard","","","Erhard's Wall Lizard","Filfola Lizard","Skyros Wall Lizard","Iberian Wall Lizard","","Lilford's Wall Lizard","Dalmatian Wall Lizard","Miles Wall Lizard","Common Wall Lizard","Peloponnese Wall Lizard","Ibiza Wall Lizard","Aeolian Wall Lizard","Italian Wall Lizard","Balkan Wall Lizard","Tyrrhenian Wall Lizard","","Sicilian Wall Lizard","Algerian Psammodromus","Blanc's Sand Racer","Spanish Psammodromus","","","Small-fingered Psammodromus","Moroccan Rock Lizard","Kuhne's Grass Lizard","Asian Grass Lizard","Miyako Grass Lizard","Madeira Lizard","Ocellated Lizard","North African Ocellated Lizard","Siirt Lizard","","Cottrell's Mountain Lizard","Common Lizard","Cape File Snake","Savanna Lesser File Snake","Matschie's African Ground Snake","Black File Snake","Swaziland House Snake","Aurora House Snake","Yellow-bellied House Snake","Seychelles House Snake","Tanganyika Water Snake","Black House Snake","Lined Water Snake","Whyte's Water Snake","Eastern Wolf Snake","","Dwarf Wolf Snake","","Forest Wolf Snake","","Boulenger's Tree Lizard","Wiegmann's Tree Lizard","Darwin's Iguana","","","","","","Collared Blind Snake","Rose Blind Snake","Three-colored Blind Snake","","White-bellied Worm Snake","","Bouet's Worm Snake","","Roux-Est�ve's Worm Snake","New Mexico Bland Snake","Texas Blind Snake","Western Blind Snake","Giant Blind Snake","","Villiers' Blind Snake","Two-colored Blind Snake","Joshua's Blind Snake","","African Brown Water Snake","Nilgiri Keelback","Two-striped Keelback","Boulenger's Keelback","Deschaunsee's Keelback","Sabah Keelback","Gunung Inas Keelback","White-lipped Keelback","Wa Shan Keelback","Maki's Keelback","G�nther's Keelback","Hill Keelback","Peters's Keelback","Pope's Keelback","Red Mountain Keelback","Sarawak Keelback","Sauter's Keelback","Taron Keelback","Venning's Keelback","White-eyed Keelback","Olive Keelback Water Snake","Yunnan Olive Keelback","Blossom Krait","Kirtland's Snake","","Philippine Cylindrical Snake","Yellow-spotted Water Snake","Seychelles Wolf Snake","Orange-lipped Keelback","Blue-necked Keelback","Red Keelback","Collared Marsh-Snake","Olive Marsh Snake","Viperine Snake","Colkhis Water Snake","Grass Snake","Dice Snake","Atlantic Saltmarsh Snake","Mississippi Green Watersnake","Plain-bellied Watersnake","Southern Watersnake","Florida Green Watersnake","Brazos River Watersnake","Concho Watersnake","Diamond-backed Watersnake","Lake Erie Water Snake","Brown Watersnake","Gary's Mountain Keelback","Anderson's Stream Snake","","Dao Van Tien's Stream Snake","Guanxi Mountain Keelback","Kikuzato's Brook Snake","Man-Son Mountain Stream Snake","Sichuan Mountain Keelback","Javanese Stream Snake","Corrugated Water Snake","Angel's Mountain Keelback","Striped Crayfish Snake","Graham's Crayfish Snake","Glossy Crayfish Snake","Queen Snake","","White-lined Water Snake","Speckle-bellied Keelback","Red-belled Keelback","Leonard's Keelback","Zigzag-lined Water Snake","Gunung Murud Keelback","Black-banded Keelback","Groove-necked Keel-back","","","Red-necked Keelback","Taiwan Keelback","Black Swampsnake","Asiatic Water Snake","Chinese Keelback Water Snake","Yunnan Keelback Water Snake","Brownsnake","","Red-bellied Snake","","Aquatic Gartersnake","Short-headed Gartersnake","Butler's Gartersnake","","Sierra Gartersnake","Black-necked Gartersnake","Terrestrial Gartersnake","Mexican Gartersnake","","","","Giant Gartersnake","","Two-striped Gartersnake","Checkered Gartersnake","","","Northwestern Gartersnake","","Western Ribbonsnake","","Plains Gartersnake","","Eastern Ribbonsnake","","","San Francisco Garter Snake","","","Lined Snake","New Britain Keelback","Spotted Water Snake","Bismark Keelback","Common Keelback","","Highland Keelback","Papua New Guinea Montane Keelback","Rough Earthsnake","Smooth Earth Snake","Yellow-spotted Keelback Water Snake","Malayan Spotted Keelback Water Snake","Javan Keelback Water Snake","Spotted Keelback Water Snake","Red-sided Keelback Water Snake","Striped Keelback Water Snake","","Cuvier's Madagascar Swift","Merrem's Madagascar Swift","","","Dum�ril's Madagascar Swift","","Blunthead Slug Snake","Smooth Slug-eating Snake","Malayan Slug-eating Snake","Mountain Slug-eating Snake","Boulenger's Slug Snake","Keeled Slug-eating Snake","Formosa Slug Snake","Hampton's Slug-eating Snake","White-spotted Slug Snake","Barred Slug-eating Snake","Zebra-tailed Lizard","Greater Earless Lizard","Elegant Earless Lizard","Spot-tailed Earless Lizard","Lesser Earless Lizard","Keeled Earless Lizard","Banded Rock Lizard","","","","","","Texas Horned Lizard","Blainville Horned Lizard","Pygmy Horned Lizard","Greater Short-horned Lizard","Flat-tailed Horned Lizard","Round-tailed Horned Lizard","","Desert Horned Lizard","Regal Horned Lizard","","","","","","","Dunes Sagebrush Lizard","","","","","","","","Clark's Spiny Lizard","","","","","","","","","","","Common Sagebrush Lizard","Graphic Spiny Lizard","","","","","","","","Mountain Spiny Lizard","","","Luna's Spiny Lizard","Lundell's Spiny Lizard","","","Desert Spiny Lizard","Green Spiny Lizard","","","Canyon Lizard","","","","","Western Fence Lizard","","Texas Spiny Lizard","Granite Spiny Lizard","","","","Crevice Spiny Lizard","Chiapan Rough-scaled Lizard","","","","Blue Spiny Lizard","","","","","","","","","","","Eastern Fence Lizard","","","Rose-bellied Lizard","Striped Plateau Lizard","Florida Scrub Lizard","","","Coachella Valley Fringe-toed Lizard","Colorado Desert Fringe-toed Lizard","","Yuman Desert Fringe-toed Lizard","Mojave Fringe-toed Lizard","","","","","Long-tailed Brush Lizard","","Baja California Brush Lizard","Ornate Tree Lizard","","","","","","Common Side-blotched Lizard","","","Leaf-toed Gecko","Gallagher's Gecko","Gray-spotted Leaf-toed Gecko","Kermanshah Leaf-toed Gecko","","","","","","Pygmy Socotran Leaf-toed Gecko","South American Marked Gecko","","","","","","","Peru Leaf-toed Gecko","Andes Leaf-toed Gecko","","Chatham Leaf-toed Gecko","","","Peters' Leaf-toed Gecko","","","Leaf-toed Gecko","Oudri's Fan-footed Gecko","American Wall Gecko","East Canary Gecko","Boavista Wall Gecko","Bocage's Wall Gecko","B�hme's Gecko","Boettger's Wall Gecko","Santo Ant�o Wall Gecko","Helmethead Gecko","Darwin's Wall Gecko","Tenerife Gecko","Desert Wall Gecko","Fogo Wall Gecko","Giant Wall Gecko","Gomero Wall Gecko","Maio Wall Gecko","Common Wall Gecko","Qattara Gecko","Algerian Wall Gecko","S�o Nicolau Wall Gecko","","","","","S�o Vicente Wall Gecko","Angolan Shovel-snout","Angola Shovel-snout","Jan's Shoval-snout","Ghana Shovel-snout","Ornate Shovel-snout","Eastern Bark Snake","Montpellier Snake","","Condanarous Sandsnake","Indo-Chinese Sand Snake","Stout Sand Snake","Stripe-bellied Sand Snake","Striped Skaapsteker","Blakeway's Blotch-necked Snake","Assam Mountain Snake","Chinese Mountain Snake","Bamboo False Cobra","Dull Bamboo Snake","Large-eyed False Cobra","","","","","Boulenger's Forest Snake","","Lined Forest Snake","","","","G�nther's Racer","","","Common Slug Eater","Variegated Slug-eater","","","","","Forest Night Snake","Tiny Night Snake","","","","","","","Malagasy Giant Hognose Snake","Blonde Hognose Snake","","Peters' Bright Snake","","Gold-collared Snake","","","","","","Grandidier's Water Snake","","Six-lined Water Snake","","","","","","","","","","St. Johann's Tree Snake","Madagascar Night Snake","","","","Banded Philippine Burrowing Snake","","","","","","","","","Night Brook Snake","Plateau Brook Snake","","","","Striped Brook Snake","","","","","Lateral Water Snake","","","Yellow-striped Water Snake","Eared Worm-lizard","Flinders Ranges Worm-lizard","Hermite Island Worm-lizard","Fraser's Delma","Striped Legless Lizard","Single-striped Delma","Adorned Delma","Bronzeback Snake-lizard","Brigalow Scaly-foot","Ramsay's Python","Bismark Ringed Python","Brown Water Python","Amethyst Python","Carpet Python","Green Python","Anchieta's Dwarf Python","Burmese Python","Bornean Short-tailed Python","Brongersma's Short-tailed Python","","Asiatic Rock Python","Ball Python","Florida Worm Lizard","Two-streaked Snake-eyed Skink","","Chernov's Skink","Desert Lidless Skink","European Copper Skink","","Short-headed Legless Skink","Slendertail Lance Skink","Striped Blind Legless Skink","Lined Lance Skink","Percival's Legless Skink","Giant Lance Skink","Woodbush Legless Skink","Guinea Lidless Skink","Annobon Lidless Skink","","","Yellow Skink","","","Rock Skink","Boulenger's Tree Skink","Johanna's Skink","Black-striped Skink","","Spotted Skink","Gray Skink","","","Splendid Skink","","Tsaratanana Skink","","Short-necked Worm-skink","Speckled Worm-skink","Long-legged Worm-skink","Cool Skink","Elongate Short-legged Burrowing Skink","Stub-limbed Burrowing Skink","Boulenger's Short-legged Skink","Cebu Small Worm Skink","","","Two-digit Worm Skink","Schadenberg's Burrowing Skink","Dum�ril's Short-legged Skink","Negros Three-digit Worm Skink","Limbless Worm Skink","Northern Litter Skink","Speckled Litter Skink","Koumac Litter Skink","Common Litter Skink","","Chazeau's Litter Skink","Giant Litter Skink","Strand Litter Skink","Pani� Litter Skink","Renevier's Litter Skink","Mandj�lia litter skink","Lesser Saint Croix Skink","","Rainbow-skink","Digul River Rainbow Skink","Sandy Rainbow Skink","Slender Rainbow Skink","Northern Red-throated Skink","Southern Rainbow-skink","Southern pale-hipped skink","Northern Pale-hipped Skink","Armitage's Cylindrical Skink","Bedriaga's Skink","Italian Three-toed Skink","Riffian Skink","De l'Isle's Wedge-snouted Skink","Ebner's Skink","G�nther's Cylindrical Skink","","Manuel's Skink","Two-fingered Skink","Algerian Three-toed Skink","Small Three-toed Skink","Mionecton Skink","Mountain Skink","","Many-scaled Cylindrical Skink","Moroccan Three-toed Skink","Mocquard's Cylindrical Skink","Wedge-snouted Skink","Gran Canaria Skink","","Dum�ril's Wedge-snouted Skink","Western Three-toed Skink","Thierry's Cylindrical Skink","West Canary Skink","Delalande's Skink","Santo Ant�o Skink","S�o Nicolau Skink","","Stanger's Skink","Vaillant's Mabuya","Three-toed Snake-tooth Skink","Keeled Water Skink","","","Glorioso Snake Eyed Skink","Leschenault Snake Eyed Skink","New Guinea Snake-eyed Skink","New Caledonian Shore Skink","","Palau Snake Eyed Skink","Brown-blazed Wedgesnout Ctenotus","Plain-backed Kimberley Ctenotus","Kakadu Ctenotus","Jewelled South-west Ctenotus","Clay-soil Ctenotus","Bar-shouldered Ctenotus","Lancelin Island Skink","Leonhardi's Ctenotus","Hamelin Ctenotus","Western Slender Blue-tongue","Griffin's Keel-scaled Tree Skink","Olive Dasia","Boulenger's Dasia","King's Skink","Yakka Skink","Micronesian Skink","Anatom Emo Skink","Micronesia Black Skink","","Micronesia Forest Skink","Pacific Bluetail Skink","Vitilevu Mountain Treeskink","Viti Slender Treeskink","Teal Emo Skink","Erronan Treeskink","Yellow-throated Skink","Dark-bellied Copper-striped Skink","Bellona Skink","Olive Small-scaled Skink","Loveridge's Skink","Loyalty Islands Emoia","Spotted Blue-tailed Skink","Vanualevu Slender Treeskink","Christmas Island Whiptail-skink","Black Emo Skink","Vanuatu Silver Vineskink","Viti Copper-headed Skink","Ponape Skink","Solomons Blue-tailed Skink","Rennell Blue-tailed Skink","Samoa Skink","Sanford's tree skink","Schmidt's Skink","Mariana Skink","Madeay's Emo Skink","Taumako Skink","Polynesia Slender Treeskink","Viti Barred Treeskink","","Brown-sided Bar-lipped Skink","Southern Water Skink","Blue Mountain Water Skink","Orange-speckled Forest-skink","Stout Barsided Skink","Border Ranges Blue-spectacled Skink","Algerian Orange-tailed Skink","Poona Skink","Schmidt's Mabuya","Bibron's Skink","","Keeled Indian Mabuya","Inger's Mabuya","Sharma's Mabuya","Anderson's Mabuya","Three-banded Mabuya","Cogger's Island Skink","Solomon Minute Skink","Meiers Skink","Cape York Mulch-skink","Gracile burrowing skink","","Three-toed Earless Skink","Two-toed Earless Skink","Heyer's Isopachys","Brauer's Burrowing Skink","Vesey-fitzgerald's Burrowing Skink","Beddome's Ground Skink","Two-lined Ground Skink","","Barbour's Ground Skink","","","New Caledonian Leopard Skink","Nieuwenhuis' Skink","Deignan Tree Skink","Ceylon Tree Skink","Single Finger Larut Skink","Ono-i-Lau Ground Skink","Telfair's Skink","Uganda Five-toed Skink","Ruwenzori Four Toed Skink","Five-toed Skink","Allan's Lerista","Cape Range Slider","Blinking Broad-blazed Slider","Wide-striped Mulch Slider","Kennedy Range Broad-blazed Slider","Onslow Broad-blazed Slider","Arnhem Coast Fine-lined Slider","Ribbon Lerista","Slender Duneslider","Mount Cooper Striped Lerista","Coastal Kimberley Slider","Black Mountain Skink","Desert Egernia","Great Desert Skink","Night Skink","White's Rock-skink","Maruia Maquis Skink","Green-bellied Tree Skink","Blue-mouthed Skink","White-lipped Forest Skink","Tiller's Maquis Skink","","Bronze Slender Tree Skink","","Pandanus Skink","Yellow-striped Slender Tree Skink","Roux's Lipinia","Eastern Cape Litter-skink","Ashwamedh Writhing Skink","G�nther's Writhing Snake","Banded Supple Skink","Korat Supple Skink","Lined Supple Skink","","Redtail Skink","Rusty Skink","Common Madagascar Skink","","Morondava Skink","","Madagascar Coastal Skink","Stumpff's Skink","","","Roat�n Skink","","","Montane Marble-throated Skink","","Marble-throated Skink","Longtail Limbless Skink","Shark Bay Dwarf Skink","Managua Skink","","","Guinean Forest Skink ","Mafia Writhing Skink","Mocquard's Writhing Skink","Boulenger's Writhing Skink","Sundevall's Writhing Skink","Boulenger's Snake-eyed Skink","Northern Dwarf Skink","","Gracile Dwarf Skink","Greer's Dwarf Skink","Pindai Dwarf Skink","For�t Plate Dwarf Skink","","Earless Dwarf Skink","Rankin's Dwarf Skink","Slevin's Dwarf Skink","Florida Sand Skink","Pedra Branca Skink","Fiordland Skink","Robust Skink","Falla's Skink","Grand Skink","Chevron Skink","Speckled Skink","Lord Howe Island Skink","Macgregor's Skink","Small-scaled Skink","Marbled Skink","Otago Skink","Striped Skink","Egg-laying Skink","Scree Skink","Whitaker's Skink","Brown Skink","Plateau Snake Skink","Persian Snake Skink","Limbless Skink","Sandfish","Street's Snake Skink","Gardiner's Burrowing Skink","","Nimba Snake-eyed Skink","Togo Skink","Carvalho's Mabuya","","","","Hildebrand's Skink","Anzahamaru Skink","","","Rothschild's Skink","","Bocourt's Eyelid Skink","Garnier's Giant Skink","Coal Skink","","Mountain Skink","","Duges' Skink","Mole Skink","Common Five-lined Skink","Gilbert's Skink","Southeastern Five-lined Skink","Japanese Skink","","Broad-headed Skink","Bermuda Skink","Oak Forest Skink","Many-lined Skink","Great Plains Skink","Guerreran Skink","Northern Prairie Skink","Western Skink","Sumichrast's Skink","Four-lined Skink","Common Green Tree Skink","Prehensile Green Tree Skink","Spinifex Snake-eyed Snake","Southern Grass Tussock Skink","","","","","","Beddome's Cat Skink","Czechuras Litter-skink","Gronovi's Dwarf Burrowing Skink","G�nther's Burrowing Skink","Legless Burrowing Skink","Kasner's Dwarf Burrowing Skink","Mozambique Dwarf Burrowing Skink","","Ground Skink","Mountainous Dwarf Skink","","Tsushima Ground Skink","","Eastern Skink ","Sandy Limbless Skink","Albert's Skink","Deplanche's Shiny Skink","Red-tailed Shiny Skink","Orange-bellied Burrowing Skink","","","Pointed-headed Sphenomorphus","","Zamboanga Sphenomorphus","Beyer's Sphenomorphus","","Sulu Sphenomorphus","","Elegant Forest Skink","Cox's Sphenomorphus","Crane's Skink","Cuming's Sphenomorphus","","Black-sided Sphenomorphuseng","Dussumier's Forest Skink","Banded Sphenomorphus","Jagor's Sphenomorphus","","","White-spotted Sphenomorphus","Leyte Sphenomorphus","Highland Sphenomorphus","Mindanao Sphenomorphus","","Palau Ground Skink","Steere's Sphenomorphus","Aurora Mountain Skink","Tanner's Skink","","","Culebra Skink","Greater Saint Croix Skink","Mona Skink","Monito Skink","Puerto Rican Skink","Lesser Virgin Islands Skink","Virgin Islands Bronze Skink","Greater Virgin Islands Skink","Adelaide Pigmy Blue-tongue Skink","Levant Skink","Orange-throated Skink","Gold-spotted Mabuya","Benson's Mabuya","","Boettger's Mabuya","","","Elegant Mabuya","Gravenhorst's Mabuya","Bronze Rock Skink","","Malagasy Mabuya","Five-lined Skink","","","Montane Speckled Skink","Seychelles Skink","Socotra mabuya","","","","Boulder Mabuya","Bridled Mabuya","","Wright's Skink","Blanchard's Helmet Skink","Western Crocodile Skink","Schmidt's Crocodile Skink","Davao Waterside Skink","Spiny Waterside Skink","Laotian Keeled Skink","Misamis Waterside Skink","","Partello's Waterside Skink","Aubrey's Whiptailed Skink","Northern Whiptailed Skink","Southern Whiptailed Skink","Cuvier's Legless Skink","Lomi's Blind Legless Skink","Two-striped Mabuya","","","","","","Hispaniolan Giant Gecko","Ilha Marac� Gecko","European Leaf-toed Gecko","Shieldhead Gecko","Grenadines Clawed Gecko","Haseman's Gecko","","","Abdel Kuri Rock Gecko","Carter's Semaphore Gecko","","","Wadi Kharrar Rock Gecko","Guichard's Rock Gecko","Blanford's Rock Gecko","Haggier Massif Rock Gecko","","","Birdhead Rock Gecko","","Blandford's Semaphore Gecko","Yemen Rock Gecko","","","Socotra Rock Gecko","","Atlas Day Gecko","","Banded Toed Gecko","","Guantanamo Coastal Gecko","Rough-banded Sphaero","Central Bahamas Sphaero","Hispaniolan Eyespot Sphaero","Dunn's Least Gecko","","Jamaican Forest Sphaero","Costa Rica Least Gecko","Caribbean Least Gecko","Grenadines Sphaero","Puerto Rican Upland Sphaero","Monito Gecko","","Puerto Rican Crescent Sphaero ","Reef Gecko","Pacific Least Gecko","Cuban Pepper Sphaero","Zapata Big-scaled Sphaero ","Bay Island Least Gecko","Altagracia Speckled Sphaero ","Double-collared Sphaero ","Boulenger's Least Gecko","","Hispaniolan Small-eared Sphaero ","Barahona Limestone Sphaero ","Cuban Broad-banded Sphaero","Windward Sphaero","Haitian Striped Sphaero","Przewalski's Wonder Gecko","Common Ameiva","Censky's Ameiva","Sombrero Ameiva","Pigmy Blue-tailed Ameiva","Inagua Ameiva","St. Croix Ameiva","","","Arizona Striped Whiptail","","Canyon Spotted Whiptail","","","Carmen Island Whiptail","","","","","","","","Blackbelly Racerunner","Gray-checkered Whiptail","","Chihuahuan Spotted Whiptail","Gila Spotted Whiptail","","Common Spotted Whiptail","","Little White Whiptail","Orange-throated Race-runner","Little Striped Whiptail","","Laredo Striped Whiptail","","San Pedro Martir Whiptail","","","","New Mexico Whiptail","Colorado Checkered Whiptail","Pai Striped Whiptail","","","","","Mexican Plateau Spotted Whiptail","Six-lined Racerunner","Sonoran Spotted Whiptail","Common Checkered Whiptail","Tiger Whiptail","Desert Grassland Whiptail","Plateau Striped Whiptail","","Saint Lucian Whiptail","Crocodile Tegu","Four-lined Ameiva","Rainbow Ameiva","Green Kentropyx","Argentine Black And White Tegu","Zarudnyi's Worm Lizard","Checkerboard Worm Lizard","","Cuban Khaki Trope ","Spotted Brown Trope ","","Rodrigues' Lava Lizard","Northern Curly-tailed Lizard","East Plana Curlytail ","Tiburon Curlytail","Hispaniolan Khaki Curlytail ","","Main Tree Iguana","","Austromendocino Tree Iguana","Hulse's Tree Iguana","Constanze's Tree Iguana","","Fitzgerald's Tree Iguana","Fitzinger's Tree Iguana","","Hellmich's Tree Iguana","","","","","Many-spotted Tree Iguana","","","","Braided Tree Iguana","","","Zodiac Tree Iguana","Stolzmann's Lizard","","Peru Pacific Iguana","High Mountain Lizard","","","Spiny Whorltail Iguana","Peracca's Whorltail Iguana","Western Leaf Lizard","","Haensch's Whorltail Iguana","","","","","","","","Striped Lava Lizard","Amazon Lava Lizard","Bismarck Sharp-Nosed Blind Snake","Gierra's Blind Snake","Interior Blind Snake","Pale-headed Blind Snake","Kimberley Shallow-soil Blind Snake","","Proximus Blind Snake","Beaked Blind Snake","Beaked Worm Snake","Cross' Beaked Snake","St. Thomas' Beaked Snake","Lake Tanganyika Blind Snake","L�opoldville Beaked Snake","","","White-headed Blind Snake","","Melanesia Blindsnake","Christmas Island Blind Snake","Lined Blind Snake","","Sand Worm Snake","","","","Haitian Pale-Lipped Blindsnake","Brown-backed Blind Snake","Costa Rica Worm Snake","","Diard's Blindsnake","Tiburon Peninsula Blindsnake","Puerto Rican Coastal Blindsnake","Jamaica Worm Snake","","","Mona Blind Snake","M�ller's Blind Snake","South India Worm Snake","Reticulate Worm Snake","Samar Blind Snake","Schmutz's Worm Snake","Island Worm Snake","Barahona Peninsula Blindsnake","Grenada Bank Blindsnake","","","","Palni Mountain Burrowing Snake","Two-lined Black Earth Snake","Beddome's Black Earth Snake","Indian Black Earth Snake","Travancore Hills Thorntail Snake","Nilgiri Burrowing Snake","Drummond-hay's Earth Snake","Schneider's Earth Snake","Salty Earth Snake","Travancore Earth Snake","Purple-red Earth Snake","Madura Earth Snake","Bicatenate Uropeltis","Cuvier's Sheildtail","Elliot's Earth Snake","Bombay Earth Snake","Ocellated Earth Snake","Phipson's Earth Snake","Indian Earth Snake","Red-lined Earth Snake","Red-spotted Earth Snake","Smith's Earth Snake","Woodmason's Earth Snake","Bengal Monitor Lizard","","Savannah Monitor","Finsch's Monitor","Calcutta Oval-grain Lizard","Glauert's Monitor","Mangrove Monitor","Peach-throated Monitor","Rennell Island Monitor","Komodo Dragon","Panay Monitor Lizard","","","Gray's Monitor","Northern Blunt-spined Monitor","Heath Monitor","Common Water Monitor","Banded Tree Monitor","Isabel Monitor","","Northern Copperhead","Cottonmouth","Taylor's Cantil","Barbour's Short-headed Viper","Usambara Eyelash Viper","Green Bush Viper","Jumping Pit Viper","Olmecan Pit Viper","Fea's Viper","Berg Adder","Plain Mountain Adder","Dwarf Puff Adder","Rhinoceros Viper","Namaqua Dwarf Adder","Yellow-blotched Palm Pit Viper","Guatemala Palm Pit Viper","Rowley's Palm Pit Viper","Inca Forest Pit Viper","Chocoan Toadheaded Pitviper","Alcatrazes Lancehead","Caatinga Lancehead","Golden Lancehead","Cerrado Lancehead","Jararacussu","Lojan Lancehead","Piraja's Lancehead","Malayan Pit Viper","Arabian Horned Viper","Sahara Sand Viper","Tzotzil Montane Pit Viper","Eastern Diamond-backed Rattlesnake","","","Western Diamond-backed Rattlesnake","","","Santa Catalina Island Rattlesnake","Sidewinder","Cascabel Rattlesnake","","","Timber Rattlesnake","","Rock Rattlesnake","","Speckled Rattlesnake","Black-tailed Rattlesnake","","Western Rattlesnake","","Twin-spotted Rattlesnake","","","Red Diamond Rattlesnake","Mohave Rattlesnake","","Tiger Rattlesnake","","","","Aruba Island Rattlesnake","Prairie Rattlesnake","New Mexican Ridge-nosed Rattlesnake","White-lipped Pitviper","Cardamom Mountains Green Pitviper","Naga-hill Pit Viper","Hon Son Pit Viper","Sunda Island Pitviper","Kanburi Pit Viper","Large-eyed Pit Viper","Mangrove Pit Viper","Ruby-eyed Green Pitviper","Desert Viper","Moorish Viper","Palestine Viper","Eastern Russell's Viper","","","White-bellied Carpet Viper","Oman Saw-scaled Viper","Egyptian Saw-scaled Viper","Mount Kinabalu Pit Viper","Rock Mamushi","Shedao Island Pit Viper","Tibetan Pit Viper","Sri Lanka Humpnose Viper ","Cyclades Blunt-nosed Viper","Barbour's Montane Pit Viper","","","Mountain Viper","Lebanon Viper","Mount Bulgar Viper","Latifi's Viper","Armenian Viper","Wagner's Viper","Ottoman Viper","","Malayan Brown Pit Viper","Taiwan Mountain Pitviper","Chinese Mountain Pit Viper","Tonkin Pit Viper","Zayuan Mountain Pit Viper","Hagen's Green Pit Viper","Kinabalu Green Pit Viper","Sumatra Pit Viper","Large-scaled Pit Viper","Sumatran Green Pit Viper","Pulau Tioman Pit Viper","Siamese Peninsula Pitviper","Cameron Highlands Pit Viper","Pope's Pit Viper","Sabah Pit Viper","Dunn's Hognose Viper","Hognosed Pit Viper","Yucat�n Hognose Viper","Horned Pit Viper","Jerdon's Pitviper","Mangshan Pit Viper","Brown Spotted Pitviper","Three Horned-scaled Pitviper","Trungkhanh Pit Viper","Szechwan Pit Viper","Field's Horned Viper","Perisan Horned Viper","Sao Paulo Lancehead","Massasauga","Pygmy Rattlesnake","Sumatran Palm Pit Viper","Bornean Palm Pit Viper","Brongersma's Pit Viper","Philippine Pit Viper","Taiwan Pit Viper","Common Bamboo Viper","Malabar Pit Viper","Javanese Pit Viper","Schultze's Pit Viper","Horseshoe Pit-viper","Wirot's Pit Viper","Bornean Keeled Green Pit Viper","Wagler's Keeled Green Pit Viper","Nose-horned Viper","","Asp Viper","","Adder","Darevsky's Viper","Caucasus Subalpine Viper","Iranian Mountain Steppe Viper","Alburzi Viper","Caucasian (Caucasus) Viper","Lataste's Viper","Lotiev's Viper","Magnificent Viper","Atlas Dwarf Viper","Orlov's Viper","Black Sea Viper","Seoane's Viper","Transcaucasian Long-nosed Viper","Meadow Viper","Gumprecht's Pit Viper","Stejneger's Pit Viper","Truong Son Pit Viper","Vogel's Pit Viper","Yunnan Pit Viper","Yellow-spotted Night Lizard","Gaige's Tropical Night Lizard","Lipetz's Tropical Night Lizard","Mayan Tropical Night Lizard","Cave Tropical Night Lizard","Japlan Tropical Night Lizard","Pajapan Tropical Night Lizard","Costa Rican Tropical Night Lizard","Smith's Tropical Night Lizard","Madrean Tropical Night Lizard","Arizona Night Lizard","Bezy's Night Lizard","","Sandstone Night Lizard","Granite Night Lizard","Island Night Lizard","","Desert Night Lizard","Bourret's Odd-scaled Snake","Formosa Odd-scaled Snake","Sichuan Odd-scaled Snake","Black Odd-scaled Snake","Rufous burrowing snake","Grey Burrowing Snake","Amami Takachiho Snake","Kloss's Rough Water Snake","Stolickza's Stream Snake","Rough-backed Litter Snake","Captain's Wood Snake","Striped Narrow-headed Snake","Hainan Sunbeam Snake","Asian Sunbeam Snake","","","","","","Pig-nosed Turtle","Big-Headed Pantanal Swamp Turtle","Chaco Side-necked Turtle","Brazilian Radiolated Swamp Turtle","Black Spine-necked Swamp Turtle","Roti Island Snake-necked Turtle","New Guinea Snake-necked Turtle","Narrow-breasted Snake-necked Turtle","Parker's Snake-necked Turtle","Pritchard's Snake-necked Turtle","Reimann's Snake-necked Turtle","Bell's Turtle","","New Guinea Spotted Turtle","Mary River Turtle","Jardine River Turtle","Brazilian Snake-necked Turtle","Dahl's Toad-headed Turtle","Hoge's Side-necked Turtle","Vanderhaege's Toad-headed Turtle","Zulia Toad Headed Sideneck","Western Swamp Tortoise","Fitzroy River Turtle","Red-footed Sideneck Turtle","Loggerhead","Green Turtle","Hawksbill Turtle","Kemp's Ridley","Olive Ridley","Central American Snapping Turtle","Snapping Turtle","Alligator Snapping Turtle","Central American River Turtle","Leatherback","Pacific Pond Turtle","Painted Turtle","Spotted Turtle","Blanding's Turtle","European Pond Turtle","Wood Turtle","Bog Turtle","Barbour's Map Turtle","Cagle's Map Turtle","Escambia Map Turtle","Yellow Blotched Sawback","Northern Map Turtle","Pascagoula Map Turtle","Black-knobbed Sawback","Ringed Sawback","Ouachita Map Turtle","Pearl River Map Turtle","Mississippi Map Turtle","Alabama Map Turtle","Texas Map Turtle","Diamondback Terrapin","Alabama Red-bellied Cooter","Suwannee Cooter","Rio Grande Cooter","Florida Red-bellied Cooter","Peninsula Cooter","Northern Redbelly Turtle","Texas Cooter","Eastern Box Turtle","Coahuila Box Turtle","Ornate Box Turtle","Carvalho's Slider","Haitian Slider","Big Bend Slider","Ornate Slider","Yellow-bellied Slider Turtle","Hispaniolan Slider Turtle","Cuatro Cienegas Slider","Cat Island Freshwater Turtle","Yaqui Slider","Batagur","Painted Batagur","Three-striped Roofed Turtle","Bengal Roof Turtle","Burmese Roofed Turtle","South Asian Box Turtle","Yellow-headed Box Turtle","Yellow-margined Box Turtle","Indochinese Box Turtle","McCord's Box Turtle","Jagged-shelled Turtle","Pan's Box Turtle","Chinese Three-striped Box Turtle","Yunnan Box Turtle","Zhou's Box Turtle","Asian Leaf Turtle","Black Pond Turtle","Ryukyu Black-breasted Leaf Turtle","Black-breasted Hill Turtle","Crowned River Turtle","Yellow-headed Temple Turtle","Arakan Forest Turtle","Giant Asian Pond Turtle","Spiny Terrapin","Sulawesi Forest Turtle","","Annam Leaf Turtle","","","Red-necked Pond Turtle","Reeves' Turtle","Chinese Stripe-necked Turtle","Three-keeled Land Tortoise","Indian Black Turtle","Bengal Eyed Terrapin","Indian Eyed Turtle","Malayan Flat-shelled Turtle","Bornean River Turtle","Brown Roofed Turtle","Assam Roofed Turtle","Indian Roofed Turtle","Indian Tent Turtle","Brown Land Turtle","Furrowed Wood Turtle","Black River Turtle","Large-nosed Wood Turtle","Mexican Spotted Terrapin","Beal's-eyed Turtle","Four-eyed Turtle","","Philippine Pond Turtle","Cane Turtle","Narrow-bridged Musk Turtle","Tabasco Mud Turtle","Narrow-bridged Mud Turtle","Arizona Mud Turtle","Striped Mud Turtle","Jalisco Mud Turtle","Creaser's Mud Turtle","Dunn's Mud Turtle","Yellow Mud Turtle","Herrera's Mud Turtle","Rough-footed Mud Turtle","Mexican Mud Turtle","Sonora Mud Turtle","Eastern Mud Turtle","Giant Musk Turtle","Mexican Giant Musk Turtle","Razor-backed Musk Turtle","Flattened Musk Turtle","Loggerhead Musk Turtle","Eastern Musk Turtle","Lake Turkana Hinged Terrapin","Yellowbelly Mud Turtle","Mashona Hinged Terrapin","East African Black Mud Turtle","Big-headed Turtle","Madagascar Big-headed Turtle","Big-headed Amazon River Turtle","Red-headed Amazon River Turtle","South American River Turtle","Magdalena River Turtle","Six-tubercled Amazon River Turtle","Yellow-spotted River Turtle","Radiated Tortoise","Ploughshare Tortoise","African Spurred Tortoise","Chaco Tortoise","Yellow-footed Tortoise","Galapagos Giant Tortoise","Indian Star Tortoise","Aldabra Giant Tortoise","Burmese Starred Tortoise","Desert Tortoise","Berlandier's Tortoise","Bolson Tortoise","Gopher Tortoise","Speckled Cape Tortoise","Nama Padloper","Elongated Tortoise","Celebes Tortoise","Travancore Tortoise","Home's Hinge-back Tortoise","Natal Hinge-backed Tortoise","Crevice Tortoise","Asian Giant Tortoise","Impressed Tortoise","Geometric Tortoise","Spider Tortoise","Flat-tailed Tortoise","Common Tortoise","Hermann's Tortoise","Afghan Tortoise","Egyptian Tortoise","Marginated Tortoise","Asiatic Softshell Turtle","Florida Softshell Turtle","Smooth Softshell Turtle","Spiny Softshell Turtle","Southeast Asian Narrow-headed Softshell Turtle","Indian Narrow-headed Softshell Turtle","Nubian Flapshell Turtle","Senegal Flapshell Turtle","Zambezi Flapshell Turtle","Malayan Soft-shelled Turtle","Indian Flap-shelled Turtle","Burmese Peacock Softshell","Indian Softshell Turtle","Indian Peacock Softshell Turtle","Leith's Softshell Turtle","Black Soft-shell Turtle","Wattle-necked Softshell Turtle","Asian Giant Softshell Turtle","Cantor's Giant Softshell","","Euphrates Softshell Turtle","Yangtze Giant Softshell Turtle"];
incrementProgress();
incrementProgress();
classdata[2].scinames=["Alligator mississippiensis","Alligator sinensis","Caiman crocodilus","Caiman latirostris","Caiman yacare","Melanosuchus niger","Paleosuchus palpebrosus","Paleosuchus trigonatus","Crocodylus acutus","Crocodylus intermedius","Crocodylus johnsoni","Crocodylus mindorensis","Crocodylus moreletii","Crocodylus niloticus","Crocodylus novaeguineae","Crocodylus palustris","Crocodylus porosus","Crocodylus rhombifer","Crocodylus siamensis","Osteolaemus tetraspis","Tomistoma schlegelii","Gavialis gangeticus","Sphenodon guntheri","Sphenodon punctatus","Acrochordus arafurae","Acrochordus granulatus","Acrochordus javanicus","Acanthocercus adramitanus","Acanthocercus annectens","Acanthocercus atricollis","Acanthocercus cyanogaster","Acanthocercus yemensis","Acanthosaura lepidogaster","Agama africana","Agama boensis","Agama boueti","Agama boulengeri","Agama cristata","Agama hispida","Agama impalearis","Agama insularis","Agama mwanzae","Agama parafricana","Agama spinosa","Agama tassiliensis","Agama weidholzi","Amphibolurus norrisi","Aphaniotis fusca","Bronchocela jubata","Bronchocela smaragdina","Calotes chincollium","Calotes ellioti","Calotes grandisquamis","Calotes liocephalus","Calotes nemoricola","Calotes rouxii","Ceratophora aspera","Ceratophora tennentii","Chlamydosaurus kingii","Cophotis dumbara","Ctenophorus maculosus","Ctenophorus nuchalis","Ctenophorus ornatus","Ctenophorus tjantjalka","Ctenophorus yinnietharra","Diporiphora albilabris","Diporiphora lalliae","Diporiphora linga","Draco bimaculatus","Draco cyanopterus","Draco dussumieri","Draco guentheri","Draco haematopogon","Draco jareckii","Draco lineatus","Draco maculatus","Draco mindanensis","Draco ornatus","Draco quadrasi","Draco reticulatus","Draco taeniopterus","Gonocephalus grandis","Hydrosaurus pustulatus","Hypsilurus binotatus","Hypsilurus longi","Hypsilurus macrolepis","Hypsilurus schoedei","Japalura fasciata","Japalura flaviceps","Japalura tricarinata","Japalura variegata","Lophognathus gilberti","Lyriocephalus scutatus","Otocryptis beddomii","Paralaudakia erythrogaster","Paralaudakia lehmanni","Paralaudakia microlepis","Phrynocephalus arabicus","Phrynocephalus axillaris","Phrynocephalus golubewii","Phrynocephalus helioscopus","Phrynocephalus horvathi","Phrynocephalus luteoguttatus","Phrynocephalus melanurus","Phrynocephalus ornatus","Phrynocephalus persicus","Phrynocephalus przewalskii","Phrynocephalus strauchi","Phrynocephalus theobaldi","Phrynocephalus versicolor","Phrynocephalus vlangalii","Pogona barbata","Psammophilus blanfordanus","Psammophilus dorsalis","Pseudocalotes brevipes","Rankinia diemensis","Saara loricata","Salea anamallayana","Salea horsfieldii","Sitana ponticeriana","Stellagama stellio","Trapelus agnetae","Trapelus boehmei","Trapelus flavimaculatus","Trapelus lessonae","Trapelus ruderatus","Trapelus savignii","Trapelus tournevillei","Tympanocryptis pinguicolla","Uromastyx aegyptia","Uromastyx alfredschmidti","Uromastyx benti","Uromastyx ocellata","Uromastyx ornata","Uromastyx shobraki","Uromastyx thomasi","Uromastyx yemenensis","Amphisbaena alba","Amphisbaena hyporissor","Amphisbaena polystegum","Amphisbaena pretrei","Amphisbaena ridleyi","Amphisbaena schmidti","Blanus cinereus","Blanus mettetali","Blanus strauchi","Blanus tingitanus","Cynisca bifrontalis","Cynisca feae","Cynisca gansi","Cynisca kigomensis","Cynisca leonina","Cynisca liberiensis","Cynisca nigeriensis","Cynisca oligopholis","Loveridgea ionidesii","Monopeltis anchietae","Zygaspis nigra","Abronia aurita","Abronia campbelli","Abronia chiszari","Abronia deppii","Abronia frosti","Abronia fuscolabialis","Abronia graminea","Abronia lythrochila","Abronia martindelcampoi","Abronia matudai","Abronia meledona","Abronia mixteca","Abronia montecristoi","Abronia oaxacae","Abronia salvadorensis","Abronia smithi","Abronia taeniata","Abronia vasconcelosii","Anguis cephalonnica","Barisia herrerae","Barisia imbricata","Barisia rudicollis","Celestus anelpistus","Celestus bivittatus","Celestus crusculus","Celestus curtissi","Celestus cyanochloris","Celestus enneagrammus","Celestus hylaius","Celestus legnotus","Celestus rozellae","Celestus scansorius","Celestus sepsoides","Celestus warreni","Diploglossus bilobatus","Diploglossus lessonae","Diploglossus montisserrati","Elgaria cedroensis","Elgaria coerulea","Elgaria kingii","Elgaria multicarinata","Elgaria nana","Elgaria panamintina","Elgaria paucicarinata","Elgaria velazquezi","Gerrhonotus infernalis","Gerrhonotus liocephalus","Gerrhonotus lugoi","Gerrhonotus ophiurus","Gerrhonotus parvus","Hyalosaurus koellikeri","Mesaspis gadovii","Mesaspis juarezi","Mesaspis monticola","Mesaspis moreletii","Mesaspis viridiflava","Ophisaurus attenuatus","Ophisaurus ceroni","Ophisaurus compressus","Ophisaurus hainanensis","Ophisaurus harti","Ophisaurus mimicus","Ophisaurus ventralis","Anniella geronimensis","Anniella pulchra","Liotyphlops argaleus","Liotyphlops beui","Anomochilus leonardi","Amblyodipsas concolor","Amblyodipsas microphthalma","Amblyodipsas ventrimaculata","Aparallactus capensis","Aparallactus lineatus","Aparallactus niger","Atractaspis andersonii","Atractaspis dahomeyensis","Atractaspis engaddensis","Atractaspis irregularis","Atractaspis microlepidota","Atractaspis micropholis","Homoroselaps dorsalis","Micrelaps bicoloratus","Micrelaps muelleri","Polemon acanthias","Polemon barthii","Polemon neuwiedi","Bipes biporus","Bipes canaliculatus","Bipes tridactylus","Acrantophis dumerili","Acrantophis madagascariensis","Candoia bibroni","Candoia superciliosa","Charina bottae","Corallus cropanii","Epicrates angulifer","Epicrates inornatus","Epicrates monensis","Epicrates subflavus","Eryx jayakari","Eunectes beniensis","Lichanura trivirgata","Sanzinia madagascariensis","Casarea dussumieri","Calamaria albiventer","Calamaria bicolor","Calamaria bitorques","Calamaria borneensis","Calamaria everetti","Calamaria gervaisi","Calamaria gimletti","Calamaria grabowskyi","Calamaria griswoldi","Calamaria hilleniusi","Calamaria ingeri","Calamaria leucogaster","Calamaria linnaei","Calamaria lovii","Calamaria lumbricoidea","Calamaria melanota","Calamaria modesta","Calamaria muelleri","Calamaria nuchalis","Calamaria pavimentata","Calamaria prakkei","Calamaria schlegeli","Calamaria schmidti","Calamaria septentrionalis","Calamaria suluensis","Calamaria sumatrana","Calamaria virgulata","Calamaria yunnanensis","Collorhabdium williamsoni","Macrocalamus chanardi","Macrocalamus gentingensis","Macrocalamus jasoni","Macrocalamus lateralis","Macrocalamus schulzi","Macrocalamus tweediei","Macrocalamus vogeli","Pseudorabdion albonuchalis","Pseudorabdion ater","Pseudorabdion collaris","Pseudorabdion eiselti","Pseudorabdion longiceps","Pseudorabdion mcnamarae","Pseudorabdion montanum","Pseudorabdion oxycephalum","Pseudorabdion saravacense","Pseudorabdion talonuran","Nephrurus deleani","Nephrurus levis","Nephrurus stellatus","Nephrurus wheeleri","Phyllurus gulbaru","Phyllurus ossa","Saltuarius cornutus","Uvidicolus sphyrurus","Archaius tigris","Bradypodion caffer","Bradypodion dracomontanum","Bradypodion nemorale","Bradypodion setaroi","Bradypodion taeniabronchum","Bradypodion thamnobates","Bradypodion transvaalense","Bradypodion ventrale","Brookesia ambreensis","Brookesia antakarana","Brookesia bekolosy","Brookesia betschi","Brookesia bonsi","Brookesia brygooi","Brookesia decaryi","Brookesia dentata","Brookesia ebenaui","Brookesia exarmata","Brookesia griveaudi","Brookesia karchei","Brookesia lineata","Brookesia lolontany","Brookesia minima","Brookesia nasus","Brookesia perarmata","Brookesia peyrierasi","Brookesia ramanantsoai","Brookesia stumpffi","Brookesia superciliaris","Brookesia therezieni","Brookesia thieli","Brookesia tuberculata","Brookesia vadoni","Brookesia valerieae","Calumma amber","Calumma ambreense","Calumma andringitraense","Calumma boettgeri","Calumma brevicorne","Calumma capuroni","Calumma crypticum","Calumma cucullatum","Calumma furcifer","Calumma gallus","Calumma gastrotaenia","Calumma glawi","Calumma globifer","Calumma guibei","Calumma guillaumeti","Calumma hafahafa","Calumma hilleniusi","Calumma jejy","Calumma malthe","Calumma marojezense","Calumma nasutum","Calumma oshaughnessyi","Calumma parsonii","Calumma peltierorum","Calumma peyrierasi","Calumma tarzan","Calumma tsaratananense","Calumma tsycorne","Calumma vencesi","Chamaeleo arabicus","Chamaeleo calyptratus","Chamaeleo chamaeleon","Chamaeleo dilepis","Chamaeleo monachus","Chamaeleo namaquensis","Chamaeleo senegalensis","Furcifer angeli","Furcifer antimena","Furcifer balteatus","Furcifer belalandaensis","Furcifer bifidus","Furcifer campani","Furcifer cephalolepis","Furcifer labordi","Furcifer lateralis","Furcifer minor","Furcifer nicosiai","Furcifer oustaleti","Furcifer pardalis","Furcifer petteri","Furcifer polleni","Furcifer rhinoceratus","Furcifer timoni","Furcifer verrucosus","Furcifer willsii","Rhampholeon marshalli","Rhampholeon spectrum","Rhampholeon spinosus","Trioceros chapini","Trioceros cristatus","Trioceros feae","Trioceros hoehnelii","Trioceros incornutus","Trioceros ituriensis","Trioceros laterispinis","Trioceros montium","Ahaetulla dispar","Ahaetulla fasciolata","Ahaetulla fronticincta","Ahaetulla mycterizans","Ahaetulla perroteti","Ahaetulla prasina","Ahaetulla pulverulenta","Arizona elegans","Arizona pacata","Bamanophis dorri","Bogertophis rosaliae","Bogertophis subocularis","Boiga angulata","Boiga bourreti","Boiga cynodon","Boiga drapiezii","Boiga forsteni","Boiga guangxiensis","Boiga jaspidea","Boiga kraepelini","Boiga nigriceps","Boiga philippina","Boiga saengsomi","Boiga schultzei","Boiga trigonata","Boiga walli","Cemophora coccinea","Chilomeniscus savagei","Chilomeniscus stramineus","Chionactis occipitalis","Chionactis palarostris","Chironius vincenti","Chrysopelea pelias","Coelognathus flavolineatus","Coluber andreanus","Coluber constrictor","Conopsis amphisticha","Conopsis biserialis","Conopsis lineata","Conopsis megalodon","Conopsis nasus","Coronella brachyura","Coronella girondica","Cyclocorus lineatus","Cyclocorus nuchalis","Cyclophiops multicinctus","Dasypeltis fasciata","Dasypeltis latericia","Dasypeltis parascabra","Dasypeltis scabra","Dendrelaphis ashoki","Dendrelaphis bifrenalis","Dendrelaphis calligastra","Dendrelaphis cyanochloris","Dendrelaphis formosus","Dendrelaphis girii","Dendrelaphis gorei","Dendrelaphis grandoculis","Dendrelaphis haasi","Dendrelaphis kopsteini","Dendrelaphis lorentzi","Dendrelaphis ngansonensis","Dendrelaphis punctulatus","Dendrelaphis salomonis","Dendrelaphis striatus","Dendrelaphis subocularis","Dendrelaphis walli","Dendrophidion paucicarinatum","Dendrophidion vinitor","Dipsadoboa brevirostris","Dolichophis jugularis","Dolichophis schmidti","Drymarchon caudomaculatus","Drymarchon couperi","Drymarchon melanurus","Drymobius chloroticus","Drymobius melanotropis","Drymobius rhombifer","Dryocalamus davisonii","Dryocalamus philippinus","Dryocalamus subannulatus","Dryocalamus tristrigatus","Dryophiops philippina","Dryophiops rubescens","Eirenis aurolineatus","Eirenis barani","Eirenis collaris","Eirenis coronella","Eirenis coronelloides","Eirenis decemlineatus","Eirenis eiselti","Eirenis levantinus","Eirenis lineomaculatus","Eirenis mcmahoni","Eirenis medus","Eirenis modestus","Eirenis punctatolineatus","Eirenis rothii","Elachistodon westermanni","Elaphe bimaculata","Elaphe quatuorlineata","Elapoidis fusca","Euprepiophis mandarinus","Euprepiophis perlacea","Ficimia hardyi","Ficimia publia","Ficimia streckeri","Gongylosoma baliodeirus","Gongylosoma longicauda","Gongylosoma mukutense","Gongylosoma scripta","Gonyophis margaritatus","Gonyosoma oxycephalum","Gyalopion canum","Gyalopion quadrangulare","Hemerophis socotrae","Hemorrhois algirus","Hemorrhois hippocrepis","Hierophis cypriensis","Hierophis gemonensis","Hierophis viridiflavus","Lampropeltis alterna","Lampropeltis calligaster","Lampropeltis getula","Lampropeltis herrerae","Lampropeltis mexicana","Lampropeltis pyromelana","Lampropeltis ruthveni","Lampropeltis zonata","Leptodrymus pulcherrimus","Leptophis diplotropis","Leptophis mexicanus","Leptophis modestus","Leptophis nebulosus","Lepturophis albofuscus","Liochlorophis vernalis","Liopeltis frenatus","Liopeltis herminae","Liopeltis philippina","Liopeltis stolickzae","Liopeltis tricolor","Lycodon alcalai","Lycodon bibonius","Lycodon butleri","Lycodon capucinus","Lycodon chrysoprateros","Lycodon dumerili","Lycodon effraenis","Lycodon flavomaculatus","Lycodon flavozonatus","Lycodon futsingensis","Lycodon jara","Lycodon laoensis","Lycodon meridionale","Lycodon muelleri","Lycodon ophiophagus","Lycodon osmanhilli","Lycodon paucifasciatus","Lycodon subcinctus","Lycodon travancoricus","Lycodon zawi","Lytorhynchus diadema","Lytorhynchus maynardi","Lytorhynchus ridgewayi","Macroprotodon brevis","Macroprotodon cucullatus","Maculophis bella","Masticophis anthonyi","Masticophis aurigulus","Masticophis bilineatus","Masticophis flagellum","Masticophis lateralis","Masticophis schotti","Masticophis slevini","Masticophis taeniatus","Mastigodryas alternatus","Mastigodryas dorsalis","Mastigodryas heathii","Mastigodryas melanolomus","Meizodon plumbiceps","Oligodon affinis","Oligodon ancorus","Oligodon annulifer","Oligodon barroni","Oligodon bitorquatus","Oligodon booliati","Oligodon brevicauda","Oligodon chinensis","Oligodon cinereus","Oligodon cruentatus","Oligodon cyclurus","Oligodon deuvei","Oligodon eberhardti","Oligodon everetti","Oligodon fasciolatus","Oligodon forbesi","Oligodon inornatus","Oligodon joynsoni","Oligodon juglandifer","Oligodon lacroixi","Oligodon lungshenensis","Oligodon maculatus","Oligodon mcdougalli","Oligodon meyerinkii","Oligodon modestum","Oligodon mouhoti","Oligodon ocellatus","Oligodon octolineatus","Oligodon ornatus","Oligodon perkinsi","Oligodon planiceps","Oligodon pseudotaeniatus","Oligodon pulcherrimus","Oligodon purpurascens","Oligodon signatus","Oligodon splendidus","Oligodon sublineatus","Oligodon taeniatus","Oligodon taeniolatus","Oligodon theobaldi","Oligodon trilineatus","Oligodon unicolor","Oligodon venustus","Oocatochus rufodorsatus","Opheodrys aestivus","Oreocalamus hanitschi","Orthriophis moellendorfi","Oxybelis wilsoni","Pantherophis bairdi","Pantherophis emoryi","Pantherophis gloydi","Pantherophis guttatus","Pantherophis obsoletus","Pantherophis vulpinus","Philothamnus irregularis","Phyllorhynchus browni","Phyllorhynchus decurtatus","Pituophis catenifer","Pituophis deppei","Pituophis insulanus","Pituophis lineaticollis","Pituophis melanoleucus","Pituophis ruthveni","Pituophis vertebralis","Platyceps collaris","Platyceps elegantissimus","Platyceps florulentus","Platyceps najadum","Platyceps rogersi","Platyceps sinai","Platyceps variabilis","Pseudelaphe flavirufa","Pseudoficimia frontalis","Pseustes poecilonotus","Ptyas carinata","Ptyas fusca","Ptyas luzonensis","Rhabdops olivaceus","Rhadinophis prasina","Rhinechis scalaris","Rhinobothryum bovallii","Rhinocheilus lecontei","Rhynchocalamus melanocephalus","Rhynchophis boulengeri","Salvadora bairdi","Salvadora grahamiae","Salvadora hexalepis","Salvadora intermedia","Salvadora lemniscata","Salvadora mexicana","Scaphiodontophis annulatus","Senticolis triaspis","Sibynophis bivittatus","Sibynophis collaris","Sibynophis geminatus","Sibynophis melanocephalus","Sonora aemula","Sonora aequalis","Sonora michoacanensis","Sonora mutabilis","Sonora semiannulata","Spalerosophis microlepis","Stegonotus borneensis","Stegonotus heterurus","Stegonotus muelleri","Stenorrhina freminvillei","Stilosoma extenuatum","Symphimus leucostomus","Symphimus mayae","Tantilla armillata","Tantilla atriceps","Tantilla bocourti","Tantilla boipiranga","Tantilla brevicauda","Tantilla calamarina","Tantilla coronadoi","Tantilla coronata","Tantilla cucullata","Tantilla cuniculator","Tantilla deppei","Tantilla flavilineata","Tantilla gracilis","Tantilla hobartsmithi","Tantilla impensa","Tantilla lempira","Tantilla moesta","Tantilla nigriceps","Tantilla oolitica","Tantilla planiceps","Tantilla psittaca","Tantilla relicta","Tantilla rubra","Tantilla ruficeps","Tantilla schistosa","Tantilla shawi","Tantilla taeniata","Tantilla vermiformis","Tantilla wilcoxi","Tantilla yaquia","Tantillita brevissima","Tantillita canula","Tantillita lintoni","Telescopus fallax","Telescopus hoogstraali","Telescopus nigriceps","Telescopus rhinopoma","Telescopus tessellatus","Telescopus variegatus","Tetralepis fruhstorferi","Thelotornis capensis","Thrasops occidentalis","Trachischium guentheri","Trimorphodon quadruplex","Trimorphodon tau","Trimorphodon vilkinsonii","Xenelaphis ellipsifer","Xenelaphis hexagonotus","Zamenis hohenackeri","Zamenis longissimus","Zamenis situla","Cordylus aridus","Cordylus cataphractus","Cordylus giganteus","Cordylus langi","Cordylus lawrenci","Cordylus mclachlani","Cordylus meculae","Cordylus nebulosus","Cordylus rivae","Cordylus spinosus","Cordylus tasmani","Platysaurus imperator","Platysaurus intermedius","Platysaurus pungweensis","Platysaurus relictus","Platysaurus torquatus","Basiliscus plumifrons","Corytophanes hernandesii","Corytophanes percarinatus","Laemanctus longipes","Laemanctus serratus","Crotaphytus antiquus","Crotaphytus bicinctores","Crotaphytus collaris","Crotaphytus dickersonae","Crotaphytus grismeri","Crotaphytus insularis","Crotaphytus nebrius","Crotaphytus reticulatus","Crotaphytus vestigium","Gambelia copeii","Gambelia sila","Gambelia wislizenii","Cylindrophis ruffus","Anolis adleri","Anolis ahli","Anolis allogus","Anolis altae","Anolis alumina","Anolis amplisquamosus","Anolis anisolepis","Anolis armouri","Anolis barkeri","Anolis bimaculatus","Anolis breedlovei","Anolis carolinensis","Anolis carpenteri","Anolis centralis","Anolis clivicola","Anolis compressicauda","Anolis cuprinus","Anolis cusuco","Anolis dunni","Anolis eulaemus","Anolis festae","Anolis fitchi","Anolis fraseri","Anolis gadovi","Anolis gemmosus","Anolis grahami","Anolis granuliceps","Anolis guafe","Anolis haetianus","Anolis hobartsmithi","Anolis jacare","Anolis juangundlachi","Anolis koopmani","Anolis lineatus","Anolis liogaster","Anolis lionotus","Anolis longiceps","Anolis loveridgei","Anolis lynchi","Anolis macrinii","Anolis maculigula","Anolis marron","Anolis megapholidotus","Anolis microlepidotus","Anolis monticola","Anolis muralla","Anolis naufragus","Anolis nebuloides","Anolis nebulosus","Anolis nubilis","Anolis occultus","Anolis oculatus","Anolis olssoni","Anolis omiltemanus","Anolis pachypus","Anolis parvicirculatus","Anolis pinchoti","Anolis pogus","Anolis proboscis","Anolis pygmaeus","Anolis quercorum","Anolis roosevelti","Anolis ruizii","Anolis schmidti","Anolis semilineatus","Anolis spectrum","Anolis strahmi","Anolis taylori","Anolis valencienni","Anolis ventrimaculatus","Anolis whitemani","Anelytropsis papillosus","Dibamus novaeguineae","Bavayia exsuccida","Bavayia geitaina","Bavayia goroensis","Bavayia madjo","Bavayia ornata","Bavayia pulchella","Bavayia robusta","Bavayia septuiclavis","Diplodactylus granariensis","Diplodactylus ornatus","Eurydactylodes agricolae","Eurydactylodes occidentalis","Eurydactylodes symmetricus","Eurydactylodes vieillardi","Hoplodactylus chrysosireticus","Hoplodactylus duvauceli","Hoplodactylus kahutarae","Hoplodactylus rakiurae","Hoplodactylus stephensi","Naultinus gemmeus","Naultinus rudis","Rhacodactylus auriculatus","Rhacodactylus chahoua","Rhacodactylus ciliatus","Rhacodactylus leachianus","Rhacodactylus sarasinorum","Rhacodactylus trachyrhynchus","Strophurus ciliaris","Strophurus jeanae","Strophurus michaelseni","Strophurus taenicauda","Adelphicos daryi","Adelphicos ibarrorum","Adelphicos nigrilatum","Adelphicos quadrivirgatum","Adelphicos sargii","Adelphicos visoninum","Alsophis antiguae","Alsophis rijgersmaei","Alsophis rufiventris","Alsophis sanctonum","Amastridium sapperi","Amastridium veliferum","Apostolepis multicincta","Apostolepis phillipsae","Arrhyton taeniatum","Atractus albuquerquei","Atractus bocourti","Atractus crassicaudatus","Atractus duidensis","Atractus limitaneus","Atractus major","Atractus modestus","Atractus nicefori","Atractus poeppigi","Atractus roulei","Atractus snethlageae","Calamodontophis paucidens","Calamodontophis ronaldoi","Caraiba andreae","Carphophis amoenus","Carphophis vermis","Chapinophis xanthocheilus","Chersodromus liebmanni","Chersodromus rubriventris","Clelia scytalina","Coniophanes dromiciformis","Coniophanes imperialis","Coniophanes meridanus","Coniophanes piceivittis","Coniophanes quinquevittatus","Coniophanes schmidti","Conophis lineatus","Conophis vittatus","Contia tenuis","Crisantophis nevermanni","Diadophis punctatus","Dipsas articulata","Dipsas bicolor","Dipsas brevifacies","Dipsas catesbyi","Dipsas chaparensis","Dipsas gaigae","Dipsas nicholsi","Dipsas pavonina","Dipsas peruana","Dipsas viguieri","Echinanthera undulata","Enulius roatenensis","Eridiphas slevini","Erythrolamprus bizonus","Erythrolamprus mimus","Farancia abacura","Farancia erytrogramma","Geophis anocularis","Geophis brachycephalus","Geophis cancellatus","Geophis carinosus","Geophis damiani","Geophis dubius","Geophis duellmani","Geophis dugesii","Geophis godmani","Geophis immaculatus","Geophis juliai","Geophis laticinctus","Geophis mutitorques","Geophis nasalis","Geophis omiltemanus","Geophis rhodogaster","Geophis ruthveni","Geophis semidoliatus","Geophis talamancae","Geophis tectus","Geophis zeledoni","Helicops scalaris","Helicops trivittatus","Heterodon nasicus","Heterodon platirhinos","Heterodon simus","Hydromorphus concolor","Hydrops caesurus","Hydrops martii","Hypsiglena torquata","Hypsirhynchus ater","Imantodes inornatus","Imantodes tennuissimus","Leptodeira frenata","Leptodeira maculata","Leptodeira nigrofasciata","Leptodeira punctata","Leptodeira rhombifera","Leptodeira rubricata","Leptodeira splendida","Leptodeira uribei","Liophis atraventer","Liophis ceii","Liophis cursor","Liophis jaegeri","Liophis janaleeae","Liophis longiventris","Liophis melanotus","Liophis ornatus","Liophis perfuscus","Liophis viridis","Liophis williamsi","Lygophis dilepis","Lygophis elegantissimus","Lystrophis histricus","Lystrophis semicinctus","Manolepis putnami","Mussurana bicolor","Ninia diademata","Ninia espinali","Ninia maculata","Ninia pavimentata","Ninia sebae","Nothopsis rugosus","Omoadiphas cannula","Omoadiphas texiguatensis","Oxyrhopus leucomelas","Oxyrhopus melanogenys","Oxyrhopus occipitalis","Phalotris lemniscatus","Phalotris tricolor","Philodryas argenteus","Philodryas livida","Philodryas psammophidea","Philodryas tachymenoides","Philodryas varia","Pliocercus bicolor","Pliocercus elapoides","Pliocercus euryzonus","Pseudalsophis elegans","Pseudoboa haasi","Pseudoeryx plicatilis","Pseudoleptodeira latifasciata","Psomophis obtusus","Rachidelus brazili","Rhadinaea calligaster","Rhadinaea flavilata","Rhadinaea fulvivittis","Rhadinaea hesperia","Rhadinaea laureata","Rhadinaea marcellae","Rhadinaea montana","Rhadinaea sargenti","Rhadinaea stadelmani","Rhadinaea taeniata","Rhadinaea vermiculaticeps","Rhadinella anachoreta","Rhadinella godmani","Rhadinella kinkelini","Rhadinella lachrymans","Rhadinella schistosa","Rhadinella serperaster","Rhadinella tolpanorum","Sibon annulatus","Sibon anthracops","Sibon dimidiatus","Sibon fischeri","Sibon sanniolus","Sibynomorphus ventrimaculatus","Siphlophis compressus","Siphlophis leucocephalus","Siphlophis pulcher","Siphlophis worontzowi","Tachymenis chilensis","Taeniophallus affinis","Tantalophis discolor","Thamnodynastes corocoroensis","Thamnodynastes marahuaquensis","Thamnodynastes pallidus","Thamnodynastes strigatus","Thermophis baileyi","Trimetopon gracile","Trimetopon pliolepis","Trimetopon simile","Trimetopon slevini","Trimetopon viquezi","Tropidodipsas annulifera","Tropidodipsas fischeri","Tropidodipsas philippii","Tropidodipsas sartorii","Tropidodryas serra","Urotheca guentheri","Xenodon neuwiedii","Xenopholis scalaris","Acalyptophis peronii","Acanthophis rugosus","Aipysurus apraefrontalis","Aipysurus duboisii","Aipysurus eydouxii","Aipysurus foliosquama","Aipysurus fuscus","Aipysurus laevis","Aspidomorphus muelleri","Astrotia stokesii","Austrelaps labialis","Bungarus andamanensis","Bungarus candidus","Bungarus fasciatus","Bungarus flaviceps","Bungarus magnimaculatus","Bungarus multicinctus","Bungarus slowinskii","Bungarus wanghaotingi","Calliophis bibroni","Calliophis bivirgata","Calliophis intestinalis","Calliophis maculiceps","Calliophis nigrescens","Cryptophis pallidiceps","Dendroaspis polylepis","Dendroaspis viridis","Denisonia maculata","Drysdalia mastersii","Drysdalia rhodogaster","Echiopsis atriceps","Echiopsis curta","Elapognathus minor","Elapsoidea chelazzii","Elapsoidea nigra","Elapsoidea trapei","Emydocephalus annulatus","Emydocephalus ijimae","Enhydrina schistosa","Ephalophis greyae","Furina dunmalli","Hemachatus haemachatus","Hemibungarus calligaster","Hoplocephalus bungaroides","Hoplocephalus stephensii","Hydrelaps darwiniensis","Hydrophis atriceps","Hydrophis brookii","Hydrophis caerulescens","Hydrophis coggeri","Hydrophis cyanocinctus","Hydrophis elegans","Hydrophis fasciatus","Hydrophis gracilis","Hydrophis kingii","Hydrophis lamberti","Hydrophis lapemoides","Hydrophis macdowelli","Hydrophis major","Hydrophis obscurus","Hydrophis ocellatus","Hydrophis ornatus","Hydrophis pacificus","Hydrophis semperi","Hydrophis spiralis","Kerilia jerdoni","Lapemis curtus","Laticauda colubrina","Laticauda crockeri","Laticauda frontalis","Laticauda guineai","Laticauda laticaudata","Laticauda saintgironsi","Laticauda schistorhynchus","Laticauda semifasciata","Loveridgelaps elapoides","Micruroides euryxanthus","Micrurus alleni","Micrurus bernadi","Micrurus browni","Micrurus diastema","Micrurus dissoleucus","Micrurus distans","Micrurus elegans","Micrurus ephippifer","Micrurus fulvius","Micrurus hippocrepis","Micrurus isozonus","Micrurus langsdorffi","Micrurus laticollaris","Micrurus latifasciatus","Micrurus limbatus","Micrurus mosquitensis","Micrurus multifasciatus","Micrurus paraensis","Micrurus proximans","Micrurus pyrrhocryptus","Micrurus ruatanus","Micrurus stewarti","Micrurus stuarti","Micrurus tener","Naja arabica","Naja kaouthia","Naja katiensis","Naja mandalayensis","Naja philippinensis","Naja samarensis","Naja senegalensis","Naja siamensis","Naja sputatrix","Naja sumatrana","Notechis scutatus","Ogmodon vitianus","Ophiophagus hannah","Pelamis platura","Pseudohaje nigra","Rhinoplocephalus bicolor","Salomonelaps par","Simoselaps australis","Simoselaps calonotus","Simoselaps incinctus","Simoselaps littoralis","Sinomicrurus japonicus","Sinomicrurus kelloggi","Sinomicrurus sauteri","Suta flagellum","Suta nigriceps","Thalassophina viperina","Vermicella snelli","Walterinnesia aegyptia","Coleonyx brevis","Coleonyx elegans","Coleonyx fasciatus","Coleonyx gypsicolus","Coleonyx mitratus","Coleonyx reticulatus","Coleonyx switaki","Coleonyx variegatus","Eublepharis fuscus","Eublepharis hardwickii","Eublepharis turcmenicus","Goniurosaurus kuroiwae","Hemitheconyx caudicinctus","Afroedura hawequensis","Afroedura nivaria","Agamura persica","Ailuronyx seychellensis","Ailuronyx tachyscopaeus","Ailuronyx trachygaster","Alsophylax pipiens","Alsophylax przewalskii","Altiphylax stoliczkai","Altiphylax tokobajevi","Asiocolotes depressus","Asiocolotes levitoni","Blaesodactylus antongilensis","Blaesodactylus boivini","Blaesodactylus sakalava","Bunopus spatalurus","Bunopus tuberculatus","Calodactylodes aureus","Chondrodactylus angulifer","Christinus guentheri","Cnemaspis anaikattiensis","Cnemaspis goaensis","Cnemaspis gracilis","Cnemaspis heteropholis","Cnemaspis indica","Cnemaspis indraneildasii","Cnemaspis jerdonii","Cnemaspis kandiana","Cnemaspis koehleri","Cnemaspis limi","Cnemaspis mysoriensis","Cnemaspis nairi","Cnemaspis occidentalis","Cnemaspis ornata","Cnemaspis otai","Cnemaspis podihuna","Cnemaspis sisparensis","Cnemaspis wynadensis","Cnemaspis yercaudensis","Cyrtodactylus adleri","Cyrtodactylus agusanensis","Cyrtodactylus annulatus","Cyrtodactylus biordinis","Cyrtodactylus cavernicolus","Cyrtodactylus gubernatoris","Cyrtodactylus louisiadensis","Cyrtodactylus nebulosus","Cyrtodactylus philippinicus","Cyrtodactylus redimiculus","Cyrtodactylus salomonensis","Cyrtopodion agamuroides","Cyrtopodion brevipes","Cyrtopodion fortmunroi","Cyrtopodion kirmanense","Cyrtopodion kohsulaimanai","Cyrtopodion potoharense","Cyrtopodion scabrum","Cyrtopodion sistanensis","Dierogekko inexpectatus","Dierogekko insularis","Dierogekko kaalaensis","Dierogekko koniambo","Dierogekko nehoueensis","Dierogekko poumensis","Dierogekko thomaswhitei","Dierogekko validiclavis","Dixonius vietnamensis","Ebenavia inunguis","Ebenavia maintimainty","Elasmodactylus tetensis","Elasmodactylus tuberculosus","Geckoella albofasciatus","Geckoella collegalensis","Geckoella deccanensis","Geckoella jeyporensis","Geckoella triedrus","Geckolepis maculata","Geckolepis typica","Gehyra australis","Gehyra barea","Gehyra borroloola","Gehyra brevipalmata","Gehyra dubia","Gehyra pilbara","Gekko athymus","Gekko chinensis","Gekko ernstkelleri","Gekko gigante","Gekko hokouensis","Gekko mindorensis","Gekko palawanensis","Gekko porosus","Gekko romblon","Gekko smithii","Gekko swinhonis","Gekko tawaensis","Goggia essexi","Goggia hexapora","Goggia microlepidota","Hemidactylus aaronbaueri","Hemidactylus albofasciatus","Hemidactylus anamallensis","Hemidactylus beninensis","Hemidactylus boavistensis","Hemidactylus bouvieri","Hemidactylus depressus","Hemidactylus dracaenacolus","Hemidactylus forbesii","Hemidactylus foudaii","Hemidactylus frenatus","Hemidactylus giganteus","Hemidactylus gracilis","Hemidactylus graniticolus","Hemidactylus granti","Hemidactylus gujaratensis","Hemidactylus homoeolepis","Hemidactylus imbricatus","Hemidactylus inintellectus","Hemidactylus kundaensis","Hemidactylus maculatus","Hemidactylus matschiei","Hemidactylus mercatorius","Hemidactylus mindiae","Hemidactylus oxyrhinus","Hemidactylus palaichthus","Hemidactylus prashadi","Hemidactylus pumilio","Hemidactylus reticulatus","Hemidactylus sataraensis","Hemidactylus treutleri","Hemidactylus turcicus","Hemidactylus yerburyii","Hemiphyllodactylus aurantiacus","Hemiphyllodactylus ganoklonis","Homopholis mulleri","Homopholis walbergii","Lepidodactylus aureolineatus","Lepidodactylus balioburius","Lepidodactylus christiani","Lepidodactylus euaensis","Lepidodactylus gardineri","Lepidodactylus guppyi","Lepidodactylus herrei","Lepidodactylus listeri","Lepidodactylus manni","Lepidodactylus moestus","Lepidodactylus planicaudus","Lepidodactylus vanuatuensis","Lucasium byrnei","Luperosaurus joloensis","Luperosaurus macgregori","Lygodactylus arnoulti","Lygodactylus bivittis","Lygodactylus blancae","Lygodactylus blanci","Lygodactylus chobiensis","Lygodactylus expectatus","Lygodactylus gravis","Lygodactylus guibei","Lygodactylus heterurus","Lygodactylus intermedius","Lygodactylus klemmeri","Lygodactylus madagascariensis","Lygodactylus methueni","Lygodactylus miops","Lygodactylus mirabilis","Lygodactylus montanus","Lygodactylus nigropunctatus","Lygodactylus ornatus","Lygodactylus picturatus","Lygodactylus pictus","Lygodactylus rarus","Lygodactylus roavolana","Lygodactylus tolampyae","Lygodactylus tuberosus","Lygodactylus verticillatus","Lygodactylus williamsi","Matoatoa brevipes","Mediodactylus amictopholis","Mediodactylus heterocercus","Mediodactylus kotschyi","Mediodactylus russowii","Mediodactylus spinicauda","Mediodactylus walli","Nactus coindemirensis","Nactus multicarinatus","Nactus pelagicus","Nactus serpensinsula","Oedodera marmorata","Pachydactylus fasciatus","Pachydactylus labialis","Pachydactylus maculatus","Pachydactylus tsodiloensis","Pachydactylus vansoni","Paragehyra gabriellae","Paragehyra petiti","Paroedura androyensis","Paroedura bastardi","Paroedura gracilis","Paroedura homalorhina","Paroedura ibityensis","Paroedura karstophila","Paroedura lohatsara","Paroedura maingoka","Paroedura masobe","Paroedura oviceps","Paroedura picta","Paroedura sanctijohannis","Paroedura stumpffi","Paroedura tanjaka","Paroedura vahiny","Paroedura vazimba","Perochirus ateles","Perochirus scutellatus","Phelsuma abbotti","Phelsuma andamanense","Phelsuma antanosy","Phelsuma astriata","Phelsuma barbouri","Phelsuma berghofi","Phelsuma breviceps","Phelsuma cepediana","Phelsuma comorensis","Phelsuma dorsivittata","Phelsuma flavigularis","Phelsuma grandis","Phelsuma guentheri","Phelsuma guttata","Phelsuma hielscheri","Phelsuma klemmeri","Phelsuma kochi","Phelsuma laticauda","Phelsuma lineata","Phelsuma madagascariensis","Phelsuma malamakibo","Phelsuma masohoala","Phelsuma modesta","Phelsuma mutabilis","Phelsuma nigristriata","Phelsuma parva","Phelsuma pasteuri","Phelsuma pronki","Phelsuma pusilla","Phelsuma quadriocellata","Phelsuma ravenala","Phelsuma robertmertensi","Phelsuma roesleri","Phelsuma seippi","Phelsuma serraticauda","Phelsuma standingi","Phelsuma sundbergi","Phelsuma vanheygeni","Phelsuma v-nigra","Pseudoceramodactylus khobarensis","Pseudogekko brevipes","Pseudogekko compressicorpus","Pseudogekko labialis","Pseudogekko smaragdinus","Ptenopus kochi","Ptychozoon intermedium","Ptychozoon lionotum","Rhinogecko misonnei","Rhoptropella ocellata","Stenodactylus affinis","Stenodactylus arabicus","Stenodactylus doriae","Stenodactylus grandiceps","Stenodactylus pulcher","Stenodactylus slevini","Stenodactylus yemenensis","Tenuidactylus caspius","Tenuidactylus elongatus","Tropiocolotes latifi","Tropiocolotes nattereri","Tropiocolotes scortecci","Tropiocolotes tripolitanus","Urocotyledon inexpectata","Uroplatus alluaudi","Uroplatus ebenaui","Uroplatus fimbriatus","Uroplatus finiavana","Uroplatus giganteus","Uroplatus guentheri","Uroplatus henkeli","Uroplatus lineatus","Uroplatus malahelo","Uroplatus malama","Uroplatus phantasticus","Uroplatus pietschmanni","Uroplatus sameiti","Uroplatus sikorae","Cordylosaurus subtessellatus","Gerrhosaurus skoogi","Gerrhosaurus typicus","Tetradactylus africanus","Tetradactylus breyeri","Tracheloptychus madagascariensis","Tracheloptychus petersi","Zonosaurus aeneus","Zonosaurus anelanelany","Zonosaurus bemaraha","Zonosaurus boettgeri","Zonosaurus brygooi","Zonosaurus haraldmeieri","Zonosaurus karsteni","Zonosaurus laticaudatus","Zonosaurus madagascariensis","Zonosaurus maximus","Zonosaurus ornatus","Zonosaurus quadrilineatus","Zonosaurus rufipes","Zonosaurus subunicolor","Zonosaurus trilineatus","Zonosaurus tsingy","Alopoglossus angulatus","Anadia marmorata","Anadia pulchella","Arthrosaura kockii","Arthrosaura synaptolepis","Bachia bresslaui","Bachia flavescens","Bachia panoplia","Calyptommatus confusionibus","Cercosaura argulus","Cercosaura schreibersii","Echinosaura panamensis","Euspondylus guentheri","Gymnophthalmus lineatus","Gymnophthalmus pleii","Gymnophthalmus underwoodi","Leposoma parietale","Leposoma percarinatum","Leposoma rugiceps","Macropholidus annectens","Macropholidus ruthveni","Neusticurus tatei","Placosoma cordylinum","Potamites apodemus","Potamites cochranae","Psilophthalmus paeminosus","Ptychoglossus bicolor","Ptychoglossus stenolepis","Riama balneator","Riama oculata","Riama petrorum","Riama stigmatoral","Heloderma horridum","Heloderma suspectum","Bitia hydroides","Cantoria violacea","Cerberus australis","Cerberus microlepis","Cerberus rynchops","Enhydris bocourti","Enhydris chinensis","Enhydris doriae","Enhydris dussumieri","Enhydris enhydris","Enhydris longicauda","Enhydris pakistanica","Enhydris plumbea","Enhydris polylepis","Enhydris sieboldii","Enhydris subtaeniata","Enhydris vorisi","Erpeton tentaculatum","Fordonia leucobalia","Gerarda prevostiana","Homalopsis buccata","Homalopsis nigroventralis","Myron richardsonii","Amblyrhynchus cristatus","Brachylophus bulabula","Brachylophus fasciatus","Brachylophus vitiensis","Conolophus marthae","Conolophus pallidus","Conolophus subcristatus","Ctenosaura alfredschmidti","Ctenosaura bakeri","Ctenosaura clarki","Ctenosaura defensor","Ctenosaura flavidorsalis","Ctenosaura melanosterna","Ctenosaura nolascensis","Ctenosaura oaxacana","Ctenosaura oedirhina","Ctenosaura palearis","Ctenosaura quinquecariniata","Ctenosaura similis","Cyclura carinata","Cyclura collei","Cyclura cornuta","Cyclura cychlura","Cyclura lewisi","Cyclura nubila","Cyclura pinguis","Cyclura ricordii","Cyclura rileyi","Cyclura stejnegeri","Dipsosaurus dorsalis","Iguana delicatissima","Sauromalus ater","Sauromalus hispidus","Acanthodactylus ahmaddisii","Acanthodactylus arabicus","Acanthodactylus bedriagai","Acanthodactylus beershebensis","Acanthodactylus blanci","Acanthodactylus busacki","Acanthodactylus erythrurus","Acanthodactylus felicis","Acanthodactylus grandis","Acanthodactylus haasi","Acanthodactylus harranensis","Acanthodactylus maculatus","Acanthodactylus mechriguensis","Acanthodactylus opheodurus","Acanthodactylus orientalis","Acanthodactylus pardalis","Acanthodactylus robustus","Acanthodactylus savignyi","Acanthodactylus schmidti","Acanthodactylus schreiberi","Acanthodactylus spinicauda","Acanthodactylus tilburyi","Acanthodactylus tristrami","Acanthodactylus yemenicus","Adolfus alleni","Algyroides fitzingeri","Algyroides marchi","Algyroides moreoticus","Algyroides nigropunctatus","Anatololacerta anatolica","Anatololacerta danfordi","Anatololacerta oertzeni","Apathya cappadocica","Apathya yassujica","Archaeolacerta bedriagae","Atlantolacerta andreanskyi","Australolacerta australis","Australolacerta rupicola","Congolacerta vauereselli","Dalmatolacerta oxycephala","Darevskia alpina","Darevskia armeniaca","Darevskia bendimahiensis","Darevskia brauneri","Darevskia caucasica","Darevskia chlorogaster","Darevskia clarkorum","Darevskia daghestanica","Darevskia dahli","Darevskia defilippii","Darevskia derjugini","Darevskia dryada","Darevskia mixta","Darevskia parvula","Darevskia portschinskii","Darevskia praticola","Darevskia raddei","Darevskia rostombekovi","Darevskia rudis","Darevskia sapphirina","Darevskia saxicola","Darevskia unisexualis","Darevskia uzzelli","Darevskia valentini","Dinarolacerta montenegrina","Dinarolacerta mosorensis","Eremias acutirostris","Eremias andersoni","Eremias kavirensis","Eremias lalezharica","Eremias montanus","Eremias nigrolateralis","Eremias pleskei","Eremias strauchi","Eremias suphani","Gallotia atlantica","Gallotia auaritae","Gallotia bravoana","Gallotia caesaris","Gallotia galloti","Gallotia intermedia","Gallotia simonyi","Gallotia stehlini","Hellenolacerta graeca","Iberolacerta aranica","Iberolacerta aurelioi","Iberolacerta bonnali","Iberolacerta cyreni","Iberolacerta galani","Iberolacerta horvathi","Iberolacerta martinezricai","Iberolacerta monticola","Iranolacerta zagrosica","Lacerta agilis","Lacerta bilineata","Lacerta media","Lacerta pamphylica","Lacerta schreiberi","Lacerta strigata","Lacerta trilineata","Lacerta viridis","Latastia cherchii","Mesalina adramitana","Mesalina bahaeldini","Mesalina balfouri","Mesalina brevirostris","Mesalina kuri","Mesalina pasteuri","Mesalina simonii","Omanosaura cyanura","Omanosaura jayakari","Ophisops jerdonii","Ophisops microlepis","Ophisops occidentalis","Parvilacerta fraasii","Parvilacerta parva","Pedioplanis gaerdesi","Pedioplanis laticeps","Philochortus neumanni","Philochortus zolii","Phoenicolacerta cyanisparsa","Phoenicolacerta kulzeri","Phoenicolacerta laevis","Phoenicolacerta troodica","Podarcis bocagei","Podarcis carbonelli","Podarcis cretensis","Podarcis erhardii","Podarcis filfolensis","Podarcis gaigeae","Podarcis hispanicus","Podarcis levendis","Podarcis lilfordi","Podarcis melisellensis","Podarcis milensis","Podarcis muralis","Podarcis peloponnesiacus","Podarcis pityusensis","Podarcis raffonei","Podarcis siculus","Podarcis tauricus","Podarcis tiliguerta","Podarcis vaucheri","Podarcis waglerianus","Psammodromus algirus","Psammodromus blanci","Psammodromus hispanicus","Psammodromus jeanneae","Psammodromus manuelae","Psammodromus microdactylus","Scelarcis perspicillata","Takydromus kuehnei","Takydromus sexlineatus","Takydromus toyamai","Teira dugesii","Timon lepidus","Timon pater","Timon princeps","Timon tangitanus","Tropidosaura cottrelli","Zootoca vivipara","Gonionotophis capensis","Gonionotophis grantii","Gonionotophis klingi","Gonionotophis nyassae","Inyoka swazicus","Lamprophis aurora","Lamprophis fuscus","Lamprophis geometricus","Lycodonomorphus bicolor","Lycodonomorphus inornatus","Lycodonomorphus subtaeniatus","Lycodonomorphus whytii","Lycophidion acutirostre","Lycophidion albomaculatum","Lycophidion nanus","Lycophidion nigromaculatum","Lycophidion ornatum","Lycophidion semicinctum","Anisolepis grilli","Anisolepis undulatus","Diplolaemus darwinii","Enyalius bibronii","Enyalius pictus","Leiosaurus catamarcensis","Pristidactylus torquatus","Epictia ater","Epictia collaris","Epictia rufidorsa","Epictia tricolor","Leptotyphlops jacobseni","Myriopholis albiventer","Myriopholis algeriensis","Myriopholis boueti","Myriopholis narirostris","Myriopholis rouxestevae","Rena dissecta","Rena dulcis","Rena humilis","Rena maxima","Rena myopica","Rhinoleptus koniagui","Tricheilostoma bicolor","Trilepida joshuai","Adelophis copei","Afronatrix anoscopus","Amphiesma beddomei","Amphiesma bitaeniatum","Amphiesma boulengeri","Amphiesma deschauenseei","Amphiesma flavifrons","Amphiesma inas","Amphiesma leucomystax","Amphiesma metusia","Amphiesma miyajimae","Amphiesma modestum","Amphiesma monticola","Amphiesma petersii","Amphiesma popei","Amphiesma sanguineum","Amphiesma sarawacense","Amphiesma sauteri","Amphiesma taronensis","Amphiesma venningi","Amphiesmoides ornaticeps","Atretium schistosum","Atretium yunnanensis","Balanophis ceylonensis","Clonophis kirtlandii","Hologerrhum dermali","Hologerrhum philippinum","Hydrablabes periops","Lycognathophis seychellensis","Macropisthodon flaviceps","Macropisthodon rhodomelas","Macropisthodon rudis","Natriciteres fuliginoides","Natriciteres olivacea","Natrix maura","Natrix megalocephala","Natrix natrix","Natrix tessellata","Nerodia clarkii","Nerodia cyclopion","Nerodia erythrogaster","Nerodia fasciata","Nerodia floridana","Nerodia harteri","Nerodia paucimaculata","Nerodia rhombifer","Nerodia sipedon","Nerodia taxispilota","Opisthotropis alcalai","Opisthotropis andersonii","Opisthotropis cheni","Opisthotropis daovantieni","Opisthotropis guangxiensis","Opisthotropis kikuzatoi","Opisthotropis lateralis","Opisthotropis latouchii","Opisthotropis rugosa","Opisthotropis typica","Paratapinophis praemaxillaris","Regina alleni","Regina grahamii","Regina rigida","Regina septemvittata","Rhabdophis adleri","Rhabdophis auriculata","Rhabdophis chrysargos","Rhabdophis conspicillatus","Rhabdophis leonardi","Rhabdophis lineatus","Rhabdophis murudensis","Rhabdophis nigrocinctus","Rhabdophis nuchalis","Rhabdophis pentasupralabialis","Rhabdophis spilogaster","Rhabdophis subminiatus","Rhabdophis swinhonis","Seminatrix pygaea","Sinonatrix aequifasciata","Sinonatrix percarinata","Sinonatrix yunnanensis","Storeria dekayi","Storeria hidalgoensis","Storeria occipitomaculata","Storeria storerioides","Thamnophis atratus","Thamnophis brachystoma","Thamnophis butleri","Thamnophis chrysocephalus","Thamnophis couchii","Thamnophis cyrtopsis","Thamnophis elegans","Thamnophis eques","Thamnophis errans","Thamnophis exsul","Thamnophis fulvus","Thamnophis gigas","Thamnophis godmani","Thamnophis hammondii","Thamnophis marcianus","Thamnophis melanogaster","Thamnophis mendax","Thamnophis ordinoides","Thamnophis postremus","Thamnophis proximus","Thamnophis pulchrilatus","Thamnophis radix","Thamnophis rufipunctatus","Thamnophis sauritus","Thamnophis scalaris","Thamnophis scaliger","Thamnophis sirtalis","Thamnophis sumichrasti","Thamnophis valida","Tropidoclonion lineatum","Tropidonophis dahlii","Tropidonophis dendrophiops","Tropidonophis hypomelas","Tropidonophis mairii","Tropidonophis negrosensis","Tropidonophis parkeri","Tropidonophis statistictus","Virginia striatula","Virginia valeriae","Xenochrophis flavipunctatus","Xenochrophis maculatus","Xenochrophis melanozostus","Xenochrophis punctulatus","Xenochrophis trianguligerus","Xenochrophis vitattus","Chalarodon madagascariensis","Oplurus cuvieri","Oplurus cyclurus","Oplurus fierinensis","Oplurus grandidieri","Oplurus quadrimaculatus","Oplurus saxicola","Aplopeltura boa","Asthenodipsas laevis","Asthenodipsas malaccanus","Asthenodipsas vertebralis","Pareas boulengeri","Pareas carinatus","Pareas formosensis","Pareas hamptoni","Pareas margaritophorus","Pareas nuchalis","Callisaurus draconoides","Cophosaurus texanus","Holbrookia elegans","Holbrookia lacerata","Holbrookia maculata","Holbrookia propinqua","Petrosaurus mearnsi","Petrosaurus repens","Petrosaurus slevini","Petrosaurus thalassinus","Phrynosoma asio","Phrynosoma braconnieri","Phrynosoma cornutum","Phrynosoma coronatum","Phrynosoma douglasii","Phrynosoma hernandesi","Phrynosoma mcallii","Phrynosoma modestum","Phrynosoma orbiculare","Phrynosoma platyrhinos","Phrynosoma solare","Phrynosoma taurus","Sceloporus acanthinus","Sceloporus adleri","Sceloporus aeneus","Sceloporus anahuacus","Sceloporus angustus","Sceloporus arenicolus","Sceloporus asper","Sceloporus bicanthalis","Sceloporus bulleri","Sceloporus carinatus","Sceloporus cautus","Sceloporus chaneyi","Sceloporus chrysostictus","Sceloporus clarkii","Sceloporus couchi","Sceloporus cozumelae","Sceloporus cryptus","Sceloporus cyanostictus","Sceloporus dugesii","Sceloporus edwardtaylori","Sceloporus exsul","Sceloporus formosus","Sceloporus gadoviae","Sceloporus goldmani","Sceloporus graciosus","Sceloporus grammicus","Sceloporus grandaevus","Sceloporus heterolepis","Sceloporus horridus","Sceloporus hunsakeri","Sceloporus insignis","Sceloporus internasalis","Sceloporus jalapae","Sceloporus jarrovi","Sceloporus licki","Sceloporus lineatulus","Sceloporus lunae","Sceloporus lundelli","Sceloporus macdougalli","Sceloporus maculosus","Sceloporus magister","Sceloporus malachiticus","Sceloporus megalepidurus","Sceloporus melanorhinus","Sceloporus merriami","Sceloporus minor","Sceloporus mucronatus","Sceloporus nelsoni","Sceloporus oberon","Sceloporus occidentalis","Sceloporus ochoterenae","Sceloporus olivaceus","Sceloporus orcutti","Sceloporus ornatus","Sceloporus palaciosi","Sceloporus parvus","Sceloporus poinsettii","Sceloporus prezygus","Sceloporus pyrocephalus","Sceloporus samcolemani","Sceloporus scalaris","Sceloporus serrifer","Sceloporus siniferus","Sceloporus slevini","Sceloporus smaragdinus","Sceloporus smithi","Sceloporus spinosus","Sceloporus stejnegeri","Sceloporus sugillatus","Sceloporus taeniocnemis","Sceloporus teapensis","Sceloporus torquatus","Sceloporus undulatus","Sceloporus utiformis","Sceloporus vandenburgianus","Sceloporus variabilis","Sceloporus virgatus","Sceloporus woodi","Sceloporus zosteromus","Uma exsul","Uma inornata","Uma notata","Uma paraphygas","Uma rufopunctata","Uma scoparia","Urosaurus auriculatus","Urosaurus bicarinatus","Urosaurus clarionensis","Urosaurus gadovi","Urosaurus graciosus","Urosaurus lahtelai","Urosaurus nigricaudus","Urosaurus ornatus","Uta encantadae","Uta lowei","Uta nolascensis","Uta palmeri","Uta squamata","Uta stansburiana","Uta tumidarostra","Asaccus caudivolvulus","Asaccus elisae","Asaccus gallagheri","Asaccus griseonotus","Asaccus kermanshahensis","Asaccus kurdistanensis","Asaccus montanus","Asaccus nasrullahi","Asaccus platyrhynchus","Haemodracon riebeckii","Haemodracon trachyrhinus","Homonota fasciata","Phyllodactylus bordai","Phyllodactylus bugastrolepis","Phyllodactylus davisi","Phyllodactylus delcampoi","Phyllodactylus duellmani","Phyllodactylus homolepidurus","Phyllodactylus inaequalis","Phyllodactylus interandinus","Phyllodactylus lanei","Phyllodactylus leei","Phyllodactylus muralis","Phyllodactylus partidus","Phyllodactylus reissii","Phyllodactylus tuberculosus","Phyllodactylus unctus","Phyllodactylus xanti","Ptyodactylus oudrii","Tarentola americana","Tarentola angustimentalis","Tarentola boavistensis","Tarentola bocagei","Tarentola boehmei","Tarentola boettgeri","Tarentola caboverdiana","Tarentola chazaliae","Tarentola darwini","Tarentola delalandii","Tarentola deserti","Tarentola fogoensis","Tarentola gigas","Tarentola gomerensis","Tarentola maioensis","Tarentola mauritanica","Tarentola mindiae","Tarentola neglecta","Tarentola nicolauensis","Tarentola pastoria","Tarentola protogigas","Tarentola raziana","Tarentola senegambiae","Tarentola substituta","Prosymna ambigua","Prosymna angolensis","Prosymna janii","Prosymna meleagris","Prosymna ornatissima","Hemirhagerrhis hildebrandtii","Malpolon monspessulanus","Mimophis mahfalensis","Psammophis condanarus","Psammophis indochinensis","Psammophis longifrons","Psammophis subtaeniatus","Psammophylax tritaeniatus","Plagiopholis blakewayi","Plagiopholis nuchalis","Plagiopholis styani","Pseudoxenodon bambusicola","Pseudoxenodon inornatus","Pseudoxenodon macrops","Alluaudina bellyi","Alluaudina mocquardi","Brygophis coulangesi","Compsophis albiventris","Compsophis boulengeri","Compsophis fatsibe","Compsophis infralineata","Compsophis laphystius","Compsophis vinckei","Compsophis zeny","Ditypophis vivax","Dromicodryas bernieri","Dromicodryas quadrilineatus","Duberria lutrix","Duberria variegata","Exallodontophis albignaci","Heteroliodon fohy","Heteroliodon lava","Heteroliodon occipitalis","Ithycyphus goudoti","Ithycyphus miniatus","Ithycyphus oursi","Ithycyphus perineti","Langaha alluaudi","Langaha madagascariensis","Langaha pseudoalluaudi","Leioheterodon geayi","Leioheterodon madagascariensis","Leioheterodon modestus","Liophidium chabaudi","Liophidium mayottensis","Liophidium pattoni","Liophidium rhodogaster","Liophidium therezieni","Liophidium torquatum","Liophidium vaillanti","Liopholidophis dimorphus","Liopholidophis dolicocercus","Liopholidophis grandidieri","Liopholidophis rhadinaea","Liopholidophis sexlineatus","Liopholidophis varius","Lycodryas carleti","Lycodryas citrinus","Lycodryas gaimardi","Lycodryas granuliceps","Lycodryas guentheri","Lycodryas inopinae","Lycodryas inornatus","Lycodryas pseudogranuliceps","Lycodryas sanctijohannis","Madagascarophis colubrinus","Madagascarophis meridionalis","Madagascarophis ocellatus","Micropisthodon ochraceus","Oxyrhabdium leporinum","Pararhadinaea melanogaster","Parastenophis betsileanus","Phisalixella arctifasciata","Phisalixella tulearensis","Phisalixella variabilis","Pseudoxyrhopus ambreensis","Pseudoxyrhopus analabe","Pseudoxyrhopus ankafinaensis","Pseudoxyrhopus heterurus","Pseudoxyrhopus imerinae","Pseudoxyrhopus kely","Pseudoxyrhopus microps","Pseudoxyrhopus oblectator","Pseudoxyrhopus quinquelineatus","Pseudoxyrhopus sokosoko","Pseudoxyrhopus tritaeniatus","Thamnosophis epistibes","Thamnosophis infrasignatus","Thamnosophis lateralis","Thamnosophis martae","Thamnosophis mavotenda","Thamnosophis stumpffi","Aprasia aurita","Aprasia pseudopulchella","Aprasia rostrata","Delma fraseri","Delma impar","Delma labialis","Delma torquata","Ophidiocephalus taeniatus","Paradelma orientalis","Aspidites ramsayi","Bothrochilus boa","Liasis fuscus","Morelia amethistina","Morelia spilota","Morelia viridis","Python anchietae","Python bivittatus","Python breitensteini","Python brongersmai","Python kyaiktiyo","Python molurus","Python regius","Rhineura floridana","Ablepharus bivittatus","Ablepharus budaki","Ablepharus chernovi","Ablepharus deserti","Ablepharus kitaibelii","Ablepharus rueppellii","Acontias breviceps","Acontias gracilicauda","Acontias kgaladi","Acontias lineatus","Acontias percivali","Acontias plumbeus","Acontias rieppeli","Afroablepharus africana","Afroablepharus annobonensis","Amphiglossus alluaudi","Amphiglossus anosyensis","Amphiglossus ardouini","Amphiglossus astrolabi","Amphiglossus crenni","Amphiglossus decaryi","Amphiglossus frontoparietalis","Amphiglossus johannae","Amphiglossus macrocercus","Amphiglossus mandokava","Amphiglossus melanurus","Amphiglossus ornaticeps","Amphiglossus punctatus","Amphiglossus reticulatus","Amphiglossus splendidus","Amphiglossus tanysoma","Amphiglossus tsaratananensis","Androngo trivittatus","Anomalopus brevicollis","Anomalopus gowi","Anomalopus mackayi","Bassiana trilineatus","Brachymeles bicolor","Brachymeles bonitae","Brachymeles boulengeri","Brachymeles cebuensis","Brachymeles gracilis","Brachymeles minimus","Brachymeles samarensis","Brachymeles schadenbergi","Brachymeles talinis","Brachymeles tridactylus","Brachymeles vermis","Caledoniscincus aquilonius","Caledoniscincus atropunctatus","Caledoniscincus auratus","Caledoniscincus austrocaledonicus","Caledoniscincus bodoi","Caledoniscincus chazeaui","Caledoniscincus festivus","Caledoniscincus haplorhinus","Caledoniscincus orestes","Caledoniscincus renevieri","Caledoniscincus terma","Capitellum  parvicruzae","Carlia ailanpalai","Carlia bicarinata","Carlia diguliensis","Carlia dogare","Carlia gracilis","Carlia rubrigularis","Carlia tetradactyla","Celatiscincus euryotis","Celatiscincus similis","Chalcides armitagei","Chalcides bedriagai","Chalcides chalcides","Chalcides colosii","Chalcides delislei","Chalcides ebneri","Chalcides guentheri","Chalcides lanzai","Chalcides manueli","Chalcides mauritanicus","Chalcides mertensi","Chalcides minutus","Chalcides mionecton","Chalcides montanus","Chalcides parallelus","Chalcides polylepis","Chalcides pseudostriatus","Chalcides pulchellus","Chalcides sepsoides","Chalcides sexlineatus","Chalcides simonyi","Chalcides sphenopsiformis","Chalcides striatus","Chalcides thierryi","Chalcides viridanus","Chioninia delalandii","Chioninia fogoensis","Chioninia nicolauensis","Chioninia spinalis","Chioninia stangeri","Chioninia vaillantii","Coeranoscincus reticulatus","Cophoscincopus durus","Cophoscincopus greeri","Cophoscincopus simulans","Cryptoblepharus gloriosus","Cryptoblepharus leschenault","Cryptoblepharus novaeguineae","Cryptoblepharus novocaledonicus","Cryptoblepharus renschi","Cryptoblepharus rutilus","Ctenotus allotropis","Ctenotus burbidgei","Ctenotus gagudju","Ctenotus gemmula","Ctenotus helenae","Ctenotus inornatus","Ctenotus lancelini","Ctenotus leonhardii","Ctenotus zastictus","Cyclodomorphus celatus","Dasia griffini","Dasia olivacea","Dasia subcaerulea","Egernia kingii","Egernia rugosa","Emoia adspersa","Emoia aneityumensis","Emoia arnoensis","Emoia bismarckensis","Emoia boettgeri","Emoia caeruleocauda","Emoia campbelli","Emoia concolor","Emoia cyanogaster","Emoia erronan","Emoia flavigularis","Emoia impar","Emoia isolata","Emoia lawesi","Emoia loveridgei","Emoia loyaltiensis","Emoia maculata","Emoia mokosariniveikau","Emoia nativitatis","Emoia nigra","Emoia nigromarginata","Emoia parkeri","Emoia ponapea","Emoia pseudocyanura","Emoia rennellensis","Emoia samoensis","Emoia sanfordi","Emoia schmidti","Emoia slevini","Emoia submetallica","Emoia taumakoensis","Emoia tongana","Emoia trossula","Emoia tuitarere","Eremiascincus brongersmai","Eulamprus heatwolei","Eulamprus leuraensis","Eulamprus luteilateralis","Eulamprus sokosoma","Eulamprus tryoni","Eumeces algeriensis","Eurylepis poonaensis","Eutropis allapallensis","Eutropis bibronii","Eutropis bontocensis","Eutropis carinata","Eutropis clivicola","Eutropis nagarjuni","Eutropis novemcarinata","Eutropis trivittata","Geomyersia coggeri","Geomyersia glabra","Geoscincus haraldmeieri","Glaphyromorphus crassicaudus","Graciliscincus shonae","Hakaria simonyi","Hemiergis decresiensis","Hemiergis quadrilineatum","Isopachys anguinoides","Janetaescincus braueri","Janetaescincus veseyfitzgeraldi","Kaestlea beddomei","Kaestlea bilineata","Kaestlea laterimaculata","Kaestlea travancorica","Kanakysaurus viviparus","Kanakysaurus zebratus","Lacertoides pardalis","Lamprolepis nieuwenhuisi","Lankascincus deignani","Lankascincus taprobanensis","Larutia miodactyla","Leiolopisma alazon","Leiolopisma telfairii","Leptosiaphos aloysiisabaudiae","Leptosiaphos meleagris","Leptosiaphos pauliani","Lerista allanae","Lerista allochira","Lerista connivens","Lerista elongata","Lerista kennedyensis","Lerista onsloviana","Lerista stylis","Lerista taeniata","Lerista vermicularis","Lerista vittata","Lerista walkeri","Liburnascincus scirtetis","Liopholis inornata","Liopholis kintorei","Liopholis striata","Liopholis whitii","Lioscincus maruia","Lioscincus nigrofasciolatum","Lioscincus novaecaledoniae","Lioscincus steindachneri","Lioscincus tillieri","Lioscincus vivae","Lipinia auriculata","Lipinia infralineolata","Lipinia leptosoma","Lipinia pulchella","Lipinia rouxi","Lygisaurus sesbrauna","Lygosoma ashwamedhi","Lygosoma guentheri","Lygosoma haroldyoungi","Lygosoma koratense","Lygosoma lineata","Madascincus arenicola","Madascincus igneocaudatus","Madascincus macrolepis","Madascincus melanopleura","Madascincus minutus","Madascincus mouroundavae","Madascincus nanus","Madascincus polleni","Madascincus stumpffi","Marisora alliacea","Marisora brachypoda","Marisora roatanae","Marmorosphax boulinda","Marmorosphax kaala","Marmorosphax montana","Marmorosphax taom","Marmorosphax tricolor","Melanoseps ater","Menetia amaura","Mesoscincus managuae","Mesoscincus schwartzei","Mochlus brevicaudis","Mochlus guineensis","Mochlus mafianum","Mochlus mocquardi","Mochlus productum","Mochlus sundevalli","Morethia boulengeri","Nannoscincus exos","Nannoscincus garrulus","Nannoscincus gracilis","Nannoscincus greeri","Nannoscincus hanchisteus","Nannoscincus humectus","Nannoscincus manautei","Nannoscincus mariei","Nannoscincus rankini","Nannoscincus slevini","Neoseps reynoldsi","Niveoscincus palfreymani","Oligosoma acrinasum","Oligosoma alani","Oligosoma fallai","Oligosoma grande","Oligosoma homalonotum","Oligosoma infrapunctatum","Oligosoma lichenigera","Oligosoma macgregori","Oligosoma microlepis","Oligosoma oliveri","Oligosoma otagense","Oligosoma striatum","Oligosoma suteri","Oligosoma waimatense","Oligosoma whitakeri","Oligosoma zelandicum","Ophiomorus nuchalis","Ophiomorus persicus","Ophiomorus punctatissimus","Ophiomorus raithmai","Ophiomorus streeti","Pamelaescincus gardineri","Panaspis helleri","Panaspis nimbaensis","Panaspis togoensis","Panopa carvalhoi","Paracontias brocchii","Paracontias fasika","Paracontias hafa","Paracontias hildebrandti","Paracontias holomelas","Paracontias kankana","Paracontias minimus","Paracontias rothschildi","Parvoscincus sisoni","Phoboscincus bocourti","Phoboscincus garnieri","Plestiodon anthracinus","Plestiodon brevirostris","Plestiodon callicephalus","Plestiodon copei","Plestiodon dugesii","Plestiodon egregius","Plestiodon fasciatus","Plestiodon gilberti","Plestiodon inexpectatus","Plestiodon kishinouyei","Plestiodon lagunensis","Plestiodon laticeps","Plestiodon longirostris","Plestiodon lynxe","Plestiodon multivirgatus","Plestiodon obsoletus","Plestiodon ochoterenae","Plestiodon septentrionalis","Plestiodon skiltonianus","Plestiodon sumichrasti","Plestiodon tetragrammus","Prasinohaema flavipes","Prasinohaema prehensicauda","Proablepharus reginae","Pseudemoia pagenstecheri","Pseudoacontias angelorum","Pseudoacontias menamainty","Pseudoacontias unicolor","Pygomeles braconnieri","Pygomeles petteri","Ristella beddomii","Saproscincus czechurai","Scelotes gronovii","Scelotes guentheri","Scelotes inornatus","Scelotes kasneri","Scelotes mossambicus","Scincella gemmingeri","Scincella lateralis","Scincella monticola","Scincella silvicola","Scincella vandenburghi","Scincus hemprichii","Scincus mitranus","Scolecoseps acontias","Sepsina alberti","Sigaloseps deplanchei","Sigaloseps ruficauda","Simiscincus aurantiacus","Sirenoscincus yamagishi","Sphenomorphus abdictus","Sphenomorphus acutus","Sphenomorphus assatus","Sphenomorphus atrigularis","Sphenomorphus beyeri","Sphenomorphus bignelli","Sphenomorphus biparietalis","Sphenomorphus cherriei","Sphenomorphus concinnatus","Sphenomorphus coxi","Sphenomorphus cranei","Sphenomorphus cumingi","Sphenomorphus cyanolaemus","Sphenomorphus decipiens","Sphenomorphus dussumieri","Sphenomorphus fasciatus","Sphenomorphus jagori","Sphenomorphus kitangladensis","Sphenomorphus knollmanae","Sphenomorphus leucospilos","Sphenomorphus llanosi","Sphenomorphus luzonense","Sphenomorphus mindanensis","Sphenomorphus nigrolineatus","Sphenomorphus scutatus","Sphenomorphus steerei","Sphenomorphus tagapayo","Sphenomorphus tanneri","Sphenomorphus tropidonotus","Sphenomorphus victoria","Spondylurus culebrae","Spondylurus magnacruzae","Spondylurus monae","Spondylurus monitae","Spondylurus nitidus","Spondylurus semitaeniatus","Spondylurus sloanii","Spondylurus spilonotus","Tiliqua adelaidensis","Trachylepis aurata","Trachylepis aureogularis","Trachylepis aureopunctata","Trachylepis bensonii","Trachylepis bocagii","Trachylepis boettgeri","Trachylepis comorensis","Trachylepis dumasi","Trachylepis elegans","Trachylepis gravenhorstii","Trachylepis lacertiformis","Trachylepis lavarambo","Trachylepis madagascariensis","Trachylepis margaritifera","Trachylepis nancycoutuae","Trachylepis paucisquamis","Trachylepis punctatissima","Trachylepis seychellensis","Trachylepis socotrana","Trachylepis tandrefana","Trachylepis tavaratra","Trachylepis tessellata","Trachylepis vato","Trachylepis vittata","Trachylepis volamenaloha","Trachylepis wrightii","Tribolonotus blanchardi","Tribolonotus pseudoponceleti","Tribolonotus schmidti","Tropidophorus davaoensis","Tropidophorus grayi","Tropidophorus laotus","Tropidophorus misaminius","Tropidophorus mocquardi","Tropidophorus partelloi","Tropidoscincus aubrianus","Tropidoscincus boreus","Tropidoscincus variabilis","Typhlosaurus caecus","Typhlosaurus lomiae","Varzea bistriata","Voeltzkowia fierinensis","Voeltzkowia lineata","Voeltzkowia mira","Voeltzkowia petiti","Voeltzkowia rubrocaudata","Aristelliger lar","Coleodactylus septentrionalis","Euleptes europaea","Gonatodes caudiscutatus","Gonatodes daudini","Gonatodes hasemani","Lepidoblepharis sanctaemartae","Lepidoblepharis xanthostigma","Pristurus abdelkuri","Pristurus carteri","Pristurus celerrimus","Pristurus collaris","Pristurus gallagheri","Pristurus guichardi","Pristurus insignis","Pristurus insignoides","Pristurus minimus","Pristurus obsti","Pristurus ornithocephalus","Pristurus popovi","Pristurus rupestris","Pristurus saada","Pristurus samhaensis","Pristurus schneideri","Pristurus sokotranus","Quedenfeldtia moerens","Quedenfeldtia trachyblepharus","Saurodactylus brosseti","Saurodactylus fasciatus","Saurodactylus mauritanicus","Sphaerodactylus armasi","Sphaerodactylus callocricus","Sphaerodactylus corticola","Sphaerodactylus difficilis","Sphaerodactylus dunni","Sphaerodactylus glaucus","Sphaerodactylus goniorhynchus","Sphaerodactylus graptolaemus","Sphaerodactylus homolepis","Sphaerodactylus kirbyi","Sphaerodactylus klauberi","Sphaerodactylus micropithecus","Sphaerodactylus millepunctatus","Sphaerodactylus nicholsi","Sphaerodactylus notatus","Sphaerodactylus pacificus","Sphaerodactylus pimienta","Sphaerodactylus richardi","Sphaerodactylus rosaurae","Sphaerodactylus savagei","Sphaerodactylus scaber","Sphaerodactylus scapularis","Sphaerodactylus storeyae","Sphaerodactylus streptophorus","Sphaerodactylus thompsoni","Sphaerodactylus torrei","Sphaerodactylus vincenti","Sphaerodactylus williamsi","Teratoscincus przewalskii","Ameiva chrysolaema","Ameiva corax","Ameiva corvina","Ameiva lineolata","Ameiva maynardii","Ameiva polops","Ameiva vittata","Aspidoscelis angusticeps","Aspidoscelis arizonae","Aspidoscelis bacatus","Aspidoscelis burti","Aspidoscelis calidipes","Aspidoscelis canus","Aspidoscelis carmenensis","Aspidoscelis catalinensis","Aspidoscelis celeripes","Aspidoscelis ceralbensis","Aspidoscelis communis","Aspidoscelis costatus","Aspidoscelis cozumela","Aspidoscelis danheimae","Aspidoscelis deppei","Aspidoscelis dixoni","Aspidoscelis espiritensis","Aspidoscelis exsanguis","Aspidoscelis flagellicauda","Aspidoscelis franciscensis","Aspidoscelis gularis","Aspidoscelis guttata","Aspidoscelis gypsi","Aspidoscelis hyperythra","Aspidoscelis inornata","Aspidoscelis labialis","Aspidoscelis laredoensis","Aspidoscelis lineattissima","Aspidoscelis martyris","Aspidoscelis maslini","Aspidoscelis mexicana","Aspidoscelis motaguae","Aspidoscelis neomexicana","Aspidoscelis neotesselata","Aspidoscelis pai","Aspidoscelis parvisocia","Aspidoscelis pictus","Aspidoscelis rodecki","Aspidoscelis sacki","Aspidoscelis septemvittata","Aspidoscelis sexlineata","Aspidoscelis sonorae","Aspidoscelis tesselata","Aspidoscelis tigris","Aspidoscelis uniparens","Aspidoscelis velox","Cnemidophorus gramivagus","Cnemidophorus vanzoi","Crocodilurus amazonicus","Holcosus quadrilineatus","Holcosus undulatus","Kentropyx viridistriga","Salvator merianae","Diplometopon zarudnyi","Trogonophis wiegmanni","Exiliboa placata","Tropidophis hendersoni","Tropidophis pardalis","Ctenoblepharys adspersa","Eurolophosaurus nanuzae","Leiocephalus carinatus","Leiocephalus greenwayi","Leiocephalus melanochlorus","Leiocephalus schreibersii","Liolaemus arambarensis","Liolaemus archeforus","Liolaemus atacamensis","Liolaemus austromendocinus","Liolaemus capillitas","Liolaemus constanzae","Liolaemus dicktracyi","Liolaemus fitzgeraldi","Liolaemus fitzingerii","Liolaemus gallardoi","Liolaemus hellmichi","Liolaemus hernani","Liolaemus huacahuasicus","Liolaemus juanortizi","Liolaemus lutzae","Liolaemus nigromaculatus","Liolaemus occipitalis","Liolaemus olongasta","Liolaemus petrophilus","Liolaemus platei","Liolaemus rabinoi","Liolaemus reichei","Liolaemus signifer","Liolaemus stolzmanni","Liolaemus vallecurensis","Microlophus peruvianus","Phymaturus palluma","Plica lumaria","Stenocercus aculeatus","Stenocercus crassicaudatus","Stenocercus festae","Stenocercus fimbriatus","Stenocercus frittsi","Stenocercus haenschi","Stenocercus imitator","Stenocercus marmoratus","Stenocercus prionotus","Stenocercus scapularis","Stenocercus torquatus","Tropidurus chromatops","Tropidurus erythrocephalus","Tropidurus semitaeniatus","Tropidurus torquatus","Acutotyphlops subocularis","Afrotyphlops gierrai","Austrotyphlops endoterus","Austrotyphlops hamatus","Austrotyphlops kimberleyensis","Austrotyphlops pilbarensis","Austrotyphlops proximus","Austrotyphlops waitii","Grypotyphlops acutus","Letheobia crossii","Letheobia feae","Letheobia graueri","Letheobia praeocularis","Letheobia simonii","Ramphotyphlops acuticaudus","Ramphotyphlops albiceps","Ramphotyphlops bicolor","Ramphotyphlops depressus","Ramphotyphlops exocoeti","Ramphotyphlops lineatus","Ramphotyphlops suluensis","Typhlops arenarius","Typhlops biminiensis","Typhlops boettgeri","Typhlops caecatus","Typhlops capitulatus","Typhlops castonotus","Typhlops costaricensis","Typhlops decorsei","Typhlops diardii","Typhlops hectus","Typhlops hypomethes","Typhlops jamaicensis","Typhlops lazelli","Typhlops microstomus","Typhlops monensis","Typhlops muelleri","Typhlops pammeces","Typhlops reticulatus","Typhlops ruber","Typhlops schmutzi","Typhlops sulcatus","Typhlops syntherus","Typhlops tasymicris","Typhlops tenuis","Typhlops tycherus","Xenotyphlops grandidieri","Brachyophidium rhodogaster","Melanophidium bilineatum","Melanophidium punctatum","Melanophidium wynaudense","Platyplectrurus madurensis","Plectrurus perroteti","Rhinophis drummondhayi","Rhinophis oxyrhynchus","Rhinophis sanguineus","Rhinophis travancoricus","Teretrurus sanguineus","Uropeltis arcticeps","Uropeltis bicatenata","Uropeltis ceylanicus","Uropeltis ellioti","Uropeltis macrolepis","Uropeltis ocellatus","Uropeltis phipsonii","Uropeltis pulneyensis","Uropeltis rubrolineatus","Uropeltis rubromaculatus","Uropeltis smithi","Uropeltis woodmasoni","Varanus bengalensis","Varanus cumingi","Varanus exanthematicus","Varanus finschi","Varanus flavescens","Varanus glauerti","Varanus indicus","Varanus jobiensis","Varanus juxtindicus","Varanus komodoensis","Varanus mabitang","Varanus marmoratus","Varanus nuchalis","Varanus olivaceus","Varanus primordius","Varanus rosenbergi","Varanus salvator","Varanus scalaris","Varanus spinulosus","Agkistrodon bilineatus","Agkistrodon contortrix","Agkistrodon piscivorus","Agkistrodon taylori","Atheris barbouri","Atheris ceratophora","Atheris chlorechis","Atropoides nummifer","Atropoides olmec","Azemiops feae","Bitis atropos","Bitis inornata","Bitis peringueyi","Bitis rhinoceros","Bitis schneideri","Bothriechis aurifer","Bothriechis bicolor","Bothriechis rowleyi","Bothriopsis oligolepis","Bothrocophias myersi","Bothropoides alcatraz","Bothropoides erythromelas","Bothropoides insularis","Bothropoides lutzi","Bothrops jararacussu","Bothrops lojanus","Bothrops pirajai","Calloselasma rhodostoma","Cerastes gasperettii","Cerastes vipera","Cerrophidion tzotzilorum","Crotalus adamanteus","Crotalus angelensis","Crotalus aquilus","Crotalus atrox","Crotalus basiliscus","Crotalus caliginis","Crotalus catalinensis","Crotalus cerastes","Crotalus durissus","Crotalus enyo","Crotalus estebanensis","Crotalus horridus","Crotalus intermedius","Crotalus lepidus","Crotalus lorenzoensis","Crotalus mitchellii","Crotalus molossus","Crotalus muertensis","Crotalus oreganus","Crotalus polystictus","Crotalus pricei","Crotalus pusillus","Crotalus ravus","Crotalus ruber","Crotalus scutulatus","Crotalus stejnegeri","Crotalus tigris","Crotalus tortugensis","Crotalus transversus","Crotalus triseriatus","Crotalus unicolor","Crotalus viridis","Crotalus willardi","Cryptelytrops albolabris","Cryptelytrops cardamomensis","Cryptelytrops erythrurus","Cryptelytrops honsonensis","Cryptelytrops insularis","Cryptelytrops kanburiensis","Cryptelytrops macrops","Cryptelytrops purpureomaculatus","Cryptelytrops rubeus","Daboia deserti","Daboia mauritanica","Daboia palaestinae","Daboia siamensis","Echis borkini","Echis khosatzkii","Echis leucogaster","Echis omanensis","Echis pyramidum","Garthius chaseni","Gloydius saxatilis","Gloydius shedaoensis","Himalayophis tibetanus","Hypnale nepa","Macrovipera schweizeri","Mixcoatlus barbouri","Mixcoatlus melanurus","Montivipera albicornuta","Montivipera albizona","Montivipera bornmuelleri","Montivipera bulgardaghica","Montivipera latifii","Montivipera raddei","Montivipera wagneri","Montivipera xanthina","Ophryacus undulatus","Ovophis convictus","Ovophis makazayazaya","Ovophis monticola","Ovophis tonkinensis","Ovophis zayuensis","Parias hageni","Parias malcolmi","Parias sumatranus","Peltopelor macrolepis","Popeia barati","Popeia buniana","Popeia fucata","Popeia nebularis","Popeia popeiorum","Popeia sabahi","Porthidium dunni","Porthidium nasutum","Porthidium yucatanicum","Protobothrops cornutus","Protobothrops jerdonii","Protobothrops mangshanensis","Protobothrops mucrosquamatus","Protobothrops sieversorum","Protobothrops trungkhanhensis","Protobothrops xiangchengensis","Pseudocerastes fieldi","Pseudocerastes persicus","Rhinocerophis itapetiningae","Sistrurus catenatus","Sistrurus miliarius","Trimeresurus andalasensis","Trimeresurus borneensis","Trimeresurus brongersmai","Trimeresurus flavomaculatus","Trimeresurus gracilis","Trimeresurus gramineus","Trimeresurus malabaricus","Trimeresurus puniceus","Trimeresurus schultzei","Trimeresurus strigatus","Trimeresurus wiroti","Tropidolaemus subannulatus","Tropidolaemus wagleri","Vipera ammodytes","Vipera anatolica","Vipera aspis","Vipera barani","Vipera berus","Vipera darevskii","Vipera dinniki","Vipera ebneri","Vipera eriwanensis","Vipera kaznakovi","Vipera latastei","Vipera lotievi","Vipera magnifica","Vipera monticola","Vipera orlovi","Vipera pontica","Vipera seoanei","Vipera transcaucasiana","Vipera ursinii","Viridovipera gumprechti","Viridovipera stejnegeri","Viridovipera truongsonensis","Viridovipera vogeli","Viridovipera yunnanensis","Lepidophyma flavimaculatum","Lepidophyma gaigeae","Lepidophyma lipetzi","Lepidophyma mayae","Lepidophyma micropholis","Lepidophyma occulor","Lepidophyma pajapanensis","Lepidophyma reticulatum","Lepidophyma smithii","Lepidophyma sylvaticum","Xantusia arizonae","Xantusia bezyi","Xantusia extorris","Xantusia gracilis","Xantusia henshawi","Xantusia riversiana","Xantusia sanchezi","Xantusia vigilis","Achalinus ater","Achalinus formosanus","Achalinus meiguensis","Achalinus niger","Achalinus rufescens","Achalinus spinalis","Achalinus werneri","Fimbrios klossi","Stoliczkia borneensis","Xenodermus javanicus","Xylophis captaini","Xylophis perroteti","Xenopeltis hainanensis","Xenopeltis unicolor","Xenosaurus grandis","Xenosaurus newmanorum","Xenosaurus penai","Xenosaurus platyceps","Xenosaurus rectocollaris","Carettochelys insculpta","Acanthochelys macrocephala","Acanthochelys pallidipectoris","Acanthochelys radiolata","Acanthochelys spixii","Chelodina mccordi","Chelodina novaeguineae","Chelodina oblonga","Chelodina parkeri","Chelodina pritchardi","Chelodina reimanni","Elseya bellii","Elseya branderhorsti","Elseya novaeguineae","Elusor macrurus","Emydura subglobosa","Hydromedusa maximiliani","Mesoclemmys dahli","Mesoclemmys hogei","Mesoclemmys vanderhaegei","Mesoclemmys zuliae","Pseudemydura umbrina","Rheodytes leukops","Rhinemys rufipes","Caretta caretta","Chelonia mydas","Eretmochelys imbricata","Lepidochelys kempii","Lepidochelys olivacea","Chelydra rossignonii","Chelydra serpentina","Macrochelys temminckii","Dermatemys mawii","Dermochelys coriacea","Actinemys marmorata","Chrysemys picta","Clemmys guttata","Emydoidea blandingii","Emys orbicularis","Glyptemys insculpta","Glyptemys muhlenbergii","Graptemys barbouri","Graptemys caglei","Graptemys ernsti","Graptemys flavimaculata","Graptemys geographica","Graptemys gibbonsi","Graptemys nigrinoda","Graptemys oculifera","Graptemys ouachitensis","Graptemys pearlensis","Graptemys pseudogeographica","Graptemys pulchra","Graptemys versa","Malaclemys terrapin","Pseudemys alabamensis","Pseudemys concinna","Pseudemys gorzugi","Pseudemys nelsoni","Pseudemys peninsularis","Pseudemys rubriventris","Pseudemys texana","Terrapene carolina","Terrapene coahuila","Terrapene ornata","Trachemys adiutrix","Trachemys decorata","Trachemys gaigeae","Trachemys ornata","Trachemys scripta","Trachemys stejnegeri","Trachemys taylori","Trachemys terrapen","Trachemys yaquia","Batagur baska","Batagur borneoensis","Batagur dhongoka","Batagur kachuga","Batagur trivittata","Cuora amboinensis","Cuora aurocapitata","Cuora flavomarginata","Cuora galbinifrons","Cuora mccordi","Cuora mouhotii","Cuora pani","Cuora trifasciata","Cuora yunnanensis","Cuora zhoui","Cyclemys dentata","Geoclemys hamiltonii","Geoemyda japonica","Geoemyda spengleri","Hardella thurjii","Heosemys annandalii","Heosemys depressa","Heosemys grandis","Heosemys spinosa","Leucocephalon yuwonoi","Malayemys subtrijuga","Mauremys annamensis","Mauremys japonica","Mauremys mutica","Mauremys nigricans","Mauremys reevesii","Mauremys sinensis","Melanochelys tricarinata","Melanochelys trijuga","Morenia ocellata","Morenia petersi","Notochelys platynota","Orlitia borneensis","Pangshura smithii","Pangshura sylhetensis","Pangshura tecta","Pangshura tentoria","Rhinoclemmys annulata","Rhinoclemmys areolata","Rhinoclemmys funerea","Rhinoclemmys nasuta","Rhinoclemmys rubida","Sacalia bealei","Sacalia quadriocellata","Siebenrockiella crassicollis","Siebenrockiella leytensis","Vijayachelys silvatica","Claudius angustatus","Kinosternon acutum","Kinosternon angustipons","Kinosternon arizonense","Kinosternon baurii","Kinosternon chimalhuaca","Kinosternon creaseri","Kinosternon dunni","Kinosternon flavescens","Kinosternon herrerai","Kinosternon hirtipes","Kinosternon integrum","Kinosternon sonoriense","Kinosternon subrubrum","Staurotypus salvinii","Staurotypus triporcatus","Sternotherus carinatus","Sternotherus depressus","Sternotherus minor","Sternotherus odoratus","Pelusios broadleyi","Pelusios castanoides","Pelusios rhodesianus","Pelusios subniger","Platysternon megacephalum","Erymnochelys madagascariensis","Peltocephalus dumerilianus","Podocnemis erythrocephala","Podocnemis expansa","Podocnemis lewyana","Podocnemis sextuberculata","Podocnemis unifilis","Astrochelys radiata","Astrochelys yniphora","Centrochelys sulcata","Chelonoidis chilensis","Chelonoidis denticulata","Chelonoidis nigra","Geochelone elegans","Geochelone gigantea","Geochelone platynota","Gopherus agassizii","Gopherus berlandieri","Gopherus flavomarginatus","Gopherus polyphemus","Homopus signatus","Homopus solus","Indotestudo elongata","Indotestudo forstenii","Indotestudo travancorica","Kinixys homeana","Kinixys natalensis","Malacochersus tornieri","Manouria emys","Manouria impressa","Psammobates geometricus","Pyxis arachnoides","Pyxis planicauda","Testudo graeca","Testudo hermanni","Testudo horsfieldii","Testudo kleinmanni","Testudo marginata","Amyda cartilaginea","Apalone ferox","Apalone mutica","Apalone spinifera","Chitra chitra","Chitra indica","Cyclanorbis elegans","Cyclanorbis senegalensis","Cycloderma frenatum","Dogania subplana","Lissemys punctata","Nilssonia formosa","Nilssonia gangetica","Nilssonia hurum","Nilssonia leithii","Nilssonia nigricans","Palea steindachneri","Pelochelys bibroni","Pelochelys cantorii","Pelodiscus sinensis","Rafetus euphraticus","Rafetus swinhoei"];
incrementProgress();
incrementProgress();
classdata[2].genusdata=[{"genus":"Alligator","family-order":0,"genus-order":"0","firstspecies":0,"lastspecies":1,"family":"ALLIGATORIDAE","order":"CROCODYLIA","threatenedcount":1,"healthycount":1},{"genus":"Caiman","family-order":0,"genus-order":"1","firstspecies":2,"lastspecies":4,"family":"ALLIGATORIDAE","order":"CROCODYLIA","threatenedcount":0,"healthycount":3},{"genus":"Melanosuchus","family-order":0,"genus-order":"2","firstspecies":5,"lastspecies":5,"family":"ALLIGATORIDAE","order":"CROCODYLIA","threatenedcount":1,"healthycount":0},{"genus":"Paleosuchus","family-order":0,"genus-order":"3","firstspecies":6,"lastspecies":7,"family":"ALLIGATORIDAE","order":"CROCODYLIA","threatenedcount":0,"healthycount":2},{"genus":"Crocodylus","family-order":1,"genus-order":"4","firstspecies":8,"lastspecies":18,"family":"CROCODYLIDAE","order":"CROCODYLIA","threatenedcount":6,"healthycount":5},{"genus":"Osteolaemus","family-order":1,"genus-order":"5","firstspecies":19,"lastspecies":19,"family":"CROCODYLIDAE","order":"CROCODYLIA","threatenedcount":1,"healthycount":0},{"genus":"Tomistoma","family-order":1,"genus-order":"6","firstspecies":20,"lastspecies":20,"family":"CROCODYLIDAE","order":"CROCODYLIA","threatenedcount":1,"healthycount":0},{"genus":"Gavialis","family-order":2,"genus-order":"7","firstspecies":21,"lastspecies":21,"family":"GAVIALIDAE","order":"CROCODYLIA","threatenedcount":1,"healthycount":0},{"genus":"Sphenodon","family-order":3,"genus-order":"8","firstspecies":22,"lastspecies":23,"family":"SPHENODONTIDAE","order":"RHYNCHOCEPHALIA","threatenedcount":1,"healthycount":1},{"genus":"Acrochordus","family-order":4,"genus-order":"9","firstspecies":24,"lastspecies":26,"family":"ACROCHORDIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":3},{"genus":"Acanthocercus","family-order":5,"genus-order":"10","firstspecies":27,"lastspecies":31,"family":"AGAMIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":5},{"genus":"Acanthosaura","family-order":5,"genus-order":"11","firstspecies":32,"lastspecies":32,"family":"AGAMIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Agama","family-order":5,"genus-order":"12","firstspecies":33,"lastspecies":45,"family":"AGAMIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":13},{"genus":"Amphibolurus","family-order":5,"genus-order":"13","firstspecies":46,"lastspecies":46,"family":"AGAMIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Aphaniotis","family-order":5,"genus-order":"14","firstspecies":47,"lastspecies":47,"family":"AGAMIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Bronchocela","family-order":5,"genus-order":"15","firstspecies":48,"lastspecies":49,"family":"AGAMIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":1},{"genus":"Calotes","family-order":5,"genus-order":"16","firstspecies":50,"lastspecies":55,"family":"AGAMIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":5},{"genus":"Ceratophora","family-order":5,"genus-order":"17","firstspecies":56,"lastspecies":57,"family":"AGAMIDAE","order":"SQUAMATA","threatenedcount":2,"healthycount":0},{"genus":"Chlamydosaurus","family-order":5,"genus-order":"18","firstspecies":58,"lastspecies":58,"family":"AGAMIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Cophotis","family-order":5,"genus-order":"19","firstspecies":59,"lastspecies":59,"family":"AGAMIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":0},{"genus":"Ctenophorus","family-order":5,"genus-order":"20","firstspecies":60,"lastspecies":64,"family":"AGAMIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":4},{"genus":"Diporiphora","family-order":5,"genus-order":"21","firstspecies":65,"lastspecies":67,"family":"AGAMIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":3},{"genus":"Draco","family-order":5,"genus-order":"22","firstspecies":68,"lastspecies":80,"family":"AGAMIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":12},{"genus":"Gonocephalus","family-order":5,"genus-order":"23","firstspecies":81,"lastspecies":81,"family":"AGAMIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Hydrosaurus","family-order":5,"genus-order":"24","firstspecies":82,"lastspecies":82,"family":"AGAMIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":0},{"genus":"Hypsilurus","family-order":5,"genus-order":"25","firstspecies":83,"lastspecies":86,"family":"AGAMIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":3},{"genus":"Japalura","family-order":5,"genus-order":"26","firstspecies":87,"lastspecies":90,"family":"AGAMIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":4},{"genus":"Lophognathus","family-order":5,"genus-order":"27","firstspecies":91,"lastspecies":91,"family":"AGAMIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Lyriocephalus","family-order":5,"genus-order":"28","firstspecies":92,"lastspecies":92,"family":"AGAMIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":0},{"genus":"Otocryptis","family-order":5,"genus-order":"29","firstspecies":93,"lastspecies":93,"family":"AGAMIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":0},{"genus":"Paralaudakia","family-order":5,"genus-order":"30","firstspecies":94,"lastspecies":96,"family":"AGAMIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":3},{"genus":"Phrynocephalus","family-order":5,"genus-order":"31","firstspecies":97,"lastspecies":110,"family":"AGAMIDAE","order":"SQUAMATA","threatenedcount":4,"healthycount":10},{"genus":"Pogona","family-order":5,"genus-order":"32","firstspecies":111,"lastspecies":111,"family":"AGAMIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Psammophilus","family-order":5,"genus-order":"33","firstspecies":112,"lastspecies":113,"family":"AGAMIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":2},{"genus":"Pseudocalotes","family-order":5,"genus-order":"34","firstspecies":114,"lastspecies":114,"family":"AGAMIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Rankinia","family-order":5,"genus-order":"35","firstspecies":115,"lastspecies":115,"family":"AGAMIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Saara","family-order":5,"genus-order":"36","firstspecies":116,"lastspecies":116,"family":"AGAMIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Salea","family-order":5,"genus-order":"37","firstspecies":117,"lastspecies":118,"family":"AGAMIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":2},{"genus":"Sitana","family-order":5,"genus-order":"38","firstspecies":119,"lastspecies":119,"family":"AGAMIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Stellagama","family-order":5,"genus-order":"39","firstspecies":120,"lastspecies":120,"family":"AGAMIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Trapelus","family-order":5,"genus-order":"40","firstspecies":121,"lastspecies":127,"family":"AGAMIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":6},{"genus":"Tympanocryptis","family-order":5,"genus-order":"41","firstspecies":128,"lastspecies":128,"family":"AGAMIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":0},{"genus":"Uromastyx","family-order":5,"genus-order":"42","firstspecies":129,"lastspecies":136,"family":"AGAMIDAE","order":"SQUAMATA","threatenedcount":5,"healthycount":3},{"genus":"Amphisbaena","family-order":6,"genus-order":"43","firstspecies":137,"lastspecies":142,"family":"AMPHISBAENIDAE","order":"SQUAMATA","threatenedcount":2,"healthycount":4},{"genus":"Blanus","family-order":6,"genus-order":"44","firstspecies":143,"lastspecies":146,"family":"AMPHISBAENIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":4},{"genus":"Cynisca","family-order":6,"genus-order":"45","firstspecies":147,"lastspecies":154,"family":"AMPHISBAENIDAE","order":"SQUAMATA","threatenedcount":5,"healthycount":3},{"genus":"Loveridgea","family-order":6,"genus-order":"46","firstspecies":155,"lastspecies":155,"family":"AMPHISBAENIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Monopeltis","family-order":6,"genus-order":"47","firstspecies":156,"lastspecies":156,"family":"AMPHISBAENIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Zygaspis","family-order":6,"genus-order":"48","firstspecies":157,"lastspecies":157,"family":"AMPHISBAENIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Abronia","family-order":7,"genus-order":"49","firstspecies":158,"lastspecies":175,"family":"ANGUIDAE","order":"SQUAMATA","threatenedcount":16,"healthycount":2},{"genus":"Anguis","family-order":7,"genus-order":"50","firstspecies":176,"lastspecies":176,"family":"ANGUIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":0},{"genus":"Barisia","family-order":7,"genus-order":"51","firstspecies":177,"lastspecies":179,"family":"ANGUIDAE","order":"SQUAMATA","threatenedcount":2,"healthycount":1},{"genus":"Celestus","family-order":7,"genus-order":"52","firstspecies":180,"lastspecies":191,"family":"ANGUIDAE","order":"SQUAMATA","threatenedcount":6,"healthycount":6},{"genus":"Diploglossus","family-order":7,"genus-order":"53","firstspecies":192,"lastspecies":194,"family":"ANGUIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":2},{"genus":"Elgaria","family-order":7,"genus-order":"54","firstspecies":195,"lastspecies":202,"family":"ANGUIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":7},{"genus":"Gerrhonotus","family-order":7,"genus-order":"55","firstspecies":203,"lastspecies":207,"family":"ANGUIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":4},{"genus":"Hyalosaurus","family-order":7,"genus-order":"56","firstspecies":208,"lastspecies":208,"family":"ANGUIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Mesaspis","family-order":7,"genus-order":"57","firstspecies":209,"lastspecies":213,"family":"ANGUIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":4},{"genus":"Ophisaurus","family-order":7,"genus-order":"58","firstspecies":214,"lastspecies":220,"family":"ANGUIDAE","order":"SQUAMATA","threatenedcount":2,"healthycount":5},{"genus":"Anniella","family-order":8,"genus-order":"59","firstspecies":221,"lastspecies":222,"family":"ANNIELLIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":1},{"genus":"Liotyphlops","family-order":9,"genus-order":"60","firstspecies":223,"lastspecies":224,"family":"ANOMALEPIDIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":2},{"genus":"Anomochilus","family-order":10,"genus-order":"61","firstspecies":225,"lastspecies":225,"family":"ANOMOCHILIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Amblyodipsas","family-order":11,"genus-order":"62","firstspecies":226,"lastspecies":228,"family":"ATRACTASPIDIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":3},{"genus":"Aparallactus","family-order":11,"genus-order":"63","firstspecies":229,"lastspecies":231,"family":"ATRACTASPIDIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":2},{"genus":"Atractaspis","family-order":11,"genus-order":"64","firstspecies":232,"lastspecies":237,"family":"ATRACTASPIDIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":6},{"genus":"Homoroselaps","family-order":11,"genus-order":"65","firstspecies":238,"lastspecies":238,"family":"ATRACTASPIDIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":0},{"genus":"Micrelaps","family-order":11,"genus-order":"66","firstspecies":239,"lastspecies":240,"family":"ATRACTASPIDIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":2},{"genus":"Polemon","family-order":11,"genus-order":"67","firstspecies":241,"lastspecies":243,"family":"ATRACTASPIDIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":3},{"genus":"Bipes","family-order":12,"genus-order":"68","firstspecies":244,"lastspecies":246,"family":"BIPEDIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":3},{"genus":"Acrantophis","family-order":13,"genus-order":"69","firstspecies":247,"lastspecies":248,"family":"BOIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":2},{"genus":"Candoia","family-order":13,"genus-order":"70","firstspecies":249,"lastspecies":250,"family":"BOIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":2},{"genus":"Charina","family-order":13,"genus-order":"71","firstspecies":251,"lastspecies":251,"family":"BOIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Corallus","family-order":13,"genus-order":"72","firstspecies":252,"lastspecies":252,"family":"BOIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":0},{"genus":"Epicrates","family-order":13,"genus-order":"73","firstspecies":253,"lastspecies":256,"family":"BOIDAE","order":"SQUAMATA","threatenedcount":3,"healthycount":1},{"genus":"Eryx","family-order":13,"genus-order":"74","firstspecies":257,"lastspecies":257,"family":"BOIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Eunectes","family-order":13,"genus-order":"75","firstspecies":258,"lastspecies":258,"family":"BOIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Lichanura","family-order":13,"genus-order":"76","firstspecies":259,"lastspecies":259,"family":"BOIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Sanzinia","family-order":13,"genus-order":"77","firstspecies":260,"lastspecies":260,"family":"BOIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Casarea","family-order":14,"genus-order":"78","firstspecies":261,"lastspecies":261,"family":"BOLYERIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":0},{"genus":"Calamaria","family-order":15,"genus-order":"79","firstspecies":262,"lastspecies":289,"family":"CALAMARIIDAE","order":"SQUAMATA","threatenedcount":3,"healthycount":25},{"genus":"Collorhabdium","family-order":15,"genus-order":"80","firstspecies":290,"lastspecies":290,"family":"CALAMARIIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Macrocalamus","family-order":15,"genus-order":"81","firstspecies":291,"lastspecies":297,"family":"CALAMARIIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":7},{"genus":"Pseudorabdion","family-order":15,"genus-order":"82","firstspecies":298,"lastspecies":307,"family":"CALAMARIIDAE","order":"SQUAMATA","threatenedcount":3,"healthycount":7},{"genus":"Nephrurus","family-order":16,"genus-order":"83","firstspecies":308,"lastspecies":311,"family":"CARPHODACTYLIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":3},{"genus":"Phyllurus","family-order":16,"genus-order":"84","firstspecies":312,"lastspecies":313,"family":"CARPHODACTYLIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":1},{"genus":"Saltuarius","family-order":16,"genus-order":"85","firstspecies":314,"lastspecies":314,"family":"CARPHODACTYLIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Uvidicolus","family-order":16,"genus-order":"86","firstspecies":315,"lastspecies":315,"family":"CARPHODACTYLIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":0},{"genus":"Archaius","family-order":17,"genus-order":"87","firstspecies":316,"lastspecies":316,"family":"CHAMAELEONIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":0},{"genus":"Bradypodion","family-order":17,"genus-order":"88","firstspecies":317,"lastspecies":324,"family":"CHAMAELEONIDAE","order":"SQUAMATA","threatenedcount":4,"healthycount":4},{"genus":"Brookesia","family-order":17,"genus-order":"89","firstspecies":325,"lastspecies":350,"family":"CHAMAELEONIDAE","order":"SQUAMATA","threatenedcount":21,"healthycount":5},{"genus":"Calumma","family-order":17,"genus-order":"90","firstspecies":351,"lastspecies":379,"family":"CHAMAELEONIDAE","order":"SQUAMATA","threatenedcount":22,"healthycount":7},{"genus":"Chamaeleo","family-order":17,"genus-order":"91","firstspecies":380,"lastspecies":386,"family":"CHAMAELEONIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":6},{"genus":"Furcifer","family-order":17,"genus-order":"92","firstspecies":387,"lastspecies":405,"family":"CHAMAELEONIDAE","order":"SQUAMATA","threatenedcount":10,"healthycount":9},{"genus":"Rhampholeon","family-order":17,"genus-order":"93","firstspecies":406,"lastspecies":408,"family":"CHAMAELEONIDAE","order":"SQUAMATA","threatenedcount":2,"healthycount":1},{"genus":"Trioceros","family-order":17,"genus-order":"94","firstspecies":409,"lastspecies":416,"family":"CHAMAELEONIDAE","order":"SQUAMATA","threatenedcount":4,"healthycount":4},{"genus":"Ahaetulla","family-order":18,"genus-order":"95","firstspecies":417,"lastspecies":423,"family":"COLUBRIDAE","order":"SQUAMATA","threatenedcount":2,"healthycount":5},{"genus":"Arizona","family-order":18,"genus-order":"96","firstspecies":424,"lastspecies":425,"family":"COLUBRIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":2},{"genus":"Bamanophis","family-order":18,"genus-order":"97","firstspecies":426,"lastspecies":426,"family":"COLUBRIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Bogertophis","family-order":18,"genus-order":"98","firstspecies":427,"lastspecies":428,"family":"COLUBRIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":2},{"genus":"Boiga","family-order":18,"genus-order":"99","firstspecies":429,"lastspecies":442,"family":"COLUBRIDAE","order":"SQUAMATA","threatenedcount":2,"healthycount":12},{"genus":"Cemophora","family-order":18,"genus-order":"100","firstspecies":443,"lastspecies":443,"family":"COLUBRIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Chilomeniscus","family-order":18,"genus-order":"101","firstspecies":444,"lastspecies":445,"family":"COLUBRIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":2},{"genus":"Chionactis","family-order":18,"genus-order":"102","firstspecies":446,"lastspecies":447,"family":"COLUBRIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":2},{"genus":"Chironius","family-order":18,"genus-order":"103","firstspecies":448,"lastspecies":448,"family":"COLUBRIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":0},{"genus":"Chrysopelea","family-order":18,"genus-order":"104","firstspecies":449,"lastspecies":449,"family":"COLUBRIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Coelognathus","family-order":18,"genus-order":"105","firstspecies":450,"lastspecies":450,"family":"COLUBRIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Coluber","family-order":18,"genus-order":"106","firstspecies":451,"lastspecies":452,"family":"COLUBRIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":2},{"genus":"Conopsis","family-order":18,"genus-order":"107","firstspecies":453,"lastspecies":457,"family":"COLUBRIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":4},{"genus":"Coronella","family-order":18,"genus-order":"108","firstspecies":458,"lastspecies":459,"family":"COLUBRIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":2},{"genus":"Cyclocorus","family-order":18,"genus-order":"109","firstspecies":460,"lastspecies":461,"family":"COLUBRIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":2},{"genus":"Cyclophiops","family-order":18,"genus-order":"110","firstspecies":462,"lastspecies":462,"family":"COLUBRIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Dasypeltis","family-order":18,"genus-order":"111","firstspecies":463,"lastspecies":466,"family":"COLUBRIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":4},{"genus":"Dendrelaphis","family-order":18,"genus-order":"112","firstspecies":467,"lastspecies":483,"family":"COLUBRIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":17},{"genus":"Dendrophidion","family-order":18,"genus-order":"113","firstspecies":484,"lastspecies":485,"family":"COLUBRIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":2},{"genus":"Dipsadoboa","family-order":18,"genus-order":"114","firstspecies":486,"lastspecies":486,"family":"COLUBRIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Dolichophis","family-order":18,"genus-order":"115","firstspecies":487,"lastspecies":488,"family":"COLUBRIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":2},{"genus":"Drymarchon","family-order":18,"genus-order":"116","firstspecies":489,"lastspecies":491,"family":"COLUBRIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":3},{"genus":"Drymobius","family-order":18,"genus-order":"117","firstspecies":492,"lastspecies":494,"family":"COLUBRIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":3},{"genus":"Dryocalamus","family-order":18,"genus-order":"118","firstspecies":495,"lastspecies":498,"family":"COLUBRIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":3},{"genus":"Dryophiops","family-order":18,"genus-order":"119","firstspecies":499,"lastspecies":500,"family":"COLUBRIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":1},{"genus":"Eirenis","family-order":18,"genus-order":"120","firstspecies":501,"lastspecies":514,"family":"COLUBRIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":14},{"genus":"Elachistodon","family-order":18,"genus-order":"121","firstspecies":515,"lastspecies":515,"family":"COLUBRIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Elaphe","family-order":18,"genus-order":"122","firstspecies":516,"lastspecies":517,"family":"COLUBRIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":1},{"genus":"Elapoidis","family-order":18,"genus-order":"123","firstspecies":518,"lastspecies":518,"family":"COLUBRIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Euprepiophis","family-order":18,"genus-order":"124","firstspecies":519,"lastspecies":520,"family":"COLUBRIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":1},{"genus":"Ficimia","family-order":18,"genus-order":"125","firstspecies":521,"lastspecies":523,"family":"COLUBRIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":2},{"genus":"Gongylosoma","family-order":18,"genus-order":"126","firstspecies":524,"lastspecies":527,"family":"COLUBRIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":3},{"genus":"Gonyophis","family-order":18,"genus-order":"127","firstspecies":528,"lastspecies":528,"family":"COLUBRIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Gonyosoma","family-order":18,"genus-order":"128","firstspecies":529,"lastspecies":529,"family":"COLUBRIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Gyalopion","family-order":18,"genus-order":"129","firstspecies":530,"lastspecies":531,"family":"COLUBRIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":2},{"genus":"Hemerophis","family-order":18,"genus-order":"130","firstspecies":532,"lastspecies":532,"family":"COLUBRIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":0},{"genus":"Hemorrhois","family-order":18,"genus-order":"131","firstspecies":533,"lastspecies":534,"family":"COLUBRIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":2},{"genus":"Hierophis","family-order":18,"genus-order":"132","firstspecies":535,"lastspecies":537,"family":"COLUBRIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":2},{"genus":"Lampropeltis","family-order":18,"genus-order":"133","firstspecies":538,"lastspecies":545,"family":"COLUBRIDAE","order":"SQUAMATA","threatenedcount":2,"healthycount":6},{"genus":"Leptodrymus","family-order":18,"genus-order":"134","firstspecies":546,"lastspecies":546,"family":"COLUBRIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Leptophis","family-order":18,"genus-order":"135","firstspecies":547,"lastspecies":550,"family":"COLUBRIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":3},{"genus":"Lepturophis","family-order":18,"genus-order":"136","firstspecies":551,"lastspecies":551,"family":"COLUBRIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Liochlorophis","family-order":18,"genus-order":"137","firstspecies":552,"lastspecies":552,"family":"COLUBRIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Liopeltis","family-order":18,"genus-order":"138","firstspecies":553,"lastspecies":557,"family":"COLUBRIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":4},{"genus":"Lycodon","family-order":18,"genus-order":"139","firstspecies":558,"lastspecies":577,"family":"COLUBRIDAE","order":"SQUAMATA","threatenedcount":2,"healthycount":18},{"genus":"Lytorhynchus","family-order":18,"genus-order":"140","firstspecies":578,"lastspecies":580,"family":"COLUBRIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":3},{"genus":"Macroprotodon","family-order":18,"genus-order":"141","firstspecies":581,"lastspecies":582,"family":"COLUBRIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":1},{"genus":"Maculophis","family-order":18,"genus-order":"142","firstspecies":583,"lastspecies":583,"family":"COLUBRIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Masticophis","family-order":18,"genus-order":"143","firstspecies":584,"lastspecies":591,"family":"COLUBRIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":7},{"genus":"Mastigodryas","family-order":18,"genus-order":"144","firstspecies":592,"lastspecies":595,"family":"COLUBRIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":4},{"genus":"Meizodon","family-order":18,"genus-order":"145","firstspecies":596,"lastspecies":596,"family":"COLUBRIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Oligodon","family-order":18,"genus-order":"146","firstspecies":597,"lastspecies":639,"family":"COLUBRIDAE","order":"SQUAMATA","threatenedcount":10,"healthycount":33},{"genus":"Oocatochus","family-order":18,"genus-order":"147","firstspecies":640,"lastspecies":640,"family":"COLUBRIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Opheodrys","family-order":18,"genus-order":"148","firstspecies":641,"lastspecies":641,"family":"COLUBRIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Oreocalamus","family-order":18,"genus-order":"149","firstspecies":642,"lastspecies":642,"family":"COLUBRIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Orthriophis","family-order":18,"genus-order":"150","firstspecies":643,"lastspecies":643,"family":"COLUBRIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":0},{"genus":"Oxybelis","family-order":18,"genus-order":"151","firstspecies":644,"lastspecies":644,"family":"COLUBRIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":0},{"genus":"Pantherophis","family-order":18,"genus-order":"152","firstspecies":645,"lastspecies":650,"family":"COLUBRIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":5},{"genus":"Philothamnus","family-order":18,"genus-order":"153","firstspecies":651,"lastspecies":651,"family":"COLUBRIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Phyllorhynchus","family-order":18,"genus-order":"154","firstspecies":652,"lastspecies":653,"family":"COLUBRIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":2},{"genus":"Pituophis","family-order":18,"genus-order":"155","firstspecies":654,"lastspecies":660,"family":"COLUBRIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":6},{"genus":"Platyceps","family-order":18,"genus-order":"156","firstspecies":661,"lastspecies":667,"family":"COLUBRIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":6},{"genus":"Pseudelaphe","family-order":18,"genus-order":"157","firstspecies":668,"lastspecies":668,"family":"COLUBRIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Pseudoficimia","family-order":18,"genus-order":"158","firstspecies":669,"lastspecies":669,"family":"COLUBRIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Pseustes","family-order":18,"genus-order":"159","firstspecies":670,"lastspecies":670,"family":"COLUBRIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Ptyas","family-order":18,"genus-order":"160","firstspecies":671,"lastspecies":673,"family":"COLUBRIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":3},{"genus":"Rhabdops","family-order":18,"genus-order":"161","firstspecies":674,"lastspecies":674,"family":"COLUBRIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Rhadinophis","family-order":18,"genus-order":"162","firstspecies":675,"lastspecies":675,"family":"COLUBRIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Rhinechis","family-order":18,"genus-order":"163","firstspecies":676,"lastspecies":676,"family":"COLUBRIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Rhinobothryum","family-order":18,"genus-order":"164","firstspecies":677,"lastspecies":677,"family":"COLUBRIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Rhinocheilus","family-order":18,"genus-order":"165","firstspecies":678,"lastspecies":678,"family":"COLUBRIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Rhynchocalamus","family-order":18,"genus-order":"166","firstspecies":679,"lastspecies":679,"family":"COLUBRIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Rhynchophis","family-order":18,"genus-order":"167","firstspecies":680,"lastspecies":680,"family":"COLUBRIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Salvadora","family-order":18,"genus-order":"168","firstspecies":681,"lastspecies":686,"family":"COLUBRIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":6},{"genus":"Scaphiodontophis","family-order":18,"genus-order":"169","firstspecies":687,"lastspecies":687,"family":"COLUBRIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Senticolis","family-order":18,"genus-order":"170","firstspecies":688,"lastspecies":688,"family":"COLUBRIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Sibynophis","family-order":18,"genus-order":"171","firstspecies":689,"lastspecies":692,"family":"COLUBRIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":4},{"genus":"Sonora","family-order":18,"genus-order":"172","firstspecies":693,"lastspecies":697,"family":"COLUBRIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":4},{"genus":"Spalerosophis","family-order":18,"genus-order":"173","firstspecies":698,"lastspecies":698,"family":"COLUBRIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Stegonotus","family-order":18,"genus-order":"174","firstspecies":699,"lastspecies":701,"family":"COLUBRIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":2},{"genus":"Stenorrhina","family-order":18,"genus-order":"175","firstspecies":702,"lastspecies":702,"family":"COLUBRIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Stilosoma","family-order":18,"genus-order":"176","firstspecies":703,"lastspecies":703,"family":"COLUBRIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":0},{"genus":"Symphimus","family-order":18,"genus-order":"177","firstspecies":704,"lastspecies":705,"family":"COLUBRIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":2},{"genus":"Tantilla","family-order":18,"genus-order":"178","firstspecies":706,"lastspecies":735,"family":"COLUBRIDAE","order":"SQUAMATA","threatenedcount":6,"healthycount":24},{"genus":"Tantillita","family-order":18,"genus-order":"179","firstspecies":736,"lastspecies":738,"family":"COLUBRIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":3},{"genus":"Telescopus","family-order":18,"genus-order":"180","firstspecies":739,"lastspecies":744,"family":"COLUBRIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":5},{"genus":"Tetralepis","family-order":18,"genus-order":"181","firstspecies":745,"lastspecies":745,"family":"COLUBRIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":0},{"genus":"Thelotornis","family-order":18,"genus-order":"182","firstspecies":746,"lastspecies":746,"family":"COLUBRIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Thrasops","family-order":18,"genus-order":"183","firstspecies":747,"lastspecies":747,"family":"COLUBRIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Trachischium","family-order":18,"genus-order":"184","firstspecies":748,"lastspecies":748,"family":"COLUBRIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Trimorphodon","family-order":18,"genus-order":"185","firstspecies":749,"lastspecies":751,"family":"COLUBRIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":3},{"genus":"Xenelaphis","family-order":18,"genus-order":"186","firstspecies":752,"lastspecies":753,"family":"COLUBRIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":2},{"genus":"Zamenis","family-order":18,"genus-order":"187","firstspecies":754,"lastspecies":756,"family":"COLUBRIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":3},{"genus":"Cordylus","family-order":19,"genus-order":"188","firstspecies":757,"lastspecies":767,"family":"CORDYLIDAE","order":"SQUAMATA","threatenedcount":9,"healthycount":2},{"genus":"Platysaurus","family-order":19,"genus-order":"189","firstspecies":768,"lastspecies":772,"family":"CORDYLIDAE","order":"SQUAMATA","threatenedcount":2,"healthycount":3},{"genus":"Basiliscus","family-order":20,"genus-order":"190","firstspecies":773,"lastspecies":773,"family":"CORYTOPHANIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Corytophanes","family-order":20,"genus-order":"191","firstspecies":774,"lastspecies":775,"family":"CORYTOPHANIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":2},{"genus":"Laemanctus","family-order":20,"genus-order":"192","firstspecies":776,"lastspecies":777,"family":"CORYTOPHANIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":2},{"genus":"Crotaphytus","family-order":21,"genus-order":"193","firstspecies":778,"lastspecies":786,"family":"CROTAPHYTIDAE","order":"SQUAMATA","threatenedcount":2,"healthycount":7},{"genus":"Gambelia","family-order":21,"genus-order":"194","firstspecies":787,"lastspecies":789,"family":"CROTAPHYTIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":2},{"genus":"Cylindrophis","family-order":22,"genus-order":"195","firstspecies":790,"lastspecies":790,"family":"CYLINDROPHIIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Anolis","family-order":23,"genus-order":"196","firstspecies":791,"lastspecies":861,"family":"DACTYLOIDAE","order":"SQUAMATA","threatenedcount":28,"healthycount":43},{"genus":"Anelytropsis","family-order":24,"genus-order":"197","firstspecies":862,"lastspecies":862,"family":"DIBAMIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Dibamus","family-order":24,"genus-order":"198","firstspecies":863,"lastspecies":863,"family":"DIBAMIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Bavayia","family-order":25,"genus-order":"199","firstspecies":864,"lastspecies":871,"family":"DIPLODACTYLIDAE","order":"SQUAMATA","threatenedcount":8,"healthycount":0},{"genus":"Diplodactylus","family-order":25,"genus-order":"200","firstspecies":872,"lastspecies":873,"family":"DIPLODACTYLIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":2},{"genus":"Eurydactylodes","family-order":25,"genus-order":"201","firstspecies":874,"lastspecies":877,"family":"DIPLODACTYLIDAE","order":"SQUAMATA","threatenedcount":4,"healthycount":0},{"genus":"Hoplodactylus","family-order":25,"genus-order":"202","firstspecies":878,"lastspecies":882,"family":"DIPLODACTYLIDAE","order":"SQUAMATA","threatenedcount":3,"healthycount":2},{"genus":"Naultinus","family-order":25,"genus-order":"203","firstspecies":883,"lastspecies":884,"family":"DIPLODACTYLIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":1},{"genus":"Rhacodactylus","family-order":25,"genus-order":"204","firstspecies":885,"lastspecies":890,"family":"DIPLODACTYLIDAE","order":"SQUAMATA","threatenedcount":4,"healthycount":2},{"genus":"Strophurus","family-order":25,"genus-order":"205","firstspecies":891,"lastspecies":894,"family":"DIPLODACTYLIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":3},{"genus":"Adelphicos","family-order":26,"genus-order":"206","firstspecies":895,"lastspecies":900,"family":"DIPSADIDAE","order":"SQUAMATA","threatenedcount":2,"healthycount":4},{"genus":"Alsophis","family-order":26,"genus-order":"207","firstspecies":901,"lastspecies":904,"family":"DIPSADIDAE","order":"SQUAMATA","threatenedcount":4,"healthycount":0},{"genus":"Amastridium","family-order":26,"genus-order":"208","firstspecies":905,"lastspecies":906,"family":"DIPSADIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":2},{"genus":"Apostolepis","family-order":26,"genus-order":"209","firstspecies":907,"lastspecies":908,"family":"DIPSADIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":1},{"genus":"Arrhyton","family-order":26,"genus-order":"210","firstspecies":909,"lastspecies":909,"family":"DIPSADIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Atractus","family-order":26,"genus-order":"211","firstspecies":910,"lastspecies":920,"family":"DIPSADIDAE","order":"SQUAMATA","threatenedcount":3,"healthycount":8},{"genus":"Calamodontophis","family-order":26,"genus-order":"212","firstspecies":921,"lastspecies":922,"family":"DIPSADIDAE","order":"SQUAMATA","threatenedcount":2,"healthycount":0},{"genus":"Caraiba","family-order":26,"genus-order":"213","firstspecies":923,"lastspecies":923,"family":"DIPSADIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Carphophis","family-order":26,"genus-order":"214","firstspecies":924,"lastspecies":925,"family":"DIPSADIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":2},{"genus":"Chapinophis","family-order":26,"genus-order":"215","firstspecies":926,"lastspecies":926,"family":"DIPSADIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":0},{"genus":"Chersodromus","family-order":26,"genus-order":"216","firstspecies":927,"lastspecies":928,"family":"DIPSADIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":1},{"genus":"Clelia","family-order":26,"genus-order":"217","firstspecies":929,"lastspecies":929,"family":"DIPSADIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Coniophanes","family-order":26,"genus-order":"218","firstspecies":930,"lastspecies":935,"family":"DIPSADIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":5},{"genus":"Conophis","family-order":26,"genus-order":"219","firstspecies":936,"lastspecies":937,"family":"DIPSADIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":2},{"genus":"Contia","family-order":26,"genus-order":"220","firstspecies":938,"lastspecies":938,"family":"DIPSADIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Crisantophis","family-order":26,"genus-order":"221","firstspecies":939,"lastspecies":939,"family":"DIPSADIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Diadophis","family-order":26,"genus-order":"222","firstspecies":940,"lastspecies":940,"family":"DIPSADIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Dipsas","family-order":26,"genus-order":"223","firstspecies":941,"lastspecies":950,"family":"DIPSADIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":10},{"genus":"Echinanthera","family-order":26,"genus-order":"224","firstspecies":951,"lastspecies":951,"family":"DIPSADIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Enulius","family-order":26,"genus-order":"225","firstspecies":952,"lastspecies":952,"family":"DIPSADIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":0},{"genus":"Eridiphas","family-order":26,"genus-order":"226","firstspecies":953,"lastspecies":953,"family":"DIPSADIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Erythrolamprus","family-order":26,"genus-order":"227","firstspecies":954,"lastspecies":955,"family":"DIPSADIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":2},{"genus":"Farancia","family-order":26,"genus-order":"228","firstspecies":956,"lastspecies":957,"family":"DIPSADIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":2},{"genus":"Geophis","family-order":26,"genus-order":"229","firstspecies":958,"lastspecies":978,"family":"DIPSADIDAE","order":"SQUAMATA","threatenedcount":3,"healthycount":18},{"genus":"Helicops","family-order":26,"genus-order":"230","firstspecies":979,"lastspecies":980,"family":"DIPSADIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":2},{"genus":"Heterodon","family-order":26,"genus-order":"231","firstspecies":981,"lastspecies":983,"family":"DIPSADIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":2},{"genus":"Hydromorphus","family-order":26,"genus-order":"232","firstspecies":984,"lastspecies":984,"family":"DIPSADIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Hydrops","family-order":26,"genus-order":"233","firstspecies":985,"lastspecies":986,"family":"DIPSADIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":2},{"genus":"Hypsiglena","family-order":26,"genus-order":"234","firstspecies":987,"lastspecies":987,"family":"DIPSADIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Hypsirhynchus","family-order":26,"genus-order":"235","firstspecies":988,"lastspecies":988,"family":"DIPSADIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":0},{"genus":"Imantodes","family-order":26,"genus-order":"236","firstspecies":989,"lastspecies":990,"family":"DIPSADIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":2},{"genus":"Leptodeira","family-order":26,"genus-order":"237","firstspecies":991,"lastspecies":998,"family":"DIPSADIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":8},{"genus":"Liophis","family-order":26,"genus-order":"238","firstspecies":999,"lastspecies":1009,"family":"DIPSADIDAE","order":"SQUAMATA","threatenedcount":5,"healthycount":6},{"genus":"Lygophis","family-order":26,"genus-order":"239","firstspecies":1010,"lastspecies":1011,"family":"DIPSADIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":2},{"genus":"Lystrophis","family-order":26,"genus-order":"240","firstspecies":1012,"lastspecies":1013,"family":"DIPSADIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":2},{"genus":"Manolepis","family-order":26,"genus-order":"241","firstspecies":1014,"lastspecies":1014,"family":"DIPSADIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Mussurana","family-order":26,"genus-order":"242","firstspecies":1015,"lastspecies":1015,"family":"DIPSADIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Ninia","family-order":26,"genus-order":"243","firstspecies":1016,"lastspecies":1020,"family":"DIPSADIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":4},{"genus":"Nothopsis","family-order":26,"genus-order":"244","firstspecies":1021,"lastspecies":1021,"family":"DIPSADIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Omoadiphas","family-order":26,"genus-order":"245","firstspecies":1022,"lastspecies":1023,"family":"DIPSADIDAE","order":"SQUAMATA","threatenedcount":2,"healthycount":0},{"genus":"Oxyrhopus","family-order":26,"genus-order":"246","firstspecies":1024,"lastspecies":1026,"family":"DIPSADIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":3},{"genus":"Phalotris","family-order":26,"genus-order":"247","firstspecies":1027,"lastspecies":1028,"family":"DIPSADIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":2},{"genus":"Philodryas","family-order":26,"genus-order":"248","firstspecies":1029,"lastspecies":1033,"family":"DIPSADIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":4},{"genus":"Pliocercus","family-order":26,"genus-order":"249","firstspecies":1034,"lastspecies":1036,"family":"DIPSADIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":3},{"genus":"Pseudalsophis","family-order":26,"genus-order":"250","firstspecies":1037,"lastspecies":1037,"family":"DIPSADIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Pseudoboa","family-order":26,"genus-order":"251","firstspecies":1038,"lastspecies":1038,"family":"DIPSADIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Pseudoeryx","family-order":26,"genus-order":"252","firstspecies":1039,"lastspecies":1039,"family":"DIPSADIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Pseudoleptodeira","family-order":26,"genus-order":"253","firstspecies":1040,"lastspecies":1040,"family":"DIPSADIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Psomophis","family-order":26,"genus-order":"254","firstspecies":1041,"lastspecies":1041,"family":"DIPSADIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Rachidelus","family-order":26,"genus-order":"255","firstspecies":1042,"lastspecies":1042,"family":"DIPSADIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Rhadinaea","family-order":26,"genus-order":"256","firstspecies":1043,"lastspecies":1053,"family":"DIPSADIDAE","order":"SQUAMATA","threatenedcount":5,"healthycount":6},{"genus":"Rhadinella","family-order":26,"genus-order":"257","firstspecies":1054,"lastspecies":1060,"family":"DIPSADIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":6},{"genus":"Sibon","family-order":26,"genus-order":"258","firstspecies":1061,"lastspecies":1065,"family":"DIPSADIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":5},{"genus":"Sibynomorphus","family-order":26,"genus-order":"259","firstspecies":1066,"lastspecies":1066,"family":"DIPSADIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Siphlophis","family-order":26,"genus-order":"260","firstspecies":1067,"lastspecies":1070,"family":"DIPSADIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":4},{"genus":"Tachymenis","family-order":26,"genus-order":"261","firstspecies":1071,"lastspecies":1071,"family":"DIPSADIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Taeniophallus","family-order":26,"genus-order":"262","firstspecies":1072,"lastspecies":1072,"family":"DIPSADIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Tantalophis","family-order":26,"genus-order":"263","firstspecies":1073,"lastspecies":1073,"family":"DIPSADIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":0},{"genus":"Thamnodynastes","family-order":26,"genus-order":"264","firstspecies":1074,"lastspecies":1077,"family":"DIPSADIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":4},{"genus":"Thermophis","family-order":26,"genus-order":"265","firstspecies":1078,"lastspecies":1078,"family":"DIPSADIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":0},{"genus":"Trimetopon","family-order":26,"genus-order":"266","firstspecies":1079,"lastspecies":1083,"family":"DIPSADIDAE","order":"SQUAMATA","threatenedcount":3,"healthycount":2},{"genus":"Tropidodipsas","family-order":26,"genus-order":"267","firstspecies":1084,"lastspecies":1087,"family":"DIPSADIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":4},{"genus":"Tropidodryas","family-order":26,"genus-order":"268","firstspecies":1088,"lastspecies":1088,"family":"DIPSADIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Urotheca","family-order":26,"genus-order":"269","firstspecies":1089,"lastspecies":1089,"family":"DIPSADIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Xenodon","family-order":26,"genus-order":"270","firstspecies":1090,"lastspecies":1090,"family":"DIPSADIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Xenopholis","family-order":26,"genus-order":"271","firstspecies":1091,"lastspecies":1091,"family":"DIPSADIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Acalyptophis","family-order":27,"genus-order":"272","firstspecies":1092,"lastspecies":1092,"family":"ELAPIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Acanthophis","family-order":27,"genus-order":"273","firstspecies":1093,"lastspecies":1093,"family":"ELAPIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Aipysurus","family-order":27,"genus-order":"274","firstspecies":1094,"lastspecies":1099,"family":"ELAPIDAE","order":"SQUAMATA","threatenedcount":3,"healthycount":3},{"genus":"Aspidomorphus","family-order":27,"genus-order":"275","firstspecies":1100,"lastspecies":1100,"family":"ELAPIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Astrotia","family-order":27,"genus-order":"276","firstspecies":1101,"lastspecies":1101,"family":"ELAPIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Austrelaps","family-order":27,"genus-order":"277","firstspecies":1102,"lastspecies":1102,"family":"ELAPIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":0},{"genus":"Bungarus","family-order":27,"genus-order":"278","firstspecies":1103,"lastspecies":1110,"family":"ELAPIDAE","order":"SQUAMATA","threatenedcount":2,"healthycount":6},{"genus":"Calliophis","family-order":27,"genus-order":"279","firstspecies":1111,"lastspecies":1115,"family":"ELAPIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":5},{"genus":"Cryptophis","family-order":27,"genus-order":"280","firstspecies":1116,"lastspecies":1116,"family":"ELAPIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Dendroaspis","family-order":27,"genus-order":"281","firstspecies":1117,"lastspecies":1118,"family":"ELAPIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":2},{"genus":"Denisonia","family-order":27,"genus-order":"282","firstspecies":1119,"lastspecies":1119,"family":"ELAPIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":0},{"genus":"Drysdalia","family-order":27,"genus-order":"283","firstspecies":1120,"lastspecies":1121,"family":"ELAPIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":2},{"genus":"Echiopsis","family-order":27,"genus-order":"284","firstspecies":1122,"lastspecies":1123,"family":"ELAPIDAE","order":"SQUAMATA","threatenedcount":2,"healthycount":0},{"genus":"Elapognathus","family-order":27,"genus-order":"285","firstspecies":1124,"lastspecies":1124,"family":"ELAPIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":0},{"genus":"Elapsoidea","family-order":27,"genus-order":"286","firstspecies":1125,"lastspecies":1127,"family":"ELAPIDAE","order":"SQUAMATA","threatenedcount":2,"healthycount":1},{"genus":"Emydocephalus","family-order":27,"genus-order":"287","firstspecies":1128,"lastspecies":1129,"family":"ELAPIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":2},{"genus":"Enhydrina","family-order":27,"genus-order":"288","firstspecies":1130,"lastspecies":1130,"family":"ELAPIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Ephalophis","family-order":27,"genus-order":"289","firstspecies":1131,"lastspecies":1131,"family":"ELAPIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Furina","family-order":27,"genus-order":"290","firstspecies":1132,"lastspecies":1132,"family":"ELAPIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":0},{"genus":"Hemachatus","family-order":27,"genus-order":"291","firstspecies":1133,"lastspecies":1133,"family":"ELAPIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Hemibungarus","family-order":27,"genus-order":"292","firstspecies":1134,"lastspecies":1134,"family":"ELAPIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Hoplocephalus","family-order":27,"genus-order":"293","firstspecies":1135,"lastspecies":1136,"family":"ELAPIDAE","order":"SQUAMATA","threatenedcount":2,"healthycount":0},{"genus":"Hydrelaps","family-order":27,"genus-order":"294","firstspecies":1137,"lastspecies":1137,"family":"ELAPIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Hydrophis","family-order":27,"genus-order":"295","firstspecies":1138,"lastspecies":1156,"family":"ELAPIDAE","order":"SQUAMATA","threatenedcount":2,"healthycount":17},{"genus":"Kerilia","family-order":27,"genus-order":"296","firstspecies":1157,"lastspecies":1157,"family":"ELAPIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Lapemis","family-order":27,"genus-order":"297","firstspecies":1158,"lastspecies":1158,"family":"ELAPIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Laticauda","family-order":27,"genus-order":"298","firstspecies":1159,"lastspecies":1166,"family":"ELAPIDAE","order":"SQUAMATA","threatenedcount":5,"healthycount":3},{"genus":"Loveridgelaps","family-order":27,"genus-order":"299","firstspecies":1167,"lastspecies":1167,"family":"ELAPIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":0},{"genus":"Micruroides","family-order":27,"genus-order":"300","firstspecies":1168,"lastspecies":1168,"family":"ELAPIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Micrurus","family-order":27,"genus-order":"301","firstspecies":1169,"lastspecies":1192,"family":"ELAPIDAE","order":"SQUAMATA","threatenedcount":2,"healthycount":22},{"genus":"Naja","family-order":27,"genus-order":"302","firstspecies":1193,"lastspecies":1202,"family":"ELAPIDAE","order":"SQUAMATA","threatenedcount":3,"healthycount":7},{"genus":"Notechis","family-order":27,"genus-order":"303","firstspecies":1203,"lastspecies":1203,"family":"ELAPIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Ogmodon","family-order":27,"genus-order":"304","firstspecies":1204,"lastspecies":1204,"family":"ELAPIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":0},{"genus":"Ophiophagus","family-order":27,"genus-order":"305","firstspecies":1205,"lastspecies":1205,"family":"ELAPIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":0},{"genus":"Pelamis","family-order":27,"genus-order":"306","firstspecies":1206,"lastspecies":1206,"family":"ELAPIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Pseudohaje","family-order":27,"genus-order":"307","firstspecies":1207,"lastspecies":1207,"family":"ELAPIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Rhinoplocephalus","family-order":27,"genus-order":"308","firstspecies":1208,"lastspecies":1208,"family":"ELAPIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Salomonelaps","family-order":27,"genus-order":"309","firstspecies":1209,"lastspecies":1209,"family":"ELAPIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Simoselaps","family-order":27,"genus-order":"310","firstspecies":1210,"lastspecies":1213,"family":"ELAPIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":3},{"genus":"Sinomicrurus","family-order":27,"genus-order":"311","firstspecies":1214,"lastspecies":1216,"family":"ELAPIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":2},{"genus":"Suta","family-order":27,"genus-order":"312","firstspecies":1217,"lastspecies":1218,"family":"ELAPIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":2},{"genus":"Thalassophina","family-order":27,"genus-order":"313","firstspecies":1219,"lastspecies":1219,"family":"ELAPIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Vermicella","family-order":27,"genus-order":"314","firstspecies":1220,"lastspecies":1220,"family":"ELAPIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Walterinnesia","family-order":27,"genus-order":"315","firstspecies":1221,"lastspecies":1221,"family":"ELAPIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Coleonyx","family-order":28,"genus-order":"316","firstspecies":1222,"lastspecies":1229,"family":"EUBLEPHARIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":8},{"genus":"Eublepharis","family-order":28,"genus-order":"317","firstspecies":1230,"lastspecies":1232,"family":"EUBLEPHARIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":3},{"genus":"Goniurosaurus","family-order":28,"genus-order":"318","firstspecies":1233,"lastspecies":1233,"family":"EUBLEPHARIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":0},{"genus":"Hemitheconyx","family-order":28,"genus-order":"319","firstspecies":1234,"lastspecies":1234,"family":"EUBLEPHARIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Afroedura","family-order":29,"genus-order":"320","firstspecies":1235,"lastspecies":1236,"family":"GEKKONIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":1},{"genus":"Agamura","family-order":29,"genus-order":"321","firstspecies":1237,"lastspecies":1237,"family":"GEKKONIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Ailuronyx","family-order":29,"genus-order":"322","firstspecies":1238,"lastspecies":1240,"family":"GEKKONIDAE","order":"SQUAMATA","threatenedcount":2,"healthycount":1},{"genus":"Alsophylax","family-order":29,"genus-order":"323","firstspecies":1241,"lastspecies":1242,"family":"GEKKONIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":2},{"genus":"Altiphylax","family-order":29,"genus-order":"324","firstspecies":1243,"lastspecies":1244,"family":"GEKKONIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":2},{"genus":"Asiocolotes","family-order":29,"genus-order":"325","firstspecies":1245,"lastspecies":1246,"family":"GEKKONIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":2},{"genus":"Blaesodactylus","family-order":29,"genus-order":"326","firstspecies":1247,"lastspecies":1249,"family":"GEKKONIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":2},{"genus":"Bunopus","family-order":29,"genus-order":"327","firstspecies":1250,"lastspecies":1251,"family":"GEKKONIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":2},{"genus":"Calodactylodes","family-order":29,"genus-order":"328","firstspecies":1252,"lastspecies":1252,"family":"GEKKONIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Chondrodactylus","family-order":29,"genus-order":"329","firstspecies":1253,"lastspecies":1253,"family":"GEKKONIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Christinus","family-order":29,"genus-order":"330","firstspecies":1254,"lastspecies":1254,"family":"GEKKONIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":0},{"genus":"Cnemaspis","family-order":29,"genus-order":"331","firstspecies":1255,"lastspecies":1273,"family":"GEKKONIDAE","order":"SQUAMATA","threatenedcount":12,"healthycount":7},{"genus":"Cyrtodactylus","family-order":29,"genus-order":"332","firstspecies":1274,"lastspecies":1284,"family":"GEKKONIDAE","order":"SQUAMATA","threatenedcount":4,"healthycount":7},{"genus":"Cyrtopodion","family-order":29,"genus-order":"333","firstspecies":1285,"lastspecies":1292,"family":"GEKKONIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":8},{"genus":"Dierogekko","family-order":29,"genus-order":"334","firstspecies":1293,"lastspecies":1300,"family":"GEKKONIDAE","order":"SQUAMATA","threatenedcount":8,"healthycount":0},{"genus":"Dixonius","family-order":29,"genus-order":"335","firstspecies":1301,"lastspecies":1301,"family":"GEKKONIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Ebenavia","family-order":29,"genus-order":"336","firstspecies":1302,"lastspecies":1303,"family":"GEKKONIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":1},{"genus":"Elasmodactylus","family-order":29,"genus-order":"337","firstspecies":1304,"lastspecies":1305,"family":"GEKKONIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":2},{"genus":"Geckoella","family-order":29,"genus-order":"338","firstspecies":1306,"lastspecies":1310,"family":"GEKKONIDAE","order":"SQUAMATA","threatenedcount":2,"healthycount":3},{"genus":"Geckolepis","family-order":29,"genus-order":"339","firstspecies":1311,"lastspecies":1312,"family":"GEKKONIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":2},{"genus":"Gehyra","family-order":29,"genus-order":"340","firstspecies":1313,"lastspecies":1318,"family":"GEKKONIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":5},{"genus":"Gekko","family-order":29,"genus-order":"341","firstspecies":1319,"lastspecies":1330,"family":"GEKKONIDAE","order":"SQUAMATA","threatenedcount":4,"healthycount":8},{"genus":"Goggia","family-order":29,"genus-order":"342","firstspecies":1331,"lastspecies":1333,"family":"GEKKONIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":2},{"genus":"Hemidactylus","family-order":29,"genus-order":"343","firstspecies":1334,"lastspecies":1366,"family":"GEKKONIDAE","order":"SQUAMATA","threatenedcount":9,"healthycount":24},{"genus":"Hemiphyllodactylus","family-order":29,"genus-order":"344","firstspecies":1367,"lastspecies":1368,"family":"GEKKONIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":2},{"genus":"Homopholis","family-order":29,"genus-order":"345","firstspecies":1369,"lastspecies":1370,"family":"GEKKONIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":1},{"genus":"Lepidodactylus","family-order":29,"genus-order":"346","firstspecies":1371,"lastspecies":1382,"family":"GEKKONIDAE","order":"SQUAMATA","threatenedcount":4,"healthycount":8},{"genus":"Lucasium","family-order":29,"genus-order":"347","firstspecies":1383,"lastspecies":1383,"family":"GEKKONIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Luperosaurus","family-order":29,"genus-order":"348","firstspecies":1384,"lastspecies":1385,"family":"GEKKONIDAE","order":"SQUAMATA","threatenedcount":2,"healthycount":0},{"genus":"Lygodactylus","family-order":29,"genus-order":"349","firstspecies":1386,"lastspecies":1411,"family":"GEKKONIDAE","order":"SQUAMATA","threatenedcount":15,"healthycount":11},{"genus":"Matoatoa","family-order":29,"genus-order":"350","firstspecies":1412,"lastspecies":1412,"family":"GEKKONIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":0},{"genus":"Mediodactylus","family-order":29,"genus-order":"351","firstspecies":1413,"lastspecies":1418,"family":"GEKKONIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":5},{"genus":"Nactus","family-order":29,"genus-order":"352","firstspecies":1419,"lastspecies":1422,"family":"GEKKONIDAE","order":"SQUAMATA","threatenedcount":2,"healthycount":2},{"genus":"Oedodera","family-order":29,"genus-order":"353","firstspecies":1423,"lastspecies":1423,"family":"GEKKONIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":0},{"genus":"Pachydactylus","family-order":29,"genus-order":"354","firstspecies":1424,"lastspecies":1428,"family":"GEKKONIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":4},{"genus":"Paragehyra","family-order":29,"genus-order":"355","firstspecies":1429,"lastspecies":1430,"family":"GEKKONIDAE","order":"SQUAMATA","threatenedcount":2,"healthycount":0},{"genus":"Paroedura","family-order":29,"genus-order":"356","firstspecies":1431,"lastspecies":1446,"family":"GEKKONIDAE","order":"SQUAMATA","threatenedcount":9,"healthycount":7},{"genus":"Perochirus","family-order":29,"genus-order":"357","firstspecies":1447,"lastspecies":1448,"family":"GEKKONIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":1},{"genus":"Phelsuma","family-order":29,"genus-order":"358","firstspecies":1449,"lastspecies":1487,"family":"GEKKONIDAE","order":"SQUAMATA","threatenedcount":19,"healthycount":20},{"genus":"Pseudoceramodactylus","family-order":29,"genus-order":"359","firstspecies":1488,"lastspecies":1488,"family":"GEKKONIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Pseudogekko","family-order":29,"genus-order":"360","firstspecies":1489,"lastspecies":1492,"family":"GEKKONIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":3},{"genus":"Ptenopus","family-order":29,"genus-order":"361","firstspecies":1493,"lastspecies":1493,"family":"GEKKONIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Ptychozoon","family-order":29,"genus-order":"362","firstspecies":1494,"lastspecies":1495,"family":"GEKKONIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":1},{"genus":"Rhinogecko","family-order":29,"genus-order":"363","firstspecies":1496,"lastspecies":1496,"family":"GEKKONIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Rhoptropella","family-order":29,"genus-order":"364","firstspecies":1497,"lastspecies":1497,"family":"GEKKONIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":0},{"genus":"Stenodactylus","family-order":29,"genus-order":"365","firstspecies":1498,"lastspecies":1504,"family":"GEKKONIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":7},{"genus":"Tenuidactylus","family-order":29,"genus-order":"366","firstspecies":1505,"lastspecies":1506,"family":"GEKKONIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":2},{"genus":"Tropiocolotes","family-order":29,"genus-order":"367","firstspecies":1507,"lastspecies":1510,"family":"GEKKONIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":4},{"genus":"Urocotyledon","family-order":29,"genus-order":"368","firstspecies":1511,"lastspecies":1511,"family":"GEKKONIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Uroplatus","family-order":29,"genus-order":"369","firstspecies":1512,"lastspecies":1525,"family":"GEKKONIDAE","order":"SQUAMATA","threatenedcount":9,"healthycount":5},{"genus":"Cordylosaurus","family-order":30,"genus-order":"370","firstspecies":1526,"lastspecies":1526,"family":"GERRHOSAURIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Gerrhosaurus","family-order":30,"genus-order":"371","firstspecies":1527,"lastspecies":1528,"family":"GERRHOSAURIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":1},{"genus":"Tetradactylus","family-order":30,"genus-order":"372","firstspecies":1529,"lastspecies":1530,"family":"GERRHOSAURIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":1},{"genus":"Tracheloptychus","family-order":30,"genus-order":"373","firstspecies":1531,"lastspecies":1532,"family":"GERRHOSAURIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":1},{"genus":"Zonosaurus","family-order":30,"genus-order":"374","firstspecies":1533,"lastspecies":1548,"family":"GERRHOSAURIDAE","order":"SQUAMATA","threatenedcount":7,"healthycount":9},{"genus":"Alopoglossus","family-order":31,"genus-order":"375","firstspecies":1549,"lastspecies":1549,"family":"GYMNOPHTHALMIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Anadia","family-order":31,"genus-order":"376","firstspecies":1550,"lastspecies":1551,"family":"GYMNOPHTHALMIDAE","order":"SQUAMATA","threatenedcount":2,"healthycount":0},{"genus":"Arthrosaura","family-order":31,"genus-order":"377","firstspecies":1552,"lastspecies":1553,"family":"GYMNOPHTHALMIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":2},{"genus":"Bachia","family-order":31,"genus-order":"378","firstspecies":1554,"lastspecies":1556,"family":"GYMNOPHTHALMIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":2},{"genus":"Calyptommatus","family-order":31,"genus-order":"379","firstspecies":1557,"lastspecies":1557,"family":"GYMNOPHTHALMIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":0},{"genus":"Cercosaura","family-order":31,"genus-order":"380","firstspecies":1558,"lastspecies":1559,"family":"GYMNOPHTHALMIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":2},{"genus":"Echinosaura","family-order":31,"genus-order":"381","firstspecies":1560,"lastspecies":1560,"family":"GYMNOPHTHALMIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Euspondylus","family-order":31,"genus-order":"382","firstspecies":1561,"lastspecies":1561,"family":"GYMNOPHTHALMIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Gymnophthalmus","family-order":31,"genus-order":"383","firstspecies":1562,"lastspecies":1564,"family":"GYMNOPHTHALMIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":2},{"genus":"Leposoma","family-order":31,"genus-order":"384","firstspecies":1565,"lastspecies":1567,"family":"GYMNOPHTHALMIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":3},{"genus":"Macropholidus","family-order":31,"genus-order":"385","firstspecies":1568,"lastspecies":1569,"family":"GYMNOPHTHALMIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":1},{"genus":"Neusticurus","family-order":31,"genus-order":"386","firstspecies":1570,"lastspecies":1570,"family":"GYMNOPHTHALMIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Placosoma","family-order":31,"genus-order":"387","firstspecies":1571,"lastspecies":1571,"family":"GYMNOPHTHALMIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Potamites","family-order":31,"genus-order":"388","firstspecies":1572,"lastspecies":1573,"family":"GYMNOPHTHALMIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":2},{"genus":"Psilophthalmus","family-order":31,"genus-order":"389","firstspecies":1574,"lastspecies":1574,"family":"GYMNOPHTHALMIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":0},{"genus":"Ptychoglossus","family-order":31,"genus-order":"390","firstspecies":1575,"lastspecies":1576,"family":"GYMNOPHTHALMIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":1},{"genus":"Riama","family-order":31,"genus-order":"391","firstspecies":1577,"lastspecies":1580,"family":"GYMNOPHTHALMIDAE","order":"SQUAMATA","threatenedcount":4,"healthycount":0},{"genus":"Heloderma","family-order":32,"genus-order":"392","firstspecies":1581,"lastspecies":1582,"family":"HELODERMATIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":1},{"genus":"Bitia","family-order":33,"genus-order":"393","firstspecies":1583,"lastspecies":1583,"family":"HOMALOPSIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Cantoria","family-order":33,"genus-order":"394","firstspecies":1584,"lastspecies":1584,"family":"HOMALOPSIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Cerberus","family-order":33,"genus-order":"395","firstspecies":1585,"lastspecies":1587,"family":"HOMALOPSIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":2},{"genus":"Enhydris","family-order":33,"genus-order":"396","firstspecies":1588,"lastspecies":1599,"family":"HOMALOPSIDAE","order":"SQUAMATA","threatenedcount":2,"healthycount":10},{"genus":"Erpeton","family-order":33,"genus-order":"397","firstspecies":1600,"lastspecies":1600,"family":"HOMALOPSIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Fordonia","family-order":33,"genus-order":"398","firstspecies":1601,"lastspecies":1601,"family":"HOMALOPSIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Gerarda","family-order":33,"genus-order":"399","firstspecies":1602,"lastspecies":1602,"family":"HOMALOPSIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Homalopsis","family-order":33,"genus-order":"400","firstspecies":1603,"lastspecies":1604,"family":"HOMALOPSIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":2},{"genus":"Myron","family-order":33,"genus-order":"401","firstspecies":1605,"lastspecies":1605,"family":"HOMALOPSIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Amblyrhynchus","family-order":34,"genus-order":"402","firstspecies":1606,"lastspecies":1606,"family":"IGUANIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":0},{"genus":"Brachylophus","family-order":34,"genus-order":"403","firstspecies":1607,"lastspecies":1609,"family":"IGUANIDAE","order":"SQUAMATA","threatenedcount":3,"healthycount":0},{"genus":"Conolophus","family-order":34,"genus-order":"404","firstspecies":1610,"lastspecies":1612,"family":"IGUANIDAE","order":"SQUAMATA","threatenedcount":3,"healthycount":0},{"genus":"Ctenosaura","family-order":34,"genus-order":"405","firstspecies":1613,"lastspecies":1624,"family":"IGUANIDAE","order":"SQUAMATA","threatenedcount":11,"healthycount":1},{"genus":"Cyclura","family-order":34,"genus-order":"406","firstspecies":1625,"lastspecies":1634,"family":"IGUANIDAE","order":"SQUAMATA","threatenedcount":10,"healthycount":0},{"genus":"Dipsosaurus","family-order":34,"genus-order":"407","firstspecies":1635,"lastspecies":1635,"family":"IGUANIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Iguana","family-order":34,"genus-order":"408","firstspecies":1636,"lastspecies":1636,"family":"IGUANIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":0},{"genus":"Sauromalus","family-order":34,"genus-order":"409","firstspecies":1637,"lastspecies":1638,"family":"IGUANIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":1},{"genus":"Acanthodactylus","family-order":35,"genus-order":"410","firstspecies":1639,"lastspecies":1662,"family":"LACERTIDAE","order":"SQUAMATA","threatenedcount":11,"healthycount":13},{"genus":"Adolfus","family-order":35,"genus-order":"411","firstspecies":1663,"lastspecies":1663,"family":"LACERTIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":0},{"genus":"Algyroides","family-order":35,"genus-order":"412","firstspecies":1664,"lastspecies":1667,"family":"LACERTIDAE","order":"SQUAMATA","threatenedcount":2,"healthycount":2},{"genus":"Anatololacerta","family-order":35,"genus-order":"413","firstspecies":1668,"lastspecies":1670,"family":"LACERTIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":3},{"genus":"Apathya","family-order":35,"genus-order":"414","firstspecies":1671,"lastspecies":1672,"family":"LACERTIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":2},{"genus":"Archaeolacerta","family-order":35,"genus-order":"415","firstspecies":1673,"lastspecies":1673,"family":"LACERTIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":0},{"genus":"Atlantolacerta","family-order":35,"genus-order":"416","firstspecies":1674,"lastspecies":1674,"family":"LACERTIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":0},{"genus":"Australolacerta","family-order":35,"genus-order":"417","firstspecies":1675,"lastspecies":1676,"family":"LACERTIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":1},{"genus":"Congolacerta","family-order":35,"genus-order":"418","firstspecies":1677,"lastspecies":1677,"family":"LACERTIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Dalmatolacerta","family-order":35,"genus-order":"419","firstspecies":1678,"lastspecies":1678,"family":"LACERTIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Darevskia","family-order":35,"genus-order":"420","firstspecies":1679,"lastspecies":1702,"family":"LACERTIDAE","order":"SQUAMATA","threatenedcount":11,"healthycount":13},{"genus":"Dinarolacerta","family-order":35,"genus-order":"421","firstspecies":1703,"lastspecies":1704,"family":"LACERTIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":1},{"genus":"Eremias","family-order":35,"genus-order":"422","firstspecies":1705,"lastspecies":1713,"family":"LACERTIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":8},{"genus":"Gallotia","family-order":35,"genus-order":"423","firstspecies":1714,"lastspecies":1721,"family":"LACERTIDAE","order":"SQUAMATA","threatenedcount":4,"healthycount":4},{"genus":"Hellenolacerta","family-order":35,"genus-order":"424","firstspecies":1722,"lastspecies":1722,"family":"LACERTIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":0},{"genus":"Iberolacerta","family-order":35,"genus-order":"425","firstspecies":1723,"lastspecies":1730,"family":"LACERTIDAE","order":"SQUAMATA","threatenedcount":8,"healthycount":0},{"genus":"Iranolacerta","family-order":35,"genus-order":"426","firstspecies":1731,"lastspecies":1731,"family":"LACERTIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Lacerta","family-order":35,"genus-order":"427","firstspecies":1732,"lastspecies":1739,"family":"LACERTIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":7},{"genus":"Latastia","family-order":35,"genus-order":"428","firstspecies":1740,"lastspecies":1740,"family":"LACERTIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Mesalina","family-order":35,"genus-order":"429","firstspecies":1741,"lastspecies":1747,"family":"LACERTIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":7},{"genus":"Omanosaura","family-order":35,"genus-order":"430","firstspecies":1748,"lastspecies":1749,"family":"LACERTIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":2},{"genus":"Ophisops","family-order":35,"genus-order":"431","firstspecies":1750,"lastspecies":1752,"family":"LACERTIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":3},{"genus":"Parvilacerta","family-order":35,"genus-order":"432","firstspecies":1753,"lastspecies":1754,"family":"LACERTIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":1},{"genus":"Pedioplanis","family-order":35,"genus-order":"433","firstspecies":1755,"lastspecies":1756,"family":"LACERTIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":2},{"genus":"Philochortus","family-order":35,"genus-order":"434","firstspecies":1757,"lastspecies":1758,"family":"LACERTIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":1},{"genus":"Phoenicolacerta","family-order":35,"genus-order":"435","firstspecies":1759,"lastspecies":1762,"family":"LACERTIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":3},{"genus":"Podarcis","family-order":35,"genus-order":"436","firstspecies":1763,"lastspecies":1782,"family":"LACERTIDAE","order":"SQUAMATA","threatenedcount":8,"healthycount":12},{"genus":"Psammodromus","family-order":35,"genus-order":"437","firstspecies":1783,"lastspecies":1788,"family":"LACERTIDAE","order":"SQUAMATA","threatenedcount":2,"healthycount":4},{"genus":"Scelarcis","family-order":35,"genus-order":"438","firstspecies":1789,"lastspecies":1789,"family":"LACERTIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Takydromus","family-order":35,"genus-order":"439","firstspecies":1790,"lastspecies":1792,"family":"LACERTIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":2},{"genus":"Teira","family-order":35,"genus-order":"440","firstspecies":1793,"lastspecies":1793,"family":"LACERTIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Timon","family-order":35,"genus-order":"441","firstspecies":1794,"lastspecies":1797,"family":"LACERTIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":3},{"genus":"Tropidosaura","family-order":35,"genus-order":"442","firstspecies":1798,"lastspecies":1798,"family":"LACERTIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":0},{"genus":"Zootoca","family-order":35,"genus-order":"443","firstspecies":1799,"lastspecies":1799,"family":"LACERTIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Gonionotophis","family-order":36,"genus-order":"444","firstspecies":1800,"lastspecies":1803,"family":"LAMPROPHIIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":4},{"genus":"Inyoka","family-order":36,"genus-order":"445","firstspecies":1804,"lastspecies":1804,"family":"LAMPROPHIIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":0},{"genus":"Lamprophis","family-order":36,"genus-order":"446","firstspecies":1805,"lastspecies":1807,"family":"LAMPROPHIIDAE","order":"SQUAMATA","threatenedcount":2,"healthycount":1},{"genus":"Lycodonomorphus","family-order":36,"genus-order":"447","firstspecies":1808,"lastspecies":1811,"family":"LAMPROPHIIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":4},{"genus":"Lycophidion","family-order":36,"genus-order":"448","firstspecies":1812,"lastspecies":1817,"family":"LAMPROPHIIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":5},{"genus":"Anisolepis","family-order":37,"genus-order":"449","firstspecies":1818,"lastspecies":1819,"family":"LEIOSAURIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":1},{"genus":"Diplolaemus","family-order":37,"genus-order":"450","firstspecies":1820,"lastspecies":1820,"family":"LEIOSAURIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Enyalius","family-order":37,"genus-order":"451","firstspecies":1821,"lastspecies":1822,"family":"LEIOSAURIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":2},{"genus":"Leiosaurus","family-order":37,"genus-order":"452","firstspecies":1823,"lastspecies":1823,"family":"LEIOSAURIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Pristidactylus","family-order":37,"genus-order":"453","firstspecies":1824,"lastspecies":1824,"family":"LEIOSAURIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Epictia","family-order":38,"genus-order":"454","firstspecies":1825,"lastspecies":1828,"family":"LEPTOTYPHLOPIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":4},{"genus":"Leptotyphlops","family-order":38,"genus-order":"455","firstspecies":1829,"lastspecies":1829,"family":"LEPTOTYPHLOPIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Myriopholis","family-order":38,"genus-order":"456","firstspecies":1830,"lastspecies":1834,"family":"LEPTOTYPHLOPIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":5},{"genus":"Rena","family-order":38,"genus-order":"457","firstspecies":1835,"lastspecies":1839,"family":"LEPTOTYPHLOPIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":5},{"genus":"Rhinoleptus","family-order":38,"genus-order":"458","firstspecies":1840,"lastspecies":1840,"family":"LEPTOTYPHLOPIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Tricheilostoma","family-order":38,"genus-order":"459","firstspecies":1841,"lastspecies":1841,"family":"LEPTOTYPHLOPIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Trilepida","family-order":38,"genus-order":"460","firstspecies":1842,"lastspecies":1842,"family":"LEPTOTYPHLOPIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Adelophis","family-order":39,"genus-order":"461","firstspecies":1843,"lastspecies":1843,"family":"NATRICIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":0},{"genus":"Afronatrix","family-order":39,"genus-order":"462","firstspecies":1844,"lastspecies":1844,"family":"NATRICIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Amphiesma","family-order":39,"genus-order":"463","firstspecies":1845,"lastspecies":1862,"family":"NATRICIDAE","order":"SQUAMATA","threatenedcount":3,"healthycount":15},{"genus":"Amphiesmoides","family-order":39,"genus-order":"464","firstspecies":1863,"lastspecies":1863,"family":"NATRICIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Atretium","family-order":39,"genus-order":"465","firstspecies":1864,"lastspecies":1865,"family":"NATRICIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":2},{"genus":"Balanophis","family-order":39,"genus-order":"466","firstspecies":1866,"lastspecies":1866,"family":"NATRICIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":0},{"genus":"Clonophis","family-order":39,"genus-order":"467","firstspecies":1867,"lastspecies":1867,"family":"NATRICIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":0},{"genus":"Hologerrhum","family-order":39,"genus-order":"468","firstspecies":1868,"lastspecies":1869,"family":"NATRICIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":1},{"genus":"Hydrablabes","family-order":39,"genus-order":"469","firstspecies":1870,"lastspecies":1870,"family":"NATRICIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Lycognathophis","family-order":39,"genus-order":"470","firstspecies":1871,"lastspecies":1871,"family":"NATRICIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":0},{"genus":"Macropisthodon","family-order":39,"genus-order":"471","firstspecies":1872,"lastspecies":1874,"family":"NATRICIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":3},{"genus":"Natriciteres","family-order":39,"genus-order":"472","firstspecies":1875,"lastspecies":1876,"family":"NATRICIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":2},{"genus":"Natrix","family-order":39,"genus-order":"473","firstspecies":1877,"lastspecies":1880,"family":"NATRICIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":3},{"genus":"Nerodia","family-order":39,"genus-order":"474","firstspecies":1881,"lastspecies":1890,"family":"NATRICIDAE","order":"SQUAMATA","threatenedcount":2,"healthycount":8},{"genus":"Opisthotropis","family-order":39,"genus-order":"475","firstspecies":1891,"lastspecies":1900,"family":"NATRICIDAE","order":"SQUAMATA","threatenedcount":5,"healthycount":5},{"genus":"Paratapinophis","family-order":39,"genus-order":"476","firstspecies":1901,"lastspecies":1901,"family":"NATRICIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Regina","family-order":39,"genus-order":"477","firstspecies":1902,"lastspecies":1905,"family":"NATRICIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":4},{"genus":"Rhabdophis","family-order":39,"genus-order":"478","firstspecies":1906,"lastspecies":1918,"family":"NATRICIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":13},{"genus":"Seminatrix","family-order":39,"genus-order":"479","firstspecies":1919,"lastspecies":1919,"family":"NATRICIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Sinonatrix","family-order":39,"genus-order":"480","firstspecies":1920,"lastspecies":1922,"family":"NATRICIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":3},{"genus":"Storeria","family-order":39,"genus-order":"481","firstspecies":1923,"lastspecies":1926,"family":"NATRICIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":3},{"genus":"Thamnophis","family-order":39,"genus-order":"482","firstspecies":1927,"lastspecies":1955,"family":"NATRICIDAE","order":"SQUAMATA","threatenedcount":4,"healthycount":25},{"genus":"Tropidoclonion","family-order":39,"genus-order":"483","firstspecies":1956,"lastspecies":1956,"family":"NATRICIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Tropidonophis","family-order":39,"genus-order":"484","firstspecies":1957,"lastspecies":1963,"family":"NATRICIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":6},{"genus":"Virginia","family-order":39,"genus-order":"485","firstspecies":1964,"lastspecies":1965,"family":"NATRICIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":2},{"genus":"Xenochrophis","family-order":39,"genus-order":"486","firstspecies":1966,"lastspecies":1971,"family":"NATRICIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":6},{"genus":"Chalarodon","family-order":40,"genus-order":"487","firstspecies":1972,"lastspecies":1972,"family":"OPLURIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Oplurus","family-order":40,"genus-order":"488","firstspecies":1973,"lastspecies":1978,"family":"OPLURIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":6},{"genus":"Aplopeltura","family-order":41,"genus-order":"489","firstspecies":1979,"lastspecies":1979,"family":"PAREATIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Asthenodipsas","family-order":41,"genus-order":"490","firstspecies":1980,"lastspecies":1982,"family":"PAREATIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":3},{"genus":"Pareas","family-order":41,"genus-order":"491","firstspecies":1983,"lastspecies":1988,"family":"PAREATIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":6},{"genus":"Callisaurus","family-order":42,"genus-order":"492","firstspecies":1989,"lastspecies":1989,"family":"PHRYNOSOMATIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Cophosaurus","family-order":42,"genus-order":"493","firstspecies":1990,"lastspecies":1990,"family":"PHRYNOSOMATIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Holbrookia","family-order":42,"genus-order":"494","firstspecies":1991,"lastspecies":1994,"family":"PHRYNOSOMATIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":3},{"genus":"Petrosaurus","family-order":42,"genus-order":"495","firstspecies":1995,"lastspecies":1998,"family":"PHRYNOSOMATIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":4},{"genus":"Phrynosoma","family-order":42,"genus-order":"496","firstspecies":1999,"lastspecies":2010,"family":"PHRYNOSOMATIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":11},{"genus":"Sceloporus","family-order":42,"genus-order":"497","firstspecies":2011,"lastspecies":2089,"family":"PHRYNOSOMATIDAE","order":"SQUAMATA","threatenedcount":10,"healthycount":69},{"genus":"Uma","family-order":42,"genus-order":"498","firstspecies":2090,"lastspecies":2095,"family":"PHRYNOSOMATIDAE","order":"SQUAMATA","threatenedcount":5,"healthycount":1},{"genus":"Urosaurus","family-order":42,"genus-order":"499","firstspecies":2096,"lastspecies":2103,"family":"PHRYNOSOMATIDAE","order":"SQUAMATA","threatenedcount":2,"healthycount":6},{"genus":"Uta","family-order":42,"genus-order":"500","firstspecies":2104,"lastspecies":2110,"family":"PHRYNOSOMATIDAE","order":"SQUAMATA","threatenedcount":4,"healthycount":3},{"genus":"Asaccus","family-order":43,"genus-order":"501","firstspecies":2111,"lastspecies":2119,"family":"PHYLLODACTYLIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":8},{"genus":"Haemodracon","family-order":43,"genus-order":"502","firstspecies":2120,"lastspecies":2121,"family":"PHYLLODACTYLIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":2},{"genus":"Homonota","family-order":43,"genus-order":"503","firstspecies":2122,"lastspecies":2122,"family":"PHYLLODACTYLIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Phyllodactylus","family-order":43,"genus-order":"504","firstspecies":2123,"lastspecies":2138,"family":"PHYLLODACTYLIDAE","order":"SQUAMATA","threatenedcount":2,"healthycount":14},{"genus":"Ptyodactylus","family-order":43,"genus-order":"505","firstspecies":2139,"lastspecies":2139,"family":"PHYLLODACTYLIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Tarentola","family-order":43,"genus-order":"506","firstspecies":2140,"lastspecies":2163,"family":"PHYLLODACTYLIDAE","order":"SQUAMATA","threatenedcount":4,"healthycount":20},{"genus":"Prosymna","family-order":44,"genus-order":"507","firstspecies":2164,"lastspecies":2168,"family":"PROSYMNIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":4},{"genus":"Hemirhagerrhis","family-order":45,"genus-order":"508","firstspecies":2169,"lastspecies":2169,"family":"PSAMMOPHIIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Malpolon","family-order":45,"genus-order":"509","firstspecies":2170,"lastspecies":2170,"family":"PSAMMOPHIIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Mimophis","family-order":45,"genus-order":"510","firstspecies":2171,"lastspecies":2171,"family":"PSAMMOPHIIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Psammophis","family-order":45,"genus-order":"511","firstspecies":2172,"lastspecies":2175,"family":"PSAMMOPHIIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":4},{"genus":"Psammophylax","family-order":45,"genus-order":"512","firstspecies":2176,"lastspecies":2176,"family":"PSAMMOPHIIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Plagiopholis","family-order":46,"genus-order":"513","firstspecies":2177,"lastspecies":2179,"family":"PSEUDOXENODONTIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":3},{"genus":"Pseudoxenodon","family-order":46,"genus-order":"514","firstspecies":2180,"lastspecies":2182,"family":"PSEUDOXENODONTIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":3},{"genus":"Alluaudina","family-order":47,"genus-order":"515","firstspecies":2183,"lastspecies":2184,"family":"PSEUDOXYRHOPHIIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":1},{"genus":"Brygophis","family-order":47,"genus-order":"516","firstspecies":2185,"lastspecies":2185,"family":"PSEUDOXYRHOPHIIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":0},{"genus":"Compsophis","family-order":47,"genus-order":"517","firstspecies":2186,"lastspecies":2192,"family":"PSEUDOXYRHOPHIIDAE","order":"SQUAMATA","threatenedcount":4,"healthycount":3},{"genus":"Ditypophis","family-order":47,"genus-order":"518","firstspecies":2193,"lastspecies":2193,"family":"PSEUDOXYRHOPHIIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Dromicodryas","family-order":47,"genus-order":"519","firstspecies":2194,"lastspecies":2195,"family":"PSEUDOXYRHOPHIIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":2},{"genus":"Duberria","family-order":47,"genus-order":"520","firstspecies":2196,"lastspecies":2197,"family":"PSEUDOXYRHOPHIIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":2},{"genus":"Exallodontophis","family-order":47,"genus-order":"521","firstspecies":2198,"lastspecies":2198,"family":"PSEUDOXYRHOPHIIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Heteroliodon","family-order":47,"genus-order":"522","firstspecies":2199,"lastspecies":2201,"family":"PSEUDOXYRHOPHIIDAE","order":"SQUAMATA","threatenedcount":2,"healthycount":1},{"genus":"Ithycyphus","family-order":47,"genus-order":"523","firstspecies":2202,"lastspecies":2205,"family":"PSEUDOXYRHOPHIIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":4},{"genus":"Langaha","family-order":47,"genus-order":"524","firstspecies":2206,"lastspecies":2208,"family":"PSEUDOXYRHOPHIIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":3},{"genus":"Leioheterodon","family-order":47,"genus-order":"525","firstspecies":2209,"lastspecies":2211,"family":"PSEUDOXYRHOPHIIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":3},{"genus":"Liophidium","family-order":47,"genus-order":"526","firstspecies":2212,"lastspecies":2218,"family":"PSEUDOXYRHOPHIIDAE","order":"SQUAMATA","threatenedcount":3,"healthycount":4},{"genus":"Liopholidophis","family-order":47,"genus-order":"527","firstspecies":2219,"lastspecies":2224,"family":"PSEUDOXYRHOPHIIDAE","order":"SQUAMATA","threatenedcount":2,"healthycount":4},{"genus":"Lycodryas","family-order":47,"genus-order":"528","firstspecies":2225,"lastspecies":2233,"family":"PSEUDOXYRHOPHIIDAE","order":"SQUAMATA","threatenedcount":6,"healthycount":3},{"genus":"Madagascarophis","family-order":47,"genus-order":"529","firstspecies":2234,"lastspecies":2236,"family":"PSEUDOXYRHOPHIIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":3},{"genus":"Micropisthodon","family-order":47,"genus-order":"530","firstspecies":2237,"lastspecies":2237,"family":"PSEUDOXYRHOPHIIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Oxyrhabdium","family-order":47,"genus-order":"531","firstspecies":2238,"lastspecies":2238,"family":"PSEUDOXYRHOPHIIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Pararhadinaea","family-order":47,"genus-order":"532","firstspecies":2239,"lastspecies":2239,"family":"PSEUDOXYRHOPHIIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":0},{"genus":"Parastenophis","family-order":47,"genus-order":"533","firstspecies":2240,"lastspecies":2240,"family":"PSEUDOXYRHOPHIIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Phisalixella","family-order":47,"genus-order":"534","firstspecies":2241,"lastspecies":2243,"family":"PSEUDOXYRHOPHIIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":2},{"genus":"Pseudoxyrhopus","family-order":47,"genus-order":"535","firstspecies":2244,"lastspecies":2254,"family":"PSEUDOXYRHOPHIIDAE","order":"SQUAMATA","threatenedcount":7,"healthycount":4},{"genus":"Thamnosophis","family-order":47,"genus-order":"536","firstspecies":2255,"lastspecies":2260,"family":"PSEUDOXYRHOPHIIDAE","order":"SQUAMATA","threatenedcount":3,"healthycount":3},{"genus":"Aprasia","family-order":48,"genus-order":"537","firstspecies":2261,"lastspecies":2263,"family":"PYGOPODIDAE","order":"SQUAMATA","threatenedcount":3,"healthycount":0},{"genus":"Delma","family-order":48,"genus-order":"538","firstspecies":2264,"lastspecies":2267,"family":"PYGOPODIDAE","order":"SQUAMATA","threatenedcount":3,"healthycount":1},{"genus":"Ophidiocephalus","family-order":48,"genus-order":"539","firstspecies":2268,"lastspecies":2268,"family":"PYGOPODIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":0},{"genus":"Paradelma","family-order":48,"genus-order":"540","firstspecies":2269,"lastspecies":2269,"family":"PYGOPODIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":0},{"genus":"Aspidites","family-order":49,"genus-order":"541","firstspecies":2270,"lastspecies":2270,"family":"PYTHONIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":0},{"genus":"Bothrochilus","family-order":49,"genus-order":"542","firstspecies":2271,"lastspecies":2271,"family":"PYTHONIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Liasis","family-order":49,"genus-order":"543","firstspecies":2272,"lastspecies":2272,"family":"PYTHONIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Morelia","family-order":49,"genus-order":"544","firstspecies":2273,"lastspecies":2275,"family":"PYTHONIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":3},{"genus":"Python","family-order":49,"genus-order":"545","firstspecies":2276,"lastspecies":2282,"family":"PYTHONIDAE","order":"SQUAMATA","threatenedcount":3,"healthycount":4},{"genus":"Rhineura","family-order":50,"genus-order":"546","firstspecies":2283,"lastspecies":2283,"family":"RHINEURIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Ablepharus","family-order":51,"genus-order":"547","firstspecies":2284,"lastspecies":2289,"family":"SCINCIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":6},{"genus":"Acontias","family-order":51,"genus-order":"548","firstspecies":2290,"lastspecies":2296,"family":"SCINCIDAE","order":"SQUAMATA","threatenedcount":2,"healthycount":5},{"genus":"Afroablepharus","family-order":51,"genus-order":"549","firstspecies":2297,"lastspecies":2298,"family":"SCINCIDAE","order":"SQUAMATA","threatenedcount":2,"healthycount":0},{"genus":"Amphiglossus","family-order":51,"genus-order":"550","firstspecies":2299,"lastspecies":2315,"family":"SCINCIDAE","order":"SQUAMATA","threatenedcount":6,"healthycount":11},{"genus":"Androngo","family-order":51,"genus-order":"551","firstspecies":2316,"lastspecies":2316,"family":"SCINCIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Anomalopus","family-order":51,"genus-order":"552","firstspecies":2317,"lastspecies":2319,"family":"SCINCIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":2},{"genus":"Bassiana","family-order":51,"genus-order":"553","firstspecies":2320,"lastspecies":2320,"family":"SCINCIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Brachymeles","family-order":51,"genus-order":"554","firstspecies":2321,"lastspecies":2331,"family":"SCINCIDAE","order":"SQUAMATA","threatenedcount":4,"healthycount":7},{"genus":"Caledoniscincus","family-order":51,"genus-order":"555","firstspecies":2332,"lastspecies":2342,"family":"SCINCIDAE","order":"SQUAMATA","threatenedcount":6,"healthycount":5},{"genus":"Capitellum","family-order":51,"genus-order":"556","firstspecies":2343,"lastspecies":2343,"family":"SCINCIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":0},{"genus":"Carlia","family-order":51,"genus-order":"557","firstspecies":2344,"lastspecies":2350,"family":"SCINCIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":7},{"genus":"Celatiscincus","family-order":51,"genus-order":"558","firstspecies":2351,"lastspecies":2352,"family":"SCINCIDAE","order":"SQUAMATA","threatenedcount":2,"healthycount":0},{"genus":"Chalcides","family-order":51,"genus-order":"559","firstspecies":2353,"lastspecies":2377,"family":"SCINCIDAE","order":"SQUAMATA","threatenedcount":12,"healthycount":13},{"genus":"Chioninia","family-order":51,"genus-order":"560","firstspecies":2378,"lastspecies":2383,"family":"SCINCIDAE","order":"SQUAMATA","threatenedcount":2,"healthycount":4},{"genus":"Coeranoscincus","family-order":51,"genus-order":"561","firstspecies":2384,"lastspecies":2384,"family":"SCINCIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":0},{"genus":"Cophoscincopus","family-order":51,"genus-order":"562","firstspecies":2385,"lastspecies":2387,"family":"SCINCIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":3},{"genus":"Cryptoblepharus","family-order":51,"genus-order":"563","firstspecies":2388,"lastspecies":2393,"family":"SCINCIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":5},{"genus":"Ctenotus","family-order":51,"genus-order":"564","firstspecies":2394,"lastspecies":2402,"family":"SCINCIDAE","order":"SQUAMATA","threatenedcount":2,"healthycount":7},{"genus":"Cyclodomorphus","family-order":51,"genus-order":"565","firstspecies":2403,"lastspecies":2403,"family":"SCINCIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Dasia","family-order":51,"genus-order":"566","firstspecies":2404,"lastspecies":2406,"family":"SCINCIDAE","order":"SQUAMATA","threatenedcount":2,"healthycount":1},{"genus":"Egernia","family-order":51,"genus-order":"567","firstspecies":2407,"lastspecies":2408,"family":"SCINCIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":2},{"genus":"Emoia","family-order":51,"genus-order":"568","firstspecies":2409,"lastspecies":2442,"family":"SCINCIDAE","order":"SQUAMATA","threatenedcount":16,"healthycount":18},{"genus":"Eremiascincus","family-order":51,"genus-order":"569","firstspecies":2443,"lastspecies":2443,"family":"SCINCIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Eulamprus","family-order":51,"genus-order":"570","firstspecies":2444,"lastspecies":2448,"family":"SCINCIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":4},{"genus":"Eumeces","family-order":51,"genus-order":"571","firstspecies":2449,"lastspecies":2449,"family":"SCINCIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Eurylepis","family-order":51,"genus-order":"572","firstspecies":2450,"lastspecies":2450,"family":"SCINCIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":0},{"genus":"Eutropis","family-order":51,"genus-order":"573","firstspecies":2451,"lastspecies":2458,"family":"SCINCIDAE","order":"SQUAMATA","threatenedcount":2,"healthycount":6},{"genus":"Geomyersia","family-order":51,"genus-order":"574","firstspecies":2459,"lastspecies":2460,"family":"SCINCIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":1},{"genus":"Geoscincus","family-order":51,"genus-order":"575","firstspecies":2461,"lastspecies":2461,"family":"SCINCIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":0},{"genus":"Glaphyromorphus","family-order":51,"genus-order":"576","firstspecies":2462,"lastspecies":2462,"family":"SCINCIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Graciliscincus","family-order":51,"genus-order":"577","firstspecies":2463,"lastspecies":2463,"family":"SCINCIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":0},{"genus":"Hakaria","family-order":51,"genus-order":"578","firstspecies":2464,"lastspecies":2464,"family":"SCINCIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":0},{"genus":"Hemiergis","family-order":51,"genus-order":"579","firstspecies":2465,"lastspecies":2466,"family":"SCINCIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":2},{"genus":"Isopachys","family-order":51,"genus-order":"580","firstspecies":2467,"lastspecies":2467,"family":"SCINCIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Janetaescincus","family-order":51,"genus-order":"581","firstspecies":2468,"lastspecies":2469,"family":"SCINCIDAE","order":"SQUAMATA","threatenedcount":2,"healthycount":0},{"genus":"Kaestlea","family-order":51,"genus-order":"582","firstspecies":2470,"lastspecies":2473,"family":"SCINCIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":3},{"genus":"Kanakysaurus","family-order":51,"genus-order":"583","firstspecies":2474,"lastspecies":2475,"family":"SCINCIDAE","order":"SQUAMATA","threatenedcount":2,"healthycount":0},{"genus":"Lacertoides","family-order":51,"genus-order":"584","firstspecies":2476,"lastspecies":2476,"family":"SCINCIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":0},{"genus":"Lamprolepis","family-order":51,"genus-order":"585","firstspecies":2477,"lastspecies":2477,"family":"SCINCIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Lankascincus","family-order":51,"genus-order":"586","firstspecies":2478,"lastspecies":2479,"family":"SCINCIDAE","order":"SQUAMATA","threatenedcount":2,"healthycount":0},{"genus":"Larutia","family-order":51,"genus-order":"587","firstspecies":2480,"lastspecies":2480,"family":"SCINCIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Leiolopisma","family-order":51,"genus-order":"588","firstspecies":2481,"lastspecies":2482,"family":"SCINCIDAE","order":"SQUAMATA","threatenedcount":2,"healthycount":0},{"genus":"Leptosiaphos","family-order":51,"genus-order":"589","firstspecies":2483,"lastspecies":2485,"family":"SCINCIDAE","order":"SQUAMATA","threatenedcount":2,"healthycount":1},{"genus":"Lerista","family-order":51,"genus-order":"590","firstspecies":2486,"lastspecies":2496,"family":"SCINCIDAE","order":"SQUAMATA","threatenedcount":2,"healthycount":9},{"genus":"Liburnascincus","family-order":51,"genus-order":"591","firstspecies":2497,"lastspecies":2497,"family":"SCINCIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Liopholis","family-order":51,"genus-order":"592","firstspecies":2498,"lastspecies":2501,"family":"SCINCIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":3},{"genus":"Lioscincus","family-order":51,"genus-order":"593","firstspecies":2502,"lastspecies":2507,"family":"SCINCIDAE","order":"SQUAMATA","threatenedcount":4,"healthycount":2},{"genus":"Lipinia","family-order":51,"genus-order":"594","firstspecies":2508,"lastspecies":2512,"family":"SCINCIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":4},{"genus":"Lygisaurus","family-order":51,"genus-order":"595","firstspecies":2513,"lastspecies":2513,"family":"SCINCIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Lygosoma","family-order":51,"genus-order":"596","firstspecies":2514,"lastspecies":2518,"family":"SCINCIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":4},{"genus":"Madascincus","family-order":51,"genus-order":"597","firstspecies":2519,"lastspecies":2527,"family":"SCINCIDAE","order":"SQUAMATA","threatenedcount":4,"healthycount":5},{"genus":"Marisora","family-order":51,"genus-order":"598","firstspecies":2528,"lastspecies":2530,"family":"SCINCIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":2},{"genus":"Marmorosphax","family-order":51,"genus-order":"599","firstspecies":2531,"lastspecies":2535,"family":"SCINCIDAE","order":"SQUAMATA","threatenedcount":4,"healthycount":1},{"genus":"Melanoseps","family-order":51,"genus-order":"600","firstspecies":2536,"lastspecies":2536,"family":"SCINCIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Menetia","family-order":51,"genus-order":"601","firstspecies":2537,"lastspecies":2537,"family":"SCINCIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Mesoscincus","family-order":51,"genus-order":"602","firstspecies":2538,"lastspecies":2539,"family":"SCINCIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":2},{"genus":"Mochlus","family-order":51,"genus-order":"603","firstspecies":2540,"lastspecies":2545,"family":"SCINCIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":5},{"genus":"Morethia","family-order":51,"genus-order":"604","firstspecies":2546,"lastspecies":2546,"family":"SCINCIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Nannoscincus","family-order":51,"genus-order":"605","firstspecies":2547,"lastspecies":2556,"family":"SCINCIDAE","order":"SQUAMATA","threatenedcount":10,"healthycount":0},{"genus":"Neoseps","family-order":51,"genus-order":"606","firstspecies":2557,"lastspecies":2557,"family":"SCINCIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":0},{"genus":"Niveoscincus","family-order":51,"genus-order":"607","firstspecies":2558,"lastspecies":2558,"family":"SCINCIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":0},{"genus":"Oligosoma","family-order":51,"genus-order":"608","firstspecies":2559,"lastspecies":2574,"family":"SCINCIDAE","order":"SQUAMATA","threatenedcount":14,"healthycount":2},{"genus":"Ophiomorus","family-order":51,"genus-order":"609","firstspecies":2575,"lastspecies":2579,"family":"SCINCIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":5},{"genus":"Pamelaescincus","family-order":51,"genus-order":"610","firstspecies":2580,"lastspecies":2580,"family":"SCINCIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Panaspis","family-order":51,"genus-order":"611","firstspecies":2581,"lastspecies":2583,"family":"SCINCIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":3},{"genus":"Panopa","family-order":51,"genus-order":"612","firstspecies":2584,"lastspecies":2584,"family":"SCINCIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Paracontias","family-order":51,"genus-order":"613","firstspecies":2585,"lastspecies":2592,"family":"SCINCIDAE","order":"SQUAMATA","threatenedcount":6,"healthycount":2},{"genus":"Parvoscincus","family-order":51,"genus-order":"614","firstspecies":2593,"lastspecies":2593,"family":"SCINCIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":0},{"genus":"Phoboscincus","family-order":51,"genus-order":"615","firstspecies":2594,"lastspecies":2595,"family":"SCINCIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":1},{"genus":"Plestiodon","family-order":51,"genus-order":"616","firstspecies":2596,"lastspecies":2616,"family":"SCINCIDAE","order":"SQUAMATA","threatenedcount":3,"healthycount":18},{"genus":"Prasinohaema","family-order":51,"genus-order":"617","firstspecies":2617,"lastspecies":2618,"family":"SCINCIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":2},{"genus":"Proablepharus","family-order":51,"genus-order":"618","firstspecies":2619,"lastspecies":2619,"family":"SCINCIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Pseudemoia","family-order":51,"genus-order":"619","firstspecies":2620,"lastspecies":2620,"family":"SCINCIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Pseudoacontias","family-order":51,"genus-order":"620","firstspecies":2621,"lastspecies":2623,"family":"SCINCIDAE","order":"SQUAMATA","threatenedcount":3,"healthycount":0},{"genus":"Pygomeles","family-order":51,"genus-order":"621","firstspecies":2624,"lastspecies":2625,"family":"SCINCIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":1},{"genus":"Ristella","family-order":51,"genus-order":"622","firstspecies":2626,"lastspecies":2626,"family":"SCINCIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Saproscincus","family-order":51,"genus-order":"623","firstspecies":2627,"lastspecies":2627,"family":"SCINCIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Scelotes","family-order":51,"genus-order":"624","firstspecies":2628,"lastspecies":2632,"family":"SCINCIDAE","order":"SQUAMATA","threatenedcount":4,"healthycount":1},{"genus":"Scincella","family-order":51,"genus-order":"625","firstspecies":2633,"lastspecies":2637,"family":"SCINCIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":4},{"genus":"Scincus","family-order":51,"genus-order":"626","firstspecies":2638,"lastspecies":2639,"family":"SCINCIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":2},{"genus":"Scolecoseps","family-order":51,"genus-order":"627","firstspecies":2640,"lastspecies":2640,"family":"SCINCIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":0},{"genus":"Sepsina","family-order":51,"genus-order":"628","firstspecies":2641,"lastspecies":2641,"family":"SCINCIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Sigaloseps","family-order":51,"genus-order":"629","firstspecies":2642,"lastspecies":2643,"family":"SCINCIDAE","order":"SQUAMATA","threatenedcount":2,"healthycount":0},{"genus":"Simiscincus","family-order":51,"genus-order":"630","firstspecies":2644,"lastspecies":2644,"family":"SCINCIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":0},{"genus":"Sirenoscincus","family-order":51,"genus-order":"631","firstspecies":2645,"lastspecies":2645,"family":"SCINCIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":0},{"genus":"Sphenomorphus","family-order":51,"genus-order":"632","firstspecies":2646,"lastspecies":2675,"family":"SCINCIDAE","order":"SQUAMATA","threatenedcount":9,"healthycount":21},{"genus":"Spondylurus","family-order":51,"genus-order":"633","firstspecies":2676,"lastspecies":2683,"family":"SCINCIDAE","order":"SQUAMATA","threatenedcount":8,"healthycount":0},{"genus":"Tiliqua","family-order":51,"genus-order":"634","firstspecies":2684,"lastspecies":2684,"family":"SCINCIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":0},{"genus":"Trachylepis","family-order":51,"genus-order":"635","firstspecies":2685,"lastspecies":2710,"family":"SCINCIDAE","order":"SQUAMATA","threatenedcount":6,"healthycount":20},{"genus":"Tribolonotus","family-order":51,"genus-order":"636","firstspecies":2711,"lastspecies":2713,"family":"SCINCIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":3},{"genus":"Tropidophorus","family-order":51,"genus-order":"637","firstspecies":2714,"lastspecies":2719,"family":"SCINCIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":6},{"genus":"Tropidoscincus","family-order":51,"genus-order":"638","firstspecies":2720,"lastspecies":2722,"family":"SCINCIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":2},{"genus":"Typhlosaurus","family-order":51,"genus-order":"639","firstspecies":2723,"lastspecies":2724,"family":"SCINCIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":1},{"genus":"Varzea","family-order":51,"genus-order":"640","firstspecies":2725,"lastspecies":2725,"family":"SCINCIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Voeltzkowia","family-order":51,"genus-order":"641","firstspecies":2726,"lastspecies":2730,"family":"SCINCIDAE","order":"SQUAMATA","threatenedcount":2,"healthycount":3},{"genus":"Aristelliger","family-order":52,"genus-order":"642","firstspecies":2731,"lastspecies":2731,"family":"SPHAERODACTYLIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":0},{"genus":"Coleodactylus","family-order":52,"genus-order":"643","firstspecies":2732,"lastspecies":2732,"family":"SPHAERODACTYLIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Euleptes","family-order":52,"genus-order":"644","firstspecies":2733,"lastspecies":2733,"family":"SPHAERODACTYLIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":0},{"genus":"Gonatodes","family-order":52,"genus-order":"645","firstspecies":2734,"lastspecies":2736,"family":"SPHAERODACTYLIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":2},{"genus":"Lepidoblepharis","family-order":52,"genus-order":"646","firstspecies":2737,"lastspecies":2738,"family":"SPHAERODACTYLIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":2},{"genus":"Pristurus","family-order":52,"genus-order":"647","firstspecies":2739,"lastspecies":2755,"family":"SPHAERODACTYLIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":16},{"genus":"Quedenfeldtia","family-order":52,"genus-order":"648","firstspecies":2756,"lastspecies":2757,"family":"SPHAERODACTYLIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":1},{"genus":"Saurodactylus","family-order":52,"genus-order":"649","firstspecies":2758,"lastspecies":2760,"family":"SPHAERODACTYLIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":2},{"genus":"Sphaerodactylus","family-order":52,"genus-order":"650","firstspecies":2761,"lastspecies":2788,"family":"SPHAERODACTYLIDAE","order":"SQUAMATA","threatenedcount":12,"healthycount":16},{"genus":"Teratoscincus","family-order":52,"genus-order":"651","firstspecies":2789,"lastspecies":2789,"family":"SPHAERODACTYLIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Ameiva","family-order":53,"genus-order":"652","firstspecies":2790,"lastspecies":2796,"family":"TEIIDAE","order":"SQUAMATA","threatenedcount":5,"healthycount":2},{"genus":"Aspidoscelis","family-order":53,"genus-order":"653","firstspecies":2797,"lastspecies":2842,"family":"TEIIDAE","order":"SQUAMATA","threatenedcount":8,"healthycount":38},{"genus":"Cnemidophorus","family-order":53,"genus-order":"654","firstspecies":2843,"lastspecies":2844,"family":"TEIIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":1},{"genus":"Crocodilurus","family-order":53,"genus-order":"655","firstspecies":2845,"lastspecies":2845,"family":"TEIIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Holcosus","family-order":53,"genus-order":"656","firstspecies":2846,"lastspecies":2847,"family":"TEIIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":2},{"genus":"Kentropyx","family-order":53,"genus-order":"657","firstspecies":2848,"lastspecies":2848,"family":"TEIIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Salvator","family-order":53,"genus-order":"658","firstspecies":2849,"lastspecies":2849,"family":"TEIIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Diplometopon","family-order":54,"genus-order":"659","firstspecies":2850,"lastspecies":2850,"family":"TROGONOPHIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Trogonophis","family-order":54,"genus-order":"660","firstspecies":2851,"lastspecies":2851,"family":"TROGONOPHIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Exiliboa","family-order":55,"genus-order":"661","firstspecies":2852,"lastspecies":2852,"family":"TROPIDOPHIIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":0},{"genus":"Tropidophis","family-order":55,"genus-order":"662","firstspecies":2853,"lastspecies":2854,"family":"TROPIDOPHIIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":1},{"genus":"Ctenoblepharys","family-order":56,"genus-order":"663","firstspecies":2855,"lastspecies":2855,"family":"TROPIDURIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":0},{"genus":"Eurolophosaurus","family-order":56,"genus-order":"664","firstspecies":2856,"lastspecies":2856,"family":"TROPIDURIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":0},{"genus":"Leiocephalus","family-order":56,"genus-order":"665","firstspecies":2857,"lastspecies":2860,"family":"TROPIDURIDAE","order":"SQUAMATA","threatenedcount":2,"healthycount":2},{"genus":"Liolaemus","family-order":56,"genus-order":"666","firstspecies":2861,"lastspecies":2885,"family":"TROPIDURIDAE","order":"SQUAMATA","threatenedcount":6,"healthycount":19},{"genus":"Microlophus","family-order":56,"genus-order":"667","firstspecies":2886,"lastspecies":2886,"family":"TROPIDURIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Phymaturus","family-order":56,"genus-order":"668","firstspecies":2887,"lastspecies":2887,"family":"TROPIDURIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Plica","family-order":56,"genus-order":"669","firstspecies":2888,"lastspecies":2888,"family":"TROPIDURIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Stenocercus","family-order":56,"genus-order":"670","firstspecies":2889,"lastspecies":2899,"family":"TROPIDURIDAE","order":"SQUAMATA","threatenedcount":5,"healthycount":6},{"genus":"Tropidurus","family-order":56,"genus-order":"671","firstspecies":2900,"lastspecies":2903,"family":"TROPIDURIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":3},{"genus":"Acutotyphlops","family-order":57,"genus-order":"672","firstspecies":2904,"lastspecies":2904,"family":"TYPHLOPIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Afrotyphlops","family-order":57,"genus-order":"673","firstspecies":2905,"lastspecies":2905,"family":"TYPHLOPIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":0},{"genus":"Austrotyphlops","family-order":57,"genus-order":"674","firstspecies":2906,"lastspecies":2911,"family":"TYPHLOPIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":6},{"genus":"Grypotyphlops","family-order":57,"genus-order":"675","firstspecies":2912,"lastspecies":2912,"family":"TYPHLOPIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Letheobia","family-order":57,"genus-order":"676","firstspecies":2913,"lastspecies":2917,"family":"TYPHLOPIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":5},{"genus":"Ramphotyphlops","family-order":57,"genus-order":"677","firstspecies":2918,"lastspecies":2924,"family":"TYPHLOPIDAE","order":"SQUAMATA","threatenedcount":2,"healthycount":5},{"genus":"Typhlops","family-order":57,"genus-order":"678","firstspecies":2925,"lastspecies":2949,"family":"TYPHLOPIDAE","order":"SQUAMATA","threatenedcount":9,"healthycount":16},{"genus":"Xenotyphlops","family-order":57,"genus-order":"679","firstspecies":2950,"lastspecies":2950,"family":"TYPHLOPIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":0},{"genus":"Brachyophidium","family-order":58,"genus-order":"680","firstspecies":2951,"lastspecies":2951,"family":"UROPELTIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Melanophidium","family-order":58,"genus-order":"681","firstspecies":2952,"lastspecies":2954,"family":"UROPELTIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":2},{"genus":"Platyplectrurus","family-order":58,"genus-order":"682","firstspecies":2955,"lastspecies":2955,"family":"UROPELTIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":0},{"genus":"Plectrurus","family-order":58,"genus-order":"683","firstspecies":2956,"lastspecies":2956,"family":"UROPELTIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Rhinophis","family-order":58,"genus-order":"684","firstspecies":2957,"lastspecies":2960,"family":"UROPELTIDAE","order":"SQUAMATA","threatenedcount":2,"healthycount":2},{"genus":"Teretrurus","family-order":58,"genus-order":"685","firstspecies":2961,"lastspecies":2961,"family":"UROPELTIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Uropeltis","family-order":58,"genus-order":"686","firstspecies":2962,"lastspecies":2973,"family":"UROPELTIDAE","order":"SQUAMATA","threatenedcount":3,"healthycount":9},{"genus":"Varanus","family-order":59,"genus-order":"687","firstspecies":2974,"lastspecies":2992,"family":"VARANIDAE","order":"SQUAMATA","threatenedcount":4,"healthycount":15},{"genus":"Agkistrodon","family-order":60,"genus-order":"688","firstspecies":2993,"lastspecies":2996,"family":"VIPERIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":3},{"genus":"Atheris","family-order":60,"genus-order":"689","firstspecies":2997,"lastspecies":2999,"family":"VIPERIDAE","order":"SQUAMATA","threatenedcount":2,"healthycount":1},{"genus":"Atropoides","family-order":60,"genus-order":"690","firstspecies":3000,"lastspecies":3001,"family":"VIPERIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":2},{"genus":"Azemiops","family-order":60,"genus-order":"691","firstspecies":3002,"lastspecies":3002,"family":"VIPERIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Bitis","family-order":60,"genus-order":"692","firstspecies":3003,"lastspecies":3007,"family":"VIPERIDAE","order":"SQUAMATA","threatenedcount":2,"healthycount":3},{"genus":"Bothriechis","family-order":60,"genus-order":"693","firstspecies":3008,"lastspecies":3010,"family":"VIPERIDAE","order":"SQUAMATA","threatenedcount":2,"healthycount":1},{"genus":"Bothriopsis","family-order":60,"genus-order":"694","firstspecies":3011,"lastspecies":3011,"family":"VIPERIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Bothrocophias","family-order":60,"genus-order":"695","firstspecies":3012,"lastspecies":3012,"family":"VIPERIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Bothropoides","family-order":60,"genus-order":"696","firstspecies":3013,"lastspecies":3016,"family":"VIPERIDAE","order":"SQUAMATA","threatenedcount":2,"healthycount":2},{"genus":"Bothrops","family-order":60,"genus-order":"697","firstspecies":3017,"lastspecies":3019,"family":"VIPERIDAE","order":"SQUAMATA","threatenedcount":2,"healthycount":1},{"genus":"Calloselasma","family-order":60,"genus-order":"698","firstspecies":3020,"lastspecies":3020,"family":"VIPERIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Cerastes","family-order":60,"genus-order":"699","firstspecies":3021,"lastspecies":3022,"family":"VIPERIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":2},{"genus":"Cerrophidion","family-order":60,"genus-order":"700","firstspecies":3023,"lastspecies":3023,"family":"VIPERIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Crotalus","family-order":60,"genus-order":"701","firstspecies":3024,"lastspecies":3056,"family":"VIPERIDAE","order":"SQUAMATA","threatenedcount":4,"healthycount":29},{"genus":"Cryptelytrops","family-order":60,"genus-order":"702","firstspecies":3057,"lastspecies":3065,"family":"VIPERIDAE","order":"SQUAMATA","threatenedcount":3,"healthycount":6},{"genus":"Daboia","family-order":60,"genus-order":"703","firstspecies":3066,"lastspecies":3069,"family":"VIPERIDAE","order":"SQUAMATA","threatenedcount":2,"healthycount":2},{"genus":"Echis","family-order":60,"genus-order":"704","firstspecies":3070,"lastspecies":3074,"family":"VIPERIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":5},{"genus":"Garthius","family-order":60,"genus-order":"705","firstspecies":3075,"lastspecies":3075,"family":"VIPERIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Gloydius","family-order":60,"genus-order":"706","firstspecies":3076,"lastspecies":3077,"family":"VIPERIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":1},{"genus":"Himalayophis","family-order":60,"genus-order":"707","firstspecies":3078,"lastspecies":3078,"family":"VIPERIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Hypnale","family-order":60,"genus-order":"708","firstspecies":3079,"lastspecies":3079,"family":"VIPERIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Macrovipera","family-order":60,"genus-order":"709","firstspecies":3080,"lastspecies":3080,"family":"VIPERIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":0},{"genus":"Mixcoatlus","family-order":60,"genus-order":"710","firstspecies":3081,"lastspecies":3082,"family":"VIPERIDAE","order":"SQUAMATA","threatenedcount":2,"healthycount":0},{"genus":"Montivipera","family-order":60,"genus-order":"711","firstspecies":3083,"lastspecies":3090,"family":"VIPERIDAE","order":"SQUAMATA","threatenedcount":6,"healthycount":2},{"genus":"Ophryacus","family-order":60,"genus-order":"712","firstspecies":3091,"lastspecies":3091,"family":"VIPERIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":0},{"genus":"Ovophis","family-order":60,"genus-order":"713","firstspecies":3092,"lastspecies":3096,"family":"VIPERIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":5},{"genus":"Parias","family-order":60,"genus-order":"714","firstspecies":3097,"lastspecies":3099,"family":"VIPERIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":2},{"genus":"Peltopelor","family-order":60,"genus-order":"715","firstspecies":3100,"lastspecies":3100,"family":"VIPERIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":0},{"genus":"Popeia","family-order":60,"genus-order":"716","firstspecies":3101,"lastspecies":3106,"family":"VIPERIDAE","order":"SQUAMATA","threatenedcount":2,"healthycount":4},{"genus":"Porthidium","family-order":60,"genus-order":"717","firstspecies":3107,"lastspecies":3109,"family":"VIPERIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":3},{"genus":"Protobothrops","family-order":60,"genus-order":"718","firstspecies":3110,"lastspecies":3116,"family":"VIPERIDAE","order":"SQUAMATA","threatenedcount":4,"healthycount":3},{"genus":"Pseudocerastes","family-order":60,"genus-order":"719","firstspecies":3117,"lastspecies":3118,"family":"VIPERIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":2},{"genus":"Rhinocerophis","family-order":60,"genus-order":"720","firstspecies":3119,"lastspecies":3119,"family":"VIPERIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Sistrurus","family-order":60,"genus-order":"721","firstspecies":3120,"lastspecies":3121,"family":"VIPERIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":2},{"genus":"Trimeresurus","family-order":60,"genus-order":"722","firstspecies":3122,"lastspecies":3132,"family":"VIPERIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":10},{"genus":"Tropidolaemus","family-order":60,"genus-order":"723","firstspecies":3133,"lastspecies":3134,"family":"VIPERIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":2},{"genus":"Vipera","family-order":60,"genus-order":"724","firstspecies":3135,"lastspecies":3153,"family":"VIPERIDAE","order":"SQUAMATA","threatenedcount":15,"healthycount":4},{"genus":"Viridovipera","family-order":60,"genus-order":"725","firstspecies":3154,"lastspecies":3158,"family":"VIPERIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":4},{"genus":"Lepidophyma","family-order":61,"genus-order":"726","firstspecies":3159,"lastspecies":3168,"family":"XANTUSIIDAE","order":"SQUAMATA","threatenedcount":4,"healthycount":6},{"genus":"Xantusia","family-order":61,"genus-order":"727","firstspecies":3169,"lastspecies":3176,"family":"XANTUSIIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":7},{"genus":"Achalinus","family-order":62,"genus-order":"728","firstspecies":3177,"lastspecies":3183,"family":"XENODERMATIDAE","order":"SQUAMATA","threatenedcount":1,"healthycount":6},{"genus":"Fimbrios","family-order":62,"genus-order":"729","firstspecies":3184,"lastspecies":3184,"family":"XENODERMATIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Stoliczkia","family-order":62,"genus-order":"730","firstspecies":3185,"lastspecies":3185,"family":"XENODERMATIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Xenodermus","family-order":62,"genus-order":"731","firstspecies":3186,"lastspecies":3186,"family":"XENODERMATIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":1},{"genus":"Xylophis","family-order":62,"genus-order":"732","firstspecies":3187,"lastspecies":3188,"family":"XENODERMATIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":2},{"genus":"Xenopeltis","family-order":63,"genus-order":"733","firstspecies":3189,"lastspecies":3190,"family":"XENOPELTIDAE","order":"SQUAMATA","threatenedcount":0,"healthycount":2},{"genus":"Xenosaurus","family-order":64,"genus-order":"734","firstspecies":3191,"lastspecies":3195,"family":"XENOSAURIDAE","order":"SQUAMATA","threatenedcount":3,"healthycount":2},{"genus":"Carettochelys","family-order":65,"genus-order":"735","firstspecies":3196,"lastspecies":3196,"family":"CARETTOCHELYIDAE","order":"TESTUDINES","threatenedcount":1,"healthycount":0},{"genus":"Acanthochelys","family-order":66,"genus-order":"736","firstspecies":3197,"lastspecies":3200,"family":"CHELIDAE","order":"TESTUDINES","threatenedcount":4,"healthycount":0},{"genus":"Chelodina","family-order":66,"genus-order":"737","firstspecies":3201,"lastspecies":3206,"family":"CHELIDAE","order":"TESTUDINES","threatenedcount":5,"healthycount":1},{"genus":"Elseya","family-order":66,"genus-order":"738","firstspecies":3207,"lastspecies":3209,"family":"CHELIDAE","order":"TESTUDINES","threatenedcount":2,"healthycount":1},{"genus":"Elusor","family-order":66,"genus-order":"739","firstspecies":3210,"lastspecies":3210,"family":"CHELIDAE","order":"TESTUDINES","threatenedcount":1,"healthycount":0},{"genus":"Emydura","family-order":66,"genus-order":"740","firstspecies":3211,"lastspecies":3211,"family":"CHELIDAE","order":"TESTUDINES","threatenedcount":0,"healthycount":1},{"genus":"Hydromedusa","family-order":66,"genus-order":"741","firstspecies":3212,"lastspecies":3212,"family":"CHELIDAE","order":"TESTUDINES","threatenedcount":1,"healthycount":0},{"genus":"Mesoclemmys","family-order":66,"genus-order":"742","firstspecies":3213,"lastspecies":3216,"family":"CHELIDAE","order":"TESTUDINES","threatenedcount":4,"healthycount":0},{"genus":"Pseudemydura","family-order":66,"genus-order":"743","firstspecies":3217,"lastspecies":3217,"family":"CHELIDAE","order":"TESTUDINES","threatenedcount":1,"healthycount":0},{"genus":"Rheodytes","family-order":66,"genus-order":"744","firstspecies":3218,"lastspecies":3218,"family":"CHELIDAE","order":"TESTUDINES","threatenedcount":1,"healthycount":0},{"genus":"Rhinemys","family-order":66,"genus-order":"745","firstspecies":3219,"lastspecies":3219,"family":"CHELIDAE","order":"TESTUDINES","threatenedcount":1,"healthycount":0},{"genus":"Caretta","family-order":67,"genus-order":"746","firstspecies":3220,"lastspecies":3220,"family":"CHELONIIDAE","order":"TESTUDINES","threatenedcount":1,"healthycount":0},{"genus":"Chelonia","family-order":67,"genus-order":"747","firstspecies":3221,"lastspecies":3221,"family":"CHELONIIDAE","order":"TESTUDINES","threatenedcount":1,"healthycount":0},{"genus":"Eretmochelys","family-order":67,"genus-order":"748","firstspecies":3222,"lastspecies":3222,"family":"CHELONIIDAE","order":"TESTUDINES","threatenedcount":1,"healthycount":0},{"genus":"Lepidochelys","family-order":67,"genus-order":"749","firstspecies":3223,"lastspecies":3224,"family":"CHELONIIDAE","order":"TESTUDINES","threatenedcount":2,"healthycount":0},{"genus":"Chelydra","family-order":68,"genus-order":"750","firstspecies":3225,"lastspecies":3226,"family":"CHELYDRIDAE","order":"TESTUDINES","threatenedcount":1,"healthycount":1},{"genus":"Macrochelys","family-order":68,"genus-order":"751","firstspecies":3227,"lastspecies":3227,"family":"CHELYDRIDAE","order":"TESTUDINES","threatenedcount":1,"healthycount":0},{"genus":"Dermatemys","family-order":69,"genus-order":"752","firstspecies":3228,"lastspecies":3228,"family":"DERMATEMYDIDAE","order":"TESTUDINES","threatenedcount":1,"healthycount":0},{"genus":"Dermochelys","family-order":70,"genus-order":"753","firstspecies":3229,"lastspecies":3229,"family":"DERMOCHELYIDAE","order":"TESTUDINES","threatenedcount":1,"healthycount":0},{"genus":"Actinemys","family-order":71,"genus-order":"754","firstspecies":3230,"lastspecies":3230,"family":"EMYDIDAE","order":"TESTUDINES","threatenedcount":1,"healthycount":0},{"genus":"Chrysemys","family-order":71,"genus-order":"755","firstspecies":3231,"lastspecies":3231,"family":"EMYDIDAE","order":"TESTUDINES","threatenedcount":0,"healthycount":1},{"genus":"Clemmys","family-order":71,"genus-order":"756","firstspecies":3232,"lastspecies":3232,"family":"EMYDIDAE","order":"TESTUDINES","threatenedcount":1,"healthycount":0},{"genus":"Emydoidea","family-order":71,"genus-order":"757","firstspecies":3233,"lastspecies":3233,"family":"EMYDIDAE","order":"TESTUDINES","threatenedcount":1,"healthycount":0},{"genus":"Emys","family-order":71,"genus-order":"758","firstspecies":3234,"lastspecies":3234,"family":"EMYDIDAE","order":"TESTUDINES","threatenedcount":1,"healthycount":0},{"genus":"Glyptemys","family-order":71,"genus-order":"759","firstspecies":3235,"lastspecies":3236,"family":"EMYDIDAE","order":"TESTUDINES","threatenedcount":2,"healthycount":0},{"genus":"Graptemys","family-order":71,"genus-order":"760","firstspecies":3237,"lastspecies":3249,"family":"EMYDIDAE","order":"TESTUDINES","threatenedcount":8,"healthycount":5},{"genus":"Malaclemys","family-order":71,"genus-order":"761","firstspecies":3250,"lastspecies":3250,"family":"EMYDIDAE","order":"TESTUDINES","threatenedcount":1,"healthycount":0},{"genus":"Pseudemys","family-order":71,"genus-order":"762","firstspecies":3251,"lastspecies":3257,"family":"EMYDIDAE","order":"TESTUDINES","threatenedcount":3,"healthycount":4},{"genus":"Terrapene","family-order":71,"genus-order":"763","firstspecies":3258,"lastspecies":3260,"family":"EMYDIDAE","order":"TESTUDINES","threatenedcount":3,"healthycount":0},{"genus":"Trachemys","family-order":71,"genus-order":"764","firstspecies":3261,"lastspecies":3269,"family":"EMYDIDAE","order":"TESTUDINES","threatenedcount":8,"healthycount":1},{"genus":"Batagur","family-order":72,"genus-order":"765","firstspecies":3270,"lastspecies":3274,"family":"GEOEMYDIDAE","order":"TESTUDINES","threatenedcount":5,"healthycount":0},{"genus":"Cuora","family-order":72,"genus-order":"766","firstspecies":3275,"lastspecies":3284,"family":"GEOEMYDIDAE","order":"TESTUDINES","threatenedcount":10,"healthycount":0},{"genus":"Cyclemys","family-order":72,"genus-order":"767","firstspecies":3285,"lastspecies":3285,"family":"GEOEMYDIDAE","order":"TESTUDINES","threatenedcount":1,"healthycount":0},{"genus":"Geoclemys","family-order":72,"genus-order":"768","firstspecies":3286,"lastspecies":3286,"family":"GEOEMYDIDAE","order":"TESTUDINES","threatenedcount":1,"healthycount":0},{"genus":"Geoemyda","family-order":72,"genus-order":"769","firstspecies":3287,"lastspecies":3288,"family":"GEOEMYDIDAE","order":"TESTUDINES","threatenedcount":2,"healthycount":0},{"genus":"Hardella","family-order":72,"genus-order":"770","firstspecies":3289,"lastspecies":3289,"family":"GEOEMYDIDAE","order":"TESTUDINES","threatenedcount":1,"healthycount":0},{"genus":"Heosemys","family-order":72,"genus-order":"771","firstspecies":3290,"lastspecies":3293,"family":"GEOEMYDIDAE","order":"TESTUDINES","threatenedcount":4,"healthycount":0},{"genus":"Leucocephalon","family-order":72,"genus-order":"772","firstspecies":3294,"lastspecies":3294,"family":"GEOEMYDIDAE","order":"TESTUDINES","threatenedcount":1,"healthycount":0},{"genus":"Malayemys","family-order":72,"genus-order":"773","firstspecies":3295,"lastspecies":3295,"family":"GEOEMYDIDAE","order":"TESTUDINES","threatenedcount":1,"healthycount":0},{"genus":"Mauremys","family-order":72,"genus-order":"774","firstspecies":3296,"lastspecies":3301,"family":"GEOEMYDIDAE","order":"TESTUDINES","threatenedcount":6,"healthycount":0},{"genus":"Melanochelys","family-order":72,"genus-order":"775","firstspecies":3302,"lastspecies":3303,"family":"GEOEMYDIDAE","order":"TESTUDINES","threatenedcount":2,"healthycount":0},{"genus":"Morenia","family-order":72,"genus-order":"776","firstspecies":3304,"lastspecies":3305,"family":"GEOEMYDIDAE","order":"TESTUDINES","threatenedcount":2,"healthycount":0},{"genus":"Notochelys","family-order":72,"genus-order":"777","firstspecies":3306,"lastspecies":3306,"family":"GEOEMYDIDAE","order":"TESTUDINES","threatenedcount":1,"healthycount":0},{"genus":"Orlitia","family-order":72,"genus-order":"778","firstspecies":3307,"lastspecies":3307,"family":"GEOEMYDIDAE","order":"TESTUDINES","threatenedcount":1,"healthycount":0},{"genus":"Pangshura","family-order":72,"genus-order":"779","firstspecies":3308,"lastspecies":3311,"family":"GEOEMYDIDAE","order":"TESTUDINES","threatenedcount":2,"healthycount":2},{"genus":"Rhinoclemmys","family-order":72,"genus-order":"780","firstspecies":3312,"lastspecies":3316,"family":"GEOEMYDIDAE","order":"TESTUDINES","threatenedcount":5,"healthycount":0},{"genus":"Sacalia","family-order":72,"genus-order":"781","firstspecies":3317,"lastspecies":3318,"family":"GEOEMYDIDAE","order":"TESTUDINES","threatenedcount":2,"healthycount":0},{"genus":"Siebenrockiella","family-order":72,"genus-order":"782","firstspecies":3319,"lastspecies":3320,"family":"GEOEMYDIDAE","order":"TESTUDINES","threatenedcount":2,"healthycount":0},{"genus":"Vijayachelys","family-order":72,"genus-order":"783","firstspecies":3321,"lastspecies":3321,"family":"GEOEMYDIDAE","order":"TESTUDINES","threatenedcount":1,"healthycount":0},{"genus":"Claudius","family-order":73,"genus-order":"784","firstspecies":3322,"lastspecies":3322,"family":"KINOSTERNIDAE","order":"TESTUDINES","threatenedcount":1,"healthycount":0},{"genus":"Kinosternon","family-order":73,"genus-order":"785","firstspecies":3323,"lastspecies":3335,"family":"KINOSTERNIDAE","order":"TESTUDINES","threatenedcount":5,"healthycount":8},{"genus":"Staurotypus","family-order":73,"genus-order":"786","firstspecies":3336,"lastspecies":3337,"family":"KINOSTERNIDAE","order":"TESTUDINES","threatenedcount":2,"healthycount":0},{"genus":"Sternotherus","family-order":73,"genus-order":"787","firstspecies":3338,"lastspecies":3341,"family":"KINOSTERNIDAE","order":"TESTUDINES","threatenedcount":1,"healthycount":3},{"genus":"Pelusios","family-order":74,"genus-order":"788","firstspecies":3342,"lastspecies":3345,"family":"PELOMEDUSIDAE","order":"TESTUDINES","threatenedcount":1,"healthycount":3},{"genus":"Platysternon","family-order":75,"genus-order":"789","firstspecies":3346,"lastspecies":3346,"family":"PLATYSTERNIDAE","order":"TESTUDINES","threatenedcount":1,"healthycount":0},{"genus":"Erymnochelys","family-order":76,"genus-order":"790","firstspecies":3347,"lastspecies":3347,"family":"PODOCNEMIDIDAE","order":"TESTUDINES","threatenedcount":1,"healthycount":0},{"genus":"Peltocephalus","family-order":76,"genus-order":"791","firstspecies":3348,"lastspecies":3348,"family":"PODOCNEMIDIDAE","order":"TESTUDINES","threatenedcount":1,"healthycount":0},{"genus":"Podocnemis","family-order":76,"genus-order":"792","firstspecies":3349,"lastspecies":3353,"family":"PODOCNEMIDIDAE","order":"TESTUDINES","threatenedcount":5,"healthycount":0},{"genus":"Astrochelys","family-order":77,"genus-order":"793","firstspecies":3354,"lastspecies":3355,"family":"TESTUDINIDAE","order":"TESTUDINES","threatenedcount":2,"healthycount":0},{"genus":"Centrochelys","family-order":77,"genus-order":"794","firstspecies":3356,"lastspecies":3356,"family":"TESTUDINIDAE","order":"TESTUDINES","threatenedcount":1,"healthycount":0},{"genus":"Chelonoidis","family-order":77,"genus-order":"795","firstspecies":3357,"lastspecies":3359,"family":"TESTUDINIDAE","order":"TESTUDINES","threatenedcount":3,"healthycount":0},{"genus":"Geochelone","family-order":77,"genus-order":"796","firstspecies":3360,"lastspecies":3362,"family":"TESTUDINIDAE","order":"TESTUDINES","threatenedcount":2,"healthycount":1},{"genus":"Gopherus","family-order":77,"genus-order":"797","firstspecies":3363,"lastspecies":3366,"family":"TESTUDINIDAE","order":"TESTUDINES","threatenedcount":3,"healthycount":1},{"genus":"Homopus","family-order":77,"genus-order":"798","firstspecies":3367,"lastspecies":3368,"family":"TESTUDINIDAE","order":"TESTUDINES","threatenedcount":2,"healthycount":0},{"genus":"Indotestudo","family-order":77,"genus-order":"799","firstspecies":3369,"lastspecies":3371,"family":"TESTUDINIDAE","order":"TESTUDINES","threatenedcount":3,"healthycount":0},{"genus":"Kinixys","family-order":77,"genus-order":"800","firstspecies":3372,"lastspecies":3373,"family":"TESTUDINIDAE","order":"TESTUDINES","threatenedcount":2,"healthycount":0},{"genus":"Malacochersus","family-order":77,"genus-order":"801","firstspecies":3374,"lastspecies":3374,"family":"TESTUDINIDAE","order":"TESTUDINES","threatenedcount":1,"healthycount":0},{"genus":"Manouria","family-order":77,"genus-order":"802","firstspecies":3375,"lastspecies":3376,"family":"TESTUDINIDAE","order":"TESTUDINES","threatenedcount":2,"healthycount":0},{"genus":"Psammobates","family-order":77,"genus-order":"803","firstspecies":3377,"lastspecies":3377,"family":"TESTUDINIDAE","order":"TESTUDINES","threatenedcount":1,"healthycount":0},{"genus":"Pyxis","family-order":77,"genus-order":"804","firstspecies":3378,"lastspecies":3379,"family":"TESTUDINIDAE","order":"TESTUDINES","threatenedcount":2,"healthycount":0},{"genus":"Testudo","family-order":77,"genus-order":"805","firstspecies":3380,"lastspecies":3384,"family":"TESTUDINIDAE","order":"TESTUDINES","threatenedcount":4,"healthycount":1},{"genus":"Amyda","family-order":78,"genus-order":"806","firstspecies":3385,"lastspecies":3385,"family":"TRIONYCHIDAE","order":"TESTUDINES","threatenedcount":1,"healthycount":0},{"genus":"Apalone","family-order":78,"genus-order":"807","firstspecies":3386,"lastspecies":3388,"family":"TRIONYCHIDAE","order":"TESTUDINES","threatenedcount":0,"healthycount":3},{"genus":"Chitra","family-order":78,"genus-order":"808","firstspecies":3389,"lastspecies":3390,"family":"TRIONYCHIDAE","order":"TESTUDINES","threatenedcount":2,"healthycount":0},{"genus":"Cyclanorbis","family-order":78,"genus-order":"809","firstspecies":3391,"lastspecies":3392,"family":"TRIONYCHIDAE","order":"TESTUDINES","threatenedcount":2,"healthycount":0},{"genus":"Cycloderma","family-order":78,"genus-order":"810","firstspecies":3393,"lastspecies":3393,"family":"TRIONYCHIDAE","order":"TESTUDINES","threatenedcount":1,"healthycount":0},{"genus":"Dogania","family-order":78,"genus-order":"811","firstspecies":3394,"lastspecies":3394,"family":"TRIONYCHIDAE","order":"TESTUDINES","threatenedcount":0,"healthycount":1},{"genus":"Lissemys","family-order":78,"genus-order":"812","firstspecies":3395,"lastspecies":3395,"family":"TRIONYCHIDAE","order":"TESTUDINES","threatenedcount":0,"healthycount":1},{"genus":"Nilssonia","family-order":78,"genus-order":"813","firstspecies":3396,"lastspecies":3400,"family":"TRIONYCHIDAE","order":"TESTUDINES","threatenedcount":5,"healthycount":0},{"genus":"Palea","family-order":78,"genus-order":"814","firstspecies":3401,"lastspecies":3401,"family":"TRIONYCHIDAE","order":"TESTUDINES","threatenedcount":1,"healthycount":0},{"genus":"Pelochelys","family-order":78,"genus-order":"815","firstspecies":3402,"lastspecies":3403,"family":"TRIONYCHIDAE","order":"TESTUDINES","threatenedcount":2,"healthycount":0},{"genus":"Pelodiscus","family-order":78,"genus-order":"816","firstspecies":3404,"lastspecies":3404,"family":"TRIONYCHIDAE","order":"TESTUDINES","threatenedcount":1,"healthycount":0},{"genus":"Rafetus","family-order":78,"genus-order":"817","firstspecies":3405,"lastspecies":3406,"family":"TRIONYCHIDAE","order":"TESTUDINES","threatenedcount":2,"healthycount":0}];
incrementProgress();
incrementProgress();
classdata[2].familydata=[{"familyname":"ALLIGATORIDAE","ordername":"CROCODYLIA","firstgenus":0,"lastgenus":3,"threatenedcount":2,"healthycount":6},{"familyname":"CROCODYLIDAE","ordername":"CROCODYLIA","firstgenus":4,"lastgenus":6,"threatenedcount":8,"healthycount":5},{"familyname":"GAVIALIDAE","ordername":"CROCODYLIA","firstgenus":7,"lastgenus":7,"threatenedcount":1,"healthycount":0},{"familyname":"SPHENODONTIDAE","ordername":"RHYNCHOCEPHALIA","firstgenus":8,"lastgenus":8,"threatenedcount":1,"healthycount":1},{"familyname":"ACROCHORDIDAE","ordername":"SQUAMATA","firstgenus":9,"lastgenus":9,"threatenedcount":0,"healthycount":3},{"familyname":"AGAMIDAE","ordername":"SQUAMATA","firstgenus":10,"lastgenus":42,"threatenedcount":22,"healthycount":88},{"familyname":"AMPHISBAENIDAE","ordername":"SQUAMATA","firstgenus":43,"lastgenus":48,"threatenedcount":7,"healthycount":14},{"familyname":"ANGUIDAE","ordername":"SQUAMATA","firstgenus":49,"lastgenus":58,"threatenedcount":31,"healthycount":32},{"familyname":"ANNIELLIDAE","ordername":"SQUAMATA","firstgenus":59,"lastgenus":59,"threatenedcount":1,"healthycount":1},{"familyname":"ANOMALEPIDIDAE","ordername":"SQUAMATA","firstgenus":60,"lastgenus":60,"threatenedcount":0,"healthycount":2},{"familyname":"ANOMOCHILIDAE","ordername":"SQUAMATA","firstgenus":61,"lastgenus":61,"threatenedcount":0,"healthycount":1},{"familyname":"ATRACTASPIDIDAE","ordername":"SQUAMATA","firstgenus":62,"lastgenus":67,"threatenedcount":2,"healthycount":16},{"familyname":"BIPEDIDAE","ordername":"SQUAMATA","firstgenus":68,"lastgenus":68,"threatenedcount":0,"healthycount":3},{"familyname":"BOIDAE","ordername":"SQUAMATA","firstgenus":69,"lastgenus":77,"threatenedcount":4,"healthycount":10},{"familyname":"BOLYERIDAE","ordername":"SQUAMATA","firstgenus":78,"lastgenus":78,"threatenedcount":1,"healthycount":0},{"familyname":"CALAMARIIDAE","ordername":"SQUAMATA","firstgenus":79,"lastgenus":82,"threatenedcount":6,"healthycount":40},{"familyname":"CARPHODACTYLIDAE","ordername":"SQUAMATA","firstgenus":83,"lastgenus":86,"threatenedcount":3,"healthycount":5},{"familyname":"CHAMAELEONIDAE","ordername":"SQUAMATA","firstgenus":87,"lastgenus":94,"threatenedcount":65,"healthycount":36},{"familyname":"COLUBRIDAE","ordername":"SQUAMATA","firstgenus":95,"lastgenus":187,"threatenedcount":48,"healthycount":292},{"familyname":"CORDYLIDAE","ordername":"SQUAMATA","firstgenus":188,"lastgenus":189,"threatenedcount":11,"healthycount":5},{"familyname":"CORYTOPHANIDAE","ordername":"SQUAMATA","firstgenus":190,"lastgenus":192,"threatenedcount":0,"healthycount":5},{"familyname":"CROTAPHYTIDAE","ordername":"SQUAMATA","firstgenus":193,"lastgenus":194,"threatenedcount":3,"healthycount":9},{"familyname":"CYLINDROPHIIDAE","ordername":"SQUAMATA","firstgenus":195,"lastgenus":195,"threatenedcount":0,"healthycount":1},{"familyname":"DACTYLOIDAE","ordername":"SQUAMATA","firstgenus":196,"lastgenus":196,"threatenedcount":28,"healthycount":43},{"familyname":"DIBAMIDAE","ordername":"SQUAMATA","firstgenus":197,"lastgenus":198,"threatenedcount":0,"healthycount":2},{"familyname":"DIPLODACTYLIDAE","ordername":"SQUAMATA","firstgenus":199,"lastgenus":205,"threatenedcount":21,"healthycount":10},{"familyname":"DIPSADIDAE","ordername":"SQUAMATA","firstgenus":206,"lastgenus":271,"threatenedcount":41,"healthycount":156},{"familyname":"ELAPIDAE","ordername":"SQUAMATA","firstgenus":272,"lastgenus":315,"threatenedcount":32,"healthycount":98},{"familyname":"EUBLEPHARIDAE","ordername":"SQUAMATA","firstgenus":316,"lastgenus":319,"threatenedcount":1,"healthycount":12},{"familyname":"GEKKONIDAE","ordername":"SQUAMATA","firstgenus":320,"lastgenus":369,"threatenedcount":118,"healthycount":173},{"familyname":"GERRHOSAURIDAE","ordername":"SQUAMATA","firstgenus":370,"lastgenus":374,"threatenedcount":10,"healthycount":13},{"familyname":"GYMNOPHTHALMIDAE","ordername":"SQUAMATA","firstgenus":375,"lastgenus":391,"threatenedcount":12,"healthycount":20},{"familyname":"HELODERMATIDAE","ordername":"SQUAMATA","firstgenus":392,"lastgenus":392,"threatenedcount":1,"healthycount":1},{"familyname":"HOMALOPSIDAE","ordername":"SQUAMATA","firstgenus":393,"lastgenus":401,"threatenedcount":3,"healthycount":20},{"familyname":"IGUANIDAE","ordername":"SQUAMATA","firstgenus":402,"lastgenus":409,"threatenedcount":30,"healthycount":3},{"familyname":"LACERTIDAE","ordername":"SQUAMATA","firstgenus":410,"lastgenus":443,"threatenedcount":60,"healthycount":101},{"familyname":"LAMPROPHIIDAE","ordername":"SQUAMATA","firstgenus":444,"lastgenus":448,"threatenedcount":4,"healthycount":14},{"familyname":"LEIOSAURIDAE","ordername":"SQUAMATA","firstgenus":449,"lastgenus":453,"threatenedcount":1,"healthycount":6},{"familyname":"LEPTOTYPHLOPIDAE","ordername":"SQUAMATA","firstgenus":454,"lastgenus":460,"threatenedcount":0,"healthycount":18},{"familyname":"NATRICIDAE","ordername":"SQUAMATA","firstgenus":461,"lastgenus":486,"threatenedcount":22,"healthycount":107},{"familyname":"OPLURIDAE","ordername":"SQUAMATA","firstgenus":487,"lastgenus":488,"threatenedcount":0,"healthycount":7},{"familyname":"PAREATIDAE","ordername":"SQUAMATA","firstgenus":489,"lastgenus":491,"threatenedcount":0,"healthycount":10},{"familyname":"PHRYNOSOMATIDAE","ordername":"SQUAMATA","firstgenus":492,"lastgenus":500,"threatenedcount":23,"healthycount":99},{"familyname":"PHYLLODACTYLIDAE","ordername":"SQUAMATA","firstgenus":501,"lastgenus":506,"threatenedcount":7,"healthycount":46},{"familyname":"PROSYMNIDAE","ordername":"SQUAMATA","firstgenus":507,"lastgenus":507,"threatenedcount":1,"healthycount":4},{"familyname":"PSAMMOPHIIDAE","ordername":"SQUAMATA","firstgenus":508,"lastgenus":512,"threatenedcount":0,"healthycount":8},{"familyname":"PSEUDOXENODONTIDAE","ordername":"SQUAMATA","firstgenus":513,"lastgenus":514,"threatenedcount":0,"healthycount":6},{"familyname":"PSEUDOXYRHOPHIIDAE","ordername":"SQUAMATA","firstgenus":515,"lastgenus":536,"threatenedcount":31,"healthycount":47},{"familyname":"PYGOPODIDAE","ordername":"SQUAMATA","firstgenus":537,"lastgenus":540,"threatenedcount":8,"healthycount":1},{"familyname":"PYTHONIDAE","ordername":"SQUAMATA","firstgenus":541,"lastgenus":545,"threatenedcount":4,"healthycount":9},{"familyname":"RHINEURIDAE","ordername":"SQUAMATA","firstgenus":546,"lastgenus":546,"threatenedcount":0,"healthycount":1},{"familyname":"SCINCIDAE","ordername":"SQUAMATA","firstgenus":547,"lastgenus":641,"threatenedcount":178,"healthycount":269},{"familyname":"SPHAERODACTYLIDAE","ordername":"SQUAMATA","firstgenus":642,"lastgenus":651,"threatenedcount":18,"healthycount":41},{"familyname":"TEIIDAE","ordername":"SQUAMATA","firstgenus":652,"lastgenus":658,"threatenedcount":14,"healthycount":46},{"familyname":"TROGONOPHIDAE","ordername":"SQUAMATA","firstgenus":659,"lastgenus":660,"threatenedcount":0,"healthycount":2},{"familyname":"TROPIDOPHIIDAE","ordername":"SQUAMATA","firstgenus":661,"lastgenus":662,"threatenedcount":2,"healthycount":1},{"familyname":"TROPIDURIDAE","ordername":"SQUAMATA","firstgenus":663,"lastgenus":671,"threatenedcount":16,"healthycount":33},{"familyname":"TYPHLOPIDAE","ordername":"SQUAMATA","firstgenus":672,"lastgenus":679,"threatenedcount":13,"healthycount":34},{"familyname":"UROPELTIDAE","ordername":"SQUAMATA","firstgenus":680,"lastgenus":686,"threatenedcount":7,"healthycount":16},{"familyname":"VARANIDAE","ordername":"SQUAMATA","firstgenus":687,"lastgenus":687,"threatenedcount":4,"healthycount":15},{"familyname":"VIPERIDAE","ordername":"SQUAMATA","firstgenus":688,"lastgenus":725,"threatenedcount":56,"healthycount":110},{"familyname":"XANTUSIIDAE","ordername":"SQUAMATA","firstgenus":726,"lastgenus":727,"threatenedcount":5,"healthycount":13},{"familyname":"XENODERMATIDAE","ordername":"SQUAMATA","firstgenus":728,"lastgenus":732,"threatenedcount":1,"healthycount":11},{"familyname":"XENOPELTIDAE","ordername":"SQUAMATA","firstgenus":733,"lastgenus":733,"threatenedcount":0,"healthycount":2},{"familyname":"XENOSAURIDAE","ordername":"SQUAMATA","firstgenus":734,"lastgenus":734,"threatenedcount":3,"healthycount":2},{"familyname":"CARETTOCHELYIDAE","ordername":"TESTUDINES","firstgenus":735,"lastgenus":735,"threatenedcount":1,"healthycount":0},{"familyname":"CHELIDAE","ordername":"TESTUDINES","firstgenus":736,"lastgenus":745,"threatenedcount":20,"healthycount":3},{"familyname":"CHELONIIDAE","ordername":"TESTUDINES","firstgenus":746,"lastgenus":749,"threatenedcount":5,"healthycount":0},{"familyname":"CHELYDRIDAE","ordername":"TESTUDINES","firstgenus":750,"lastgenus":751,"threatenedcount":2,"healthycount":1},{"familyname":"DERMATEMYDIDAE","ordername":"TESTUDINES","firstgenus":752,"lastgenus":752,"threatenedcount":1,"healthycount":0},{"familyname":"DERMOCHELYIDAE","ordername":"TESTUDINES","firstgenus":753,"lastgenus":753,"threatenedcount":1,"healthycount":0},{"familyname":"EMYDIDAE","ordername":"TESTUDINES","firstgenus":754,"lastgenus":764,"threatenedcount":29,"healthycount":11},{"familyname":"GEOEMYDIDAE","ordername":"TESTUDINES","firstgenus":765,"lastgenus":783,"threatenedcount":50,"healthycount":2},{"familyname":"KINOSTERNIDAE","ordername":"TESTUDINES","firstgenus":784,"lastgenus":787,"threatenedcount":9,"healthycount":11},{"familyname":"PELOMEDUSIDAE","ordername":"TESTUDINES","firstgenus":788,"lastgenus":788,"threatenedcount":1,"healthycount":3},{"familyname":"PLATYSTERNIDAE","ordername":"TESTUDINES","firstgenus":789,"lastgenus":789,"threatenedcount":1,"healthycount":0},{"familyname":"PODOCNEMIDIDAE","ordername":"TESTUDINES","firstgenus":790,"lastgenus":792,"threatenedcount":7,"healthycount":0},{"familyname":"TESTUDINIDAE","ordername":"TESTUDINES","firstgenus":793,"lastgenus":805,"threatenedcount":28,"healthycount":3},{"familyname":"TRIONYCHIDAE","ordername":"TESTUDINES","firstgenus":806,"lastgenus":817,"threatenedcount":17,"healthycount":5}];
incrementProgress();
classdata[2].ordernames=["CROCODYLIA","RHYNCHOCEPHALIA","SQUAMATA","TESTUDINES"];
classdata[2].orderdata=[{"ordername":"CROCODYLIA","firstgenus":0,"lastgenus":7,"threatenedcount":11,"healthycount":11},{"ordername":"RHYNCHOCEPHALIA","firstgenus":8,"lastgenus":8,"threatenedcount":1,"healthycount":1},{"ordername":"SQUAMATA","firstgenus":9,"lastgenus":734,"threatenedcount":979,"healthycount":2193},{"ordername":"TESTUDINES","firstgenus":735,"lastgenus":817,"threatenedcount":172,"healthycount":39}];


// Set up the page
var margin = {top: 0, right: 0, bottom: 0, left: 0},
    width = 1000 - margin.left - margin.right,
    height = 1000 - margin.top - margin.bottom;
    
    
    

//familytooltip
	//	.style("left", 
	
	
var svg = d3.select("#chart").append("svg")
	.attr("class", "svgclass")
	
	.attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    //.attr("class", "bigsvg")
    //.on("mousedofwn")
    .on("mousedown", function() { 
    	selectedspecies=undefined;
    	clickedspecies=undefined;
    	svg.selectAll(".focusrect").classed("specieshighlighted", false);
    	svg.selectAll(".focusrect").classed("speciesclicked", false);
    	
    	clearAllHighlights();
    	
    	//selectedspecies=null;
    	//updateHighlights();
    	//clearAllHighlights();
    	//	clearAllHighlights();//
    })
    .on("click", function() {
    		//showVis(); 
    	})
  .append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");
  
  
 
//d3.selectAll(".svgclass").style("display", "block")
     
// d3.select("#chart").attr("display", "block")  


// General view/inti variables
var threatenedthresh = 40;
var graphwidth = 815;
var x0 = (width/2.0)-(graphwidth/2.0);
var init = true;
var switchingclass = true;
var selectedfamily;
var selectedorder;
var selectedspecies;
var scrollbuttonspace = 10;
var typeaheady = 404;
var instructionsy = typeaheady+67;
var divwidth=1000;


// Focus view variables
var focusorderdata, focusfamilydata, focusspeciesdata;
var selectedfamily;
var focusp1, focusp1, initfocusp1=0, initfocusp2=90;
var focusx0 = x0 - scrollbuttonspace;
var focusgraphwidth = graphwidth+(2*scrollbuttonspace)
//var focusgraphtopmargin = 34
var focusgraphtopmargin = 75
var focusxspace, focusmaxorders = 4, orderoffsetspace = 5, numfocus, focuswidth;
var focusy0 = 610;
var focusgraphheight = focusy0-focusgraphtopmargin;
var focusyspeciesspace = 0;
var focusdata, focusorderdata, focusgenusdata, focusorderendpoints;
// Variables for padding for tall genuses
var tallgenusthresh = 100;
var tallgenuspadding = 15;
var tallgenustoppadding = 0;
var focustallgenusdata;
// Families
var familyy = focusy0;
var familyheight = 6;
var familycolors = ["#BCBEC0", "#939598"];
var familyspeciesyspace = 3;
var familyspace = 1;
var familytooltipy = familyy+familyheight+familyspeciesyspace;
var familytooltip;
var tooltip, ttspecieslabel, ttthreatlabel, ttsciname;
// Orders
var focusorderlineheight = 168;
var orderlabeldx = 3;
var wordbuffer = 1;
var orderlabely = familyy-focusorderlineheight+10;
var orderlabel2y = orderlabely+30;
var orderlabelnumberspace = 15;
var wordlen, wordheight;
var cutofflabels;
var lowerypos;

// Context view variables
var contextimage;
var contexthighlightcircles;
var contextcircles;
var contextgraphheight=40;
var contextgraphscale = 35;
var radius = .8;
var y0 = focusy0+contextgraphheight+familyheight-(radius);
var tooltipy0 = y0+5; //y0+contextgraphheight+10;
var speciesheight;
// Families
var contextfamilyspacescale = 1;
var contextfamilyspace = 3;
var contextfamilyy = y0+contextfamilyspace;
var contextyspace;
// Orders
var contextorderlabely = focusy0+familyheight+(contextgraphheight/2)+7;
var contextorderliney = focusy0+15;
var contextorderliney0 = y0;
// Label
var contextlabelwidth;
var contextlabely = y0+40;
var contextlabelliney = contextlabely-5;
var contextlabelhelperrectspace = 4;
// Brush
var brushdata;  
var brushheight=13, brushspace = 5;
var brushlinedata = [-2, -1, 0, 1, 2]
var brushlineheight=6;
var brushlinespace = 3;
brushcontextwhitebackgroundy0 = focusy0+3;
var brushcontextwhitebackgroundheight = contextfamilyspace+brushheight+contextgraphheight+familyheight-1;

// Class section
// Buttons
var classBarMaxWidth = 60;
var classBarScale = d3.scale.linear().range([0, classBarMaxWidth]).domain([0, 3837.5])
var buttony0 = 67; //y0+83;
var buttonyspace = 61;
var selectedclass;
var baryspace = 2;
var baryheight = 4;
// Text
var contextdiv, classdatachart;
var title, classstat, classbodycopy1, classbodycopy2;
var classx = divwidth/2.0; //focusx0;//x0+140;

var classy = 75;//y0+75;
var titleliney = classy+25;
var classlineheight = 4;
var classlinespace = 15;
var classgraphspace = 18;
var hoveredclass;
// Data bars 
var classDataMaxWidth = 235;
var classDataScale = d3.scale.linear().range([0, classDataMaxWidth]).domain([0, 3837.5])
var classchartwidth = 950;
var classchartheight = 350;
var classsvgx = classx - (classchartwidth/2);
var classsvg; 
var classdatabary0 = 137;
var classdatabartextspace = 5;
var classdatayspace = 3;
var classdataheight = 7;
var classdatabarsx = 218;
var classdatabackgroundlinelength = 16;
var minclassdatawidth = .5;
var classdatalabelxspace = 3;
// Legend
var legendx = 365;
var legendxspace=150;
var legendy0=instructionsy+45;
var legendrectheight=6;
var legendrectwidth=15;
var legenddata = [{"type": "healthy", "text":"Number Healthy", "definition": ""}, 
{"type": "threatened", "text":"Number Threatened", "definition": ""}];
//{"type": "background", "text":"'Natural' extinction", "definition": ""}]

// Transitions
var brushTransitionTime = 750;
var transitionduration = 500;
var transitiondelaytime = 0;

incrementProgress();

var windowoffset = (window.innerWidth-1000)/2.0;
document.getElementById("amphibiansviddiv").style.left= windowoffset+40+"px";//windowoffset+(divwidth/2)-120+"px"
document.getElementById("reptilesviddiv").style.left= windowoffset-20+"px";//windowoffset+(divwidth/2)-175+"px"
document.getElementById("mammalsviddiv").style.left= windowoffset+40+"px";//windowoffset+(divwidth/2)-104+"px"
document.getElementById("birdsviddiv").style.left= windowoffset+125+"px";//windowoffset+(divwidth/2)-40+"px"
//104
// Render typeahead stuff
var searchdiv;
searchdiv = d3.select("#chart").append("div");
searchdiv.attr("id", "searchid");
searchdiv
	.style("left", windowoffset+focusx0+focusgraphwidth-195+"px")
	.style("top", typeaheady+"px")
document.getElementById("searchid").innerHTML='<input type="text" id="search" autocomplete="off" data-provide="typeahead" >';

var searchselect=false; 
var typeahead = $('#search').typeahead({
    onselect: select,
    items: 10
        });

resetSearchInput();
function resetSearchInput() {
//console.log("resetting search")
	var placeholder;
	if (currclassindex==0) {
	placeholder = "an amphibian";
	} else {
	placeholder = "a "+classdata[currclassindex].class.substring(0, classdata[currclassindex].class.length-1);
	}
	document.getElementById("search").placeholder="Search for "+placeholder;

	typeahead[0].value = "";
 
 
 //var input = document.getElementById ("searchid");
//input.placeholder = "No need to fill this field";

//document.getElementById("searchid").innerHTML.setAttribute('placeholder',"Please enter your name to continue")

//document.getElementById("searchid").innerHTML.placeholder='hello';
//='<input type="text" placeholder="Search for '+'an animal" id="search" autocomplete="off" data-provide="typeahead" >';
}

        
function setupTypeahead() {

}
     
     
     
// svg.append("rect").attr("class", "backgroundrect").attr("x", x0).attr("y", focusy0-focusgraphheight).attr("width", graphwidth).attr("height", focusgraphheight).attr("fill", "yellow");  
         
     
     
     
     
        

// Wait for the first dataset to be loaded before building the view
queue() 
    .defer(loadInitClass, "data/"+classdata[currclassindex].class+"-results-small.tsv")
    .await(ready)
      
// Once data is loaded, render and update the visualization
function ready(error, d) {
	data = d;
	
	//Set up typeahead
	setupTypeahead();
	
	// Get the view ready for the specified dataset
	initializeView();
	
	// Render the view
	//render();
	renderTooltip();
	renderSpeciesText();
		
	//showVis();
	// Load remaining data
	loadAllSpecies();

}


function setupTypeahead() {

}


//var firstRender = true;
init = true;

function showVis() {
//	if (!init) {
//		document.getElementById("chart").style.display="block"
//		document.getElementById(classdata[currclassindex].class+"viddiv").style.display="block"
//		return;
//	}
data = alldata[currclassindex];
if (init) {
render();

}
	//
	//initializeView();
	//vids[currclassindex].vid.pause();
	document.getElementById("chart").style.display="block"
	document.getElementById("searchid").style.display="block"
	
	//document.getElementById(classdata[currclassindex].class+"viddiv").style.display="block"
	//selectedspecies = undefined;
	//clickedspecies = undefined;
	//resetSearchInput();
	//document.getElementById(classdata[currclassindex].class+"viddiv").style.opacity=1;
//	focusp1=200;
//	focusp2=290;
	// Update the view
    
	//init=true;

	//updateAll();
	
	//changeClass(currclassindex)
	
	
	data = alldata[currclassindex];
	selectedclass = classdata[currclassindex].class;
	clickedspecies = data[116];
    selectedspecies = data[116];
	initializeView();
	//clearAllHighlights();
	initializeBrush();
	updateBrush();
	//updateBrushWithTransition();

   
	updateAll();
	
	setTimeout(function(){
		 updateSpeciesText();
		 updateHighlights();
		 clickedspecies = undefined;
	}, transitionduration)
	

  document.getElementById("legendimgid").style.display="block";
	
	//resetSearchInput();
	
	//switchingclass = false;
	if (init) {
	staticClassChart();
	}
	init = false;
		
//	focusp1=200;
//	focusp2=290;
	//update();
	//nudgeSlider();
//	beginAnimateSpeciesHighlights();
	
	
	
	
}

function nudgeSlider() {
	setTimeout(function(){
		//d3.selectAll(".brush").classed("brushhighlighted", true)
		setTimeout(function() {beginTransitionFocus(0, 0, 40)}, 100);
		//setTimeout(function() {introFocusAnimation(7, 0, 7)}, 100);
		}, 700)
	//setTimeout(function() {beginTransitionFocus(7, 0, 7)}, 1400);
	//setTimeout(function() {beginTransitionFocus(0, 0, 7)}, 1700);
	//setTimeout(function(){d3.selectAll(".brush").classed("brushhighlighted", false)}, 3000)
}

function introFocusAnimation() {
	var show = [1, 2, 3, 4, 5, 6, 7, 6, 5, 4, 3, 2, 1, 0]
 transitionFocus(show, 0, 0);
}

function beginAnimateSpeciesHighlights() {
	
	/**var show = [];
	var tmp = 0;
	var last = 150;
	
	while(tmp < last){
   			show.push(tmp+=1);
   			//tmp+=1;
		
	}**/

	//var show = [16, 45, 110, 173, 200]
	//setTimeout(function() {animateSpeciesHighlights(show, 1200, 0);}, 2800);
	//var show = [45, 110, 173, 200]
	//setTimeout(function() {animateSpeciesHighlights(show, 750, 0);}, 2700);
	
	//var show = [110, 82, 173, 195]
	var show = [[10,2], [42,7], [45, 5], [79, 19], [58,6], [89, 15], [49, 15]]
	setTimeout(function() {
		
		animateSpeciesHighlights2(show,150, 0);}, 2500);
	//setTimeout(function() {animateSpeciesHighlights2(show,500, 0, false);}, 3200);
	
	
	
	
	
	
/**
	setTimeout(function(){
		clickedspecies = data[100];
	updateHighlights();
	updateSpeciesText();
	}, 2700)
	**/
}

function animateSpeciesHighlights2(show, delay, index) {

    	//var index = 0;
        if (index < show.length) {
            //var ind = show[index];
           // console.log("doing stuff")
            setTimeout(function(){
                // Do stuff
               //  if (index<show.length-1) {
              
                var a = svg.selectAll(".focusrect").filter(function(d, i){
               return (d["genus-order"]==show[index][0]&&d["species-order"]==show[index][1])});
                animateSpecies(a);

                //} else {
                	//updateHighlights();
                //}
                /**
                if (index<show.length-1) {
					clickedspecies = data[show[index]];
				} else {
					
					clickedspecies = undefined;
					selectedspecies = undefined;
					svg.selectAll(".focusrect").classed("specieshighlighted", false);
    				svg.selectAll(".focusrect").classed("speciesclicked", false);
					//updateHighlights();
					
				}
				updateHighlights();**/

                ++index;
                animateSpeciesHighlights2(show, delay, index);
            }, delay)
        }
}

function animateSpecies(a) {
        a.attr("stroke-width", 0)
        a.moveToFront();
                
        a.classed("speciesanimated", true)
         setTimeout(function(){a.classed("speciesanimated", false)}, 1000)
                /**
                a.transition()
                	.duration(500)
                	.attr("stroke", "#05AAE5")
                	.attr("stroke-width", 1)
                	
            a.transition()
            		.delay(1000)
                	.duration(1000)
                	.attr("stroke", "none")
                	.attr("stroke-width", 0)**/
}


function animateSpeciesHighlights(show, delay, index) {

    	//var index = 0;
        if (index < show.length) {
            //var ind = show[index];
           // console.log("doing stuff")
            setTimeout(function(){
                // Do stuff
                if (index<show.length-1) {
					clickedspecies = data[show[index]];
				} else {
					
					clickedspecies = undefined;
					selectedspecies = undefined;
					svg.selectAll(".focusrect").classed("specieshighlighted", false);
    				svg.selectAll(".focusrect").classed("speciesclicked", false);
					//updateHighlights();
					
				}
				updateHighlights();
				updateSpeciesText();
                ++index;
                animateSpeciesHighlights(show, delay, index);
            }, delay)
        }
}

function hideVis() {
	document.getElementById("chart").style.display="none"
	speciestext
  			.style("opacity", 0).style("display", "none")
  //	d3.select(".legendimage").attr("opacity", 0)
  if (!init) {
  document.getElementById("legendimgid").style.display="none";

  }
  	//document.getElementById("legendimgid").style("display", "none")
  			
	//document.getElementById(classdata[currclassindex].class+"viddiv").style.display="none"
}




     
function select(obj) {
	searchselect=true;
	var selectindex = classdata[currclassindex].commonnames.indexOf(obj);
	if (selectindex==-1) {
	 selectindex = classdata[currclassindex].scinames.indexOf(obj);
	}
	
	var searchselection = data[selectindex];
	selectThis(searchselection)
	
}

function selectThis(searchselection) {
	clickedspecies = searchselection;
	selectedspecies = clickedspecies;
	var delay = 0;
	var finalp1 = parseInt(Math.min(classdata[currclassindex].numgenuses-numfocus, Math.max((searchselection["genus-order"]-(numfocus/2.0)), 0)));
	
	beginTransitionFocus(finalp1, delay, Math.min(5, Math.abs(finalp1-focusp1)));
	//updateSpeciesText();
	searchselect=false;	
	
	/**
	brushdata.x=getContextXFromGenus(focusp1);
	updateBrush();
	update();
	updateSpeciesText();
	searchselect=false;**/
}

function beginTransitionFocus(finalp1, delay, numstops) {
	var totaldist = Math.abs(finalp1-focusp1);
	var inc = parseInt(totaldist/numstops);
	var show = [];
	var tmpp1 = focusp1;
	
	if (finalp1>focusp1) {
		while(tmpp1 < finalp1){
   			show.push(tmpp1);
   			tmpp1+=inc;
		}
	} else {
		while(tmpp1 > finalp1){
   			show.push(tmpp1);
   			tmpp1-=inc;
		}
	}
	show.push(finalp1);
    transitionFocus(show, delay, 0);
}
var firstloadtooltip = true;
function transitionFocus(show, delay, index) {

    	//var index = 0;
        if (index < show.length) {
            var ind = show[index];
           
            setTimeout(function(){
 
                searchselect=true;	
                focusp1=ind;
                focusp2=focusp1+numfocus-1;
                brushdata.x=getContextXFromGenus(focusp1);
                updateBrush();
                update();
                ++index;
                transitionFocus(show, delay, index);
            }, delay)
        } else {
        	
        	/**
        	if (firstloadtooltip) {
        
        	clickedspecies = data[116];
        	selectedspecies = data[116];
        	updateSpeciesText();
        	firstloadtooltip=false;
        	clickedspecies = undefined;
        	} else {**/
        
        	updateSpeciesText();
        	
        	//}
        	updateHighlights();
        	
        }
}
/**
function transitionFocus(show, delay, index) {
	
    	//var index = 0;
        if (index < show.length) {
            var ind = show[index];
  
            setTimeout(function(){
            //	if (index==(show.length-1)) {
            	//	d3.selectAll(".brush").classed("brushhighlighted", false);
            	//}
                // Do stuff
            
                searchselect=true;	
                focusp1=ind;
                focusp2=focusp1+numfocus-1;
                brushdata.x=getContextXFromGenus(focusp1);
                updateBrush();
                update();
                ++index;
                transitionFocus(show, delay, index);
            }, delay)
        } else {
        	
        	
        	if (firstloadtooltip) {

        	clickedspecies = data[116];
        	selectedspecies = data[116];
        	updateSpeciesText();
        	firstloadtooltip=false;
        	clickedspecies = undefined;
        	} else {
        	
        	updateSpeciesText();
        	}
        	updateHighlights();
        	
        }
}**/
var brushdata;
// Set the variables that are dependent on which data set is currently being shown
function initializeView() {

	
	//console.log("initializing")
	ANIMAL_LIST = classdata[currclassindex].commonnames//.concat(classdata[currclassindex].scinames);
	//THIS SEEMS TO WORK
	//{"items":100});
	typeahead.data('typeahead').source = ANIMAL_LIST;
	
//	initfocusp1=200;
//	initfocusp2=290;
/**
	if (init) {
	initfocusp1=classdata[currclassindex].numgenuses-91;
	initfocusp2=classdata[currclassindex].numgenuses-1;
	} else {
	initfocusp1=0;
	if (currclassindex==0) {
		initfocusp2 = 75;
	} else {
		initfocusp2 = 90;
	}
	}
	
	focusp1 = initfocusp1;
  	focusp2 = initfocusp2;**/
  	if (init) {
  		
  		focusp1 = 0;//classdata[currclassindex].numgenuses - 91;
  		//focusp2 = 290;
  	} else {
  		focusp1 = Math.min(getFocusP1FromBrush(), classdata[currclassindex].numgenuses - 91);
  		
  	}
  	focusp2 = focusp1+90;
  	numfocus = focusp2-focusp1+1;
  	focusxspace = focusgraphwidth/numfocus;
  	focuswidth = focusxspace;
  	/**
  	focusyspace = focusgraphheight/classdata[currclassindex].maxspecies;
  	if (currclassindex==0) {
  	focusheight = focusyspace;
  	} else {
  	focusheight = .8*focusyspace;
  	}**/
  	focusyspace = 1.83//focusgraphheight/classdata[currclassindex].maxspecies;
  	if (currclassindex==0) {
  	focusheight = focusyspace;
  	focusyspace = 1.83
  	} else {
  	focusyspace = 1.83;
  	focusheight = .8*focusyspace;
  	}
//  	console.log(data[currclassindex].class)
  //	console.log(focusyspace)
  	
  	xspace = graphwidth/classdata[currclassindex].numgenuses;
    contextyspace = contextgraphscale/classdata[currclassindex].maxspecies;	
    speciesheight = contextgraphscale/classdata[currclassindex].maxspecies;
    
}

// Render the structure of the page
// these usually only get called on load – they are then just updated, not re–rendered
function render() {
	renderLegend();
	renderStaticView();
renderClassChart();
	//renderSpeciesText();
	renderContext();

	renderHelpButton();
	//renderTooltip();
	//renderButtons();
	
	
}
var helpbuttondiv;
function renderHelpButton() {

	helpbuttondiv = d3.select("#ttipdiv")
    .append("div");
    helpbuttondiv.attr("class", "helpbuttondiv")
    	.attr("id", "helpbuttondivid")
    	.style("margin-left", 76+"px")


var img = document.createElement("img");
img.src = "images/helpbutton.png";

var src = document.getElementById("helpbuttondivid");
src.appendChild(img);





	var helpbuttonx = x0;
	var helpbuttony = 387;
	var helpbuttonr = 15;
	
	svg.append("svg:circle")
		.attr("cx", helpbuttonx-(2*helpbuttonr)).attr("cy", helpbuttony).attr("r", helpbuttonr)
		.attr("class", "helpbutton")
		.on("mouseover", mouseoverhelpbutton)
		.on("mouseout", mouseouthelpbutton);
		
		
		
	svg.append("svg:text")
	.attr("class", "helpbuttonquestionmark")
		.attr("x", helpbuttonx-(2*helpbuttonr)-7)
		.attr("y", helpbuttony+9)
		.text("?")
		.on("mouseover", mouseoverhelpbutton)
		.on("mouseout", mouseouthelpbutton);
		
		
	

}

function mouseoverhelpbutton() {
	d3.select('.helpbuttondiv').classed("visiblehelp", true)

}
function mouseouthelpbutton() {
d3.select('.helpbuttondiv').classed("visiblehelp", false)

}

function renderLegend() {
	var legenddiv = d3.select("#ttipdiv")
    .append("div");
    legenddiv.attr("class", "legendimg")
    	.attr("id", "legendimgid")
    	.style("margin-left", x0+graphwidth-260+"px")


var img = document.createElement("img");
img.src = "images/legend.png";
img.id="legendimageid";

var src = document.getElementById("legendimgid");
src.appendChild(img);
}

// Update the focus view and its corresponding highlights on the context view when the brush is dragged
function update() {

	updateFocus();
	updateFamilyTooltip();
	updateHighlights();
}

// Update entire view when the data set is switched
function updateAll() {
	
	// Class view
	//updateVid();
	
	//updateClassChart();
	showClassChart();
	updateText();
	updateButtonHighlights();
	
	// Focus view
	//focusp1=initfocusp1;
	//focusp2=initfocusp2;
	updateFocus();
	
	// Context view
	updateContext();

}

// Update the focus view, including species, families, and orders
function updateFocus() {
	// Draw the orders: a line and a label (show when there is room)	
	focusOrders();
	
	// Draw the families: a rect, a line, and a label (show when there is room)
	focusFamilies();
	
	// Draw rectangles for each visible species in the focus view
	focusSpecies();
	

		
		
}

// Draw rectangles for each species in the focus view, positioned according to order>family>genus>threat level
// Also, add a white "padding" rectangle on the background of each genus that is tall enough to run into the guff above
function focusSpecies() {
	// Put padding around tall genuses
	focustallgenusdata = classdata[currclassindex].genusdata.slice(focusp1, focusp2+1)
	.filter(function(d, i){return (d.lastspecies-d.firstspecies)>tallgenusthresh;});
	//UPDATE
	focusgenusbackgroundrects = svg.selectAll(".focusgenusbackgroundrects")
	.data(focustallgenusdata, getBindingFieldGenus)
		.attr("x", function(d, i) {
		return Math.max(getFocusXFromGenus(d["genus-order"])-(tallgenuspadding/2), focusx0-(tallgenuspadding/2));});
	//EXIT
	focusgenusbackgroundrects.exit().remove();
	//ENTER
	var focusgenusbackgroundrectsenter = focusgenusbackgroundrects.enter().append("svg:rect");
	focusgenusbackgroundrectsenter.attr("class", "focusgenusbackgroundrects")
		.attr("x", function(d, i) {return Math.max(getFocusXFromGenus(d["genus-order"])-(tallgenuspadding/2), focusx0-(tallgenuspadding/2));})
		
		
		

	// Transition from y=0 is the data set is being switched	
	if (switchingclass) {
		focusgenusbackgroundrectsenter.attr("y", focusy0-familyspeciesyspace).attr("height", 0)
			.transition()
			.duration(transitionduration)
			.attr("y", function(d, i) {
			var ypos = getFocusYFromSpecies((d.lastspecies-d.firstspecies))-(tallgenustoppadding);
			//console.log(ypos)
			return ypos;})
			//.attr("height", focusheight)
			.attr("width", focuswidth+tallgenuspadding)
			.attr("height", function(d, i) {
			var ypos = getFocusYFromSpecies((d.lastspecies-d.firstspecies))-(tallgenustoppadding);
			return focusy0-ypos;})
	} else {
	focusgenusbackgroundrectsenter.attr("y", function(d, i) {
			var ypos = getFocusYFromSpecies((d.lastspecies-d.firstspecies))-(tallgenustoppadding);
			//console.log(ypos)
			return ypos;})
		.attr("width", focuswidth+tallgenuspadding)
		.attr("height", function(d, i) {
			var ypos = getFocusYFromSpecies((d.lastspecies-d.firstspecies))-(tallgenustoppadding);
			return focusy0-ypos;})
	}
	
	


	focusspeciesdata = data.slice(classdata[currclassindex].genusdata[focusp1].firstspecies, classdata[currclassindex].genusdata[focusp2].lastspecies+1); 

	//UPDATE
	focusrects = svg.selectAll(".focusrect")
	.data(focusspeciesdata, getBindingField)
		.attr("x", function(d, i) {
		d3.select(this).moveToFront();
		return Math.max(getFocusXFromGenus(d["genus-order"]), focusx0);});

	// EXIT
	focusrects.exit().remove();

	// ENTER		
	var enter = focusrects.enter().append("svg:rect");
	enter.attr("class", "focusrect")
		.attr("fill", getSpeciesColor)
		.attr("x", function(d, i) {
			d3.select(this).moveToFront();
  			return Math.max(getFocusXFromGenus(d["genus-order"]), focusx0);
			}).on("mouseover", mouseoverspecies).on("mouseout", mouseoutspecies).on("mousedown", clickspecies);
			
	// Transition from y=0 is the data set is being switched	
	if (switchingclass) {
		enter.attr("y", focusy0-familyspeciesyspace).attr("height", 0)
			.transition()
			.duration(transitionduration)
			.attr("y", function(d, i) {
			//focusyspace
				return getFocusYFromSpecies(d["species-order"])
			})
			//.attr("height", focusheight)
			.attr("width", focuswidth).attr("height", focusheight);
		switchingclass=false;
	} else {
	enter.attr("y", function(d, i) {
			//focusyspace
			return getFocusYFromSpecies(d["species-order"])
			})
		.attr("width", focuswidth)
		.attr("height", focusheight);	
	}

	// Show the currently highlighted focus on the context view		
	//updateContextHighlights(focusspeciesdata);	
	updateContextHighlightsOptimized(classdata[currclassindex].genusdata.slice(focusp1, focusp2))
	incrementProgress();
}

// Draw a rectangle linking each family in the focus view
function focusFamilies() {

	//focusfamilydata = classdata[currclassindex].familydata.slice(parseInt(classdata[currclassindex].genusdata[focusp1]["family-order"]), classdata[currclassindex].familynames.indexOf(classdata[currclassindex].genusdata[focusp2].family)+1);
	//focusfamilydata = classdata[currclassindex].familydata.slice(classdata[currclassindex].familynames.indexOf(classdata[currclassindex].genusdata[focusp1].family), classdata[currclassindex].familynames.indexOf(classdata[currclassindex].genusdata[focusp2].family)+1);
	//console.log(classdata[currclassindex].familynames.indexOf(classdata[currclassindex].genusdata[focusp1].family))
	//console.log(classdata[currclassindex].genusdata[focusp1]["family-order"]);
	//console.log(classdata[currclassindex].familynames.indexOf(classdata[currclassindex].genusdata[focusp2].family))
	//console.log(classdata[currclassindex].genusdata[focusp2]["family-order"]);
	//console.log("")
	focusfamilydata = classdata[currclassindex].familydata.slice(classdata[currclassindex].genusdata[focusp1]["family-order"], classdata[currclassindex].genusdata[focusp2]["family-order"]+1);
	
	//UPDATE
	var focusfamilyrects = svg.selectAll(".focusfamilyrect")
		.data(focusfamilydata, function(d, i) {
			
			return d.familyname;})
			.attr("x", function(d, i) {	
			return Math.max(getFocusXFromGenus(d.firstgenus), focusx0);
		}).attr("width", function(d, i) {
			return Math.min(getFocusXFromGenus(d.lastgenus)+focusxspace, focusx0+focusgraphwidth) -familyspace- Math.max(getFocusXFromGenus(d.firstgenus), focusx0);
		});
		
	// EXIT
	focusfamilyrects.exit().remove();
	
	// ENTER
	focusfamilyrects.enter().append("svg:rect")
		.attr("class", "focusfamilyrect")
		.attr("x", function(d, i) {	
			return Math.max(getFocusXFromGenus(d.firstgenus), focusx0);
		})
	.attr("y", familyy)
	.attr("width", function(d, i) {
			return Math.min(getFocusXFromGenus(d.lastgenus)+focusxspace, focusx0+focusgraphwidth) -familyspace- Math.max(getFocusXFromGenus(d.firstgenus), focusx0);
		})
	.attr("height", familyheight)
	.attr("fill", getFamilyColor);

	// Slightly bigger invisible rect for each family, to catch hover events
	//UPDATE
	var focusfamilyinvisiblerects = svg.selectAll(".focusfamilyinvisiblerect")
		.data(focusfamilydata, function(d, i) {
			
			return d.familyname;})
			.attr("x", function(d, i) {	
			return Math.max(getFocusXFromGenus(d.firstgenus), focusx0);
		}).attr("width", function(d, i) {
			return Math.min(getFocusXFromGenus(d.lastgenus)+focusxspace, focusx0+focusgraphwidth) -familyspace- Math.max(getFocusXFromGenus(d.firstgenus), focusx0);
		});//.attr("fill", "blue");
		
	// EXIT
	focusfamilyinvisiblerects.exit().remove();
	
	// ENTER
	focusfamilyinvisiblerects.enter().append("svg:rect")
		.attr("class", "focusfamilyinvisiblerect")
		.attr("x", function(d, i) {	
			return Math.max(getFocusXFromGenus(d.firstgenus), focusx0);
		})
	//.attr("y", focusy0-familyspeciesyspace)
	.attr("y", focusy0-focusorderlineheight)
	.attr("width", function(d, i) {
			return Math.min(getFocusXFromGenus(d.lastgenus)+focusxspace, focusx0+focusgraphwidth) -familyspace- Math.max(getFocusXFromGenus(d.firstgenus), focusx0)+2;
		})
	//.attr("height", 2.5*familyheight)
	.attr("height", focusorderlineheight+familyheight)
	.on("mouseover", mouseoverFamily)
	.on("mouseout", mouseoutFamily)
	.attr("opacity", 0);
	
	// Show the currently highlighted focus families on the context view		
	updateContextFamilyHighlights(focusfamilydata);
	incrementProgress();
}

// Label and draw a line indicating where each order starts
function focusOrders() {
	focusorderdata = classdata[currclassindex].orderdata.slice(classdata[currclassindex].ordernames.indexOf(classdata[currclassindex].genusdata[focusp1].order), classdata[currclassindex].ordernames.indexOf(classdata[currclassindex].genusdata[focusp2].order)+1);
	
	// Lines marking each order on the focus view
	//UPDATE
	var focusorderlines = svg.selectAll(".focusorderline")
		.data(focusorderdata, function(d, i) {return d.ordername;})
		.attr("x1", function(d, i) {
			return Math.max(getFocusXFromGenus(d.firstgenus), focusx0);
		})
		.attr("x2", function(d, i) {
			return Math.max(getFocusXFromGenus(d.firstgenus), focusx0);
		});
		
	// EXIT
	focusorderlines.exit().remove();
	
	// ENTER
	focusorderlines.enter().append("line")
		.attr("class", "focusorderline")
		.attr("x1", function(d, i) {
						return Math.max(getFocusXFromGenus(d.firstgenus), focusx0);
		})
		.attr("x2", function(d, i) {
			return Math.max(getFocusXFromGenus(d.firstgenus), focusx0);
		})
		.attr("y1", familyy+familyheight)
		.attr("y2", familyy-focusorderlineheight);
		

	// Labels marking the name of each order on the focus view		
	cutofflabels = [];
	lowerypos = [];
	var orderi;
	// UPDATE
	focusorderlabels = svg.selectAll(".focusorderlabel")
		.data(focusorderdata, function(d, i){return d.ordername;})
		.attr("x", function(d, i) {
			return Math.max(getFocusXFromGenus(d.firstgenus), focusx0)+orderlabeldx;
		}).attr("y", getYPositionOfOrder).attr("visibility", getVisibilityOfOrderName);
		
	// EXIT
	focusorderlabels.exit().remove();
	
	// ENTER
	focusorderlabels.enter().append("text")
		.attr("class", "focusorderlabel")
		.text(function(d, i) {

			return getOrderName(d);//+": "+parseInt(100*d.threatenedcount/(d.threatenedcount+d.healthycount))+"%";
			})
		.attr("x", function(d, i) {
			return Math.max(getFocusXFromGenus(d.firstgenus), focusx0)+orderlabeldx;
		})
		.attr("y", getYPositionOfOrder)
		.attr("visibility", getVisibilityOfOrderName);
		
		
		
		// Labels marking the % threatened of each order on the focus view
		// UPDATE
	focusordernumbers = svg.selectAll(".focusordernumber")
		.data(focusorderdata, function(d, i){return d.ordername;})
		.attr("x", function(d, i) {
			return Math.max(getFocusXFromGenus(d.firstgenus), focusx0)+orderlabeldx;
		}).attr("y", function(d, i) {
			if (lowerypos.indexOf(d.ordername)==-1) {
			return orderlabely+orderlabelnumberspace;
			}
			return orderlabel2y+orderlabelnumberspace;
			}).attr("visibility", getVisibilityOfOrderNumber);
		
	// EXIT
	focusordernumbers.exit().remove();
	
	// ENTER
	focusordernumbers.enter().append("text")
		.attr("class", "focusordernumber")
		.text(function(d, i) {
			if (getPercentThreatened(d)==0) {
				return "healthy"
			}
			return getPercentThreatened(d)+"% at risk";
			})
		.attr("x", function(d, i) {
			return Math.max(getFocusXFromGenus(d.firstgenus), focusx0)+orderlabeldx;
		})
		.attr("y", function(d, i) {
			if (lowerypos.indexOf(d.ordername)==-1) {
			return orderlabely+orderlabelnumberspace;
			}
			return orderlabel2y+orderlabelnumberspace;
			})
		.attr("visibility", getVisibilityOfOrderNumber)
		/**
		.on("mouseover", function(d) {
			
			if (getPercentThreatened(d)==0) {
				d3.select(this).text("healthy")
			} else {
				d3.select(this).text(getPercentThreatened(d)+"% at risk)
			}
			
		})
		.on("mouseout", function(d) {
			if (getPercentThreatened(d)==0) {
				d3.select(this).text("healthy")
			} else {
				d3.select(this).text(getPercentThreatened(d)+"%")
			}
		});**/
		incrementProgress();	
}


// Show the highlighted families in red on the context view
function updateContextFamilyHighlights(focusfamilydata) {
	//UPDATE - updating elements are in BLUE
	contexthighlightfamilyrects = svg.selectAll(".highlightedcontextfamilyrect")
	.data(focusfamilydata, function(d, i) {
		return d.familyname;
		});

	// EXIT
	contexthighlightfamilyrects.exit().remove();

	// ENTER – entering elements are in YELLOW
	contexthighlightfamilyrects.enter().append("svg:rect");
	contexthighlightfamilyrects.attr("class", "highlightedcontextfamilyrect")
			.attr("x", function(d, i) {	

				//return getContextXFromGenus(d.firstgenus);
				return Math.max(brushdata.x+1,getContextXFromGenus(d.firstgenus));
				})
			.attr("y", contextfamilyy)
			.attr("width", function(d, i) {
				//return  getContextXFromGenus(d.lastgenus) - getContextXFromGenus(d.firstgenus)+(contextfamilyspacescale*xspace)
				var w = Math.min(getContextXFromGenus(d.lastgenus), (brushdata.x+brushdata.width)) - Math.max(brushdata.x,getContextXFromGenus(d.firstgenus))+(contextfamilyspacescale*xspace); 
		
				return w;
				})
			.attr("height", 3)
			.classed("highlightedthreatenedcontextfamilyrect", threatenedfamily);
}



// Highlight selected species, as well as its order, its family, and all the other species in its family
function updateHighlights() {
	// Highlight the selected species, if any
	if (!(selectedspecies==undefined)) {
	svg.selectAll(".focusrect").classed("specieshighlighted", function(thisd){
		return (thisd["Genus"]+thisd["Species"]==selectedspecies["Genus"]+selectedspecies["Species"]);
	});
	}
	if (!(clickedspecies==undefined)) {
	// Highlight the clicked species, if any
	svg.selectAll(".focusrect").classed("speciesclicked", function(thisd){
		if (thisd["Genus"]+thisd["Species"]==clickedspecies["Genus"]+clickedspecies["Species"]) {
			d3.select(this).moveToFront();
			return true;
		}
		return false;
	});
	}
	
	
	// Highlighted all the species in this family
	svg.selectAll(".focusrect").classed("threatenedthighlighted", function(thisd, thisi) {
		if (selectedfamily==undefined) {
			return false;
		}
		return (thisd["Family"]==selectedfamily.familyname)&&(isThreatened(thisd));
		}).classed("healthyhighlighted", function(thisd, thisi) {
		if (selectedfamily==undefined) {
			return false;
		}
		return (thisd["Family"]==selectedfamily.familyname)&&(!isThreatened(thisd));
		});
		
	// Highlight the family
	svg.selectAll(".focusfamilyrect").classed("threatenedthighlighted", function(thisd, thisi) {
		if (selectedfamily==undefined) {
			return false;
		}
		return ((thisd.familyname==selectedfamily.familyname)&&(threatenedfamily(thisd)));
	}).classed("healthyhighlighted", function(thisd, thisi) {
		if (selectedfamily==undefined) {
			return false;
		}
		return ((thisd.familyname==selectedfamily.familyname)&&(!threatenedfamily(thisd)));
	})
	updateFamilyTooltip();
	
	// Highlight the order
	svg.selectAll(".focusorderlabel").classed("focusorderlabelhighlighted", function(thisd) {
		if (selectedorder==undefined) {
			return false;
		}
		return (thisd.ordername==selectedorder.ordername);
	})
	svg.selectAll(".focusordernumber").classed("focusorderlabelhighlighted", function(thisd) {
		if (selectedorder==undefined) {
			return false;
		}
		return (thisd.ordername==selectedorder.ordername);
	})
	svg.selectAll(".focusorderline").classed("focusorderlinehighlighted", function(thisd){
		if (selectedorder==undefined) {
			return false;
		}
		return (thisd.ordername==selectedorder.ordername);
	})
	
}


// Highlight selected family on mouseover
function mouseoverFamily(d, i) {
	
	selectedfamily = d;
	//selectedspecies = undefined;
	selectedorder = classdata[currclassindex].orderdata[classdata[currclassindex].ordernames.indexOf(d.ordername)]
	updateHighlights();
}
//
function mouseoutFamily(d, i) {
	selectedfamily = undefined;
	selectedorder = undefined;
	updateHighlights();
	
	//selectedfamily = null;
	//familytooltip.style("display", "none");
	//clearAllHighlights();
	
}

// Show the family name on mouseover
function updateFamilyTooltip() {
	if (selectedfamily==null) {
		familytooltip.style("display", "none");
		return;
	}
	if ((selectedfamily.lastgenus<focusfamilydata[0].firstgenus)||(selectedfamily.firstgenus>focusfamilydata[focusfamilydata.length-1].lastgenus)) {
		familytooltip.style("display", "none");
		return;
	}
	var threatstat = getPercentThreatened(selectedfamily);
	if (threatstat ==0) {
		threatstat="healthy"
	} else {
		threatstat = threatstat+"% at risk";
	}
	var commonname = commonFamilyName[toTitleCase(selectedfamily.familyname)];
	if (commonname==undefined) {
		commonname = toTitleCase(selectedfamily.familyname);
	}
	familytooltip.text(commonname+": "+threatstat);
	familytooltip
		.style("left", Math.max(x0, getFocusXFromGenus(selectedfamily.firstgenus))+"px")//+focuswidth+8+"px")
		.style("top", familytooltipy+"px")//(getSpeciesFocusY(d)+(classdata[currclassindex].focusheight/2.0))+"px")
		.style("display", "block")
		.style("font-weight", 600);
}


var clickedspecies, clickedfamily, clickedorder;
function clickspecies(d, i) {
	clickedspecies = d;
	selectedspecies = d;
	d3.event.stopPropagation();
	//resetSearchInput();
	
	updateHighlights();
	updateSpeciesText();
	//clickedfamily = classdata[currclassindex].familydata[classdata[currclassindex].familynames.indexOf(d["Family"])];
	//clickedorder = classdata[currclassindex].orderdata[classdata[currclassindex].ordernames.indexOf(d["Order"])];
	//selectedfamily=clickedfamily;
	//selectedorder= clickedorder;
}

//
function mouseoutspecies(d, i) {
	if((d==clickedspecies)) {//||(clickedspecies==undefined)) {
	
	} else {
	selectedspecies=undefined;//clickedspecies;
	selectedfamily=undefined;
	selectedorder=undefined;
	d3.select(this).classed("specieshighlighted", false);
	
	updateSpeciesText(selectedspecies)
	updateHighlights();
	}
	
	//tooltip.style("display", "none");
	//d3.select(this).classed("specieshighlighted", false);
	//updateHighlights();
	//clearAllHighlights();
	//if (!(clickedspecies==null)) {
	//	clearAllHighlights();
		//selectedspecies=clickedspecies;
	//} 
}

// Set this species/family/order to the selected species/family/order on mouseover
function mouseoverspecies(d, i) {

	focusfamilydata.forEach(function(fd, fi) {
		if (fd["familyname"]==d["Family"]) {
			selectedfamily =fd;
		}
		});
	//selectedfamily = classdata[currclassindex].familydata[classdata[currclassindex].familynames.indexOf(d["Family"])]
	//selectedfamily = classdata[currclassindex].familydata[classdata[currclassindex].familynames.indexOf(d["Family"])]
	selectedorder = classdata[currclassindex].orderdata[classdata[currclassindex].ordernames.indexOf(d["Order"])]
	selectedspecies = d;
	d3.select(this).moveToFront();
	updateHighlights();
	//doTooltip(d, i);

	updateSpeciesText(selectedspecies);

}

function updateSpeciesText() {

  	if ((!(clickedspecies==undefined))&&(!firstloadtooltip)) {
  		var commonname = toTitleCase(clickedspecies['Common names (Eng)'].split(',')[0]);
		var sciname = toTitleCase(clickedspecies.Genus+ " " +clickedspecies.Species);
		if (commonname=='') {
  		typeahead[0].value =sciname;
  		} else {
  		typeahead[0].value =commonname;
  		}
  		//updateSpeciesTextContent(clickedspecies);
  		//toTitleCase(clickedspecies['Common names (Eng)'].split(',')[0]);
  	} else {
  		if (firstloadtooltip) {
        		firstloadtooltip = false;
        	}
  		resetSearchInput();
  	}
	if (selectedspecies==undefined) {
	/**
		if (clickedspecies==undefined) {
			speciestext
  				.style("opacity", 0);
  				return;
  		} else {
  			
  			return updateSpeciesTextContent(clickedspecies);
  		}**/
  		speciestext
  				.style("opacity", 0);
  				

  				
  		return;
  		
	} 
	
	updateSpeciesTextContent(selectedspecies);
  	
}

function updateSpeciesTextContent(species) {

	var commonname = toTitleCase(species['Common names (Eng)'].split(',')[0]);
	var sciname = toTitleCase(species.Genus+ " " +species.Species);

	specieslabelsciname.text(sciname);
	specieslabelname.text(commonname);
	specieslabelthreat.text(threatdict[species["Red List status"]].toUpperCase());
	
	if (isThreatened(species)) {
		specieslabelthreat.style("color", "#FF0203");
	} else {
		specieslabelthreat.style("color", "#BCBEC0");
	}
	
	//.style("color", "#FF0000");
	if (commonname=='') {
		specieslabelname.text(sciname)
		//specieslabelsciname.style("opacity", 0)
	}// else {
	//specieslabelsciname.style("opacity", 1)
	//}
speciestext
  	.style("opacity", 1)
  	.style("display", "block")
  	
var ypos = getFocusYFromSpecies(species["species-order"])-focusyspace-80;//-9-focusyspace;//(y0-parseFloat(species["species-order"]));
var xpos = getFocusXFromGenus(species["genus-order"])-(document.getElementById("speciestextdivid").offsetWidth/2)+(focuswidth/2);//+focuswidth+6;
//console.log(document.getElementById("speciestextdivid").offsetWidth/2)
//console.log(document.getElementById("speciestextdivid").offsetWidth)
//getFocusYFromSpecies(d["species-order"]
//getFocusXFromGenus

speciestext
  	.style("left", xpos+"px")
  	.style("top", ypos+"px")
}
var speciestext, specieslabelsciname, specieslabelname, specieslabelthreat;
function renderSpeciesText() {
	speciestext = d3.select("#ttipdiv")
    .append("div");
    speciestext.attr("class", "ttip")
    	.attr("id", "speciestextdivid");
    
  //var ttsciname = tooltip.append("div").attr("class", "ttlabel-sciname").text("Sylvilagus bachmani");
  specieslabelsciname = speciestext.append("div").attr("class", "specieslabel-sciname")//.text("Blablahblah Blahah");
  specieslabelname = speciestext.append("div").attr("class", "specieslabel-name")//.text("Brush Rabbit");
  specieslabelthreat = speciestext.append("div").attr("class", "specieslabel-threat")//.text("ENDANGERED");
  
  
  
  speciestext
  	.style("left", (x0+windowoffset+(graphwidth/2)-200)+"px")
  	.style("top", 0+"px")
  	//.style("display", "block")
  incrementProgress();
}

// Show a tooltip with this species' information on hover
function doTooltip(d, i) {
	var commonname = toTitleCase(d['Common names (Eng)'].split(',')[0]);
	if (commonname=='') {
		commonname = toTitleCase(d.Genus)+ " " +d.Species;
	//ttsciname.text('  ');
  	//ttspecieslabel.text(toTitleCase(d.Genus)+ " " +d.Species);
  	//ttthreatlabel.text(threatdict[d['Red List status']].toUpperCase())
	} 
	
	ttspecieslabel.text(commonname);
  	ttthreatlabel.text(threatdict[d['Red List status']].toUpperCase())
	wordlen=Math.max(commonname.length, threatdict[d['Red List status']].length)
	
	tooltip
		.style("left", getFocusXFromGenus(d["genus-order"])-13+"px")//+focuswidth+8+"px")
		.style("top", tooltipy0+"px")//(getSpeciesFocusY(d)+(classdata[currclassindex].focusheight/2.0))+"px")
		.style("display", "block")
		//.style("width", 10*wordlen+"px")
}

// Remove all highlights
function clearAllHighlights() {
	selectedfamily = undefined;//clickedfamily;
	selectedorder = undefined;//clickedorder;
	selectedspecies = undefined;//clickedspecies;
	//resetSearchInput();
	updateHighlights();
	updateFamilyTooltip();
	updateSpeciesText();
}


// Update the context view when data set is switched
function updateContext() {
	// Switch the background image of the data – using an image to improve performance
	updateContextBackgroundImage();

	// Mark each species in the context view, colored by threat level
	//contextCircles();
	//contextBars();
	
	// Draw rects for each family in context view, colored by threat level
	//contextFamilies();
	
	// Label each order with a line and its name
	contextOrders();
	
	// Update context label
	d3.select(".contextlabel").text("BROWSE ALL "+getSingularFormClassname().toUpperCase()+" SPECIES")	
	.attr("x", function(d, i) {
		contextlabelwidth = d3.select(this).node().getBBox().width
		
		return (divwidth/2)-(contextlabelwidth/2)})
	d3.select(".contextlabelhelperrect").attr("x", function () {return ((divwidth/2)-(contextlabelwidth/2))-contextlabelhelperrectspace;})
	.attr("width", function() {return contextlabelwidth+(2*contextlabelhelperrectspace);}).attr("fill", "white")

}

// Update the context image when data is switched
function updateContextBackgroundImage() {
	contextimage.attr("src", "images/"+classdata[currclassindex].class+"-context.png");
	incrementProgress();
}

// Mark each family in the context view with a rectangle linking all the species in this family
function contextFamilies() {

	contextfamilyrects = svg.selectAll(".contextfamilyrect")
		.data(classdata[currclassindex].familydata);
	contextfamilyrects.enter().append("svg:rect");
	contextfamilyrects.attr("class", "contextfamilyrect")
			.attr("x", function(d, i) {	return getContextXFromGenus(d.firstgenus);})
			.attr("y", contextfamilyy)
			.attr("width", function(d, i) {
				return getContextXFromGenus(d.lastgenus) - getContextXFromGenus(d.firstgenus)+(contextfamilyspacescale*xspace);})
			.attr("height", 3)
			.attr("fill", colorFamilyUnhighlight)
			.classed("contextthreatenedfamilyrect", threatenedfamily);
	contextfamilyrects.exit().remove();
	incrementProgress();
}

// Draw circles for each species in the context view – this can be replaced by image switching to improve performance
function contextCircles() {
	contextcircles = svg.selectAll(".contextcircle")
  		.data(data);
  	contextcircles.enter().append("svg:circle")
  		.attr("class", "contextcircle")
  		.attr("cx", function(d, i) {
  			return getContextXFromGenus(d["genus-order"]);
  			})
  		.attr("cy", function(d, i) {
  			return y0-(parseFloat(d["species-order"])*contextyspace)
  			})
  		.attr("r", radius)
  		.classed("contexthealthyspecies", function(d) {return isHealthy(d);})
  		.classed("contextthreatenedspecies", function(d) {return isThreatened(d);});
  		
  	contextcircles.exit().remove();
  	svg.selectAll(".contextthreatenedspecies").moveToFront();
}

// Show the currently focus selection of species on the context view
function updateContextHighlights(focusspeciesdata) {
	//UPDATE 
	contexthighlightcircles = svg.selectAll(".highlightedcontextspecies")
	.data(focusspeciesdata, getBindingField)
		.attr("cx", function(d, i) {return getContextXFromGenus(d["genus-order"]);});
		//.attr("fill", "blue");
	// EXIT
	contexthighlightcircles.exit().remove();

	// ENTER
	contexthighlightcircles.enter().append("svg:circle")
  		.attr("class", "highlightedcontextspecies")
		.attr("cx", function(d, i) {
  			return getContextXFromGenus(d["genus-order"]);
  			})
  		.attr("cy", function(d, i) {
  			return y0-(parseFloat(d["species-order"])*contextyspace)
  			})
  		.attr("r", radius)
  		.classed("highlightedcontextthreatenedspecies", function(d) {return isThreatened(d);})
  		//.attr("fill", "yellow");
  		
  	svg.selectAll(".highlightedcontextthreatenedspecies").moveToFront();		
}

// Draw bars for each genus in the context view, broken up into threatened (red) and healthy (grey)
// This can be replaced by image switching to improve performance
function contextBars() {
	var contextbarshealthy = svg.selectAll(".cchealthycontextspeciesbars")
		.data(classdata[currclassindex].genusdata);
	contextbarshealthy.exit().remove();
	contextbarshealthy.enter().append("rect");
	contextbarshealthy.attr("class", "cchealthycontextspeciesbars")
  		.attr("x", function(d, i) {return getContextXFromGenus(classdata[currclassindex].genusnames.indexOf(d.genus));})
  		.attr("y", function(d, i) {
  			return y0-((d.threatenedcount+d.healthycount)*speciesheight);//y0-(parseFloat(d["species-order"])*contextyspace)
  			}).attr("width", 1.1*radius)
  		.attr("height", function(d){
  			return d.healthycount*speciesheight;
  			}).classed("contexthealthyspecies", true)//.classed("highlightedcontextspeciesbars", true);	
  	
  	var contextbarsthreatened = svg.selectAll(".ccthreatenedcontextspeciesbars")
  		.data(classdata[currclassindex].genusdata);
  	contextbarsthreatened.exit().remove();
  	contextbarsthreatened.enter().append("rect");
	contextbarsthreatened.attr("class", "ccthreatenedcontextspeciesbars")
  		.attr("x", function(d, i) {return getContextXFromGenus(classdata[currclassindex].genusnames.indexOf(d.genus));})
  		.attr("y", function(d, i) {
  			return y0-(d.threatenedcount*speciesheight);//y0-(parseFloat(d["species-order"])*contextyspace)
  			}).attr("width", 2*radius)
  		.attr("height", function(d){
  			return d.threatenedcount*speciesheight;
  			}).classed("contextthreatenedspecies", true);//.classed("highlightedcontextthreatenedspecies", true);	
}

// Show the currently focus selection of species on the context view
// optimized by using 2 bars for genus, colored by threat level (red for threatened, grey for healthy)
// rather than a separate element for each species
function updateContextHighlightsOptimized(genusdata) {
	// One bar for number of healthy species in genus
	//UPDATE
	contexthealthyhighlightbars = svg.selectAll(".highlightedhealthycontextspeciesbars")
	.data(genusdata, function(d) {return d.genus;});
		
	// EXIT
	contexthealthyhighlightbars.exit().remove();

	// ENTER
	contexthealthyhighlightbars.enter().append("rect")
		.attr("class", "highlightedhealthycontextspeciesbars")
  		.attr("x", function(d, i) {
  			
  			//return getContextXFromGenus(classdata[currclassindex].genusnames.indexOf(d.genus));
  			return getContextXFromGenus(d["genus-order"]);//classdata[currclassindex].genusnames.indexOf(d.genus))
  			;})
  		.attr("y", function(d, i) {
  			return y0-((d.threatenedcount+d.healthycount)*speciesheight);//y0-(parseFloat(d["species-order"])*contextyspace)
  			}).attr("width", 3*radius)
  		.attr("height", function(d){
  			return d.healthycount*speciesheight;
  			}).classed("highlightedcontextspeciesbars", true);	
	
	// One bar for number of threatened species in genus
	// UPDATE
  	contextthreatenedhighlightbars = svg.selectAll(".highlightedthreatenedcontextspeciesbars")
		.data(genusdata, function(d) {return d.genus;});
		
	// EXIT
	contextthreatenedhighlightbars.exit().remove();

	// ENTER
	contextthreatenedhighlightbars.enter().append("rect")
		.attr("class", "highlightedthreatenedcontextspeciesbars")
  		.attr("x", function(d, i) {
  		//return getContextXFromGenus(classdata[currclassindex].genusnames.indexOf(d.genus));
  		return getContextXFromGenus(d["genus-order"]);//classdata[currclassindex].genusnames.indexOf(d.genus));
  		})
  		.attr("y", function(d, i) {
  			return y0-(d.threatenedcount*speciesheight);//y0-(parseFloat(d["species-order"])*contextyspace)
  			}).attr("width", 3*radius)
  		.attr("height", function(d){
  			return d.threatenedcount*speciesheight;
  			}).classed("highlightedcontextthreatenedspecies", true);	
  			
  	// Make sure the threatened bars are in front
  	svg.selectAll(".highlightedcontextthreatenedspeciesbars").moveToFront();		
}

// Mark each order on the context view with a line and a label, if there is room for a label
function contextOrders() {
	// Mark the orders with labels
	// UPDATE
	var contextorderlabels = svg.selectAll(".contextorderlabel")
		.data(classdata[currclassindex].orderdata)
		.text(getOrderName)
		.attr("x", function(d, i) {return getContextXFromGenus(d.firstgenus)+orderlabeldx})
		.attr("visibility", function(d, i) {
			wordlen = d3.select(this).node().getBBox().width;
			if (contextHasRoomForOrderLabel(d, getOrderName(d), wordlen)) {
			return "visible"; } return "hidden"; });
		
	// EXIT	
	contextorderlabels.exit().remove();
		
	// ENTER
	contextorderlabels.enter().append("text")
		.attr("class", "contextorderlabel")
		.text(getOrderName)
		.attr("x", function(d, i) {return getContextXFromGenus(d.firstgenus)+orderlabeldx})
		.attr("y", contextorderlabely)
		.attr("visibility", function(d, i) {
			//return "visible";
			wordlen = d3.select(this).node().getBBox().width;
			if (contextHasRoomForOrderLabel(d, getOrderName(d), wordlen)) {
			return "visible"; 
			} 
			return "hidden"; 
			});
		
	// Mark the orders with lines
	// UPDATE
	var contextorderlines = svg.selectAll(".contextorderline")
		.data(classdata[currclassindex].orderdata)
		
	//EXIT
	contextorderlines.exit().remove();
	
	//ENTER
	contextorderlines.enter().append("line")
		.attr("class", "contextorderline")
		.attr("x1", function(d) {
			return getContextXFromGenus(d.firstgenus);
		})
		.attr("x2", function(d, i) {
			return getContextXFromGenus(d.firstgenus);
		})
		.attr("y1", contextorderliney0)
		.attr("y2", contextorderliney);
	incrementProgress();
}



// Make the class view
function renderStaticView() {
	// Text for class view
	classViewText();
	console.log("rendering class view")
	// Rect for line under title
	//classViewLine();
	// ORDER LEVEL and FAMILY LEVEL label
	staticLabels();
	// Legend
	//legend();
	//incrementProgress();
	instructions();
}

function instructions() {
	var instructions = d3.select("#chart")
    	.append("div")
    	.attr("class", "howto");
   
    var instructionstext = instructions.append("div").attr("class", "howtotext").attr("id", "howtoid")
    	//.text("Each small rectangle is a species of "+classdata[currclassindex].class.substring(0, classdata[currclassindex].class.length-1)+". Drag the horizontal scroll bar to browse through all "+classdata[currclassindex].class.substring(0, classdata[currclassindex].class.length-1)+" species.")

	instructions
		.style("left", 0+"px")
    	.style("top", instructionsy +"px")
    //	//classbodycopy1 = classtext.append("div").attr("class", "classbodycopy1");
}

var showingclasschart = false;
// Put an invisible rectangle to catch hover events on the class
// This is used to start the animations
function renderClassChart() {
	classHoverRect();
	incrementProgress();
}

function showClassChart() {
	
	classDataBars();
	classDataLabels();
	
	incrementProgress();
	showingclasschart = true;
}

function staticClassChart() {
	var classdatabackgroundline = classsvg.append("line").attr("class", "classdatabackgroundline")
		.attr("x1", classdatabarsx+2).attr("x2", classdatabarsx+2).attr("y1", classdatabary0)
		.attr("y2", classdatabary0);
		
		
	classdatabackgroundline.transition()
		.duration(transitionduration)
			.attr("y2", classdatabary0+classdatabackgroundlinelength);
		
	var classdatabackgroundlabel = classsvg.append("text").attr("opacity", 0)
		.attr("class", "classdatabackgroundlabel").attr("x", classdatabarsx)
		.attr("y", classdatabary0+classdataheight+classdatabackgroundlinelength+4)
		.text("ONE OR LESS NATURAL EXTINCTION")
		
	classdatabackgroundlabel.transition()
		.duration(transitionduration)
			.attr("opacity", 1)
		
		
}

function hideClassChart() {
	classsvg.selectAll(".classDataBar").transition().duration(transitionduration).attr("width", 0).attr("x", classdatabarsx)
	classsvg.selectAll(".classDataLabel").transition()
		.duration(transitionduration)
		.attr("opacity", 0)
		.attr("x", classdata[currclassindex].classchartxoffset);
		//.attr("x", function(d) {return classdata[currclassindex].classchartxoffset+classdatalabelxspace + Math.max(minclassdatawidth, classDataScale(d.value));})	
	showingclasschart = false;
}

function classHoverRect() {
	classsvg.append("rect")
	.attr("class", "classrect")
    .attr("width", 215)
    .attr("height", "50%").attr("y", 50)
    .on("mouseover", mouseoverClass)
    .on("mouseout", mouseoutClass);
}


function mouseoverClass(d, i) {
	playCurrentVid(currclassindex);
	//showClassChart();
/**
	if (vids[currclassindex].vidloaded) {
		vids[currclassindex].vid.play();
	}**/
//	thisgif = classdata[currclassindex].gif;//eval(d.class+"gif")
//	if (!thisgif.get_playing()&&!thisgif.get_loading()) {
//	thisgif.play();
//	}
}

function mouseoutClass(d, i) {
	pauseCurrentVid(currclassindex);
	//hideClassChart();
//	thisgif = classdata[currclassindex].gif;
//	if (thisgif.get_playing()) {
//		thisgif.pause();
//	}
	
}

function pauseCurrentVid(i) {
//console.log("PAUSING VIDEO")
	if (vids[i].vidloaded) {
		vids[i].vid.pause();
	}
}

function playCurrentVid(i) {
	//console.log("PLAYING "+vids[i].class)
	if (vids[i].vidloaded) {
		vids[i].vid.play();
		vids[i].firstload=false;
	}
}
/**
function showThisVid() {

	var thisviddiv;
	//var thisstaticdiv;
	classdata.forEach(function(d, i) {
		thisviddiv = document.getElementById(classdata[i].class+'viddiv')
	//	thisstaticdiv = document.getElementById(classdata[i].class+'staticdiv');
		//
		if (!(i==currclassindex)) {
			thisviddiv.style.opacity=0;
			//vids[i].vid.pause();
			//thisstaticdiv.style.opacity=0;
		} else {
			thisviddiv.style.opacity=1;
			thisviddiv.style.display="block";
			
			if (vids[i].firstload) {
				
				playCurrentVid(i);
			}
				
				
				//thisviddiv.style.opacity=.99;
				//thisstaticdiv.style.opacity=.01;
				
				//vids[currclassindex].vid.play();
				//vids[currclassindex].vid.pause();
				//thisviddiv.style.opacity=.99;
				
				//thisviddiv.style.opacity=1;
				//vids[currclassindex].vid.currentTime(.033)
				//thisstaticdiv.style.opacity=0;
				//vids[currclassindex].vid.pause();
			//} else {
				
				//thisviddiv.style.opacity=0;
				//thisstaticdiv.style.opacity=1;
				
			//}
			//thisviddiv.style.display="block";
			//thisstaticdiv.style.display="block";
			//thisviddiv.style.opacity=.99;
		}
	})
}**/
/**
function updateVid() {
	
	//showThisVid();
	
	
	//if (!(classdata[currclassindex].vidloaded)) {//&&(!(classdata[currclassindex].gif.get_loading()))) {
	//	classdata[currclassindex].vidloaded = true;
	//	classdata[currclassindex].gif.load();//function () {return hasLoaded(currclassindex);});
	//}
	//incrementProgress();
}**/

function classDataBars() {
	var classdatabars = classsvg.selectAll(".classDataBar")
		.data(classdata[currclassindex].data)


	classdatabars.enter().append("rect")
	.attr("class", "classDataBar");
	
	classdatabars
		.attr("y", function(d, i) {if (d.type=="dd"){
			return classdatabary0+1;
		}
		return classdatabary0;})
		.attr("fill", function(d, i) {
			return classdatacolors[d.type];
		})
		.attr("height", function(d, i) {
			if (d.type=="dd"){
				return classdataheight-2;
			}
		return classdataheight;});
		
	if (init) {
		classdatabars.attr("x", classdatabarsx)
		.attr("width", 0).classed("ddclassbar", function(d, i){return d.type=="dd";})
		
	}
		
	classdatabars.transition()
		.duration(transitionduration)
		.attr("width", function(d) {return classDataScale(d.value);})//{return Math.max(minclassdatawidth, classDataScale(d.value));});
		.attr("x", function(d,i) {
			var tmpi = 0;
			var tmpx = 0;//classdatabarsx;
			while (tmpi<i) {
				tmpx=tmpx+classdata[currclassindex].data[tmpi].value;
				tmpi++;
			}
	
		return classdatabarsx+classDataScale(tmpx);
		})
	classdatabars.exit().remove();
	


/**
	var classdatabars = classsvg.selectAll(".classDataBar")
		.data(classdata[currclassindex].data, function(d, i) {
		if (d.type=="healthy"&&d.order==1) {
			return d.type+d.order;
		}
		return d.type});
		
	classdatabars.enter().append("rect")
	.attr("class", "classDataBar");
	classdatabars.attr("x", classdata[currclassindex].classchartxoffset)
		.attr("y", function(d, i) {
		return classdatabary0+(d.order*(classdatayspace+classdataheight));
		})
		.attr("fill", function(d, i) {
			return classdatacolors[d.type]
		})
		.attr("height", classdataheight)


	classdatabars
	.attr("width", 0);
	classdatabars.transition()
		.duration(transitionduration)
		.attr("width", function(d) {return Math.max(minclassdatawidth, classDataScale(d.value));});
	classdatabars.exit().remove();**/
	
	incrementProgress();
}

function classDataLabels() {
	var classdatalabels = classsvg.selectAll(".classDataLabel")
		.data(classdata[currclassindex].data);
		
	classdatalabels.enter().append("text");
	classdatalabels.attr("class", "classDataLabel")
	.text(function(d, i) {
		if (d.type=="healthy") {
		return d.text+ " HEALTHY";
		}
		if (d.type=="threatened"){
			return d.text+" AT RISK";
		}
		if (d.type=="dd") {
			return d.text + " DATA DEFICIENT"}
		})
	.attr("y", classdatabary0-classdatabartextspace).classed("atriskclasslabel", function(d, i) {return d.type=="threatened";})

	if (init) {
		classdatalabels.attr("x", classdatabarsx)
		.attr("opacity", 0);
		
	}
	
	classdatalabels.transition()
		.duration(transitionduration)
		.attr("opacity", 1)
		.attr("x", function(d,i) {
			var tmpi = 0;
			var tmpx = 0;//classdatabarsx;
			var wordwidth = d3.select(this).node().getBBox().width;
			while (tmpi<i) {
				tmpx=tmpx+classdata[currclassindex].data[tmpi].value;
				tmpi++;
			}
			
			tmpx=tmpx;//+(d.value/2);
		if ((d.class=="reptiles")&&(d.type=="healthy")) {
			return classdatabarsx+classDataScale(tmpx+(d.value/2))-wordwidth/2;
		}
		return classdatabarsx+classDataScale(tmpx);//-wordwidth/2;
		})
	classdatalabels.exit().remove();


/**
	var classdatalabels = classsvg.selectAll(".classDataLabel")
		.data(classdata[currclassindex].data);
		
	classdatalabels.enter().append("text");
	classdatalabels.attr("class", "classDataLabel")
	.text(function(d, i) {
		if (d.text=="") {
			return"";
		}
		if (d.type=="healthy") {
		return d.text+ " HEALTHY "+getSingularFormClassname().toUpperCase()+" SPECIES";
		}
		if (d.type=="threatened"){
			return d.text+" AT RISK "+getSingularFormClassname().toUpperCase()+" SPECIES";
		}
		return "1 OR LESS NATURAL "+getSingularFormClassname().toUpperCase()+" EXTINCTION";}
		)
	.attr("y", function(d, i) {
		wordheight = d3.select(this).node().getBBox().height;
		return classdatabary0+((d.order)*(classdataheight+classdatayspace))+(classdataheight/2)+(wordheight/4);
		//return classdatabary0-classdatayspace+wordheight+((d.order)*(classdataheight+classdatayspace));
		}).attr("x", classdata[currclassindex].classchartxoffset).attr("opacity", 0)
			

	classdatalabels.transition()
		.duration(transitionduration)
		.attr("opacity", 1)
		.attr("x", function(d) {return classdata[currclassindex].classchartxoffset+classdatalabelxspace + Math.max(minclassdatawidth, classDataScale(d.value));})	
**/
//	classdatalabels
//	.attr("x", function(d) {return classdata[currclassindex].classchartxoffset+classdatalabelxspace + Math.max(minclassdatawidth, classDataScale(d.value));})		

	
	classdatalabels.exit().remove();
}

function getSingularFormClassname() {
	return classdata[currclassindex].class.substring(0, classdata[currclassindex].class.length-1);
}


function mouseoverclassbar(d, i) {
	mouseoverClass();
	d3.selectAll(".classDataBar").classed("highlightedthreatenedclassbar", function(thisd, thisi) {
		return ((thisi==i)&&(thisd.type=="threatened"));
		}).classed("highlightedhealthyclassbar", function(thisd, thisi) {
		return ((thisi==i)&&(thisd.type=="healthy"));
		}).classed("highlightedbackgroundclassbar", function(thisd, thisi) {
		return ((thisi==i)&&(thisd.type=="background"));
		})
	d3.selectAll(".classDataLabel").classed("highlightedClassDataLabel", function(thisd, thisi) {
		return thisd.type==d.type;
	})
	
	if (d.type=="background") {
		//if(d.class=="birds") {
		//	d3.select("#backgrounddesc").style("opacity", 1).style("margin-top", "218px")
		//} else {
			d3.select("#backgrounddesc").style("opacity", 1).style("margin-top", "205px")
		//}
	}
}

function mouseoutclassbar(d, i) {
	mouseoutClass();
	clearClassBarHighlights();
	if (d.type=="background") {
		d3.select("#backgrounddesc").style("opacity", 0)
	}
}

function clearClassBarHighlights() {
	d3.selectAll(".classDataBar").classed("highlightedthreatenedclassbar", false);
	d3.selectAll(".classDataBar").classed("highlightedhealthyclassbar", false);
	d3.selectAll(".classDataBar").classed("highlightedbackgroundclassbar", false);
	d3.selectAll(".classDataLabel").classed("highlightedClassDataLabel", false);
}

function updateText() {
	//title.text(toTitleCase(classdata[currclassindex].class));
	//var classstattext = (classdata[currclassindex].value+"% OF "+classdata[currclassindex].class.substring(0, classdata[currclassindex].class.length-1)).toUpperCase();
	//classstat.text(classstattext+" SPECIES HEADED TO EXTINCTION")
	//classbodycopy1.text(bodycopytext[currclassindex].text1);
	//classbodycopy2.text(bodycopytext[currclassindex].text2);
	//
	//$('.classbodycopy1').html(bodycopytext[currclassindex].text1);//'Hello <a onClick="a();" style="cursor: pointer; cursor: hand; top: 100px">*CLICK HERE*</a>');
	//$('.classbodycopy2').html(bodycopytext[currclassindex].text2);//'Hello <a onClick="a();" style="cursor: pointer; cursor: hand; top: 100px">*CLICK HERE*</a>');


	//$('.howtotext').text("Each rectangle represents a species of "+classdata[currclassindex].class.substring(0, classdata[currclassindex].class.length-1)+". Drag the horizontal scroll bar to browse through all "+classdata[currclassindex].class+".")



	//classbodycopy1.html='<a onClick="a();" style="cursor: pointer; cursor: hand; top: 100px">*CLICK HERE*</a>'
	//document.getElementById("searchid").innerHTML='<input type="text" placeholder="Search for an animal" id="search" autocomplete="off" data-provide="typeahead" >';

	$('.vistitle').text(classdata[currclassindex].class.toUpperCase());
	$('.visstat').text(classdata[currclassindex].numatrisk+" "+getSingularFormClassname()+" species at risk");
	$('.visguff').html(bodycopytext[currclassindex].copy)


	d3.select(".legendbackgrounddesc").text("No more than 1 "+classdata[currclassindex].class.substring(0, classdata[currclassindex].class.length-1)+" species would be expected to go extinct ‘naturally” in the next 100 years, without human interference")
	
}

function renderTooltip() {	
    
	familytooltip = d3.select("#chart")
	.append("div")
	.attr("class", "familytooltip")
}

function classViewText() {


	classdatachart = d3.select("#chart")
    	.append("div")
    	.attr("class", "classdatachart");
	classdatachart
		.style("left", classsvgx+"px")
    	.style("top", classy +"px")
    
	classsvg = classdatachart.append("svg")
		.attr("width", classchartwidth)
		.attr("height", classchartheight)
		.attr("class", "classchart");
/**
	title = classdatachart.append("div").attr("class", "classtitle");
	classstat = classdatachart.append("div").attr("class", "classstat");    
	classbodycopy1 = classdatachart.append("div").attr("class", "classbodycopy1");
	classbodycopy2 = classdatachart.append("div").attr("class", "classbodycopy2");**/
}

/**
function legend() {
	
	var legendrect = svg.selectAll(".legendrect")
		.data(legenddata)
		.enter().append("rect").attr("class", "legendrect")
		.attr("x", function(d, i) {return legendx+(i*legendxspace)}).attr("y", legendy0)
		.attr("width", legendrectwidth).attr("height", legendrectheight)
		.attr("fill", function(d, i) {return classdatacolors[d.type];})
		//.classed("selectedthreatenedclassbar", function(d, i){return d.type=="threatened"})
		//.classed("selectedhealthyclassbar", function(d, i){return d.type=="healthy"})
		//.classed("selectedbackgroundclassbar", function(d, i){return d.type=="background"})
		
		
	var legendhealthy = classdatachart.append("div").attr("id", "healthy").attr("class", "legendhealthy")
		.classed("legendlabel", true).text("HEALTHY SPECIES");    
	var legendthreatened = classdatachart.append("div").attr("id", "threatened").attr("class", "legendthreatened")
		.classed("legendlabel", true).text("AT RISK SPECIES");


	
	d3.select('.legendhealthy').on("mouseover", function() {mouseoverlegend(this);})
		.on("mouseout", function() { mouseoutlegend(this);});
	d3.select('.legendthreatened').on("mouseover", function() {mouseoverlegend(this);})
		.on("mouseout", function() { mouseoutlegend(this);});
		
		
	
	classdatachart.append("div").attr("class", "legendbackgrounddesc").attr("id", "backgrounddesc")
		//.text("Estimated number of species that could be expected to go extinct ‘naturally” in the next 100 years, without human interference")
		//.text("No more than 1 "+classdata[currclassindex].class.substring(0, classdata[currclassindex].class.length-1)+" species would be expected to go extinct ‘naturally” in the next 100 years, without human interference")
	
	
		
	classdatachart.append("div").attr("class", "legendhealthydesc").attr("id", "healthydesc")
		.text("Species with low risk of extinction in the next 100 years")
	
	classdatachart.append("div").attr("class", "legendthreateneddesc").attr("id", "threateneddesc")
		.text("Species headed to extinction in the next 100 years")

}**/
/**
function mouseoverlegend(e) {
/**
	e.classList.add('highlightedLegendLabel');
	//document.getElementById(e.id+"desc").style.opacity=1;
	svg.selectAll(".legendrect").classed("highlightedthreatenedclassbar", function(thisd, thisi) {
		return ((e.id=='threatened')&&(thisd.type=='threatened'));
		}).classed("highlightedhealthyclassbar", function(thisd, thisi) {
		return ((e.id=='healthy')&&(thisd.type=='healthy'));
		});



}**/
/**
function mouseoutlegend(e) {
	e.classList.remove('highlightedLegendLabel');
	document.getElementById("healthydesc").style.opacity=0;
	document.getElementById("threateneddesc").style.opacity=0;
	svg.selectAll(".legendrect").classed("highlightedhealthyclassbar", false);
	svg.selectAll(".legendrect").classed("highlightedthreatenedclassbar", false);
/**
	document.getElementById(e.currentTarget.id).classList.remove('highlightedLegendLabel');
	document.getElementById("healthydesc").style.display="none";
	document.getElementById("threateneddesc").style.display="none";
	svg.selectAll(".legendrect").classed("highlightedhealthyclassbar", false);
	svg.selectAll(".legendrect").classed("highlightedthreatenedclassbar", false);
	//svg.selectAll(".legendrect").classed("highlightedbackgroundclassbar", false);
	
}**/
/**

function classViewLine() {
svg.append("rect").attr("class", "titleline")
	.attr("x", classx)
	.attr("y", classy+classlinespace)
	.attr("height", classlineheight)
	.attr("width", focusgraphwidth-(classx-focusx0));
}**/

function staticLabels() {
// "Order level" and "family level" axislabels
var newlinespace = 12;
	svg.append("text")
		.attr("class", "focusstaticorderlabel")
		.attr("x", focusx0-2*orderlabeldx)
		.text("Order")
		.attr("y", function() {
			//wordheight = d3.select(this).node().getBBox().height;
			return orderlabely;//+wordheight;
		})
		.attr("text-anchor", "end")
		/**
	svg.append("text")
		.attr("class", "focusstaticorderlabel")
		.attr("x", x0-2*orderlabeldx)
		.text("level")
		.attr("y", function() {
			//wordheight = d3.select(this).node().getBBox().height;
			return orderlabely+newlinespace;
		})
		.attr("text-anchor", "end")**/
		
	svg.append("text")
		.attr("class", "focusstaticorderlabel")
		.attr("x", focusx0-2*orderlabeldx)
		.text("Family")
		.attr("y", function() {
			return familyy+familyheight;
		})
		.attr("text-anchor", "end")
		/**
	svg.append("text")
		.attr("class", "focusstaticorderlabel")
		.attr("x", x0-2*orderlabeldx)
		.text("level")
		.attr("y", function() {
			return familyy+familyheight+newlinespace;
		})
		.attr("text-anchor", "end")**/
		incrementProgress();
}

function renderContext() {
	// Set up a slot for the context background image
	contextdiv = d3.select("#chart")
	.append("div")
	.attr("class", "contextimagediv");
	contextdiv.style("left", x0-1+"px")
		.style("top", y0-34+"px");
	contextimage = contextdiv.append("img").attr("id", "contextimage");

//contextunhighlightbackground
	svg.append("rect").attr("class", "contextunhighlightbackground")
		.attr("x", x0).attr("y", focusy0+familyheight).attr("width", graphwidth)
		.attr("height", y0+familyheight-focusy0)

	// This is if rendering the actual vector data, rather than an image
	//contextCircles();
	//contextBars();
	
	// Helper label/line for context view
	
	svg.append("line").attr("class", "contextlabelline").attr("x1", x0).attr("x2", x0+graphwidth).attr("y1", contextlabelliney).attr("y2", contextlabelliney);
	svg.append("rect").attr("class", "contextlabelhelperrect").attr("y", contextlabely-10).attr("height", 20)
	svg.append("text").attr("class", "contextlabel").attr("y", contextlabely)//.text("BROWSE ALL MAMMAL S")
	
	// 
	defineGradients();
	
	// Set up the brush for navigating through the context view
	brush();
	
  	// Draw lines and labels at the place where each order starts, omitting the name if there isn't room
  	contextOrders();
}

/**
function renderButtons() {
	// Append a title
	
		
	
	// Class species breakdown, data bars	
	var cbars = svg.selectAll(".classBar")
		.data(buttondata);
	cbars.enter().append("rect");
	cbars.attr("class", "classBar");
	cbars.attr("x", function(d, i){return buttonx[d.class];})
		.attr("y", function(d, i) {
			return buttony0+(d.order*(baryspace+baryheight))+baryspace;
			//return i*20
			})
		.attr("height", baryheight)
		.attr("fill", function(d, i) {
			return buttoncolors[d.type]
		}).on("mouseover", mouseoverbutton)
		.on("mouseout", mouseoutbutton);
		
	cbars.attr("width", 0).transition()
		.duration(transitionduration)
		.attr("width", function(d, i) {return Math.max(2, classBarScale(d.value))})
		
		
	// Append an invisible box to catch hover events
	svg.selectAll(".invisiblebuttonrect")
		.data(classdata)
		.enter().append("rect").attr("class", "invisiblebuttonrect")
		.attr("x", function(d, i){return buttonx[d.class];})
		.attr("y", function(d, i) {
			return buttony0-50;
		}).attr("fill", "white")
		.attr("opacity", 0)
		.attr("width",  classBarMaxWidth)
		.attr("height", function(d, i) {
		return 100;
			//return 4*(baryheight+baryspace)+15;
			})
		.on("mouseover", mouseoverbutton)
		.on("mouseout", mouseoutbutton)
		.on("click", clickbutton);
		
		
	updateButtonHighlights();
	incrementProgress();
}

function clickbutton(d, i) {
//thisstaticdiv = document.getElementById(classdata[i].class+'staticdiv').style.opacity=1;
	//document.getElementById(classdata[i].class+'viddiv').style.opacity=.01;
	//document.getElementById(classdata[i].class+'staticdiv').style.opacity=1;
	changeClass(i);
}**/

function changeClass(i) {
	pauseCurrentVid(currclassindex);
	
	switchingclass = true;
	if (!firstloadtooltip) {
	clickedspecies = undefined;
	selectedspecies = undefined;
	}
	currclassindex = i;
	data = alldata[i];
	selectedclass = classdata[i].class;
	initializeView();
	clearAllHighlights();
	initializeBrush();

	//updateBrushWithTransition();
	updateBrush();
	updateAll();
	
	if (showingclasschart) {
		hideClassChart();
		showClassChart();
	}
	
	resetSearchInput();
	
	playCurrentVid(currclassindex);
	switchingclass = false;
	//printFamilies();
	/**
	data.forEach(function(d,i){
		
		if (d.Family==("Micrixalidae").toUpperCase()) {
	
		}
		
	})**/
	
	
}

function printFamilies() {
	var fams = classdata[3].familydata;

	var str="";
	fams.forEach(function(d, i){
		str+=toTitleCase("\""+d.familyname+"\": \"\",\n")
		
	})
	console.log(str)
}

function updateStatHighlights() {
d3.selectAll(".number").classed("visnumber", true);
	d3.selectAll(".number").classed("deselectednumber", function(d, i) {return ((!(i==currclassindex))&&(!(i==hoveredindex)))});
	d3.selectAll(".group").classed("deselectedgroup", function(d, i) {return ((!(i==currclassindex))&&(!(i==hoveredindex)))});
}

function updateButtonHighlights() {
	//svg.selectAll(".buttonlabel").classed("selectedbuttonlabel", function(d) {return ((d.class==hoveredclass)||(d.class==selectedclass));});
	//d3.selectAll(".number").classed("selectednumber", true);
	updateStatHighlights();
	svg.selectAll(".classBar").classed("selectedhealthyclassbar", function(d, i) {return (((d.class==hoveredclass)||(d.class==selectedclass))&&(d.type=="healthy"))})
		.classed("selectedthreatenedclassbar", function(d, i) {return (((d.class==hoveredclass)||(d.class==selectedclass))&&(d.type=="threatened"))})
		.classed("selectedbackgroundclassbar", function(d, i) {return (((d.class==hoveredclass)||(d.class==selectedclass))&&(d.type=="background"))});
}
var hoveredindex = -1;
function mouseoutbutton(d, i) {
	hoveredclass=null;
	hoveredindex = -1;
	updateButtonHighlights();
}

function mouseoverbutton(d, i) {
	hoveredclass = d.class;
	hoveredindex = i;
	updateButtonHighlights();

}
function defineGradients() {
 var brushgradient = svg.append("svg:defs")
  .append("svg:linearGradient")
    .attr("id", "brush-gradient")
    .attr("x1", "0%")
    .attr("y1", "0%")
    .attr("x2", "0%")
    .attr("y2", "100%")
    .attr("spreadMethod", "pad");
 
brushgradient.append("svg:stop")
    .attr("offset", "0%")
    .attr("stop-color", "#808285")
    .attr("stop-opacity", 1);
 
brushgradient.append("svg:stop")
    .attr("offset", "100%")
    .attr("stop-color", "#3A3A3C")
    .attr("stop-opacity", 1);
    
    
var tallgenusgradient = svg.append("svg:defs")
  .append("svg:linearGradient")
    .attr("id", "tallgenus-gradient")
    .attr("x1", "0%")
    .attr("y1", "0%")
    .attr("x2", "100%")
    .attr("y2", "0%")
    .attr("spreadMethod", "pad");
 
tallgenusgradient.append("svg:stop")
    .attr("offset", "0%")
    .attr("stop-color", "white")
    .attr("stop-opacity", 0);
 
tallgenusgradient.append("svg:stop")
    .attr("offset", "30%")
    .attr("stop-color", "white")
    .attr("stop-opacity", 1);
    
tallgenusgradient.append("svg:stop")
    .attr("offset", "70%")
    .attr("stop-color", "white")
    .attr("stop-opacity", 1);
    
tallgenusgradient.append("svg:stop")
    .attr("offset", "100%")
    .attr("stop-color", "white")
    .attr("stop-opacity", 0);
    /**
      <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:rgb(255,255,0);stop-opacity:1" />
      <stop offset="100%" style="stop-color:rgb(255,0,0);stop-opacity:1" />
    </linearGradient>**/
    
    
/**
 var brushbackgroundgradient = svg.append("svg:defs")
  .append("svg:linearGradient")
    .attr("id", "brushbackground-gradient")
    .attr("x1", "0%")
    .attr("y1", "0%")
    .attr("x2", "0%")
    .attr("y2", "100%")
    .attr("spreadMethod", "pad");
 
brushbackgroundgradient.append("svg:stop")
    .attr("offset", "0%")
    .attr("stop-color", "#BCBEC0")
    .attr("stop-opacity", 1);
 
brushbackgroundgradient.append("svg:stop")
    .attr("offset", "100%")
    .attr("stop-color", "#D1D2D4")
    .attr("stop-opacity", 1);
 
  **/
      
      
     // <stop offset="5%" stop-color="#F60" />
     // <stop offset="95%" stop-color="#FF6" />
}    


// Functions to render the brush and make it function 
// Render the brush	
function brush() {
		
	svg.append("rect").attr("class", "brushbackground")
		.attr("x", x0).attr("y", contextfamilyy+contextfamilyspace).attr("width", graphwidth).attr("height",brushheight+1)
	
	
	svg.append("line").attr("class", "brushhelperline")
		.attr("x1", focusx0).attr("x2", focusx0+focusgraphwidth).attr("y1", focusy0+familyheight+.8).attr("y2", focusy0+familyheight+.8)
		.attr("stroke", "black")
	
	
	svg.append("rect").attr("class", "brushcontextwhitebackground").attr("id", "brushcontextwhiteback");
	
	svg.append("rect").attr("class", "brushhelperwhiterect")
		.attr("x", x0-10).attr("y", focusy0-10).attr("width", graphwidth+20).attr("height", familyheight+8).attr("fill", "white")
	
	
	svg.append("rect")
		.attr("class", "brush")
		.attr('id', 'brushElement')//.on("mouseover", function() {
			//document.getElementById("brushElement").classed("brushhighlighted", true)
		
		
		
		//.attr("x", x0).attr("y", contextfamilyy+contextfamilyspace).attr("width", graphwidth).attr("height",brushheight)
	
		
		/**
	var brushdotspace = 2;
	svg.selectAll(".brushdotsleft")
			.data(brushdotdata)
			.enter().append("rect").attr("class", "brushdotsleft");
	svg.selectAll(".brushdotsright")
			.data(brushdotdata)
			.enter().append("rect").attr("class", "brushdotsright");**/
		
	
		
		
		
	initializeBrush();
	
	
	
	updateBrush();	
	incrementProgress();		
}

function initializeBrush() {
//console.log("initializing brush")

	brushdata = {"x":getContextXFromGenus(focusp1), "y":contextfamilyy+contextfamilyspace, 
	"width":(xspace*(numfocus)), 
	"height":brushheight};
	//svg.select(".brush").attr("fill", "url(#reptilesbrush)")
	
	var brushlines = svg.selectAll(".brushlines")
		.data(brushlinedata);
	brushlines.enter().append("line").attr("class", "brushlines").attr("y1", function(d, i) {
			var brushy1 = brushdata.y+(brushdata.height/2.0)-(brushlineheight/2.0)
		
			return brushy1})
		.attr("y2", function (d, i) {
			var brushy2 = brushdata.y+(brushdata.height/2.0)+(brushlineheight/2.0)
			return brushy2;
		});
	brushlines.attr("x1", function(d, i){
			return (brushdata.width/2.0)+(d*brushlinespace);
		}).attr("x2", function(d, i) {
			return  (brushdata.width/2.0)+(d*brushlinespace);
		})
		
		
		
	svg.select(".brushcontextwhitebackground").attr("y", brushcontextwhitebackgroundy0)
	.attr("width", brushdata.width).attr("height", brushcontextwhitebackgroundheight).attr("fill", "black")
	
//	var brushcontextwhiteback = svg.selectAll("brushcontextwhitebackground")
		
}


// Update the brush
function updateBrush() {
	
	
	svg.select(".brush")//.attr("x", brushdata.x)
	.attr("y", brushdata.y).attr("width", brushdata.width)
	.attr("height", brushdata.height)
		.on("mousedown", function() {d3.event.stopPropagation();})
		//.on("click", function() {d3.event.stopPropagation();})
		//.on("mouseover", clearAllHighlights)
		.call(d3.behavior.drag()
      		.on("drag", dragmove)
      		)
      	.attr("transform", function() {
 
      	//	if (!searchselect) {
		//	brushdata.x=x0;
		//	return "translate("+x0+", "+0+")";
		//	}
			return "translate("+brushdata.x+", "+0+")";
			});

	svg.selectAll(".brushlines")
		.attr("transform", function() {
			return "translate("+brushdata.x+", "+0+")";
			});
			
	svg.selectAll(".brushcontextwhitebackground")
		.call(d3.behavior.drag()
      		.on("drag", dragmove)
      		)
		.attr("transform", function() {
			return "translate("+brushdata.x+", "+0+")";
			});
			
	

/**
	svg.selectAll(".brushdotsleft").attr("y", function(d, i) 
		{return brushdata.y+((dotsize+dotspace)/2)+(((brushdata.height-(dotsize+dotspace))/(brushdotdata.length))*(i))})
		.attr("width", dotsize).attr("height",dotsize).attr("transform", function() {
			return "translate("+(brushdata.x+dotspace)+", "+0+")";
			});
			
	svg.selectAll(".brushdotsright").attr("y", function(d, i) 
		{return brushdata.y+((dotsize+dotspace)/2)+(((brushdata.height-(dotsize+dotspace))/(brushdotdata.length))*(i))})
		.attr("width", dotsize).attr("height",dotsize).attr("transform", function() {
			return "translate("+(brushdata.x)+", "+0+")";
			});**/
		
		
	//	brushdots.attr("x", brushdata.x).attr("y", function(d, i) {return brushdata.y+brushdotspace*i})
		//	.attr("width", 2).attr("y", 2);
		/**.transition()
      .duration(delay)**/
      
    //  var brushdotspace = 2;
	//	var brushdots = svg.selectAll(".brushdotsleft")
}

function updateBrushWithTransition() {
	
	beginTransitionFocus(0, 0, 20)

	/**
	svg.select(".brush")//.attr("x", brushdata.x)
	.attr("y", brushdata.y).attr("width", brushdata.width)
	.attr("height", brushdata.height)
		.on("mousedown", function() {d3.event.stopPropagation()})
		.call(d3.behavior.drag()
      		.on("drag", dragmove))
      	.transition()
      	.duration(brushTransitionTime)
      		.attr("transform", function() {
			brushdata.x=x0;
			return "translate("+x0+", "+0+")";
			});
			
	

	svg.selectAll(".brushlines").transition()
      	.duration(brushTransitionTime)
      		.attr("transform", function() {
			return "translate("+x0+", "+0+")";
			});	
			
			
	svg.selectAll(".brushcontextwhitebackground").transition()
      	.duration(brushTransitionTime)
      		.attr("transform", function() {
			return "translate("+x0+", "+0+")";
			});	**/
			
			
			
}

function getBrushedP1(brushx) {
	 return parseInt(((brushx-x0)/graphwidth)*classdata[currclassindex].numgenuses);
}

// Call this function when the brush is dragged
function dragmove(d) {
	event.preventDefault();
	var move;
	speciestext.style("display", "none");
	d3.select(".brush").attr("transform", function() {
		move = Math.max(x0, Math.min((d3.event.x-(brushdata.width/2)),(x0+graphwidth-brushdata.width)))
		brushdata.x=move;
		return "translate("+move+", "+0+")"
		});
		
	svg.selectAll(".brushlines").attr("transform", function() {
			move = Math.max(x0, Math.min((d3.event.x-(brushdata.width/2)),(x0+graphwidth-brushdata.width)))
		return "translate("+move+", "+0+")"
			});
			
	svg.selectAll(".brushcontextwhitebackground").attr("transform", function() {
			move = Math.max(x0, Math.min((d3.event.x-(brushdata.width/2)),(x0+graphwidth-brushdata.width)))
		return "translate("+move+", "+0+")"
			});		
		/**
	svg.selectAll(".brushdotsleft").attr("transform", function() {
		move = Math.max(x0, Math.min((d3.event.x-(brushdata.width/2)),(x0+graphwidth-brushdata.width)))+dotspace;
		return "translate("+move+", "+0+")"
		});
		
	svg.selectAll(".brushdotsright").attr("transform", function() {
		move = Math.max(x0, Math.min((d3.event.x-(brushdata.width/2)),(x0+graphwidth-brushdata.width)));
		return "translate("+move+", "+0+")"
		});**/
		
	focusp1=getBrushedP1(brushdata.x);
	focusp2=focusp1+numfocus-1;

	update();
}
    
// Load the initial data set
function loadInitClass(url, callback) {
	 incrementProgress();
	 d3.tsv(url, function(error, result) { 
        alldata[currclassindex] = result;
        selectedclass = classdata[currclassindex]["class"];
        //process(result, currclassindex);
        incrementProgress();
        callback(error, result); 
      }); 
      
}

// Load remaining data sets
function loadAllSpecies() {
	alldata.forEach(function(d, i){
		
		//console.log("loading data for "+classdata[i].class)
		 incrementProgress();
		if (!(i==currclassindex)) {
	
		//if (d["family"]=="Micrixalidae") {
		//	console.log(d)
		//}
		//if (i==3||i==1) {
		/**console.log("loading data for "+classdata[i].class)
		vids[i].vid.on('loadeddata', function() {
			console.log("loaded "+classdata[i].class+" video")
			vids[i].vidloaded=true;
			
			//vids[i].vid.play();
			//vids[i].vid.currentTime(0.133);
		
			incrementProgress();
			//vids[i].vid.pause();
			
		})
		//}**/
		d3.tsv("data/"+classdata[i].class+"-results-small.tsv", function(error, result) {
			alldata[i] = result;
			incrementProgress();
			//preprocess(result, i);
		})
		}
	})
}



// Data processing function that is normally not called during actual load, just as a preprocessing function
// that prints out the relevant data structures, which can then be copied and pasted to the top of this file
// This is done to improve performance
function process(data, index) {
	var genusnames = [];
	var genusdata = [];
	var scinames = [];
	var commonnames = [];
	var familynamesorder = [];

	data.forEach(function(d, i) {
		var genusname = d.Genus;
		var speciesname = d.Species;
		scinames.push(genusname+" "+speciesname);
		commonnames.push(d['Common names (Eng)'].split(',')[0])
		familyname = d["Family"];
		if (familynamesorder.indexOf(familyname)==-1) {
			familynamesorder.push(familyname);
		}
		var existingindex = genusnames.indexOf(genusname);
		if (existingindex==-1) {
			genusnames.push(genusname);
			if (isThreatened(d)) {
			genusdata.push({"genus": genusname, "family-order": familynamesorder.length-1, "genus-order": d["genus-order"], "firstspecies": i, "lastspecies": i, "family": d.Family, "order": d.Order, "threatenedcount":1, "healthycount":0})
			} else {
			genusdata.push({"genus": genusname, "family-order": familynamesorder.length-1, "genus-order": d["genus-order"], "firstspecies": i, "lastspecies": i, "family": d.Family, "order": d.Order, "threatenedcount":0, "healthycount":1})
			}
		} else {
			genusdata[existingindex]["lastspecies"] = i;
			if (isThreatened(d)) {
				genusdata[existingindex]["threatenedcount"] = parseFloat(genusdata[existingindex]["threatenedcount"])+1;
			} else {
				genusdata[existingindex]["healthycount"] = parseFloat(genusdata[existingindex]["healthycount"]) + 1;
			}
		}
	});
	
	var familynames = [];
	var familydata = [];
	var tmpmaxspecies = 0;
	genusdata.forEach(function(d, i) {
		var familyname = d.family;
		var existingindex = familynames.indexOf(familyname);
		if (existingindex == -1) {
			familynames.push(familyname);
			familydata.push({"familyname": familyname, "ordername": d.order, "firstgenus": i, "lastgenus": i, "threatenedcount": d.threatenedcount, "healthycount": d.healthycount});
		} else {
			familydata[existingindex]["lastgenus"] = i;
			familydata[existingindex]["threatenedcount"] = familydata[existingindex]["threatenedcount"]+d.threatenedcount;
			familydata[existingindex]["healthycount"] = familydata[existingindex]["healthycount"]+d.healthycount;
		}
		
		var numspecies = d.threatenedcount+d.healthycount;
		if (numspecies>tmpmaxspecies) {
			tmpmaxspecies=numspecies;
		}
	
	});

	var ordernames = [];
	var orderdata = [];
	genusdata.forEach(function (d, i) {
		var ordername = d.order;
		var existingindex = ordernames.indexOf(ordername);
		if (existingindex==-1) {
			ordernames.push(ordername);
			orderdata.push({"ordername": ordername, "firstgenus": i, "lastgenus": i, "threatenedcount": d.threatenedcount, "healthycount": d.healthycount})
		} else {
			orderdata[existingindex]["lastgenus"] = i;
			orderdata[existingindex]["threatenedcount"] = orderdata[existingindex]["threatenedcount"]+d.threatenedcount;
			orderdata[existingindex]["healthycount"] = orderdata[existingindex]["healthycount"]+d.healthycount;
		}
		
	
	});

	maxspecies = tmpmaxspecies;
	numgenuses = genusdata.length;	
		
	// Print out the processed data to paste in to loading data
	console.log("\"commonnames\": "+JSON.stringify(commonnames)+",")
	//console.log("\"genusdata\": "+JSON.stringify(genusdata)+",")
	//console.log("\"familydata\": "+JSON.stringify(familydata)+",")
	//console.log("\"commonnames\": "+JSON.stringify(commonnames)+","+"\n\"scinames\": "+JSON.stringify(scinames)+",")
	
	//console.log("\"genusnames\": "+JSON.stringify(genusnames)+",\n\"genusdata\": "+JSON.stringify(genusdata)+",\n\"familynames\": "+JSON.stringify(familynames)+",\n\"familydata\": "+JSON.stringify(familydata)+", \n\"ordernames\": "+JSON.stringify(ordernames)+",\n\"orderdata\": "+JSON.stringify(orderdata)+",\n\"maxspecies\": "+maxspecies+",\n\"numgenuses\": "+numgenuses+",")
}


// NEW HELPER FUNCTIONS
function getFocusP1FromBrush() {
	return parseInt(((brushdata.x-x0)/(graphwidth))*(classdata[currclassindex].numgenuses))//(brushdata.x-x0)/(classdata[currclassindex].numgenuses);
}

function getPercentThreatened(d) {
	return parseInt(100*d.threatenedcount/(d.threatenedcount+d.healthycount));
}

function threatenedfamily(d) {
	return getPercentThreatened(d)>=threatenedthresh;
	//return d.threatenedcount>=d.healthycount;
}

function getFocusXFromGenus(genusorder) {
	return focusx0+(genusorder-focusp1)*focusxspace;
	//return getSpeciesFocusXCoord(genusorder);
}

function getContextXFromGenus(genusorder) {
return x0+(genusorder*xspace);
	//return getSpeciesFocusXCoord(genusorder);
}

function contextHasRoomForOrderLabel(d, name, wordlen) {
	if ((getContextXFromGenus(d.lastgenus)-Math.max(getContextXFromGenus(d.firstgenus), x0)+wordbuffer)<wordlen) {
				return false;
	}
	return true;
}

function getFocusYFromSpecies(speciesindex) {
	return focusy0-familyspeciesyspace-(parseFloat(speciesindex)*(focusyspace))-focusyspace;
		
}

function getFamilyName(d) {
	var name = commonFamilyName[toTitleCase(d.familyname)]
	if (name== undefined) {
		name = toTitleCase(d.familyname);
	}
	return name;
}

function getOrderName(d) {
	var name = commonOrderName[toTitleCase(d.ordername)]
	if (name== undefined) {
		//name = toTitleCase(d[0]["Order"]);
		name = toTitleCase(d.ordername);
	}
	return name;//.toUpperCase();
}

function orderHasRoomForLabel(d, name, wordlen) {
	if ((getFocusXFromGenus(d.lastgenus)-getFocusXFromGenus(d.firstgenus)+wordbuffer)<wordlen) {
		return false;
	}
	return true;

}

function orderLabelNotCutOff(d, name, wlen) {
	var nextorder;
	if (classdata[currclassindex].ordernames.indexOf(d.ordername)<(classdata[currclassindex].ordernames.length-1)) {
		nextorder = classdata[currclassindex].orderdata[classdata[currclassindex].ordernames.indexOf(d.ordername)+1];

		if (getFocusXFromGenus(nextorder.firstgenus)-Math.max(x0, getFocusXFromGenus(d.firstgenus)+wordbuffer)<wlen) {
			return false;
		}
	}

	return true;
}

function getYPositionOfOrder(d, i) {
	wordlen = d3.select(this).node().getBBox().width
	//wordheight = d3.select(this).node().getBBox().height;
	if ((orderHasRoomForLabel(d, getOrderName(d), wordlen))&&(orderLabelNotCutOff(d, getOrderName(d), wordlen))) {
		return orderlabely;//+wordheight;
	}
	lowerypos.push(d.ordername);
	return orderlabel2y;//+(wordheight*3);
}

function getVisibilityOfOrderName(d) {
		wordlen = d3.select(this).node().getBBox().width;
		
		if (orderHasRoomForLabel(d, getOrderName(d), wordlen)&&orderLabelNotCutOff(d, getOrderName(d), wordlen)) {
			orderi = cutofflabels.indexOf(d.ordername);
			if (orderi>-1) {
				cutofflabels.splice(orderi, 1);
			}
				//classdata[currclassindex].orderdata[classdata[currclassindex].ordernames.indexOf(d.ordername)]["iscutoff"] = false;
			return "visible";
		}
		//classdata[currclassindex].orderdata[classdata[currclassindex].ordernames.indexOf(d.ordername)]["iscutoff"] = true;
		cutofflabels.push(d.ordername);
		return "hidden";
}

function getBindingField(d) {
	//if (currclassindex!=3) {
		return d["Genus"]+d["Species"];
	//}
	//return d["BirdLife Sequence"];
}

function getBindingFieldGenus(d) {
	return d.genus;
}

function colorFamilyUnhighlight(d) {
	if (threatenedfamily(d)) {
		return classdatacolors["threatenedunhighlight"];
	}
	return classdatacolors["healthyunhighlight"];
}

function getFamilyColor(d) {
	if (threatenedfamily(d)) {
		return classdatacolors["threatened"];
	}
	return classdatacolors["healthy"];
}

function getSpeciesColor(d) {
	if (isThreatened(d)) {
		return classdatacolors["threatened"];
	}
	return classdatacolors["healthy"];
}

function getVisibilityOfOrderNumber(d) {
	if(cutofflabels.indexOf(d.ordername)==-1) {
		return "visible";
	}
	return "hidden";
}

function toTitleCase(str) {
	
	return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

function isThreatened(d) {
	return ((threatdict[d["Red List status"]]!="Least Concern") && (threatdict[d["Red List status"]]!="Data Deficient"));
}

function isDD(d) {
	return (threatdict[d["Red List status"]]=="Data Deficient");
}

function isHealthy(d) {
	return (threatdict[d["Red List status"]]=="Least Concern");
}

d3.selection.prototype.moveToFront = function() {
  return this.each(function(){
    this.parentNode.appendChild(this);
  });
};






var commonOrderName = {"Crocodylia":"Crocodiles", "Squamata":"Snakes & lizards", "Testudines":"Turtles", "Rhynchocephalia": "Lizards","Afrosoricida": "Moles", "Carnivora": "Carnivores","Cetartiodactyla": "Whales & even toed hoofed animals","Chiroptera": "Bats","Cingulata": "Armadillos","Dasyuromorphia": "Carnivorous marsupials","Didelphimorphia":"Possums","Diprotodontia":"Herbivorous marsupials","Eulipotyphla":"Insectivorous mammals","Lagomorpha": "Hares, rabbits and pikas","Primates":"Primates","Rodentia": "Rodents","Dermoptera": "Colugos","Hyracoidea": "Hyraxes","Macroscelidea": "Elephant shrews","Microbiotheria": "Microbiotheria","Monotremata": "Monotremes","Notoryctemorphia": "Marsupial moles","Paucituberculata": "Shrew opossums","Peramelemorphia": "Marsupial omnivores","Perissodactyla": "Odd-toed ungulates","Pholidota": "Scaly anteaters","Pilosa": "Pilosa","Proboscidea": "Trunked mammals","Scandentia": "Treeshrews","Sirenia":  "Sea cows","Tubulidentata": "Aardvarks", 
"Gymnophiona":"Caecilians", "Anura":"Frogs & toads", "Caudata": "Salamanders",
// BIRDS
"Ciconiiformes": "Storks","Coliiformes": "Mousebirds","Columbiformes": "Pigeons & doves","Falconiformes": "Diurnal birds of prey","Galliformes": "Gamebirds","Gaviiformes": "Loons & their relatives","Gruiformes": "Crane–like birds","Passeriformes": "Perching birds","Phoenicopteriformes": "Flamingos & their relatives","Podicipediformes": "Grebes","Procellariiformes": "Petrels","Psittaciformes": "Parrots","Sphenisciformes": "Penguins","Strigiformes": "Owls","Struthioniformes": "Ratites","Tinamiformes": "Tinamous","Trogoniformes": "Trogons"
}




var commonFamilyName = {"Alligatoridae":"Alligators", "Crocodylidae":"Crocodiles","Gavialidae":"Gavialids", "Acrochordidae":"Aquatic snakes","Agamidae":"Dragon lizards","Amphisbaenidae":"Worm lizards","Anguidae":"Anguids","Anniellidae":"American legless lizards", "Anomalepididae":"Dawn blind snakes","Anomochilidae":"Anomochilids","Atractaspididae":"Stiletto snakes", "Boidae":"Boas","Bolyeridae":"Splitjaw snakes", "Carphodactylidae":"Subfamily of geckos","Chamaeleonidae":"Chameleons", "Cordylidae":"Girdled lizards", "Corytophanidae": "Helmeted lizards","Crotaphytidae":"Collared lizards", "Cylindrophiidae": "Asian pipe snakes", "Dactyloidae": "Anoles","Elapidae": "Elapids","Eublepharidae":"Eublepharid geckos","Gekkonidae":"House & other 'typical' geckos","Gerrhosauridae": "Plated lizards", "Gymnophthalmidae": "Spectacled lizards", "Helodermatidae": "Venomous lizards of southwest US, Mexico, & SA","Homalopsidae":"Stout-bodied water snakes", "Iguanidae": "Iguanas & related species", "Lacertidae":"Wall & true lizards, lacertas","Leptotyphlopidae": "Thread snakes", "Natricidae": "Moon snails", "Opluridae": "Madagascan iguanas", "Prosymnidae":"Raccoons, coatis, kinkajous, olingos, olinguitos, ringtails and cacomistles","Pygopodidae": "Legless lizards", "Pythonidae": "Pythons", "Scincidae": "Skinks", "Teiidae": "Whiptails", "Trogonophidae": "Desert ringed lizards","Tropidophiidae": "Dwarf boas", "Tropiduridae": "Neotropical ground lizards", "Uropeltidae": "Pipe snakes", "Viperidae": "Vipers","Xantusiidae": "Night lizards", "Xenopeltidae": "Sunbeam snakes", "Xenophiidae": "Carrier shells", "Xenosauridae": "Knob-scaled lizards","Carettochelyidae": "Pig-nosed turtle", "Chelidae": "Austro-South American side-neck turtles", "Chelydridae": "Snapping turtles","Emydidae": "Pond turtes", "Kinosternidae":"Kinosternids", "Pelomedusidae": "African side-necked turtles", "Platysternidae": "Big-headed turtle","Testudinidae": "Tortoises", "Trionychidae": "Softshell turtles",
// AMPHIBIANS
"Alytidae": "Painted frogs","Arthroleptidae": "Squeaker frogs","Ascaphidae": "Tailed frogs","Bombinatoridae": "Fire-bellied toads","Brachycephalidae": "Saddleback toads","Bufonidae": "True toads","Ceratophryidae": "Common horned frogs","Conrauidae": "Slippery frogs","Dicroglossidae": "Fork-tongued frogs","Heleophrynidae": "Ghost frogs","Hemisotidae": "Shovelnose frogs","Hylidae": "Tree frogs & their allies","Hyperoliidae": "Sedge and bush frogs","Leiopelmatidae": "New Zealand primitive frogs","Megophryidae": "Megophryids","Micrixalidae": "Dancing frogs","Pelobatidae": "European spadefoot toads","Pelodytidae": "Parsley frogs","Phrynobatrachidae": "Puddle frogs","Ptychadenidae": "Grassland frogs","Rhacophoridae": "Shrub frogs","Rhinophrynidae": "Mexican burrowing toad","Sooglossidae": "Seychelles frogs","Telmatobiidae": "Water frogs","Ambystomatidae": "Mole salamanders","Cryptobranchidae": "Giant salamanders","Hynobiidae": "Asiatic salamanders","Plethodontidae": "Lungless salamanders","Rhyacotritonidae": "Torrent salamanders","Salamandridae": "True salamanders & newts","Sirenidae": "Sirens","Ichthyophiidae": "Fish caecilians","Rhinatrematidae": "Beaked caecilians","Scolecomorphidae": "African caecilians","Typhlonectidae": "Rubber eels",
// MAMMALS
"Chrysochloridae": "Golden moles","Tenrecidae": "Tenrecs","Ailuridae": "Red panda & its extinct relatives","Canidae": "Dogs, wolves & dog–like mammals","Felidae": "Cats","Herpestidae": "Mongooses & similar mammals","Hyaenidae": "Hyenas","Mephitidae": "Skunks","Mustelidae": "Otters, badgers & similar mammals","Nandiniidae": "African palm civet","Otariidae": "Eared seal","Phocidae": "Earless seals","Prionodontidae": "Asiatic linsang","Procyonidae": "Raccoons & similar mammals","Ursidae": "Bears","Viverridae": "Viverrids","Antilocapridae": "Antilocaprids","Balaenidae": "Right & bowhead whales","Balaenopteridae": "Rorquals","Bovidae": "Bovids","Camelidae": "Camelids","Cervidae": "Deer","Delphinidae": "Oceanic dolphins","Eschrichtiidae": "Gray whales","Giraffidae": "Giraffes & okapis","Hippopotamidae": "Hippopotamuses","Monodontidae": "Narwhales & beluga whales","Moschidae": "Musk deer","Phocoenidae": "Porpoises","Physeteridae": "Sperm whales","Platanistidae": "South Asian river dolphin","Suidae": "Pigs","Tayassuidae": "New World pigs","Tragulidae": "Mouse-deer","Ziphiidae": "Beaked whales","Craseonycteridae": "Bumblebee bats","Emballonuridae": "Sac–winged bats","Furipteridae": "Smokey & thumbless bats","Hipposideridae": "Old World leaf-nosed bats","Megadermatidae": "False Vampire Bats","Molossidae": "Free-tailed bats","Mormoopidae": "Mustached, ghost–faced & naked–backed bats","Mystacinidae": "New Zealand short-tailed bats","Natalidae": "Funnel-eared bats","Noctilionidae": "Bulldog bats","Nycteridae": "Hollow-faced bats","Phyllostomidae": "New World leaf–nosed bats","Pteropodidae": "Fruit bats","Rhinolophidae": "Horseshoe bats","Rhinopomatidae": "Mouse–tailed bats","Thyropteridae": "Disc–winged bats","Vespertilionidae": "Evening bats","Dasypodidae": "Armadillos","Myrmecobiidae": "Banded anteaters","Cynocephalidae": "Colugos","Didelphidae": "Possums","Burramyidae": "Pygmy possums","Macropodidae": "Macropods","Petauridae": "Petaurids","Phascolarctidae": "Koalas & similar mammals","Potoroidae": "Potoroids","Tarsipedidae": "Honey possum","Vombatidae": "Wombats","Erinaceidae": "Hedgehogs & moonrats","Solenodontidae": "Solenodons","Soricidae": "Shrews","Talpidae": "Talpids","Procaviidae": "Hyraxes","Leporidae": "Rabbits and hares","Ochotonidae": "Pikas","Macroscelididae": "Elephant shrews","Ornithorhynchidae": "Platypuses","Tachyglossidae": "Spiny anteaters","Caenolestidae": "Shrew opossums","Peramelidae": "Bandicoots","Thylacomyidae": "Bilbies","Equidae": "Horses & related mammals","Rhinocerotidae": "Rhinoceroses","Tapiridae": "Tapirs","Manidae": "Scaly anteaters","Bradypodidae": "Three–toed sloths","Cyclopedidae": "Silky anteaters & related mammals","Megalonychidae": "Megalonychids","Myrmecophagidae": "Myrmecophagids","Aotidae": "Night monkeys","Atelidae": "Atelids","Callitrichidae": "Callitrichids","Cebidae": "Cebid monkeys","Cercopithecidae": "Old World monkeys","Cheirogaleidae": "Cheirogaleids","Daubentoniidae": "Aye–ayes","Galagidae": "Bushbabies","Hominidae": "Great apes","Hylobatidae": "Gibbons","Indriidae": "Indriids","Lemuridae": "Lemurids","Lepilemuridae": "Sportive lemurs","Lorisidae": "Lorisids","Pitheciidae": "Titis, saki monkeys & uakaris","Tarsiidae": "Tarsiers","Elephantidae": "Elephants & mammoths","Abrocomidae": "Chinchilla rats","Anomaluridae": "Scaly-tailed squirrels","Aplodontiidae": "Mountain beavers","Bathyergidae": "African mole–rats","Calomyscidae": "Mouse–like hamsters","Capromyidae": "Hutias","Castoridae": "Beavers & their fossil relatives","Caviidae": "Caviids","Chinchillidae": "Chinchillas, viscachas & their fossil relatives","Cricetidae": "Cricetids","Ctenodactylidae": "Comb rats","Ctenomyidae": "Tuco–tucos","Cuniculidae": "Pacas","Dipodidae": "Dipodids","Echimyidae": "Neotropical spiny rats & their fossil relatives","Erethizontidae": "New World porcupines","Geomyidae": "Gophers","Gliridae": "Dormice","Heteromyidae": "Heteromyids","Hystricidae": "Old World porcupines","Muridae": "Murids","Myocastoridae": "River rats","Nesomyidae": "Nesomyids","Octodontidae": "Octodontids","Petromuridae": "Dassie rats","Sciuridae": "Squirrels & related mammals","Spalacidae": "Spalacids","Thryonomyidae": "Cane rats","Ptilocercidae": "Pen–tailed treeshrews","Trichechidae": "Manatees",
// BIRDS
"Anatidae": "Ducks, geese & swans","Anhimidae": "Screamers","Anseranatidae": "Magpie–geese","Apodidae": "Swifts","Hemiprocnidae": "Crested swifts","Trochilidae": "Hummingbirds","Aegothelidae": "Owlet–nightjars","Caprimulgidae": "Nightjars","Nyctibiidae": "Potoos","Podargidae": "Frogmouths","Steatornithidae": "Oilbirds","Alcidae": "Auks","Burhinidae": "Stone–curlews","Chionidae": "Sheathbills","Dromadidae": "Crab plovers","Haematopodidae": "Oystercatchers","Ibidorhynchidae": "Ibisbills","Jacanidae": "Lily trotters","Laridae": "Seagulls","Pedionomidae": "Plains Wanderers","Recurvirostridae": "Avocets & stilts","Rostratulidae": "Painted–snipes","Scolopacidae": "Sandpipers","Stercorariidae": "Skuas","Thinocoridae": "Seedsnipes","Ardeidae": "Herons","Ciconiidae": "Storks","Threskiornithidae": "Ibises & spoonbills;","Coliidae": "Mousebirds","Columbidae": "Pigeons & doves","Pteroclididae": "Sandgrouse","Alcedinidae": "River kingfishers","Brachypteraciidae": "Ground rollers","Bucerotidae": "Hornbills","Bucorvidae": "Ground hornbills","Coraciidae": "Rollers","Leptosomidae": "Cuckoo rollers","Meropidae": "Bee–eaters","Momotidae": "Motmots","Phoeniculidae": "Wood hoopoes","Todidae": "Todies","Upupidae": "Hoopoes","Cuculidae": "Cuckoos","Musophagidae": "Turacos","Cathartidae": "Condors","Falconidae": "Falcons","Cracidae": "Chachalacas, guans & curassows","Megapodiidae": "Megapodes","Numididae": "Guineafowl","Odontophoridae": "New World quails","Gaviidae": "Loons","Aramidae": "Crying birds","Cariamidae": "Seriemas","Eurypygidae": "Sunbitterns","Gruidae": "Cranes","Heliornithidae": "Finfoots","Mesitornithidae": "Mesites","Otididae": "Bustards","Psophiidae": "Trumpeters","Rallidae": "Rails","Turnicidae": "Buttonquail","Acanthisittidae": "New Zealand wrens","Acanthizidae": "Australasian warblers","Aegithalidae": "Long–tailed tits","Aegithinidae": "Ioras","Alaudidae": "Larks","Atrichornithidae": "Scrubbirds","Bombycillidae": "Waxwings","Callaeatidae": "New Zealand wattlebirds","Campephagidae": "Cuckooshrikes & allies","Cardinalidae": "Cardinals","Certhiidae": "Treecreepers","Chloropseidae": "Leafbirds","Cinclidae": "Dippers","Climacteridae": "Australasian treecreepers","Cnemophilidae": "Satinbirds","Coerebidae": "Bananaquits","Conopophagidae": "Gnateaters","Corcoracidae": "Australian mudnesters","Corvidae": "Crows & related species","Cotingidae": "Cotingas","Cracticidae": "Bellmagpies & allies","Dasyornithidae": "Bristlebirds","Dendrocolaptidae": "Woodcreepers","Dicaeidae": "Flowerpeckers","Dicruridae": "Drongos","Donacobiidae": "Black–capped donacobius","Dulidae": "Palmchats","Emberizidae": "Sparrows","Estrildidae": "Estrildid finches","Eupetidae": "Rail–babblers","Eurylaimidae": "Broadbills","Falcunculidae": "Crested Shriketits","Formicariidae": "Antthrushes","Fringillidae": "True finches","Furnariidae": "Ovenbirds","Hirundinidae": "Swallows & martins","Icteridae": "Icterids","Irenidae": "Fairy–bluebirds","Laniidae": "Shrikes","Machaerirhynchidae": "Boatbills","Malaconotidae": "Bushshrikes","Maluridae": "Wrens","Melanocharitidae": "Berrypeckers & longbills","Meliphagidae": "Honeyeaters","Menuridae": "Lyrebirds","Mimidae": "Mimids","Monarchidae": "Monarch flycatchers","Motacillidae": "Wagtails, longclaws & pipits.","Muscicapidae": "Old World flycatchers","Nectariniidae": "Sunbirds","Neosittidae": "Sittellas","Oriolidae": "Old world orioles","Orthonychidae": "Logrunners","Pachycephalidae": "Whistlers","Paradisaeidae": "Birds–of–paradise","Pardalotidae": "Peep–wrens","Paridae": "Tits, chickadees & titmice","Parulidae": "Wood–warblers","Passeridae": "Sparrows","Petroicidae": "Australasian robins","Peucedramidae": "Olive Warblers","Philepittidae": "Asities","Picathartidae": "Bald crows","Pipridae": "Manakins","Pittidae": "Pittas","Pityriaseidae": "Bald–headed crow","Platysteiridae": "Wattle–eyes","Ploceidae": "Weavers","Polioptilidae": "Gnatcatchers","Pomatostomidae": "Australasian babblers","Prunellidae": "Accentors","Ptilonorhynchidae": "Bowerbirds","Pycnonotidae": "Bulbuls","Reguliidae": "Kinglets","Remizidae": "Penduline tits","Rhabdornithidae": "Philippine creepers","Rhinocryptidae": "Tapaculos","Rhipiduridae": "Fantails","Sapayoaidae": "Broad–billed Sapayoas","Sittidae": "Nuthatches","Sturnidae": "Starlings","Thamnophilidae": "Antbirds","Thraupidae": "Tanagers","Timaliidae": "Old World babblers","Troglodytidae": "Wrens","Turdidae": "Thrushes","Tyrannidae": "Tyrant flycatchers","Urocynchramidae": "Przevalski's finch","Vangidae": "Vangas","Viduidae": "Indigobirds","Vireonidae": "Vireos","Zosteropidae": "White–eyes","Anhingidae": "Snakebirds","Fregatidae": "Frigatebirds","Pelecanidae": "Pelicans","Phaethontidae": "Tropicbirds","Phalacrocoracidae": "Cormorants & shags","Scopidae": "Hamerkops","Sulidae": "Gannets & boobies","Phoenicopteridae": "Flamingos and their relatives","Bucconidae": "Puffbirds","Galbulidae": "Jacamars","Indicatoridae": "Honeyguides","Picidae": "Woodpeckers","Ramphastidae": "Toucans","Podicipedidae": "Grebes","Diomedeidae": "Albatrosses","Hydrobatidae": "Storm petrels","Pelecanoididae": "Diving petrels","Spheniscidae": "Afrotropical & neotropical parrots","Strigidae": "True owls","Tytonidae": "Barn–owls","Apterygidae": "Kiwi","Casuariidae": "Cassowaries","Dromaiidae": "Emus","Tinamidae": "Tinamous","Trogonidae": "Trogons"
}

/**
window.onload = function(){
  setTimeout(function(){
    var t = performance.timing;
    console.log("Network latency: "+(t.responseEnd-t.fetchStart))
    console.log("Load time: "+(t.loadEventEnd-t.responseEnd))
    console.log("Complete process: "+(t.loadEventEnd-t.navigationStart))
    
  }, 2000);
}**/

// STATS
//LOCAL
// ~200 using date get time - loading for when we don't have genusdata, orderdata, etc at top
// ~345 for just loading one d3.tsv reptiles file
// ~641 for entire extinction.js load

// FROM SERVER
// ~2267 for just loading one d3.tsv reptiles file
// ~6047 for entire extinction.js load