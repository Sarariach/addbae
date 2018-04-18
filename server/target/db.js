"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typenorm_1 = require("typenorm");
const DefaultNamingStrategy_1 = require("typenorm/naming-strategy/DefaultNamingStrategy");
const StringUtils_1 = require("typeorm/util/StringUtils");
class CustomNamingStrategy extends DefaultNamingStrategy_1.DefaultNamingStrategy {
    tableName(targetName, userSpecifiedName) {
        return userSpecifiedName ? userSpecifiedName : StringUtils_1.snakeCase(targetName) + 's';
    }
    columnName(propertyName, customName, embeddedPrefixes) {
        return StringUtils_1.snakeCase(embeddedPrefixes.concat(customName ? customName : propertyName).join("_"));
    }
    columnNameCustomized(customName) {
        return customName;
    }
    relationName(propertyName) {
        return StringUtils_1.snakeCase(propertyName);
    }
}
exports.default = () => typenorm_1.createConnection({
    type: "postgres",
    url: process.env.DATABASE_URL || 'postgres://postgres:secret@localhost:5432/postgres',
    entities: [],
    synchronize: true,
    logging: true,
    namingStrategy: new CustomNamingStrategy()
})
    .then(_ => console.log('Connected to Postgres with TypeORM'));
//# sourceMappingURL=db.js.map