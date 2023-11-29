import { addCart, NewCartData } from "../screens/Data/DataCart";
import { UsersData } from "../screens/Data/UserData";



const GetCardAPI = async () => {
  const id_user = parseInt(UsersData[0].id);

  try {
    const response = await fetch(
      "https://63aa9d20fdc006ba6046fffd.mockapi.io/Storyfinal",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    const cartDataArray = data.filter((cart) => cart.id_user === id_user);
    if (cartDataArray) {
      NewCartData.length = 0;
      addCart(cartDataArray);
      console.log("NewCartData123666: ", NewCartData);

    }
  } catch (error) {
    console.error("Lỗi:", error);
  }
};


const updateQuantityItem = async (id, updatequantity) => {
  console.log("updatequantity: ", updatequantity);
  const getID = id;
  try {
    const updateResponse = await fetch(
      `https://63aa9d20fdc006ba6046fffd.mockapi.io/Storyfinal/${getID}`, // Assuming CartData has an 'id' property
      {
        method: "PUT", // Or "PATCH" depending on your server's API
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          quantity: updatequantity,
        }),
      }
    );
    const updateData = await updateResponse.json();
    if (updateResponse.ok) {
    } else {
      console.error(
        "Lỗi khi cập nhật quantity trên server:",
        updateData.message || "Something went wrong"
      );
    }
  } catch (error) {
    console.error("Lỗi:", error);
  }
}

export  { updateQuantityItem, GetCardAPI }


