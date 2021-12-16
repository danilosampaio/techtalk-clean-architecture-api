import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export default class User {
    constructor (id: string, name: string, email: string, password: string) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
    }

    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;
}