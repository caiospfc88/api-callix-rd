import { instances } from 'sequelize';

export default class CampanhaDAO {
    model = instances.getModel('campanha');


    async create(campanha) {
        return await this.model.create(campanha);
    }

    findAll() {
        return this.model.findAll();
    }

    async findById(id) {
        return this.model;
    }

    async update(where, payload) {
        const campanha = await this.findById({ where });
        return await campanha.update(payload);
    }

    async destroy(where) {
        const campanha = await this.findById({ where });
        return campanha.destroy({ where });
    }
}