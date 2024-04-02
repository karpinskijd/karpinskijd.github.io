document.addEventListener("DOMContentLoaded", function () {
    var app = function () {
        var armor = [{
            name: "Hylian Set",
			pieces: [{ type: "Head", piece: "Hylian Hood", upgrades: null }, { type: "Body", piece: "Hylian Tunic", upgrades: null }, { type: "Legs", piece: "Hylian Trousers", upgrades: null }],
            upgradeMaterials: [[{ material: "Bokoblin Horn", qty: 5 }], [{ material: "Blue Bokoblin Horn", qty: 5 }, { material: "Bokoblin Fang", qty: 3 }], [{ material: "Amber", qty: 20 }, { material: "Black Bokoblin Horn", qty: 5 }, { material: "Bokoblin Guts", qty: 3 }], [{ material: "Amber", qty: 30 }, { material: "Bokoblin Guts", qty: 5 }, { material: "Silver Bokoblin Horn", qty: 5 }]]
        }, {
			name: "Vah Ruta Divine Helm",
			pieces: [{ type: "Head", piece: "Vah Ruta Divine Helm", upgrades: null}],
			upgradeMaterials: [[{ material: "Opal", qty: 5 }, { material: "Zonaite", qty: 5 }], [{ material: "Opal", qty: 10 }, { material: "Zonaite", qty: 10 }], [{ material: "Dazzlefruit", qty: 5 }, { material: "Large Zonaite", qty: 5 }, { material: "Opal", qty: 15 }], [{ material: "Dazzlefruit", qty: 10 }, { material: "Large Zonaite", qty: 10 }, { material: "Opal", qty: 25 }]]
		}, {
            name: "Soldier's Set",
			pieces: [{ type: "Head", piece: "Soldier's Helm", upgrades: null }, { type: "Body", piece: "Soldier's Armor", upgrades: null }, { type: "Legs", piece: "Soldier's Greaves", upgrades: null }],
            upgradeMaterials: [[{ material: "Bokoblin Guts", qty: 3 }, { material: "Chuchu Jelly", qty: 5 }], [{ material: "Keese Eyeball", qty: 5 }, { material: "Moblin Guts", qty: 3 }], [{ material: "Flint", qty: 30 }, { material: "Hinox Guts", qty: 3 }, { material: "Lizalfos Tail", qty: 3 }], [{ material: "Amber", qty: 30 }, { material: "Lynel Guts", qty: 5 }, { material: "Lynel Hoof", qty: 5 }]]
        }, {
			name: "Vah Naboris Divine Helm",
			pieces: [{ type: "Head", piece: "Vah Naboris Divine Helm", upgrades: null}],
			upgradeMaterials: [[{ material: "Topaz", qty: 1 }, { material: "Zonaite", qty: 5 }], [{ material: "Topaz", qty: 4 }, { material: "Zonaite", qty: 10 }], [{ material: "Dazzlefruit", qty: 5 }, { material: "Large Zonaite", qty: 5 }, { material: "Topaz", qty: 6 }], [{ material: "Dazzlefruit", qty: 10 }, { material: "Large Zonaite", qty: 10 }, { material: "Topaz", qty: 10 }]]
		}, {
            name: "Snowquill Set",
			pieces: [{ type: "Head", piece: "Snowquill Headdress", upgrades: null }, { type: "Body", piece: "Snowquill Tunic", upgrades: null }, { type: "Legs", piece: "Snowquill Trousers", upgrades: null }],
            upgradeMaterials: [[{ material: "Red Chuchu Jelly", qty: 3 }], [{ material: "Red Chuchu Jelly", qty: 5 }, { material: "Warm Safflina", qty: 3 }], [{ material: "Fire Keese Wing", qty: 5 }, { material: "Fire-Breath Lizalfos Tail", qty: 3 }, { material: "Sunshroom", qty: 5 }], [{ material: "Fire-Breath Lizalfos Horn", qty: 5 }, { material: "Fire-Breath Lizalfos Tail", qty: 10 }, { material: "Ruby", qty: 5 }]]
        }, {
            name: "Zonaite Set",
			pieces: [{ type: "Head", piece: "Zonaite Helm", upgrades: null }, { type: "Body", piece: "Zonaite Waistguard", upgrades: null }, { type: "Legs", piece: "Zonaite Shin Guards", upgrades: null }],
            upgradeMaterials: [[{ material: "Soldier Construct Horn", qty: 5 }], [{ material: "Captain Construct I Horn", qty: 5 }, { material: "Soldier Construct II Horn", qty: 5 }, { material: "Zonaite", qty: 5 }], [{ material: "Captain Construct II Horn", qty: 5 }, { material: "Large Zonaite", qty: 5 }, { material: "Soldier Construct III Horn", qty: 5 }], [{ material: "Captain Construct III Horn", qty: 5 }, { material: "Large Zonaite", qty: 10 }, { material: "Soldier Construct IV Horn", qty: 5 }]]
        }, {
            name: "Flamebreaker Set",
			pieces: [{ type: "Head", piece: "Flamebreaker Helm", upgrades: null }, { type: "Body", piece: "Flamebreaker Armor", upgrades: null }, { type: "Legs", piece: "Flamebreaker Boots", upgrades: null }],
            upgradeMaterials: [[{ material: "Moblin Horn", qty: 3 }], [{ material: "Fireproof Lizard", qty: 5 }, { material: "Moblin Fang", qty: 5 }], [{ material: "Blue Moblin Horn", qty: 5 }, { material: "Flint", qty: 15 }, { material: "Smotherwing Butterfly", qty: 3 }], [{ material: "Black Moblin Horn", qty: 5 }, { material: "Flint", qty: 30 }, { material: "Smotherwing Butterfly", qty: 5 }]]
        }, {
			name: "Diamond Circlet",
			pieces: [{ type: "Head", piece: "Diamond Circlet", upgrades: null}],
			upgradeMaterials: [[{ material: "Diamond", qty: 2 }, { material: "Flint", qty: 3 }], [{ material: "Diamond", qty: 3 }, { material: "Flint", qty: 5 }], [{ material: "Diamond", qty: 5 }, { material: "Star Fragment", qty: 1 }], [{ material: "Diamond", qty: 8 }, { material: "Star Fragment", qty: 2 }]]
		}, {
            name: "Zora Set",
			pieces: [{ type: "Head", piece: "Zora Helm", upgrades: null }, { type: "Body", piece: "Zora Armor", upgrades: null }, { type: "Legs", piece: "Zora Greaves", upgrades: null }],
            upgradeMaterials: [[{ material: "Lizalfos Horn", qty: 3 }], [{ material: "Hyrule Bass", qty: 5 }, { material: "Lizalfos Talon", qty: 5 }], [{ material: "Blue Lizalfos Horn", qty: 5 }, { material: "Hearty Bass", qty: 3 }, { material: "Lizalfos Tail", qty: 3 }], [{ material: "Black Lizalfos Horn", qty: 5 }, { material: "Blue Lizalfos Tail", qty: 5 }, { material: "Opal", qty: 20 }]]
        }, {
			name: "Ruby Circlet",
			pieces: [{ type: "Head", piece: "Ruby Circlet", upgrades: null}],
			upgradeMaterials: [[{ material: "Flint", qty: 3 }, { material: "Ruby", qty: 2 }], [{ material: "Flint", qty: 5 }, { material: "Ruby", qty: 4 }], [{ material: "Ruby", qty: 6 }, { material: "Star Fragment", qty: 1 }], [{ material: "Ruby", qty: 10 }, { material: "Star Fragment", qty: 2 }]]
		}, {
            name: "Desert Voe Set",
			pieces: [{ type: "Head", piece: "Desert Voe Headband", upgrades: null }, { type: "Body", piece: "Desert Voe Spaulder", upgrades: null }, { type: "Legs", piece: "Desert Voe Trousers", upgrades: null }],
            upgradeMaterials: [[{ material: "White Chuchu Jelly", qty: 3 }], [{ material: "Cool Safflina", qty: 3 }, { material: "White Chuchu Jelly", qty: 5 }], [{ material: "Chillshroom", qty: 5 }, { material: "Ice Keese Wing", qty: 5 }, { material: "Ice-Breath Lizalfos Tail", qty: 3 }], [{ material: "Ice-Breath Lizalfos Horn", qty: 5 }, { material: "Ice-Breath Lizalfos Tail", qty: 10 }, { material: "Sapphire", qty: 5 }]]
        }, {
			name: "Sapphire Circlet",
			pieces: [{ type: "Head", piece: "Sapphire Circlet", upgrades: null}],
			upgradeMaterials: [[{ material: "Flint", qty: 3 }, { material: "Sapphire", qty: 2 }], [{ material: "Flint", qty: 5 }, { material: "Sapphire", qty: 4 }], [{ material: "Sapphire", qty: 6 }, { material: "Star Fragment", qty: 1 }], [{ material: "Sapphire", qty: 10 }, { material: "Star Fragment", qty: 2 }]]
		}, {
            name: "Rubber Set",
			pieces: [{ type: "Head", piece: "Rubber Helm", upgrades: null }, { type: "Body", piece: "Rubber Armor", upgrades: null }, { type: "Legs", piece: "Rubber Tights", upgrades: null }],
            upgradeMaterials: [[{ material: "Electric Lizalfos Horn", qty: 1 }, { material: "Yellow Chuchu Jelly", qty: 3 }], [{ material: "Voltfruit", qty: 5 }, { material: "Yellow Chuchu Jelly", qty: 8 }], [{ material: "Electric Lizalfos Tail", qty: 5 }, { material: "Electric Safflina", qty: 8 }, { material: "Zapshroom", qty: 5 }], [{ material: "Electric Lizalfos Horn", qty: 5 }, { material: "Electric Lizalfos Tail", qty: 8 }, { material: "Topaz", qty: 5 }]]
        }, {
			name: "Topaz Earrings",
			pieces: [{ type: "Head", piece: "Topaz Earrings", upgrades: null}],
			upgradeMaterials: [[{ material: "Flint", qty: 3 }, { material: "Topaz", qty: 2 }], [{ material: "Flint", qty: 5 }, { material: "Topaz", qty: 4 }], [{ material: "Star Fragment", qty: 1 }, { material: "Topaz", qty: 6 }], [{ material: "Star Fragment", qty: 2 }, { material: "Topaz", qty: 10 }]]
		}, {
            name: "Stealth Set",
			pieces: [{ type: "Head", piece: "Stealth Mask", upgrades: null }, { type: "Body", piece: "Stealth Chest Guard", upgrades: null }, { type: "Legs", piece: "Stealth Tights", upgrades: null }],
            upgradeMaterials: [[{ material: "Blue Nightshade", qty: 3 }], [{ material: "Blue Nightshade", qty: 5 }, { material: "Sunset Firefly", qty: 5 }], [{ material: "Silent Shroom", qty: 8 }, { material: "Sneaky River Snail", qty: 5 }, { material: "Sticky Frog", qty: 5 }], [{ material: "Silent Princess", qty: 5 }, { material: "Stealthfin Trout", qty: 10 }, { material: "Sundelion", qty: 10 }]]
        }, {
			name: "Opal Earrings",
			pieces: [{ type: "Head", piece: "Opal Earrings", upgrades: null}],
			upgradeMaterials: [[{ material: "Flint", qty: 5 }, { material: "Opal", qty: 6 }], [{ material: "Flint", qty: 10 }, { material: "Opal", qty: 12 }], [{ material: "Flint", qty: 15 }, { material: "Opal", qty: 18 }], [{ material: "Flint", qty: 25 }, { material: "Opal", qty: 30 }]]
		}, {
            name: "Climber's Set",
			pieces: [{ type: "Head", piece: "Climber's Bandanna", upgrades: null }, { type: "Body", piece: "Climbing Gear", upgrades: null }, { type: "Legs", piece: "Climbing Boots", upgrades: null }],
            upgradeMaterials: [[{ material: "Keese Wing", qty: 3 }, { material: "Rushroom", qty: 3 }], [{ material: "Electric Keese Wing", qty: 5 }, { material: "Hightail Lizard", qty: 5 }], [{ material: "Hot-Footed Frog", qty: 10 }, { material: "Ice Keese Wing", qty: 8 }], [{ material: "Fire Keese Wing", qty: 10 }, { material: "Swift Violet", qty: 20 }]]
        }, {
			name: "Amber Earrings",
			pieces: [{ type: "Head", piece: "Amber Earrings", upgrades: null}],
			upgradeMaterials: [[{ material: "Amber", qty: 10 }, { material: "Flint", qty: 5 }], [{ material: "Amber", qty: 20 }, { material: "Flint", qty: 10 }], [{ material: "Amber", qty: 35 }, { material: "Flint", qty: 15 }], [{ material: "Amber", qty: 60 }, { material: "Flint", qty: 25 }]]
		}, {
            name: "Barbarian Set",
			pieces: [{ type: "Head", piece: "Barbarian Helm", upgrades: null }, { type: "Body", piece: "Barbarian Armor", upgrades: null }, { type: "Legs", piece: "Barbarian Leg Wraps", upgrades: null }],
            upgradeMaterials: [[{ material: "Mighty Thistle", qty: 3 }], [{ material: "Lynel Mace Horn", qty: 2 }, { material: "Lynel Saber Horn", qty: 2 }, { material: "Razorshroom", qty: 5 }], [{ material: "Blue-Maned Lynel Mace Horn", qty: 3 }, { material: "Blue-Maned Lynel Saber Horn", qty: 3 }, { material: "Razorclaw Crab", qty: 3 }], [{ material: "Bladed Rhino Beetle", qty: 3 }, { material: "White-Maned Lynel Mace Horn", qty: 3 }, { material: "White-Maned Lynel Saber Horn", qty: 3 }]]
        }, {
			name: "Sand Boots",
			pieces: [{ type: "Legs", piece: "Sand Boots", upgrades: null}],
			upgradeMaterials: [[{ material: "Hightail Lizard", qty: 3 }], [{ material: "Gibdo Bone", qty: 20 }, { material: "Swift Carrot", qty: 5 }], [{ material: "Gibdo Guts", qty: 5 }, { material: "Molduga Fin", qty: 5 }, { material: "Rushroom", qty: 10 }], [{ material: "Hearty Lizard", qty: 5 }, { material: "Molduga Guts", qty: 5 }, { material: "Swift Violet", qty: 10 }]]
		}, {
            name: "Radiant Set",
			pieces: [{ type: "Head", piece: "Radiant Mask", upgrades: null }, { type: "Body", piece: "Radiant Shirt", upgrades: null }, { type: "Legs", piece: "Radiant Tights", upgrades: null }],
            upgradeMaterials: [[{ material: "Bokoblin Guts", qty: 1 }, { material: "Luminous Stone", qty: 10 }], [{ material: "Luminous Stone", qty: 15 }, { material: "Moblin Guts", qty: 2 }], [{ material: "Gibdo Bone", qty: 10 }, { material: "Horriblin Guts", qty: 3 }, { material: "Luminous Stone", qty: 20 }], [{ material: "Luminous Stone", qty: 30 }, { material: "Lynel Guts", qty: 3 }, { material: "Molduga Jaw", qty: 3 }]]
        }, {
			name: "Snow Boots",
			pieces: [{ type: "Legs", piece: "Snow Boots", upgrades: null}],
			upgradeMaterials: [[{ material: "Hightail Lizard", qty: 3 }], [{ material: "Octorok Tentacle", qty: 5 }, { material: "Swift Carrot", qty: 5 }], [{ material: "Octo Balloon", qty: 5 }, { material: "Rushroom", qty: 20 }], [{ material: "Naydra's Scale", qty: 2 }, { material: "Swift Violet", qty: 20 }]]
		}, {
            name: "Royal Guard Set",
			pieces: [{ type: "Head", piece: "Royal Guard Cap", upgrades: null }, { type: "Body", piece: "Royal Guard Uniform", upgrades: null }, { type: "Legs", piece: "Royal Guard Boots", upgrades: null }],
            upgradeMaterials: [[{ material: "Bokoblin Guts", qty: 3 }, { material: "Boss Bokoblin Horn", qty: 3}], [{ material: "Blue Boss Bokoblin Horn", qty: 3 }, { material: "Boss Bokoblin Guts", qty: 3 }], [{ material: "Black Boss Bokoblin Horn", qty: 3 }, { material: "Hinox Guts", qty: 3 }], [{ material: "Gleeok Guts", qty: 3 }, { material: "Molduga Guts", qty: 3 }, { material: "Silver Boss Bokoblin Horn", qty: 3 }]]
        }, {
			name: "Tunic of Memories",
			pieces: [{ type: "Body", piece: "Tunic of Memories", upgrades: null}],
			upgradeMaterials: [[{ material: "Light Dragon's Scale", qty: 1 }, { material: "Silent Princess", qty: 3 }], [{ material: "Light Dragon's Talon", qty: 1 }, { material: "Silent Princess", qty: 3 }], [{ material: "Shard of Light Dragon's Fang", qty: 1 }, { material: "Silent Princess", qty: 5 }], [{ material: "Light Dragon's Horn", qty: 1 }, { material: "Silent Princess", qty: 10 }]],
			individual: {
			  l2Body: [{ material: "Farosh's Horn", qty: 2 }],
			  l3Body: [{ material: "Naydra's Horn", qty: 2 }],
			  l4Body: [{ material: "Dinraal's Horn", qty: 2 }],
			}
		}, {
            name: "Froggy Set",
			pieces: [{ type: "Head", piece: "Froggy Hood", upgrades: null }, { type: "Body", piece: "Froggy Sleeve", upgrades: null }, { type: "Legs", piece: "Froggy Leggings", upgrades: null }],
            upgradeMaterials: [[{ material: "Sticky Lizard", qty: 3 }], [{ material: "Horriblin Horn", qty: 5 }, { material: "Sticky Lizard", qty: 5 }], [{ material: "Blue Horriblin Horn", qty: 5 }, { material: "Sticky Frog", qty: 5 }], [{ material: "Black Horriblin Horn", qty: 5 }, { material: "Horriblin Guts", qty: 10 }, { material: "Opal", qty: 10 }]]
        }, {
			name: "Champion's Leathers",
			pieces: [{ type: "Body", piece: "Champion's Leathers", upgrades: null}],
			upgradeMaterials: [[{ material: "Light Dragon's Scale", qty: 2 }, { material: "Silent Princess", qty: 3 }], [{ material: "Light Dragon's Talon", qty: 2 }, { material: "Silent Princess", qty: 3 }, { material: "Sundelion", qty: 10 }], [{ material: "Shard of Light Dragon's Fang", qty: 2 }, { material: "Silent Princess", qty: 5 }, { material: "Sundelion", qty: 15 }], [{ material: "Light Dragon's Horn", qty: 2 }, { material: "Silent Princess", qty: 10 }, { material: "Sundelion", qty: 20 }]],
		}, {
            name: "Glide Set",
			pieces: [{ type: "Head", piece: "Glide Mask", upgrades: null }, { type: "Body", piece: "Glide Shirt", upgrades: null }, { type: "Legs", piece: "Glide Tights", upgrades: null }],
            upgradeMaterials: [[{ material: "Keese Wing", qty: 3 }], [{ material: "Aerocuda Eyeball", qty: 6 }, { material: "Keese Wing", qty: 5 }], [{ material: "Aerocuda Eyeball", qty: 8 }, { material: "Aerocuda Wing", qty: 6 }], [{ material: "Aerocuda Wing", qty: 10 }, { material: "Gibdo Wing", qty: 8 }, { material: "Gleeok Wing", qty: 12 }]]
        }, {
            name: "Fierce Deity Set",
			pieces: [{ type: "Head", piece: "Fierce Deity Mask", upgrades: null }, { type: "Body", piece: "Fierce Deity Armor", upgrades: null }, { type: "Legs", piece: "Fierce Deity Boots", upgrades: null }],
            upgradeMaterials: [[{ material: "Hinox Toenail", qty: 5 }], [{ material: "Hinox Tooth", qty: 5 }], [{ material: "Hinox Guts", qty: 2 }], [{ material: "Lynel Guts", qty: 2 }]],
			individual: {
			  l1Head: [{ material: "Dinraal's Scale", qty: 1 }],
			  l1Body: [{ material: "Naydra's Scale", qty: 1 }],
			  l1Legs: [{ material: "Farosh's Scale", qty: 1 }],
			  l2Head: [{ material: "Dinraal's Claw", qty: 1 }],
			  l2Body: [{ material: "Naydra's Claw", qty: 1 }],
			  l2Legs: [{ material: "Farosh's Claw", qty: 1 }],
			  l3Head: [{ material: "Shard of Dinraal's Fang", qty: 1 }],
			  l3Body: [{ material: "Shard of Naydra's Fang", qty: 1 }],
			  l3Legs: [{ material: "Shard of Farosh's Fang", qty: 1 }],
			  l4Head: [{ material: "Dinraal's Horn", qty: 1 }],
			  l4Body: [{ material: "Naydra's Horn", qty: 1 }],
			  l4Legs: [{ material: "Farosh's Horn", qty: 1 }]
			}
        }, {
            name: "Depths Set",
			pieces: [{ type: "Head", piece: "Hood of the Depths", upgrades: null }, { type: "Body", piece: "Tunic of the Depths", upgrades: null }, { type: "Legs", piece: "Gaiters of the Depths", upgrades: null }],
            upgradeMaterials: [[{ material: "Deep Firefly", qty: 3 }], [{ material: "Dark Clump", qty: 5 }, { material: "Frox Fang", qty: 3 }], [{ material: "Frox Fingernail", qty: 3 }, { material: "Obsidian Frox Fang", qty: 3 }, { material: "Zonaite", qty: 20 }], [{ material: "Blue-White Frox Fang", qty: 5 }, { material: "Frox Guts", qty: 3 }, { material: "Large Zonaite", qty: 10 }]]
        }, {
            name: "Set of Awakening",
			pieces: [{ type: "Head", piece: "Mask of Awakening", upgrades: null }, { type: "Body", piece: "Tunic of Awakening", upgrades: null }, { type: "Legs", piece: "Trousers of Awakening", upgrades: null }],
            upgradeMaterials: [[{ material: "Luminous Stone", qty: 10 }, { material: "Star Fragment", qty: 1 }], [{ material: "Luminous Stone", qty: 15 }, { material: "Star Fragment", qty: 1 }], [{ material: "Luminous Stone", qty: 20 }, { material: "Star Fragment", qty: 1 }], [{ material: "Luminous Stone", qty: 30 }, { material: "Star Fragment", qty: 1 }]]
        }, {
            name: "Miner's Set",
			pieces: [{ type: "Head", piece: "Miner's Mask", upgrades: null }, { type: "Body", piece: "Miner's Top", upgrades: null }, { type: "Legs", piece: "Miner's Trousers", upgrades: null }],
            upgradeMaterials: [[{ material: "Brightbloom Seed", qty: 10 }], [{ material: "Brightbloom Seed", qty: 20 }, { material: "Brightcap", qty: 5 }], [{ material: "Deep Firefly", qty: 10 }, { material: "Giant Brightbloom Seed", qty: 15 }, { material: "Glowing Cave Fish", qty: 5 }], [{ material: "Diamond", qty: 3 }, { material: "Giant Brightbloom Seed", qty: 20 }, { material: "Large Zonaite", qty: 10 }]]
        }, {
            name: "Set of the Wild",
			pieces: [{ type: "Head", piece: "Cap of the Wild", upgrades: null }, { type: "Body", piece: "Tunic of the Wild", upgrades: null }, { type: "Legs", piece: "Trousers of the Wild", upgrades: null }],
            upgradeMaterials: [[{ material: "Acorn", qty: 10 }], [{ material: "Courser Bee Honey", qty: 5 }], [{ material: "Energetic Rhino Beetle", qty: 3 }], [{ material: "Star Fragment", qty: 3 }]],
			individual: {
			  l1Head: [{ material: "Farosh's Scale", qty: 2 }],
			  l1Body: [{ material: "Naydra's Scale", qty: 2 }],
			  l1Legs: [{ material: "Dinraal's Scale", qty: 2 }],
			  l2Head: [{ material: "Farosh's Claw", qty: 2 }],
			  l2Body: [{ material: "Naydra's Claw", qty: 2 }],
			  l2Legs: [{ material: "Dinraal's Claw", qty: 2 }],
			  l3Head: [{ material: "Shard of Farosh's Fang", qty: 2 }, { material: "Shard of Farosh's Spike", qty: 5 }],
			  l3Body: [{ material: "Shard of Naydra's Fang", qty: 2 }, { material: "Shard of Naydra's Spike", qty: 5 }],
			  l3Legs: [{ material: "Shard of Dinraal's Fang", qty: 2 }, { material: "Shard of Dinraal's Spike", qty: 5 }],
			  l4Head: [{ material: "Farosh's Horn", qty: 2 }, { material: "Shard of Farosh's Spike", qty: 10 }],
			  l4Body: [{ material: "Naydra's Horn", qty: 2 }, { material: "Shard of Naydra's Spike", qty: 10 }],
			  l4Legs: [{ material: "Dinraal's Horn", qty: 2 }, { material: "Shard of Dinraal's Spike", qty: 10 }]
			}
        }, {
            name: "Ember Set",
			pieces: [{ type: "Head", piece: "Ember Headdress", upgrades: null }, { type: "Body", piece: "Ember Shirt", upgrades: null }, { type: "Legs", piece: "Ember Trousers", upgrades: null }],
            upgradeMaterials: [[{ material: "Fire Fruit", qty: 3 }], [{ material: "Fire-Breath Lizalfos Horn", qty: 5 }, { material: "Summerwing Butterfly", qty: 5 }], [{ material: "Fire Like Stone", qty: 5 }, { material: "Large Zonai Charge", qty: 5 }, { material: "Warm Darner", qty: 5 }], [{ material: "Gleeok Flame Horn", qty: 5 }, { material: "Large Zonai Charge", qty: 10 }, { material: "Sizzlefin Trout", qty: 10 }]]
        }, {
            name: "Set of the Hero",
			pieces: [{ type: "Head", piece: "Cap of the Hero", upgrades: null }, { type: "Body", piece: "Tunic of the Hero", upgrades: null }, { type: "Legs", piece: "Trousers of the Hero", upgrades: null }],
            upgradeMaterials: [[{ material: "Ruby", qty: 1 }, { material: "Star Fragment", qty: 1 }], [{ material: "Ruby", qty: 4 }, { material: "Star Fragment", qty: 1 }], [{ material: "Ruby", qty: 6 }, { material: "Star Fragment", qty: 1 }], [{ material: "Ruby", qty: 10 }, { material: "Star Fragment", qty: 1 }]]
        }, {
            name: "Charged Set",
			pieces: [{ type: "Head", piece: "Charged Headdress", upgrades: null }, { type: "Body", piece: "Charged Shirt", upgrades: null }, { type: "Legs", piece: "Charged Trousers", upgrades: null }],
            upgradeMaterials: [[{ material: "Shock Fruit", qty: 3 }], [{ material: "Electric Lizalfos Horn", qty: 5 }, { material: "Thunderwing Butterfly", qty: 3 }], [{ material: "Electric Darner", qty: 5 }, { material: "Large Zonai Charge", qty: 3 }, { material: "Shock Like Stone", qty: 5 }], [{ material: "Gleeok Thunder Horn", qty: 5 }, { material: "Large Zonai Charge", qty: 5 }, { material: "Voltfin Trout", qty: 10 }]]
        }, {
            name: "Set of Time",
			pieces: [{ type: "Head", piece: "Cap of Time", upgrades: null }, { type: "Body", piece: "Tunic of Time", upgrades: null }, { type: "Legs", piece: "Trousers of Time", upgrades: null }],
            upgradeMaterials: [[{ material: "Amber", qty: 10 }, { material: "Star Fragment", qty: 1 }], [{ material: "Amber", qty: 20 }, { material: "Star Fragment", qty: 1 }], [{ material: "Amber", qty: 30 }, { material: "Star Fragment", qty: 1 }], [{ material: "Amber", qty: 40 }, { material: "Star Fragment", qty: 1 }]]
        }, {
            name: "Frostbite Set",
			pieces: [{ type: "Head", piece: "Frostbite Headdress", upgrades: null }, { type: "Body", piece: "Frostbite Shirt", upgrades: null }, { type: "Legs", piece: "Frostbite Trousers", upgrades: null }],
            upgradeMaterials: [[{ material: "Ice Fruit", qty: 3 }], [{ material: "Ice-Breath Lizalfos Horn", qty: 5 }, { material: "Winterwing Butterfly", qty: 5 }], [{ material: "Cold Darner", qty: 5 }, { material: "Ice Like Stone", qty: 5 }, { material: "Large Zonai Charge", qty: 5 }], [{ material: "Chillfin Trout", qty: 10 }, { material: "Gleeok Frost Horn", qty: 5 }, { material: "Large Zonai Charge", qty: 10 }]]
        }, {
            name: "Set of the Wind",
			pieces: [{ type: "Head", piece: "Cap of the Wind", upgrades: null }, { type: "Body", piece: "Tunic of the Wind", upgrades: null }, { type: "Legs", piece: "Trousers of the Wind", upgrades: null }],
            upgradeMaterials: [[{ material: "Opal", qty: 5 }, { material: "Star Fragment", qty: 1 }], [{ material: "Opal", qty: 10 }, { material: "Star Fragment", qty: 1 }], [{ material: "Opal", qty: 15 }, { material: "Star Fragment", qty: 1 }], [{ material: "Opal", qty: 25 }, { material: "Star Fragment", qty: 1 }]]
        }, {
            name: "Yiga Set",
			pieces: [{ type: "Head", piece: "Yiga Mask", upgrades: null }, { type: "Body", piece: "Yiga Armor", upgrades: null }, { type: "Legs", piece: "Yiga Tights", upgrades: null }],
            upgradeMaterials: [[{ material: "Octorok Eyeball", qty: 2 }], [{ material: "Fire-Breath Lizalfos Tail", qty: 3 }, { material: "Puffshroom", qty: 3 }], [{ material: "Ice-Breath Lizalfos Tail", qty: 5 }, { material: "Keese Eyeball", qty: 5 }], [{ material: "Black Hinox Horn", qty: 3 }, { material: "Electric Lizalfos Tail", qty: 5 }, { material: "Mighty Bananas", qty: 10 }]]
        }, {
            name: "Set of Twilight",
			pieces: [{ type: "Head", piece: "Cap of Twilight", upgrades: null }, { type: "Body", piece: "Tunic of Twilight", upgrades: null }, { type: "Legs", piece: "Trousers of Twilight", upgrades: null }],
            upgradeMaterials: [[{ material: "Star Fragment", qty: 1 }, { material: "Topaz", qty: 1 }], [{ material: "Star Fragment", qty: 1 }, { material: "Topaz", qty: 4 }], [{ material: "Star Fragment", qty: 1 }, { material: "Topaz", qty: 6 }], [{ material: "Star Fragment", qty: 1 }, { material: "Topaz", qty: 10 }]]
        }, {
			name: "Vah Medoh Divine Helm",
			pieces: [{ type: "Head", piece: "Vah Medoh Divine Helm", upgrades: null}],
			upgradeMaterials: [[{ material: "Sapphire", qty: 1 }, { material: "Zonaite", qty: 5 }], [{ material: "Sapphire", qty: 4 }, { material: "Zonaite", qty: 10 }], [{ material: "Dazzlefruit", qty: 5 }, { material: "Large Zonaite", qty: 5 }, { material: "Sapphire", qty: 6 }], [{ material: "Dazzlefruit", qty: 10 }, { material: "Large Zonaite", qty: 10 }, { material: "Sapphire", qty: 10 }]]
		}, {
            name: "Set of the Sky",
			pieces: [{ type: "Head", piece: "Cap of the Sky", upgrades: null }, { type: "Body", piece: "Tunic of the Sky", upgrades: null }, { type: "Legs", piece: "Trousers of the Sky", upgrades: null }],
            upgradeMaterials: [[{ material: "Sapphire", qty: 1 }, { material: "Star Fragment", qty: 1 }], [{ material: "Sapphire", qty: 4 }, { material: "Star Fragment", qty: 1 }], [{ material: "Sapphire", qty: 6 }, { material: "Star Fragment", qty: 1 }], [{ material: "Sapphire", qty: 10 }, { material: "Star Fragment", qty: 1 }]]
        }, {
			name: "Vah Rudania Divine Helm",
			pieces: [{ type: "Head", piece: "Vah Rudania Divine Helm", upgrades: null}],
			upgradeMaterials: [[{ material: "Ruby", qty: 1 }, { material: "Zonaite", qty: 5 }], [{ material: "Ruby", qty: 4 }, { material: "Zonaite", qty: 10 }], [{ material: "Dazzlefruit", qty: 5 }, { material: "Large Zonaite", qty: 5 }, { material: "Ruby", qty: 6 }], [{ material: "Dazzlefruit", qty: 10 }, { material: "Large Zonaite", qty: 10 }, { material: "Ruby", qty: 10 }]]
		}, {
			name: "Sheik's Mask",
			pieces: [{ type: "Head", piece: "Sheik's Mask", upgrades: null}],
			upgradeMaterials: [[{ material: "Silent Princess", qty: 1 }, { material: "Star Fragment", qty: 1 }], [{ material: "Silent Princess", qty: 2 }, { material: "Star Fragment", qty: 2 }], [{ material: "Silent Princess", qty: 4 }, { material: "Star Fragment", qty: 3 }], [{ material: "Silent Princess", qty: 8 }, { material: "Star Fragment", qty: 4 }]]
		}, {
			name: "Ancient Hero's Aspect",
			pieces: [{ type: "Head", piece: "Ancient Hero's Aspect", upgrades: null}],
			upgradeMaterials: [[{ material: "Hinox Guts", qty: 9 }, { material: "Silver Bokoblin Horn", qty: 9 }, { material: "Zonaite", qty: 15 }], [{ material: "Frox Guts", qty: 9 }, { material: "Large Zonaite", qty: 10 }, { material: "Silver Moblin Horn", qty: 9 }], [{ material: "Large Zonaite", qty: 15 }, { material: "Molduga Guts", qty: 9 }, { material: "Silver Lizalfos Horn", qty: 9 }], [{ material: "Gleeok Guts", qty: 9 }, { material: "Silver Lynel Mace Horn", qty: 9 }, { material: "Silver Lynel Saber Horn", qty: 9 }]]
		}];

        // Assign the upgradeMaterials array to each piece based on the set's upgradeMaterials
        for (var i = 0; i < armor.length; i++) {
            armor[i].pieces.forEach(piece => {
                piece.upgrades = armor[i].upgradeMaterials;
            });
        }
		
		// Function to create a collapsible section for each armor set
        function createCollapsibleSection(setId, setName, setOutput) {
            var section = document.createElement("div");
            section.className = "armorSet";
            section.setAttribute("data-set-id", setId);

            var setHeader = document.createElement("h2");
            setHeader.textContent = setName;
            setHeader.classList.add("collapsible"); // Add collapsible class to set header
            section.appendChild(setHeader);

            var collapsibleContent = document.createElement("div");
            collapsibleContent.className = "armorOutput";
            collapsibleContent.innerHTML = setOutput;
            section.appendChild(collapsibleContent);
			
			collapsibleContent.style.display = "none";

            return section;
        }

        // Event listener for set header click to toggle the collapsible content
        function toggleCollapsibleContent(event) {
            var setHeader = event.target;
            var collapsibleContent = setHeader.nextElementSibling;

            collapsibleContent.style.display = collapsibleContent.style.display === "none" ? "block" : "none";
        }

        // Attach the toggleCollapsibleContent function to the click event of set headers
        document.addEventListener("click", function (event) {
            if (event.target.classList.contains("collapsible")) {
                toggleCollapsibleContent(event);
            }
        });

        // Function to display armor information
        function displayArmorInfo() {
            var armorOutput = document.getElementById("armorOutput");

            for (var i = 0; i < armor.length; i++) {
                var setOutput = "";

                for (var j = 0; j < armor[i].pieces.length; j++) {
                    var piece = armor[i].pieces[j];
                    var pieceName = piece.piece.replace(/'/g, "_"); // Remove apostrophe for data attributes
                    setOutput += "<p>" + piece.piece + "<input type='checkbox' class='piece-checkbox' data-piece='" + armor[i].name + "_" + piece.piece + "' data-piece-display='" + piece.piece + "'></p>";

                    var levelsHTML = "";
                    for (var k = 0; k < piece.upgrades.length; k++) {
                        var upgradeMaterials = piece.upgrades[k];

                        if (armor[i].individual) {
                            var individualMaterials = armor[i].individual[`l${k + 1}${piece.type}`];
                            if (individualMaterials) {
                                upgradeMaterials = upgradeMaterials.concat(individualMaterials);
                            }
                        }

                        levelsHTML += "<div style='display:inline-block; margin-right: 20px;'><p><strong>Level " + (k + 1) + ":</strong></p>";

                        for (var l = 0; l < upgradeMaterials.length; l++) {
                            var material = upgradeMaterials[l];
                            levelsHTML += "<p>" + material.material + " x" + material.qty + "</p>";
                        }

                        levelsHTML += "<label><input type='checkbox' class='level-checkbox' data-piece='" + pieceName + "' data-level='" + (k + 1) + "'></label></div>";
                    }

                    setOutput += levelsHTML;
                    setOutput += "<br>";
                }

                var setId = "set" + i;
                var setName = armor[i].name;
                var collapsibleSection = createCollapsibleSection(setId, setName, setOutput);
                armorOutput.appendChild(collapsibleSection);
            }

            // Add event listeners to collapsible sections after they are created
            var collapsibles = document.querySelectorAll('.collapsible');
            collapsibles.forEach(function (collapsible) {
                collapsible.addEventListener('click', function () {
                    this.classList.toggle('active');
                    var content = this.querySelector('.armorSetContent');
                    if (content.style.display === 'block') {
                        content.style.display = 'none';
                    } else {
                        content.style.display = 'block';
                    }
                });
            });
        }

        // Function to update materials list based on selected checkboxes
        function updateMaterialsList() {
            console.log("updateMaterialsList called");

            var pieceCheckboxes = document.getElementsByClassName("piece-checkbox");
            var levelCheckboxes = document.getElementsByClassName("level-checkbox");
            var selectedPieces = [];
            var selectedLevels = [];

            // Find selected pieces and levels
            for (var i = 0; i < pieceCheckboxes.length; i++) {
                if (pieceCheckboxes[i].checked) {
                    var pieceLabel = pieceCheckboxes[i].parentElement.innerText.trim();
                    selectedPieces.push(pieceLabel);
                }
            }

            for (var i = 0; i < levelCheckboxes.length; i++) {
                if (levelCheckboxes[i].checked) {
                    selectedLevels.push({
                        piece: levelCheckboxes[i].getAttribute("data-piece").replace(/_/g, "'"),
                        level: parseInt(levelCheckboxes[i].getAttribute("data-level"))
                    });
                }
            }

            console.log("Selected Pieces:", selectedPieces);
            console.log("Selected Levels:", selectedLevels);

            // Calculate materials based on selected pieces and levels
            var materialsList = {};
            for (var i = 0; i < armor.length; i++) {
                for (var j = 0; j < armor[i].pieces.length; j++) {
                    var piece = armor[i].pieces[j];
                    var pieceName = piece.piece;

                    if (selectedPieces.includes(pieceName)) {
                        for (var k = 0; k < piece.upgrades.length; k++) {
                            if (!selectedLevels.some(level => level.piece === pieceName && level.level === (k + 1))) {
                                var upgradeMaterials = piece.upgrades[k];

                                if (armor[i].individual) {
                                    var individualMaterials = armor[i].individual[`l${k + 1}${piece.type}`];
                                    if (individualMaterials) {
                                        upgradeMaterials = upgradeMaterials.concat(individualMaterials);
                                    }
                                }

                                for (var l = 0; l < upgradeMaterials.length; l++) {
                                    var material = upgradeMaterials[l];
                                    if (!materialsList[material.material]) {
                                        materialsList[material.material] = 0;
                                    }
                                    materialsList[material.material] += material.qty;
                                }
                            }
                        }
                    }
                }
            }

            // Sort materials list alphabetically
            var sortedMaterialsList = Object.keys(materialsList).sort().reduce(function (acc, key) {
                acc[key] = materialsList[key];
                return acc;
            }, {});

            // Display the updated materials list
            var resultOutput = document.getElementById("result");
            resultOutput.innerHTML = "";

            for (var material in sortedMaterialsList) {
                resultOutput.innerHTML += "<p>" + material + " x" + sortedMaterialsList[material] + "</p>";
            }
        }

        // Attach the updateMaterialsList function to the change event of checkboxes
        document.addEventListener("change", updateMaterialsList);
		
		// Attach the saveSelections function to the change event of checkboxes
		document.addEventListener("change", function (event) {
			if (event.target.classList.contains("piece-checkbox") || event.target.classList.contains("level-checkbox")) {
				saveSelections();
			}
		});


        // Call the displayArmorInfo function before setting up the event listener
        displayArmorInfo();

        function saveSelections() {
            var pieceCheckboxes = document.getElementsByClassName("piece-checkbox");
            var levelCheckboxes = document.getElementsByClassName("level-checkbox");
            var selectedPieces = [];
            var selectedLevels = [];

            for (var i = 0; i < pieceCheckboxes.length; i++) {
                if (pieceCheckboxes[i].checked) {
                    var pieceLabel = pieceCheckboxes[i].parentElement.innerText.trim();
                    selectedPieces.push(pieceLabel);
                }
            }

            for (var i = 0; i < levelCheckboxes.length; i++) {
                if (levelCheckboxes[i].checked) {
                    selectedLevels.push({
                        piece: levelCheckboxes[i].getAttribute("data-piece").replace(/_/g, "'"),
                        level: parseInt(levelCheckboxes[i].getAttribute("data-level"))
                    });
                }
            }

            localStorage.setItem("selectedPieces", JSON.stringify(selectedPieces));
            localStorage.setItem("selectedLevels", JSON.stringify(selectedLevels));
        }

        // Function to load selections from local storage
        function loadSelections() {
            var selectedPieces = JSON.parse(localStorage.getItem("selectedPieces")) || [];
            var selectedLevels = JSON.parse(localStorage.getItem("selectedLevels")) || [];

            // Update piece checkboxes based on loaded selections
            var pieceCheckboxes = document.getElementsByClassName("piece-checkbox");
            for (var i = 0; i < pieceCheckboxes.length; i++) {
                var pieceLabel = pieceCheckboxes[i].parentElement.innerText.trim();
                pieceCheckboxes[i].checked = selectedPieces.includes(pieceLabel);
            }

            // Update level checkboxes based on loaded selections
            var levelCheckboxes = document.getElementsByClassName("level-checkbox");
            for (var i = 0; i < levelCheckboxes.length; i++) {
                var loadedPiece = levelCheckboxes[i].getAttribute("data-piece").replace(/_/g, "'");
                var loadedLevel = parseInt(levelCheckboxes[i].getAttribute("data-level"));

                levelCheckboxes[i].checked = selectedLevels.some(level => level.piece === loadedPiece && level.level === loadedLevel);
            }

            // Call updateMaterialsList after loading selections
            updateMaterialsList();
        }

        loadSelections();
    };

    // Execute the app function
    app();
});