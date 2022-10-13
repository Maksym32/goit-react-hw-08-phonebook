import { useDispatch } from 'react-redux';
import { setStatusFilter } from '../../Redux/filterSlice';

export const Filter = () => {

  const dispatch = useDispatch();

  const changeFilter = evt => {
    dispatch(setStatusFilter(
      evt.currentTarget.value.toLowerCase().trim()
    ));
  };

  return (
    <div>
      <h3>Find contacts by name</h3>
        <input
          type="text"
          name= "filter"
          onChange={changeFilter} />
        </div>
    )
}