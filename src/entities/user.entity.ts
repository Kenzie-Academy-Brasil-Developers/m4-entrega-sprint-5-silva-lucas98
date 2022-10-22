import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm";
import { Exclude } from "class-transformer";
import { SchedulesUserProperties } from "./schedules_user_properties.entity";

@Entity("users")
class User {

  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  @Exclude()
  password: string;

  @Column()
  isAdm: boolean

  @Column({ default: true })
  isActive: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => SchedulesUserProperties, schedulesUserProperties => schedulesUserProperties.user)
  schedulesPropery: SchedulesUserProperties[];

}

export { User }