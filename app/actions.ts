'use server'

import webpush from 'web-push'

webpush.setVapidDetails(
    'mailto:schaar.juergen@gmail.com',
    process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY!,
    process.env.VAPID_PRIVATE_KEY!
)

let subscription: PushSubscription | null = null

export async function subscribeUser(sub: PushSubscription) {
    subscription = sub
    // In a production environment, you would want to store the subscription in a database
    // For example: await db.subscriptions.create({ data: sub })
    return { success: true }
}

export async function unsubscribeUser() {
    subscription = null
    // In a production environment, you would want to remove the subscription from the database
    // For example: await db.subscriptions.delete({ where: { ... } })
    return { success: true }
}

export async function sendNotification(message: string) {
    if (!subscription) {
        throw new Error('No subscription available')
    }

    try {
        const pushSubscription = {
            endpoint: 'https://172.16.8.123/push-subscription',
            keys: {
                auth: 'some-auth-secret',
                p256dh: 'some-p256dh-key'
            }
        };

        webpush.sendNotification(pushSubscription, message);
        return { success: true }
    } catch (error) {
        console.error('Error sending push notification:', error)
        return { success: false, error: 'Failed to send notification' }
    }
}

export async function sendNotification1(message: string) {
    if (!subscription) {
        throw new Error('No subscription available')
    }

    try {
        const pushSubscription = {
            endpoint: 'https://example.com/push-subscription',
            keys: {
                auth: 'some-auth-secret',
                p256dh: 'some-p256dh-key'
            }
        };
        await webpush.sendNotification(

            pushSubscription,
            JSON.stringify({
                title: 'Test Notification',
                body: message,
                icon: '/icon.png',
            })
        )
        return { success: true }
    } catch (error) {
        console.error('Error sending push notification:', error)
        return { success: false, error: 'Failed to send notification' }
    }
}