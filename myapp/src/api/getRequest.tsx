import axios from "axios";

const Api = axios.create({
  baseURL: "https://dummyjson.com/users",
});

export const GetDatas = async () => {
  try {
    const response = await Api.get("/");
    if (response.status !== 200) {
      throw new Error("Error");
    }
    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    } else {
      console.log("An unexpected error occurred.");
    }
  }
};

export const GetSingleUser = async (id: number) => {
  try {
    const response = await Api.get(`/${id}`); 
    if (response.status !== 200) {
      throw new Error(response.status.toString());
    }
    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    } else {
      console.log("An unexpected error occurred.");
    }
  }
};
