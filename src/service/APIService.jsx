/**
 * List of API consume services
 */
import axios from "axios";

export const getDoctorData = async () => {
  const url = "https://run.mocky.io/v3/c9a2b598-9c93-4999-bd04-0194839ef2dc";
  return new Promise((resolve, reject) => {
    axios
      .get(url)
      .then((res) => {
        resolve(res.data.data);
      })
      .catch((err) => reject(err));
  });
};
