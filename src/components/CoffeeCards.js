const espresso = require('../images/espresso.jpg');
const cappuccino = require('../images/cappuccino.jpg');
const turkishCoffee = require('../images/turkishcoffee.jpg');
const latte = require('../images/latte.jpg');
const coldcoffee = require('../images/coldcoffee.jpg');
const mocha = require('../images/mocha.jpg');

export default function CoffeeCards() {

    return(
        <div className="min-w-85% bg-[#1B1D1F] text-white flex flex-col justify-center items-center mt-44 rounded-xl">
            <div className='w-3/4 mx-6 my-24 justify-center items-center'>
                <h1 className='text-4xl font-display text-center'>Our Collection</h1>
                <h2 className='text-s font-display text-center'>Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.</h2>
            </div>
            <div className='w-3/4 mx-10 my-24 justify-center items-center'>
            <ul className=" flex flex-row justify-evenly items-center">
                <li>
                    <img alt="" src={espresso} className="w-60 h-48 rounded-xl" />
                    <div className='flex justify-between'>
                        <span>Espresso</span>
                        <span className="px-1 rounded bg-amber-400 text-black">100₺</span>
                    </div>
                </li>
                <li>
                    <img alt="" src={cappuccino} className="w-60 h-48 rounded-xl" />
                    <p>Cappuccino</p>
                    <p>75₺</p>
                </li>
                <li>
                    <img alt="" src={turkishCoffee} className="w-60 h-48 rounded-xl" />
                    <p>TÜRK Kahvesi</p>
                    <p>125₺</p>
                </li>
            </ul>
            <ul className="w-full flex flex-row justify-evenly items-center mt-14 pb-14">
                <li>
                        <img alt="" src={coldcoffee} className="w-60 h-48 rounded-xl" />
                        <p>Cold Coffee</p>
                        <p>100₺</p>
                    </li>
                    <li>
                        <img alt="" src={mocha} className="w-60 h-48 rounded-xl" />
                        <p>Mocha</p>
                        <p>75₺</p>
                    </li>
                    <li>
                        <img alt="" src={latte} className="w-60 h-48 rounded-xl" />
                        <p>Latte</p>
                        <p>125₺</p>
                    </li>
            </ul>
            </div>
        </div>
    )
}