import burger1 from './assets/images/burger1.png';
import burger2 from './assets/images/burger2.png';
import burger3 from './assets/images/burger3.png';
import burger4 from './assets/images/burger4.png';
import side1 from './assets/images/side1.png';
import side2 from './assets/images/side2.png';

const data = {
    products: [
        {
            id: '1',
            name: 'The Bacon Patty Stack',
            desc: '6oz freshly prepared patty shack steak topped with; bacon, chedd...',
            alt: 'Burger',
            price: 11.95,
            image: burger1,
        },
        {
            id: '2',
            name: 'The Fire Patty',
            desc: '6oz freshly prepared patty shack steak topped with; cheddar chee...',
            alt: 'Burger',
            price: 10.95,
            image: burger2,
        },
        {
            id: '3',
            name: 'The Dirty Vegan',
            desc: 'Beyond meat vegan burger patty topped with; applewood smoked...',
            alt: 'Burger',
            price: 10.95,
            image: burger3,
        },
        {
            id: '4',
            name: 'The Cheesy Patty',
            desc: '6oz freshly prepared patty shack steak topped with; cheddar chee...',
            alt: 'Burger',
            price: 10.95,
            image: burger4,
        },
        {
            id: '5',
            name: 'Seasoned Wedges',
            desc: 'Freshly made wedges seasoned with our own special blend of...',
            alt: 'Seasoned Wedges',
            price: 3.45,
            image: side1,
        },
        {
            id: '6',
            name: 'Sweet Potato Fries',
            desc: 'Delicious sweet potato fries seasoned with a special herb an...',
            alt: 'Sweet Potato Fries',
            price: 3.95,
            image: side2,
        },
    ],
};

export default data;