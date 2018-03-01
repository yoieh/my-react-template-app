/**
 * @flow
 * Project: my-react-template-app
 * Author: Johan Nilsson (johan.nilsson@nerdsofsweden.se)
 * Copyright 2017 - 2018 Golfhaftet, OnTee
 */

import reducer from "./reducers";

import * as duckSelectors from "./selectors";
import * as duckActions from "./actions";
import * as duckType from "./types";

export {
  duckSelectors,
  duckActions,
  duckType
};

export default reducer;