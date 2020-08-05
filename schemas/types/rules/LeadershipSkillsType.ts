import {
    GraphQLBoolean, GraphQLObjectType
} from "graphql"

const LeadershipSkills = new GraphQLObjectType({
    name: "LeadershipSkills",
    description: "Describes a list of formats that a specific card is legal to be your Commander in play formats that utilize commanders",
    fields: () => ({
        brawl: {
            type: GraphQLBoolean
        },
        commander: {
            type: GraphQLBoolean
        },
        oathbreaker: {
            type: GraphQLBoolean
        }
    })
})

export default LeadershipSkills