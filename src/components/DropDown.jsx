import styles from '@/styles/Index.module.css'
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { updateDropDown } from "../redux/reducers/dropdownReducer";
import constants from "../utils/constants";

export const DropDown = (props) => {
    const { id } = props;
    const dispatch = useDispatch();
    const setDropDown = useSelector(state => state.dropdown.setDropDown);
    const dropDownId = useSelector(state => state.dropdown.dropDownId);
    return (
        <Image
            src={setDropDown && id === dropDownId ? constants.EXPANDLESSICON : constants.EXPANDMOREICON}
            alt={setDropDown && id === dropDownId ? constants.EXPANDLESSALT : constants.EXPANDMOREALT}
            width={20}
            height={20}
            onClick={() => dispatch(updateDropDown(id))}
        />
    )
}