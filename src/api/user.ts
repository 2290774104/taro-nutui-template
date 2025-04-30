import { $get } from "@/services/index";

export const httpGetAccessToken = (params) => {
  return $get("/cgi-bin/token", params);
};
