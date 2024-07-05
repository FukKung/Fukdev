document.addEventListener('DOMContentLoaded', function() {
    // ฟังก์ชันสำหรับแสดงเนื้อหาหลังจากเวลาที่กำหนด
    function showContent() {
        const loader = document.getElementById('loader');
        const content = document.getElementById('content');

        loader.style.opacity = 0; // ทำให้ Loader จางหายไป
        setTimeout(() => {
            loader.style.display = 'none'; // ซ่อน Loader
            content.style.display = 'block'; // แสดงเนื้อหา
        }, 500); // รอ 0.5 วินาทีเพื่อให้ animation จางหายเสร็จ
    }

    // ตรวจสอบว่า browser รองรับ animation
    const supportsAnimation = document.body.style.animation !== undefined;

    if (supportsAnimation) {
        // ถ้ารองรับ animation ให้ใช้ setTimeout เพื่อหน่วงเวลา
        setTimeout(showContent, 4000); // 4 วินาที
    } else {
        // ถ้าไม่รองรับ animation ให้แสดงเนื้อหาทันที
        showContent();
    }
});



const button = document.querySelector('.button');

button.addEventListener('click', () => {
  // เพิ่มโค้ดสำหรับการทำงานเมื่อคลิกปุ่มที่นี่
});

