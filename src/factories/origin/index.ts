import { Origin } from "../../entities/origin/origin";

export class OriginFactory {
    static randomOrigin(): Origin {
        return new Origin();
    }
}