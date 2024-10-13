import { Icon } from '@iconify/react';
import { Ads } from 'components/ads';

export default function Page() {
    return (

        <div className="container">
            <Ads></Ads>
            <div className="content"></div>
            <Ads></Ads>
        </div>
        
    );
}