import { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

const handler = (req: NextApiRequest, res: NextApiResponse<Data>): void => {
  const name = "John Doe";
  res.status(200).json({ name });
};

export default handler;
