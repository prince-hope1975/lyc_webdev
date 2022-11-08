// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { fetchAll, fetchDb } from "./(helpers)";
type Data = {
  data: boolean;
  address: string | null;
  error: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Partial<Data>>
) {
  const reqData = req.body;

  const jsonFormattedData = !!reqData
    ? JSON.parse(reqData)
    : { password: "", address: "" };
  console.log({ jsonFormattedData });
  const { password }: { password: string } = jsonFormattedData;

  switch (req.method?.toUpperCase()) {
    case "POST":
      if (!password)
        return res.status(400).send({ error: `No password Exists` });

      const snapshot: { [key: string]: { address: string; password: string } } =
        await fetchAll();
      let modifiedSnapShot = {} as typeof snapshot;
      Object.entries(snapshot).forEach(([key, val]) => {
        modifiedSnapShot[key.toLocaleUpperCase()] = {
          ...val,
          password: password.toUpperCase(),
        };
      });
      const entries = Object.keys(modifiedSnapShot);

      const bool = entries.includes(password.toUpperCase());
      // console.log({ modifiedEntry, bool });
      res.status(200).send({
        data: bool,
        address: modifiedSnapShot[password.toLocaleUpperCase()]?.address || "",
      });

      break;
    default:
      res.status(500).send({ error: `Wrong API METHOD ${req.method}` });
      break;
  }
}
