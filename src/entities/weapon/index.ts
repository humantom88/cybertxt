import { Dices } from "../dices";
import { Item, ItemProps } from "../item";

interface WeaponProps extends ItemProps {
    area: number[];
    damageDice: Dices;
}

export class Weapon extends Item {
    private area: number[];
    private damageDice: Dices;

    constructor(props: WeaponProps) {
        super(props);
        
        this.area = props.area;
        this.damageDice = props.damageDice;
    }
}