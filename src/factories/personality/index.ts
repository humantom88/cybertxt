import { Motivation, Personality, Relationship } from "../../entities/character/personality";
import { getRandomInt } from "../../utils";

export class PersonalityFactory {
    static randomPersonality (): Personality {
        const personalities = Object.values(Personality);
        const personalityIndex = getRandomInt(personalities.length)
        return personalities[personalityIndex] as Personality;
    }

    static randomMotivation(): Motivation {
        const motivations = Object.values(Motivation);
        const motivationIndex = getRandomInt(motivations.length);
        return motivations[motivationIndex] as Motivation;
    }

    static randomRelationship(): Relationship {
        const relationshipTypes: Array<Relationship> = [
            Relationship.neutral,
            Relationship.neutral,
            Relationship.likeEveryone,
            Relationship.hateEveryone,
            Relationship.tools,
            Relationship.valuable,
            Relationship.obstacles,
            Relationship.untrustworthy,
            Relationship.wipeEmAll,
            Relationship.wonderful,
        ];
        const randomIndex = getRandomInt(relationshipTypes.length);
        return relationshipTypes[randomIndex];
    }
}