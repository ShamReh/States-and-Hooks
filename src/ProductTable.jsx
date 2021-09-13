import { useState } from "react";

const ProductTable = ({ brand, model, colour, year }) => {

    const products = ["Apple ", "Mango ", "Kiwi "]

    const [filtered, setFiltered] = useState(["Apple ", "Mango ", "Kiwi "]);

    return (
        <>

            <input type="text"
                onChange={e => setFiltered(products.filter(product => product.includes(e.target.value)))} />
            <p>{filtered}</p>

        </>
    );
}


export default ProductTable;