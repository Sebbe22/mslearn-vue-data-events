const app = Vue.createApp({
    data() {
        return {
            product: {
                name: 'Cruise to the moon',
                description: 'Cruise to the moon in our luxurious shuttle. Watch the astronauts working outside the International Space Station.',
                image: {
                    src: 'assets/cruise.jpg',
                    description: 'An astronaut floats outside the window while you sit in comfort',
                    style: { 'border-radius': '15px' },
                },
                cabins: [
                    { name: 'Coach', price: 125000 },
                    { name: 'Business', price: 275000 },
                    { name: 'First', price: 430000 },
                ]
            },
            booking: {
                cabinIndex: 0,
                notes: '',
                completed: false
            }
        }
    },

    // TODO: Add completed values
    // TODO: Add computed values
    computed: {
        bookingCabinDisplay() {
            const cabin = this.product.cabins[this.booking.cabinIndex]; //this.booking.cabinindex er den som "user" valgte 
            return `${cabin.name}: $ ${cabin.price.toLocaleString('en-US')}`
        }
    },


    // TODO: Add methods
    // TODO: Add methods
    methods: {
        bookCabin() {
            this.booking.completed = true;
        }
    }


});
