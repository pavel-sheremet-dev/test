import { useDispatch, useSelector } from 'react-redux';
import { filterChange } from 'redux/contacts/slice';
import { selectFilter } from 'redux/contacts/selectors';
import { Label, Input } from './Filter.styled';

const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  return (
    <Label>
      Find contacts by name
      <Input
        type="text"
        value={filter}
        onChange={event => dispatch(filterChange(event.target.value))}
      />
    </Label>
  );
};

export default Filter;
