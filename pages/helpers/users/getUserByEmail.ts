import prisma from "@/prisma/client";

export default async function getUserByEmail(email: string) {
    const res = await prisma.user.findFirst({
        where: {
            email
        }
    });

    return res;
}