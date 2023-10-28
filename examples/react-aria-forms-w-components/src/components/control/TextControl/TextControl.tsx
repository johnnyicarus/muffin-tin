import {
  Label,
  TextField as RaTextField,
  TextFieldProps,
} from 'react-aria-components';
import { TextField } from '../../partials/TextField/TextField';

export function TextControl(props: TextFieldProps) {
  return (
    <RaTextField {...props}>
      <Label>First name</Label>
      <TextField padding={3} className="example" />
    </RaTextField>
  );
}
