
import _get from 'lodash/get';
import { parse } from 'query-string';

export const qFromProps = props => _get(parse(_get(props, 'location.search', '').substr(1)), 'q', '');
