// rover 1
export const SET_POSITION_R1 = "SET_POSITION_R1";
export const EXECUTE_CMD_DIR1 = "EXECUTE_CMD_DIR1";
export const EXECUTE_CMD_MV1 = "EXECUTE_CMD_MV1";

// rover 2
export const SET_POSITION_R2 = "SET_POSITION_R2";
export const EXECUTE_CMD_DIR2 = "EXECUTE_CMD_DIR2";
export const EXECUTE_CMD_MV2 = "EXECUTE_CMD_MV2";

// export const setPosR1 = (dataObject, r0) => (

//     return {
//   type: SET_POSITION_R1,
//   payload: dataObject,
//   danger: false
// });
export const setPosR = (dataObject, r1) => {
  const type = r1 === 1 ? SET_POSITION_R1 : SET_POSITION_R2;
  return {
    type: type,
    payload: dataObject,
    danger: false
  };
};

// export const executeCMDdir1 = dataObject => ({
//   type: EXECUTE_CMD_DIR1,
//   payload: dataObject,
//   danger: false
// });

export const executeCMDdir = (dataObject, r1) => {
  const type = r1 === 1 ? EXECUTE_CMD_DIR1 : EXECUTE_CMD_DIR2;
  return {
    type: type,
    payload: dataObject,
    danger: false
  };
};

// export const executeCMDmv1 = dataObject => ({
//   type: EXECUTE_CMD_MV1,
//   payload: dataObject
// });

export const executeCMDmv = (dataObject, r1) => {
  const type = r1 === 1 ? EXECUTE_CMD_MV1 : EXECUTE_CMD_MV2;
  return {
    type: type,
    payload: dataObject
  };
};
