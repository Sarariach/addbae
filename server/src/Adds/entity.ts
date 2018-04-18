import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
import { BaseEntity } from 'typeorm/repository/BaseEntity'
import { createConnection } from 'net';

@Entity()
export default class Add extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @Column('text', {nullable:false})
  title: string

  @Column('text', {nullable:false})
  description: string

  @Column('text', {nullable:false})
  picture: string

  @Column('text', {nullable:false})
  price: number

  @Column('text', {nullable:false})
  email: string

  @Column('text', {nullable:false})
  phone: number
}

