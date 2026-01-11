'use server';

// import { PrismaClient } from '@prisma/client';
import { revalidatePath } from 'next/cache';

// const prisma = new PrismaClient();

export async function submitContactForm(formData: FormData) {
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;

    if (!name || !email || !message) {
        return { success: false, error: 'Missing fields' };
    }

    try {
        // MOCK MODE: Uncomment below when DB is connected
        /*
        await prisma.contactSubmission.create({
            data: {
                name,
                email,
                message,
            },
        });
        */
        console.log('Mock Data Received:', { name, email, message });

        revalidatePath('/');
        return { success: true };
    } catch (error) {
        console.error('Failed to submit contact form:', error);
        return { success: false, error: 'Database error' };
    }
}
