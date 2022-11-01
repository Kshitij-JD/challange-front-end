import axios from "axios";

export const getStockScan = async () => {
  try {
    const response = await axios.get("http://localhost:8184/stock-scan");
    return response.data.data.data;
  } catch (error) {
    return false;
  }
}