const NewCartData = [];

const addCart = (newCart) => {
    if (Array.isArray(newCart) && newCart.length > 0) {
        NewCartData.push(...newCart);
    }
};

export { NewCartData, addCart };
