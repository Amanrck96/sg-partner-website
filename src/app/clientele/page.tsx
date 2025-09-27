import Clientele from '@/components/sections/clientele';
import { Suspense } from 'react';

export default function ClientelePage() {
    return (
        <Suspense fallback={null}>
            <Clientele />
        </Suspense>
    );
}
