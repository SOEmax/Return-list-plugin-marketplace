# Documentation on Api
________
## Function: *Returns a list of plugins on the marketplace*
Below is the format from explanation on **PAYLOAD**:
  - ___Request Payloads___
    + __Customize Request__
    + __Header structure(Method, content-Type, link)__
    + __Parameter Data type__

  - ___Response payloads___
    + __Header Structure(Content-Type of Response, with response Code)__
    + __DataTypes of each request__

  - __Example__  
___ 


## Request Payloads

### Customize Request
The request is customized as `https://api.zuri.chat/marketplace/plugins`

### Header structure
<table>
  <thead>
    <tr>
      <th>Method</th>
      <th>Api</th>
      <th>Content-type</th>
    </tr>
  </thead>
  <tbody>
      <tr>
        <td>GET</td>
        <td>https://api.zuri.chat/marketplace/plugins</td>
        <td>application/json</td>
      </tr>
  </tbody>
</table>

### Parameter Datatype
<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Optional</th>
    </tr>
  </thead>
  <tbody>
      <tr>
      </tr>
  </tbody>
</table>


## Response Payloads
The Response data from the server will be determined by the **Response Code**

### Header structure
<table>
  <thead>
    <tr>
      <th>Response Code</th>
      <th>Content-type</th>
      <th>Datatype of returned result</th>
    </tr>
  </thead>
  <tbody>
      <tr>
        <td>200</td>
        <td>application/json</td>
        <td>array</td>
      </tr>
       <tr>
        <td>404</td>
        <td>application/json</td>
        <td>object</td>
      </tr>
       <tr>
        <td>500</td>
        <td>application/json</td>
        <td>object</td>
      </tr>
  </tbody>
</table>

### Datatypes of Fields in Result
 
#### For Response Code 200
**_Note:_** The return data type is an instannce of`Array` and an `array of objects`
 <table>
  <thead>
    <tr>
      <th>
        Field Name
      </th>
      <th>
        Datatype
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>id</td>
      <td>string</td>
    </tr>
    <tr>
      <td>name</td>
      <td>string</td>
    </tr>
    <tr>
      <td>description</td>
      <td>string</td>
    </tr>    
    <tr>
      <td>develper_name</td>
      <td>string</td>
    </tr>
    <tr>
      <td>developer_email</td>
      <td>string</td>
    </tr>
    <tr>
      <td>template_url</td>
      <td>string</td>
    </tr>
    <tr>
      <td>sidebar_url</td>
      <td>string</td>
    </tr>
    <tr>
      <td>install_url</td>
      <td>string</td>
    </tr>
    <tr>
      <td>icon_url</td>
      <td>string</td>
    </tr>
    <tr>
      <td>approved</td>
      <td>boolean</td>
    </tr>
    <tr>
      <td>deleted</td>
      <td>boolean</td>
    </tr>
    <tr>
      <td>approved_at</td>
      <td>string</td>
    </tr>
    <tr>
      <td>created_at</td>
      <td>string</td>
    </tr>
     <tr>
      <td>updated_at</td>
      <td>string</td>
    </tr>
     <tr>
      <td>deleted_at</td>
      <td>string</td>
    </tr>

  </tbody>
</table>


#### For Response Code 404
**_Note:_**The return data type is an instance of `Object` 
<table>
  <thead>
    <tr>
      <th>
        Field Name
      </th>
      <th>
        Datatype
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>code</td>
      <td>integer &lt;int32&gt;</td>
    </tr>
    <tr>
      <td>message</td>
      <td>string</td>
    </tr>
  </tbody>
</table>


#### For Response Code 505
**_Note:_**The return data type is an instance of `Object` 
<table>
  <thead>
    <tr>
      <th>
        Field Name
      </th>
      <th>
        Datatype
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>code</td>
      <td>integer &lt;int32&gt;</td>
    </tr>
    <tr>
      <td>message</td>
      <td>string</td>
    </tr>
  </tbody>
</table>


_____

## Example
 
### Request Example
`https://api.zuri.chat/marketplace/plugins`

### Response Example

**_With Response Code 200_**  
This example returns the first object data in the array 
    
```json title="Returns List of plugins"
    [
      {
        approved: true,
        approved_at: "2021-09-10 16:11:19.788734956 +0200 CEST m=+8417.562674390",
        created_at: "2021-09-10 16:11:09.672268819 +0200 CEST m=+8407.446208225",
        deleted: false,
        deleted_at: "",
        description: "A Sales Prospects Plugin",
        developer_email: "shodown96@gmail.com",
        developer_name: "Elijah Soladoye",
        icon_url: "icon.png",
        id: "613b677d41f5856617552f1e",
        install_url: "https://sales.zuri.chat/install",
        name: "sales_prospects",
        sidebar_url: "https://sales.zuri.chat/sidebar",
        template_url: "https://sales.zuri.chat",
        updated_at: "2021-09-10 16:11:09.672277579 +0200 CEST m=+8407.446216983",
      },
      ...
    ]
```

**_With Response Code 404_**  

```json title="Plug in not found"
    {
      "code": 0,
      "message": "string"
    }
```

**_With Response Code 505_**  

```json title="Internal server error"
    {
      "code": 0,
      "message": "string"
    }
```
