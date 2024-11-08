import { useDispatch, useSelector } from "react-redux";
import { fackUserData } from "../api";
import DeleteAllUser from "./DeleteAllUser";
import { addUser } from "../store/slices/UserSlice";
// import store from "../store";
import DisplayUser from "./DisplayUser";

export default function UserDetails() {

    const dispatch = useDispatch();

    const data = useSelector((state) => {
        return state.user;
    });


    let addNewUser = (payload) => {
        // console.log('payload :>> ', payload);
        dispatch(addUser(payload));
    }
    return (
        <>
            <div className="content">
                <div className="admin-table">
                    <div className="admin-subtitle">List of User Details</div>
                    <button className="btn add-btn" onClick={() => addNewUser(fackUserData())}>Add New Users</button>
                </div>
                <ul>
                    <DisplayUser />
                </ul>
                <hr />
                {
                    data.length ?
                        <DeleteAllUser />
                        : null
                }
            </div>
        </>
    )
}