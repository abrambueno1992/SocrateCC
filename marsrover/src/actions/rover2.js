export const SET_POSITION_R2 = "SET_POSITION_R2";
export const setPosR2 = dataObject => ({
  // return dispatch => {
  //   dispatch({
  type: SET_POSITION_R2,
  payload: dataObject,
  danger: false
  // });
  // };
});

export const EXECUTE_CMD_DIR2 = "EXECUTE_CMD_DIR2";
export const executeCMDdir2 = dataObject => ({
  type: EXECUTE_CMD_DIR2,
  payload: dataObject,
  danger: false
});

export const EXECUTE_CMD_MV2 = "EXECUTE_CMD_MV2";
export const executeCMDmv2 = dataObject => ({
  type: EXECUTE_CMD_MV2,
  payload: dataObject
});
