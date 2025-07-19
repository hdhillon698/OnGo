// OnGoPool Service Worker for PWA and Performance Optimization

const CACHE_NAME = 'ongopool-v2-production';
const CACHE_STATIC = 'ongopool-static-v2';
const CACHE_DYNAMIC = 'ongopool-dynamic-v2';

const STATIC_ASSETS = [
    '/',
    '/index.html',
    '/manifest.json',
    'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css',
    'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
    'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2',
    'https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@4.0.0/dist/tf.min.js',
    'https://js.stripe.com/v3/'
];

const CACHE_STRATEGIES = {
    images: 'cache-first',
    api: 'network-first',
    static: 'cache-first',
    dynamic: 'stale-while-revalidate'
};

// Install event - Production optimized
self.addEventListener('install', event => {
    console.log('🚀 Service Worker installing...');
    event.waitUntil(
        Promise.all([
            caches.open(CACHE_STATIC).then(cache => {
                console.log('📦 Caching static assets...');
                return cache.addAll(STATIC_ASSETS);
            }),
            self.skipWaiting() // Activate immediately
        ])
    );
});

// Activate event - Clean old caches
self.addEventListener('activate', event => {
    console.log('✅ Service Worker activated');
    event.waitUntil(
        Promise.all([
            // Clean up old caches
            caches.keys().then(cacheNames => {
                return Promise.all(
                    cacheNames.map(cacheName => {
                        if (cacheName !== CACHE_STATIC && cacheName !== CACHE_DYNAMIC) {
                            console.log('🗑️ Deleting old cache:', cacheName);
                            return caches.delete(cacheName);
                        }
                    })
                );
            }),
            self.clients.claim() // Take control immediately
        ])
    );
});

// Advanced fetch strategy
self.addEventListener('fetch', event => {
    const { request } = event;
    const url = new URL(request.url);
    
    // Skip chrome-extension and non-http requests
    if (!request.url.startsWith('http')) return;
    
    // Handle different resource types with appropriate strategies
    if (isImageRequest(request)) {
        event.respondWith(handleImageRequest(request));
    } else if (isAPIRequest(request)) {
        event.respondWith(handleAPIRequest(request));
    } else if (isStaticAsset(request)) {
        event.respondWith(handleStaticRequest(request));
    } else {
        event.respondWith(handleDynamicRequest(request));
    }
});

// Image handling - Cache first with fallback
async function handleImageRequest(request) {
    try {
        const cachedResponse = await caches.match(request);
        if (cachedResponse) return cachedResponse;
        
        const networkResponse = await fetch(request);
        if (networkResponse.ok) {
            const cache = await caches.open(CACHE_DYNAMIC);
            cache.put(request, networkResponse.clone());
        }
        return networkResponse;
    } catch (error) {
        console.log('Image fetch failed:', error);
        // Return placeholder or cached version
        return caches.match('/offline-image.svg') || new Response('Image unavailable');
    }
}

// API handling - Network first with cache fallback
async function handleAPIRequest(request) {
    try {
        const networkResponse = await fetch(request);
        if (networkResponse.ok) {
            const cache = await caches.open(CACHE_DYNAMIC);
            cache.put(request, networkResponse.clone());
        }
        return networkResponse;
    } catch (error) {
        console.log('API request failed, trying cache:', error);
        const cachedResponse = await caches.match(request);
        return cachedResponse || new Response(JSON.stringify({ error: 'Offline' }), {
            headers: { 'Content-Type': 'application/json' }
        });
    }
}

// Static assets - Cache first
async function handleStaticRequest(request) {
    const cachedResponse = await caches.match(request);
    if (cachedResponse) return cachedResponse;
    
    try {
        const networkResponse = await fetch(request);
        if (networkResponse.ok) {
            const cache = await caches.open(CACHE_STATIC);
            cache.put(request, networkResponse.clone());
        }
        return networkResponse;
    } catch (error) {
        console.log('Static asset fetch failed:', error);
        throw error;
    }
}

// Dynamic content - Stale while revalidate
async function handleDynamicRequest(request) {
    const cachedResponse = await caches.match(request);
    const networkResponsePromise = fetch(request).then(response => {
        if (response.ok) {
            const cache = caches.open(CACHE_DYNAMIC);
            cache.then(c => c.put(request, response.clone()));
        }
        return response;
    }).catch(() => cachedResponse);
    
    return cachedResponse || networkResponsePromise;
}

// Helper functions
function isImageRequest(request) {
    return request.destination === 'image' || 
           request.url.includes('ui-avatars.com') ||
           /\.(jpg|jpeg|png|gif|webp|svg)$/i.test(request.url);
}

function isAPIRequest(request) {
    return request.url.includes('supabase.co') || 
           request.url.includes('nominatim.openstreetmap.org') ||
           request.url.includes('/api/');
}

function isStaticAsset(request) {
    return STATIC_ASSETS.includes(request.url) ||
           request.url.includes('cdnjs.cloudflare.com') ||
           request.url.includes('unpkg.com') ||
           request.url.includes('cdn.jsdelivr.net');
}

// Push notification event
self.addEventListener('push', event => {
    console.log('Push received:', event);
    
    const options = {
        body: event.data ? event.data.text() : 'New notification from OnGoPool',
        icon: '/favicon.ico',
        badge: '/favicon.ico',
        vibrate: [200, 100, 200],
        data: {
            dateOfArrival: Date.now(),
            primaryKey: 1
        },
        actions: [
            {
                action: 'explore',
                title: 'View Details',
                icon: '/icons/checkmark.png'
            },
            {
                action: 'close',
                title: 'Close',
                icon: '/icons/xmark.png'
            }
        ]
    };
    
    event.waitUntil(
        self.registration.showNotification('OnGoPool', options)
    );
});

// Notification click event
self.addEventListener('notificationclick', event => {
    console.log('Notification click received:', event);
    
    event.notification.close();
    
    // Send message to main thread
    event.waitUntil(
        clients.matchAll().then(clientList => {
            if (clientList.length > 0) {
                clientList[0].postMessage({
                    type: 'NOTIFICATION_CLICK',
                    action: event.action,
                    data: event.notification.data
                });
                return clientList[0].focus();
            }
            return clients.openWindow('/');
        })
    );
});

// Background sync
self.addEventListener('sync', event => {
    if (event.tag === 'background-sync') {
        event.waitUntil(doBackgroundSync());
    }
});

function doBackgroundSync() {
    // Sync data when connection is restored
    console.log('Background sync triggered');
}