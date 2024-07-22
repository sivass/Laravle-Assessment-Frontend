const calculateShipping = (cart) => {
    const weight = cart.reduce((sum, item) => sum + item.weight, 0);
    return weight * 0.5;
  };
  export default calculateShipping;