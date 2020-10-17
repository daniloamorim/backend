import Images from '../models/Images';
import Image from '../models/Images';


export default{
    render(image: Image) {
        return {
            id: image.id,
            url: `http://localhost:3333/uploads/${image.path}`,
        };
    },

    renderMany(Image: Image[]) {
        return Image.map( Images => this.render(Images));
    }
};