const CampanhaDAO = require('./DAOs/campanha.dao');

const campanhaDao = new CampanhaDAO();

export async function list(request){
    const { params } = request;
    
    return await campanhaDao.findAll(params);
};

export function retornaArrayCampanha(campanha){
    let campanhaArray = [];
    campanha.array.forEach(element => {
        campanhaArray.push(element.id,element.attributes.name)
       /* campanhaArray.id_campanha = element.id  
        campanhaArray.nome = element.attributes.name*/
    });
    console.log(campanhaArray);
    return campanhaArray
};
