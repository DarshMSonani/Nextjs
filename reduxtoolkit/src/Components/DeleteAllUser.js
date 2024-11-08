import { useDispatch } from "react-redux"
// import { cleareAllUser } from "../store/action";
import { deleteUsers } from "../store/slices/UserSlice";

export default function DeleteAllUser() {

    const dispatch = useDispatch();

    const deleteUser = () => {
        // dispatch(cleareAllUser());
        dispatch(deleteUsers());
    }

    return (
        <>
            <button className="btn delete" onClick={deleteUser}>Clear All User</button>
        </>
    )
}