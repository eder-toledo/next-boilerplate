import NextCrud, { PrismaAdapter } from "@premieroctet/next-crud";
import { db } from "../../server/db";
import { type NextApiRequest, type NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const nextCrudHandler = await NextCrud({
    adapter: new PrismaAdapter({
      prismaClient: db,
    }),
  });

  return nextCrudHandler(req, res);
};

export default handler;
