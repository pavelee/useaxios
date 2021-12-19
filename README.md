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

## Axios

It's popular and reliable request library for js projects

Read more here: [axios docs](https://axios-http.com/docs/intro)

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

    const makeRequest() => {
        // let's execute request
        request(
            {
                url: 'http://myapiaddress.com
            } // we pass axios params, use offical axios docs for more details
        );
    }
}

```

## Case when you need to handle more than one request to API in a single component

Common case when you have a one component with few features that require to communicate with API

Let's assume you have a component that allow to save or remove a resource from API

We can define more than one hook, but we need to rename imported variables from hooks.

```
import { useAxios } from '@pavele/useaxios';

const MyCoolComponent = (props) => {
    const { request: saveRequest, response: saveResponse, error: saveError, loading: saveLoading } = useAxios();
    const { request: removeRequest, response: removeResponse, error: removeError, loading: removeLoading } = useAxios();

    const saveResource(id, data) => {
        request(
            {
                url: `http://myapiaddress.com/myresource/${id}`,
                method: 'POST',
                data: data
            }
        );
    }

    const removeResource(id) => {
        request(
            {
                url: `http://myapiaddress.com/myresource/${id}`,
                method: 'DELETE'
            }
        );
    }    
}

```