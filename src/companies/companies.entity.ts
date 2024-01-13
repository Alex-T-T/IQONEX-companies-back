import { PrimaryColumn, Column, Entity, Index } from 'typeorm';

@Entity({ name: 'handels_table' })
@Index(['companyname'])
export class Company {
    @PrimaryColumn({
        type: 'text',
        nullable: false,
    })
    companyname: string;

    @Column({
        type: 'date',
        nullable: true,
    })
    registration_date: Date;

    @Column({
        type: 'text',
        nullable: true,
    })
    country: string;

    @Column({
        type: 'text',
        nullable: true,
    })
    city: string;

    @Column({
        type: 'integer',
        nullable: true,
    })
    postalcode: number;

    @Column({
        type: 'text',
        nullable: true,
    })
    street: string;

    @Column({
        type: 'text',
        nullable: true,
    })
    housenumber: string;

    @Column({
        type: 'text',
        nullable: true,
    })
    state: string;

    @Column({
        type: 'text',
        nullable: true,
    })
    object_of_the_company: string;
}
