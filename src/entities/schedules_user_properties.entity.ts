import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne } from "typeorm";
import { Properties } from "./properties.entity";
import { User } from "./user.entity";

@Entity("schedules_user_properties")
class SchedulesUserProperties {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @CreateDateColumn()
  date: Date;

  @Column({ type: "time" })
  hour: Date;

  @ManyToOne(() => Properties)
  property: Properties;

  @ManyToOne(() => User)
  user: User;
}

export { SchedulesUserProperties }