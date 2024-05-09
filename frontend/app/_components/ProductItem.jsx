import React from 'react';
import Image from 'next/image';
import { Button } from '../../components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from '../../components/ui/dialog';
import ProductItemDetail from './ProductItemDetail';

const ProductItem = ({ product }) => {
  return (
    <div className="p-2 md:p-6 flex flex-col justify-center gap-3 border rounded-lg hover:scale-105 hover:shadow-md transition-all ease-in-out">
      <div className="flex flex-row justify-center">
        <Image
          src={
            process.env.NEXT_PUBLIC_BACKEND_BASE_URL +
            product.attributes.images.data[0].attributes.url
          }
          width={400}
          height={200}
          alt={product.attributes.name}
          className="h-[200px] w-[200px] object-contain "
        />
      </div>
      <h2 className="font-bold text-lg">{product.attributes.name}</h2>
      <p className="text-sm">{product.attributes.description}</p>
      <h2
        className={`font-bold text-sm ${
          product.attributes.sellingPrice ? 'line-through text-gray-500' : null
        }`}
      >
        MRP ₹ {product.attributes.mrp}
      </h2>
      <div className="flex flex-row justify-between items-center">
        {product.attributes.sellingPrice ? (
          <h2 className="font-bold text-lg">₹ {product.attributes.sellingPrice}</h2>
        ) : null}
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" className="text-primary hover:text-white hover:bg-primary">
              Add to Cart
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogDescription>
                <ProductItemDetail product={product} />
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default ProductItem;