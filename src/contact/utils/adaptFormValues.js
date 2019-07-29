/**
 * @param  {Object} formValues
 * @param  {string} formValues.comments
 * @return {Object}
 */
export const adaptFormValues = ({
  comments,
  property,
  dates: { startDate, endDate } = {},
  ...extraFormValues
}) => ({
  comment: comments,
  endDate,
  propertyId: property,
  startDate,
  ...extraFormValues,
});
