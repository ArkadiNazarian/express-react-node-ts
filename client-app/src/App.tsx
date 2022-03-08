import { Container } from './Container';
import { View } from './View';

export function App() {
  const props = Container()
  return <View {...props}
  // email={props.email}
  // password={props.password}
  // handleChange={props.handleChange}
  // form_data={props.form_data}
  // action_submit={props.action_submit}
  // form_errors={props.form_errors}
  />
}