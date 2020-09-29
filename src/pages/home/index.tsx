import React from 'react';
import HomeComponent from '@/components/home/App';

function Home(props: any) {

    return (
        <div>
            <HomeComponent {...props} />
        </div>
    )
}

export default Home;