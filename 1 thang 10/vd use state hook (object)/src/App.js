import React, { useState } from 'react';
function UserInfo() {
const [user, setUser] = useState({
name: "John",
age: 25
});
return (
<div>
<p>Tên: {user.name}</p>
<p>Tuổi: {user.age}</p>
<button onClick={() => setUser({ ...user, age: user.age + 1})}>
Tăng tuổi
</button>
</div>
);
}
export default UserInfo;

