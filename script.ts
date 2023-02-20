import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
    const user = await prisma.user.create({
        data: {
            name: "Yosuaf",
            age: 19,
            email: "myousafdev@gmail.com",
            role: "ADMIN",
            preferences: {
                message: "This is a random json field",
            },
        },
    });
    console.log(user);
}

main()
    .catch((e) => {
        console.log(e);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
