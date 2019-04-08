/**
 * @param  {Object} formValues
 * @param  {string} formValues.comments
 * @return {Object}
 */
export const adaptFormValues = ({ comments, ...extraFormValues }) => ({
  comment: comments,
  ...extraFormValues,
});
