import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

const products = [
  {
    id: 1,
    name: "Throwback Hip Bag",
    href: "#",
    color: "Salmon",
    price: "$90.00",
    quantity: 1,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg",
    imageAlt:
      "Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.",
  },
  {
    id: 2,
    name: "Medium Stuff Satchel",
    href: "#",
    color: "Blue",
    price: "$32.00",
    quantity: 1,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg",
    imageAlt:
      "Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
  },
  // More products...
];

export default function Cart() {
  const [open, setOpen] = useState(true);

  return (
    <>
     {/* <!-- breadcrumb --> */}
     <div class="container py-4 flex items-center gap-3">
        <a href="../index.html" class="text-primary text-base">
            <i class="fa-solid fa-house"></i>
        </a>
        <span class="text-sm text-gray-400">
            <i class="fa-solid fa-chevron-right"></i>
        </span>
        <p class="text-gray-600 font-medium">Shopping Cart</p>
    </div>
    {/* <!-- ./breadcrumb --> */}

    <div className="flex h-full flex-row  bg-white shadow-xl w-full justify-evenly">
      <div className=" px-4 py-6 sm:px-6">
        <div className="mt-8">
          <div className="flow-root">
            <ul role="list" className="-my-6 divide-y divide-gray-200">
              {products.map((product) => (
                <li key={product.id} className="flex py-6">
                  <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                    <img
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>

                  <div className="ml-4 flex flex-1 flex-col">
                    <div>
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <h3>
                          <a href={product.href}>{product.name}</a>
                        </h3>
                        <p className="ml-4">{product.price}</p>
                      </div>
                      <p className="mt-1 text-sm text-gray-500">
                        {product.color}
                      </p>
                    </div>
                    <div className="flex flex-1 items-end justify-between text-sm">
                      <p className="text-gray-500">Qty {product.quantity}</p>

                      <div className="flex">
                        <button
                          type="button"
                          className="font-medium text-indigo-600 hover:text-indigo-500"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className=" border-gray-200 px-4 py-6 sm:px-6 bg-gray-100 mt-10">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Order Summary</h2>
        <div className="flex justify-between text-base font-medium text-gray-900 mx-3 mb-2">
            <p>Subtotal</p>
            <p>$262.00</p>
        </div>
        <div className="flex justify-between text-base font-medium text-gray-900 mx-3 mb-2">
            <p>Shipping Charges</p>
            <p>$62.00</p>
        </div>
        <div className="flex justify-between text-base font-medium text-gray-900 mx-3 mb-2">
            <p>Discount</p>
            <p>$62.00</p>
        </div>
        <div className="flex justify-between text-base font-medium text-gray-900 mx-3 mb-2">
            <p>Order Total</p>
            <p>$62.00</p>
        </div>
        <p className="mt-1 text-sm text-gray-500">
            Shipping and taxes calculated at checkout.
        </p>
        <div className="mt-6">
            <a
            href="#"
            className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
            >
            Checkout
            </a>
        </div>
        <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
            <p>
            or{" "}
            <button
                type="button"
                className="font-medium text-indigo-600 hover:text-indigo-500"
                onClick={() => setOpen(false)}
            >
                Continue Shopping
                <span aria-hidden="true"> &rarr;</span>
            </button>
            </p>
        </div>
        </div>

    </div>
    </>
  );
}
