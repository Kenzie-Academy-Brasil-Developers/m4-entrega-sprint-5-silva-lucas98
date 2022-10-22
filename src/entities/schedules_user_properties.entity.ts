import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Properties } from "./properties.entity";
import { User } from "./user.entity";

@Entity("schedules_user_properties")
class SchedulesUserProperties {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "date"})
  date: string;

  @Column({ type: "time" })
  hour: string;

  @ManyToOne(() => Properties)
  property: Properties;

  @ManyToOne(() => User)
  user: User;
}

export { SchedulesUserProperties }