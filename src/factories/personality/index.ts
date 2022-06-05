import { MostValuedPerson, MostValuedProfessionYouOwn, Motivation, Personality, Relationship } from "../../entities/character/personality";
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

    static randomMostValuedPerson(): MostValuedPerson {
        const mostValuedPersons: Array<MostValuedPerson> = [
            MostValuedPerson.parent,
            MostValuedPerson.brotherOrSister,
            MostValuedPerson.lover,
            MostValuedPerson.friend,
            MostValuedPerson.yourself,
            MostValuedPerson.pet,
            MostValuedPerson.teacherOrMentor,
            MostValuedPerson.publicFigure,
            MostValuedPerson.personalHero,
            MostValuedPerson.noOne,
        ]
        const randomIndex = getRandomInt(mostValuedPersons.length);
        return mostValuedPersons[randomIndex];
    }

    static randomMostValuedProfessionYouOwn(): MostValuedProfessionYouOwn {
        const mostValuedProfessionsYouOwn: Array<MostValuedProfessionYouOwn> = [
            MostValuedProfessionYouOwn.weapon,
            MostValuedProfessionYouOwn.tool,
            MostValuedProfessionYouOwn.pieceOfClothing,
            MostValuedProfessionYouOwn.photograph,
            MostValuedProfessionYouOwn.bookOrDiary,
            MostValuedProfessionYouOwn.recording,
            MostValuedProfessionYouOwn.musicalInstrument,
            MostValuedProfessionYouOwn.pieceOfJewelry,
            MostValuedProfessionYouOwn.toy,
            MostValuedProfessionYouOwn.letter,
        ];
        const randomIndex = getRandomInt(mostValuedProfessionsYouOwn.length);
        return mostValuedProfessionsYouOwn[randomIndex];
    }
}