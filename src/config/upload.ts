import multer from 'multer';
import path from 'path';

export default {
    //diskStorage recebe duas propriedades
    storage: multer.diskStorage({
        //destination = para onde os arquivos vão
        //path.join = as virgulas são o que fazem o papel da barra"/" ou contra barra"\"
        destination: path.join(__dirname, '..', '..', 'uploads'),
        //função callback, "cb" ele é quem da nome ao arquivo para não sobrescrever
        filename: (request, File, cb) => {
            const fileName = `${Date.now()}-${File.originalname}`;
            //cd sempre retorna um primero parametro que é um erro, logo nesse caso retorno nulo( ou coloco o erro no retorno tratado)
            cb(null, fileName);
        },
    })
};
