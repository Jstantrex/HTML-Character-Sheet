//Races
var races = [
   ["Default", 0, 0, 0, 0, 0, 0, false, 30, false, []],
	["Dragonborn", 2, 0, 0, 0, 0, 1, false, 30, false, ["Draconic Ancestry", "Breath Weapon", "Damage Resistance"]],
	["Dwarf", 0, 0, 2, 0, 0, 0, true, 25, true, ["Dwarven Resilliance", "Dwarven Combat Training", "Stonecunning"]],
	["Elf", 0, 2, 0, 0, 0, 0, true, 30, true, ["Keen Senses", "Fey Ancestry", "Trance"]],
	["Gnome", 0, 0, 0, 2, 0, 0, true, 25, true, ["Gnome Cunning"]],
	["Half-Elf", 0, 0, 0, 0, 0, 2, true, 30, false, ["Fey Ancestry", "Skill Versatility", "Pick 2"]],
	["Halfling", 0, 2, 0, 0, 0, 0, false, 25, true, ["Lucky", "Brave", "Halfing Nimbleness"]],
	["Half-Orc", 2, 0, 1, 0, 0, 0, true, 30, false, ["Menacing", "Relentless Endurance", "Savage Attacks"]],
	["Human", 0, 0, 0, 0, 0, 0, false, 30, true, []],
	["Tiefling", 0, 0, 0, 1, 0, 2, true, 30, false, ["Hellish Resistance", "Infernal Legacy"]]
].map(raceDetails => ({
	name: raceDetails[0],
	strength: raceDetails[1],
	dexterity: raceDetails[2],
	constitution: raceDetails[3],
	intelligence: raceDetails[4],
	wisdom: raceDetails[5],
	charisma: raceDetails[6],
	darkvision: raceDetails[7],
	speed: raceDetails[8],
	subrace: raceDetails[9],
	abilities: raceDetails[10]
}));

//Subraces
var subraces = [
   ["Default", "Default", 0, 0, 0, 0, 0, 0, []],
	["Dwarf", "Hill Dwarf", 0, 0, 0, 0, 1, 0, ["Dwarven Toughness"]],
	["Dwarf", "Mountain Dwarf", 2, 0, 0, 0, 0, 0, ["Dwarven Armor Training"]],
	["Elf", "High Elf", 0, 0, 0, 1, 0, 0, ["Elf Weapon Training", "Cantrip"]],
	["Elf", "Wood Elf", 0, 0, 0, 0, 1, 0, ["Elf Weapon Training", "Fleet of Foot", "Mask of the Wild"]],
	["Elf", "Drow", 0, 0, 0, 0, 0, 1, ["Superior Darkvision", "Sunlight Sensitivity", "Drow Magic", "Drow Weapon Training"]],
	["Gnome", "Forest Gnome", 0, 1, 0, 0, 0, 0, ["Natural Illusionist", "Speak with Small Beasts"]],
	["Gnome", "Rock Gnome", 0, 0, 1, 0, 0, 0, ["Artificer's Lore", "Tinker"]],
	["Gnome", "Deep Gnome", 0, 0, 0, 2, 0, 0, ["Superior Darkvision", "Stone Camouflage"]],
	["Halfling", "Lightfoot", 0, 0, 0, 0, 0, 1, ["Naturally Stealthy"]],
	["Halfling", "Stout", 0, 0, 1, 0, 0, 0, ["Stout Resilience"]],
	["Human", "Standard", 1, 1, 1, 1, 1, 1, []],
	["Human", "Variant", 0, 0, 0, 0, 0, 0, ["Pick 2", "Skill Versatility", "Extra Feat"]]
].map(subraceDetails => ({
	race: subraceDetails[0],
	name: subraceDetails[1],
	strength: subraceDetails[2],
	dexterity: subraceDetails[3],
	constitution: subraceDetails[4],
	intelligence: subraceDetails[5],
	wisdom: subraceDetails[6],
	charisma: subraceDetails[7],
	abilities: subraceDetails[8]
}));

//Classes
//Skills and Saves are marked in the number of their representation on the character sheet
//This will allow me to check them in a for loop
var classes = [
    ["Barbarian", 12, ["Light Armor", "Medium Armor", "Shields"], ["Simple Weapons", "Martial Weapons"], [], [1, 3], 2, [1, 3, 7, 10, 11, 17]],
    ["Bard", 8, ["Light Armor"], ["Simple Weapons", "Hand Crossbows", "Longswords", "Rapiers", "Shortswords"], ["Three Musical Instruments"], [2, 6], 3, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]],
    ["Cleric", 8, ["Light Armor", "Medium Armor", "Shields"], ["Simple Weapons"], [], [5, 6], 2, [5, 6, 9, 13, 14]],
    ["Druid", 8, ["Light Armor", "Medium Armor", "Shields"], ["Clubs", "Daggers", "Darts", "Javelins", "Maces", "Quarterstaffs", "Scimitars", "Sickles", "Slings", "Spears"], ["Herbalism Kit"], [4, 5], 2, [1, 2, 6, 9, 10, 11, 14, 17]]
].map(classDetails => ({
	name: classDetails[0],
	hitdice: classDetails[1],
	armorProf: classDetails[2],
	weaponProf: classDetails[3],
	toolProf: classDetails[4],
	saves: classDetails[5],
	numSkills: classDetails[6],
	skills: classDetails[7]
}));

//Armors
var armors = [
   ["Default", 10, 10, false],
	["Padded", 11, 10, true],
	["Leather", 11, 10, false],
	["Studded Leather", 12, 10, false],
	["Hide", 12, 2, false],
	["Chain Shirt", 13, 2, false],
	["Scale Mail", 14, 2, true],
	["Breastplate", 14, 2, false],
	["Half Plate", 15, 2, true],
	["Ring Mail", 14, 0, true],
	["Chain Mail", 16, 0, true],
	["Splint", 17, 0, true],
	["Plate", 18, 0, true]
].map(armorDetails => ({
	name: armorDetails[0],
	baseAC: armorDetails[1],
	maxDex: armorDetails[2],
	stealthDisadv: armorDetails[3],
}));

//Stats
var stats = ["strength", "dexterity", "constitution", "intelligence", "wisdom", "charisma"];

//skills
var skills = ["acrobatics", "animal handling", "arcana", "athletics", "deception", "history", "insight", "intimidation", "investigation", "medicine", "nature", "perception", "performance", "persuasion", "religion", "sleight of hand", "stealth", "survival"];

//functions
function updateMod(stat) {
	//The formula for a modifier in D&D is the total minus 10 divided by 2 rounded down.
	var mod = Math.floor((parseInt($("#" + stat + "-total").text()) - 10) / 2)
	$("#" + stat + "-mod").text(mod);

	if (stat === 'dexterity') {
		updateAC();
		$("#init").text(mod);
	}

	if (stat === 'constitution') {
		updateHP();
	}
}

function updateTotalStat(stat) {
	$("#" + stat + "-total").text(parseInt($("#" + stat).val()) + parseInt($("#" + stat + "-racial").text()));
	updateMod(stat);
}

function updateRace() {
	var selected = $("#race option:selected").text();
	var race = races.filter(raceDetails => raceDetails.name == selected);

	//If we've selected the Select One statement or a race no in our dictionary
	if (race.length == 0) {
		race = races[0];
	}
	//Otherwise, there should only be one object in the race array
	else {
		race = race[0];
	}

	//Update all racial modifiers and the total stats associated
	$("#strength-racial").text(race.strength);
	updateTotalStat("strength");
	$("#dexterity-racial").text(race.dexterity);
	updateTotalStat("dexterity");
	$("#constitution-racial").text(race.constitution);
	updateTotalStat("constitution");
	$("#intelligence-racial").text(race.intelligence);
	updateTotalStat("intelligence");
	$("#wisdom-racial").text(race.wisdom);
	updateTotalStat("wisdom");
	$("#charisma-racial").text(race.charisma);
	updateTotalStat("charisma");

	//Change subrace List
	if (race.name == "Default") {
		$("#subrace").html("<option>Select a Race</option>")
	} else {
		$("#subrace").html("");
		if (race.subrace) {
			$("#subrace").html("<option>Select One</option>");
			var subraceList = subraces.filter(subraceDetails => subraceDetails.race == race.name);
			for (var i = 0; i < subraceList.length; i++) {
				$("#subrace").append("<option>" + subraceList[i].name + "</option>");
			}
		} else {
			$("#subrace").html("<option>No Subraces</option>");
		}
	}

	//Check the effects of racial abilities
	abilityCheck();
}

function updateSubrace() {
	var selectedRace = $("#race option:selected").text();
	var selectedSubrace = $("#subrace option:selected").text();

	//We will be needing both the race and subrace when updating the various page components
	var race = races.filter(raceDetails => raceDetails.name == selectedRace)[0];
	var subrace = subraces.filter(subDetails => subDetails.name == selectedSubrace);

	//Check if we go back to the Select One statement
	if (subrace.length == 0) {
		subrace = subraces[0]
	} else {
		subrace = subrace[0];
	}

	//When adjusting stats, we'll need to ensure that we don't simply overwrite the numbers already
	//in the spaces, since that will remove the racial modifier when we add the subracial modifier
	//Also, we don't want to simply add the racial modifier where not 0, since that would create
	//problems when switching subraces

	$("#strength-racial").text(race.strength + subrace.strength);
	updateTotalStat("strength");
	$("#dexterity-racial").text(race.dexterity + subrace.dexterity);
	updateTotalStat("dexterity");
	$("#constitution-racial").text(race.constitution + subrace.constitution);
	updateTotalStat("constitution");
	$("#intelligence-racial").text(race.intelligence + subrace.intelligence);
	updateTotalStat("intelligence");
	$("#wisdom-racial").text(race.wisdom + subrace.wisdom);
	updateTotalStat("wisdom");
	$("#charisma-racial").text(race.charisma + subrace.charisma);
	updateTotalStat("charisma");

	//Check the effects of racial and subracial abilities
	//We want to check both at the same time for the same reason as racial stats above
	abilityCheck();
}

function abilityCheck() {
	var selectedRace = $("#race option:selected").text();
	var selectedSubrace = $("#subrace option:selected").text();

	//We will be needing both the race and subrace when updating the various page components
	var race = races.filter(raceDetails => raceDetails.name == selectedRace);
	var subrace = subraces.filter(subDetails => subDetails.name == selectedSubrace);

	if (race.length == 0) {
		race = races[0];
	} else {
		race = race[0];
	}

	if (subrace.length == 0) {
		subrace = subraces[0];
	} else {
		subrace = subrace[0];
	}

	var abilities = race.abilities.concat(subrace.abilities);

	if (abilities.includes("Pick 2")) {
		getPick2().then((value) => {
			for (var i = 0; i < 2; i++) {
				$("#" + value[i] + "-racial").text("1");
				updateTotalStat(value[i]);
			}
		})
	}
}

function updateClass() {
	updateHP();
}

function updateHP() {
	var selectedClass = $("#class option:selected").text();
	var charClass = classes.filter(classDetails => classDetails.name == selectedClass);

	if (charClass.length == 0) {
		$("#hp").text(0);
	} else {
		charClass = charClass[0];
		$("#hp").text(charClass.hitdice + parseInt($("#constitution-mod").text()));
	}
}

function updateAC() {
	var selected = $("#armor option:selected").text();
	var armor = armors.filter(armorDetails => armorDetails.name == selected);

	if (armor.length == 0) {
		armor = armors[0];
	} else {
		armor = armor[0];
	}

	var AC = armor.baseAC;

	if (parseInt($("#dexterity-mod").text()) < armor.maxDex) {
		AC += parseInt($("#dexterity-mod").text());
	} else {
		AC += armor.maxDex;
	}

	$("#ac").text(AC);
}

async function getPick2() {
	var selected = $("#race option:selected").text();
	var race = races.filter(raceDetails => raceDetails.name == selected)[0];

	var page = '<input type="checkbox" value="strength" id="swal-input1" class="swal2-checkbox">Strength<br>' +
		'<input type="checkbox" value="dexterity" id="swal-input2" class="swal2-checkbox">Dexterity<br>' +
		'<input type="checkbox" value="constitution" id="swal-input3" class="swal2-checkbox">Constitution<br>' +
		'<input type="checkbox" value="intelligence" id="swal-input4" class="swal2-checkbox">Intelligence<br>' +
		'<input type="checkbox" value="wisdom" id="swal-input5" class="swal2-checkbox">Wisdom<br>';

	//Only Humans and Half-Elves have pick 2 and Half-Elves do not have the option of charisma since they already have a charisma bonus
	if (race.name == "Human") {
		page = page + '<input type="checkbox" value="charisma" id="swal-input6" class="swal2-checkbox">Charisma<br>';
	}

	const {
		value: formValues
	} = await Swal.fire({
		title: 'Pick 2 Stats For +1',
		html: page,
		confirmButtonText: "Okay",
		preConfirm: () => {
			var checked = [];
			for (var i = 1; i < 7; i++) {
				if ($("#swal-input" + i).is(":checked")) {
					checked.push($("#swal-input" + i).val());
				}
			}
			if (checked.length != 2) {
				Swal.showValidationMessage("Not Okay");
			}
			return checked;
		}
	})

	if (formValues) {
		Swal.fire(JSON.stringify(formValues))
	}

	return formValues;
}
