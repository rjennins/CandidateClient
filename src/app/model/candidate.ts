import { Skill } from './skill';

export class Candidate {
    id!: string;
    name!: string;
    interests!: string;
    linkedinprofileurl!:number;
    skills! : Skill[];
}