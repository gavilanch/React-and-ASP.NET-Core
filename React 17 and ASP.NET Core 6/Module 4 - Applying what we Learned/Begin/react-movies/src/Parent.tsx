import { useContext } from 'react';
import Child from './Child';
import ValueContext from './ValueContext';

export default function Parent() {
    const value = useContext(ValueContext)
    return (
        <>
            <div>
                From the parent {value ? 'the value is true' : 'the value is false'}
            </div>
            <Child />

        </>
    )
}