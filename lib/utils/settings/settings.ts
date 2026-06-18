"use server";

import { prisma } from "@/lib/prisma";
import {revalidatePath} from "next/cache";

function revalidatePaths () {
    revalidatePath("/dashboard");
    revalidatePath("/kanban");
    revalidatePath("/table");
}

export async function updateSettings(formData: FormData) {
    let settings = await prisma.settings.findFirst();

    if (!settings) {
        settings = await prisma.settings.create({
            data: {},
        });
    }

    await prisma.settings.update({
        where: {
            id: settings.id,
        },
        data: {
            contactDelay: Number(formData.get("contactDelay")),
            advanceFromBacklogDelay: Number(
                formData.get("advanceFromBacklogDelay")
            ),
        },
    });
    revalidatePaths()
}
export async function getSettings() {
    let settings = await prisma.settings.findFirst();

    if (!settings) {
        settings = await prisma.settings.create({
            data: {},
        });
    }
    revalidatePaths()
    return settings;
}