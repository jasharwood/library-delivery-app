import burger1 from './assets/images/burger1.png';
import burger2 from './assets/images/burger2.png';
import burger3 from './assets/images/burger3.png';
import burger4 from './assets/images/burger4.png';
import side1 from './assets/images/side1.png';
import side2 from './assets/images/side2.png';

import restaurant1 from './assets/images/restaurant1.png';
import restaurant2 from './assets/images/restaurant2.png';
import restaurant3 from './assets/images/restaurant3.png';

import restaurant4 from './assets/images/restaurant4.png';
import restaurant5 from './assets/images/restaurant5.png';
import restaurant7 from './assets/images/restaurant7.png';
import restaurant8 from './assets/images/restaurant8.png';
import restaurant9 from './assets/images/restaurant9.png';
import restaurant6 from './assets/images/restaurant6.png';

import { Link } from 'react-router-dom';

const LinkStyle = {
    textDecoration: "none",
    color: 'black'
};



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
        {
            id: '7',
            name: 'Sweet Potato Fries',
            desc: 'Delicious sweet potato fries seasoned with a special herb an...',
            alt: 'Sweet Potato Fries',
            price: 3.95,
            image: side2,
        },
        {
            id: '8',
            name: 'Seasoned Wedges',
            desc: 'Freshly made wedges seasoned with our own special blend of...',
            alt: 'Seasoned Wedges',
            price: 3.45,
            image: side1,
        },
    ],






    restaurant: [
        {
            id: '1',
            name: 'Starbucks',
            desc: 'Breakfasts, soups, salads, and sandwiches',
            alt: 'Starbucks',
            image: restaurant1,
        },
        {
            id: '2',
            name: 'Costa Coffee',
            desc: 'Breakfasts, soups, salads, and sandwiches',
            alt: 'Costa Coffee',
            image: restaurant2,
        },
        {
            id: '3',
            name: 'Dough & Go',
            desc: 'Pastries, cakes and coffee',
            alt: 'Dough & Go',
            image: restaurant3,
        },
    ],




    recommended: [
        {
            id: '4',
            name: 'The Artisan',
            desc: 'Breakfasts, soups, salads, and sandwiches',
            alt: 'The Artisan',
            image: restaurant4,
        },
        {
            id: '5',
            name: <Link to='/restaurant' style={LinkStyle}>Patty Shack</Link>,
            desc: 'Burgers, chips and onion rings',
            alt: 'Patty Shack',
            image: restaurant5,
        },
        {
            id: '6',
            name: 'Originals',
            desc: 'Traditional mains, pre-made salads and breakfast options',
            alt: 'Originals',
            image: restaurant6,
        },
        {
            id: '7',
            name: 'The Artisan',
            desc: 'Burgers, chips and onion rings',
            alt: 'The Artisan',
            image: restaurant7,
        },
        {
            id: '8',
            name: 'The Artisan',
            desc: 'Traditional mains, pre-made salads and breakfast options',
            alt: 'The Artisan',
            image: restaurant8,
        },
        {
            id: '9',
            name: 'The Artisan',
            desc: 'Traditional mains, pre-made salads and breakfast options',
            alt: 'The Artisan',
            image: restaurant9,
        },
    ],




    library: [
        {
            id: '1',
            floor: 'Lower Ground Floor',
            number: '0201',
        },
        {
            id: '2',
            floor: 'Lower Ground Floor',
            number: '0202',
        },
        {
            id: '3',
            floor: 'Lower Ground Floor',
            number: '0203',
        },
        {
            id: '4',
            floor: 'Lower Ground Floor',
            number: '0204',
        },
        {
            id: '5',
            floor: 'Lower Ground Floor',
            number: '0205',
        },
        {
            id: '6',
            floor: 'Lower Ground Floor',
            number: '0206',
        },
        {
            id: '7',
            floor: 'Lower Ground Floor',
            number: '0207',
        },
        {
            id: '8',
            floor: 'Lower Ground Floor',
            number: '0208',
        },
        {
            id: '9',
            floor: 'Lower Ground Floor',
            number: '0209',
        },
        {
            id: '10',
            floor: 'Lower Ground Floor',
            number: '0210',
        },
        {
            id: '11',
            floor: 'Lower Ground Floor',
            number: '0211',
        },

        {
            id: '12',
            floor: 'First Floor',
            number: '1356',
        },
        {
            id: '13',
            floor: 'First Floor',
            number: '1357',
        },
        {
            id: '14',
            floor: 'First Floor',
            number: '1358',
        },
        {
            id: '15',
            floor: 'First Floor',
            number: '1359',
        },
        {
            id: '16',
            floor: 'Second Floor',
            number: '2104',
        },
        {
            id: '17',
            floor: 'Second Floor',
            number: '2105',
        },
        {
            id: '18',
            floor: 'Second Floor',
            number: '2106',
        },
        {
            id: '19',
            floor: 'Second Floor',
            number: '2108',
        },
        {
            id: '20',
            floor: 'Second Floor',
            number: '2109',
        },
        {
            id: '21',
            floor: 'Third Floor',
            number: '3201',
        },
        {
            id: '22',
            floor: 'Third Floor',
            number: '3202',
        },
        {
            id: '23',
            floor: 'Third Floor',
            number: '3203',
        },
        {
            id: '24',
            floor: 'Third Floor',
            number: '3204',
        },
        {
            id: '25',
            floor: 'Third Floor',
            number: '3205',
        },
        {
            id: '26',
            floor: 'Third Floor',
            number: '3206',
        },
        {
            id: '27',
            floor: 'Third Floor',
            number: '3207',
        },
        
    ],
};

export default data;