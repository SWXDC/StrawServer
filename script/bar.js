// 獲取 navbar 容器
const navbar = document.getElementById('navbar');

// 獲取當前頁面的網址
const currentPage = window.location.pathname.split('/').pop(); // 獲取當前文件名稱

// 動態生成導航欄 HTML 結構
navbar.innerHTML = `
    <nav class="navbar">
        <button class="sidebar-toggle"></button>
        <div class="Logo">
            <a href="/"><img src="/img/server-icon.png" alt="Server Logo" /> </a>
            <span><a href="/">吸管伺服器</a></span>
        </div>
        <div class="navbar-right">
            <a class="${currentPage === 'index.html' | currentPage === '' ? 'CurrentPage' : ''}" href="/">首頁</a>
            <a class="${currentPage === 'rules.html' ? 'CurrentPage' : ''}" href="/rules.html">規定</a>
            <a class="${currentPage === 'sponsor.html' ? 'CurrentPage' : ''}" href="/sponsor.html">贊助</a>
            <a href="https://tutorial.strawserver.com/">教學</a>
        </div>
    </nav>
`;

sidebar.innerHTML = `
        <aside class="sidebar">
            <a class="${currentPage === 'index.html' | currentPage === '' ? 'CurrentPage' : ''}" href="/">首頁</a>
            <a class="${currentPage === 'rules.html' ? 'CurrentPage' : ''}" href="/rules.html">規定</a>
            <a class="${currentPage === 'sponsor.html' ? 'CurrentPage' : ''}" href="/sponsor.html">贊助</a>
            <a href="https://tutorial.strawserver.com/">教學</a>
        </aside>
`;