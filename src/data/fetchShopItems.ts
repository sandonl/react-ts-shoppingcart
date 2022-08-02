import axios from "axios";

export type Item = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: object;
};

export async function fetchShopItems(): Promise<Item[]> {
  // 👇️ const data: GetUsersResponse
  const { data, status } = await axios.get<Item[]>(
    "https://fakestoreapi.com/products?limit=20"
  );

  console.log(JSON.stringify(data, null, 4));

  // 👇️ "response status is: 200"
  console.log("response status is: ", status);

  return data;
}
