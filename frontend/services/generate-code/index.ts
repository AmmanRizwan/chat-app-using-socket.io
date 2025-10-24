import api from "../api";

interface IGetGenerateCode {
  message: string;
  data: {
    code: string;
  }
}

const getGenerateCode = async (): Promise<IGetGenerateCode> => {
  const response = await api.get("/api/generate-code/create");
  return response.data;
}

export { getGenerateCode };