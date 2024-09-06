
// myContext.js
import React, { createContext, useState } from 'react';
import { fireDB } from '../../firebase/FirebaseConfig'; // Adjust the path as necessary
import { collection, addDoc, getDocs } from 'firebase/firestore';

const myContext = createContext();

export const MyProvider = ({ children }) => {
    // const [products, setProducts] = useState({
    //     title: '',
    //     price: '',
    //     imageUrl: '',
    //     category: '',
    //     description: ''
    // });

    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        try {
            const querySnapshot = await getDocs(collection(fireDB, "products"));
            const productsList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setProducts(productsList);
        } catch (e) {
            console.error("Error fetching products: ", e);
        }
    };

    const addProduct = async () => {
        try {
            await addDoc(collection(db, "products"), {
                title: products.title,
                price: products.price,
                imageUrl: products.imageUrl,
                category: products.category,
                description: products.description,
            });
            console.log("Product added successfully");
        } catch (e) {
            console.error("Error adding product: ", e);
        }
    };

    useEffect(() => {
        fetchProducts(); // Fetch products on component mount
    }, []);

    return (
        <myContext.Provider value={{ products, setProducts, addProduct }}>
            {children}
        </myContext.Provider>
    );
};

export default myContext;



// import React,{ createContext } from 'react';

// const mycontext = createContext();

// export default mycontext;