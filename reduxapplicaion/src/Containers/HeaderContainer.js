import { connect } from "react-redux";
import Header from "../Component/Header";

const mapStateToPropes = state => ({
    cartData: state.cartItem
})

const mapDispatchToPropes = dispatch => ({
})

export default connect(mapStateToPropes, mapDispatchToPropes)(Header);