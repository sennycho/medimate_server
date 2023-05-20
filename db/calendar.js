import SQ from 'sequelize';
import { sequelize } from './database.js';
import { User } from './user.js';

const DataTypes = SQ.DataTypes;

export const Calendar = sequelize.define(
    'tb_calendar',
    {
        C_NUM: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        C_TITLE: {
            type: DataTypes.STRING(256),
            allowNull: false
        },
        C_START: {
            type: DataTypes.DATE,
            allowNull: false
        },
        C_END: {
            type: DataTypes.DATE
        },
        C_CONTENT: {
            type: DataTypes.STRING(256),
            allowNull: false
        },
        C_ALARM: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
    },
    { timestamps: false, freezeTableName: true }
);

// 서로 num컬럼으로 1대1 참조 할 수 있도록 외래키를 설정
User.hasOne(Calendar, { foreignKey: 'U_NUM' });
Calendar.belongsTo(User, { foreignKey: 'U_NUM' });