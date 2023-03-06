import PropTypes from 'prop-types';
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { updateDropDown, updatePrevDropDown } from "../redux/reducers/dropdownReducer";
import constants from "../utils/constants";

export const DropDown = (props) => {
    const { id } = props;
    const dispatch = useDispatch();
    const setDropDown = useSelector(state => state.dropdown.setDropDown);
    const dropDownId = useSelector(state => state.dropdown.dropDownId);

    const onSetDropDown = () => {
        if(id === dropDownId) {
            dispatch(updateDropDown(id));
        } else {
            dispatch(updatePrevDropDown());
            dispatch(updateDropDown(id));
        }
    }
    return (
        <Image
            src={setDropDown && id === dropDownId ? constants.EXPANDLESSICON : constants.EXPANDMOREICON}
            alt={setDropDown && id === dropDownId ? constants.EXPANDLESSALT : constants.EXPANDMOREALT}
            width={20}
            height={20}
            onClick={() => onSetDropDown()}
        />
    )
}

DropDown.propTypes = {
    id: PropTypes.string.isRequired
}