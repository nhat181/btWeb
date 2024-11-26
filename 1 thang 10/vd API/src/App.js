import React, { createContext, useState, useContext } from 'react';
// 1. Tạo context
const ThemeContext = createContext();
function App() {
// 2. Tạo state lưu trữ chủ đề (theme)
const [theme, setTheme] = useState("light");
return (
// 3. Bao bọc component bằng ThemeContext.Provider
<ThemeContext. Provider value={{ theme, setTheme }}>
<Toolbar />
</ThemeContext.Provider>
);
}
function Toolbar() {
return (
<div>
<ThemedButton />
</div>
);
}
// 4. Component con sử dụng dữ liệu từ context
function ThemedButton() {
const { theme, setTheme} = useContext (ThemeContext); // Truy cập vào context
return (
<div>
<p>Chủ đề hiện tại: {theme}</p>
<button onClick={() => setTheme (theme === "light"? "dark": "light")}>
Đổi chủ đề
</button>
</div>
);
}
export default App;