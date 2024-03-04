import axios from "axios";

export async function getAllUser() {
  return axios.get("https://fakestoreapi.com/users").then((res) => res.data);
}

export async function userLogin(user: string, password: string) {
  return axios
    .post("https://fakestoreapi.com/auth/login", {
      username: user,
      password: password,
    })
    .then((res) => res.data);
}

export async function getAllProducts() {
  return axios.get("https://fakestoreapi.com/products").then((res) => res.data);
}

export async function getAllCategories() {
  return axios
    .get("https://fakestoreapi.com/products/categories")
    .then((res) => res.data);
}

export async function getUserCart(userId: number) {
  return axios
    .get("https://fakestoreapi.com/carts/" + userId)
    .then((res) => res.data);
}
