

import HomeStore from '@/components/home/store';
import APPStore from './APP';

export default {
    APPStore: APPStore,
    home: {
        ...HomeStore
    }
}

