export default function Home(propes) {
    console.log('propes :>> ', propes);
    return (
        <>

            <h1>Home Component</h1>
            <div className="cart-wraper">
                <div className="img-wraper item">
                    <img src="https://w7.pngwing.com/pngs/450/269/png-transparent-space-gray-iphone-x-showing-ios-and-iphone-4-iphone-8-plus-iphone-5-iphone-x-iphone-apple-gadget-electronics-mobile-phone-thumbnail.png" />
                </div>
                <div className="text-wraper item">
                    <span>
                        I-Phone&nbsp;
                    </span>
                    <span>
                        Price: $1000.00
                    </span>
                </div>
                <div className="btn-wraper item">
                    <button className="btn-1" onClick={() =>
                        propes.addToCartHandler({ name: "I-Phone", price: 1000 })
                    }>Add To Cart</button>
                    <button className="btn-2" onClick={() =>
                        propes.removeToCartHandler()
                    }>Remove From Cart</button>
                </div>
            </div>
        </>
    )
}
