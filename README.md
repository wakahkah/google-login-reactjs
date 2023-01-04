# Google Login Reactjs
## On Google Cloud platform
1. Create a new project (just-try-demo)
2. Go to APIs & Services
3. Config OAuth consent screen
    a. User type: External
    b. Enter app name & user support email & developer contact information
    c. Click "Save and continue"
    d. Scopes: no need to enter this time
    e. Enter the testing user: kahwork.dev@gmail.com
    g. Click "Save and return to dashboard"
4. Credentials
    a. Create credemtials -> OAuth client ID
    - Application type: Web Apllication
    - Nmae: test google login on reactjs
    - Authorized JS origins:
    1. http://localhost
    2. http://localhost:3000
    - Authorized redirect URIs:
    1. http://localhost
    2. http://localhost:3000
    b. Save the OAuth client inform

## Reactjs
1. Create react project
```
npx create-react-app google-login-reactjs
```
2. Go to public/index.html add following line in <head>
```
<script src="https://accounts.google.com/gsi/client" async defer></script>
```



