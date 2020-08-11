"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
// this is a good bit of grunt work data entry to make a nice pretty enum 
// for set names -> set code for now we will continue to use string of setcode and redirect to docs for looking up
const SetEnum = new graphql_1.GraphQLEnumType({
    name: "SetEnum",
    values: {
        TENTH_EDITION: {
            value: "10E"
        },
        UNLIMITED_EDITION: {
            value: "2ED"
        },
        DOUBLE_MASTERS: {
            value: "2XM"
        },
        REVISED_EDITION: {
            value: "3ED"
        },
        FOURTH_EDITION_FOREIGN_BLACK_BORDER: {
            value: "4ED"
        },
        FIFTH_DAWN: {
            value: "5DN"
        },
        FIFTH_EDITION: {
            value: "5ED"
        },
        CLASSIC_SIXTH_EDITION: {
            value: "6ED"
        },
        SEVENTH_EDITION: {
            value: "7ED"
        },
        EIGHTH_EDITION: {
            value: "8ED"
        },
        NINTH_EDITION: {
            value: "9ED"
        },
        MASTERS_25: {
            value: "A25"
        },
        AETHER_REVOLT: {
            value: "AER"
        },
        JUMPSTART_ARENA_EXCLUSIVES: {
            value: "AJMP"
        },
        AMONKHET: {
            value: "AKH"
        },
        SHARDS_OF_ALARA: {
            value: "ALA"
        },
        ALLIANCES: {
            value: "ALL"
        },
        MODERN_HORIZONS_ART_SERIES: {
            value: "AMH1"
        },
        ARENA_NEW_PLAYER_EXPERIENCE: {
            value: "ANA"
        },
        APOCALYPSE: {
            value: "APC"
        },
        ALARA_REBORN: {
            value: "ARB"
        },
        ARCHENEMY: {
            value: "ARC"
        },
        ARABIAN_NIGHTS: {
            value: "ARN"
        },
        ANTHOLOGIES: {
            value: "ATH"
        },
        ANTIQUITIES: {
            value: "ATQ"
        },
        AVACYN_RESTORED: {
            value: "AVR"
        },
        BATTLEBOND: {
            value: "BBD"
        },
        BATTLE_FOR_ZENDIKAR: {
            value: "BFZ"
        },
        BORN_OF_THE_GODS: {
            value: "BNG"
        },
        BETRAYERS_OF_KAMIGAWA: {
            value: "BOK"
        },
        BATTLE_ROYALE_BOX_SET: {
            value: "BRB"
        },
        BEATDOWN_BOX_SET: {
            value: "BTD"
        },
        COMMANDER_2013: {
            value: "C13"
        },
        COMMANDER_2014: {
            value: "C14"
        },
        COMMANDER_2015: {
            value: "C15"
        },
        COMMANDER_2016: {
            value: "C16"
        },
        COMMANDER_2017: {
            value: "C17"
        },
        COMMANDER_2018: {
            value: "C18"
        },
        COMMANDER_2019: {
            value: "C19"
        },
        COMMANDER_2020: {
            value: "C20"
        },
        COLLECTORS_EDITION: {
            value: "CED"
        },
        INTL_COLLECTORS_EDITION: {
            value: "CEI"
        },
        CHAMPIONS_OF_KAMIGAWA: {
            value: "CHK"
        },
        CHRONICLES: {
            value: "CHR"
        },
        COMMANDERS_ARSENAL: {
            value: "CM1"
        },
        COMMANDER_ANTHOLOGY_VOLUME_II: {
            value: "CM2"
        },
        COMMANDER_ANTHOLOGY: {
            value: "CMA"
        },
        MYSTERY_BOOSTER_PLAYTEST_CARDS: {
            value: "CMB1"
        },
        COMMANDER_2011: {
            value: "CMD"
        },
        CONSPIRACY_TAKE_THE_CROWN: {
            value: "CN2"
        },
        CONSPIRACY: {
            value: "CNS"
        },
        CONFLUX: {
            value: "CON"
        },
        MAGIC_2015_CLASH_PACK: {
            value: "CP1"
        },
        FATE_REFORGED_CLASH_PACK: {
            value: "CP2"
        },
        MAGIC_ORIGINS_CLASH_PACK: {
            value: "CP3"
        },
        COLDSNAP: {
            value: "CSP"
        },
        COLDSNAP_THEME_DECKS: {
            value: "CST"
        },
        DUEL_DECKS_ELVES_VS_GOBLINS: {
            value: "DD1"
        },
        DUEL_DECKS_JACE_VS_CHANDRA: {
            value: "DD2"
        },
        DUEL_DECKS_DIVINE_VS_DEMONIC: {
            value: "DDC"
        },
        DUEL_DECKS_GARRUK_VS_LILIANA: {
            value: "DDD"
        },
        DUEL_DECKS_PHYREXIA_VS_THE_COALITION: {
            value: "DDE"
        },
        DUEL_DECKS_ELSPETH_VS_TEZZERET: {
            value: "DDF"
        },
        DUEL_DECKS_KNIGHTS_VS_DRAGONS: {
            value: "DDG"
        },
        DUEL_DECKS_AJANI_VS_NICOL_BOLAS: {
            value: "DDH"
        },
        DUEL_DECKS_VENSOR_VS_KOTH: {
            value: "DDI"
        },
        DUEL_DECKS_IZZET_VS_GOLGARI: {
            value: "DDJ"
        },
        DUEL_DECKS_SORIN_VS_TIBALT: {
            value: "DDK"
        },
        DUEL_DECKS_HEROES_VS_MONSTERS: {
            value: "DDL"
        },
        DUEL_DECKS_JACE_VS_VRASKA: {
            value: "DDM"
        },
        DUEL_DECKS_SPEED_VS_CUNNING: {
            value: "DDN"
        },
        DUEL_DECKS_ELSPETH_VS_KIORA: {
            value: "DDO"
        },
        DUEL_DECKS_ZENDIKAR_VS_ELDRAZI: {
            value: "DDP"
        }
    }
});
exports.default = SetEnum;
//# sourceMappingURL=SetsEnum.js.map