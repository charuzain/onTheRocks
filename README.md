# React + Vite

 npm install styled-component
 npm install react-router-dom  

<!-- error element: error bubble up...global error page -->
<!-- loader  , fetch the data even before page is render , prefecthing -->
 <!-- set async loader function and make sure it return something -->
 <!-- uselaoder data to acces loader data -->
 <!-- in appjs impoer loader , setup alias then in route where we want to fetch data use loader propert -->

 useNavigation Hook (React Router v6.4+)
useNavigation is a React Router Data API hook that lets you track the state of navigation in your app — like when a form is being submitted or a route is loading.

Why use it?
To detect when navigation is happening, such as:

Loading states between pages

Form submissions

Showing spinners/loaders

```
 import { useNavigation } from 'react-router-dom';
```

import { useNavigation } from 'react-router-dom';

function MyComponent() {
  const navigation = useNavigation();

  return (
    <div>
      {navigation.state === 'loading' && <p>Loading...</p>}
      {navigation.state === 'submitting' && <p>Submitting...</p>}
      <p>Main content here</p>
    </div>
  );
}

What does navigation.state return?
'idle' – no navigation happening

'loading' – route is loading

'submitting' – form is submitting


Use Case
You might use useNavigation in a layout or route component to:

Display a global loader when navigating between pages

Show a submit animation after a form post


<!-- context prop , pass data from parent where we have outlet to all the pages -->
<!-- const value = "some value or state"
<Outlet context = {{value}}> -->
<!-- use hook useOutletContext -->


<!-- Form component  react router dom-->