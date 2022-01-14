import { Skill } from './skill';

export class Candidate {
    id!: string;
    name!: string;
    interests!: string;
    linkedinProfileURL!: string;
    skills! : Skill[];
}