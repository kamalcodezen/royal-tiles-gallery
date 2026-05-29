
import { NextResponse } from 'next/server'
import { auth } from './lib/auth';



export async function proxy(request) {
    // console.log(request, "rq")
    const session = await auth.api.getSession({
        headers: request.headers,
    });

    if (session) {
        return NextResponse.next()
    }
    return NextResponse.redirect(new URL('/login', request.url))
}

export const config = {
    matcher: ['/profile',
        "/tileDetails/:id*"],
}