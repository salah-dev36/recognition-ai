export const calculateFaceBoxes = (boxes = [], dimensions) => {
  const { width, height } = dimensions;

  const faceBoxStyles = boxes.map((box) => {
    const { top_row, left_col, bottom_row, right_col } = box;
    return {
      width: width * Number(right_col - left_col),
      height: height * Number(bottom_row - top_row),
      top: Number(top_row) * height,
      left: Number(left_col) * width,
    };
  });
  return faceBoxStyles;
};
