import { Icon } from '@iconify/react';
import { Ads } from 'complement/ads';
export default function Page() {
    return (
        
        <main className="flex flex-col gap-8 sm:gap-16">
            <Ads></Ads>
            <h1> f en el chat<Icon icon="mdi:home" /></h1>
            <Ads></Ads>
        </main>
        
    );
}