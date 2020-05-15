import React from 'react';
import { StoreServiceConsumer } from '../service-context'

const withService = () => (Wrapped) => {
    return (props) => {
        return (
            <StoreServiceConsumer>
            {
                (storeService) => {
                     return (<Wrapped {...props} 
                                      storeService={storeService} />);
                }
            }
            </StoreServiceConsumer>
        )
    }
};

export default withService;