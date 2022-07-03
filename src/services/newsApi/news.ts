import { newsApi } from "./config";

export const getHealthNews = async () => {
  try {
    const response = await newsApi.get(
      "/top-headlines?country=br&category=health"
    );

    return response.data;
  } catch (error) {
    return {
      message: "Erro ao tentar receber dados da API",
    };
  }
};
