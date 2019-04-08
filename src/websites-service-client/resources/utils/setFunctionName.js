/**
 * @param   {Function}  func
 * @param   {string}    resourceName
 * @return  {Object}
 */
export const setFunctionName = (func, resourceName) => {
  Object.defineProperty(func, 'name', {
    value: `${func.name}${resourceName
      .charAt(0)
      .toUpperCase()}${resourceName.slice(1)}`,
  });
};
