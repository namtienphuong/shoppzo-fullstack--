import React, { useState } from 'react'
import { useAppContext } from '../(context)/AppContext'
import Image from 'next/image'
import { Minus, Plug, Plus, ShoppingBasket } from 'lucide-react'
import { Button } from '@/components/ui/button'

function ProductDetails({ product }) {
    const { currency } = useAppContext()
    const [quantity, setQuantity] = useState(1)
    const [price, setPrice] = useState(product.offerPrice ? product.offerPrice : product.price)


    return (
        <div className='flex flex-col gap-7 md:flex-row'>
            <Image src={product?.images[0]} alt='itemImage' height={277} width={277} unoptimized={true} />
            {/* {INFO} */}
            <div className='p-3 max-w-sm md:my-auto'>
                <h4 className='text-xl'>{product.name}</h4>
                <p className='font-bold pt-1'>{product.categories[0]}</p>
                <div className='flexBetween pt-2'>
                    <div className='flex items-center gap-x-2'>
                        <h5>Color:</h5>
                        <p className="font-bold">{product.color}</p>
                    </div>
                    <div className='flex items-center gap-x-2'>
                        <h5>Price:</h5>
                        <p className="font-bold">{currency}{product.price}</p>
                    </div>
                    {product.offerPrice &&
                        <div className='flex items-center gap-x-2'>
                            <h5>Offer Price:</h5>
                            <p className="font-bold">{currency}{product.price}</p>
                        </div>
                    }
                </div>
                <p className='line-clamp-2 py-1 pr-3'>{product.description}</p>
                <div className='flexBetween mt-3'>
                    <div className='flex items-center ring-1 ring-slate-900/15 bg-secondary rounded-full overflow-hidden'>
                        <Button className='p-1.5! h-8! w-8! m-0.5 bg-primary text-white rounded-full shadow-md cursor-pointer'>
                            <Minus size={17} />
                        </Button >
                        <p className='px-2'>{quantity}</p>
                        <Button className='p-1.5! h-8! w-8! m-0.5 bg-primary text-white rounded-full shadow-md cursor-pointer'>
                            <Plus size={17} />
                        </Button>
                    </div>
                    <div className='flex items-center gap-x-2'>
                        <h5>SubTotal:</h5>
                        <p className="font-bold">{currency}{price * quantity}</p>
                    </div>
                </div>
                <Button className={"mt-5"}>
                    <ShoppingBasket></ShoppingBasket>
                    Add to Cart
                </Button>
            </div>
        </div>
    )
}

export default ProductDetails