import prisma from "@/prisma/client";
import { ModuleInterface } from "@/types";

export default async function getUserByEmail(email: string, module: ModuleInterface) {
    const res = await prisma.user.findFirst({
        where: {
            email
        }
    });

    return res;
}