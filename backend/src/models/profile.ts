import { DataTypes, Model } from 'sequelize';
import sequelize from '../database';

// Define the Profile model
export class Profile extends Model {
  public id!: number;
  public surname!: string;
  public name!: string;
  public email!: string;
  public type!: string;
  public class?: string; // Optional for 'student'
  public teaching?: string[]; // Optional for 'professor'
}

// Initialize the Profile model
Profile.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    surname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    class: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    teaching: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: 'profiles',
  }
);

export default Profile;
