export default function Header(propes) {
    return (
        <>
            <div className="add-to-cart">
                <img width={70} src="https://e7.pngegg.com/pngimages/833/426/png-clipart-shopping-cart-icon-shopping-cart-black-design.png" />
                {
                    propes.cartData.length > 0 ?
                        <span>{propes.cartData.length}</span> :
                        null
                }
            </div>
        </>
    )
}