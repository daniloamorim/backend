import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createImages1602796328328 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable( new Table({
            name: "images",
            columns: [
                {
                    name: 'id',
                    type: 'integer',
                    unsigned: true,
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: 'path',
                    type: 'varchar',
                },
                {
                name: 'orphanage_id',
                type: 'integer',
                }

            ],
            foreignKeys: [
                {
                    name: 'ImageOrphanage',
                    columnNames: ['orphanage_id'],
                    referencedTableName: 'orphanages',
                    referencedColumnNames: ['id'],
                    //CASCADE = altera a o id da tabela automaticamente
                    onUpdate: 'CASCADE',
                    //CASCADE = deleta tbm as imagens do banco
                    onDelete: 'CASCADE',
                }
            ],
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('images');
    }

}
