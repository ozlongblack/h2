// @flow

import axios from 'axios';
import {
  type Either,
  Left,
  Maybe,
  Right,
} from 'monet';

const BASE_URL: string =
  Maybe.fromNull(process.env.REACT_APP_API_URL)
    .orSome('');

export default {
  getList(): Promise<*> {
    return axios.get(`${BASE_URL}/entries?category=animals&https=true`)
      .then((result: Object): Either<Object> => Right(result.data))
      .catch((error: Error): Either<string> => Left(error.message));
  },
};
