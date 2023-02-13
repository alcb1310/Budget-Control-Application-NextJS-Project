// import { NextApiRequest, NextApiResponse } from 'next';
// import { getServerSession } from 'next-auth/next';
// import authOptions from "./auth/[...nextauth]";

// export default async function restricted(req, res, next) {
//     const session = await getServerSession(req, res, authOptions);

//     if (session) return next;

//     return res.status(403).json({
//         errorStatus: 403,
//         errorKey: 'session',
//         errorDescription: 'You must be logged in to access this resource'
//     });
// }s