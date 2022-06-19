export enum Personality {
    SAS = 'Shy and secretive',
    RAV = 'Rebellious, antisocial and violent',
    APA = 'Arrogant, proud, and aloof',
    MRH = 'Moody, rash, and headstrong',
    PFN = 'Picky, fussy, and nervous',
    STS = 'Stable and serious',
    SAF = 'Silly and fluff-headed',
    SAD = 'Sneaky and deceptive',
    IAD = 'Intellectual and detached',
    FAO = 'Friendly and outgoing',
}

export enum Motivation {
    money = 'Money',
    honor = 'Honor',
    yourWord = 'Your word',
    honesty = 'Honesty',
    knowledge = 'Knowledge',
    vengeance = 'Vengeance',
    love = 'Love',
    power = 'Power',
    family = 'Family',
    friendship = 'Friendship',
}

export enum Relationship {
    neutral = 'I stay neutral.',
    likeEveryone = 'I like almost everyone.',
    hateEveryone = 'I hate almost everyone.',
    tools = 'People are tools. Use them for your own goals then discard them.',
    valuable = 'Every person is a valuable individual.',
    obstacles = 'People are obstacles to be destroyed if they cross me.',
    untrustworthy = 'People are untrustworthy. Don\'t depend on anyone.',
    wipeEmAll = 'Wipe ‘em all out and let the cockroaches take over.',
    wonderful = 'People are wonderful!'
};

export enum MostValuedPerson {
    parent = 'A parent',
    brotherOrSister = 'A brother or sister',
    lover = 'A lover',
    friend = 'A friend',
    yourself = 'Yourself',
    pet = 'A pet',
    teacherOrMentor = 'A teacher or mentor',
    publicFigure = 'A public figure',
    personalHero = 'A personal hero',
    noOne = 'No one',
}

export enum MostValuedProfessionYouOwn {
    weapon = 'A weapon',
    tool = 'A tool',
    pieceOfClothing = 'A piece of clothing',
    photograph = 'A photograph',
    bookOrDiary = 'A book or diary',
    recording = 'A recording',
    musicalInstrument = 'A musical instrument',
    pieceOfJewelry = 'A piece of jewelry',
    toy = 'A toy',
    letter = 'A letter',
}

export enum OriginalFamilyBackground {
    corporateExecs = 'Wealthy, powerful, with servants, luxury homes, and the best of everything. Private security made sure you were always safe. You definitely went to a big-name private school.',
    corporateManagers = 'Well to do, with large homes, safe neighborhoods, nice cars, etc. Sometimes your parent(s) would hire servants, although this was rare. You had a mix of private and corporate education.',
    corporateTechnicians = 'Middle-middle class, with comfortable conapts or Beaverville suburban homes, minivans and corporate-run technical schools. Kind of like living 1950s America crossed with 1984.',
    nomadPack = 'You had a mix of rugged trailers, vehicles, and huge road kombis for your home. You learned to drive and fight at an early age, but the family was always there to care for you. Food was actually fresh and abundant. Mostly home schooled.',
    gangerFamily = `A savage, violent home in any place the gang could take over. You were usually hungry, cold, and scared. You probably didn't know who your actual parents were. Education? The Gang taught you how to fight, kill, and steal—what else did you need to know?`,
    combatZoners = `A step up from a gang "family," your home was a decaying building somewhere in the ‘Zone', heavily fortified. You were hungry at times, but regularly could score a bed and a meal. Home schooled.`,
    urbanHomeless = 'You lived in cars, dumpsters, or abandoned shipping modules. If you were lucky. You were usually hungry, cold, and scared, unless you were tough enough to fight for the scraps. Education? School of Hard Knocks.',
    megastructureWarrenRats = 'You grew up in one of the huge new megastructures that went up after the War. A tiny conapt, kibble and scop for food, a mostly warm bed. Some better educated adult warren dwellers or a local Corporation may have set up a school.',
    reclaimers = 'You started out on the road, but then moved into one of the deserted ghost towns or cities to rebuild it. A pioneer life: dangerous, but with plenty of simple food and a safe place to sleep. You were home schooled if there was anyone who had the time.',
    edgerunners = `Your home was always changing based on your parents' current "job." Could be a luxury apartment, an urban conapt, or a dumpster if you were on the run. Food and shelter ran the gamut from gourmet to kibble.`
}

export enum ChildhoodEnvironment {
    ranOnTheStreet = 'Ran on The Street, with no adult supervision.',
    corpZone = 'Spent in a safe Corp Zone walled off from the rest of the City.',
    nomadPack = 'In a Nomad pack moving from place to place.',
    dacaying = 'In a decayin, unce upscale neighborhood, now holding off the boosters to survive.',
    combatZone = 'In the heart of the Combat Zone, living in a wrecked building or other squat.',
    megastructure = 'In a huge "megastructure" building controlled by a Corp or the City.',
    ruins = 'In the ruins of a deserted town or city taken over by Reclaimers.',
    driftNation = 'In a Drift Nation (a floating offshore city) that is a meeting place for all kinds of people.',
    corpLuxury = 'In a Corporate luxury "starscraper," high above the rest of the teeming rabble.'
}

export enum FamilyCrisis {
    betrayal = 'Your family lost everything through betrayal.',
    badManagement = 'Your family lost everything through bad management.',
    exiled = 'Your family was exiled or otherwise driven from their original home/nation/Corporation.',
    imprisoned = 'Your family is imprisoned, and you alone escaped.',
    vanished = 'Your family vanished. You are the only remaining member.',
    killed = 'Your family was killed, and you were the only survivor.',
    conspiracy = 'Your family is involved in a long-term conspiracy, organization, or association, such as a crime family or revolutionary group.',
    scattered = 'Your family was scattered to the winds due to misfortune.',
    cursed = 'Your family is cursed with a hereditary feud that has lasted for generations.',
    debt = 'You are the inheritor of a family debt; you must honor this debt before moving on with your life.'
}