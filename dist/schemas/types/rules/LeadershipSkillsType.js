"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const LeadershipSkills = new graphql_1.GraphQLObjectType({
    name: "LeadershipSkills",
    description: "Describes a list of formats that a specific card is legal to be your Commander in play formats that utilize commanders",
    fields: () => ({
        brawl: {
            type: graphql_1.GraphQLBoolean
        },
        commander: {
            type: graphql_1.GraphQLBoolean
        },
        oathbreaker: {
            type: graphql_1.GraphQLBoolean
        }
    })
});
exports.default = LeadershipSkills;
//# sourceMappingURL=LeadershipSkillsType.js.map