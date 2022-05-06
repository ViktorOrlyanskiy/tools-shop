import img1 from '../image/img1.jpg';
import img2 from '../image/img2.jpg';
import img3 from '../image/img3.jpg';
import img4 from '../image/img4.jpg';
import img5 from '../image/img5.jpg';
import img6 from '../image/img6.jpg';
import img7 from '../image/img7.jpg';
import img8 from '../image/img8.jpg';
import img9 from '../image/img9.jpg';
import img10 from '../image/img10.jpg';


export const GetImg = ({ id }) => {

    switch (id) {
        case 'img1':
            return (
                <img src={img1} alt={`${id}`}></img>
            )
        case 'img2':
            return (
                <img src={img2} alt={`${id}`}></img>
            )
        case 'img3':
            return (
                <img src={img3} alt={`${id}`}></img>
            )
        case 'img4':
            return (
                <img src={img4} alt={`${id}`}></img>
            )
        case 'img5':
            return (
                <img src={img5} alt={`${id}`}></img>
            )
        case 'img6':
            return (
                <img src={img6} alt={`${id}`}></img>
            )
        case 'img7':
            return (
                <img src={img7} alt={`${id}`}></img>
            )
        case 'img8':
            return (
                <img src={img8} alt={`${id}`}></img>
            )
        case 'img9':
            return (
                <img src={img9} alt={`${id}`}></img>
            )
        case 'img10':
            return (
                <img src={img10} alt={`${id}`}></img>
            )
        default:
            return ('')
    }

}