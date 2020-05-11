import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class Article {
  @PrimaryGeneratedColumn('increment')
  id: number

  @Column({length: 140, nullable: false})
  title: string

  @Column('text')
  body?: string
}