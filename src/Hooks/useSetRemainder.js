import React from 'react'

const useSetRemainder = (remaining, price, setInStock) => {
    React.useEffect(() => {
        if (remaining["$" + price] <= 0) {
            setInStock(false);
        }
    }, [remaining, price, setInStock]);
}

export default useSetRemainder