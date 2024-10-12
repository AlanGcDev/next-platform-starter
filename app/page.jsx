import { Icon } from '@iconify/react';
import { Ads } from 'complement/ads';
export default function Page() {
    return (
        
        <div className="container">
            <Ads></Ads>
            <div className="content">
            <h1> f en el chat<Icon icon="mdi:home" /></h1>
            </div>
            <Ads></Ads>
        </div>
        
    );
}