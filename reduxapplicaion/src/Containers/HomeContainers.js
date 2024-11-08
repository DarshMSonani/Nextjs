import { connect } from "react-redux";
import Home from "../Component/Home";
import { addToCart, removeToCart } from "../Services/Action/action"

const mapStateToPropes = state => ({
    cartData: state.cartItem
})

const mapDispatchToPropes = dispatch => ({
    addToCartHandler: data => dispatch(addToCart(data)),
    removeToCartHandler: data=>dispatch(removeToCart(data))
})

export default connect(mapStateToPropes, mapDispatchToPropes)(Home)

// export default Home;