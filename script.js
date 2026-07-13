// ページ内のすべての写真にクリックイベントを付与
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.photo-container img').forEach(img => {
        img.style.cursor = 'zoom-in';
        img.onclick = () => {
            const overlay = document.createElement('div');
            overlay.style.cssText = `
                position: fixed; top: 0; left: 0; width: 100%; height: 100%;
                background: rgba(0, 0, 0, 0.85); display: flex; 
                justify-content: center; align-items: center; z-index: 1000;
                opacity: 0; transition: opacity 0.3s;
            `;
            const fullImg = document.createElement('img');
            fullImg.src = img.src;
            fullImg.style.cssText = `max-width: 90%; max-height: 90%; border-radius: 10px; box-shadow: 0 0 20px rgba(0,0,0,0.5);`;
            
            overlay.appendChild(fullImg);
            document.body.appendChild(overlay);

            setTimeout(() => overlay.style.opacity = '1', 10);

            overlay.onclick = () => {
                overlay.style.opacity = '0';
                setTimeout(() => overlay.remove(), 300);
            };
        };
    });
});
