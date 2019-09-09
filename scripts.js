//Races
var races = [
	["Default", 0, 0, 0, 0, 0, 0, false, 30, false, []],
	["Dragonborn", 2, 0, 0, 0, 0, 1, false, 30, false, ["Draconic Ancestry", "Breath Weapon", "Damage Resistance"]],
	["Dwarf", 0, 0, 2, 0, 0, 0, true, 25, true, ["Dwarven Resilliance", "Dwarven Combat Training", "Stonecunning"]],
	["Elf", 0, 2, 0, 0, 0, 0, true, 30, true, ["perception", "Fey Ancestry", "Trance"]],
	["Gnome", 0, 0, 0, 2, 0, 0, true, 25, true, ["Gnome Cunning"]],
	["Half-Elf", 0, 0, 0, 0, 0, 2, true, 30, false, ["Fey Ancestry", "Skill Versatility", "Pick 2"]],
	["Halfling", 0, 2, 0, 0, 0, 0, false, 25, true, ["Lucky", "Brave", "Halfing Nimbleness"]],
	["Half-Orc", 2, 0, 1, 0, 0, 0, true, 30, false, ["intimidation", "Relentless Endurance", "Savage Attacks"]],
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
	["Human", "Variant", 0, 0, 0, 0, 0, 0, ["Pick 2", "Extra Skill", "Extra Feat"]]
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
//Skills and Saves are going to be represented as a number from 0 to the length of their respective lists, 
//such that they represent the index of that skill
//This will allow me to check them in a for loop
var classes = [
    ["Default", 0, [], [], [], [], 0, []],
    ["Barbarian", 12, ["Light Armor", "Medium Armor", "Shields"], ["Simple Weapons", "Martial Weapons"], [], [0, 2], 2, [1, 3, 7, 10, 11, 17]],
    ["Bard", 8, ["Light Armor"], ["Simple Weapons", "Hand Crossbows", "Longswords", "Rapiers", "Shortswords"], ["Three Musical Instruments"], [1, 5], 3, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]],
    ["Cleric", 8, ["Light Armor", "Medium Armor", "Shields"], ["Simple Weapons"], [], [4, 5], 2, [5, 6, 9, 13, 14]],
    ["Druid", 8, ["Light Armor", "Medium Armor", "Shields"], ["Clubs", "Daggers", "Darts", "Javelins", "Maces", "Quarterstaffs", "Scimitars", "Sickles", "Slings", "Spears"], ["Herbalism Kit"], [3, 4], 2, [1, 2, 6, 9, 10, 11, 14, 17]]
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

//Weapons
var weapons = [
	["Club", "Simple", "1d4", "b", ["Light"]],
	["Dagger", "Simple", "1d4", "p", ["Finesse", "Light", "Thrown (20/60)"]],
	["Greatclub", "Simple", "1d8", "b", ["Two-handed"]],
	["Handaxe", "Simple", "1d6", "s", ["Light", "Thrown (20/60)"]],
	["Javelin", "Simple", "1d6", "p", ["Thrown (20/60)"]],
	["Light Hammer", "Simple", "1d4", "b", ["Light", "Thrown (20/60)"]],
	["Mace", "Simple", "1d6", "b", []],
	["Quarterstaff", "Simple", "1d6", "b", ["Versatile (1d8)"]],
	["Sickle", "Simple", "1d4", "s", ["Light"]],
	["Spear", "Simple", "1d6", "p", ["Thrown (20/60)", "Versatile (1d8)"]],
	["Crossbow, Light", "Simple", "1d8", "p", ["Ammunition (80/320)", "Loading", "Two-handed"]],
	["Dart", "Simple", "1d4", "p", ["Finesse", "Thrown (20/60)"]],
	["Shortbow", "Simple", "1d6", "p", ["Ammunition (80/320)", "Two-handed"]],
	["Sling", "Simple", "1d4", "b", ["Ammunition (30/120)"]],
	["Battleaxe", "Martial", "1d8", "s", ["Versatile (1d10)"]],
	["Flail", "Martial", "1d8", "b", []],
	["Glaive", "Martial", "1d10", "s", ["Heavy", "Reach", "Two-handed"]],
	["Greataxe", "Martial", "1d12", "s", ["Heavy", "Two-handed"]],
	["Greatsword", "Martial", "2d6", "s", ["Heavy", "Two-handed"]],
	["Halberd", "Martial", "1d10", "s", ["Heavy", "Reach", "Two-handed"]],
	["Lance", "Martial", "1d12", "p", ["Reach", "Special"]],
	["Longsword", "Martial", "1d8", "s", ["Versatile (1d10)"]],
	["Maul", "Martial", "2d6", "b", ["Heavy", "Two-handed"]],
	["Morningstar", "Martial", "1d8", "p", []],
	["Pike", "Martial", "1d10", "p", ["Heavy", "Reach", "Two-handed"]],
	["Rapier", "Martial", "1d8", "p", ["Finesse"]],
	["Scimitar", "Martial", "1d8", "s", ["Finesse", "Light"]],
	["Shortsword", "Martial", "1d6", "p", ["Finesse", "Light"]],
	["Trident", "Martial", "1d6", "p", ["Thrown (20/60)", "Versatile (1d8)"]],
	["War Pick", "Martial", "1d8", "p", []],
	["Warhammer", "Martial", "1d8", "b", ["Versatile (1d10)"]],
	["Whip", "Martial", "1d4", "s", ["Finesse", "Reach"]],
	["Blowgun", "Martial", "1", "p", ["Ammunition (25/100)", "Loading"]],
	["Crossbow, hand", "Martial", "1d6", "p", ["Ammunition (30/120)", "Light", "Loading"]],
	["Crossbow, heavy", "Martial", "1d10", "p", ["Ammunition (100/400)", "Heavy", "Loading", "Two-handed"]],
	["Longbow", "Martial", "1d8", "p", ["Ammunition (150/600)", "Heavy", "Two-handed"]],
	["Net", "Martial", "0", "", ["Special", "Thrown (5/15)"]],
].map(weaponDetails => ({
	name: weaponDetails[0],
	type: weaponDetails[1],
	damage: weaponDetails[2],
	damageType: weaponDetails[3],
	properties: weaponDetails[4],
}));

//Stats
var stats = [
	["strength", ["athletics"]],
	["dexterity", ["acrobatics", "slight of hand", "stealth"]],
	["constitution", []],
	["intelligence", ["arcana", "history", "investigation", "nature", "religion"]],
	["wisdom", ["animal handling", "insight", "medicine", "perception", "survival"]],
	["charisma", ["deception", "intimidation", "performance", "persuasion"]],
].map(statDetails => ({
	stat: statDetails[0],
	skills: statDetails[1]
}));

//Skills
var skills = [];
for (var i = 0; i < stats.length; i++) {
	skills = skills.concat(stats[i].skills)
}
skills.sort();

//functions
//Updates the skill modifier associated with each skill
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

	//When we update Modifiers, we also want to update Saving Throw Modifiers and skill modifiers
	if ($("#" + stat + "-save-proficiency").is(":checked")) {
		$("#" + stat + "-save").text(mod + parseInt($("#profBonus").text()));
	} else {
		$("#" + stat + "-save").text(mod);
	}
}

//Adds the racial mod and input stat to get the total stat, then updates all associated values
function updateTotalStat(stat) {
	$("#" + stat + "-total").text(parseInt($("#" + stat).val()) + parseInt($("#" + stat + "-racial").text()));
	updateMod(stat);
	updateSkills(stat);
}

function updateRace() {
	var selected = $("#race option:selected").text();
	var race = races.filter(raceDetails => raceDetails.name == selected);

	//If we've selected the Select One statement or a race not in our dictionary
	if (race.length == 0) {
		race = races[0];
	}
	//Otherwise, there should only be one object in the race array
	else {
		race = race[0];
	}

	//Update all racial modifiers and the total stats associated
	$("#strength-racial").text(race.strength);
	$("#dexterity-racial").text(race.dexterity);
	$("#constitution-racial").text(race.constitution);
	$("#intelligence-racial").text(race.intelligence);
	$("#wisdom-racial").text(race.wisdom);
	$("#charisma-racial").text(race.charisma);
	
	updateTotalStat("strength");
	updateTotalStat("dexterity");
	updateTotalStat("constitution");
	updateTotalStat("intelligence");
	updateTotalStat("wisdom");
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

//Function that applies effects of racial and subracial abilities
async function abilityCheck() {
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
		await getPick2().then((value) => {
			for (var i = 0; i < 2; i++) {
				$("#" + value[i] + "-racial").text("1");
				updateTotalStat(value[i]);
			}
		})
	}

	//First, remove all race skills
	for (var i = 0; i < skills.length; i++) {
		if ($("#" + skills[i].split(" ").join("-") + "-skill-proficiency").prop("checked") && !($("#" + skills[i] + "-skill-proficiency").prop("classSkill"))) {
			$("#" + skills[i].split(" ").join("-") + "-skill-proficiency").prop("checked", false);
		}
	}
	
	//if a class includes the name of a skill, gain racial proficiency in it
	for (var i = 0; i < abilities.length; i++) {
		if (skills.includes(abilities[i])) {
			$("#" + abilities[i].split(" ").join("-") + "-skill-proficiency").prop("checked", true);
			$("#" + abilities[i].split(" ").join("-") + "-skill-proficiency").prop("classSkill", false);
			updateSkills(abilities[i]);
		}
	}

	//Skill Versatility / Extra Skill
	//Bards are allowed to pick from any skills, so I'll just use their list instead of creating another list 
	if (abilities.includes("Skill Versatility") || abilities.includes("Extra Skill")) {
		var numSkills = 1;

		//Variant Humans have a single extra skill, while Half-Elves get two skills from skill versatility
		if (abilities.includes("Skill Versatility")) {
			numSkills = 2;
		}

		await getProficiencies(numSkills, classes.filter(classDetails => classDetails.name == "Bard")[0].skills).then((value) => {
			for (var i = 0; i < value.length; i++) {
				$("#" + value[i].split(" ").join("-") + "-skill-proficiency").prop("checked", true);
				$("#" + value[i].split(" ").join("-") + "-skill-proficiency").prop("classSkill", false);
				updateSkills(value[i]);
			}
		})
	}

	//Fleet of Foot increases speed to 35
	if (abilities.includes("Fleet of Foot")) {
		$("#speed").text("35");
	} else {
		$("#speed").text(race.speed);
	}
}

function updateClass() {
	var selectedClass = $("#class option:selected").text();
	var charClass = classes.filter(classDetails => classDetails.name == selectedClass);

	if (charClass.length == 0) {
		charClass = classes[0];
	} else {
		charClass = charClass[0];
	}

	//Get Saving Throw proficiencies from the class
	//By checking all stats and whether or not they exist inside the classes saves,
	//I can clear non-existant stats instead of clearing them all and resetting them
	for (var i = 0; i < stats.length; i++) {
		if (charClass.saves.includes(i)) {
			$("#" + stats[i].stat + "-save-proficiency").prop("checked", true);
		} else {
			$("#" + stats[i].stat + "-save-proficiency").prop("checked", false);
		}

		if ($("#" + stats[i].stat + "-save-proficiency").is(":checked")) {
			$("#" + stats[i].stat + "-save").text(parseInt($("#" + stats[i].stat + "-mod").text()) + parseInt($("#profBonus").text()));
		} else {
			$("#" + stats[i].stat + "-save").text($("#" + stats[i].stat + "-mod").text());
		}
	}

	//First, remove all class skills
	for (var i = 0; i < skills.length; i++) {
		if ($("#" + skills[i].split(" ").join("-") + "-skill-proficiency").prop("checked") && $("#" + skills[i].split(" ").join("-") + "-skill-proficiency").prop("classSkill")) {
			$("#" + skills[i].split(" ").join("-") + "-skill-proficiency").prop("checked", false);
			updateSkills(skills[i]);
		}
	}
	//Allow user input to select skill proficiencies provided by their class
	getProficiencies(charClass.numSkills, charClass.skills).then((value) => {
		for (var i = 0; i < value.length; i++) {
			$("#" + value[i].split(" ").join("-") + "-skill-proficiency").prop("checked", true);
			$("#" + value[i].split(" ").join("-") + "-skill-proficiency").prop("classSkill", true);
			updateSkills(value[i]);
		}
	});
	updateHP();
}

//When a player updates their class or Con score, the below function is run
function updateHP() {
	var selectedClass = $("#class option:selected").text();
	var charClass = classes.filter(classDetails => classDetails.name == selectedClass);
	var HP;

	if (charClass.length == 0) {
		HP = 0;
	} else {
		charClass = charClass[0];
		HP = charClass.hitdice + parseInt($("#constitution-mod").text());
	}

	$("#hp").text(HP);

	//This will be important for classes and races that add additional modifiers to HP
	return HP;
}

//When a player updates their stats or armor, the below function is run
//TODO: Add special cases for classes with special AC Calculations
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

	//This will be important for classes and races that add additional modifiers to AC
	return AC;
}

//Update Skill Modifiers
//Source => A member of either Stats or Skills
function updateSkills(source) {
	//If a stat was updated, update all stats of that type
	if (stats.filter(x => x.stat == source).length == 1) {
		stat = stats.filter(x => x.stat == source)[0];
		for (var i = 0; i < stat.skills.length; i++) {
			modifier = parseInt($("#" + source + "-mod").text());
			//If they are proficient in that skill
			if ($("#" + stat.skills[i].split(" ").join("-") + "-skill-proficiency").is(":checked")) {
				modifier += parseInt($("#profBonus").text());
			}

			$("#" + stat.skills[i].split(" ").join("-") + "-skill").text(modifier);
		}
	}
	//If a skill was updated (by proficiency) update only that skill
	else if (skills.includes(source.split("-").join(" "))) {
		modifier = parseInt($("#" + $("#" + source + "-skill-proficiency").attr("base") + "-mod").text());
		//If they are proficient in that skill
		if ($("#" + source + "-skill-proficiency").is(":checked")) {
			modifier += parseInt($("#profBonus").text());
		}

		$("#" + source + "-skill").text(modifier);
	}
}

//A racial ability exists that allows players to increase 2 stats by 1
//This function gets the user input for that choice
async function getPick2() {
	var selected = $("#race option:selected").text();
	var race = races.filter(raceDetails => raceDetails.name == selected)[0];

	var page = '<p class="modalCheckbox"><input type="checkbox" value="strength" id="swal-input0"/>Strength</p>' +
		'<p class="modalCheckbox"><input type="checkbox" value="dexterity" id="swal-input1"/>Dexterity</p>' +
		'<p class="modalCheckbox"><input type="checkbox" value="constitution" id="swal-input2"/>Constitution</p>' +
		'<p class="modalCheckbox"><input type="checkbox" value="intelligence" id="swal-input3"/>Intelligence</p>' +
		'<p class="modalCheckbox"><input type="checkbox" value="wisdom" id="swal-input4"/>Wisdom</p>';

	//Only Humans and Half-Elves have pick 2 and Half-Elves do not have the option of charisma since they already have a charisma bonus
	if (race.name == "Human") {
		page = page + '<p class="modalCheckbox"><input type="checkbox" value="charisma" id="swal-input5">Charisma</p>';
	}

	const {
		value: formValues
	} = await Swal.fire({
		title: 'Pick 2 Stats For +1',
		html: page,
		confirmButtonText: "Okay",
		preConfirm: () => {
			var checked = [];
			for (var i = 0; i < 6; i++) {
				if ($("#swal-input" + i).is(":checked")) {
					checked.push($("#swal-input" + i).val());
				}
			}
			if (checked.length > 2) {
				Swal.showValidationMessage("You've selected too many!");
			} else if (checked.length < 2) {
				Swal.showValidationMessage("You've selected too few!");
			}
			return checked;
		}
	})

	return formValues;
}

//Any time a player would select proficiencies, this function gets their input for their choices
async function getProficiencies(numProf, profList) {
	if (numProf < 1) {
		return;
	}
	var page = "";

	for (var i = 0; i < profList.length; i++) {
		if ($("#" + skills[profList[i]].split(" ").join("-") + "-skill-proficiency").is(":checked")) {
			continue;
		} else {
			page = page + '<p class="modalCheckbox"><input type="checkbox" value="' + skills[profList[i]].split(" ").join("-") + '" id="swal-input' + i + '" />' + skills[profList[i]] + '</p>';
		}
	}

	const {
		value: formValues
	} = await Swal.fire({
		title: 'Pick ' + numProf + ' Proficiencies From The Following List',
		html: page,
		confirmButtonText: "Okay",
		preConfirm: () => {
			var checked = [];
			for (var i = 0; i < profList.length; i++) {
				if ($("#swal-input" + i).is(":checked")) {
					checked.push($("#swal-input" + i).val());
				}
			}
			if (checked.length > numProf) {
				Swal.showValidationMessage("You've selected too many!");
			} else if (checked.length < numProf) {
				Swal.showValidationMessage("You've selected too few!");
			}

			return checked;
		}
	})

	return formValues;
}