import { MdDeleteForever } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux"
import { removeUser } from "../store/slices/UserSlice";

export default function DisplayUser() {

    const dispatch = useDispatch();

    const data = useSelector((state) => {
        return state.user;
    });

    const deleteUser = (payload) => {
        dispatch(removeUser(payload));
    }
    return (
        <>
            {
                data.map((element, id) => {
                    return <li key={id} className="displayLi">{element}
                        <button className="btn-delete" onClick={() => { deleteUser(id) }}>
                            <MdDeleteForever className="delete-icon" />
                        </button>
                    </li>
                })
            }
        </>
    )
}