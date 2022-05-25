const user = {
    name: '홍길동',
    address: {
        zipCode: '123',
        city: 'Ulsan'
    }
}

const { address: { city: region } } = user;
console.log(region);

const abc = user.address.city;
console.log(abc);