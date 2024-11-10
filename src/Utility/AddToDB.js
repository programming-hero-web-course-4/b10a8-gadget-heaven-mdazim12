import { toast, Bounce } from "react-toastify";

const getStoredMarkList = () => {
    const storedListSrt = localStorage.getItem('card');
    if (storedListSrt) {
        return JSON.parse(storedListSrt);
    } else {
        return [];
    }
};

const addToStoredReadList = (id) => {
    const storedList = getStoredMarkList();
    if (storedList.includes(id)) {
        console.log(id, 'Item already on the list');
        toast.error('Product is already in the cart!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });
    } else {
        storedList.push(id);
        const storedListSrt = JSON.stringify(storedList);
        localStorage.setItem('card', storedListSrt);
        toast.success('Product added to the cart', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }
};

const getStoredWishList = () => {
    const storedWishListSrt = localStorage.getItem('wish-list');
    if (storedWishListSrt) {
        return JSON.parse(storedWishListSrt);
    } else {
        return [];
    }
};

const addToStoredWishList = (id) => {
    const storedWishList = getStoredWishList();
    if (storedWishList.includes(id)) {
        console.log(id, 'Item already added to the wish list');
        toast.error('Item is already in the wish list!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    } else {
        storedWishList.push(id);
        const storedWishListSrt = JSON.stringify(storedWishList);
        localStorage.setItem('wish-list', storedWishListSrt);
        toast.success('Item added to the wish list', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }
};

export { addToStoredReadList, addToStoredWishList, getStoredMarkList };
