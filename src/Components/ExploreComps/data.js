import restaurant1 from '../../assets/images/restaurant1.png';
import restaurant2 from '../../assets/images/restaurant2.png';
import restaurant3 from '../../assets/images/restaurant3.png';

import restaurant4 from '../../assets/images/restaurant4.png';
import restaurant5 from '../../assets/images/restaurant5.png';
import restaurant6 from '../../assets/images/restaurant6.png';
import restaurant7 from '../../assets/images/restaurant7.png';
import restaurant8 from '../../assets/images/restaurant8.png';
import restaurant9 from '../../assets/images/restaurant9.png';

import { Link } from 'react-router-dom';


export const RestaurantData = [
    {
        img: restaurant1, 
        alt: 'Coffee and a pastry item on a table',
        name: 'Starbucks',
        desc: 'Breakfasts, soups, salads, and sandwiches',
    },
    {
        img: restaurant2, 
        alt: '3 people holding coffee',
        name: 'Costa Coffee',
        desc: 'Barista style coffee wherever you are',
    },
    {
        img: restaurant3, 
        alt: 'A selection of pastries',
        name: 'Dough & Go',
        desc: 'A selection of pastries, cakes and coffee',
    }
]

export const RestaurantData2 = [
    {
        img: restaurant4, 
        alt: 'Chips and a sandwich',
        name: 'The Artisan',
        desc: 'Breakfasts, soups, salads, and sandwiches',
    },
    {
        img: restaurant5, 
        alt: '',
        name: <Link to='/restaurant'>The Patty Shack</Link>,
        desc: 'Barista style coffee wherever you are',
    },
    {
        img: restaurant6, 
        alt: '',
        name: 'Originals',
        desc: 'A selection of pastries, cakes and coffee',
    },
    {
        img: restaurant7, 
        alt: 'Coffee and a pastry item on a table',
        name: 'The Artisan',
        desc: 'Breakfasts, soups, salads, and sandwiches',
    },
    {
        img: restaurant8, 
        alt: '3 people holding coffee',
        name: 'The Artisan',
        desc: 'Barista style coffee wherever you are',
    },
    {
        img: restaurant9, 
        alt: 'A selection of pastries',
        name: 'The Artisan',
        desc: 'A selection of pastries, cakes and coffee',
    }
]