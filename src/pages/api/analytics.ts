import type { APIRoute } from 'astro';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    
    // Privacy-safe event logging (no IP or invasive cookies stored)
    if (import.meta.env.DEV) {
      console.log('[Analytics Ingestion]', body.event, body.data);
    }

    return new Response(JSON.stringify({ success: true, timestamp: Date.now() }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-store'
      }
    });
  } catch (err) {
    return new Response(JSON.stringify({ success: false, error: 'Invalid payload' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};

