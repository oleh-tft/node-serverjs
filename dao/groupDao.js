export default class GroupDao {
    
    constructor(dbPool) {
        this.dbPool = dbPool
    }

    install() {
        const sql = `CREATE TABLE IF NOT EXISTS \`groups\`(
            id CHAR(36) PRIMARY KEY,
            parent_id CHAR(36) NULL,
            name VARCHAR(64) NOT NULL COLLATE utf8mb4_unicode_ci
        ) ENGINE = InnoDb DEFAULT CHARSET = utf8mb4`

        return this.dbPool.query(sql)
        .then(() => console.log("Table 'groups' created"))
        .catch(console.error)
    }

    seed() {
        let tasks = []
        let sql = `INSERT INTO \`groups\`(id, parent_id, name)
        VALUES('72b9b8da-9206-11f0-8e90-0a0027000005', NULL, 'Побутова техніка')
        ON DUPLICATE KEY UPDATE
        name = VALUES(name),
        parent_id = VALUES(parent_id)`
        tasks.push(this.dbPool.query(sql))

        sql = `INSERT INTO \`groups\`(id, parent_id, name)
        VALUES('93c64319-9207-11f0-8e90-0a0027000005', '72b9b8da-9206-11f0-8e90-0a0027000005', 'Для ванни')
        ON DUPLICATE KEY UPDATE
        name = VALUES(name),
        parent_id = VALUES(parent_id)`
        tasks.push(this.dbPool.query(sql))

        sql = `INSERT INTO \`groups\`(id, parent_id, name)
        VALUES('27acd74e-9208-11f0-8e90-0a0027000005', '93c64319-9207-11f0-8e90-0a0027000005', 'Пральні машини')
        ON DUPLICATE KEY UPDATE
        name = VALUES(name),
        parent_id = VALUES(parent_id)`
        tasks.push(this.dbPool.query(sql))

        sql = `INSERT INTO \`groups\`(id, parent_id, name)
        VALUES('ed6bf686-9208-11f0-8e90-0a0027000005', '93c64319-9207-11f0-8e90-0a0027000005', 'Сушарки')
        ON DUPLICATE KEY UPDATE
        name = VALUES(name),
        parent_id = VALUES(parent_id)`
        tasks.push(this.dbPool.query(sql))

        sql = `INSERT INTO \`groups\`(id, parent_id, name)
        VALUES('bea30998-920a-11f0-8e90-0a0027000005', '72b9b8da-9206-11f0-8e90-0a0027000005', 'Для кухні')
        ON DUPLICATE KEY UPDATE
        name = VALUES(name),
        parent_id = VALUES(parent_id)`
        tasks.push(this.dbPool.query(sql))

        sql = `INSERT INTO \`groups\`(id, parent_id, name)
        VALUES('1a2abbf6-920b-11f0-8e90-0a0027000005', 'bea30998-920a-11f0-8e90-0a0027000005', 'Холодильники')
        ON DUPLICATE KEY UPDATE
        name = VALUES(name),
        parent_id = VALUES(parent_id)`
        tasks.push(this.dbPool.query(sql))

        sql = `INSERT INTO \`groups\`(id, parent_id, name)
        VALUES('269af883-920b-11f0-8e90-0a0027000005', 'bea30998-920a-11f0-8e90-0a0027000005', 'Посудомийки')
        ON DUPLICATE KEY UPDATE
        name = VALUES(name),
        parent_id = VALUES(parent_id)`
        tasks.push(this.dbPool.query(sql))

        sql = `INSERT INTO \`groups\`(id, parent_id, name)
        VALUES('5ec5d418-926f-11f0-9955-4ccc6a68f766', '72b9b8da-9206-11f0-8e90-0a0027000005', 'Для прибирання')
        ON DUPLICATE KEY UPDATE
        name = VALUES(name),
        parent_id = VALUES(parent_id)`
        tasks.push(this.dbPool.query(sql))

        sql = `INSERT INTO \`groups\`(id, parent_id, name)
        VALUES('99bf8362-926f-11f0-9955-4ccc6a68f766', '5ec5d418-926f-11f0-9955-4ccc6a68f766', 'Пилососи побутові')
        ON DUPLICATE KEY UPDATE
        name = VALUES(name),
        parent_id = VALUES(parent_id)`
        tasks.push(this.dbPool.query(sql))

        sql = `INSERT INTO \`groups\`(id, parent_id, name)
        VALUES('a90e17f2-926f-11f0-9955-4ccc6a68f766', '5ec5d418-926f-11f0-9955-4ccc6a68f766', 'Пилососи-машини')
        ON DUPLICATE KEY UPDATE
        name = VALUES(name),
        parent_id = VALUES(parent_id)`
        tasks.push(this.dbPool.query(sql))

        sql = `INSERT INTO \`groups\`(id, parent_id, name)
        VALUES('be854007-926f-11f0-9955-4ccc6a68f766', NULL, 'Комп\`ютерна техніка')
        ON DUPLICATE KEY UPDATE
        name = VALUES(name),
        parent_id = VALUES(parent_id)`
        tasks.push(this.dbPool.query(sql))

        sql = `INSERT INTO \`groups\`(id, parent_id, name)
        VALUES('c78f82be-926f-11f0-9955-4ccc6a68f766', 'be854007-926f-11f0-9955-4ccc6a68f766', 'Ноутбуки')
        ON DUPLICATE KEY UPDATE
        name = VALUES(name),
        parent_id = VALUES(parent_id)`
        tasks.push(this.dbPool.query(sql))

        sql = `INSERT INTO \`groups\`(id, parent_id, name)
        VALUES('dadff65d-926f-11f0-9955-4ccc6a68f766', 'be854007-926f-11f0-9955-4ccc6a68f766', 'Десктопи')
        ON DUPLICATE KEY UPDATE
        name = VALUES(name),
        parent_id = VALUES(parent_id)`
        tasks.push(this.dbPool.query(sql))

        sql = `INSERT INTO \`groups\`(id, parent_id, name)
        VALUES('e2faa8ef-926f-11f0-9955-4ccc6a68f766', 'be854007-926f-11f0-9955-4ccc6a68f766', 'Аксесуари')
        ON DUPLICATE KEY UPDATE
        name = VALUES(name),
        parent_id = VALUES(parent_id)`
        tasks.push(this.dbPool.query(sql))

        sql = `INSERT INTO \`groups\`(id, parent_id, name)
        VALUES('f1b81ec4-926f-11f0-9955-4ccc6a68f766', 'e2faa8ef-926f-11f0-9955-4ccc6a68f766', 'Витратні матеріали')
        ON DUPLICATE KEY UPDATE
        name = VALUES(name),
        parent_id = VALUES(parent_id)`
        tasks.push(this.dbPool.query(sql))

        sql = `INSERT INTO \`groups\`(id, parent_id, name)
        VALUES('f7bb7fb5-926f-11f0-9955-4ccc6a68f766', 'f1b81ec4-926f-11f0-9955-4ccc6a68f766', 'Для принтерів')
        ON DUPLICATE KEY UPDATE
        name = VALUES(name),
        parent_id = VALUES(parent_id)`
        tasks.push(this.dbPool.query(sql))

        sql = `INSERT INTO \`groups\`(id, parent_id, name)
        VALUES('1219e9ec-9270-11f0-9955-4ccc6a68f766', 'f7bb7fb5-926f-11f0-9955-4ccc6a68f766', 'Чорнила')
        ON DUPLICATE KEY UPDATE
        name = VALUES(name),
        parent_id = VALUES(parent_id)`
        tasks.push(this.dbPool.query(sql))

        sql = `INSERT INTO \`groups\`(id, parent_id, name)
        VALUES('17aae8b5-9270-11f0-9955-4ccc6a68f766', 'f7bb7fb5-926f-11f0-9955-4ccc6a68f766', 'Тонери')
        ON DUPLICATE KEY UPDATE
        name = VALUES(name),
        parent_id = VALUES(parent_id)`
        tasks.push(this.dbPool.query(sql))

        sql = `INSERT INTO \`groups\`(id, parent_id, name)
        VALUES('266037a4-9270-11f0-9955-4ccc6a68f766', 'f1b81ec4-926f-11f0-9955-4ccc6a68f766', 'Папір')
        ON DUPLICATE KEY UPDATE
        name = VALUES(name),
        parent_id = VALUES(parent_id)`
        tasks.push(this.dbPool.query(sql))

        sql = `INSERT INTO \`groups\`(id, parent_id, name)
        VALUES('332d58dc-9270-11f0-9955-4ccc6a68f766', 'f1b81ec4-926f-11f0-9955-4ccc6a68f766', 'Серветки для чищення')
        ON DUPLICATE KEY UPDATE
        name = VALUES(name),
        parent_id = VALUES(parent_id)`
        tasks.push(this.dbPool.query(sql))

        sql = `INSERT INTO \`groups\`(id, parent_id, name)
        VALUES('4e226f18-9270-11f0-9955-4ccc6a68f766', 'e2faa8ef-926f-11f0-9955-4ccc6a68f766', 'Носії даних')
        ON DUPLICATE KEY UPDATE
        name = VALUES(name),
        parent_id = VALUES(parent_id)`
        tasks.push(this.dbPool.query(sql))

        sql = `INSERT INTO \`groups\`(id, parent_id, name)
        VALUES('5a6d784e-9270-11f0-9955-4ccc6a68f766', 'e2faa8ef-926f-11f0-9955-4ccc6a68f766', 'Сумки, рюкзаки')
        ON DUPLICATE KEY UPDATE
        name = VALUES(name),
        parent_id = VALUES(parent_id)`
        tasks.push(this.dbPool.query(sql))

        sql = `INSERT INTO \`groups\`(id, parent_id, name)
        VALUES('650a922c-9270-11f0-9955-4ccc6a68f766', NULL, 'Меблі')
        ON DUPLICATE KEY UPDATE
        name = VALUES(name),
        parent_id = VALUES(parent_id)`
        tasks.push(this.dbPool.query(sql))

        sql = `INSERT INTO \`groups\`(id, parent_id, name)
        VALUES('6fb684ae-9270-11f0-9955-4ccc6a68f766', '650a922c-9270-11f0-9955-4ccc6a68f766', 'Корпусні')
        ON DUPLICATE KEY UPDATE
        name = VALUES(name),
        parent_id = VALUES(parent_id)`
        tasks.push(this.dbPool.query(sql))

        sql = `INSERT INTO \`groups\`(id, parent_id, name)
        VALUES('77a93fdc-9270-11f0-9955-4ccc6a68f766', '650a922c-9270-11f0-9955-4ccc6a68f766', 'М\`які')
        ON DUPLICATE KEY UPDATE
        name = VALUES(name),
        parent_id = VALUES(parent_id)`
        tasks.push(this.dbPool.query(sql))

        return Promise.all(tasks)
    }
}