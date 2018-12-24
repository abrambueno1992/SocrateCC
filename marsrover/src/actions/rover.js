// rover 1 constants
export const SET_POSITION_R1 = "SET_POSITION_R1";
export const EXECUTE_CMD_DIR1 = "EXECUTE_CMD_DIR1";
export const EXECUTE_CMD_MV1 = "EXECUTE_CMD_MV1";

// rover 2 constants
export const SET_POSITION_R2 = "SET_POSITION_R2";
export const EXECUTE_CMD_DIR2 = "EXECUTE_CMD_DIR2";
export const EXECUTE_CMD_MV2 = "EXECUTE_CMD_MV2";

export const setPosR = (dataObject, r1) => {
  const type = r1 === 1 ? SET_POSITION_R1 : SET_POSITION_R2;
  return {
    type: type,
    payload: dataObject,
    danger: false
  };
};

export const executeCMDdir = (dataObject, r1) => {
  const type = r1 === 1 ? EXECUTE_CMD_DIR1 : EXECUTE_CMD_DIR2;
  return {
    type: type,
    payload: dataObject,
    danger: false
  };
};

export const executeCMDmv = (dataObject, r1) => {
  const type = r1 === 1 ? EXECUTE_CMD_MV1 : EXECUTE_CMD_MV2;
  return {
    type: type,
    payload: dataObject
  };
};
