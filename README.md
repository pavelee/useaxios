# UseAxios

## What's that?
It's hook for react developers to handle REST API. Based on popular axios library.

## Installation

npm
```
npm install @pavele/useaxios
```

yarn
```
yarn add @pavele/useaxios
```

## Simple usage

```
import { useAxios } from '@pavele/useaxios';

const MyCoolComponent = (props) => {
    const { request, response, error, loading } = useAxios(
        {}, // optional, default axios parameters,
        (response) => { console.log(response) }, // optional, define what should happen on success
        (error) => { console.log(error) }, // optional, define what should happen on failure
        (loading) => { console.log(loading) } // optional, define what should happen on loading state
    );

    conse makeRequest() => {
        // let's execute request
        request(
            {
                url: 'http://myapiaddress.com
            } // we pass axios params
        );
    }
}

```
