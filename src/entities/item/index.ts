export interface ItemProps {
    uid: string;
    name: string;
    weight: number;
}

export class Item {
    name: string;
    uid: string;
    weight: number;

    constructor({
        name,
        uid,
        weight,
    }: ItemProps) {
        this.uid = uid;
        this.name = name;
        this.weight = weight;
    }
}
