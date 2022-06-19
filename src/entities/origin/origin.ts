import { getRandomInt } from "../../utils";
import { ChildhoodEnvironment, FamilyCrisis, OriginalFamilyBackground } from "../character/personality";
import { Language } from "./language";
import { Region } from "./region";

export const REGION_LANGUAGE_MAP: Record<Region, Language[]> = {
    [Region.NA]: [
        Language.Chinese,
        Language.Cree,
        Language.Creole,
        Language.English,
        Language.French,
        Language.Navajo,
        Language.Spanish,
    ],
    [Region.SCA]: [
        Language.Creole,
        Language.English,
        Language.German,
        Language.Guarani,
        Language.Mayan,
        Language.Portuguese,
        Language.Quechua,
        Language.Spanish
    ],
    [Region.WE]: [
        Language.Dutch,
        Language.English,
        Language.French,
        Language.German,
        Language.Italian,
        Language.Norwegian,
        Language.Portuguese,
        Language.Spanish,
    ],
    [Region.EE]: [
        Language.English,
        Language.Finnish,
        Language.Polish,
        Language.Romanian,
        Language.Russian,
        Language.Ukrainian,
    ],
    [Region.MENA]: [
        Language.Arabic,
        Language.Berber,
        Language.English,
        Language.Farsi,
        Language.French,
        Language.Hebrew,
        Language.Turkish
    ],
    [Region.SSA]: [
        Language.Arabic, 
        Language.English, 
        Language.French, 
        Language.Hausa, 
        Language.Lingala, 
        Language.Oromo, 
        Language.Portuguese, 
        Language.Swahili, 
        Language.Twi, 
        Language.Yoruba
    ],
    [Region.SA]: [
        Language.Bengali, 
        Language.Dari, 
        Language.English, 
        Language.Hindi, 
        Language.Nepali, 
        Language.Sinhalese, 
        Language.Tamil, 
        Language.Urdu
    ],
    [Region.SEA]: [
        Language.Arabic,
        Language.Burmese,
        Language.English,
        Language.Filipino,
        Language.Hindi,
        Language.Indonesian,
        Language.Khmer,
        Language.Malayan,
        Language.Vietnamese
    ],
    [Region.EA]: [
        Language.Cantonese,
        Language.Chinese,
        Language.English,
        Language.Japanese,
        Language.Korean,
        Language.Mandarin,
        Language.Chinese,
        Language.Mongolian
    ],
    [Region.OPI]: [
        Language.English,
        Language.French,
        Language.Hawaiian,
        Language.Maori,
        Language.PamaNyungan,
        Language.Tahitian
    ],
}

export interface OriginProps {
    childhoodEnvironment?: ChildhoodEnvironment,
    generalCulturalRegion?: Region,
    originLanguage?: Language,
    originFamily?: OriginalFamilyBackground,
    familyCrisis?: FamilyCrisis,
}

export class Origin {
    private generalCulturalRegion: Region;
    private originLanguage: Language;
    private originFamily: OriginalFamilyBackground;
    private childhoodEnvironment: ChildhoodEnvironment;
    private familyCrisis: FamilyCrisis;

    constructor({
        generalCulturalRegion,
        originLanguage,
        originFamily,
        childhoodEnvironment,
        familyCrisis,
    }: OriginProps = {}) {
        this.generalCulturalRegion = generalCulturalRegion ?? this.getRandomCulturalRegion();
        this.originLanguage = originLanguage ?? this.getRandomOriginLanguage(REGION_LANGUAGE_MAP[this.generalCulturalRegion]);
        this.originFamily = originFamily ?? this.getRandomOriginFamily();
        this.childhoodEnvironment = childhoodEnvironment ?? this.getRandomChildhoodEnvironment();
        this.familyCrisis = familyCrisis ?? this.getRandomFamilyCrisis();
    }

    private getRandomFamilyCrisis(): FamilyCrisis {
        const familyCrisises: string[] = Object.values(FamilyCrisis)
        const familyCrisisNumber = getRandomInt(familyCrisises.length);
        return familyCrisises[familyCrisisNumber] as FamilyCrisis;
    }

    private getRandomChildhoodEnvironment(): ChildhoodEnvironment {
        const childhoodEnvironments: string[] = Object.values(ChildhoodEnvironment)
        const childhoodEnvironmentNumber = getRandomInt(childhoodEnvironments.length);
        return childhoodEnvironments[childhoodEnvironmentNumber] as ChildhoodEnvironment;
    }

    private getRandomCulturalRegion(): Region {
        const regions: string[] = Object.values(Region)
        const regionNumber = getRandomInt(regions.length);
        return regions[regionNumber] as Region;
    }
    
    private getRandomOriginFamily(): OriginalFamilyBackground {
        const originFamilyChoices: string[] = Object.values(OriginalFamilyBackground);
        const originFamilyNumber = getRandomInt(originFamilyChoices.length);
        return originFamilyChoices[originFamilyNumber] as OriginalFamilyBackground;
    }


    private getRandomOriginLanguage(languages: Language[]): Language {
        const languageNumber = getRandomInt(languages.length);
        return languages[languageNumber];
    }
}
