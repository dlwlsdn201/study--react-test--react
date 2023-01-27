const { createContext, useMemo, useState } = require('react');

export const OrderContext = createContext();


export const OrderContextProvider = (props) => {
  const [orderCounts, setOrderCounts] = useState({
    products: new Map(),
    options: new Map(),
  })

  const value = useMemo(() => {
    return [{...orderCounts}]
  }, [orderCounts]);
  
  return <OrderContext.Provider value={...props}/>
}