import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class PostEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 500 })
    title: string;

    @Column({ length: 500 })
    subtitle: string;

    @Column('text')
    imageURL: string;

    @Column('text')
    content: string;
}