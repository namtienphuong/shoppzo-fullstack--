import { dummyProducts } from '@/public/data'
import { useRouter } from 'next/navigation'
import React, { createContext, useContext, useEffect, useState } from 'react'
import axios from 'axios'

axios.defaults.baseURL = process.env.NEXT_PUBLIC_BACKEND_URL || ""

const AppContext = createContext()

const AppContextProvider = ({ children }) => {
    const currency = "$"
    const [categories, setCategories] = useState([])
    const [products, setProducts] = useState([])
    const [subTotal, setSubTotal] = useState(0)
    const [totalAmount, setTotalAmount] = useState(0)
    const router = useRouter()


    const getCategories = async () => {
        try {
            const res = await axios.get("/api/categories")
            if (res.data) {
                console.log(res.data)
                setCategories(res.data.data)
            }
        } catch (error) {
            console.log(error)
        }
    }


    useEffect(() => {
        getCategories()
        setProducts(dummyProducts)
    }, [])

    const value = {
        currency,
        categories,
        products,
        subTotal,
        setSubTotal,
        totalAmount,
        setTotalAmount,
        router
    }
    return (
        <AppContext.Provider value={value}>{children}</AppContext.Provider>
    )
}

export default AppContextProvider

export const useAppContext = () => useContext(AppContext)

