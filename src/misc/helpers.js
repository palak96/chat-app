/* eslint-disable arrow-body-style */
export function getNameInitials(name) {
  const splitName = name.toUpperCase().split(' ');
  if (splitName.length > 2) {
    return splitName[0][0] + splitName[1][0] + splitName[2][0];
  }
  if (splitName.length === 2) {
    return splitName[0][0] + splitName[1][0];
  }
  return splitName[0][0];
}

export function transformToArrWithId(snapVal) {
  return snapVal
    ? Object.keys(snapVal).map(roomId => {
        return { ...snapVal[roomId], id: roomId };
      })
    : [];
}
