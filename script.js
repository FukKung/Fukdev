document.addEventListener('DOMContentLoaded', function() {
  const loadingText = document.querySelector('.loading-text');
  const textToType = "กำลังโหลด ใจเย็นๆ ครับ";
  let charIndex = 0;

  function typeWriter() {
      if (charIndex < textToType.length) {
          loadingText.textContent += textToType.charAt(charIndex);
          charIndex++;
          setTimeout(typeWriter, 100); // ปรับความเร็วการพิมพ์ได้ที่นี่
      }
  }

  function showContent() {
      const loader = document.getElementById('loader');
      const content = document.getElementById('content');
      loader.style.opacity = 0;
      setTimeout(() => {
          loader.style.display = 'none';
          content.style.display = 'block';
      }, 500);
  }

  // เริ่มพิมพ์ข้อความและแสดงเนื้อหาหลังจากพิมพ์เสร็จ
  typeWriter();
  setTimeout(showContent, (textToType.length + 1) * 100);
});




const button = document.querySelector('.button');

button.addEventListener('click', () => {
  // เพิ่มโค้ดสำหรับการทำงานเมื่อคลิกปุ่มที่นี่
});

