// firebaseUtils.js
import { getDatabase, ref, child, get } from 'firebase/database';

const getTotalAmount = async (userId) => {
  const database = getDatabase();
  const cartRef = ref(database, `carts/${userId}/totalAmount`);
  const totalAmountSnapshot = await get(child(cartRef, 'totalAmount'));
  const totalAmount = totalAmountSnapshot.val();
  return totalAmount;
};

export { getTotalAmount };
