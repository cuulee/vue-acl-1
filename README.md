# Vue-ACL

### Install Vue-ACL in Vue
```javascript
import VueACL from 'acl'
Vue.use(VueACL);
```

### Using Vue-ACL

```Vue
<AclWrapper el="main" role="admin" allow="admin">
    ...
</AclWrapper>
```

### Using Vue-ACL with slot
```Vue
<AclWrapper el="main" role="admin" allow="admin">
    
    <div slot="deny">
        <h1>CONTENT NOT AVAILABLE</h1>
    </div>
    
    <h1>CONTENT AVAILABLE</h1>
    
</AclWrapper>
```

PROPS:

| Name  | Default | Description                                        | Type          |
|-------|---------|----------------------------------------------------|---------------|
| el    | div     | HTML/Vue component which content will be displayed | String        |
| role  | guest   | User role. eg.: guest,user,admin                   | String        |
| deny  | guest   | Control which roles will be denied                 | String/Array  |
| allow | admin   | Controle which roles will be allows                | String/Array  |

SLOTS: 

| Name    | Description                                        |
|---------|----------------------------------------------------|
| default | Default slot, displayed case role can access       |
| deny    | Content will be displayed case role cannot access. |