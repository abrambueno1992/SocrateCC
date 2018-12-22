export const SET_POSITION_R1 = "SET_POSITION_R1";

export const setPosR1 = dataObject => ({
  // return dipatch => {
  //   dispatch({
  type: SET_POSITION_R1,
  payload: dataObject,
  danger: false
  // });
  // };
});

export const EXECUTE_CMD_DIR1 = "EXECUTE_CMD_DIR1";
export const executeCMDdir1 = dataObject => ({
  type: EXECUTE_CMD_DIR1,
  payload: dataObject,
  danger: false
});
